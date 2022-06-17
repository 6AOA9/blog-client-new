import { useContext } from "react"
import { AppContext } from "../../../contexts/AppContext"

const Tag = () => {
    const appCtx = useContext(AppContext)
    return (
        <div className="widget">
            <h2 className="widget-title">Tag</h2>
            <div className="banner-spot clearfix">
                {/* <div className="banner-img"><img src="https://i.pinimg.com/736x/27/9d/53/279d533491df1053a0b5cc273611918d.jpg" alt="website template image" className="img-fluid" /></div> */}
            </div>
        </div>
    )
};

export default Tag