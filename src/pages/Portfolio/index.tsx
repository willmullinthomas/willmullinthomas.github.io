import Card from "../../components/Card";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div className="tab-container portfolio-body">
            <Card
                title={<a href="https://github.com/willmullinthomas/multiplication-quiz" target="_blank" rel="noreferrer">Multiplication Quiz</a>}
                tags={['Python', 'MySQL']}
                className="portfolio-card"
                contentClassName="portfolio-card-content"
            >
                <div>
                    Inspired by my brother and his roomates quizzing each other on their multiplication tables, I created a desktop app that allows anyone to test their knowledge and speed. Unit tests will run as a part of a github workflow every time a new commit is pushed.
                </div>
                <div>
                    <strong>Next Steps</strong>: I am currently working on a MySQL database that will save high scores and allow players to see the current leaderboard for their settings.
                </div>
            </Card>
            <Card
                title={<a href="https://github.com/willmullinthomas/fish-game" target="_blank" rel="noreferrer">Fish Game</a>}
                tags={['Typescript']}
                className="portfolio-card"
                contentClassName="portfolio-card-content"
            >
                <div>
                    A tournament system for the game <a href="https://www.fantasyflightgames.com/en/products/hey-thats-my-fish/" target="_blank" rel="noreferrer">Hey, That's My Fish!</a>.Users can enter a tournament in which an computer player will play multiple games against other computer players. Our system runs all of these games and determines each winner. There is rigorous unit testing for the rules of the game itself, the strategy of the computer players, and the tournament management system.
                </div>
            </Card>
            <Card
                title={<a href="https://github.com/willmullinthomas/willmullinthomas.github.io" target="_blank" rel="noreferrer">This Website!</a>}
                tags={['Typescript', 'React']}
                className="portfolio-card"
                contentClassName="portfolio-card-content"
            >
                <div>
                    A portfolio website I created with the help of <a href="https://create-react-app.dev/" target="_blank" rel="noreferrer">Create React App</a> for the initial build configuration. All components and styling were created by me with the exception of the icons from <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">Font Awesome</a>.The website is hosted right from the repo with <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub pages</a>.
                </div>
            </Card>
        </div>
    );
}

export default Portfolio;