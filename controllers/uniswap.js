let graph = require('../graphql')
require('../queries')

exports.getETHPrice = async function(request_data, response_data) {
    const response = await graph.callGraphQLQuery(ETHPrice.query)
    return response_data.json({
        response
    })
}

exports.getLiquidityForTopTenTokens = async function(request_data, response_data) {
    const response = await graph.callGraphQLQuery(LiquidityForTopTenTokens.query)
    return response_data.json({
        response
    })
}

exports.getTokenVolume = async function(request_data, response_data) {
    console.log(request_data.body.tokenId)
    const response = await graph.callGraphQLQueryWithParams(getTokenData.query, request_data.body.tokenId)
    return response_data.json({
        response
    })
}

exports.getPools = async function(request_data, response_data) {
    const response = await graph.callGraphQLQuery(getPoolsOfTwoTokens.query)
    return response_data.json({
        response
    })
}

exports.getWETHPriceWithTokenDayData = async function(request_data, response_data) {
    const response = await graph.callGraphQLQuery(getWETHPriceWithTokenDayData.query)
    return  response_data.json({
        response
    })
}