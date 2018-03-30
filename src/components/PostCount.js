import React from "react";

class PostsCount extends React.Component {

  render() {

    return (
      <div>        
        <div>Кількість постів : {this.props.show} </div>
      </div>
    );
  }
}



export default PostsCount;