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
            <h2>About New Limit</h2>
            <p>At New Limit, we focus on helping communities grow and thrive by providing resources and education. Our mission includes:</p>
            <ul>
                <li>Funding tools and resources for local school educators.</li>
                <li>Offering after-school programs to teach kids practical skills.</li>
                <li>Empowering families and communities to achieve self-reliance.</li>
            </ul>
            <CommentSection />
        </div>
    );
}

// Comment section component
function CommentSection() {
    const [comments, setComments] = React.useState([]);
    const [newComment, setNewComment] = React.useState("");

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="comment-section">
            <h2>Community Feedback</h2>
            <textarea
                placeholder="Leave a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Submit</button>
            <div className="comments">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        {comment}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ContactPage() {
    return (
        <div className="contact-us-page">
            <h2>How to Reach Us</h2>
            <p>You can reach New Limit at 888.888.888</p>
            <p>Random Email</p>
            <p>Random Location</p>
        </div>
    );
}