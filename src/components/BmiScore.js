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

function BmiScore({ bmiNo, bmiName, changeWeight, refColor }) {
  return (
    <div className="col-md-6">
      <div className={"alert alert-" + refColor} role="alert">
        <h4 className="alert-body">{bmiName}</h4>
        <hr />
        <p className="mb-0">Your BMI Score : {bmiNo}</p>
        <p>
          {changeWeight.type === "positive" && (
            <div className="fs-4">
              "You need lose{" "}
              <span className="fw-bold">{changeWeight.weight} kg"</span>{" "}
            </div>
          )}
          {changeWeight.type === "negative" && (
            <div className="fs-4">
              "You need gain{" "}
              <span className="fw-bold">{changeWeight.weight} kg"</span>{" "}
            </div>
          )}
          {changeWeight.type === "normal" && (
            <div className="fs-4">"You weight is Normal,Good for you" </div>
          )}
        </p>
      </div>
    </div>
  );
}

export default BmiScore;
