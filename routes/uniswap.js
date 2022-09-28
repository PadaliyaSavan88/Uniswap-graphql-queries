let express = require('express');
let router = express.Router();
let uniswapControllers = require('../controllers/uniswap')

router.get('/fetchETHPrice', uniswapControllers.getETHPrice)
router.get('/getLiquidityForTopTenTokens', uniswapControllers.getLiquidityForTopTenTokens)

module.exports = router