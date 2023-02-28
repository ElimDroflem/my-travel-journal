import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"

export default function App () {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.title}
                items={item}
            />
        )
    })
    
    return(
        <div className="journal">
            <Header />
            {cards}
        </div>
    )
}
