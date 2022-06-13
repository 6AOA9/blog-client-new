import PostWidget from "../../posts/widget/PostWidget"

const RecentPosts = ({posts, title = 'Recent Posts'}) => {
    return (
        <div className="widget">
            <h2 className="widget-title">{title}</h2>
            <div className="blog-list-widget">
                <div className="list-group">
                    {posts?.map((post, i) => {
                        return <PostWidget post={post} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default RecentPosts