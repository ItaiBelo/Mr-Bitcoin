import axios from "axios"
import {storageService} from "./storage.service.js"

const CRYPTO_API='4b0e7d3eff43159fb1c05ae4eb65f4bdc16c016924445c0ae04b4c0517a60e74'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

function getRate() {
    return
}
async function getMarketPriceHistory() {
    let pricesHistory = storageService.load('prices-history')
    try {
        pricesHistory = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB,MATIC,XRP&tsyms=USD,EUR&api_key=${CRYPTO_API}`)
        storageService.save('prices-history', pricesHistory.data)
        console.log('done ', pricesHistory.data)
        return pricesHistory.data
    }
    catch (err) {
        throw new Error('Err', err)
    }
}
function getAvgBlockSize() {
    return
}