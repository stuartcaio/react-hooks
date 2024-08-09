import { useEffect, useState } from "react"

export default function State(){
    const [countryName, setCountryName] = useState("Brasil");

    return (
        <div>
            <h1>{countryName || "A"}</h1>
            <button onClick={() => setCountryName("Brasil")}>Brasil</button>
            <button onClick={() => setCountryName("Brazil")}>Brazil</button>
        </div>
    )
}