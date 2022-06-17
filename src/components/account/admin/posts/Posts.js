import React, { useEffect, useState, useRef } from "react";
// import { useRequest } from "./../../../../lib/hooks/useRequest"
import { useRequest } from "../../../../lib/hooks/useRequest";
// import { Link } from "react-router-dom"

function Posts() {
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

	const verification = (id, newStatus) => {
		const message = newStatus == 1 ? "Do you want to verify this post" : "Do you want to unverify this post" 
		if (window.confirm(message)) {
			sendRequest(
				`${process.env.REACT_APP_API_URL}/posts/verification/${id}`,
				{},
				{
					newStatus
				},
				{
					auth: true,
					type: 'json'
				},
				"PUT"
			).then((response) => {
				window.alert(response.messages.join(' '))
				if (response?.success) {
					window.location.reload()
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
						<th>Verified</th>
						<th>Options</th>
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
								<td>{post?.verified ? "Yes" : "No"} </td>

								<td>
									{post?.verified ? (
										<button
											onClick={() => {
												verification(post.id, 0);
											}}
											className="btn btn-success"
										>
											unverify
										</button>
									) : (
										<button
											onClick={() => {
												verification(post.id, 1);
											}}
											className="btn btn-primary"
										>
											Verify
										</button>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Posts;
