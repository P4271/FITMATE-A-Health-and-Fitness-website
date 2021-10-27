import { useState } from "react";
import Navbar from "../navbar";
import Footer from "../Footer"

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);

  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
    <>
    <Navbar />
    <div className="d-flex align-items-center justify-content-center bmi-container">
      <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center main-heading mt-5"> BMI Calculator</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Height
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Height "
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Weight 
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Weight"
            type="text"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn-style btn-style-border"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
          </div>
        )}
      </form>
    </div>
    <div class="card-footer text-center">
                <p>Underweight - if BMI is &#60;18.5 </p>
                <p>Normal - if BMI ranges between 18.5 to 24.9</p>
                <p>Overweight - if BMI ranges between 25 to 29.9</p>
                <p>Obesity - BMI of 30 or greater</p>
            </div>

    <div className="bmiinfo  ">
      <h1 className="main-heading">What is BMI?</h1>
      <p className="main-hero-para bmipara">BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is
            intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy
            body weight for their height. Specifically, the value obtained from the calculation of BMI is used to
            categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the
            value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes
            further divided into subcategories such as severely underweight or very severely obese. Being overweight or
            underweight can have significant health effects, so while BMI is an imperfect measure of healthy body
            weight, it is a useful indicator of whether any additional testing or action is required.</p>
            <br />
            <br />

            <div className="adjust">
            <h1 className="main-heading">BMI table for adults</h1>
            <p className="main-hero-para">This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is
                used for both men and women, age 18 or older</p>
            <table className="cinfoT" align="center">
                <tr>
                    <td className="cinfoHd">Category</td>
                    <td className="cinfoHdL">BMI range - kg/m<sup>2</sup></td>
                </tr>
                <tr>
                    <td>Severe Thinness</td>
                    <td className="cinfoBodL">&lt; 16</td>
                </tr>
                <tr>
                    <td>Moderate Thinness</td>
                    <td className="cinfoBodL">16 - 17</td>
                </tr>
                <tr>
                    <td>Mild Thinness</td>
                    <td className="cinfoBodL">17 - 18.5</td>
                </tr>
    
                <tr>
                    <td>Normal</td>
                    <td className="cinfoBodL">18.5 - 25</td>
                </tr>
                <tr>
                    <td>Overweight</td>
                    <td className="cinfoBodL">25 - 30</td>
                </tr>
                <tr>
                    <td>Obese Class I</td>
                    <td className="cinfoBodL">30 - 35</td>
                </tr>
                <tr>
                    <td>Obese Class II</td>
                    <td className="cinfoBodL">35 - 40</td>
                </tr>
                <tr>
                    <td>Obese Class III</td>
                    <td className="cinfoBodL">&gt; 40</td>
                </tr>
            </table>
            <br /> 
    
            <h1 className="main-heading">BMI chart for adults</h1>
            <p className="main-hero-para">This is a graph of BMI categories based on the World Health Organization data. The dashed lines represent
                subdivisions within a major categorization.</p>
    
            <p><img src="//d26tpo4cm8sb6k.cloudfront.net/img/bmi-chart.gif" width="529"
                    height="441" /></p>
           </div>
    </div>

    

    <Footer />
    </>
  );
}