import "./Aboutus.css"
import { images } from "../../constants"




function Aboutus() {
    return (
        <div className="app__aboutus app__bg flex__center section__padding" id="about">
            <div className="app__aboutus-overlay flex__center">
                <img src={images.G} alt="letter g image " />
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headertext__cormorant">About Us</h1>
                    <img src={images.Spoon2} alt="spoon" className="spoon__img"></img>
                    <p className="p__opensans">We have not only mastered the art of hospitality, we provide the best meals you can ever think of, you cannot stop at one. </p>
                    <button className="custom__button">Learn More</button>
                </div>
                <div className="app__aboutus-content_knife flex__center">
                    <img src={images.knife} alt="about knife" />
                </div>
                <div className="app__aboutus-content_history">
                    <h1 className="headertext__cormorant">Our History</h1>
                    <img src={images.Spoon2} alt="spoon" className="spoon__img"></img>
                    <p className="p__opensans">We have not only mastered the art of hospitality, we provide the best meals you can ever think of, you cannot stop at one. </p>
                    <button className="custom__button">Learn More</button>
                </div>
            </div>
        </div>
    )
}
export default Aboutus