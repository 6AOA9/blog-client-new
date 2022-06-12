import { Link } from "react-router-dom"

const SquarePost = ({post}) => {
    return (
        <div className="masonry-box post-media">
            <img src={post?.picture} alt={post?.title} className="img-fluid" />
            <div className="shadoweffect">
                <div className="shadow-desc">
                    <div className="blog-meta">
                        {post?.Category?.map((cat, i) => <span key={i} className="bg-aqua">{cat?.title}</span>)}
                        <h4>
                            <Link to={`post/${post?.id}`}>{post?.title}</Link>
                        </h4>
                        <small>
                            <Link to={`post/${post?.id}`}>{post?.createdAt}</Link>
                        </small>
                        <small>
                        <Link to={`post/${post?.id}`}>by {post?.User?.name}</Link>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SquarePost