import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Es} from "./es";

class App extends Component {
    render() {


        let es = new Es("http://localhost:9200/push_log-*/_search");
        es.search("must", es.match("category", "ConfigureDeviceNetwork"));
        es.search("must", es.queryString("*", ["label"]));
        es.from(0);
        es.size(10);
        es.fetch().then((data) => {
            console.log(data)
        });
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
