import { Link } from "react-router-dom"

const PageTitle = ({title}) => {
    return (
        <div className="page-title wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2 className="d-flex"><span><i className="fa fa-leaf bg-green"></i></span> <span>{title}</span></h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active"><Link to='/blog'>Blog</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle