import React from "react";
import './App.css'


class App extends React.Component{
    render(){
       return(
        <div className="container">
            <div className="topbar">
                <h1>TopBAr</h1>
            </div>

            <div className="cards">
                <h1>CArds</h1>
                <h1>CArds</h1>
                <h1>CArds</h1>
                <h1>CArds</h1>
                <h1>CArds</h1>
            </div>

            <div className="sidebar">
                <h1>sidebar</h1>
            </div>
        </div>
       )
    }
}


export default App;