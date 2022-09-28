exports = LiquidityForTopTenTokens = {
    query: `{
        tokens(first: 10, orderBy:tradeVolumeUSD, orderDirection: desc)
         {
         symbol
         name
         totalLiquidity     
           }
       }`
}
exports = ETHPrice = {
    query: `{
        bundles {
            ethPrice
        }
      }`
}