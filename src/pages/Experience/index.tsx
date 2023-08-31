import Card from "../../components/Card";
import portrait from "../../images/portrait-about.jpg";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience-cards">
                <Card
                    title="Test title"
                    tags={['Here', 'Are', 'My', 'Tags']}
                    imageSrc={portrait}
                    className="experience-card"
                >
                    I am using this as a little test!
                </Card>
            </div>
        </div>
    );
}

export default Experience;