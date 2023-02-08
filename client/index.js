"use strict";
const arbitrumApi = require("./networks/arbitrum/dist");
const avalancheApi = require("./networks/avalanche/dist");
const binanceApi = require("./networks/binance/dist");
const ethereumApi = require("./networks/ethereum/dist");
const fantomApi = require("./networks/fantom/dist");
const gnosisApi = require("./networks/gnosis/dist");
const optimismApi = require("./networks/optimism/dist");
const polygonApi = require("./networks/polygon/dist");
const auroraApi = require("./networks/aurora/dist");
const klaytnApi = require("./networks/klaytn/dist");

module.exports = {
  arbitrumApi: arbitrumApi,
  avalancheApi: avalancheApi,
  binanceApi: binanceApi,
  ethereumApi: ethereumApi,
  fantomApi: fantomApi,
  gnosisApi: gnosisApi,
  optimismApi: optimismApi,
  polygonApi: polygonApi,
  auroraApi: auroraApi,
  klaytnApi: klaytnApi,
};
