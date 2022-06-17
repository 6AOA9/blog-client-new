import { useState, useRef, useContext, useEffect } from "react"
import { AppContext } from "../../../../contexts/AppContext";
import { useRequest } from "../../../../lib/hooks/useRequest";
// import { useNavigate, useParams } from "react-router-dom"
// import { useRequest } from "../../../../lib/hooks/useRequest"

const Options = () => {
    const emailRef = useRef()
    const facebookRef = useRef()
    const twitterRef = useRef()
    const instagramRef = useRef()
    const youtubeRef = useRef()
    const logoRef = useRef()

    const appCtx = useContext(AppContext)

    const [siteOptions, setSiteOptions] = useState({
        ...appCtx?.siteData?.options
    })

    useEffect(() => {
        setSiteOptions({...appCtx?.siteData?.options})
    }, [appCtx?.siteData?.options])

    const sendRequest = useRequest()

    const updateOptions = () => {
        const formData = new FormData()
        formData.append('facebook', siteOptions?.facebook)
        formData.append('twitter', siteOptions?.twitter)
        formData.append('instagram', siteOptions?.instagram)
        formData.append('youtube', siteOptions?.youtube)
        formData.append('email', siteOptions?.email)
        formData.append('logo', logoRef.current.files[0])

        sendRequest(`${process.env.REACT_APP_API_URL}/options`, {}, formData, {
            auth: true
        }, 'PUT').then(response => {
            window.alert(response?.messages?.join(' '))
            if (response?.success) {
                appCtx.setSiteData({
                    ...appCtx.siteData,
                    options: {
                        ...appCtx.siteData?.options,
                        email: siteOptions?.email,
                        facebook: siteOptions?.facebook,
                        twitter: siteOptions?.twitter,
                        instagram: siteOptions?.instagram,
                        youtube: siteOptions?.youtube,
                    }
                })
            }
        })
        
    }

    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Site Options</h4>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-wrapper">
                        <h6>Site Email</h6>
                        <input type={"email"}
                            onChange={(e) => { setSiteOptions({ ...siteOptions, email: e.target.value }) }}
                            value={siteOptions?.email}
                            className="form-control" placeholder="Email" />

                        <h6>Facebook Page</h6>
                        <input type={"text"}
                            onChange={(e) => { setSiteOptions({ ...siteOptions, facebook: e.target.value }) }}
                            value={siteOptions?.facebook}
                            className="form-control" placeholder="Facebook Page" />

                        <h6>Twitter Username</h6>
                        <input type={"text"}
                            onChange={(e) => { setSiteOptions({ ...siteOptions, twitter: e.target.value }) }}
                            value={siteOptions?.twitter}
                            className="form-control" placeholder="Twitter Username" />


                        <h6>Youtube Channel</h6>
                        <input type={"text"}
                            onChange={(e) => { setSiteOptions({ ...siteOptions, youtube: e.target.value }) }}
                            value={siteOptions?.youtube}
                            className="form-control" placeholder="Youtube Channel" />

                        <h6>Instagram Profile</h6>
                        <input type={"text"}
                            onChange={(e) => { setSiteOptions({ ...siteOptions, instagram: e.target.value }) }}
                            value={siteOptions?.instagram}
                            className="form-control" placeholder="Instagram Profile" />


                        <h6>Site Logo</h6>
                        {
                            siteOptions?.logo && <img src={siteOptions?.logo} />
                        }
                        <input type={"file"}
                            ref={logoRef}
                            className="form-control" />

                        <button className="btn btn-primary" onClick={updateOptions}>Update Options</button>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Options;