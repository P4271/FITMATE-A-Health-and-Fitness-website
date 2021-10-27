import React, {useState,useEffect} from 'react';
import NumberInput from '../NumberInput';
import RadioInput from '../RadioInput';
import Summary from '../Summary';
import RangeInput from '../RangeInput';
import Navbar from '../navbar';
import Footer from '../Footer';

function ToolsMacroscalculator() {
   const [sex, setSex] = useState()
   const [weight, setWeight] = useState(174)
   const [height, setHeight] = useState(5.85)
   const [age, setAge] = useState(31)
   const [unit, setUnit] = useState('imperial')
   const [bodyFatPercentage, setBodyFatPercentage] = useState(19)
   const [activityMultiplier, setActivityMultiplier] = useState(1.4)
   const [proteinIntakeRatio, setProteinIntakeRatio] = useState(1.4)
   const [fatIntakePercentage, setFatIntakePercentage] = useState(27)
   const [bmr, setBmr] = useState(0)
   const [proteinGrams, setProteinGrams] = useState(0)
   const [fatGrams, setFatGrams] = useState(0)
   const [carbsGrams, setCarbsGrams] = useState(0)

   //On Mount
   useEffect(() => {
      // const data = { sex, weight, height, age, unit, bodyFatPercentage, activityMultiplier, proteinIntakeRatio, fatIntakePercentage, bmr, proteinGrams, fatGrams, carbsGrams }
      // const dataJSON = JSON.stringify(data)
      // localStorage.setItem('userData', dataJSON);
      const userData = localStorage.getItem('userData')
      if (userData) {
         const data = JSON.parse(userData);
         
         setSex(data.sex);
         setWeight(data.weight);
         setHeight(data.height);
         setAge(data.age);
         setUnit(data.unit);
         setBodyFatPercentage(data.bodyFatPercentage);
         setActivityMultiplier(data.activityMultiplier);
         setProteinIntakeRatio(data.proteinIntakeRatio);
         setFatIntakePercentage(data.fatIntakePercentage);
         setBmr(data.bmr);
         setProteinGrams(data.proteinGrams);
         setFatGrams(data.fatGrams);
         setCarbsGrams(data.carbsGrams);

      }
   }, [])

   useEffect(() => {
      const data = {sex,weight,height,age,unit,bodyFatPercentage,activityMultiplier,proteinIntakeRatio,fatIntakePercentage,bmr,proteinGrams,fatGrams,carbsGrams}
      localStorage.setItem('userData', JSON.stringify(data));
   }, [sex, weight, height, age, unit, bodyFatPercentage, activityMultiplier, proteinIntakeRatio, fatIntakePercentage, bmr, proteinGrams, fatGrams, carbsGrams])


   useEffect(() => {
      // Mifflin St. Jeor - determining BMR
      // BMR (MALE) = 10 X WEIGHT(KG) + 6.25 X HEIGHT(CM) - 5 X AGE(Y) + 5
      // BMR (FEMALE) = 10 X WEIGHT(KG) + 6.25 X HEIGHT(CM) - 5 X AGE(Y) - 161
      if (!sex || weight === 0 || height === 0 || age === 0) return;

      const weightInUnit = (unit === "imperial" ? weight / 2.205 : weight)
      const heightInUnit = (unit === "imperial" ? height * 30.48 : height)

      const bmr = (10 * weightInUnit + 6.25 * heightInUnit - 5 * age + (sex === "male" ? 5 : - 161)) * activityMultiplier;

      setBmr(bmr)

   }, [sex, weight, height, age, activityMultiplier, unit])

   useEffect(() => {
      if (bodyFatPercentage === 0) return;

      const weightInLbs = (unit === "imperial" ? weight : weight * 2.205)
         
      const leanBodyMass = weightInLbs - (weightInLbs * (bodyFatPercentage / 100))

      const proteinGr = leanBodyMass * proteinIntakeRatio;
      const fatGr = ((fatIntakePercentage / 100) * bmr) / 9;
      const carbsGr = (bmr - ((proteinGr * 4) + (fatGr * 9))) / 4;

      setProteinGrams(proteinGr)
      setFatGrams(fatGr)
      setCarbsGrams(carbsGr)


   }, [bmr, bodyFatPercentage, weight, proteinIntakeRatio, fatIntakePercentage, unit])
   

   return (
      <>
      <Navbar/>
      <div className="container macros-container">
         <div className="row">
            <div className="col-sm-12">

               <h1 className="text-center titlee">Macros Calculator</h1>
               <hr />
               <div className="form macros-form ">

                  <div className="form-group">
                     <label>Sex</label> <br/>
                     <label className="radio-inline">
                        <RadioInput name="sex" value="male" changed={(e) => setSex(e.target.value)} checked={sex}/> Male
                     </label>
                     <label className="radio-inline">
                        <RadioInput name="sex" value="female" changed={(e) => setSex(e.target.value)} checked={sex}/> Female
                     </label>
                  </div>

                  <div className="form-group">
                     <label>Unit System</label> <br />
                     <label className="radio-inline">
                        <RadioInput name="unit" value="imperial" changed={(e) => setUnit(e.target.value)} checked={unit}/> Imperial
                     </label>
                     <label className="radio-inline">
                        <RadioInput name="unit" value="metric" changed={(e) => setUnit(e.target.value)} checked={unit}/> Metric
                     </label>
                  </div>

                  <div className="row">
                     <div className="col-sm-6">

                        <div className="row">

                           <div className="col-sm-6 col-md-4">
                              <div className="form-group">
                                 <label>Weight {unit === "imperial" ? "(lbs)" : "(Kg)"}</label>
                                 <NumberInput changed={(e) => setWeight(e.target.value)} value={weight} />
                              </div>
                           </div>

                           <div className="col-sm-6 col-md-4">
                              <div className="form-group">
                                 <label>Height {unit === "imperial" ? "(ft)" : "(cm)"}</label>
                                 <NumberInput changed={(e) => setHeight(e.target.value)} value={height} />
                              </div>
                           </div>

                           <div className="col-sm-12 col-md-4">
                              <div className="form-group">
                                 <label>Age</label>
                                 <NumberInput changed={(e) => setAge(e.target.value)} value={age} />
                              </div>
                           </div>

                        </div>

                        <RangeInput
                           name="activityMultiplier"
                           label="Activity Multiplier"
                           labelSmall=" ( range: 1.2 to 2.2 )"
                           min={1.2}
                           max={2.2}
                           step={0.1}
                           value={activityMultiplier}
                           helpBlock="Sedentary to Highly Active LifeStyle"
                           onChange={(e) => setActivityMultiplier(e.target.value)}
                        />
                        

                        <div className="form-group">
                           <label>BMR (Maintenance Calories)</label>
                           <NumberInput changed={(e) => setBmr(e.target.value)} value={Math.round(bmr)} />
                           <span className="help-block">
                              Based on Mifflin St. Jeor
                           </span>
                        </div>
                     </div>

                     <div className="col-sm-6">

                        <div className="form-group">
                           <label>Body Fat %</label>
                           <NumberInput changed={(e) => setBodyFatPercentage(e.target.value)} value={bodyFatPercentage} />
                        </div>

                        <RangeInput
                           name="proteinRatio"
                           label="Protein Ratio"
                           labelSmall=" ( range: 1.2 to 1.6 )"
                           min={1.2}
                           max={1.6}
                           step={0.1}
                           value={proteinIntakeRatio}
                           helpBlock="Closer to 1.6 the leaner you are"
                           onChange={(e) => setProteinIntakeRatio(e.target.value)}
                        />

                        <div className="form-group">
                           <label>Fat Intake Percentage</label>
                           <NumberInput
                              changed={(e) => setFatIntakePercentage(e.target.value)}
                              value={fatIntakePercentage}
                              min={10}
                              max={50}
                           />
                           <span className="help-block">
                              Those that are more active would benefit from a lower fat intake. Less active lifestyles would be better off with a higher fat and lower carb intake.
                           </span>
                        </div>

                     </div>
                  </div>

               </div>{/* .form */}

            </div>
         </div>

         <Summary 
            proteinGrams={proteinGrams}
            fatGrams={fatGrams}
            carbsGrams={carbsGrams}
            bmr={bmr}
            />
      </div>

       <div className="macros-info">
       <h3>What are Macronutrients (Macro)?</h3>
       <p>In the context of health and fitness, macronutrients are most often defined to be the chemical compounds that
            humans consume in large quantities that provide bulk energy. Specifically, they refer to carbohydrates,
            proteins, and fats. Some definitions also include water, air, calcium, sodium, chloride ions, and some other
            substances, along with more typical macronutrients, since they are needed in large quantities by the human
            body. In this calculator, we only calculate daily carbohydrate, protein, and fat needs. <br />

            Micronutrients are another essential part of human nutrition and consist of vitamins and dietary minerals
            such as Vitamin A, copper, iron, and iodine. While macronutrients are necessary daily in amounts on the
            order of grams, humans typically only need fewer than 100 milligrams of micronutrients each day.</p>
            <h3>Protein</h3>
            <p>Proteins are organic compounds comprised of amino acids, and are one of the types of macronutrients. Amino
            acids are essential to a person's well-being, and there are certain amino acids that can only be obtained
            through diet. These amino acids are typically referred to as "essential amino acids," and are obtained by
            humans and other animals through the consumption of protein. <br />

            There are numerous sources of protein, both animal (meat, dairy, etc.) and plant-based (beans, legumes,
            nuts, seeds, etc.). There also exist protein supplements that are sometimes used by people who are trying to
            build muscle. Although protein is a necessary part of the human diet, as with most things, moderation is
            important. There are also healthier and unhealthier proteins. <br />

            Healthier proteins include:</p>
            <ul>
            <li>Soy</li>
            <li>Beens</li>
            <li>Nuts</li>
            <li>Fish</li>
            <li>Skinless poultry</li>
            <li>Lean beef</li>
            <li>Pork</li>
            <li>Low-fat dairy products</li>
        </ul>
        <p>Unhealthier proteins include:</p>
        <ul>
            <li>Fried meats</li>
            <li>Processed meats (deli meats, sausages, fast-food burgers etc.)</li>
            <li>High sugar yogurts</li>
            <li>Processed protein bars</li>
            <li>Many kinds of cheese</li>
        </ul>
        <h3>Carbohydrates (Carbs)</h3>
        <p>Carbohydrates, often referred to as simply "carbs," are compounds that are typically classified as sugar,
            starch, or fiber. Sugar is the simplest form of carbohydrate, while starch and fiber are complex
            carbohydrates. Carbohydrates are often also classified based on the number of saccharides that comprise
            them: monosaccharides, disaccharides, oligosaccharides, and polysaccharides. Monosaccharides and
            disaccharides are often referred to as "simple carbohydrates," while oligosaccharides and polysaccharides
            are referred to as "complex carbohydrates."
            <br />
            Glucose is a monosaccharide and is one of the key sources of energy for humans, as well as other animals.
            Polysaccharides such as cellulose cannot be easily metabolized by many organisms, including humans, but can
            still provide them with valuable dietary fibers, which helps with digestion. Too many carbohydrates in the
            form of sugar (common in processed foods) can have negative health effects, but more complex carbohydrates
            (from vegetables, fruits, whole grains, legumes, etc.), particularly those that provide dietary fibers, are
            beneficial, and necessary for the human body.
        </p>
        <h3>Fat</h3>
        <p>Fats are molecules that are comprised primarily of carbon and hydrogen atoms. Common examples include
            cholesterol, phospholipids, and triglycerides. Although fats, in the context of nutrition, are typically
            viewed as unhealthy, they have both structural as well as metabolic functions, and are a necessary part of
            the human diet. They are also highly energy dense and are the most efficient form of energy storage. <br />

            Fats are typically classified based on the bonding of carbon atoms. In terms of dietary fats, the most
            commonly referenced fats include saturated fats, unsaturated fats, trans fats, monounsaturated fats,
            polyunsaturated fats, and omega-3 fatty acids. Generally, saturated and trans fats are considered unhealthy
            fats, while monounsaturated, polyunsaturated, and omega-3 fatty acids are considered to be healthier, better
            sources of fat for the body. <br />

            General recommendations from the Dietary Guidelines for Americans for 2015-2020 include entirely avoiding
            trans fats where possible, limiting saturated fat intake to comprise less than 10% of calories consumed per
            day, and ideally replacing saturated fats in the diet with monounsaturated and polyunsaturated fats.</p>

            <h3>Macronutrients in Common Foods</h3>
            <table class="cinfoT ">

            <tr>
                <td class="cinfoHd">Food</td>
                <td class="cinfoHdL">Serving Size</td>
                <td class="cinfoHdL">Protein</td>
                <td class="cinfoHdL">Carbs</td>
                <td class="cinfoHdL">Fat</td>
            </tr>
            <tr>
                <td colspan="5"><b>Fruit</b></td>
            </tr>
            <tr>
                <td>Apple</td>
                <td>1 (4 oz.)</td>
                <td>0.27g</td>
                <td>14.36g</td>
                <td>0.18g</td>
            </tr>
            <tr>
                <td>Banana</td>
                <td>1 (6 oz.)</td>
                <td>1.85g</td>
                <td>38.85g</td>
                <td>0.56g</td>
            </tr>
            <tr>
                <td>Grapes</td>
                <td>1 cup</td>
                <td>1.15g</td>
                <td>28.96g</td>
                <td>0.26g</td>
            </tr>
            <tr>
                <td>Orange</td>
                <td>1 (4 oz.)</td>
                <td>0.79g</td>
                <td>11.79g</td>
                <td>0.23g</td>
            </tr>
            <tr>
                <td>Pear</td>
                <td>1 (5 oz.)</td>
                <td>0.54g</td>
                <td>21.91g</td>
                <td>0.17g</td>
            </tr>
            <tr>
                <td>Peach</td>
                <td>1 (6 oz.)</td>
                <td>1.2g</td>
                <td>12.59g</td>
                <td>0.33g</td>
            </tr>
            <tr>
                <td>Pineapple</td>
                <td>1 cup</td>
                <td>0.84g</td>
                <td>19.58g</td>
                <td>0.19g</td>
            </tr>
            <tr>
                <td>Strawberry</td>
                <td>1 cup</td>
                <td>1.11g</td>
                <td>12.75g</td>
                <td>0.5g</td>
            </tr>
            <tr>
                <td>Watermelon</td>
                <td>1 cup</td>
                <td>0.93g</td>
                <td>11.48g</td>
                <td>0.23g</td>
            </tr>

            <tr>
                <td colspan="5"><b>Vegetables</b></td>
            </tr>
            <tr>
                <td>Asparagus</td>
                <td>1 cup</td>
                <td>2.95g</td>
                <td>5.2g</td>
                <td>0.16g</td>
            </tr>
            <tr>
                <td>Broccoli</td>
                <td>1 cup</td>
                <td>2.57g</td>
                <td>6.04g</td>
                <td>0.34g</td>
            </tr>
            <tr>
                <td>Carrots</td>
                <td>1 cup</td>
                <td>1.19g</td>
                <td>12.26g</td>
                <td>0.31g</td>
            </tr>
            <tr>
                <td>Cucumber</td>
                <td>4 oz.</td>
                <td>0.67g</td>
                <td>2.45g</td>
                <td>0.18g</td>
            </tr>
            <tr>
                <td>Eggplant</td>
                <td>1 cup</td>
                <td>0.98g</td>
                <td>5.88g</td>
                <td>0.18g</td>
            </tr>
            <tr>
                <td>Lettuce</td>
                <td>1 cup</td>
                <td>0.5g</td>
                <td>1.63g</td>
                <td>0.08g</td>
            </tr>
            <tr>
                <td>Tomato</td>
                <td>1 cup</td>
                <td>1.58g</td>
                <td>7.06g</td>
                <td>0.36g</td>
            </tr>

            <tr>
                <td colspan="5"><b>Proteins</b></td>
            </tr>
            <tr>
                <td>Beef, regular, cooked</td>
                <td>2 oz.</td>
                <td>14.2g</td>
                <td>0g</td>
                <td>10.4g</td>
            </tr>
            <tr>
                <td>Chicken, cooked</td>
                <td>2 oz.</td>
                <td>16g</td>
                <td>0g</td>
                <td>1.84g</td>
            </tr>
            <tr>
                <td>Tofu</td>
                <td>4 oz.</td>
                <td>7.82g</td>
                <td>2.72g</td>
                <td>3.06g</td>
            </tr>
            <tr>
                <td>Egg</td>
                <td>1 large</td>
                <td>6.29g</td>
                <td>0.38g</td>
                <td>4.97g</td>
            </tr>
            <tr>
                <td>Fish, Catfish, cooked</td>
                <td>2 oz.</td>
                <td>9.96g</td>
                <td>4.84g</td>
                <td>8.24g</td>
            </tr>
            <tr>
                <td>Pork, cooked</td>
                <td>2 oz.</td>
                <td>15.82g</td>
                <td>0g</td>
                <td>8.26g</td>
            </tr>
            <tr>
                <td>Shrimp, cooked</td>
                <td>2 oz.</td>
                <td>15.45g</td>
                <td>0.69g</td>
                <td>1.32g</td>
            </tr>

            <tr>
                <td colspan="5"><b>Common Meals/Snacks</b></td>
            </tr>
            <tr>
                <td>Bread, white</td>
                <td>1 slice (1 oz.)</td>
                <td>1.91g</td>
                <td>12.65g</td>
                <td>0.82g</td>
            </tr>
            <tr>
                <td>Butter</td>
                <td>1 tablespoon</td>
                <td>0.12g</td>
                <td>0.01g</td>
                <td>11.52g</td>
            </tr>
            <tr>
                <td>Caesar salad</td>
                <td>3 cups</td>
                <td>16.3g</td>
                <td>21.12g</td>
                <td>45.91g</td>
            </tr>
            <tr>
                <td>Cheeseburger</td>
                <td>1 sandwich</td>
                <td>14.77g</td>
                <td>31.75g</td>
                <td>15.15g</td>
            </tr>
            <tr>
                <td>Hamburger</td>
                <td>1 sandwich</td>
                <td>14.61g</td>
                <td>26.81g</td>
                <td>10.97g</td>
            </tr>
            <tr>
                <td>Dark Chocolate</td>
                <td>1 oz.</td>
                <td>1.57g</td>
                <td>16.84g</td>
                <td>9.19g</td>
            </tr>
            <tr>
                <td>Corn</td>
                <td>1 cup</td>
                <td>4.3g</td>
                <td>30.49g</td>
                <td>1.64g</td>
            </tr>
            <tr>
                <td>Pizza</td>
                <td>1 slice (14")</td>
                <td>13.32g</td>
                <td>33.98g</td>
                <td>12.13g</td>
            </tr>
            <tr>
                <td>Potato</td>
                <td>6 oz.</td>
                <td>4.47g</td>
                <td>36.47g</td>
                <td>0.22g</td>
            </tr>
            <tr>
                <td>Rice</td>
                <td>1 cup cooked</td>
                <td>4.2g</td>
                <td>44.08g</td>
                <td>0.44g</td>
            </tr>
            <tr>
                <td>Sandwich</td>
                <td>1 (6" Subway Turkey Sandwich)</td>
                <td>18g</td>
                <td>46g</td>
                <td>3.5g</td>
            </tr>

            <tr>
                <td colspan="5"><b>Beverages/Dairy</b></td>
            </tr>
            <tr>
                <td>Beer</td>
                <td>1 can</td>
                <td>1.64g</td>
                <td>12.64g</td>
                <td>0g</td>
            </tr>
            <tr>
                <td>Coca-Cola Classic</td>
                <td>1 can</td>
                <td>0g</td>
                <td>39g</td>
                <td>0g</td>
            </tr>
            <tr>
                <td>Diet Coke</td>
                <td>1 can</td>
                <td>0g</td>
                <td>0g</td>
                <td>0g</td>
            </tr>
            <tr>
                <td>Milk (1%)</td>
                <td>1 cup</td>
                <td>8.22g</td>
                <td>12.18g</td>
                <td>2.37g</td>
            </tr>
            <tr>
                <td>Milk (2%)</td>
                <td>1 cup</td>
                <td>8.05g</td>
                <td>11.42g</td>
                <td>4.81g</td>
            </tr>
            <tr>
                <td>Milk (Whole)</td>
                <td>1 cup</td>
                <td>7.86g</td>
                <td>11.03g</td>
                <td>7.93g</td>
            </tr>
            <tr>
                <td>Orange Juice</td>
                <td>1 cup</td>
                <td>1.74g</td>
                <td>25.79g</td>
                <td>0.5g</td>
            </tr>
            <tr>
                <td>Apple cider</td>
                <td>1 cup</td>
                <td>0.15g</td>
                <td>28.97g</td>
                <td>0.27g</td>
            </tr>
            <tr>
                <td>Yogurt (low-fat)</td>
                <td>1 cup</td>
                <td>12.86g</td>
                <td>17.25g</td>
                <td>3.8g</td>
            </tr>
            <tr>
                <td>Yogurt (non-fat)</td>
                <td>1 cup</td>
                <td>13.01g</td>
                <td>17.43g</td>
                <td>0.41g</td>
            </tr>
        </table>
       </div>
      
      <Footer/>
      </>
   );
}

export default ToolsMacroscalculator;
