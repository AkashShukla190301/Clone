import React from "react";
import './App.css'
import SideBar from './SideBar'

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
                <SideBar></SideBar>
            </div>
        </div>
       )
    }
}


export default App;