import { useContext } from "react"
import { AppContext } from "../../../contexts/AppContext"

const Tag = () => {
    const appCtx = useContext(AppContext)
    return (
        <div class="widget">
            <h2 class="widget-title">Tag</h2>
            <div class="banner-spot clearfix">
                {/* <div class="banner-img"><img src="https://i.pinimg.com/736x/27/9d/53/279d533491df1053a0b5cc273611918d.jpg" alt="website template image" class="img-fluid" /></div> */}
            </div>
        </div>
    )
};

export default Tag