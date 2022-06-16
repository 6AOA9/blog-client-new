import React, { useEffect, useState, useRef } from "react";
import { useRequest } from "../../../../lib/hooks/useRequest";
import { Link } from "react-router-dom";

const AddTag = () => {
  const sendRequest = useRequest();
  const [tag, setTag] = useState([]);
  const titleRef = useRef();

  useEffect(() => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/tags/`,
      {},
      {},
      {
        auth: true,
      },
      "GET"
    ).then((response) => {
      if (response?.success) {
        setTag(response.data);
      }
    });
  }, []);

  const deleteTag = (id) => {
    if (window.confirm("Do you want to delete this Tag")) {
      sendRequest(
        `${process.env.REACT_APP_API_URL}/tags/${id}`,
        {},
        {},
        {
          auth: true,
        },
        "DELETE"
      ).then((response) => {
        console.log(response);
        if (response?.success) {
          const currentTags = [...tag];
          const filteredTags = currentTags.filter(
            (tag) => tag.id != id
          );
          setTag(filteredTags);
        }
      });
    }
  };

  const addCat = () => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/tags/`,
      {}, //header
      {
        title: titleRef.current.value,
      },
      { auth: true, type: "json" },
      "post"
    ).then((comment) => {
      window.alert(comment?.messages?.join(" "));
    });
  };

  return (
    <table className="w-100 table table-striped">
      <thead>
        <td>
          <h4>Add New tag </h4>
        </td>

        <td>
          <input
            type={"text"}
            ref={titleRef}
            className="form-control"
            placeholder="Tags"
          />
        </td>
        <td>
          <button onClick={addCat} type="button" className="btn btn-primary">
            Submits
          </button>
        </td>

        <tr>
          <th>Title</th>
          {/* <th>Add</th> */}
          {/* <th>Delete</th> */}
          {/* <th>Edit</th> */}
        </tr>
      </thead>
      <tbody>
        {tag.map((tag, i) => {
          return (
            <tr key={i}>
              <td>{tag?.title}</td>
              <td>
                {tag?.tag?.map((c, i) => {
                  return (
                    <React.Fragment key={i}>
                      <span key={i}>{c.title}</span>
                      {i < tag.tag.length - 1 && <>, </>}
                    </React.Fragment>
                  );
                })}
              </td>

              <td>
                <button
                  onClick={() => {
                    deleteTag(tag.id);
                  }}
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <Link to={`/account/edit/${tag.id}`}>
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "8px" }}
                  >
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AddTag
;
