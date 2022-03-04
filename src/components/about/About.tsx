import { Title } from "..";

import "./about.scss";

import aboutLogo from "../../assets/about-logo.png";

import appleIcon from "../../assets/apple.svg";
import playIcon from "../../assets/play.svg";

const About = () => {
    return (
        <section className="about padding-y">
            <div className="container">
                <div className="about_content">
                    <Title title="ABOUT US :" align="left" />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In a lacus vel justo fermentum bibendum non eu ipsum.
                        Cras porta malesuada eros, eget blandit turpis suscipit
                        at. Vestibulum sed massa in magna sodales porta. Vivamus
                        elit urna, dignissim a vestibulum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In a lacus vel justo fermentum bibendum no eu ipsum.
                        Cras porta malesuada eros.
                    </p>
                </div>

                <div className="about_logo">
                    <img src={aboutLogo} alt="about-logo" />
                </div>

                <div className="about_content-buttons">
                    <button type="button" className="btn">
                        <img src={appleIcon} alt="apple" />
                        <p>
                            Download on the <br /> <span>App Store</span>
                        </p>
                    </button>
                    <button type="button" className="btn">
                        <img src={playIcon} alt="play" />
                        <p>
                            Get it on <br /> <span>Google Play</span>
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
