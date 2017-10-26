const PROXY_CONFIG = [
    {
        context: [
            "/parking"
        ],
        target: "http://localhost:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;