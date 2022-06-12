import { createContext, useState, useEffect } from "react";
import { getSocialLinks } from "../lib/functions/functions";
import { useRequest } from "../lib/hooks/useRequest";

export const AppContext = createContext({})

const defaultSiteData = {
    menu: [],
    options: {
        logo: null,
        facebook: null,
        twitter: null,
        youtube: null,
        latitude: 41.003935,
        longitude: 28.6648233
    },
    socialLinks: []
}

export const AppProvider = ({children}) => {
    const sendRequest = useRequest()
    const [siteData, setSiteData] = useState(defaultSiteData)
    useEffect(() => {
        const settings = sendRequest(`${process.env.REACT_APP_API_URL}/settings`)
            .then(data => {
                const newSiteData = {}
                if (Object.keys(data?.options)?.length) {
                    newSiteData.options = data.options
                    newSiteData.socialLinks = getSocialLinks(data.options)
                }
                if (data?.menu?.length) {
                    newSiteData.menu = data.menu
                }
                setSiteData({
                    ...defaultSiteData,
                    ...newSiteData
                })
            })
        
    }, [])
    return (
        <AppContext.Provider value={{
            siteData
        }}>
            {children}
        </AppContext.Provider>
    )
}