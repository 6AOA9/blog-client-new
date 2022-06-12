export const getSocialLinks = (options) => {
    const networks = ['facebook', 'twitter', 'youtube', 'instagram']
    const links = []
    networks.map((network) => {
        if (options[network]) {
            links.push({
                network: network,
                icon: `fa-${network}`,
                link: options[network]
            })
        }
    })
    if (options.email) {
        links.push({
            network: 'email',
            icon: 'fa-envelope',
            link: `mailto:${options.email}`
        })
    }
    return links
}