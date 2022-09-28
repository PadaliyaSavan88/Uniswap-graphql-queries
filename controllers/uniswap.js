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
    const response = await graph.callGraphQLQuery(getTokenData.query)
    return response_data.json({
        response
    })
}