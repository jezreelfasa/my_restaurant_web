import "./Laurels.css"
import { images} from "../../constants"
import data from "../../data"
import Subheading from '../../components/subheading/Subheading';




const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="awards" />
        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            <p className="p__opensans">{subtitle}</p>
        </div>
    </div>
)




function Laurels() {
    return (
        <div className="app__bg app__wrapper section__padding" id="awards">
            <div className="app__wrapper_info">
                <Subheading title="Awards & recognition" />
                <h1 className="headtext__cormorant">Our Laurels</h1>

                <div className="app__laurels_awards">
                    {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
                </div>
            </div>

            <div className="app__wrapper_img">
                <img src={images.Laurels} alt="laurels_img" />
            </div>
        </div>
    )
}

export default Laurels
