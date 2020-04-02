import React from 'react';
import './Person.css';
const person= (probs)=>{

    return (
      <div  className="Person">
          <h2> be confident</h2>
        <p onClick={probs.click}> I am a {probs.name} and I am {probs.age} years old!</p>
    <p> {probs.children}</p>
    <input type="text" value={probs.name} onChange={probs.changed}></input>
      </div>
    
    );
}
export default person;