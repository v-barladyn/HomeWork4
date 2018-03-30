import React from "react";
import styled from "styled-components";

class Post extends React.Component {

  render() {

   const Li = styled.li`
  font-size: 1.0em;
  text-align: left;
  color: palevioletred;
                `;

    return (
      <Li key={this.props.key}>{this.props.item}</Li>
    );
  }
}

export default Post;