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
        longitude: 28.6648233,
    },
    socialLinks: [],
    recentPosts: [],
    topPosts: [],
    randomAd: {}
}

export const AppProvider = ({children}) => {
    const sendRequest = useRequest()
    const [siteData, setSiteData] = useState(defaultSiteData)
    useEffect(() => {
        const settings = sendRequest(`${process.env.REACT_APP_API_URL}/settings`)
            .then(data => {
                const newSiteData = {}
                if (data?.options) {
                    if (Object?.keys(data?.options)?.length) {
                        newSiteData.options = data?.options
                        newSiteData.socialLinks = getSocialLinks(data?.options)
                    }
                }
                if (data?.menu?.length) {
                    newSiteData.menu = data?.menu
                }
                if (data?.recentPosts?.length) {
                    newSiteData.recentPosts = data?.recentPosts
                }
                if (data?.topPosts?.length) {
                    newSiteData.topPosts = data?.topPosts
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