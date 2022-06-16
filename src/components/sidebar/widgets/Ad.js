import { useContext } from "react"
import { AppContext } from "../../../contexts/AppContext"

const Ads = () => {
    const appCtx = useContext(AppContext)
    return (
        <div className="widget">
            <h2 className="widget-title">Ads</h2>
            <div className="link-widget">
                <ul>
                    {appCtx?.siteData?.menu?.map((ad, i) => {
                        return <li key={i}><a target='_blank' href={ad.url}>{ad.picture}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Ads