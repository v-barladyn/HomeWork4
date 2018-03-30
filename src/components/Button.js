import React from "react";
import styled from "styled-components";

class Button extends React.Component {

  render() {

    const Btn = styled.button`
      border: 1px solid gray;
      transition: box-shadow 500ms, background 500ms;
      border-radius: 5px;
      background: #FF0000;
      outline: none;
      cursor: pointer;
    `;

    return (     
        <div>
         <Btn onClick={this.props.button}>ShowMore</Btn>
       </div>   
      );
  }
}



export default Button;