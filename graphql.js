const Web3 = require('web3');
const web3 = new Web3(
  new Web3.providers.WebsocketProvider('https://eth-mainnet.g.alchemy.com/v2/cP3gW0gob0CDuumAKBBHfKfWNgKBsRAj')
);

const axios = require('axios');
require('./queries')
uniswapURL = process.env.UNISWAP_GRAPHQL_QUERY ; // https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2
exports.callGraphQLQuery = async (query) =>{
    try {
        let tokenId = '0x2f34f846f57e5e31975fa29ffcceb4d84a441abb'
        const result = await axios.post(
            uniswapURL,
            {
                query: `${query}`
            }
        );  

        if(result.data.errors){
            return result.data.errors
        } else {
            return result.data.data
        }
    } catch (err){
        return err
    }

}

exports.callGraphQLQueryWithParams = async (query) => {
    try {
        let tokenId = '0x2f34f846f57e5e31975fa29ffcceb4d84a441abb'
        const result = await axios.post(
            uniswapURL,
            {
                query: `{
                    tokens(where: {id: ${tokenId}}) {
                      id
                      name
                      symbol
                      totalLiquidity
                      totalSupply
                    }
                  }`
            }
        );  

        if(result.data.errors){
            return result.data.errors
        } else {
            return result.data.data
        }
    } catch (err) {
        return err
    }
}