/**
 * Created by v.barladyn on 29.03.18.
 */
import React from "react";
import styled from "styled-components";

class Search extends React.Component {


    render() {

     const Input = styled.input`
      border: 5px solid gray;      
      border-radius: 5px;
      background: #58FAF4;   
            `;

        return (
            <form >

                 <div>Search form <br/>
                     <Input type="text"
                            name="search"
                            value={this.props.search}
                            onChange={this.props.change}
                            placeholder="search" />
                 </div>
            </form>
        );
    }
}



export default Search;