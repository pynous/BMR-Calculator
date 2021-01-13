import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
     this.state = {
        gender: '',
        weight: '',
        age: '',
        heightFeet: '',
        heightInches: '',
        activity: '',
        bmr: '',
        error: '',
        dailyneeded: ''
     }
     
  }
  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  }
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  }
  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  }
  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  }

  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  }
  
  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  }
 calculateBMR(){
   let age = this.state.age;
   let weight = this.state.weight;
   let gender = this.state.gender;
   let heightFeet = this.state.heightFeet;
   let heightInches = this.state.heightInches;

   if (age == '' || gender == '' || weight == '' || heightFeet == '' || heightInches == ''){

     this.setState({error: 'All Field Are Required!'});
     return;
   }

   let bmrCalc = '';
   let height = ((heightFeet * 30.48) + (heightInches * 2.54));
       if( gender == 2){
         bmrCalc = (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age));
       } 
       else if(gender == 1) {
         bmrCalc= (655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age));
       }
     

       this.setState({ bmr : bmrCalc });

   this.setState({error: ''});
    

    console.log(gender);
 }
 calculatecalorie(){
  let dailyCarloriesneeded;
    let selected = this.state.activity;
    let bmr1 = this.state.bmr;
     if(selected == 1.2){
       dailyCarloriesneeded = bmr1 * selected;
     }
     else if(selected == 1.375){
      dailyCarloriesneeded = bmr1 * selected;
    }
    else if(selected == 1.55){
      dailyCarloriesneeded = bmr1 * selected;
    }
    else if(selected == 1.725){
      dailyCarloriesneeded = bmr1 * selected;
    }
    else if(selected == 1.9){
      dailyCarloriesneeded = bmr1 * selected;
    }
      this.setState({ dailyneeded : dailyCarloriesneeded })
      console.log(this.state.dailyneeded);

 }

  render(){
    let error;
    if(this.state.error){
      error = <div className="error">{this.state.error}</div>
    }
    let resultBMR;
    if(this.state.bmr){
      resultBMR = <div className="result">{this.state.bmr}</div>
    }
    
    let Calcalorie;

    if(this.state.bmr){
     
     Calcalorie = <div className="workout">
      <div className="inputwrap">
           <label className="label">Workout in a Week</label>
           <select className="activity" value={this.state.activity} onChange={this.handleactivityChange} name="activity">
             <option value="">Select your Activity</option>
             <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
             <option value="1.375">Lightly Active</option>
             <option value="1.55">Moderately Active</option>
             <option value="1.725">Very Active</option>
             <option value="1.9">Extremely Active</option>
           </select>
      </div>
      <button type="button" onClick={()=> this.calculatecalorie()}>Calculate Calorie</button>
      
   </div>
    }
    let neededcalorie;
    if(this.state.dailyneeded){
      neededcalorie = <div className="result">{this.state.dailyneeded}</div>
    }

  return (
     <div className="bmrcalc">
         <div className="form">
             <h2>BMR &amp; Daily Calorie Calculator</h2>
             {error}
            <div className="inputwrap">
              <label className="label">Gender</label>
              <label><input type="radio" className="genderF" checked= {this.state.gender === "1"} onChange={this.handlegenderChange} name="gender" value="1" />Female</label>
              <label><input type="radio" className="genderM" checked= {this.state.gender === "2"} onChange={this.handlegenderChange} name="gender" value="2" />Male</label>
            </div>
            <div className="inputwrap">
              <label className="label">Weight in Pounds</label>
            <input type="number" value={this.state.weight} onChange={this.handleWeightChange} name="weight" className="weight" min="0" max="999" />
            </div>
            <div className="inputwrap">
              <label className="label">Height in feet and inches</label>
            <input type="number" value={this.state.heightFeet} onChange={this.handleheightFeetChange} name="heightinFeet" className="heightFeet" min="0" max="8" />
            <input type="number" value={this.state.heightInches} onChange={this.handleheightInchesChange} name="heightInches" className="heightInches" min="0" max="100" />
            </div>
            <div className="inputwrap">
              <label className="label">Age in years</label>
            <input type="number" value={this.state.age} onChange={this.handleAgeChange} name="age" className="age" min="0" max="120" />
            </div>
              <button type="button" onClick={() => this.calculateBMR()}>Calculate BMR</button>
              {resultBMR}
             
              {Calcalorie}
              
              {neededcalorie}
                
         </div>
       
     </div>
  );
}
}



export default App;
