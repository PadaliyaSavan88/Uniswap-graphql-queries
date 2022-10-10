let express = require('express');
let router = express.Router();
let uniswapControllers = require('../controllers/uniswap')

router.get('/fetchETHPrice', uniswapControllers.getETHPrice)
router.get('/getLiquidityForTopTenTokens', uniswapControllers.getLiquidityForTopTenTokens)
router.post('/getTokenVolume', uniswapControllers.getTokenVolume)
router.get('/getPools', uniswapControllers.getPools)
router.get('/getWETHPriceWithTokenDayData', uniswapControllers.getWETHPriceWithTokenDayData)

module.exports = router