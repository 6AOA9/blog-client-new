import { useEffect, useState } from "react"
import { useRequest } from "../../../lib/hooks/useRequest"

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
    // const deletePost = (id) => {
    //     const res = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
    //         method: 'DELETE'
    //     }).then((result) => {
    //         result.json().then((resp) => {
    //             console.log(resp);
    //         })
    //     });
    // }

    const deletPost = (id) => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`, {}, {}, {
            auth: true,
        }, 'DELETE').then((response) => {
            console.log(response)
            if (response.success) {
                console.log(response)
            }
        })
    }

    // const handleRemoveItem = (e) => {
    //     const post = e.target.getAttribute("post")
    //     updateList(list.filter(item => item.post !== post));
    // };

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
                                <button onClick={deletPost} >Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Posts