import React, { useEffect, useState } from "react"
import { useRequest } from "../../../lib/hooks/useRequest"
import { Link } from "react-router-dom"

const Posts = () => {

    const sendRequest = useRequest()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/users/getUserPosts`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPosts(response.data)
            }
        })
    }, [])

    const deletPost = (id) => {
        if (window.confirm('Do you want to delete this post')) {
            sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`, {}, {}, {
                auth: true,
            }, 'DELETE').then((response) => {
                console.log(response)
                if (response?.success) {
                    const currentPosts = [...posts]
                    const filteredPosts = currentPosts.filter((post) => post.id != id)
                    setPosts(filteredPosts)
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
                    <th>Verified</th>
                    <th>Date</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post, i) => {
                    return (
                        <tr key={i}>
                            <td>{post?.title}</td>
                            <td>{post?.Categories?.map((c, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <span key={i}>{c.title}</span>
                                        {(i < post.Categories.length - 1) && <>, </>}
                                    </React.Fragment>
                                )
                            })}</td>
                            <td>{post?.verified ? 'Yes' : 'No'}</td>
                            <td>{post?.createdAt}</td>
                            <td style={{whiteSpace: 'nowrap'}}>
                                <button onClick={() => { deletPost(post.id) }} className="btn btn-primary" >Delete</button>
                                <Link to={`/account/edit/${post.id}`}>
                                    <button className="btn btn-primary" style={{ marginLeft: "2px" }}>Edit</button >
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Posts