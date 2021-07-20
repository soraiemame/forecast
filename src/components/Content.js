import React from "react";
import Card from "./Card";
import env from "../env/env";

export default class Content extends React.Component {
    constructor(){
        super();
        this.state = {name: "",show: false,temp: 0,hum: 0,date: "",weather: ""};
    }
    get = () => {
        const pos = document.getElementById("city-name").value;
        const pre = this.state.name;
        if(pos === pre) {
            alert("You have selected the same position.");
            return;
        }
        this.setState({name: pos});

        fetch(`${env.API_URL}/weather/?q=${pos}&APPID=${env.API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.cod === "404"){
                alert("The city wasn't found.");
                return;
            }
            this.setState({name: pos,show: true,temp: data.main.temp,hum: data.main.humidity,
                date: (new Date()).toLocaleDateString(),weather: data.weather[0].description,iconID: data.weather[0].icon});
        });
    }
    render(){
        return (
            <div className="m-4 lg:flex lg:justify-center">
                <div className="flex justify-center lg:inline lg:mr-8 lg:mt-10">
                    <input id="city-name" className="border-solid border-2 border-gray-500 shadow-lg rounded-lg p-2 m-2
                    focus:border-blue-500 focus:border-4 focus:outline-none" placeholder="Enter city name" />
                    <button className="bg-blue-400 py-2 px-3 rounded-lg font-semibold hover:bg-blue-500 shadow-lg
                    active:bg-blue-400 focus:outline-none" onClick={this.get.bind(this)}>click</button>
                </div>
                <div className="flex justify-center lg:inline">
                    <Card show={this.state.show} name={this.state.name} temp={this.state.temp} hum={this.state.hum}
                    date={this.state.date} weather={this.state.weather} iconID={this.state.iconID} />
                </div>
            </div>
        );
    }
}