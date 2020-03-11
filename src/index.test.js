import React from 'react';
const Enzyme = require('enzyme');
const { shallow, mount } = Enzyme;
const Adapter = require('enzyme-adapter-react-16');
const { If, Else, IfNot, For, Repeat, Loop, IsTrue, IsFalse } = require('../lib/index');

Enzyme.configure({ adapter: new Adapter() });

describe('Inline Logic react component pre definition', () => {
 it('<If/> should be defined', () => {
   expect(<If></If>).toBeDefined();
 });

 it('<Else/> should be defined', () => {
    expect(<Else></Else>).toBeDefined();
  });

  it('<IfNot/> should be defined', () => {
    expect(<IfNot></IfNot>).toBeDefined();
  });

  it('<For/> should be defined', () => {
    expect(<For/>).toBeDefined();
  });
  it('<Repeat/> should be defined', () => {
    expect(<Repeat/>).toBeDefined();
  });
  it('<Loop/> should be defined', () => {
    expect(<Loop/>).toBeDefined();
  });
  it('<IsTrue/> should be defined', () => {
    expect(<IsTrue/>).toBeDefined();
  });
  it('<IsFalse/> should be defined', () => {
    expect(<IsFalse/>).toBeDefined();
  });

});

describe('If test cases', () => {
  it('<If/> with true contition should render ok', () => {
    const vdom = shallow(
      <If condition={true}>
        <div className="inner-if-div"/>
      </If>
    );
    const vdom2 = shallow(
      <If condition={false}>
        <div className="inner-if-div"/>
      </If>
    );

  expect(vdom.find('div').length).toEqual(1);
  expect(vdom2.find('div').length).toEqual(0);
  
  });
 });

 describe('Else test cases', () => {
  it('<Else/> with true contition should render ok', () => {
    const vdom = shallow(
      <Else condition={true}>
        <div className="inner-if-div"/>
      </Else>
    );
    const vdom2 = shallow(
      <Else condition={false}>
        <div className="inner-if-div"/>
      </Else>
    );
  expect(vdom.find('div').length).toEqual(0);
  expect(vdom2.find('div').length).toEqual(1);
  
  });
 });

 describe('For test cases', () => {
  it('<For/> should render elements calling the onLoop method correctly', () => {
    let list = [{id:1, value:'uno'}, {id:2, value:'dos'}];
    const dom = mount(<For list={list} onLoop={(item)=>
          <div key={item.id} className={item.value} id={item.id}>{item.value}</div>
        }/>
      );
    
    expect(dom.find('div').length).toEqual(2);
    expect(dom.find('div.uno').length).toEqual(1);
    expect(dom.find('div.dos').length).toEqual(1);
    
    dom.unmount();
  
  });

  it('<For/> should render elements calling the onLoopComplete correctly', () => {
    let list = [{id:1, value:'uno'}, {id:2, value:'dos'}];
    let complete = false;
    let rList = [];
    let index = 0;
    const dom = mount(
      <For list={[]} onLoop={(item)=>
        <div key={item.id} className={item.value} id={item.id}>{item.value}</div>
      } onLoopComplete={()=>complete=true}/>
    );
    expect(complete).toEqual(false);
    dom.unmount();
    const dom2 = mount(
      <For list={list} onLoop={(item)=>
        <div key={item.id} className={item.value} id={item.id}>{item.value}</div>
      } onLoopComplete={(l, i)=>{complete=true; rList=l; index=i;}}/>
    );
    expect(complete).toEqual(true);
    expect(rList.length).toEqual(2);
    expect(index).toEqual(1);
    dom2.unmount();
  });
 
 it('<For/> should render elements calling the onLoopBreakIf correctly', () => {
  let list = [{id:1, value:'uno'}, {id:2, value:'dos'}, {id:3, value:'tree'}];
  const dom = mount(
    <For list={list} onLoop={(item)=>
      <div key={item.id} className={item.value} id={item.id}>{item.value}</div>
    } onLoopBreakIf={(item, index)=>index===1}/>
  );
  expect(dom.find('div').length).toEqual(1);
  dom.unmount();
  
  });

  it('<For/> should render elements calling the onLoopContinueIf correctly', () => {
    let list = [{id:1, value:'uno'}, {id:2, value:'dos'}, {id:3, value:'tree'}];
    const dom = mount(
      <For list={list} onLoop={(item)=>
        <div key={item.id} className={item.value} id={item.id}>{item.value}</div>
      } onLoopContinueIf={(item, index)=>item.id===2}/>
    );
    expect(dom.find('div').length).toEqual(2);
    expect(dom.find('div.dos').length).toEqual(0);
    expect(dom.find('div.uno').length).toEqual(1);
    expect(dom.find('div.tree').length).toEqual(1);
    dom.unmount();
    
    });
});