import { useRef } from "react"
import { useRequest } from "../../../lib/hooks/useRequest"

const AddComment = () => {
    const commentRef = useRef()
    const sendRequest = useRequest()
    const addComment = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/comments`, {}, {
            content: commentRef.current.value
        }, { auth: true, type: 'json' }, 'post')
            .then((comment) => {
                window.alert(comment?.messages?.join(' '))
            })
    }
    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Leave a Reply</h4>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-wrapper">
                        <textarea ref={commentRef} className="form-control" placeholder="Your comment"></textarea>
                        <button onClick={addComment} type="button" className="btn btn-primary">Submit Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddComment