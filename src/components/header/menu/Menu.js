import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../../contexts/AppContext"

const Menu = () => {
    const appCtx = useContext(AppContext)
    console.log(appCtx)
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ForestTimemenu" aria-controls="ForestTimemenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="ForestTimemenu">
                        <ul className="navbar-nav">
                            {
                                appCtx?.siteData?.menu.map((item, i) => {
                                    return <li key={i} className="nav-item">
                                    <Link className="nav-link color-green-hover" to={`category/${item.id}`}>{item.title}</Link>
                                </li>
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Menu