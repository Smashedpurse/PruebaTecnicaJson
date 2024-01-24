import { useState } from "react";

export const Counter = () => {
    
    const [counter, setCounter] = useState(0)

    function handleClickAdd(){
        setCounter(counter + 1);
    }

    function handleClickLess(){
        setCounter(counter - 1);
    }

    return (
        <>
            <div>
                <h1 className="text-white text-center">Use State</h1>
            </div>
            
            <hr />

            <div className="text-white text-center">
                {counter}
            </div>

            <div className="d-flex justify-content-center mt-3">
                <button
                  className="btn btn-success ml-2"
                  onClick={handleClickAdd}>
                    Aumentar
                </button>

                <button
                  className="btn btn-danger ms-2"
                  onClick={handleClickLess}>
                    Restar
                </button>
            </div>

            <hr className="border border-white"/>
        </>
    );
};

export default Counter;
