import { useEffect, useState } from "react";
import { useRequest } from "../../../lib/hooks/useRequest";
import EditorText from "../../editor/Editor";
import "../../editor/editor.css";

function NewPosts() {
  const sendRequest = useRequest();
  const [newPost, setNewPosts] = useState([]);

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

  return (
    <div className="bo">
      <h2>Write New Article </h2>
      <table className="w-100 table table-striped"  >
        <thead >
          <tr>
            <tr>
              <h4>Title:</h4>
            </tr>
            <input type={"text"} style={{ width: "100%" }}
            // onChange={(e) => setTitle(e.target.files[0])}
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
                //  onChange={e => setFile(e.target.value)}
                 />
              </td>
            </tr>

            <tr>
              <h4>Content</h4>
            </tr>
            <EditorText
            // onChange={e => setDesc(e.target.value)}
             />


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
