const koa = require("koa");
const app = new koa();
// const cors = require('koa-cors')
const mainRouter = require('./router/index')
const goodsRouter = require('./router/goods')
const cartRouter = require('./router/cart.js')





// 挂载 中间件的挂载有依赖关系 顺序要合理
// app.use(cors())
app.use(mainRouter)
app.use(goodsRouter)
app.use(cartRouter)


app.listen(3030, () => {
    console.log("app is running http://127.0.0.1:3030");
})