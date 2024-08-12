import { useEffect, useState } from "react"

export default function Effect(){
    const [value, setValue] = useState(0);
    const [factorialValue, setFactorialValue] = useState(0);

    useEffect(() => {
        let currentFactorialCalculated = 0;

        for(let i = 0; i < value; i++){
            if(currentFactorialCalculated === 0){
                currentFactorialCalculated = 1;
            } else{
                currentFactorialCalculated = currentFactorialCalculated * (i + 1);
            }
        }

        setFactorialValue(currentFactorialCalculated);
    }, [value]);

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "0.5rem", width: "20%", padding: "1rem"}}>
            <h3>Value: {value}</h3>
            <h3>Doubled value: {factorialValue}</h3>
            <button onClick={() => setValue(value + 1)}>Add Value</button>
        </div>
    )
}