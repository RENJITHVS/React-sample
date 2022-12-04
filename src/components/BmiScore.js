// function BmiScore(props) {
//     console.log(props);
//     //destructuring
//     const {bmiNo, bmiName} = props

//   return (
//     <div>
//       Bmi score {bmiNo} <br/>
//       Bmi Type {bmiName}

//     </div>
//   )
// }

// export default BmiScore

function BmiScore({ bmiNo, bmiName }) {
  return (
    <div className="col-md-6">
      <div className=" alert alert-primary" role="alert">
        <h4 className="alert-body">{bmiName}</h4>
        <hr />
        <p className="mb-0">
        Your BMI Score : { bmiNo }
        </p>
      </div>
    </div>
    
  );
}

export default BmiScore;
