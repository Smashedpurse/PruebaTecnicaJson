import { useState } from "react";

export const MultipleCounter = () => {
    const [Counters, setCounters] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = Counters;

    const handleCounter = (counterName) => {
        setCounters((Counters) => ({
            ...Counters,
            [counterName]: Counters[counterName] + 1
        }));
    };


    return (
        <>
            <div>MultipleCounter</div>
            <hr className="border border-white" />

            <h3 className="text-white">Counters</h3>

            <div>
                <h5 className="text-white">Counter 1: {counter1}</h5>
                <h5 className="text-white">Counter 2: {counter2}</h5>
                <h5 className="text-white">Counter 3: {counter3}</h5>
            </div>

            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => handleCounter("counter1")}
                >
                    Counter 1
                </button>
                <button
                    className="btn btn-primary ms-3"
                    onClick={() => handleCounter("counter2")}
                >
                    Counter 2
                </button>
                <button
                    className="btn btn-primary ms-3"
                    onClick={() => handleCounter("counter3")}
                >
                    Counter 3
                </button>
            </div>

            <hr className="border border-white"/>
        </>
    );
};
