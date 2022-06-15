import { useEffect, useState } from "react";
import { useRequest } from "../../../lib/hooks/useRequest";

const NewPosts = () => {
  const sendRequest = useRequest();
  const [newPost, setNewPosts] = useState([]);
  const [postForm, setPostForm] = useState({
    title: '', content: '',
    categories: '', excerpt: '', picture: '', tags: ''
  })

  useEffect(() => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/posts/`,
      {},
      {},
      {
        auth: true,
      },
      "GET"
    ).then((response) => {
      console.log(response);
      if (response.success) {
        setNewPosts(response.data);
      }
    });
  }, []);
  console.log(postForm)
  return (
    <div className="bo">
      <h2>Write New Article </h2>
      <table className="w-100 table table-striped"  >
        <thead >
          <tr>
            <tr>
              <h4>Title:</h4>
            </tr>
            <input type={"text"} vlaue={postForm.title} style={{ width: "100%" }}
              onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
            />
            <tr>
              <td>
                <h4>Category:</h4>
              </td>

              <td>
                <input type={"option"} style={{ width: "200px" }}
                //  onChange={e => setTitle(e.target.value)}
                />
              </td>

              <td>
                <h4>Photo:</h4>
              </td>

              <td>
                <input type={"file"}
                />
              </td>
            </tr>

            <tr>
              <h4>Content</h4>
            </tr>




            <tr>
              <button type="submit" style={{ marginTop: "15px" }}>Publish Now</button>
            </tr>
          </tr>
        </thead>
      </table>
    </div>

  );
}

export default NewPosts;
