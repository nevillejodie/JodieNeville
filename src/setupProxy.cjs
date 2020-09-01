import { proxy } from 'http-proxy-middleware'

module.exports = function(app) {
    app.use(proxy("http://localhost:5000/send", {target: `http://localhost:5000`}))
}