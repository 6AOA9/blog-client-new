import React, { useEffect, useState, useRef } from "react";
import { useRequest } from "../../../../lib/hooks/useRequest";
import { Link } from "react-router-dom";

const Categories = () => {
	const sendRequest = useRequest();
	const [categories, setCategories] = useState([]);
	const titleRef = useRef();

	useEffect(() => {
		sendRequest(
			`${process.env.REACT_APP_API_URL}/categories/`, {}, {},
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
				`${process.env.REACT_APP_API_URL}/categories/${id}`, {}, {},
				{
					auth: true,
				},
				"DELETE"
			).then((response) => {
				console.log(response);
				if (response?.success) {
					const currentCategories = [...categories];
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
		).then((newCategory) => {
			window.alert(newCategory?.messages?.join(" "));
			if (newCategory?.success == true) {
				window.location.reload()
			}
		});
	};

	return (
		<>
			<h3>Add Category</h3>
			<div className="d-flex w-100 mb-5">
				<input
					type={"text"}
					ref={titleRef}
					className="form-control"
					placeholder="Category"
				/>
				<button onClick={addCat} type="button" className="btn btn-primary">
					Submit
				</button>
			</div>
			<h3>Categories</h3>
			<table className="w-100 table table-striped">
				<thead>
					<tr>
						<th>Title</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category, i) => {
						return (
							<tr key={i}>
								<td>{category?.title}</td>
								<td>
									<button
										onClick={() => {
											deletCategorie(category.id);
										}}
										className="btn btn-primary"
									>
										Delete
									</button>
									<Link to={`/account/edit/${category.id}`}>
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
		</>
	);
};

export default Categories;
