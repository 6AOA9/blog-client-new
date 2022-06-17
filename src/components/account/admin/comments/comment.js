import React, { useRequest, useEffect, useState } from "react";

const comment = () => {
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
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((comments, i) => {
                    return (
                        <tr key={i}>
                            <td>{comments?.user?.map((c, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <span key={i}>{c.post}</span>
                                        {(i < comments.User.length - 1) && <>, </>}
                                    </React.Fragment>
                                )
                            })}</td>
                            <td>{comments?.createdAt}</td>
                            <td>
                                <button onClick={() => { deletComment(comments.id) }} className="btn btn-primary" >Delete</button>

                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default comment