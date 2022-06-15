
import { useRef } from "react"
import { useRequest } from "../../../lib/hooks/useRequest"

const AddPost = () => {
    const commentRef = useRef()
    const excerptRef = useRef()
    const tagsRef = useRef()
    const pictureRef = useRef()
    const titleRef = useRef()
const categoriesRef = useRef()    





    const sendRequest = useRequest()
    const addpost = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts`, {}, {
            title : titleRef.current.value,
            content: commentRef.current.value,
            excerpt:excerptRef.current.value,
            tags:tagsRef.current.value,
            picture:pictureRef.current.value,
            
            categories : categoriesRef.current.value,



        }, {auth: true, type: 'json'}, 'post')
            .then((comment) => {
                window.alert(comment?.messages?.join(' '))
            })
    }
    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Create new article</h4>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-wrapper">
                      <input type={"text"} ref={titleRef} className="form-control" placeholder="Title" />
                      <input type={"text"} ref={excerptRef} className="form-control" placeholder="Excerpt"/>
                      <input type={"tags"} ref={tagsRef}className="form-control" placeholder="Tag" />
                      <input type={"select"} ref={categoriesRef}className="form-control" placeholder="Category" /> 
                      <input type={"file"} ref={pictureRef}className="form-control" placeholder="picture" />
                        <textarea ref={commentRef} className="form-control" placeholder="Your Article"></textarea>
                        <button onClick={addpost} type="button" className="btn btn-primary">Submits</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost