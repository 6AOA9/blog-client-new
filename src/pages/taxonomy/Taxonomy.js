// import Content from "../../components/shared/Content";
import { useEffect, useState } from "react";
import { useRequest } from "../../lib/hooks/useRequest";
import { useParams } from "react-router-dom";
import Content from "../../components/shared/Content";
import WidePost from "../../components/posts/wide/WidePost";

const Taxonomy = ({ taxonomy }) => {
    const sendRequest = useRequest();
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        sendRequest(
            `http://localhost:3000/posts/getWidePost/${id}`,
            {},
            {},
            {},
            "GET"
        ).then((response) => {
            if (response?.success) {
                setPosts(response.data.Posts);
            }
        });
    }, [id]);

    return (
        <Content>
            <div className="blog-list clearfix">

                {posts.map((post, i) => {

                    return <WidePost key={i} post={post} />;
                })}
            </div>
        </Content>
    );
};

export default Taxonomy;
