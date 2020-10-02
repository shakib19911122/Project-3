import React from "react";
import NavBar from "../NavBar"
import Container from "../Container"


function SenderUI (){
    
    return (
        <div>
          <NavBar />
          <br></br>
          <Container text = {"Driver current Job"}/>
          <Container text = {"List of delivery been pushed by Sender"}/>
          

          
          
        </div>
      );
    }


export default SenderUI