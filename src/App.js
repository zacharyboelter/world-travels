import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'

export default function App() {
    console.log(data)
    const cards = data.map(item => {
        return <Card
            key={item.id}
            {...item}
        />
    })
    return (
        <div className="main-wrapper">
            <Nav />
            {cards}
        </div>
    )
}