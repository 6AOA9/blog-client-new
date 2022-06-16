import React, { useEffect, useState, useRef } from "react";
import { useRequest } from "../../../../lib/hooks/useRequest";
import { Link } from "react-router-dom";

const AddCat = () => {
  const sendRequest = useRequest();
  const [Categories, setCategories] = useState([]);
  const titleRef = useRef();

  useEffect(() => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/categories/`,
      {},
      {},
      {
        auth: true,
      },
      "GET"
    ).then((response) => {
      if (response?.success) {
        setCategories(response.data);
      }
    });
  }, []);

  const deletCategorie = (id) => {
    if (window.confirm("Do you want to delete this Categorie")) {
      sendRequest(
        `${process.env.REACT_APP_API_URL}/categories/${id}`,
        {},
        {},
        {
          auth: true,
        },
        "DELETE"
      ).then((response) => {
        console.log(response);
        if (response?.success) {
          const currentCategories = [...Categories];
          const filteredCategories = currentCategories.filter(
            (category) => category.id != id
          );
          setCategories(filteredCategories);
        }
      });
    }
  };

  const addCat = () => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/categories/`,
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
          <h4>Add New Categories </h4>
        </td>

        <td>
          <input
            type={"text"}
            ref={titleRef}
            className="form-control"
            placeholder="Categorie"
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
        {Categories.map((Categorie, i) => {
          return (
            <tr key={i}>
              <td>{Categorie?.title}</td>
              <td>
                {Categorie?.Categories?.map((c, i) => {
                  return (
                    <React.Fragment key={i}>
                      <span key={i}>{c.title}</span>
                      {i < Categorie.Categories.length - 1 && <>, </>}
                    </React.Fragment>
                  );
                })}
              </td>

              <td>
                <button
                  onClick={() => {
                    deletCategorie(Categorie.id);
                  }}
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <Link to={`/account/edit/${Categorie.id}`}>
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

export default AddCat;
