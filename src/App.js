
import './App.css';
import Form from './components/Form';
import BmiScore from './components/BmiScore';
import Bmilist from './components/Bmilist';
import { useState } from 'react';

function App() {
  const [bmi, setBmi] = useState("00")
  const [bmiType, setbmiType] =  useState("No input added")
  const [bmiRange, setBmiRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  })
  // let bmi = 45
  // const  changeBmi = () => {
  //   setbmi(bmi+ 10)
  //   console.log(bmi);
  // }

  // const calBMI = (w, h) => {
  //     return (w/ (h * h)).toFixed(2);
  // };

  // in arrow function
  const calBMI = (w, h) => (w/ (h*h)).toFixed(2);

  const weightType = (bmi) => {
    if (bmi< 18.5){
      return "Unerweight";
    }
    else if (18.5 < bmi && bmi < 24.9){
      return "Normal"
    }
    else if (24.9 < bmi && bmi < 29.9){
      return "Over Weight";
    }
    else if(29.9 < bmi && bmi < 34.9){
      return "Obesity Class I";
    }
    else if (34.9 < bmi && bmi < 39.9){
      return "Obesity Class II";
    }
    else {
      return "Obesity Class III"
    }
  }

  const callWeight = (b,h)

  const onFormSub = (w, h) => {
    // console.log(w, h)
    let b = calBMI(w, h)
    // let t = 
    setBmi(b);
    setbmiType(weightType(b))
  }

  return (
    <div className='container'>
    <div className='row justify-content-center mt-5'>
    {/* create a callback function inside the Form to sent data */}
    <Form getData = {onFormSub}/>
    </div>
    <div className='row mt-5'>
    <BmiScore bmiNo={bmi} bmiName = {bmiType}/>
    </div>
    <Bmilist/>
    
    </div>
  );
}

export default App;
