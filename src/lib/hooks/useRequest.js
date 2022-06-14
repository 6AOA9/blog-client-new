import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const useRequest = () => {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate()
    const sendRequest = (url, headers, body = {}, config = {}, method = 'GET') => {
        let options = {
            headers: {},
        }
        if (Object?.keys(body).length > 0) {
            options['body'] = body
        }
        options.method = method
        if (config?.auth) {
            options.headers['Authorization'] = 'Bearer ' + ctx?.token
        }
        if (config.type === 'json') {
            options.headers['Content-Type'] = 'application/json'
            options.body = JSON.stringify(body)
        }
        options.headers = { ...options.headers, ...headers }

        console.log('OPTIONS', options)

        return fetch(url, options)
            .then(response => {
                if (response.status == 401) {
                    navigate('/sign-in')
                    return
                }
                return response.json().then(data => {
                    if (data.success && config.redirect) {
                        // navigate(config.redirect)
                    }
                    return data
                })
            })
            .catch(e => console.log(e))
    }
    return sendRequest
}
