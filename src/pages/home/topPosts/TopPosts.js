import SquarePost from "../../../components/posts/square/SquarePost"

const TopPosts = ({posts}) => {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="left-side">
                        <SquarePost post={posts?.[0]} />
                    </div>
                    <div className="center-side">
                        <SquarePost post={posts?.[1]} />
                    </div>
                    <div className="right-side hidden-md-down">
                        <SquarePost post={posts?.[2]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopPosts