import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"

const Footer = () => {
    const appCtx = useContext(AppContext)
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="widget">
                                <div className="footer-text text-center">
                                    <a href="https://www.free-css.com/free-css-templates">
                                        <img src={appCtx?.siteData?.options?.logo} alt="website template image" className="img-fluid" />
                                    </a>
                                    <p>ForestTime is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                                    <div className="social">
                                        {appCtx.siteData.socialLinks.map((link, i) => {
                                            return <a target={'_blank'} key={i} href={link.link}>
                                                <i className={`fa ${link.icon}`}></i>
                                            </a>
                                        })}
                                    </div>
                                    <hr className="invis" />
                                    <div className="newsletter-widget text-center">
                                        <form action="#" method="post" className="form-inline">
                                            <input type="text" className="form-control" placeholder="Enter your email address" />
                                            <button type="submit" className="btn btn-primary">Subscribe <i className="fa fa-envelope-open-o"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br />
                            <br />
                            <div className="copyright">&copy; ForestTime. Design By: <a target="_blank" rel="nofollow noopener" href="//html.design/">HTML Design</a>.</div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="dmtop">Scroll to Top</div>
        </>
    )
}

export default Footer