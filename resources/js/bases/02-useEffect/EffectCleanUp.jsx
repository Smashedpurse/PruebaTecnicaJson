import { useState } from "react";
import {Message} from "./Message";

export const EffectCleanUp = () => {
    const [showCommponent, setSetshowCommponent] = useState(false);

    const handleChangeFlag = () => {
        setSetshowCommponent((prev) => !prev);
    };

    return (
        <>
            <div className="text-white">
                <h1>EffectCleanUp</h1>
            </div>
            <hr className="text-white" />

            <h3 className="text-white">
                Componente:{""}
                {showCommponent === false
                    ? " Componente Desmontado"
                    : " Componente Montado"}
            </h3>

            {showCommponent && <Message />}

            <button onClick={handleChangeFlag} className="btn btn-warning">
                {!showCommponent ? "Montar" : "Desmontar"}
            </button>
        </>
    );
};
