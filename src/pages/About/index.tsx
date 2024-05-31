import portrait from "../../images/portrait-about.png";
import './About.css';

const About = () => {
    return (
            <div className="tab-container about-body">
                <img src={portrait} alt="Portrait of me" className="about-portrait"/>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>I am a software engineer with a background in web development. Currently, I work at <a href="https://bigtime.net/" target="_blank" rel="noreferrer">BigTime Software</a>. In this role, I combine my professional, educational, volunteer, and personal experiences to develop features that cater to a diverse user base spanning hundreds of organizations globally.</p>
                    <p>In 2021, I graduated from Northeastern University with a BS in Computer Science and Philosophy. The logical reasoning and argumentative skills I acquired through my philosophy coursework greatly enhance my ability to navigate the intricacies of software development. In addition, the ethical insights I've gathered help me put into perspective the moral dilemmas arising from technological advancements like machine learning and AI.</p>
                    <p>Outside of coding, I enjoy reading, cooking, video/board/card games, and rock climbing. I currently live in Somerville, Massachusetts.</p>
                </div>
            </div>
    );
}

export default About;