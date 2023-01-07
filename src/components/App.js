import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    const [answer, setAnswer] = useState('');
    const [inputs, setInputss] = useState({input1:"",input2:""});
    
    const handleInputChange = (event) => {
        const id = event.target.getAttribute("data-testid");
        const data = event.target.value;
        console.log(data);
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

    const commonCharacterCount = (str1 = '', str2 = '') => {
        let count = 0;
        str1 = str1.split('');
        str2 = str2.split('');
        str1.forEach(e => {
           if (str2.includes(e)) {
              count++;
              str2.splice(str2.indexOf(e), 1);
           };
        });
        return count;
     };

    const calculateRelationship = () => {
        console.log("calculating relationship")
        const x = inputs.input1.length + inputs.input2.length;
        const y = commonCharacterCount(inputs.input1 , inputs.input2)
        const z = (x-y)%6;
        let ans = ''
        switch(z){
            case 1: ans="Friends";break;
            case 2: ans="Love";break;
            case 3: ans="Affection";break;
            case 4: ans="Marriage";break;
            case 5: ans="Enemy";break;
            case 6: ans="Siblings";break;
        }
        setAnswer(ans);
    }
    return(
        <div id="main">
            <input data-testid="input1" onChange={handleInputChange}  />
            <input data-testid="input2" onChange={handleInputChange}  />
            <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship</button>
            <button data-testid="clear">Clear</button>
            <h3 data-testid="answer">{answer}</h3>
        </div>
    )
}


export default App;
