const router = require('koa-router')()
const data = require('../data/goodsDetail.json')


router.get('/detail', async (ctx, next) => {
    ctx.body = {
        data:data
    }
})

router.use('/cart',router.routes())
module.exports = router.routes()