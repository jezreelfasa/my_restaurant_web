import "./Subheading.css"

import Spoon1 from "../../assets/spoon.png"
function Subheading({ title }) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <p className="p__cormorant">{title}</p>
            <img src={Spoon1} alt="spoon" className="spoon__img" />
        </div>



    )
}

export default Subheading