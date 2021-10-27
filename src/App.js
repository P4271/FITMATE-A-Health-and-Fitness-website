import React from 'react'
import Home from './Home';
import {Route, Switch} from "react-router";
import Workout from './pages/Workout';
import Food from './pages/Food';
import Toolpage from './pages/Toolpage';
import ToolsBmicalculator from './pages/ToolsBmicalculator';
import ToolsCaloriecalculator from './pages/ToolsCaloriecalculator';
import ToolsBmrcalculator from './pages/ToolsBmrcalculator';
import ToolsMacroscalculator from './pages/ToolsMacroscalculator';
import ToolsPregnancycalculator from './pages/ToolsPregnancycalculator';
import ToolsBodyfatcalculator from './pages/ToolsBodyfatcalculator';
import Learn from './pages/Learn';
import Blogs from './pages/Blogs';
import WeightTraining from './pages/WeightTraining';
import ChestTraining from './pages/ChestTraining';
import BackTraining from './pages/BackTraining';
import ShoulderTraining from './pages/ShoulderTraining';
import AbsTraining from './pages/AbsTraining';
import BicepsTraining from './pages/BicepsTraining';
import TricepsTraining from './pages/TricepsTraining';
import ForearmsTraining from './pages/ForearmsTraining';
import LegsTraining from './pages/LegsTraining';
import Calves from './pages/Calves';
import Cardiopage from './pages/Cardiopage';
import YogaCategory from './pages/YogaCategory';





const App = () => {
  
  return (
    <>
   
      <Switch>
        <Route path="/workout" > <Workout/></Route>
        <Route path="/weighttraining" > <WeightTraining/></Route>
        <Route path="/chesttraining" > <ChestTraining/></Route>
        <Route path="/backtraining" > <BackTraining/></Route>
        <Route path="/shouldertraining" > <ShoulderTraining/></Route>
        <Route path="/abstraining" > <AbsTraining/></Route>
        <Route path="/bicepstraining" > <BicepsTraining/></Route>
        <Route path="/tricepstraining" > <TricepsTraining/></Route>
        <Route path="/forearmstraining" > <ForearmsTraining/></Route>
        <Route path="/legstraining" > <LegsTraining/></Route>
        <Route path="/calvestraining" > <Calves/></Route>
        <Route path="/food" ><Food/> </Route>
        <Route path="/tools" ><Toolpage/> </Route>       
        <Route path="/ToolsBmicalculator" ><ToolsBmicalculator/> </Route>       
        <Route path="/ToolsCaloriecalculator" ><ToolsCaloriecalculator/> </Route>       
        <Route path="/ToolsBmrcalculator" ><ToolsBmrcalculator/> </Route>       
        <Route path="/ToolsMacroscalculator" ><ToolsMacroscalculator/> </Route>       
        <Route path="/ToolsPregnancycalculator" ><ToolsPregnancycalculator/> </Route>       
        <Route path="/ToolsBodyfatcalculator" ><ToolsBodyfatcalculator/> </Route>       
            
               
        <Route path="/cardio" ><Cardiopage/> </Route>       
        <Route path="/yoga" ><YogaCategory/> </Route>       
        <Route path="/learn"><Learn/> </Route>
        <Route path="/blogs"><Blogs/> </Route>
        <Route exact path="/" > <Home /></Route>
      </Switch>
    </>
  );
}

export default App;
