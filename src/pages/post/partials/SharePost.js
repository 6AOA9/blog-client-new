const SharePost = ({id}) => {
    return (
        <div className="post-sharing">
            <ul className="list-inline">
                <li className="mr-3">
                    <a target='_blank' href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.REACT_APP_URL}/post/${id}`} className="fb-button btn btn-primary">
                        <i className="fa fa-facebook"></i>&nbsp;
                        <span className="down-mobile">Share on Facebook</span>
                    </a>
                </li>
                <li>
                    <a target='_blank' href={`https://twitter.com/intent/tweet?url=${process.env.REACT_APP_URL}/post/${id}`} className="tw-button btn btn-primary">
                        <i className="fa fa-twitter"></i>&nbsp;
                        <span className="down-mobile">Tweet on Twitter</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SharePost