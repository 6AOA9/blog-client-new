import SquarePost from "../../../components/posts/square/SquarePost"

const TopPosts = () => {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="left-side">
                        <SquarePost />
                    </div>
                    <div className="center-side">
                        <SquarePost />
                    </div>
                    <div className="right-side hidden-md-down">
                        <SquarePost />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopPosts