import React, { useEffect, useState } from "react";
import { useRequest } from "../../../../lib/hooks/useRequest";

const Comments = () => {
    const sendRequest = useRequest()
    const [comments, setComments] = useState([])

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/comments`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setComments(response.data)
            }
        })
    }, [])

    const deletComment = (id) => {
        if (window.confirm('Do you want to delete this Comment')) {
            sendRequest(`${process.env.REACT_APP_API_URL}/comments/${id}`, {}, {}, {
                auth: true,
            }, 'DELETE').then((response) => {
                console.log(response)
                if (response?.success) {
                    const currentComments = [...comments]
                    const filteredComments = currentComments.filter((Comment) => Comment.id != id)
                    setComments(filteredComments)
                }
            })
        }
    }

    return (
        <table className="w-100 table table-striped">
            <thead>
                <tr>
                    <th>Text</th>
                    <th>Post</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((comment, i) => {
                    return (
                        <tr key={i}>
                            <td>{comment?.content}</td>
                            <td>{comment?.Post?.title}</td>
                            <td>{comment?.User?.name}</td>
                            <td>{comment?.createdAt}</td>
                            <td>
                                <button onClick={() => { deletComment(comment.id) }} className="btn btn-primary" >Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Comments