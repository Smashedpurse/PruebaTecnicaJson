import { number } from "prop-types";
import { useEffect, useState } from "react";

const handleFetchRandonNumber = () => {
    const url =
        "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new";

        return fetch(url)
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          throw new Error('500 Internar Server Error');
          return +data;
        });
    };


export const RandonNumber = () => {
    const [RandonNumber, setRandonNumber] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState()

    useEffect(() => {
        handleFetchRandonNumber()
        .then(setRandonNumber)
        .catch(error =>{setIsError(error.message)})
        return () => {};
    }, []);

    useEffect(() => {
        if (number) setIsLoading(false);
    }, [number]);

    useEffect(() => {
        if (number) setIsLoading(false);    
    }, [isError])
    

    return (
        <>
            {isLoading ?  <h2>Loading.....</h2>: <h1 className="text-white">RandonNumber {RandonNumber} </h1>}
            {
              !isLoading && isError && <h3 className="text-white">{isError}</h3>  
            }
            <hr className="text-white" />
        </>
    );
};
