var fixtures = {
  testnet: {
    network: "testnet",
    passphrase: "voice flame certainly anyone former raw limit king rhythm tumble crystal earth",
    passphrase2: "flame voice certainly anyone former raw limit king rhythm tumble crystal earth",
    addresses: ["muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu", "mkvaJJCpMMjvhaHodDCvstZsZwTaWR4w3M", "msj2PuwQRMWEmsi75GDcERXygw63BTRX7W"],
    oldaddresses: ["mruvPH9j2QB1P7FGdyuG2wHuqjmPM6xJYa", "n3gQYQceiTbFboggAKb6qZNpxPsrkeNLqE", "n3hiTgJfVLg1ChtFJ6CQJA3azTMr5GFhT8"],
    privkey: "5b720efb03dd889523cf61d9aefac8dce1bf7609f42abd0cf10b57f743b3fb2d", //muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu
    pubkey: "02b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef", //muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu
    wif: "cQeTd6ap99KQYNr3jaZkANTKfk32CEfYjnZVNZdLKDfHoPxjVn5K", //muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu
    transaction: {
      unsigned: '010000000139bd8a5a854b46ed4c977ff67350b34cc1945b37544c5de46d7c3ce1b735cb930200000000ffffffff036c2a0000000000001976a9143b504036641eac98e17d7129f97fd119f572d3a088ac6c2a00000000000047512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000000bebc2000000000052aeee046435000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      unsigned2: '010000000139bd8a5a854b46ed4c977ff67350b34cc1945b37544c5de46d7c3ce1b735cb93020000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88acffffffff036c2a0000000000001976a9143b504036641eac98e17d7129f97fd119f572d3a088ac6c2a00000000000047512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000000bebc2000000000052aeee046435000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      signed: '010000000139bd8a5a854b46ed4c977ff67350b34cc1945b37544c5de46d7c3ce1b735cb93020000006b4830450221009f43420647dba05df266e1606cd9feaccb065b66f490b95a7e52ad662affef7a022047000f2181e9287184b497af1e0e04ec6b39edb290da32246cae7d32033953df012102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feefffffffff036c2a0000000000001976a9143b504036641eac98e17d7129f97fd119f572d3a088ac6c2a00000000000047512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000000bebc2000000000052aeee046435000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      source: 'muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu',
      destination: 'mkvaJJCpMMjvhaHodDCvstZsZwTaWR4w3M'
    },
    msigto2of3transaction: {
      unsigned: '010000000350ed540bba80df9340f071f46d98e89c51cfce61231f763c7859130f4b90159d000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88acffffffff5f3646da52c064cf2141c53f071ed5daf07f9982602f340b45729816936ee25f000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88acfffffffff98e903aba9f92b5df72740756f572b8a41f2c9cff462bad7c6470d873607d14000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88acffffffff03781e0000000000006952210295ed644624cc46aba3333c964579913c4ae402a91fa6fe3be079f367efdd3f8e2102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef2103afd271d732acd61b914cb7545bdce2c387282e920e4587999b09bb61955720a853ae00000000000000001e6a1c0d0d3d874a6699908d1c1cc6a158e062dc48cef5733da028a85de99092180000000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      signed: '010000000350ed540bba80df9340f071f46d98e89c51cfce61231f763c7859130f4b90159d000000006b483045022100c3946b7635d4d6dfc00771315a79448388beee82422d2dd0982c1a09e4a18b65022038bb4af232c72b5d9cb21d2e004ed98cd9e9ae45f1314e5fd5085502cc3f5f7d012102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feefffffffff5f3646da52c064cf2141c53f071ed5daf07f9982602f340b45729816936ee25f000000006b483045022100c0c638861b1024f051cd0e9aadf6f2b6df26c8567872e729b4fbdc1936adaf3902201c19238364c3cdfb79014e6d32937f40f131b196a3f9466ef000854019cea6d6012102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feeffffffffff98e903aba9f92b5df72740756f572b8a41f2c9cff462bad7c6470d873607d14000000006b483045022100e6dad5a037e24aba122900a585abedb151583851b74e6bd1b2a624366736a768022046b9fc4e1b8fd504c37b10c86dfba47cb25486cc3758381e3b8548826072eb63012102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feefffffffff03781e0000000000006952210295ed644624cc46aba3333c964579913c4ae402a91fa6fe3be079f367efdd3f8e2102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef2103afd271d732acd61b914cb7545bdce2c387282e920e4587999b09bb61955720a853ae00000000000000001e6a1c0d0d3d874a6699908d1c1cc6a158e062dc48cef5733da028a85de99092180000000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      source: 'muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu',
      destination: '2_muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu_mkvaJJCpMMjvhaHodDCvstZsZwTaWR4w3M_msj2PuwQRMWEmsi75GDcERXygw63BTRX7W_3'
    },
    msigfrom2of3transaction: {
      unsigned: '0100000001f7d0a9678e1d7bf386279c5789651c3de42f4561f047d277506efbfcacc9ca0d000000006952210295ed644624cc46aba3333c964579913c4ae402a91fa6fe3be079f367efdd3f8e2102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef2103afd271d732acd61b914cb7545bdce2c387282e920e4587999b09bb61955720a853aeffffffff0336150000000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000000000001e6a1c52ccd1391c61fa2aa620c567413de76576b1d27457550db27e911c843a5a9800000000006952210295ed644624cc46aba3333c964579913c4ae402a91fa6fe3be079f367efdd3f8e2102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef2103afd271d732acd61b914cb7545bdce2c387282e920e4587999b09bb61955720a853ae00000000',
      signed12: '0100000001f7d0a9678e1d7bf386279c5789651c3de42f4561f047d277506efbfcacc9ca0d00000000920047304402200fd9dd6d55fa7d8d9880ab939eb41301ff3718fa50dbd3a94efb94368738349602200342d222458e4c35320d0bdc232f66a4b7ad802d1e1eabac2d01d9b790433aab01483045022100f59cf8fa95f9e2d829e4570bf4fdccc2fba39fbe98fe136c0567d438f8d8567502200a2a6dee9db3f3b745c3006f25967ebb8c6221129725f903745d13ae304a5b2d01ffffffff0336150000000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000000000001e6a1c52ccd1391c61fa2aa620c567413de76576b1d27457550db27e911c843a5a9800000000006952210295ed644624cc46aba3333c964579913c4ae402a91fa6fe3be079f367efdd3f8e2102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef2103afd271d732acd61b914cb7545bdce2c387282e920e4587999b09bb61955720a853ae00000000',
      signed13: '0100000001f7d0a9678e1d7bf386279c5789651c3de42f4561f047d277506efbfcacc9ca0d000000009300483045022100f59cf8fa95f9e2d829e4570bf4fdccc2fba39fbe98fe136c0567d438f8d8567502200a2a6dee9db3f3b745c3006f25967ebb8c6221129725f903745d13ae304a5b2d014830450221008446cc514ec42982b5e635fc1aa8cabf2712dc69557417218825cd9d1a39e5da02207d8eeeb2ce386c97832d41c9fe9d0e07497439fae93b098192710de1f4a99c7a01ffffffff0336150000000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000000000001e6a1c52ccd1391c61fa2aa620c567413de76576b1d27457550db27e911c843a5a9800000000006952210295ed644624cc46aba3333c964579913c4ae402a91fa6fe3be079f367efdd3f8e2102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef2103afd271d732acd61b914cb7545bdce2c387282e920e4587999b09bb61955720a853ae00000000',
      signed23: '0100000001f7d0a9678e1d7bf386279c5789651c3de42f4561f047d277506efbfcacc9ca0d00000000920047304402200fd9dd6d55fa7d8d9880ab939eb41301ff3718fa50dbd3a94efb94368738349602200342d222458e4c35320d0bdc232f66a4b7ad802d1e1eabac2d01d9b790433aab014830450221008446cc514ec42982b5e635fc1aa8cabf2712dc69557417218825cd9d1a39e5da02207d8eeeb2ce386c97832d41c9fe9d0e07497439fae93b098192710de1f4a99c7a01ffffffff0336150000000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000000000001e6a1c52ccd1391c61fa2aa620c567413de76576b1d27457550db27e911c843a5a9800000000006952210295ed644624cc46aba3333c964579913c4ae402a91fa6fe3be079f367efdd3f8e2102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef2103afd271d732acd61b914cb7545bdce2c387282e920e4587999b09bb61955720a853ae00000000',
      source: '2_muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu_mkvaJJCpMMjvhaHodDCvstZsZwTaWR4w3M_msj2PuwQRMWEmsi75GDcERXygw63BTRX7W_3',
      destination: 'muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu'
    }
  }/*,
  livenet: {
    // @TODO: real fixtures for mainnet, for now the mainnet fixtures are the same as testnet, except different network
    network: "livenet",
    passphrase: "voice flame certainly anyone former raw limit king rhythm tumble crystal earth",
    passphrase2: "flame voice certainly anyone former raw limit king rhythm tumble crystal earth",
    addresses: ["1F2MFgLaQNLCTFCMWhffEG43GtxPxu6KWM", "16Qd1F7qYLJfvTpBueEZ3yMYhwrsanPjSN", "1DD56rrRcL4yzmEVMhFEQWKepwVLJScrVA"],
    oldaddresses: ["1CPy6E4kDNjkbzmevQvtD25aykAgSBEsEe", "1PATFMXfuS9zphD4Skcj1eAW6QH9pCoJZ3", "1PBmAdDggKEkRbQdaXE2UEqG8Tm9A66SyU"],
    privkey: "5b720efb03dd889523cf61d9aefac8dce1bf7609f42abd0cf10b57f743b3fb2d", //1F2MFgLaQNLCTFCMWhffEG43GtxPxu6KWM
    pubkey: "02b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef", //1F2MFgLaQNLCTFCMWhffEG43GtxPxu6KWM
    wif: "KzHUABaxi5d9NwNnMAkco3xG3WjcXnZrfkR2G9App71HYetoX8Jy", //1F2MFgLaQNLCTFCMWhffEG43GtxPxu6KWM
    transaction: {
      unsigned: '010000000139bd8a5a854b46ed4c977ff67350b34cc1945b37544c5de46d7c3ce1b735cb930200000000ffffffff036c2a0000000000001976a9143b504036641eac98e17d7129f97fd119f572d3a088ac6c2a00000000000047512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000000bebc2000000000052aeee046435000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      unsigned2: '010000000139bd8a5a854b46ed4c977ff67350b34cc1945b37544c5de46d7c3ce1b735cb93020000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88acffffffff036c2a0000000000001976a9143b504036641eac98e17d7129f97fd119f572d3a088ac6c2a00000000000047512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000000bebc2000000000052aeee046435000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      signed: '010000000139bd8a5a854b46ed4c977ff67350b34cc1945b37544c5de46d7c3ce1b735cb93020000006b4830450221009f43420647dba05df266e1606cd9feaccb065b66f490b95a7e52ad662affef7a022047000f2181e9287184b497af1e0e04ec6b39edb290da32246cae7d32033953df012102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feefffffffff036c2a0000000000001976a9143b504036641eac98e17d7129f97fd119f572d3a088ac6c2a00000000000047512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000000bebc2000000000052aeee046435000000001976a91499d31556557ce86ab75fcb74683efba1bde2815e88ac00000000',
      source: '1F2MFgLaQNLCTFCMWhffEG43GtxPxu6KWM',
      destination: '16Qd1F7qYLJfvTpBueEZ3yMYhwrsanPjSN'
    }
  }*/
}
