const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");
const optimismSepolia = require("./tokens/optimism-sepolia.json");
const dbk = require("./tokens/dbk.json");
module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Default Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {
        "GooDog": {
            "name": "GooDog",
            "description": "Built for Good Made for Fun",
        },
        "GPAD": {
            "name": "GPAD",
            "description": "GPAD Token Activated by Community",
        }
    },
    logoURI: "https://gist.githubusercontent.com/GooDogFun/e9d02c4a02d24d8642ac813fc14ff6fc/raw/6b0e7ad50c3e9c3c0be149cfa0e3752c9dc2b065/GD.svg",
    keywords: ["GooDog", "Good OG", "Community", "GooDog Protocol"],
    tokens: [...mainnet, ...optimismSepolia, ...dbk]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
