import portrait from "../../images/portrait-home.jpg";
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home-body">
                <div className="home-text">
                    <h1>Will Thomas</h1>
                    <h2>Software Engineer</h2>
                </div>
                <img src={portrait} alt="Portrait of me" className="home-portrait"/>
            </div>
        </div>
    );
}

export default Home;