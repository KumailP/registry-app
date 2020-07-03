import React from "react"
import { Link } from "react-router-dom"

function Home(){
    return (
        <div className="home">
            <h1>Home</h1>
            <Link to="/registry">Click here to go to registry</Link>
        </div>
    )
}

export default Home;