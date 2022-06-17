import { Link } from "react-router-dom"

const WidePost = ({ post }) => {
    return (
        <>
            <div className="blog-box row">
                <div className="col-md-4">
                    <div className="post-media">
                        <Link to={`/post/${post?.id}`}>
                            <img src={post?.picture} alt={post?.title} className="img-fluid" />
                            <div className="hovereffect"></div>
                        </Link>
                    </div>
                </div>
                <div className="blog-meta big-meta col-md-8">
                    {post?.Category?.map((cat, i) => <span key={i} className="bg-aqua">{cat.title}</span>)}
                    <h4>
                        <Link to={`/post/${post?.id}`}>{post?.title}</Link>
                    </h4>
                    <p>{post?.excerpt}</p>
                    <small><i className="fa fa-eye"></i> {post?.views}</small>
                    <small>{post?.createdAt}</small>
                    <small>by: {post?.User?.name}</small>
                </div>
            </div>
            <hr className="invis" />
        </>
    )
}

export default WidePost