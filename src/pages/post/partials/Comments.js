const Comments = ({ comments }) => {
    return (
        <>
            {comments?.length > 0 && (
                <div className="custombox clearfix">
                    <h4 className="small-title">{comments?.length} Comments</h4>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comments-list">
                                {comments?.map((comment, i) => {
                                    return (
                                        <div className="media" key={i}>
                                            <img src={`https://www.gravatar.com/avatar/${comment?.User?.email}`} alt="website template image" className="rounded-circle" />
                                            <div className="media-body">
                                                <h4 className="media-heading user_name">{comment?.User?.name} <small>{comment?.createdAt}</small></h4>
                                                <p>{comment?.content}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Comments