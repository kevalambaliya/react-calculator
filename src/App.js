import React, { useState } from "react";

const Cal = () => {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState(0);

  const handleInput = (e) => {
    setNum2(e.target.value);
  };

  const handle=(event)=>{
    if(event == "+"){
      setResult(Number(num1)+ Number(num2))
    }
    else if(event == "-"){
      setResult(Number(num1)- Number(num2))
    }
    else if(event == "*"){
      setResult(Number(num1)*Number(num2))
    }
    else if(event == "/"){
      setResult(Number(num1)/ Number(num2))
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Number1"
        onChange={(e) => setNum1(e.target.value)}
      />
      <input type="number" placeholder="Enter Number2" onChange={handleInput} />
      <br />
      <button onClick={()=>{handle("+")}}>+</button>
      <button onClick={()=>{handle("-")}}>-</button>
      <button onClick={()=>{handle("*")}}>*</button>
      <button onClick={()=>{handle("/")}}>/   </button>
      <h1>Result:{result}</h1>
    </div>
  );
};

export default Cal;
