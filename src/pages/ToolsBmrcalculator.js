import React, { Component } from 'react'
import Navbar from "../navbar";
import Footer from "../Footer"
class ToolsBmrcalculator extends Component {
    constructor(){
        super();
        this.state = {
            gender: '',
            weight: '',
            age: '',
            heightFeet: '',
            heightInches:'',
            activity:'',
            bmr:'',
            calories:''
        }
    }
    handleAgeChange = (event) => {
        this.setState({age:event.target.value})
    }
    handleWeightChange = (event) => {
        this.setState({weight:event.target.value})
    }
    handleheightFeetChange = (event) => {
        this.setState({heightFeet:event.target.value})
    }
    handleheightInchesChange = (event) => {
        this.setState({heightInches:event.target.value})
    }
    handlegenderChange = (event) => {
        this.setState({gender:event.target.value})
    }
    handleactivityChange = (event) => {
        this.setState({activity:event.target.value})
    }
    calculateImperialBMR(){
        let age = this.state.age;
        let gender = this.state.gender;
        let heightFeet = this.state.heightFeet;
        let heightInches = this.state.heightInches;
        let weight = this.state.weight;
        if (age == '' || gender == ''|| heightFeet == '' || heightInches == ''|| weight == ''  ){
            this.setState({error: 'All fields are required'});
            return;
            

        }
        let bmrCalc = '';
        let totalheightinInches = ((heightFeet * 12) + (heightInches));
        if (gender == "2"){
            bmrCalc = 66 + (6.2 * weight) + (12.7 * totalheightinInches) - (6.76 * age);

        }else if (gender == "1"){
            bmrCalc = 655.1 + (4.35 * weight) + (4.7 * totalheightinInches) - (4.7 * age);
          
        }
        this.setState({bmr:bmrCalc});

        this.setState({error: ''});
        //console.log(this.state.heightFeet);
      

        
    }
    calculateMetricBMR(){

        let age = this.state.age;
        let gender = this.state.gender;
        let heightFeet = this.state.heightFeet;
        let heightInches = this.state.heightInches;
        let weightinkg = this.state.weight * 0.453592;
        let heightincm = ((heightFeet * 30.48) + (heightInches * 2.54));


        if (age == '' || gender == ''|| heightFeet == '' || heightInches == ''|| weightinkg == ''  ){
            this.setState({error: 'All fields are required'});
            return;
            

        }
        let bmrCalc = '';
        if (gender == "2"){
            bmrCalc = 66.5 + ( 13.75 * weightinkg ) + ( 5.003 * heightincm ) - ( 6.755 * age )

        }else if (gender == "1"){
            bmrCalc = 655 + ( 9.563 * weightinkg ) + ( 1.850 * heightincm ) - ( 4.676 * age )
            
        }
        this.setState({bmr:bmrCalc});

        this.setState({error: ''});
    }
    
    calculateCalories(){
        let activity = this.state.activity;
        let Calories = this.state.bmr * activity;
        this.setState({calories:Calories});

    }
     
    render() {
        let error;
        if (this.state.error){
            error = <div className = "error"> {this.state.error} </div>
        }
        let resultBMR;
        let resultActivity;
        let activityform;
        if (this.state.bmr){
            resultBMR = <div className = "result"> {this.state.bmr} </div>
            activityform = <div className="workout">
            <div className="inputwrap">
                <label className="label">Workout in a Week:</label>
                <select className="activity" value = {this.state.activity} onChange = {this.handleactivityChange} name="activity">
                    <option value="">Select your Activity</option>
                    <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
                    <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                    <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                    <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                    <option value="1.9">Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</option>
                </select>
            </div>
           
            <button type="button" onClick = {() => this.calculateCalories()}>Calculate Calories</button>
        </div>
        }
        if (this.state.calories){
          
            resultActivity = <div className = "result">{this.state.calories}</div>
        }
        return (

            <>
            <Navbar />
             <div className="bmr__container">
            <h1 className="main-header text-center mt-5">BMR Calculator</h1>
            <p className="main-hero-para text-center">
            The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).
            </p>
            </div>
            <div id="bmrcalc">
            <div className="form">
                <h2>BMR &amp; Daily Calorie Calculator</h2>
                {error}
                <div className="inputwrap">
                    <label className="label">Gender:</label>
                    <label><input type="radio" className="genderF" checked = {this.state.gender === "1"} onChange = {this.handlegenderChange}name="gender" value="1" /> Female</label>
                    <label><input type="radio" className="genderM" checked = {this.state.gender === "2"} onChange = {this.handlegenderChange}name="gender" value="2" /> Male</label>
                </div>
                <div className="inputwrap">
                    <label className="label">Weight:</label>
                    <input type="number" value = {this.state.weight} onChange = {this.handleWeightChange} name="weight" className="weight" min="0" max="999" />
                    <label className = "Pounds" >Pounds </label>
                </div>
                <div className="inputwrap">
                    <label className="label">Height:</label>
                    <input type="number" value = {this.state.heightFeet} onChange = {this.handleheightFeetChange} name="heightFeet" className="heightFeet" min="0" max="8" />
                    <label> Feet </label>
                    <input type="number" value = {this.state.heightInches} onChange = {this.handleheightInchesChange} name="heightInches" className="heightInches" min="0" max="11" />
                    <label> Inches </label>

               </div>
                <div className="inputwrap">
                    <label className="label">Age  :</label>
                    <input type="number" value = {this.state.age} onChange = {this.handleAgeChange}className="age" name="age" min="0" max="120" />
                    <label> Years </label>

                </div>
                <button type="button" onClick = {() => this.calculateImperialBMR()}>Calculate Imperial BMR</button>
                <button type="button" onClick = {() => this.calculateMetricBMR()}>Calculate Metric BMR</button>

                {resultBMR}
                {activityform}
                {resultActivity}
                
                
                
            </div>
        </div>
        <Footer />
        </>
        )
    }
}



export default ToolsBmrcalculator;