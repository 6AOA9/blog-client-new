import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"
import Categories from "./widgets/Categories"
import RecentPosts from "./widgets/RecentPosts"
import Ads from "./widgets/Ad"
import Tag from "./widgets/Tags"


const SideBar = () => {
    const appCtx = useContext(AppContext)
    return (
        <div className="sidebar">
            <RecentPosts posts={appCtx?.siteData?.topPosts} title={'Most Viewed'} />
            <RecentPosts posts={appCtx?.siteData?.recentPosts} />
            <Categories />
            <Tag />
            <Ads />
        </div>
    )
}

export default SideBar