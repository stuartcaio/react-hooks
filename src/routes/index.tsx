import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memo from "../hooks/memo/Memo";
import State from "../hooks/state/State";
import Effect from "../hooks/effect/Effect";
import LayoutEffect from "../hooks/layoutEffect/layoutEffect";
import Ref from "../hooks/ref/Ref";
import Reducer from "../hooks/reducer/Reducer";
import Context from "../hooks/context/Context";
import Callback from "../hooks/callback/Callback";
import ImperativeHandle from "../hooks/imperativeHandle/ImperativeHandle";
import App from "../App";

export default function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/state" element={<State />} />
                <Route path="/effect" element={<Effect />} />
                <Route path="/layoutEffect" element={<LayoutEffect />} />
                <Route path="/ref" element={<Ref />} />
                <Route path="/reducer" element={<Reducer />} />
                <Route path="/context" element={<Context />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/imperativeHandle" element={<ImperativeHandle />} />
                <Route path="/memo" element={<Memo />} />
            </Routes>
        </BrowserRouter>
    )
}