import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Content from "../../components/shared/Content"
import PageTitle from "../../components/shared/PageTitle"
import { useRequest } from "../../lib/hooks/useRequest"
import SharePost from "./partials/SharePost"
import './Post.css'
import { Link } from "react-router-dom"
import Comments from "./partials/Comments"
import AddComment from "./partials/AddComment"
import { AuthContext } from "../../contexts/AuthContext"

const Post = () => {
    const sendRequest = useRequest()
    const authCtx = useContext(AuthContext)
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`)
            .then((response) => {
                if (response.success) {
                    console.log(response.data)
                    setPost(response.data)
                }
            })
    }, [id])
    return (
        <>
            <PageTitle title={post?.title} />
            <Content>
                <div className="page-wrapper">
                    <div className="blog-title-area">
                        <div className="d-flex">
                        {
                            post?.Categories?.map((category, i) => {
                                return <span className="d-inline-block mr-2 color-green" key={i}>
                                <Link to={`/category/${category?.id}`}>{category?.title}</Link>
                            </span>
                            })
                        }
                        </div>
                        <h3>{post?.title}</h3>
                        <div className="blog-meta big-meta">
                            <small><a href="#">{post?.createdAt}</a></small>
                            <small><a href="#">{post?.User?.name}</a></small>
                            <small><a href="#"><i className="fa fa-eye"></i> {post?.views}</a></small>
                        </div>
                        <SharePost id={id} />                            
                    </div>
                    <div className="single-post-media">
                        <div className="post-picture" style={{backgroundImage:`url(${post?.picture})`}}></div>
                    </div>
                    <div className="blog-content">
                        <div dangerouslySetInnerHTML={{__html: post?.content}}></div>
                    </div>
                    <div className="blog-title-area">
                        <div className="tag-cloud-single">
                            <span>Tags</span>
                            {
                                post?.Tags?.map((tag, i) => {
                                    return <small key={i}>
                                    <Link to={`/tag/${tag?.id}`}>{tag?.title}</Link>
                                </small>
                                })
                            }
                        </div>
                        <SharePost id={id} />
                    </div>
                    <hr className="invis1" />
                    <Comments comments={post?.Comments} />
                    <hr className="invis1" />
                    {authCtx.isAuthenticated ?
                        <AddComment /> :
                        <Link to='/sign-in'>Sign in to comment</Link>
                    }
                </div>
            </Content>
        </>
    )
}

export default Post