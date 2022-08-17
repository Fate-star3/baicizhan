const router = require('koa-router')()
const data = require('../data/goods-list.json')

router.get('/goodsList', async (ctx, next) => {
    ctx.body = {
        data:data
    }
})

module.exports = router.routes()