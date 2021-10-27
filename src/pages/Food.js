import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "../RecipeTile";

const Food = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthlabel, setHealthlabel] = useState("vegan");

  const YOUR_APP_ID = "078ab4a6";
  const YOUR_APP_KEY = "79ed06d3dc54cbc9faee2cc698bcac2e";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthlabel}`;
  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <>
      <Navbar />
      

      {/* <div className="food-container">
       <button><a href="maindemo.php">Search here</a></button>
        
      </div> */}

      <div>
        <div className="container">
          <div className="fh5co-banner-text-box">
            <div className="quote-box pl-5 pr-5 wow bounceInRight">
              <h2>
                Looking for a few new healthy recipes <br />
                <span>to add to your weekly rotation ?</span>{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="container-fluid fh5co-network">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 class="wow bounceInUp">BREAKFAST</h4>
                <h2 class="wow bounceInRight"></h2>
                <hr />
                <h5 class="wow bounceInLeft">
                  CHOCOLATE CHIA PUDDING WITH BERRY COMPOTE
                </h5>
                <p className="wow bounceInDown">
                  INGREDIENTS: <br /> 110ml almond milk, unsweetened 60g Greek
                  yoghurt 3 tsp. cocoa powder 1 tsp. honey 35g chia seeds 20g
                  raspberry, frozen (Berry Compote) 60g blackberry, frozen
                  (Berry Compote) 20g blueberry, frozen (Berry Compote) 1/2 tsp.
                  lime zest (optional) (Berry Compote) 0.25 tsp. vanilla essence
                  (Berry Compote) <br /> INSTRUCTIONS :<br />
                  Add the almond milk, chia seeds, honey, yoghurt, and cacao
                  powder into a jar and combine well Once the chia pudding is
                  well combined, refrigerate overnight for 1-2 hours to set In
                  the morning, add the berry compote INGREDIENTS: to a saucepan
                  over low heat for 1-2 minutes Top the chia pudding with the
                  berry compote and serve. <br />
                  CALORIES :<br />
                  1360 CAL PROTEIN 11.8G FAT, TOTAL 22.4G - SATURATED 2.2G
                  CARBOHYDRATE 19.9G - SUGARS 2.8G SODIUM 335MG
                </p>
              </div>
              <div className="col-md-6">
                <figure class="wow bounceInDown" />
                <img src="images/b1.jpg" alt="girls in gym" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid fh5co-network">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 class="wow bounceInUp">AM SNACK</h4>
                <h2 class="wow bounceInRight"></h2>
                <hr />
                <h5 class="wow bounceInLeft">BOILED EGG AND PROTEIN SHAKE</h5>
                <p className="wow bounceInDown">
                  INGREDIENTS: <br />1 x 45g free range eggs 30g F45 Fuel protein
                  (flavour of your choice) 300ml filtered wate <br />{" "}
                  INSTRUCTIONS :<br />
                  o cook the eggs, boil water in a saucepan over medium
                  temperature and cook the eggs for 7 minutes Drain the water
                  from the saucepan. Rinse the eggs under cold water to cool.
                  Tap the shell with the back of the spoon to break the shell.
                  Peel the shell off both eggs. Cut the eggs in half and set
                  aside Combine the water and protein powder in a protein shaker
                  Serve the boiled eggs and protein shake <br />
                  CALORIES :<br />
                  172 CAL PROTEIN 31.8G FAT, TOTAL 4.4G - SATURATED 1.6G
                  CARBOHYDRATE 0.7G - SUGARS 0.2G SODIUM 98MG
                </p>
              </div>
              <div className="col-md-6">
                <figure class="wow bounceInDown" />
                <img src="images/f3.jpg" alt="girls in gym" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid fh5co-network">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 class="wow bounceInUp">LUNCH</h4>
                <h2 class="wow bounceInRight"></h2>
                <hr />
                <h5 class="wow bounceInLeft">
                  PUMPKIN, BROCCOLI AND GOAT CHEESE BUDDHA BOWL
                </h5>
                <p className="wow bounceInDown">
                  INGREDIENTS: <br />
                  500g pumpkin, raw, chopped 400g broccoli, raw, chopped 100g
                  cucumber, sliced into rounds 60g cherry tomatoes 60g goats
                  cheese 7ml olive oil 1 garlic clove, minced 7ml olive oil
                  (dressing) 10ml balsamic vinegar (dressing) 5g wholegrain
                  mustard (dressing) 5g dried rosemary Himalayan salt <br />{" "}
                  INSTRUCTIONS :<br />
                  Preheat oven to 180 degrees and line a baking tray with baking
                  paper. Place the pumpkin on the tray Combine the olive oil and
                  garlic in a small bowl. Using a pastry brush, brush the
                  pumpkin with half the amount of olive oil. Season with
                  Himalayan salt and rosemary Bake the pumpkin in the oven for
                  15 minutes. Remove the pumpkin from the oven and add broccoli
                  onto the tray. Using the pastry brush, brush the broccoli with
                  the remaining olive oil and garlic mix. Place the broccoli and
                  pumpkin back in the oven for a further 10-15 minutes. Once
                  cooked remove from the oven and set aside In 2 separate bowls,
                  add the cucumber, cherry tomatoes, pumpkin, broccoli, and goat
                  cheese In a separate small bowl combine the olive oil,
                  wholegrain mustard, and balsamic vinegar Between the two
                  bowls, drizzle the dressing over the top Serve 1 bowl and
                  refrigerate the second bowl for tomorrow’s leftover <br />
                  CALORIES :<br />
                  342 CAL PROTEIN 20.9G FAT, TOTAL 15.5G - SATURATED 5.6G
                  CARBOHYDRATE 21.6G - SUGARS 17.0G SODIUM 168MG 98MG
                </p>
              </div>
              <div className="col-md-6">
                <figure class="wow bounceInDown" />
                <img src="images/f4.jpg" alt="girls in gym" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid fh5co-network">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 class="wow bounceInUp">PM SNACK</h4>
                <h2 class="wow bounceInRight"></h2>
                <hr />
                <h5 class="wow bounceInLeft">NUTTY SNACK ATTACK</h5>
                <p className="wow bounceInDown">
                  INGREDIENTS: <br /> 14g raw, unsalted almonds 14g raw, unsalted
                  cashews 5g coconut flakes 15g pumpkin seeds <br />{" "}
                  INSTRUCTIONS :<br />
                  Combine the INGREDIENTS: together in a bowl Divide the snack
                  into two serves Serve one <br />
                  CALORIES :<br />
                  141 CAL PROTEIN 4.6G FAT, TOTAL 12.3G - SATURATED 2.8G
                  CARBOHYDRATE 2.7G - SUGARS 1.0G SODIUM 3MG
                </p>
              </div>
              <div className="col-md-6">
                <figure class="wow bounceInDown" />
                <img src="images/F5.jpg" alt="girls in gym" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid fh5co-network">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 class="wow bounceInUp">DINNER</h4>
                <h2 class="wow bounceInRight"></h2>
                <hr />
                <h5 class="wow bounceInLeft">
                  SUNFLOWER SEED AND QUINOA GREEK SALAD
                </h5>
                <p className="wow bounceInDown">
                  INGREDIENTS: <br /> 30g dry quinoa grains 90ml water 10g
                  sunflower kernels 100g tomato, diced 50g red capsicum, sliced
                  40g red onion, sliced 60g cucumber, sliced 30g feta cheese 1
                  tsp. dried mint Himalayan salt <br />
                  CALORIES :<br />
                  352 CAL PROTEIN 19.5G FAT, TOTAL 24.6G - SATURATED 6.7G
                  CARBOHYDRATE 11.5G - SUGARS 10.6G SODIUM 582MG
                </p>
              </div>
              <div className="col-md-6">
                <figure class="wow bounceInDown" />
                <img src="images/F6.jpg" alt="girls in gym" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-container">
        <h1>GET RECIPES BY INGREDIENT</h1>
        <form className="recipe-search" onSubmit={onSubmit}>
          <input
            type="text"
            className="recipe-input"
            placeholder="Enter ingredient name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="submit"
            className="btn-style btn-style-border sub-btn"
            value="Search"
          />
        </form>

        <div className="food-recipes">
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
        </div>
      </div>

      <div className="diet">
        <h1 className="mt-5 text-center">
          DIET PLANS
        </h1>

        <div class="row dietcontainer">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Weight Gain Diet plan</h5>
        <p class="card-text text-center">Follow this weekly diet for Gaining good amount of weight</p>
        <a href="#gain" class=" btn btn-style btn-style-border">check</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Weight Loss diet plan</h5>
        <p class="card-text text-center">Follow this weekly diet for loss some amount of weight</p>
        <a  href="#loss" class=" btn btn-style btn-style-border">check</a>
      </div>
    </div>
  </div>
</div>

<section id="gain">
  <h1 className="text-center">Bodybuilding diet: Meal plan to gain weight by FIT-MATE</h1>
  <p className="text-center">Building muscles or gaining healthy weight is not as easy as losing weight.
But, it is important to be motivated and disciplined and follow a healthy meal plan along with exercise to gain weight and muscles.The Fitmate team and Shekhar Chavan (Certified fitness trainer and gym owner)chalks out a meal plan for bodybuilders and those who want to gain weight in a healthy manner.</p>

<p> <strong>BREAKFAST:</strong>  <br />3 to 4 slices of whole wheat bread toast with peanut butter + 3 egg whites + 1 full egg omelette or <br /> 1 cup of low fat milk + 1 scoop of whey protein+ 150 gms of oatmeal + 1 banana+ a few almonds+ walnuts.
<br /> <br /> <strong>Mid morning snack:</strong> <br />1 orange or apple or 1 cup of green tea + 2 to 3 multigrain biscuits <br /> <br />
<strong>Lunch:</strong> <br />150 gms of brown rice or whole wheat chapattis + 150 gms of skinless chicken breast / fish + 1 bowl of mixed vegetables+ green chutney+ salad <br /> <br /> <strong>Mid afternoon snack:</strong> <br /> 1 fruit or green tea or sprouts salad + few nuts <br />Evening: <br />1 fruit + 1 cup of low fat yoghurt or 1 cup of low fat milk with 1 scoop of whey protein or whole wheat bread 3 egg whites/ steamed chicken sandwich. <br /> <br /> <strong>Dinner:</strong> <br />1 small fish or 100 gms of skinless/ lean chicken + stir fried veggies with baked potato + 1 cup of brown rice/ whole wheat chappati <br />
 <br /><strong>Bed time:</strong> <br /> 1 cup of skimmed milk with nuts </p>
 <p>It is important to note that the diet plan and the caloric requirement, and the portion size differ from person to person depending on their age, gender and body weight. The diet will also vary with the timing of the workout schedule.
</p>
</section>
<section id="loss">
<h1 className="text-center">Bodybuilding diet: Meal plan to loose weight by FIT-MATE</h1>
<p className="text-center">As per Shekar Chavan, there are three basic rules to lose weight. <br />- Eating early dinner <br />- Avoiding sugar <br />- Avoiding junk <br />Talking about Indian diet for weight loss, Indian food when cooked properly makes for a very balanced meal plan. The good old dals, low-fat paneer, lentils, soya, green vegetables, curd, egg whites, whole grain flours, fish, chicken provide us with all the essential nutrients, vitamins and minerals.</p>
<p>
  <strong>Early morning:</strong> <br /> 1 glass warm water with some herb brewed in it +2-3 soaked almonds <br /><br /> <strong>Morning:</strong> <br /> Lemon tea/ Ginger Tea/Coffee/ milk 1 cup (150 ml) <br /><br />
  <strong>Breakfast:</strong> <br />Eggs omelette with spinach and shredded vegetables cooked OR Idlis / dosa/ Poha/ upma 1 cup cooked <br /><br /><strong>Lunch:</strong> <br /> Salad with fresh vegetables and curd 1 cup <br /> Dal Palak/ chicken curry/ sambar/ rasam 1 cup <br />Phulkas ( multigrain ) 1 piece <br />Rice ½ cup <br />Cooked vegetables/ greens/ palya 1 cup (150 gms) <br /><br /><strong>Evening:</strong><br />6 pm Fruit/ sprouts/ cucumber –carrot slices/ vegetable soup <br /><br /><strong>Dinner:</strong><br />7.30 Pm salad with fresh vegetables 1 cup <br />Methi Dal / sambar/rasam 1 cup <br />Phulkas ( multigrain ) 1-2 piece
Cooked vegetables/ greens/ palya 1 cup (150 gms) <br /><br /><strong>Bedtime:</strong><br /> Milk/buttermilk (optional ) 150 ml
</p>
</section>
      </div>

      <Footer />
    </>
  );
};

export default Food;
