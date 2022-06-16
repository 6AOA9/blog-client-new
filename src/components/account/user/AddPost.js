
import { useEffect, useRef, useState } from "react"
import { useRequest } from "../../../lib/hooks/useRequest"

const AddPost = () => {
	const contentRef = useRef()
	const excerptRef = useRef()
	const pictureRef = useRef()
	const titleRef = useRef()
	const [tags, setTags] = useState([])
	const [categories, setCategories] = useState([])
	const [selectedTags, setSelectedTags] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	const handleTagToggle = (e) => {
		const tagsClone = [...selectedTags]
		if (e.target.checked) {
			tagsClone.push(e.target.value)
		} else {
			tagsClone.splice(e.target.value, 1)
		}
		setSelectedTags(tagsClone)
	}
	const handleCategoryToggle = (e) => {
		const categoriesClone = [...selectedCategories]
		if (e.target.checked) {
			categoriesClone.push(e.target.value)
		} else {
			categoriesClone.splice(e.target.value, 1)
		}
		setSelectedCategories(categoriesClone)
	}

	useEffect(() => {
		sendRequest(`${process.env.REACT_APP_API_URL}/tags`)
			.then((response) => {
				setTags(response.data)
			})
		sendRequest(`${process.env.REACT_APP_API_URL}/categories`)
			.then((response) => {
				setCategories(response.data)
			})
	}, [])

	const sendRequest = useRequest()
	const addpost = () => {
		const formdata = new FormData();
		formdata.append('title', titleRef.current.value)
		formdata.append('excerpt', excerptRef.current.value)
		formdata.append('content', contentRef.current.value)
		for (var i = 0; i < selectedCategories.length; i++) {
			formdata.append('categories[]', selectedCategories[i])
		}
		for (var i = 0; i < selectedTags.length; i++) {
			formdata.append('tags[]', selectedTags[i])
		}
		formdata.append('picture', pictureRef.current.files[0])
		sendRequest(`${process.env.REACT_APP_API_URL}/posts`, {}, formdata, { auth: true }, 'post')
			.then((response) => {
				window.alert(response?.messages?.join(' '))
			})
	}
	return (
		<div className="custombox clearfix">
			<h4 className="small-title">Create new article</h4>
			<div className="row">
				<div className="col-lg-12">
					<div className="form-wrapper">
						<input type={"text"} ref={titleRef} className="form-control" placeholder="Title" />
						<input type={"text"} ref={excerptRef} className="form-control" placeholder="Excerpt" />
						<h4>Select Post Tags</h4>
						<div className="container-fluid">
							<div className="row mb-4">
								{
									tags?.map((tag, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input onChange={handleTagToggle} type='checkbox' value={tag.id} id={`tag-${tag.id}`} />&nbsp;
												<label htmlFor={`tag-${tag.id}`}>{tag.title}</label>
											</div>
										)
									})
								}
							</div>
						</div>

						<h4>Select Post Categories</h4>
						<div className="container-fluid">
							<div className="row mb-4">
								{
									categories?.map((category, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input onChange={handleCategoryToggle} type='checkbox' value={category.id} id={`category-${category.id}`} />&nbsp;
												<label htmlFor={`category-${category.id}`}>{category.title}</label>
											</div>
										)
									})
								}
							</div>
						</div>
						
						<input type={"file"} ref={pictureRef} className="form-control" placeholder="picture" />
						<textarea ref={contentRef} className="form-control" placeholder="Your Article"></textarea>
						<button onClick={addpost} type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddPost