import { useContext } from "react"
import { AppContext } from "../../../contexts/AppContext"

const Categories = () => {
    const appCtx = useContext(AppContext)
    return (
        <div class="widget">
            <h2 class="widget-title">Popular Categories</h2>
            <div class="link-widget">
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