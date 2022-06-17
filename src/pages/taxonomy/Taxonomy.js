// import Content from "../../components/shared/Content";
import { useEffect, useState } from "react";
import { useRequest } from "../../lib/hooks/useRequest";
import { useParams } from "react-router-dom";
import Content from "../../components/shared/Content";
import WidePost from "../../components/posts/wide/WidePost";

const Taxonomy = (props) => {
    const sendRequest = useRequest();
    const [posts, setPosts] = useState([]);
    const [taxonomy, setTaxonomy] = useState({
        title: ''
    })
    const { id } = useParams();
    const endpoint = props.taxonomy == 'category' ? 'Category' : 'Tag'

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts/getPostsBy${endpoint}/${id}`).then((response) => {
            if (response?.success) {
                setPosts(response?.data?.Posts);
                setTaxonomy(response?.data)
            }
        });
    }, [id]);

    return (
        <Content>
            <h3>Taxonomy: {taxonomy?.title}</h3>
            <div className="blog-list clearfix">
                {posts.map((post, i) => {
                    return <WidePost key={i} post={post} />;
                })}
            </div>
        </Content>
    );
};

export default Taxonomy;
