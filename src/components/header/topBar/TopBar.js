import { useContext } from "react"
import { AppContext } from "../../../contexts/AppContext"
import { Link } from "react-router-dom"

const TopBar = () => {
    const appCtx = useContext(AppContext)
    return (
        <>
            <div className="topbar-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                            <div className="topsocial">
                                {appCtx.siteData.socialLinks.map((link, i) => {
                                    return <a target={'_blank'} key={i} href={link.link}>
                                        <i className={`fa ${link.icon}`}></i>
                                    </a>
                                })}
                            </div>
                        </div>
                        <div className="col-lg-4 hidden-md-down"></div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="topsearch text-right">
                                <Link to={"/signup"}>
                                <i className="fa fa-user"></i> My account
                                
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {appCtx?.siteData?.options?.logo && <div className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="logo">
                                <Link to="/">
                                    <img src={appCtx?.siteData?.options?.logo} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default TopBar