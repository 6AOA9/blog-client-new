import React, { useEffect, useState, useRef } from "react";
import { useRequest } from "../../../../lib/hooks/useRequest";
import { Link } from "react-router-dom";

const Tags = () => {
	const sendRequest = useRequest();
	const [tags, setTags] = useState([]);
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
				setTags(response.data);
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
					const currentTags = [...tags];
					const filteredTags = currentTags.filter(
						(tag) => tag.id != id
					);
					setTags(filteredTags);
				}
			});
		}
	};

	const addTag = () => {
		sendRequest(
			`${process.env.REACT_APP_API_URL}/tags/`,
			{}, //header
			{
				title: titleRef.current.value,
			},
			{ auth: true, type: "json" },
			"post"
		).then((newTag) => {
			window.alert(newTag?.messages?.join(" "));
			if (newTag?.success == true) {
				window.location.reload()
			}
		});
	};

	return (
		<>
			<h3>Add Tag</h3>
			<div className="d-flex w-100 mb-5">
				<input
					type={"text"}
					ref={titleRef}
					className="form-control"
					placeholder="Tag"
				/>
				<button onClick={addTag} type="button" className="btn btn-primary">
					Submit
				</button>
			</div>
			<h3>Tags</h3>
			<table className="w-100 table table-striped">
				<thead>
					<tr>
						<th>Title</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					{tags.map((tag, i) => {
						return (
							<tr key={i}>
								<td>{tag?.title}</td>
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
		</>
	);
};

export default Tags
	;
