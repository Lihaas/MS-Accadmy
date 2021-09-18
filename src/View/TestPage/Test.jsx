import { useContext, useEffect, useState } from "react"
import Instruction from "./Instruction";
import TestPage from "./Index";
import TestContext from "../../Store/testPageContext";
import Axios from "axios";

const Test = (props) =>{
    const {start,endHandler} = useContext(TestContext)
    if(props.timer===true)
    {
        endHandler()
    }
    props.starttimer(start)
    // console.log(props.timer); 
    return(
        <>
        {
            start?
            <TestPage />
            :
            <Instruction />
        }
        </>
    )
}

export default Test