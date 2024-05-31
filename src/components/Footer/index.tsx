import "./Footer.css";

type FooterProps = {

}

const Footer: React.FC<FooterProps> = props => {
    return (
        <div className="footer-container">
            <p>Will Thomas</p>
            <p>2024</p>
        </div>
    );
}

export default Footer;