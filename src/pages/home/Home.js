import { useEffect, useState } from "react"
import WidePost from "../../components/posts/wide/WidePost"
import Content from "../../components/shared/Content"
import TopPosts from "./topPosts/TopPosts"
import { useRequest } from "../../lib/hooks/useRequest"

const Home = () => {
    const sendRequest = useRequest()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts`)
            .then(response => {
                if (response.success) {
                    setPosts(response.data)
                }
            })
    }, [])
    return (
        <>
            <TopPosts posts={posts.slice(0, 3)} />
            <Content>
                <div className="blog-list clearfix">
                    {posts.slice(3, posts.length).map((post, i) => {
                        return <WidePost key={i} post={post} />
                    })}
                </div>
            </Content>
        </>
    )
}

export default Home