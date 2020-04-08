import React from 'react';
import './Person.css';
// import  Radium from 'radium';
const person= (probs)=>{
//   const style={
// '@media (min-width:500px)':{
//   width:'450px'//This is fixed width of div. but if we go the window size less
//   //than 500px then it will go 60% of the window
// }
  

    return (
      <div  className="Person" >
          <h2> be confident</h2>
        <p onClick={probs.click}> I am a {probs.name} and I am {probs.age} years old!</p>
    <p> {probs.children}</p>
    <input type="text" value={probs.name} onChange={probs.changed}></input>
      </div>
    
    );
}
export default person;