import React from "react";

function Resistance(props) {
    let style;
    if(props.data.multiplier === 0) style = "bg-green-400 flex justify-between p-2 px-4 rounded-lg";
    if(props.data.multiplier === 0.25) style = "bg-green-300 flex justify-between p-2 px-4 rounded-lg";
    if(props.data.multiplier === 0.5) style = "bg-green-200 flex justify-between p-2 px-4 rounded-lg";
    if(props.data.multiplier === 1) style = "bg-slate-100 flex justify-between p-2 px-4 rounded-lg";
    if(props.data.multiplier === 2) style = "bg-red-100 flex justify-between p-2 px-4 rounded-lg";
    if(props.data.multiplier === 3) style = "bg-red-200 flex justify-between p-2 px-4 rounded-lg";
    if(props.data.multiplier === 4) style = "bg-red-300 flex justify-between p-2 px-4 rounded-lg";

    console.log(props);
    return(
        <div className={style}>
            <p className="font-bold">{props.data.name} :</p>
            <p>{props.data.multiplier}</p>
        </div>
    )
}

export default Resistance;