import React from "react";

/**
 * Resistance component: Renders a single resistance for a Pokémon, indicating the type and its damage multiplier.
 *
 * @param {object} props - The props object containing resistance data.
 * @prop {string} props.data.name - The name of the type resisted.
 * @prop {number} props.data.multiplier - The damage multiplier for the resisted type (0 to 4).
 */
function Resistance(props) {

    const { name, multiplier } = props.data;

    // Use a lookup object for better maintainability and readability
    const styleMap = {
        0: "bg-green-400", 
        0.25: "bg-green-300", 
        0.5: "bg-green-200", 
        1: "bg-slate-100", 
        2: "bg-red-100", 
        3: "bg-red-200", 
        4: "bg-red-300", 
    };

    const style = styleMap[multiplier] || "bg-gray-300"; // Default to gray for unknown multipliers

    return (
        <div className={`flex justify-between p-2 px-4 rounded-lg ${style}`}>
          <p className="font-bold">{name} :</p>
          <p>{multiplier}</p>
        </div>
      );
    }
    
    export default Resistance;