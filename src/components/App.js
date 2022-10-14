import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Active from "../pages/Active";
import Completed from "../pages/Completed";
import SharedLayout from "./SharedLayout";
import { TodoContext } from "../TodoContext";

function App() {

    const [list, setList] = useState([]);

    return <TodoContext.Provider value={{ list, setList }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="active" element={<Active />} />
                    <Route path="completed" element={<Completed />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </TodoContext.Provider>
}


export default App;