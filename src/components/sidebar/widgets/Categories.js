import { useContext } from "react"
import { AppContext } from "../../../contexts/AppContext"

const Categories = () => {
    const appCtx = useContext(AppContext)
    return (
        <div className="widget">
            <h2 className="widget-title">Popular Categories</h2>
            <div className="link-widget">
                <ul>
                    {appCtx?.siteData?.menu?.map((category, i) => {
                        return <li key={i}><a href={`/category/${category.id}`}>{category.title}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Categories