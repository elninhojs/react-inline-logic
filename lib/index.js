import React, { Fragment } from 'react'

const If = ({condition, children})=>(
    children = !condition?'':children 
);

const Else = ({condition, children})=>(
    children = condition?'':children 
);

const For = ({list=[], onLoop=(item, index)=>{}, onLoopComplete=()=>{}, onLoopBreakIf=()=>false, onLoopContinueIf=()=>false})=>{
    let r=[], index=-1, hasLoop=false;
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
const IfNot = Else;
const Repeat = For;
const Loop = For;
const IsTrue = If;
const IsFalse = Else;

export {If, Else, For, IfNot, Repeat, Loop, IsFalse, IsTrue};