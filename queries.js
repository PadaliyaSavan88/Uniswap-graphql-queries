exports = LiquidityForTopTenTokens = {
    query: `{
        tokens(first: 10, orderBy:tradeVolumeUSD, orderDirection: desc){
          id
          symbol
          name
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
          totalSupply
          tradeVolume
        }
      }`
}

exports = FetchPools = {
  query: `{
    pools {
      id
      liquidity
      tick
      token0 {
        name
        symbol
        poolCount
        feesUSD
        totalSupply
      }
      token1 {
        name
        feesUSD
        symbol
        poolCount
        totalSupply
      }
      ticks {
        price0
        price1
        volumeToken0
        volumeToken1
        id
      }
    }
  }`
}