const WidePost = () => {
    return (
        <div className="blog-box row">
            <div className="col-md-4">
                <div className="post-media">
                    <a href="pages/single.php">
                        <img src="assets/images/upload/garden_sq_01.jpg" alt="website template image" className="img-fluid" />
                        <div className="hovereffect"></div>
                    </a>
                </div>
            </div>
            <div className="blog-meta big-meta col-md-8">
                <span className="bg-aqua">
                    <a href="pages/category.php">Indoor</a>
                </span>
                <h4>
                    <a href="pages/single.php">The best twenty plant species you can look at at home</a>
                </h4>
                <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                <small><a href="pages/category.php"><i className="fa fa-eye"></i> 1887</a></small>
                <small><a href="pages/single.php">11 July, 2045</a></small>
                <small><a href="https://www.free-css.com/free-css-templates">by Matilda</a></small>
            </div>
        </div>
    )
}

export default WidePost