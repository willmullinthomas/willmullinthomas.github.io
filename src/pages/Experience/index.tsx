import Card from "../../components/Card";
import bigtime from "../../images/bigtime.png";
import c4c from "../../images/c4c.png";
import enelX from "../../images/enel-x.png";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="tab-container experience-body">
            <div className="experience-cards">
                <Card
                    title={<a href="https://bigtime.net/" target="_blank" rel="noreferrer">BigTime Software</a>}
                    tags={['Typescript', 'React', 'Redux', 'C#', 'MS SQL']}
                    imageSrc={bigtime}
                    imageClassName="experience-image"
                    className="experience-card"
                    contentClassName="experience-card-content"
                >
                    <div className="experience-card-text">
                        <div>
                            <strong>Software Engineer I</strong> | Jan 2022 - Present
                            <br />
                            <strong>Software Engineer Co-op</strong> | Jan 2020 - June 2020
                        </div>
                        <div>
                            At Bigtime, I architect web interfaces and reusable components and behaviors. I have onboarded new co-ops (interns) by guiding them through training projects and conducting regular check-ins. Back in 2020, I initially joined as a co-op, and upon my graduation from Northeastern, I was delighted to be rehired full-time.
                        </div>
                    </div>
                </Card>
                <Card
                    title={<a href="https://www.c4cneu.com/" target="_blank" rel="noreferrer">Code 4 Community</a>}
                    tags={['Typescript', 'React', 'Vue.js', 'Java', 'Vert.x', 'PostreSQL']}
                    imageSrc={c4c}
                    imageClassName="experience-image"
                    className="experience-card"
                    contentClassName="experience-card-content"
                >
                    <div className="experience-card-text">
                        <div>
                            <strong>Tech Lead</strong> | May 2021 - Dec 2021
                            <br />
                            <strong>Software Engineer</strong> | Sept 2019 - May 2021
                        </div>
                        <div>
                            I developed both front-end and back-end features for a tree tracking application designed for the <a href="https://treeboston.org/" target="_blank" rel="noreferrer">Speak for the Trees</a> organization. I also played a key role in transitioning the app from Vue.js with an ArcGIS map to a React-based version with integrated Google Maps functionality. Everyone at C4C is a student volunteer, dedicating time to assist non-profit organizations.
                        </div>
                    </div>
                </Card>
                <Card
                    title={<a href="https://www.enelx.com/n-a/en" target="_blank" rel="noreferrer">Enel X</a>}
                    tags={['R', 'Python', 'SOQL']}
                    imageSrc={enelX}
                    imageClassName="experience-image"
                    className="experience-card"
                    contentClassName="experience-card-content"
                >
                    <div className="experience-card-text">
                        <div>
                            <strong>Sales and Analytics Intern</strong> | Jan 2021 - June 2021
                            <br />
                            <strong>Demand Response Program Operations Intern</strong> | Jan 2019 - June 2019
                        </div>
                        <div>
                            I Designed R and Python scripts which managed complicated data objects and saved hundreds of man hours for my team. Additionally, I utilized the Salesforce Object Query Language to query and update customer data.
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Experience;