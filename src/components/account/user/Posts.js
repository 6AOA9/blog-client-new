import { useEffect, useState } from "react"
import { useRequest } from "../../../lib/hooks/useRequest"
import Delete from "./Delete"

const Posts = () => {

    const sendRequest = useRequest()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/users/getUserPosts`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            console.log(response)
            if (response.success) {
                setPosts(response.data)
            }
        })
    }, [])
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
                {posts.map((post, i) => {
                    return (
                        <tr key={i}>
                            <td>{post?.title}</td>
                            <td>{post?.Categories?.map((c, i) => {
                                return (
                                    <>
                                        <span key={i}>{c.title}</span>
                                        {(i < post.Categories.length - 1) && <>, </>}
                                    </>
                                )
                            })}</td>
                            <td>{post?.createdAt}</td>
                            <td>
                                {/* <Delete/> */}

                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Posts