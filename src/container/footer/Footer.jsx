import "./Footer.css"
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import Newsletter from "../../components/footer/Newsletter.jsx";
import FooterOverlay from '../../components/footer/FooterOverlay';

import Geritch from '../../assets/gericht.png';
import Spoon1 from "../../assets/spoon.png"


function Footer() {
    return (
        <div className="app__footer section__padding" id="login">
            <FooterOverlay />
            <Newsletter />

            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contact Us</h1>
                    <p className="p__opensans">12, Sabano  Street Mafoluku, Lagos State, LOS 10007, Nigeria</p>
                    <p className="p__opensans">+234 816 989 1207</p>
                    <p className="p__opensans">E-mail: emmanuelfasa@gmail.com</p>
                </div>

                <div className="app__footer-links_logo">
                    <img src={Geritch} alt="footer_logo" />
                    <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                    <img src={Spoon1} className="spoon__img" style={{ marginTop: 15 }} />
                    <div className="app__footer-links_icons">
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                </div>

                <div className="app__footer-links_work">
                    <h1 className="app__footer-headtext">Working Hours</h1>
                    <p className="p__opensans">Monday-Friday:</p>
                    <p className="p__opensans">08:00 am - 12:00 am</p>
                    <p className="p__opensans">Saturday-Sunday:</p>
                    <p className="p__opensans">07:00 am - 11:00 pm</p>
                </div>
            </div>

            <div className="footer__copyright">
                <p className="p__opensans">2024 Gericht. All Rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer