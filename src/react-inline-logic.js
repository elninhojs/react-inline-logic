import React from 'react'

module.exports.If = ({condition, children})=>(
    children = !condition?'':children 
);

module.exports.Else = ({condition, children})=>(
    children = condition?'':children 
);

module.exports.For = ({list=[], onLoop=(item, index)=>(<div key={index}>{index}</div>), onLoopComplete=()=>{}, onLoopBreakIf=()=>false, onLoopContinueIf=()=>false, r=[], index=-1, hasLoop})=>{
    for(let i of list){
        index++;
        hasLoop=true;
        if(onLoopBreakIf(i, index)) break;
        if(onLoopContinueIf(i, index)) continue;
        r.push(onLoop(i, index));
    }
    if(hasLoop){
        onLoopComplete(r,index);
    }
    return r;
};

//alias cases
module.exports.IfNot = module.exports.Else;
module.exports.Repeat = module.exports.For;
module.exports.Loop = module.exports.For;
module.exports.IsTrue = module.exports.If;
module.exports.IsFalse = module.exports.Else;