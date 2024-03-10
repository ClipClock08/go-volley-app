import React from "react";
import './Season.css'
import BestPlayer from "./season/BestPlayer";
import Semifinals from "./season/Semifinals";
import Result from "./season/Result";

const Season = () => {
    return <>
        <Result/>
        <Semifinals/>
        <BestPlayer/>
    </>
}

export default Season