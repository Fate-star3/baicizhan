const router = require('koa-router')()
const data = require('../data/data.json')

router.get('/info', async (ctx, next) => {
    ctx.body = {
        data:data
    }
})
router.use('/server',router.routes())
module.exports = router.routes()