import SideBar from "../sidebar/SideBar"

const Content = ({ children }) => {
    return (
        <section className="section wb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        {children}
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <SideBar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content