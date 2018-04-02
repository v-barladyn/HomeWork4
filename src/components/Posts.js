import React from "react";
import Post from './Post.js';

class Posts extends React.Component {

  render() {
      console.log("this.props.titles");
      console.log(this.props.titles);
    return (
        <ul>
        {this.props.titles.slice(0, this.props.lim).map((item, key) => {
          return (<Post item = {item.title} key = {key} />)
        })
        }
        </ul>       

     
    );
  }
}

export default Posts;