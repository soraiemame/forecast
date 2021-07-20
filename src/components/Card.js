const Card = (props) => {
    if(props.show === false){
        return (
            <div className="m-8 p-4 h-60 w-96 rounded-xl border-solid border-2 border-gray-700">
                <h1 className="text-xl mt-16 text-center font-semibold">Weather card will come here</h1>
            </div>
        );
    }
    else{
        console.log(props);
        const id = parseInt(props.iconID.slice(0,2));
        const from = {1: "red-600",2: "red-600",3: "blue-600",4: "blue-600",9: "gray-600",10: "gray-600",11: "yellow-700",13: "blue-600",50: "gray-600"};
        const to = {1: "red-300",2: "red-300",3: "blue-300",4: "blue-300",9: "gray-400",10: "gray-400",11: "yellow-400",13: "blue-300",50: "gray-400"};
        return (
            <div className={`m-8 p-4 h-60 w-96 rounded-xl bg-gradient-to-br from-${from[id]}
            to-${to[id]} text-gray-200 shadow`}>
                <div className="flex justify-between">
                    <div className="m-3">
                        <h1 className="text-3xl font-semibold">{ props.name }</h1>
                    </div>
                    <img className="w-24 h-24 float-right top-0 right-0" src={`https://openweathermap.org/img/wn/${props.iconID}@2x.png`} />
                </div>
                <div className="-mt-10">
                    <div className="m-3">
                        <p className="text-gray-300 text-sm">Weather</p>
                        <h2 className="text-xl font-semibold">{ props.weather }</h2>
                    </div>
                    <div className="flex m-3">
                        <div className="mr-5">
                            <p className="text-gray-300 text-sm">Date</p>
                            <h2 className="text-xl font-semibold">{ props.date }</h2>
                        </div>
                        <div className="mr-5 ml-5">
                            <p className="text-gray-300 text-sm">Temperature</p>
                            <h2 className="text-xl font-semibold">{ props.temp }℃</h2>
                        </div>
                        <div className="ml-5">
                            <p className="text-gray-300 text-sm">Humidity</p>
                            <h2 className="text-xl font-semibold">{ props.hum }%</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;