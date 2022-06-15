import { useRef } from "react";
import { useRequest } from "../../../lib/hooks/useRequest";
// import EditorText from "../../editor/Editor";
import "../../editor/editor.css";

// `${process.env.REACT_APP_API_URL}/posts/`,

function NewPosts() {
  // const sendRequest = useRequest();
  const titleRef = useRef();
  const contentRef = useRef();
  const excerptRef = useRef();
  const categoriesRef = useRef();
  const tagsRef = useRef();

  const addPost = async () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const excerpt = excerptRef.current.value;
    const categories = categoriesRef.current.value;
    const tags = tagsRef.current.value;

    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
      method: "post",

      body: {
        title,
        content,
        excerpt,
        categories,
        tags,
      },
    });
  };

  return (
    <div className="bo">
      <h2>Write New Article </h2>
      <table className="w-100 table table-striped">
        <thead>
          <tr>
            <tr>
              <h4>Title:</h4>
            </tr>
            <input
              type={"text"}
              ref={titleRef}
              style={{ width: "100%" }}
              // onChange={(e) => setTitle(e.target.files[0])}
            />
            <tr>
              <td>
                <h4>Category:</h4>
              </td>

              <td>
                <input
                  type={"option"}
                  style={{ width: "200px" }}
                  //  onChange={e => setTitle(e.target.value)}
                />
              </td>

              <td>
                <h4>Photo:</h4>
              </td>

              <td>
                <input
                  type={"file"}
                  //  onChange={e => setFile(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <h4>Content</h4>
            </tr>

            <textarea id="w3review" name="w3review" rows="20" cols="95">
             
            </textarea>


            <tr>
              <button
                type="submit"
                value="Submit"
                style={{ marginTop: "15px" }}
                onClick={addPost}
              >
                Publish Now
              </button>
            </tr>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default NewPosts;
