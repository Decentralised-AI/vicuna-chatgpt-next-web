// @ts-ignore
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: { use: (arg0: any) => void; }) {
    // proxy第一个参数为要代理的路由
    // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
    app.use(
        createProxyMiddleware("/worker", {
            target: "http://localhost:21002",
            changeOrigin: true,
        }),
    );
};
