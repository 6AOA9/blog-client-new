const Menu = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ForestTimemenu" aria-controls="ForestTimemenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="ForestTimemenu">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link color-green-hover" href="https://www.free-css.com/free-css-templates">Home</a></li>
                            <li className="nav-item"><a className="nav-link color-green-hover" href="category.php">Gardening</a></li>
                            <li className="nav-item"><a className="nav-link color-green-hover" href="category.php">Outdoor Living</a></li>
                            <li className="nav-item"><a className="nav-link color-green-hover" href="category.php">Indoor Living</a></li>
                            <li className="nav-item"><a className="nav-link color-green-hover" href="category.php">Shopping Guides</a></li>
                            <li className="nav-item"><a className="nav-link color-green-hover" href="contact.php">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Menu