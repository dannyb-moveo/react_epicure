import { footerLinks } from "../../utils/constants";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer_links">
                {footerLinks.map(link => {
                    const { id, text, url } = link;
                    return <li key={id}>{text}</li>;
                })}
            </ul>
        </footer>
    );
};

export default Footer;
