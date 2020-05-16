import React, { useState } from 'react'
import Result from './Result'

const Results = (props) => {
    const [ single, setSingle ] = useState(-1)

    const onClick = (params) => {
        console.log(params.target.id)
        const index = props.results.findIndex(res => res.name === params.target.id)
        console.log(props.results[index].name)
        setSingle(index)
        props.sifirla(1)
    }

    if(single != -1 && props.nerden === 1){
        return <Result result = {props.results[single]}/>
    }
    else if(props.results.length>10){
        return (
          <div>
            too many matches, specify another filter
          </div>
        )
    }
    else if(props.results.length === 1){
        return(
            <Result result = {props.results[0]}/>
        )
    }
    else{
        return(
            <div>
                {props.results.map(eleman=> <div key={eleman.name}>
                    {eleman.name}<button id={eleman.name} onClick={onClick}>show</button>
                </div>)}
            </div>
        )
    }

}

export default Results