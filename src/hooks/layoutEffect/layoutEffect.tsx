import { useEffect, useLayoutEffect, useRef } from "react"

export default function LayoutEffect(){
    const paragraph = useRef();

    useEffect(() => {
        paragraph.current.innerHTML += "Caio";
        console.log(`Use effect: ${paragraph.current.innerHTML}`);
    }, []);

    useLayoutEffect(() => {
        console.log(`Layout effect: ${paragraph.current.innerHTML}`);
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1rem"}}>
            <h1>Layout Effect</h1>

            <p ref={paragraph}>My name is </p>
        </div>
    )
}