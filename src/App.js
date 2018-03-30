import React from "react";
import { render } from "react-dom";
import articles from './components/data.js';
import Posts from './components/Posts.js';
import Button from './components/Button.js';
import PostCount from './components/PostCount.js';
import Search from './components/Search.js';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: 10,
            show: true ,
            search : "",
            articles: articles,

        };

        this.showMore = this.showMore.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange({ target: { name, value } }) {
        this.setState({
            [name]: value,
            articles: articles.filter(e => {
                return e.title.indexOf(value) >= 0;
            }).slice(0, 10),

              limit : articles.filter(e => {
                  return e.title.indexOf(value) >= 0;
             }).length
        });

    }

    showMore() {
        this.setState({
            show: this.state.limit >= 90 ? false : true,
            limit: this.state.limit + 10,
        });

    }

    render() {



        return (
            <div>
                <Search search = {this.state.search} change ={this.handleChange} />
                <PostCount show = {this.state.limit} />
                <Posts titles = {this.state.articles} lim = {this.state.limit}/>
                {this.state.show && <Button button = {this.showMore} />}
            </div>
        );
    }
}

render(<App />,
    document.getElementById("root"));

export default App;