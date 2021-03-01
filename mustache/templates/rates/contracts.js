const duplicateRateBlocks = {
  one: 10773070,
  two: 10873070,
  three: 10921231,
  four: 10950006,
  five: 10960006,
};

// NOTE at times we use different start blocks for the rates used in the exchanger yaml
// file to improve sync times; these rates are grouped into six different blocks.
// New contracts that are added will not need different start blocks for the exchanger yaml.
const exchangerBlocks = {
  RatesBlockOne: {
    prod: 10537958,
    test: null,
  },
  RatesBlockTwo: {
    prod: 10773070,
    test: null,
  },
  RatesBlockThree: {
    prod: 10873070,
    test: null,
  },
  RatesBlockFour: {
    prod: 10921231,
    test: null,
  },
  RatesBlockFive: {
    prod: 10950006,
    test: null,
  },
  RatesBlockSix: {
    prod: 10960006,
    test: null,
  },
};

module.exports = [
  {
    prod: 7626469,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v231',
    address: "'0xba34e436C9383aa8FA1e3659D2807ae040592498'",
    type: 'bytes4',
  },
  {
    prod: 8075694,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v240',
    address: "'0x5cBB53Ca85A9E52B593Baf8ae90282C4B3dB0b25'",
    type: 'bytes4',
  },
  {
    prod: 8120141,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v272',
    address: "'0x70C629875daDBE702489a5E1E3bAaE60e38924fa'",
    type: 'bytes4',
  },
  {
    prod: 8622895,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v210',
    address: "'0x99a46c42689720d9118ff7af7ce80c2a92fc4f97'",
    type: 'bytes32',
  },
  {
    prod: 8971442,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v213',
    address: "'0x565C9EB432f4AE9633e50e1213AB4f23D8f31f54'",
    type: 'bytes32',
  },
  {
    prod: 9123410,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v217',
    address: "'0xE95Ef4e7a04d2fB05cb625c62CA58da10112c605'",
    type: 'bytes32',
  },
  {
    prod: 9518289,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v219',
    address: "'0x9D7F70AF5DF5D5CC79780032d47a34615D1F1d77'",
    type: 'bytes32',
  },
  {
    prod: 10364342,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'ExchangeRates_v223',
    address: "'0xba727c69636491ecdfE3E6F64cBE9428aD371e48'",
    abiPath: '../abis/ExchangeRates_v2.23.json',
    type: 'bytes32',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'ExchangeRates',
    address: "'0xba727c69636491ecdfE3E6F64cBE9428aD371e48'",
    abiPath: '../abis/ExchangeRates.json',
    type: 'bytes32',
  },
  {
    prod: 9085450,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorAUD',
    address: "'0x05cf62c4ba0ccea3da680f9a8744ac51116d6231'",
    proxyAddress: "'0x77F9710E7d0A19669A13c055F62cd80d313dF022'",
    type: 'aggregator',
  },
  {
    prod: 9085417,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorEUR',
    address: "'0x25fa978ea1a7dc9bdc33a2959b9053eae57169b5'",
    proxyAddress: "'0xb49f677943BC038e9857d61E7d053CaA2C1734C1'",
    type: 'aggregator',
  },
  {
    prod: 9085502,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorCHF',
    address: "'0x02d5c618dbc591544b19d0bf13543c0728a3c4ec'",
    proxyAddress: "'0x449d117117838fFA61263B61dA6301AA2a88B13A'",
    type: 'aggregator',
  },
  {
    prod: 9085494,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorGBP',
    address: "'0x151445852b0cfdf6a4cc81440f2af99176e8ad08'",
    proxyAddress: "'0x5c0Ab2d9b5a7ed9f470386e82BB36A3613cDd4b5'",
    type: 'aggregator',
  },
  {
    prod: 9085433,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorJPY',
    address: "'0xe1407bfaa6b5965bad1c9f38316a3b655a09d8a6'",
    proxyAddress: "'0xBcE206caE7f0ec07b545EddE332A47C2F75bbeb3'",
    type: 'aggregator',
  },
  {
    prod: 9085563,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorXAG',
    address: "'0x8946a183bfafa95becf57c5e08fe5b7654d2807b'",
    proxyAddress: "'0x379589227b15F1a12195D3f2d90bBc9F31f95235'",
    type: 'aggregator',
  },
  {
    prod: 9085543,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorXAU',
    address: "'0xafce0c7b7fe3425adb3871eae5c0ec6d93e01935'",
    proxyAddress: "'0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6'",
    type: 'aggregator',
  },
  {
    prod: 9755177,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorFTSE',
    address: "'0x16924ae9c2ac6cdbc9d6bb16fafcd38bed560936'",
    proxyAddress: "'0xE23FA0e8dd05D6f66a6e8c98cab2d9AE82A7550c'",
    type: 'aggregator',
  },
  {
    prod: 9755246,
    test: null,
    exchanger: exchangerBlocks.RatesBlockOne,
    name: 'AggregatorN225',
    address: "'0x3f6e09a4ec3811765f5b2ad15c0279910dbb2c04'",
    proxyAddress: "'0x5c4939a2ab3A2a9f93A518d81d4f8D0Bc6a68980'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorSNX',
    address: "'0xd3ce735cdc708d9607cfbc6c3429861625132cb4'",
    proxyAddress: "'0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorETH',
    address: "'0xf79d6afbb6da890132f9d7c355e3015f15f3406f'",
    proxyAddress: "'0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorCOMP',
    address: "'0x80eeb41e2a86d4ae9903a3860dd643dad2d1a853'",
    proxyAddress: "'0xdbd020CAeF83eFd542f4De03e3cF0C28A4428bd5'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorKNC',
    address: "'0x45e9fee61185e213c37fc14d18e44ef9262e10db'",
    proxyAddress: "'0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorLEND',
    address: "'0x2408935efe60f092b442a8755f7572edb9cf971e'",
    proxyAddress: "'0x4aB81192BB75474Cf203B56c36D6a13623270A67'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorREN',
    address: "'0x353f61f39a17e56ca413f4559b8cd3b6a252ffc8'",
    proxyAddress: "'0x0f59666EDE214281e956cb3b2D0d69415AfF4A01'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorBTC',
    address: "'0xf5fff180082d6017036b771ba883025c654bc935'",
    proxyAddress: "'0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorBNB',
    address: "'0x0821f21f21c325ae39557ca83b6b4df525495d06'",
    proxyAddress: "'0x14e613AC84a31f709eadbdF89C6CC390fDc9540A'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorTRX',
    address: "'0x28e0fd8e05c14034cba95c6bf3394d1b106f7ed8'",
    proxyAddress: "'0xacD0D1A29759CC01E8D925371B72cb2b5610EA25'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorXTZ',
    address: "'0x52d674c76e91c50a0190de77da1fad67d859a569'",
    proxyAddress: "'0x5239a625dEb44bF3EeAc2CD5366ba24b8e9DB63F'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorXRP',
    address: "'0x570985649832b51786a181d57babe012be1c09a4'",
    proxyAddress: "'0xCed2660c6Dd1Ffd856A5A82C67f3482d88C50b12'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorLTC',
    address: "'0xc6ee0d4943dc43bd462145aa6ac95e9c0c8b462f'",
    proxyAddress: "'0x6AF09DF7563C363B5763b9102712EbeD3b9e859B'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorLINK',
    address: "'0x32dbd3214ac75223e27e575c53944307914f7a90'",
    proxyAddress: "'0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorEOS',
    address: "'0x740be5e8fe30bd2bf664822154b520eae0c565b0'",
    proxyAddress: "'0x10a43289895eAff840E8d45995BBa89f9115ECEe'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorBCH',
    address: "'0x6a6527d91ddae0a259cc09dad311b3455cdc1fbd'",
    proxyAddress: "'0x9F0F69428F923D6c95B781F89E165C9b2df9789D'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorETC',
    address: "'0xe2c9aea66ed352c33f9c7d8e824b7cac206b0b72'",
    proxyAddress: "'0xaEA2808407B7319A31A383B6F8B60f04BCa23cE2'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    name: 'AggregatorDASH',
    address: "'0xd9d35a82d4dd43be7cfc524ebf5cd00c92c48ebc'",
    proxyAddress: "'0xFb0cADFEa136E9E343cfb55B863a6Df8348ab912'",
    type: 'aggregator',
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    type: 'aggregator',
    name: 'AggregatorXMR',
    address: "'0xd1e850d6afb6c27a3d66a223f6566f0426a6e13b'",
    proxyAddress: "'0xFA66458Cce7Dd15D8650015c4fce4D278271618F'",
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    type: 'aggregator',
    name: 'AggregatorADA',
    address: "'0xf11bf075f0b2b8d8442ab99c44362f1353d40b44'",
    proxyAddress: "'0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55'",
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    type: 'aggregator',
    name: 'AggregatorCEX',
    address: "'0x46bb139f23b01fef37cb95ae56274804bc3b3e86'",
    proxyAddress: "'0x283D433435cFCAbf00263beEF6A362b7cc5ed9f2'",
  },
  {
    prod: duplicateRateBlocks.one,
    test: null,
    exchanger: exchangerBlocks.RatesBlockTwo,
    type: 'aggregator',
    name: 'AggregatorDEFI',
    address: "'0x7ae7781c7f3a5182596d161e037e6db8e36328ef'",
    proxyAddress: "'0xa8E875F94138B0C5b51d1e1d5dE35bbDdd28EA87'",
  },
  {
    prod: duplicateRateBlocks.two,
    test: null,
    exchanger: exchangerBlocks.RatesBlockThree,
    type: 'aggregator',
    name: 'AggregatorXAU_3',
    address: "'0x06A7689149cf04DacFDE555d1e1EAD7dD7370316'",
    proxyAddress: "'0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6'",
  },
  {
    prod: duplicateRateBlocks.two,
    test: null,
    exchanger: exchangerBlocks.RatesBlockThree,
    type: 'aggregator',
    name: 'AggregatorXAG_3',
    address: "'0xF320E19B2ED82F1B226b006cD43FE600FEA56615'",
    proxyAddress: "'0x379589227b15F1a12195D3f2d90bBc9F31f95235'",
  },
  {
    prod: duplicateRateBlocks.three,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFour,
    type: 'aggregator',
    name: 'AggregatorLINK_3',
    address: "'0x8cDE021F0BfA5f82610e8cE46493cF66AC04Af53'",
    proxyAddress: "'0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c'",
  },
  {
    prod: duplicateRateBlocks.three,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFour,
    type: 'aggregator',
    name: 'AggregatorBTC_3',
    address: "'0xF570deEffF684D964dc3E15E1F9414283E3f7419'",
    proxyAddress: "'0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c'",
  },
  {
    prod: duplicateRateBlocks.three,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFour,
    type: 'aggregator',
    name: 'AggregatorAUD_3',
    address: "'0x3A33c0eFD0EB8fd38a6E1904dF1E32f95F67616b'",
    proxyAddress: "'0x77F9710E7d0A19669A13c055F62cd80d313dF022'",
  },
  {
    prod: duplicateRateBlocks.three,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFour,
    type: 'aggregator',
    name: 'AggregatorEUR_3',
    address: "'0x8f71c9c583248A11CAcBbC8FD0D5dFa483D3b109'",
    proxyAddress: "'0xb49f677943BC038e9857d61E7d053CaA2C1734C1'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorBCH_3',
    address: "'0x744704c31a2E46AD60c7CDf0212933B4c4c2c9eC'",
    proxyAddress: "'0x9F0F69428F923D6c95B781F89E165C9b2df9789D'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorEOS_3',
    address: "'0x7C9Ca5AdcBa43D968D9e0dDcA16293D66c07482D'",
    proxyAddress: "'0x10a43289895eAff840E8d45995BBa89f9115ECEe'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorBNB_3',
    address: "'0x90888CDDaD598570c6eDC443eee9aaDB63cDA3C4'",
    proxyAddress: "'0x14e613AC84a31f709eadbdF89C6CC390fDc9540A'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorADA_3',
    address: "'0xf94800E6e36b0dc860F6f31e7cDf1086099E8c0E'",
    proxyAddress: "'0xAE48c91dF1fE419994FFDa27da09D5aC69c30f55'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorREN_3',
    address: "'0xD286AF227B7b0695387E279B9956540818B1dc2a'",
    proxyAddress: "'0x0f59666EDE214281e956cb3b2D0d69415AfF4A01'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorLEND_3',
    address: "'0x0227fb846b48e209d56D79b0A3109FdA561db821'",
    proxyAddress: "'0x4aB81192BB75474Cf203B56c36D6a13623270A67'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorKNC_3',
    address: "'0xa811Ff165b082c0507Ce9a5a660Fb3D7eEeCb88A'",
    proxyAddress: "'0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc'",
  },
  {
    prod: duplicateRateBlocks.four,
    test: null,
    exchanger: exchangerBlocks.RatesBlockFive,
    type: 'aggregator',
    name: 'AggregatorSNX_3',
    address: "'0xC8DB8d5869510Bb1FCd3Bd7C7624c1b49c652ef8'",
    proxyAddress: "'0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorDASH_3',
    address: "'0x1fB0b88eaF51420c14B67256Ab7DaE1de6e116cb'",
    proxyAddress: "'0xFb0cADFEa136E9E343cfb55B863a6Df8348ab912'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorETC_3',
    address: "'0x41306Eb5fC11A68C284c19Ba3B9510c0252E0a34'",
    proxyAddress: "'0xaEA2808407B7319A31A383B6F8B60f04BCa23cE2'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorLTC_3',
    address: "'0x3F2d1Ff4930318B5a7c301E1bf7e703DcF6D83E3'",
    proxyAddress: "'0x6AF09DF7563C363B5763b9102712EbeD3b9e859B'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorXMR_3',
    address: "'0x38cB8642A0FC558918fCed939450D689d0E5a7Be'",
    proxyAddress: "'0xFA66458Cce7Dd15D8650015c4fce4D278271618F'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorXRP_3',
    address: "'0x75Ed2f61837c3D9Ef1BF0af4DB84664DC6fe56bC'",
    proxyAddress: "'0xCed2660c6Dd1Ffd856A5A82C67f3482d88C50b12'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorTRX_3',
    address: "'0x4D35fE9C85233a8E00aE2d3C0d912a45Bc781025'",
    proxyAddress: "'0xacD0D1A29759CC01E8D925371B72cb2b5610EA25'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorXTZ_3',
    address: "'0x7391BB54a24719DA7DD81c2E5176cf954D7f7635'",
    proxyAddress: "'0x5239a625dEb44bF3EeAc2CD5366ba24b8e9DB63F'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorCOMP_3',
    address: "'0x150631a2e822d3ed7D46df9A270ce7134a16De89'",
    proxyAddress: "'0xdbd020CAeF83eFd542f4De03e3cF0C28A4428bd5'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorDEFI_3',
    address: "'0x25367741a23464b41B4aB978Bd8092d56a3590C0'",
    proxyAddress: "'0xa8E875F94138B0C5b51d1e1d5dE35bbDdd28EA87'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorCEX_3',
    address: "'0xBC66D51898dd2EFA3C214C87d4645C0478Ccbc95'",
    proxyAddress: "'0x283D433435cFCAbf00263beEF6A362b7cc5ed9f2'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorETH_3',
    address: "'0x00c7A37B03690fb9f41b5C5AF8131735C7275446'",
    proxyAddress: "'0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorCHF_3',
    address: "'0xdf005CaD29AAC8b1170960807f99B62aaeD1bb0a'",
    proxyAddress: "'0x449d117117838fFA61263B61dA6301AA2a88B13A'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorJPY_3',
    address: "'0x87CFEA02C8322653a7335C6f72Be19ce54ECbFb5'",
    proxyAddress: "'0xBcE206caE7f0ec07b545EddE332A47C2F75bbeb3'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorGBP_3',
    address: "'0x3a6e27b663593E34a7FB80bA9544d9E8BAbdF001'",
    proxyAddress: "'0x5c0Ab2d9b5a7ed9f470386e82BB36A3613cDd4b5'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorFTSE_3',
    address: "'0xc95B41df94F3890122B2bcEf9005AFDe17773dB2'",
    proxyAddress: "'0xE23FA0e8dd05D6f66a6e8c98cab2d9AE82A7550c'",
  },
  {
    prod: duplicateRateBlocks.five,
    test: null,
    exchanger: exchangerBlocks.RatesBlockSix,
    type: 'aggregator',
    name: 'AggregatorNIKKEI_3',
    address: "'0x4Fa0655c09E0b5B2F50F1bd861B2d9BC63ccBBCB'",
    proxyAddress: "'0x5c4939a2ab3A2a9f93A518d81d4f8D0Bc6a68980'",
  },
  {
    prod: 11198828,
    test: null,
    type: 'aggregator',
    name: 'AggregatorOIL_3',
    address: "'0xF0f201FDB77a5eCd065CdbD69850F3f6694B2BEf'",
    proxyAddress: "'0xb70ba475F1a6b5396e46d9b2a5f7081080Dc9d09'",
  },
  {
    prod: 11179792,
    test: null,
    type: 'aggregator',
    name: 'AggregatorAAVE_3',
    address: "'0xF2d87E37EA1e54c7Aa913d2447A5f69f61C114Cf'",
    proxyAddress: "'0x547a514d5e3769680Ce22B2361c10Ea13619e8a9'",
  },
  {
    prod: 11322483,
    test: null,
    type: 'aggregator',
    name: 'AggregatorDOT_3',
    address: "'0x8640798469204DBbAd5842f8688B152c510F7777'",
    proxyAddress: "'0x1C07AFb8E2B827c5A4739C6d59Ae3A5035f28734'",
  },
  {
    prod: 11322507,
    test: null,
    type: 'aggregator',
    name: 'AggregatorUNI_3',
    address: "'0x5B0e9Ff11aae806067787d380967900551919c0D'",
    proxyAddress: "'0x553303d460EE0afB37EdFf9bE42922D8FF63220e'",
  },
  {
    prod: 11322375,
    test: null,
    type: 'aggregator',
    name: 'AggregatorFIL_3',
    address: "'0x2B89EC8B7d018CA574E844EdFF24c17c6BB3E3a1'",
    proxyAddress: "'0x1A31D42149e82Eb99777f903C08A2E41A00085d3'",
  },
  {
    prod: 11322433,
    test: null,
    type: 'aggregator',
    name: 'AggregatorYFI_3',
    address: "'0xAec0D77fdD6a2a34EC3eaF915260496Ae27f9D25'",
    proxyAddress: "'0xA027702dbb89fbd58938e4324ac03B58d812b0E1'",
  },
  {
    prod: 11317828,
    test: null,
    type: 'aggregator',
    name: 'AggregatorOIL_3_1',
    address: "'0x2747254824f1731e016352e3267735fd9a6331C0'",
    proxyAddress: "'0xf3584F4dd3b467e73C2339EfD008665a70A4185c'",
  },
  {
    prod: 11513101,
    test: null,
    type: 'bytes32',
    name: 'ExchangeRates_2_35_2',
    abiPath: '../abis/ExchangeRates.json',
    address: "'0xd69b189020EF614796578AfE4d10378c5e7e1138'",
  },
  {
    prod: 11791363,
    test: null,
    type: 'aggregator',
    name: 'AggregatorTesla_3',
    address: "'0x21CBd7098bf18F293fbF5451Be2Fc968EAA1e072'",
    proxyAddress: "'0x1ceDaaB50936881B3e449e47e40A2cDAF5576A4a'",
  },
  {
    prod: 11752461,
    test: null,
    type: 'aggregator',
    name: 'AggregatorSNX_4',
    address: "'0xBAFe3CB0E563E914806A99D547bdBF2Cfcf5fDF6'",
    proxyAddress: "'0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699'",
  },
  {
    prod: 11752524,
    test: null,
    type: 'aggregator',
    name: 'AggregatorCOMP_4',
    address: "'0x9D6acD34D481512586844fD65328BD358d306752'",
    proxyAddress: "'0xdbd020CAeF83eFd542f4De03e3cF0C28A4428bd5'",
  },
  {
    prod: 11752749,
    test: null,
    type: 'aggregator',
    name: 'AggregatorBNB_4',
    address: "'0x32dCB582EcD6193937BD33168e19173Cfe10a140'",
    proxyAddress: "'0x14e613AC84a31f709eadbdF89C6CC390fDc9540A'",
  },
  {
    prod: 11662661,
    test: null,
    type: 'aggregator',
    name: 'AggregatorLINK_4',
    address: "'0xf4eBc177fbBd15874c08cccbc3Dd383ee1A24a9d'",
    proxyAddress: "'0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c'",
  },
  {
    prod: 11920738,
    test: null,
    type: 'aggregator',
    name: 'AggregatorXTZ_4',
    address: "'0xF6eEca2FD1Ace8C17389B119DE983e9FD9a8ee8F'",
    proxyAddress: "'0x5239a625dEb44bF3EeAc2CD5366ba24b8e9DB63F'",
  },
  {
    prod: 11922288,
    test: null,
    type: 'aggregator',
    name: 'AggregatorCHF_4',
    address: "'0x7C8719f3683585A242a67c73F6f3C98362004Da4'",
    proxyAddress: "'0x449d117117838fFA61263B61dA6301AA2a88B13A'",
  },
  {
    prod: 11922311,
    test: null,
    type: 'aggregator',
    name: 'AggregatorEUR_4',
    address: "'0x02F878A94a1AE1B15705aCD65b5519A46fe3517e'",
    proxyAddress: "'0xb49f677943BC038e9857d61E7d053CaA2C1734C1'",
  },
  {
    prod: 11922323,
    test: null,
    type: 'aggregator',
    name: 'AggregatorJPY_4',
    address: "'0x01A1F73b1f4726EB6EB189FFA5CBB91AF8E14025'",
    proxyAddress: "'0xBcE206caE7f0ec07b545EddE332A47C2F75bbeb3'",
  },
  {
    prod: 11922367,
    test: null,
    type: 'aggregator',
    name: 'AggregatorGBP_4',
    address: "'0x568B8FD03992F56bF240958D22f5a6fcf7Bd850b'",
    proxyAddress: "'0x5c0Ab2d9b5a7ed9f470386e82BB36A3613cDd4b5'",
  },
  {
    prod: 11922463,
    test: null,
    type: 'aggregator',
    name: 'AggregatorAUD_4',
    address: "'0x7F7B323291C052De18926396176d384C4A8e19E2'",
    proxyAddress: "'0x77F9710E7d0A19669A13c055F62cd80d313dF022'",
  },
  {
    prod: 11922485,
    test: null,
    type: 'aggregator',
    name: 'AggregatorXAG_4',
    address: "'0x01A1F73b1f4726EB6EB189FFA5CBB91AF8E14025'",
    proxyAddress: "'0x379589227b15F1a12195D3f2d90bBc9F31f95235'",
  },
  {
    prod: 11922494,
    test: null,
    type: 'aggregator',
    name: 'AggregatorXAU_4',
    address: "'0xea5f70faa03f5C30B96029635C8d431d1A3cD1b8'",
    proxyAddress: "'0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6'",
  },
  {
    prod: 11921518,
    test: null,
    type: 'aggregator',
    name: 'AggregatorYFI_4',
    address: "'0xe4B36bbC01eAD5A378d4Cb088604BFe5ab2CeFE3'",
    proxyAddress: "'0xA027702dbb89fbd58938e4324ac03B58d812b0E1'",
  },
  {
    prod: 11921518,
    test: null,
    type: 'aggregator',
    name: 'AggregatorBNB_5',
    address: "'0xC45eBD0F901bA6B2B8C7e70b717778f055eF5E6D'",
    proxyAddress: "'0x14e613AC84a31f709eadbdF89C6CC390fDc9540A'",
  },
  {
    prod: 11922531,
    test: null,
    type: 'aggregator',
    name: 'AggregatorTRX_4',
    address: "'0xdD860A2aD1b6EBdF2B17D7d01d65A7Be3926bE84'",
    proxyAddress: "'0xacD0D1A29759CC01E8D925371B72cb2b5610EA25'",
  },
  {
    prod: 11922560,
    test: null,
    type: 'aggregator',
    name: 'AggregatorREN_4',
    address: "'0x3d0bB55D0D2F255d7A0EAb8A53a91b3369728E36'",
    proxyAddress: "'0x0f59666EDE214281e956cb3b2D0d69415AfF4A01'",
  },
  {
    prod: 11922560,
    test: null,
    type: 'aggregator',
    name: 'AggregatorKNC_4',
    address: "'0xbC60258F775683eA28048030806Ad3A80c4A33Ae'",
    proxyAddress: "'0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc'",
  },
  {
    prod: 11922580,
    test: null,
    type: 'aggregator',
    name: 'AggregatorXRP_4',
    address: "'0x4d839a486EC0B1C9b0D9e9D397993Ba5B150cB34'",
    proxyAddress: "'0xCed2660c6Dd1Ffd856A5A82C67f3482d88C50b12'",
  },
  {
    prod: 11922597,
    test: null,
    type: 'aggregator',
    name: 'AggregatorBCH_4',
    address: "'0xd054be48Ae13A89a82744373f647A755dF7CaE17'",
    proxyAddress: "'0x9F0F69428F923D6c95B781F89E165C9b2df9789D'",
  },
  {
    prod: 11922606,
    test: null,
    type: 'aggregator',
    name: 'AggregatorEOS_4',
    address: "'0xea7C55976844396f3bD4C89F66988b8b5Be5E96a'",
    proxyAddress: "'0x10a43289895eAff840E8d45995BBa89f9115ECEe'",
  },
];
