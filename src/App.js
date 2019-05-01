import React from "react"
import Card from "./Card"
import City from "./City"
import weatherData from "./weather"

class App extends React.Component {
    constructor(){
        super()
        this.state = {}
    }

    

    
    render(){
        console.log(weatherData[0].card.high)
        let cardArray = weatherData.map(item => <Card key={item.id} card={item.card} />)
        return(
            <div className="container">
                <City/>
            <div className="fiveDays">
                {cardArray}
                
            </div>
            </div>
        )
    }
}

export default App


/* <Card
                    day={weatherData[0].card.day}
                    icon={weatherData[0].card.icon}
                    low={weatherData[0].card.low}
                    high={weatherData[0].card.high}
                />
                <Card
                    day={weatherData[1].card.day}
                    icon={weatherData[1].card.icon}
                    low={weatherData[1].card.low}
                    high={weatherData[1].card.high}
                    />
                <Card
                    day="Sunday"
                    icon="cloudy.png"
                    low="23"
                    high="31"
                    />
                <Card
                    day="Monday"
                    icon="sun.png"
                    low="22"
                    high="33"
                    />
                <Card
                    day="Tuesday"
                    icon="sun.png"
                    low="22"
                    high="27"
                    /> */