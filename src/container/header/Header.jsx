import "./Header.css"
import Welcome from "../../assets/welcome (1).png"
import Subheading from '../../components/subheading/Subheading';






function Header() {
    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <Subheading title="Chase The New Flavor" />
                <h1 className="app__header-h1">Key to The Finest of Dinings</h1>
                <p className="p__opensans" style={{ margin: "2rem 0" }}>Experience Hospitality services beyond the usual, we meet customer's needs and exceed expectations. </p>
                <button type="button" className="custom__button">Explore Menu</button>
            </div>
            <div className="app__wrapper_img">
                <img src={Welcome} alt="header img" />
            </div>

        </div>
    )
}

export default Header