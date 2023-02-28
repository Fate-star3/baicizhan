const router = require('koa-router')()
const data = require('../data/goods-list.json')

router.get('/goodsList', async (ctx, next) => {
    ctx.body = {
        data: data
    }
})
router.use('/server', router.routes())
module.exports = router.routes()