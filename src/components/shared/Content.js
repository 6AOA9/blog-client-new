import SideBar from "../sidebar/SideBar"

const Content = ({children}) => {
    return (
        <>
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                {children}
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <SideBar />
            </div>
        </>
    )
}

export default Content