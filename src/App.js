import React , { Component} from 'react';
import Person from './Person/Person';
import './App.css';

// import Radium ,{StyleRoot} from 'radium';

class  App extends Component {
  state={
    persons:[
      { id:'asss',name:'Max',age:28 },
      { id:'gwdwg' ,name:'Manu',age:29 },
      { id:'cshc', name:'Stephanie',age:26 },
    ]
      
  }
  deletePersonHandler=(personIndex)=>{
    //Array is object of refernce type. we didn't assign new value to constant.
    //It is only holding the pointer.
    // I just only changing the element it pointing to.

    // const person=this.state.persons;
    // person.splice(personIndex,1);
    // this.setState({persons:person});

    //Array and object are reference typr in javascript. here we are 
    //immuting the original array
    const person=[...this.state.persons];
    //get the copy of new array
    
    person.splice(personIndex,1);
    this.setState({persons:person});
// this is immutable way


  }


    nameChangeHandler=(event,id)=>{
      const personIndex=this.state.persons.findIndex(p=>{
        return p.id===id;
        //it will return the particular id
      });
      const person={...this.state.persons[personIndex]};
      //get the copy of that element and changing only that
      //element
      person.name=event.target.value;
      const persons=[...this.state.persons];
      //get the copy of all object
      persons[personIndex]=person;
      // updating the particular object within the 
      // all object
      this.setState({
        persons:persons
      })
    }
    togglePersonHandler = ()=>{
const doesShow=this.state.showPerson;
this.setState({
  showPerson:!doesShow
})
    }
  
  render() {
   
    //whithin the render method will be executed everytie 
    //when react render this componennt
    //if we want to use sudo selecter in inlinestyle , then we have to install the radiu
    const style={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black'

      // }
    };
    let persons=null;
    if(this.state.showPerson){
      persons=(
        <div>
      {this.state.persons.map((pers,index)=>{
        return <Person
        click={()=>this.deletePersonHandler(index)}
         name={pers.name} 
         age={pers.age}
         key={pers.id}
         changed={(event)=>this.nameChangeHandler(event,pers.id)}/>
      })}
        
         </div>
      );
      style.backgroundColor='red';
     
     


    }

   const  classes= [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      
      <div className="App">
        <h1> You have to acheive something</h1>
        <h2>You have enough talend</h2>
        <h2 className={classes.join(' ')}> Don't waste your life</h2>
        <button 
        style={style}
        onClick={this. togglePersonHandler}>Switch Name</button>
   
 {persons}
     </div>
     
      
    );
  }
   
}
export default App;
