
import './App.css';
import Form from './components/Form';
import BmiScore from './components/BmiScore';
import Bmilist from './components/Bmilist';
import { useState } from 'react';

function App() {
  const[show, setShow] = useState(false) 
  const[changeWeight, setChangeWeight] = useState({ weight: "", type:""})
  const [bmi, setBmi] = useState("00")
  const [color, setColor] =useState("")
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

  // arrow function to calculate BMI
  const calBMI = (w, h) => (w/ (h*h)).toFixed(2);

   // function to get weight from bmi and hight
  const calWeight = (b, h) => (b * h * h).toFixed(2);

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

  const weightChange = (b, w , range) => {
    let changeObj;
    if(b> 24.9){
      changeObj = {
        weight: (w -range.normal.high).toFixed(2),
        type: 'positive'
      }
      return changeObj;
    }
    else if (b < 18.5){
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type: 'negative',
    }
    return changeObj
    } else {
      changeObj = {
        weight : 0, type: "normal"
      };
      return changeObj
    }

  }
  const colorChange = (bmi) => {
    if (bmi< 18.5){
      return "danger";
    }
    else if (18.5 < bmi && bmi < 24.9){
      return "success"
    }
    else if (24.9 < bmi && bmi < 29.9){
      return "primary";
    }
    else if(29.9 < bmi && bmi < 34.9){
      return "warning";
    }
    else if (34.9 < bmi && bmi < 39.9){
      return "warning";
    }
    else {
      return "danger";
    }
  }


  const onFormSub = (w, h) => {
    // console.log(w, h)
    let b = calBMI(w, h)
    // let t = 
    setBmi(b);
    setbmiType(weightType(b))

    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRange(range)
    setChangeWeight(weightChange(b, w, range));
    setShow(true)
    setColor(colorChange(b))

  }

  return (
    <div className='container'>
    <div className='row justify-content-center mt-5'>
    {/* create a callback function inside the Form to sent data */}
    <Form getData = {onFormSub}/>
    </div>
    {show && (
    <div className='row mt-5'>
    <BmiScore bmiNo={bmi} bmiName = {bmiType} changeWeight={changeWeight} refColor = {color} />
    <Bmilist range={bmiRange} bmi = {bmi}/>
    </div>
    )}
    </div>
  );
}

export default App;
