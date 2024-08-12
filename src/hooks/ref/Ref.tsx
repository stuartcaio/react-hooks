import { useEffect, useRef, useState } from "react"

export default function Ref(){
    const paragraph = useRef();
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if(showText){
            paragraph.current.innerHTML = "ipsom Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum et magni temporibus minima doloremque cumque, modi earum veritatis";
        } else{
            paragraph.current.innerHTML = "";
        }
    }, [showText]);

    return (
        <div>
            <p ref={paragraph}></p>

            <button onClick={() => setShowText(!showText)}>{showText ? "Hide" : "Show"} text</button>
        </div>
    )
}