import { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
      // console.log(weight);
      // console.log(height);
    }
  };

  //conditional rendering
  // let alertMessage
  // if (alert) {
  //     alertMessage = <div className="alert alert-danger"> please enter the valid data</div>
  // }else{
  //     alertMessage = '';
  // }

  return (
    <div className="col-xl-6 col-lg-7 col-md-9">
      <form onSubmit={calculate} className="border p-4 shadow bg-body rounded">
        <div className="row text-center my-1">
          <h5 className="fw-bold">BMI Calculator</h5>
        </div>
        <div className="row mb-3 ">
          <label className="col-sm-2 col-form-label">Weight (kg)</label>
          <div className="col-sm-10">
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="form-control"
              id="weightid"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">height (m)</label>
          <div className="col-sm-10 ">
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="form-control"
              id="heightid"
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-50 mx-auto">
            Get BMI
          </button>
        </div>
      </form>
      {/* {alertMessage} */}
      {/* {alert == true ? <div className="alert alert-danger"> please enter the valid data</div> : ' '} */}
      {alert && (
        <div className="alert alert-danger"> please enter the valid data</div>
      )}
    </div>
  );
}

export default Form;
