import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Content from "../../components/shared/Content"
import PageTitle from "../../components/shared/PageTitle"
import { useRequest } from "../../lib/hooks/useRequest"
import SharePost from "./partials/SharePost"
import './Post.css'
import { Link } from "react-router-dom"

const Post = () => {
    const sendRequest = useRequest()
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
                    <div className="custombox clearfix">
                        <h4 className="small-title">3 Comments</h4>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="comments-list">
                                    <div className="media"><a className="media-left" href="https://www.free-css.com/free-css-templates"><img src="../assets/images/upload/author.jpg" alt="website template image" className="rounded-circle" /></a>
                                        <div className="media-body">
                                            <h4 className="media-heading user_name">Amanda Martines <small>5 days ago</small></h4>
                                            <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.</p>
                                            <a href="https://www.free-css.com/free-css-templates" className="btn btn-primary btn-sm">Reply</a></div>
                                    </div>
                                    <div className="media"><a className="media-left" href="https://www.free-css.com/free-css-templates"><img src="../assets/images/upload/author_01.jpg" alt="website template image" className="rounded-circle" /></a>
                                        <div className="media-body">
                                            <h4 className="media-heading user_name">Baltej Singh <small>5 days ago</small></h4>
                                            <p>Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small.</p>
                                            <a href="https://www.free-css.com/free-css-templates" className="btn btn-primary btn-sm">Reply</a></div>
                                    </div>
                                    <div className="media last-child"><a className="media-left" href="https://www.free-css.com/free-css-templates"><img src="../assets/images/upload/author_02.jpg" alt="website template image" className="rounded-circle" /></a>
                                        <div className="media-body">
                                            <h4 className="media-heading user_name">Marie Johnson <small>5 days ago</small></h4>
                                            <p>Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small.</p>
                                            <a href="https://www.free-css.com/free-css-templates" className="btn btn-primary btn-sm">Reply</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="invis1" />
                    <div className="custombox clearfix">
                        <h4 className="small-title">Leave a Reply</h4>
                        <div className="row">
                            <div className="col-lg-12">
                                <form action="#" method="post" className="form-wrapper">
                                    <input type="text" className="form-control" placeholder="Your name" />
                                    <input type="text" className="form-control" placeholder="Email address" />
                                    <input type="text" className="form-control" placeholder="Website" />
                                    <textarea className="form-control" placeholder="Your comment"></textarea>
                                    <button type="submit" className="btn btn-primary">Submit Comment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default Post