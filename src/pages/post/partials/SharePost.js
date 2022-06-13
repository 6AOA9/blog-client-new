const SharePost = ({id}) => {
    return (
        <div class="post-sharing">
            <ul class="list-inline">
                <li className="mr-3">
                    <a target='_blank' href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.REACT_APP_URL}/post/${id}`} class="fb-button btn btn-primary">
                        <i class="fa fa-facebook"></i>&nbsp;
                        <span class="down-mobile">Share on Facebook</span>
                    </a>
                </li>
                <li>
                    <a target='_blank' href={`https://twitter.com/intent/tweet?url=${process.env.REACT_APP_URL}/post/${id}`} class="tw-button btn btn-primary">
                        <i class="fa fa-twitter"></i>&nbsp;
                        <span class="down-mobile">Tweet on Twitter</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SharePost