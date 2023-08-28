import portrait from "../../images/portrait-about.jpg";
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-body">
                <img src={portrait} alt="Portrait of me" className="about-portrait"/>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>I am a Software engineer with a background in web development. Currently, I work on the <a href="https://bigtime.net/projector/" target="_blank" rel="noreferrer">Projector</a> product at <a href="https://bigtime.net/" target="_blank" rel="noreferrer">BigTime Software</a> where I leverage my professional, educational, volunteer, and recreational experience to create features used by thousands of users from hundreds of organizations worldwide.</p>
                    <p>In 2021, I graduated from Northeastern University with a BS in Computer Science and Philosophy. The lessons in logical thinking and argument construction from my philosophy classes enrich my ability to grasp the complexity of software development. In addition, the moral lessons help me contextualize the new ethical questions emerging from advancements in software, such as the adoption of machine learning and AI.</p>
                    <p>When I am not working on software, I enjoy reading, cooking, video/board/card games, and rock climbing. I currently live in Somerville, Massachusetts.</p>
                </div>
            </div>
        </div>
    );
}

export default About;