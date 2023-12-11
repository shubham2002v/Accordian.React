import React, { useState } from 'react';
import {questions} from './Api';
import MyAccordian from './MyAccordian';


const Accordian = () => {
    const [data, setData] = useState(questions);

    return (


        <>
        <section className='main-div'>
            <div className="headtitle"><h1>React Accordion Page</h1></div>
            {data.map((val) => {
                const {id }=val;
                return <MyAccordian key={id} {...val}/>
            })}
            </section>
        </>
    );
};

export default Accordian;
