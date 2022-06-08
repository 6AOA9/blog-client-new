import Menu from "./menu/Menu"
import TopBar from "./topBar/TopBar"
import TopSearch from "./topSearch/TopSearch"

const Header = () => {
    return (
        <>
            <TopSearch />
            <TopBar />
            <Menu />
        </>
    )
}

export default Header