import React,{Fragment, useState,useEffect} from 'react'
import Navbar from "../navbar";
import Footer from "../Footer"
import ScriptTag from 'react-script-tag';

const ToolsCaloriecalculator = () => {

// const [age, setAge] = useState();
// const [male, setMale] = useState(false);
// const [female, setFemale] = useState(false);
// const [weight, setWeight] = useState();
// const [height, setHeight] = useState();

//   const handleMaleChange =(e) =>{
//     setMale(e.currentTarget.checked)
//     setFemale(false)
//   }
//   const handleChange =(e) =>{
//     setFemale(e.currentTarget.checked)
//     setMale(false)
//   }

useEffect(() => {
	document.getElementById('calorie-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';
  
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateCalories, 2000);
  
    e.preventDefault();
  });
  
  function calculateCalories(e) {
    
    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="customRadioInline1"]:checked');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const activity = document.getElementById('list').value;
    const totalCalories = document.getElementById('total-calories');
    
    
    if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
      errorMessage('Please make sure the values you entered are correct')
    } else if(gender.id === 'male' && activity === "1") {
      totalCalories.value = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "2") {
      totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if (gender.id === 'male' && activity === "3") {
      totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "4") {
      totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "5") {
      totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
      ;
    } else if(gender.id === 'female' && activity === "1") {
      totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "2") {
      totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "3") {
      totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "4") {
      totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else {
      totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age.value)));
    } 
  
    document.getElementById('results').style.display = 'block';
  
    document.getElementById('loading').style.display = 'none';
  }
  
  function errorMessage(error) {
    document.getElementById('results').style.display = 'none';
  
    document.getElementById('loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
  
    card.insertBefore(errorDiv, heading);
  
    setTimeout(clearError, 4000);
  }
  
  function clearError() {
    document.querySelector('.alert').remove();
  }
  
}, []);

    return (
       <Fragment>
         <Navbar/>   

         <div className="container cal-container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className=" card-body cale text-center mt-5">
            <h1 className="heading display-5 pb-3">Calorie Calculator</h1>
            <form id="calorie-form">

              <div className="form-group row">
                <label for="age" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" id="age" placeholder="Ages 15-80" />
                </div>
              </div>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                  <div className="col-sm-10 d-flex" id="form-radio">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="male" name="customRadioInline1"  className="custom-control-input" />
                      <label className="custom-control-label" for="male">Male</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="female" name="customRadioInline1" className="custom-control-input" />
                      <label className="custom-control-label" for="female">Female</label>
                    </div>  
                  </div>
                </div> 
              </fieldset> 

              <div className="form-group row">
                <label for="weight" className="col-sm-2 col-form-label">Weight</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control length" id="weight"  placeholder="In kilograms" />
                </div>
              </div>

              <div className="form-group row">
                <label for="height" className="col-sm-2 col-form-label">Height</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control length" id="height" placeholder="In centimeters" />
                </div>
              </div>
              
              <div className="form-group d-flex justify-content-center align-item-center row">
                <legend className="col-form-label col-sm-2 pt-0">Activity</legend>
                <select className="custom-select col-sm-10" id="list">
                  <option selected value="1">Sedentary (little or no exercise)</option>
                  <option value="2">Lightly active (light exercise/sports 1-3 days/week)</option>
                  <option value="3">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                  <option value="4">Very active (hard exercise/sports 6-7 days a week)</option>
                  <option value="5">Extra active (very hard exercise/sports & physical job or 2x training)</option>
                </select>
              </div>

              <div className="form-group">
                <input type="submit" value="Calculate" className="btn btn-dark btn-block" />
              </div>

            </form>

            <div id="loading">
              <img src="Images/Loading.gif" alt="" />
            </div>

            <div id="results" className="pt-4">
              <h5>Maintenance calorie level</h5>
              <div className="form-group">
                <div className="input-group">
                  <input type="number" className="form-control" id="total-calories" disabled />
                </div>
              </div>                       
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="result-addon">
      <h1>Weight Gain</h1>
      <p> Adding 500 calories a day helps to gain 250-500 gm per week or 1lb, a standard way to gain weight. If you want fast weight gain then adding 700-1000 calories per day will help to increase 1kg per week if combined with exercise. Based on this set your expectations and goal.</p>
      <h1>Weight loss</h1>
      <p>When trying to lose weight, a general rule of thumb is to reduce your calorie intake to 500 fewer calories than your body needs to maintain your current weight. This will help you lose about 1 pound (0.45 kg) of body weight per week.</p>
    </div>


    <div class="calorie-info">
        <h2>Calories: Different Kinds and Their Effects</h2>
        <p>
        The main sources of calories in a typical person's diet are carbohydrates, proteins, and fat, with alcohol also being a significant portion of calorie intake for many people (though ideally this should be limited since alcohol contains many empty calories). Some studies have shown that the calories displayed on nutrition labels and the calories actually consumed and retained can vary significantly. This hints at the complex nature of calories and nutrition and is why many conflicting points of view on the "best" methodology for losing weight exist. For example, how a person chews their food has been shown to affect weight loss to some degree; generally speaking, chewing food more increases the number of calories that the body burns during digestion. People that chew more also tend to eat less, since the longer period of time necessary to chew their food allows more time to reach a state of satiety, which results in eating less. However, the effects of how food is chewed and digestion of different foods are not completely understood and it is possible that other factors exist, and thus this information should be taken with a grain of salt (in moderation if weight loss is the goal). <br /> <br /> Generally, foods that take more effort to chew – fruit, vegetables, lean meats, whole grains, etc. – require the body to burn more calories since more calories are required to digest them. It also results in the feeling of satiety for longer periods of time. Furthermore, certain foods like coffee, tea, chilies, cinnamon, and ginger have been found to increase the rate of calories burned, due to the ingredients they contain. <br /> <br /> The "quality" of calories consumed is also important. There are different classifications of foods in terms of calories. This includes high-calorie foods, low-calorie foods, and empty calories. Consistent with their naming, high-calorie foods are foods that are calorically dense, meaning that there are a high number of calories relative to serving size, while low-calorie foods have fewer calories relative to serving size. Foods such as fat, oils, fried foods, and sugary foods are examples of high-calorie foods. Being a high-calorie food does not inherently mean that the food is unhealthy however – avocados, quinoa, nuts, and whole grains are all high-calorie foods that are considered healthful in moderation. Low-calorie foods include vegetables and certain fruits, among other things, while empty calories, such as those in added sugars and solid fats, are calories that contain few to no nutrients. Studies have shown that there is a measurable difference between consuming 500 calories of carrots compared to 500 calories of popcorn. As previously mentioned, this in part can be attributed to differences in how the foods are consumed and processed. Carrots require far more chewing and can result in more calories burned during digestion. Again, the mechanism for these differences is not fully defined, but simply note that for weight loss purposes, the general formula of calories in minus calories out determining weight gain or loss does hold, but that the number of calories on a nutrition label is not necessarily indicative of how many calories the body actually retains. While there is no clear-cut or ideal amount of macronutrient proportions a person should consume to maintain a healthy diet or lose weight, eating a "healthy" diet replete with a variety of unprocessed foods such as vegetables, fruits, and lean meats is correlated with being healthier, and is more likely to result in sustainable weight loss. Also, remember that calories from drinks comprise an estimated 21% of a typical person's diet. Many of these calories fall under the category of empty calories. While sodas are an obvious culprit, drinks such as juices and even milk have large amounts of sugar and should be consumed in moderation to avoid negating their nutritional benefits. Ideally, a person should drink water, tea, and coffee without adding sugar in order to reduce calories gained from drinks. <br />   Remember: All foods, including "healthful foods," should be consumed in moderation, and distinctions can often be misleading since even natural foods like fruits can have large amounts of sugar, and foods labeled as "health foods" such as low-calorie foods, reduced-fat foods, etc. can potentially replace one unhealthy component with another. Many reduced-fat foods have large amounts of added sugar to compensate for taste lost through fat reduction. It is important to pay attention to, and consider the different components in a food product in order to determine whether said food should have a place within your diet.
        </p>
    </div>

    
   
        
     <Footer />
     <ScriptTag type="text/javascript" src="../caloriecalculator.js" />
     </Fragment>
    )
}



export default ToolsCaloriecalculator;