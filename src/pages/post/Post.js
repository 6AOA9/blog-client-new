import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useRequest } from "../../lib/hooks/useRequest"

const Post = () => {
    const sendRequest = useRequest()
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}post/${id}`)
            .then((response) => {
                if (response.success) {
                    setPost(response.data)
                }
            })
    }, [])
    return (
        <>
        
        </>
    )
}

export default Post