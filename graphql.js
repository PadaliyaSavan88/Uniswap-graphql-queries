const Web3 = require('web3');
const web3 = new Web3(
  new Web3.providers.WebsocketProvider('https://eth-mainnet.g.alchemy.com/v2/cP3gW0gob0CDuumAKBBHfKfWNgKBsRAj')
);

const axios = require('axios');
require('./queries')
uniswapURL = process.env.UNISWAP_GRAPHQL_QUERY ; // https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2
exports.callGraphQLQuery = async (query) =>{
    try {
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