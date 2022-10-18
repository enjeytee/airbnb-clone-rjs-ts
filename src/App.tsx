import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.jsx";
const App = () => {
    const cards = data.map(item =>  
            <Card
                key={item.id}
                item={item}
            /> 
        );
    return (
        <div>
            <NavBar />
            <Hero />
            <section className="cards-list">
                { cards } 
            </section>
        </div>
    );
};
export default App;