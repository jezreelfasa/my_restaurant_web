import "./Chef.css"
import Subheading from '../../components/subheading/Subheading';
import chef from  "../../assets/chef.png"
import Sign from "../../assets/sign.png"
    import Quote from  "../../assets/quote.png"




function Chef() {
    return (
        <div className="app__bg app__wrapper section__padding">
            <div className="app__wrapper_img app__wrapper_img-reverse">
                <img src={chef} alt="chef" />
            </div>

            <div className="app__wrapper_info">
                <Subheading title="Chef's word" />
                <h1 className="headtext__cormorant"> Our Core Believe</h1>

                <div className="app__chef-content">
                    <div className="app__chef-content_quote">
                        <img src={Quote} alt="quote " />
                        <p className="p__opensans">The best meals are not gotten with a fortune, but by a simple dedicated heart willing to serve.</p>
                    </div>
                    <p className="p__opensans">Food is like a language, it communicates so much. People who love to eat are always the best people.</p>
                </div>
                <div className="app__chef-sign">
                    <p>Kevin Luo</p>
                    <p className="p__opensans">Chef & Founder</p>
                    <img src={Sign} alt="sign_image" />
                </div>

            </div>
        </div>
    )
}

export default Chef
