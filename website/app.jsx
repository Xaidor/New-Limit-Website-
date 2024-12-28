import React from 'react' ;
import ReactDOM from 'react-dom/client';

//create a new logo for the homepage with the companys name later
function HomePage() {
    return (
        <div className="home-page">
            <div className="home-content">
                <h1>Welcome to New Limit</h1> 
                <p>Empowering communities to become self-reliant and supporting local educators with the tools they need for success.</p>
                <p>Explore our after-school programs designed to teach kids valuable life skills for adulthood.</p>
            </div>
            <div className="programs-list">
                <h2>Our After School Programs</h2>
                <ul>
                    <li>Gardening Basics</li>
                    <li>Computer Skills and Coding</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}