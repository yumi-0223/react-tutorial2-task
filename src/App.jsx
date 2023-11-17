import React, { useState } from 'react';

export default function App() {
  const [showStory,setShowStory] = useState(false);
  const [xItem,setXItem] = useState("");
  const [yItem,setYItem] = useState("");
  const [zItem,setZItem] = useState("");
  const [name,setName]=useState("Bob");
  const [usuk,setUsuk] = useState("us");

  function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }
  




  return (
    <>
    <form onSubmit={(event)=>{
    event.preventDefault();
    setShowStory(true)
    setXItem(randomValueFromArray(["Willy the Goblin","Big Daddy","Father Christmas"]))
    setYItem(randomValueFromArray(["the soup kitchen","Disneyland","the White House"]))
    setZItem(randomValueFromArray(["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]))
    
    const usukField=event.target.elements.usukField;
    if(usukField.value==="us"){
      setUsuk("us")
    }else{
      setUsuk("uk")
    }
    const customNameField=event.target.elements.customname;
    if(customNameField.value){
      setName(customNameField.value)
    }else{
      setName(Bob);
    }
  
  }}

    >

      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" name="customname"/>
      </div>
      <div>
        <label htmlFor="usukField">US</label>
        <input type="radio" name="usukField" id="us" value="us" defaultChecked/>
        <label htmlFor="usukField">UK</label>
        <input type="radio" name="usukField" id="uk" value="uk" />
      </div>
      <div>
      <button type="submit" >Generate random story</button>
      </div>     
      {showStory && (
        <p>
          It was {usuk === "us" ? "94" : "34"} fahrenheit outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs {usuk === "us"? "300 pounds" : "21 stone"}
          , and it was a hot day.
        </p>
      )}
      </form>
    </>
  );
}