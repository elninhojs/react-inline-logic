export const If = ({condition, children})=>(
    children = !condition?'':children 
);

export const Else = ({condition, children})=>(
    children = condition?'':children 
);

export const For = ({list, onLoop, onLoopComplete=()=>{}, onLoopBreakIf=()=>false, onLoopContinueIf=()=>false, r=[], index=-1, hasLoop})=>{
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
export const IfNot = Else;
export const Repeat = For;
export const Loop = For;
export const IsTrue = If;
export const IsFalse = Else;