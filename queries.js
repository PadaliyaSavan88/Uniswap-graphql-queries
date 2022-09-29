exports = LiquidityForTopTenTokens = {
    query: `{
        tokens(first: 10, orderBy:tradeVolumeUSD, orderDirection: desc){
          id
          symbol
          name
          totalLiquidity   
          totalSupply  
          tradeVolumeUSD
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

exports = getTokenData ={
    query: `{
        tokens(where: {id: "0x2f34f846f57e5e31975fa29ffcceb4d84a441abb"}) {
          id
          name
          symbol
          totalLiquidity
          totalSupply
          tradeVolume
        }
      }`
}