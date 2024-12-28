import React from 'react' ;
import ReactDOM from 'react-dom/client';
import '.App/website/app.css';

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
                    <li>Finacial Literacy for Teens/Adults</li>
                    <li>Cooking and Nutrition</li>
                    <li>DIY Projects and Crafts</li>
                </ul>
            </div>
        </div>
    );
}

function AboutUsPage() {
    return (
        <div className="about-us-page">
            <div className="about-us">
            <h2>About New Limit</h2>
            <p>At New Limit, we focus on helping communities grow and thrive by providing resources and education. Our mission includes:</p>
            <ul>
                <li>Funding tools and resources for local school educators.</li>
                <li>Offering after-school programs to teach kids practical skills.</li>
                <li>Empowering families and communities to achieve self-reliance.</li>
            </ul>
            </div>
        </div>
    );
}