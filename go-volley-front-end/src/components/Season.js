import React from "react";
import './Season.css'
import Semifinals from "./season/Semifinals";
import Result from "./season/Result";
import {useParams} from "react-router-dom";
import BestPlayer from "./season/BestPlayer";
import Semifinals2 from "./season/Semifinals2";
import Result2 from "./season/Result2";

const Season = () => {
    let {id} = useParams();
    if (id == 1) {
        return <>
            <Result/>
            <Semifinals/>
            <BestPlayer/>
        </>
    } else {
        return <>
            <Result2/>
            <Semifinals2/>
            {/*<BestPlayer/>*/}
        </>
    }
}

export default Season