import React, { useEffect, useState, useRef } from "react";
// import { useRequest } from "./../../../../lib/hooks/useRequest"
import { useRequest } from "../../../../lib/hooks/useRequest";
// import { Link } from "react-router-dom"

function Verified() {
  const sendRequest = useRequest();
  const [posts, setPosts] = useState([]);
  // const refIsVerified = useRef();

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
      if (response?.success) {
        setPosts(response.data);
      }
    });
  }, []);

  const postVerified = (id) => {
    if (window.confirm("Do you want to verified this post")) {
      sendRequest(
        `${process.env.REACT_APP_API_URL}/posts/verified/${id}`,
        {},
        {
          
        },
        {
          auth: true,
        },
        "PUT"
      ).then((response) => {
        console.log(response);
        if (response?.success) {
          const currentPosts = [...posts];
          const filteredPosts = currentPosts.filter((post) => post.id != id);
          setPosts(filteredPosts);
        }
      });
    }
  };

  return (
    <div>
      <table className="w-100 table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Views</th>
            <th>Verified</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post, i) => {
            return (
              <tr key={i}>
                <td>{post?.title}</td>
                <td>
                  {post?.Categories?.map((c, i) => {
                    return (
                      <React.Fragment key={i}>
                        <span key={i}>{c.title}</span>
                        {i < post.Categories.length - 1 && <>, </>}
                      </React.Fragment>
                    );
                  })}
                </td>
                <td>{post?.createdAt}</td>
                <td>{post?.views}</td>
                <td>{post?.verified ? "Yes" : "No"} </td>

                <td>
                  <button
                    onClick={() => {
                      postVerified(post.id);
                    }}
                    className="btn btn-primary"
                  >
                    Verified
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Verified;
