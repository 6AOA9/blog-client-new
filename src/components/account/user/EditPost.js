import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { useRequest } from "../../../lib/hooks/useRequest"

const EditPost = () => {
    const { id } = useParams()
    const sendRequest = useRequest()
    const [post, setPost] = useState({
        title: '',
        excerpt: '',
        content: ''
    })
    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`)
            .then(response => {
                if (response?.success) {
                    setPost(response?.data)
                    const postCategories = response?.data?.Categories?.map((c) => c.id)
                    const postTags = response?.data?.Tags?.map((t) => t.id)
                    setSelectedCategories(postCategories)
                    setSelectedTags(postTags)
                }
            })
    }, [])
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
				setTags(response?.data)
			})
		sendRequest(`${process.env.REACT_APP_API_URL}/categories`)
			.then((response) => {
				setCategories(response?.data)
			})
	}, [])

	const addpost = () => {
		const formdata = new FormData();
		formdata.append('title', titleRef.current.value)
		formdata.append('excerpt', excerptRef.current.value)
		formdata.append('content', contentRef.current.value)
		formdata.append('categories', selectedCategories)
		formdata.append('tags', selectedTags)
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
						<input type={"text"}
                             onChange={(e) => {setPost({...post, title: e.target.value})}}
                             value={post?.title} ref={titleRef} className="form-control" placeholder="Title" />
						<input type={"text"}
                            onChange={(e) => {setPost({...post, excerpt: e.target.value})}}
                            value={post?.excerpt} ref={excerptRef} className="form-control" placeholder="Excerpt" />
						<h4>Select Post Tags</h4>
						<div className="container-fluid">
							<div className="row mb-4">
								{
									tags?.map((tag, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input
                                                    checked={selectedTags.includes(tag.id)}
                                                    onChange={handleTagToggle} type='checkbox' value={tag.id} id={`tag-${tag.id}`} />&nbsp;
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
												<input
                                                    checked={selectedCategories.includes(category.id)}
                                                    onChange={handleCategoryToggle} type='checkbox' value={category.id} id={`category-${category.id}`} />&nbsp;
												<label htmlFor={`category-${category.id}`}>{category.title}</label>
											</div>
										)
									})
								}
							</div>
						</div>
						
						<input type={"file"} ref={pictureRef} className="form-control" placeholder="picture" />
						<textarea ref={contentRef} className="form-control" placeholder="Your Article" defaultValue={post?.content}></textarea>
						<button onClick={addpost} type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditPost