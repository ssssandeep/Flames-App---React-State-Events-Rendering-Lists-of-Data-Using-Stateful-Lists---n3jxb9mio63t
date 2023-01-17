import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    const [answer, setAnswer] = useState('');
    const [inputs, setInputss] = useState({input1:"",input2:""});
    
    const handleInputChange = (event) => {
        const id = event.target.getAttribute("data-testid");
        const data = event.target.value;
        if(id === "input1"){
            let obj = {...inputs}
            obj.input1 = data;
            setInputss(  obj )
        }else if(id === "input2"){
            let obj = {...inputs}
            obj.input2 = data;
            setInputss( obj )
        }
        
    }

    const handleClear = () => {
        setInputss({input1:"", input2:""})
        setAnswer('')
    }

    const find = (str1,str2 ) => {
        let count = 0;
        str1 = str1.toLowerCase().split('');
        str2 = str2.toLowerCase().split('');
        // const arr = new Array(26);
        // arr.fill(0);
        var freqArr = {};
        
        str1.forEach((e,i) => {
            if (freqArr[e]) {
                freqArr[e]++;
             } else {
                freqArr[e] = 1;
             }
        });
        console.log(freqArr)
        str2.forEach((e,i) => {
            if (freqArr[e]) {
                freqArr[e]--;
             } else {
                freqArr[e] = -1;
             }
        })
        console.log(freqArr)
        let x =0;
        Object.values(freqArr).forEach(e => {
            x = x + Math.abs(e);
        })
        console.log("Returning xx ="+x);
        console.log(x%6)
        return x;
     };

    const calculateRelationship = () => {
        console.log("calculating relationship")
        if(inputs.input1.length === 0){
            setAnswer('Please Enter valid input')
            return;
        }else if(inputs.input2.length === 0){
            setAnswer('Please Enter valid input')
            return;
        }
        else{
            
            const x = find(inputs.input1 , inputs.input2)%6;
            let ans = ''
            switch(x){
                case 1: ans="Friends";break;
                case 2: ans="Love";break;
                case 3: ans="Affection";break;
                case 4: ans="Marriage";break;
                case 5: ans="Enemy";break;
                case 0: ans="Siblings";break;

            }
            setAnswer(ans);
        }
        
    }
    
    return(
        <div id="main">
            <input data-testid="input1" onChange={handleInputChange} value={inputs.input1} />
            <input data-testid="input2" onChange={handleInputChange} value={inputs.input2} />
            <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={handleClear}>Clear</button>
            <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}


export default App;
