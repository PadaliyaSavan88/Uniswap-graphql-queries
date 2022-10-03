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
          ethPriceUSD
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

exports = getPool = {
  query: `{
    ticks(where: {}) {
      id
      tickIdx
      price1
      price0
      pool {
        token0 {
          name
          symbol
          id
          totalSupply
          volume
          volumeUSD
        }
        token1 {
          id
          name
          symbol
          totalSupply
          volumeUSD
        }
      }
    }
  }`
}

exports = getPoolsOfTwoTokens = {
  query: `{
    pools(
      orderBy: totalValueLockedToken0
      orderDirection: desc
      where: {token0: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", token1: "0xdac17f958d2ee523a2206206994597c13d831ec7", token0_gte: "0.0007", token1Price_gte: "1291.81"}
    ) {
      id
      liquidity
      feeTier
      feesUSD
      token0 {
        name
        symbol
        id
      }
      token0Price
      token1 {
        name
        symbol
        id
      }
      token1Price
    }
  }`
}