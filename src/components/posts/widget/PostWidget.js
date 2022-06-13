import { Link } from "react-router-dom"

const PostWidget = ({post}) => {
    return (
        <Link to={`/post/${post.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="w-100 d-flex justify-content-between">
                <div>
                    <img src={post?.picture} alt={post?.title} className="img-fluid float-left" />
                </div>
                <div>
                    <h5 className="mb-1">{post?.title}</h5>
                    <small>{post?.createdAt}</small>
                </div>
            </div>
        </Link>
    )
}

export default PostWidget