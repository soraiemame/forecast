import React from "react";
import pos from "../utils/position";

export default class Content extends React.Component {
    get = () => {
        const places = document.place.choose;
        const str = places.options[places.selectedIndex];
        console.log(str);
    }
    render(){
        let view = [];
        let k = 0;
        for(const i in pos){
            view.push(<option key={ k } value={ pos[i] }>{ i }</option>);
            k++;
        }
        return (
            <div className="flex justify-center">
                <form name="place" className="">
                    <select name="choose" className="bg-yellow-200">
                        { view }
                    </select>
                </form>
                <button className="bg-blue-500 py-3 px-5 rounded-lg" onClick={this.get}>click</button>
            </div>
        );
    }
}