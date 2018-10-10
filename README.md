# React Inline Logic component
This component encapsulates some opperations as if, else, for and repeat to be used as one Tag inside JSX to compose some logical expression inline.

### What problem this component solves?
When you have small logic inside your .jsx and you wish to make it more readeble.
When you are implementing one functional .jsx component and wish to compose the logic inline.
When you whant to repeat or show one list of elements and don't whant to create one new extra function do to it, you can use this component.

### What is in the box?
You can work with the folow expressions as one jsx Tag:
```html
<If/> <Else/> <For/> <IsTrue/> <IsFalse/> <Loop/> <Repeat/>
```
### Installation
```sh
$ npm install react-inline-logic
```
### Import
```javascript
import {If, For, Else, IsTrue, IsFalse, Loop, Repeat} from 'react-inline-logic';
```
### Implementation examples

#### If and Else
```javascript
...
//using render method
render(){
    return (<div>
        <If condition={this.state.showDiv}>
            <div>
                This is my div to be showed
                <span>Cool!</span>
            </div>
        </If>
        <Else condition={this.state.showDiv}>
            <div>
                This must to be showed when this.state.showDiv is false
            </div>
        </Else>
    </div>);
}
```

```javascript
...
//using in one functional component
const MyConditionalDiv = ({visible=true})=>(<div>
        <If condition={visible}>
            <div>
                This is my div to be showed
                <span>Cool!</span>
            </div>
        </If>
        <Else condition={visible}>
            <div>
                This must to be showed when this.state.showDiv is false
            </div>
        </Else>
    </div>);
}
//if you hate the if in your logic you can use these alias 
const MyConditionalDiv = ({visible=true})=>(<div>
        <IsTrue condition={visible}>
            <div>
                This is my div to be showed
                <span>Cool!</span>
            </div>
        </IsTrue>
        <IsFalse condition={visible}>
            <div>
                This must to be showed when this.state.showDiv is false
            </div>
        </IsFalse>
    </div>);
}
//or this
const MyConditionalDiv = ({visible=true})=>(<div>
        <If condition={visible}>
            <div>
                This is my div to be showed
                <span>Cool!</span>
            </div>
        </If>
        <IfNot condition={visible}>
            <div>
                This must to be showed when this.state.showDiv is false
            </div>
        </IfNot>
    </div>);
}

```

#### For, Repeat and Loop
```javascript
...
//using render method
//this pseudo code will render one select with tree different options.
render(){
    let list = [{id:'au', value:'Australia', text:'AUS'},{id:'br', value:'Brazil', text:'BRZ'},{id:'nz', value:'New Zeland', text:'NZL'}];

    return (<select>
        <For list={list} onLoop={(item, index)=>(
            <option key={item.id} value={item.id}>{item.value}</option>
        )}/>
        </select>);
}
```

```javascript
...
//functional component
//this pseudo code will render one select with tree different options.
const MySelectDemo = ({list=[]})=>(
    <select>
        <For list={list} onLoop={(item, index)=>(
            <option key={item.id} value={item.id}>{item.value}</option>
        )}/>
    </select>
);
```

```javascript
...
//breaking the loop using onLoopBreakIf method.
render(){
    let list = [{id:'au', value:'Australia', text:'AUS'},{id:'br', value:'Brazil', text:'BRZ'},{id:'nz', value:'New Zeland', text:'NZL'}];

    return (<select>
        <For list={list} onLoop={(item, index)=>(
            <option key={item.id} value={item.id}>{item.value}</option>
        )} onLoopBreakIf={(item, index)=>item.id==='br'}/>
        </select>);
}
```

```javascript
...
//continuing the loop using onLoopContinueIf method.
//the pseudo code will render just the first and last option.
render(){
    let list = [{id:'au', value:'Australia', text:'AUS'},{id:'br', value:'Brazil', text:'BRZ'},{id:'nz', value:'New Zeland', text:'NZL'}];

    return (<select>
        <For list={list} onLoop={(item, index)=>(
            <option key={item.id} value={item.id}>{item.value}</option>
        )} onLoopContinueIf={(item, index)=>item.id==='br'}/>
        </select>);
}
```

```javascript
...
//Using onLoopComplete to count the results for instance
render(){
    let list = [{id:'au', value:'Australia', text:'AUS'},{id:'br', value:'Brazil', text:'BRZ'},{id:'nz', value:'New Zeland', text:'NZL'}];

    return (<select>
        <For list={list} onLoop={(item, index)=>(
            <option key={item.id} value={item.id}>{item.value}</option>
        )} onLoopComplete={(list, index)=>this.state.optionsCount = index}/>
        </select>);
}
```

#### repo
https://github.com/elninhojs/react-inline-logic

License
----

MIT
