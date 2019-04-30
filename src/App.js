import React from "react"
import Card from "./Card"
import City from "./City"

class App extends React.Component {
    render(){
        return(
            <div className="container">
                <City/>
            <div className="fiveDays">
                
                <Card
                    day="Friday"
                    icon="sun.png"
                    low="22"
                    high="28"
                />
                <Card
                    day="Saturday"
                    icon="flash.png"
                    low="21"
                    high="32"
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
                    />
            </div>
            </div>
        )
    }
}

export default App