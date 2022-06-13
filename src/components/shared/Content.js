import SideBar from "../sidebar/SideBar"

const Content = ({ children, withSidebar = true }) => {
    
    return (
        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className={`${withSidebar && 'col-lg-9'} col-md-12 col-sm-12 col-xs-12`}>
                        {children}
                    </div>
                    {withSidebar && (
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            <SideBar />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Content