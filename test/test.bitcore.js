/* globals NETWORK */
var should = chai.should();

describe("CWBitcore", function() {

  // set the global NETWORK to the correct one for the test
  beforeEach(function() {
    NETWORK = bitcore.Networks.testnet;
  });

  it("should be able to extract multisignature addresses from output script", function() {
    var addresses = CWBitcore.extractMultiSigAddressesFromScript(bitcore.Script("512103426062563e6ac59497cd168e0bec62b7114dee76aa42dc4631481ac949ff0d302103e71f23826f96714bec716f913972c015debf84ddd8077b692f1ff7335089df65410433e05b29670f19cbc499f207f11abe1c69f77f00d5cbb9dbec5b5fe7527e2f41fa1e90f10a05e9c0a34d255988082e190c9ee7ea05f62297d4f76d9b61d7561b53ae"));
    addresses.sort().join().should.equal(["mjWZ25w7ULQaafgEBNZs3mYtk1P4PTEM9h", "mpmkrd3zBEGBogLxxxvJceyGC8QhfGoeRM", "mg39ggbZunBNAP9YKCPyFpb1w1B6U31VUZ"].sort().join());

    var addresses2 = CWBitcore.extractMultiSigAddressesFromScript(bitcore.Script("512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000174876e8000000000052ae"));
    addresses2.sort().join().should.equal(["muYJYjRZDPmTEMfyEGe34BGN8tZ6rmRZCu", "n1wFfE5KHz1RazfGRFcPzRMkWD4azDtJDd"].sort().join());
  });

  it("should be able to check transaction destination for multisignature", function() {
    var unsignedTx = "0100000001b5dc4f9aa43728b7c367e016b30238fa4ade9d4eef3d1447b5a7f30a024108f0020000001976a914e86de35c9a6af59b5ad967e8b115f691a9d850b988acffffffff02a0860100000000004751210219e028f671718df9f95bcb398c7b2afe9ac025d8ac031aaf48ee2dd4175c34a921034e46baa15435cb22791f9d06d6f370d6cf89bf9ff8978aa13605b326792e81ca52aef8304a00000000001976a914e86de35c9a6af59b5ad967e8b115f691a9d850b988ac00000000";

    var source = ["n2hvhii5yyEafRZBnANm4fu3ZaPCDJeXtL"];
    var dest = ["1_mo12Q28F7c77agyLvwHgJGFcPfZ4hngafP_n2hvhii5yyEafRZBnANm4fu3ZaPCDJeXtL_2"];

    tx = bitcore.Transaction(unsignedTx);

    CWBitcore.isValidMultisigAddress(dest[0]).should.be.true;
    CWBitcore.checkTransactionDest(unsignedTx, source, dest).should.be.true;
  });
});

describe("roobs", function() {
  return;

  // set the global NETWORK to the correct one for the test
  beforeEach(function() {
    NETWORK = bitcore.Networks.livenet;
  });

  it("sign msig", function() {
    // 1of2
    // var unsignedTx = "0100000001b26af67194ee7bb8db8bd17c0e49c1e6f27ca38d5987787ad5870ee9f735ae67000000004751210219e028f671718df9f95bcb398c7b2afe9ac025d8ac031aaf48ee2dd4175c34a921034e46baa15435cb22791f9d06d6f370d6cf89bf9ff8978aa13605b326792e81ca52aeffffffff0336150000000000001976a914e86de35c9a6af59b5ad967e8b115f691a9d850b988ac00000000000000001e6a1c5bb3f7b957486719fa29c24680566102a08b2862189ba7ab1812d2075a4a0100000000004751210219e028f671718df9f95bcb398c7b2afe9ac025d8ac031aaf48ee2dd4175c34a921034e46baa15435cb22791f9d06d6f370d6cf89bf9ff8978aa13605b326792e81ca52ae00000000";
    // 2of2
    var unsignedTx = "0100000001b26af67194ee7bb8db8bd17c0e49c1e6f27ca38d5987787ad5870ee9f735ae67000000004752210219e028f671718df9f95bcb398c7b2afe9ac025d8ac031aaf48ee2dd4175c34a921034e46baa15435cb22791f9d06d6f370d6cf89bf9ff8978aa13605b326792e81ca52aeffffffff0336150000000000001976a914e86de35c9a6af59b5ad967e8b115f691a9d850b988ac00000000000000001e6a1c5bb3f7b957486719fa29c24680566102a08b2862189ba7ab1812d2075a4a0100000000004751210219e028f671718df9f95bcb398c7b2afe9ac025d8ac031aaf48ee2dd4175c34a921034e46baa15435cb22791f9d06d6f370d6cf89bf9ff8978aa13605b326792e81ca52ae00000000";

    var cwk = new CWPrivateKey("KwjRTdLna7Ud9idQB4rY5T2ZBmgsdGAyzC3THvgstyCwtGRkGSRR");
    var cwk2 = new CWPrivateKey("KzDv3wvywJTu5DM6B6CBnBPsGcCbY2qs71hgMkmb1wSCSPe7XyRJ");

    var msigScriptPubKey = null;
    var multiSigInfo = null;

    var signRawTransaction = function(unsignedHex, cwPrivateKey, disableIsFullySigned) {
      var tx = bitcore.Transaction(unsignedHex);

      var keyMap = CWBitcore.genKeyMap([cwPrivateKey]);
      var keyChain = [];

      tx.inputs.forEach(function(input, idx) {
        var inputObj;

        // dissect what was set as input script to use it as output script
        var scriptPubKey = bitcore.Script(input._scriptBuffer.toString('hex'));
        var addresses = [];

        console.log(idx, scriptPubKey.classify(), scriptPubKey);

        switch (scriptPubKey.classify()) {
          case bitcore.Script.types.PUBKEY_OUT:
            inputObj = input.toObject();
            inputObj.output = bitcore.Transaction.Output({
              script: input._scriptBuffer.toString('hex'),
              satoshis: 0 // we don't know this value, setting 0 because otherwise it's going to cry about not being an INT
            });
            tx.inputs[idx] = new bitcore.Transaction.Input.PublicKey(inputObj);

            addresses = [scriptPubKey.toAddress(NETWORK).toString()];

            break;

          case bitcore.Script.types.PUBKEYHASH_OUT:
            inputObj = input.toObject();
            inputObj.output = bitcore.Transaction.Output({
              script: input._scriptBuffer.toString('hex'),
              satoshis: 0 // we don't know this value, setting 0 because otherwise it's going to cry about not being an INT
            });
            tx.inputs[idx] = new bitcore.Transaction.Input.PublicKeyHash(inputObj);

            addresses = [scriptPubKey.toAddress(NETWORK).toString()];

            break;

          case bitcore.Script.types.SCRIPTHASH_OUT:
            // signing scripthash not supported, just skipping it, something external will have to deal with it
            return;

          case bitcore.Script.types.MULTISIG_IN:
            inputObj = input.toObject();

            console.log(inputObj);

            inputObj.output = bitcore.Transaction.Output({
              script: msigScriptPubKey,
              satoshis: 0 // we don't know this value, setting 0 because otherwise it's going to cry about not being an INT
            });

            var signatures = scriptPubKey.chunks.slice(1, scriptPubKey.chunks.length);
            inputObj.signatures = multiSigInfo.publicKeys.map(function(pubKey) {
              var signatureMatch = null;
              signatures = signatures.filter(function (sigObj) {
                if (signatureMatch) {
                  return true;
                }

                var signature = bitcore.Transaction.Signature({
                  signature: bitcore.crypto.Signature.fromTxFormat(sigObj.buf),
                  publicKey: pubKey,
                  prevTxId: inputObj.prevTxId,
                  outputIndex: inputObj.outputIndex,
                  inputIndex: idx,
                  sigtype: bitcore.crypto.Signature.SIGHASH_ALL
                });

                signature.signature.nhashtype = signature.sigtype;
                var isMatch = bitcore.Transaction.Sighash.verify(
                  tx,
                  signature.signature,
                  signature.publicKey,
                  signature.inputIndex,
                  inputObj.output.script
                );

                console.log(isMatch);

                if (isMatch) {
                  signatureMatch = signature;
                  return false;
                }

                return true;
              });

              return signatureMatch ? signatureMatch.toObject() : null;
            });

            console.log(inputObj.output.script.toString('hex'));

            tx.inputs[idx] = new bitcore.Transaction.Input.MultiSig(inputObj, multiSigInfo.publicKeys, multiSigInfo.threshold);

            console.log('->', idx, tx.inputs[idx]);
            console.log('->', tx.inputs[idx].signatures.filter(function(s) { return !!s; }));

            addresses = CWBitcore.extractMultiSigAddressesFromScript(inputObj.output.script);

            break;

          case bitcore.Script.types.MULTISIG_OUT:
            inputObj = input.toObject();
            inputObj.output = bitcore.Transaction.Output({
              script: input._scriptBuffer.toString('hex'),
              satoshis: 0 // we don't know this value, setting 0 because otherwise it's going to cry about not being an INT
            });

            console.log(inputObj.output.script.toString('hex'));

            msigScriptPubKey = inputObj.output.script;
            multiSigInfo = CWBitcore.extractMultiSigInfoFromScript(msigScriptPubKey);

            tx.inputs[idx] = new bitcore.Transaction.Input.MultiSig(inputObj, multiSigInfo.publicKeys, multiSigInfo.threshold);

            console.log('->', tx.inputs[idx]);
            console.log('->', tx.inputs[idx].signatures.filter(function(s) { return !!s; }));

            addresses = CWBitcore.extractMultiSigAddressesFromScript(inputObj.output.script);

            break;

          case bitcore.Script.types.DATA_OUT:
            return;

          default:
            throw new Error("Unknown scriptPubKey [" + scriptPubKey.classify() + "](" + scriptPubKey.toASM() + ")");
        }

        // unique filter
        addresses = addresses.filter(function(address, idx, self) {
          return address && self.indexOf(address) === idx;
        });

        var _keyChain = addresses.map(function(address) {
          return typeof keyMap[address] !== "undefined" ? keyMap[address] : null;
        }).filter(function(key) { return !!key });

        if (_keyChain.length === 0) {
          throw new Error("Missing private key to sign input: " + idx);
        }

        keyChain = keyChain.concat(_keyChain);
      });

      // unique filter
      keyChain = keyChain.filter(function(key, idx, self) {
        return key && self.indexOf(key) === idx;
      });

      console.log('::', tx.inputs[0]);
      console.log('::', tx.inputs[0].signatures);
      // sign with each key
      keyChain.forEach(function (priv) {
        tx.sign(priv);
      });

      // disable any checks that have anything to do with the values, because we don't know the values of the inputs
      var opts = {
        disableIsFullySigned: disableIsFullySigned,
        disableSmallFees: true,
        disableLargeFees: true,
        disableDustOutputs: true,
        disableMoreOutputThanInput: true
      };

      console.log(tx.toObject());

      return tx.serialize(opts);
    };

    var signedTx = CWBitcore.signRawTransaction(unsignedTx, cwk, true);
    console.log(signedTx);

    signedTx.should.equal("0100000001b26af67194ee7bb8db8bd17c0e49c1e6f27ca38d5987787ad5870ee9f735ae67000000004a004830450221008ec0e50485ff7bd692cd3571d6b44663d5d577c86d3528187484fedb32f971b702200b61f90c4e3251025d6a2bcb700a310c8e57432a15549929ceb273659f043ff901ffffffff0336150000000000001976a914e86de35c9a6af59b5ad967e8b115f691a9d850b988ac00000000000000001e6a1c5bb3f7b957486719fa29c24680566102a08b2862189ba7ab1812d2075a4a0100000000004751210219e028f671718df9f95bcb398c7b2afe9ac025d8ac031aaf48ee2dd4175c34a921034e46baa15435cb22791f9d06d6f370d6cf89bf9ff8978aa13605b326792e81ca52ae00000000");

    var fullySignedTx = CWBitcore.signRawTransaction(signedTx, cwk2);
    console.log(fullySignedTx);

    fullySignedTx.should.equal("0100000001b26af67194ee7bb8db8bd17c0e49c1e6f27ca38d5987787ad5870ee9f735ae67000000009300483045022100ab841b027d8f1f25653387dc648ab091c9700ece4c982f0644a4309b53c23a3502205e81a117ca7f3efa7c2cdf5741f037b7a3d7ada0ae8d3967f7935f1c6d60db1e014830450221008ec0e50485ff7bd692cd3571d6b44663d5d577c86d3528187484fedb32f971b702200b61f90c4e3251025d6a2bcb700a310c8e57432a15549929ceb273659f043ff901ffffffff0336150000000000001976a914e86de35c9a6af59b5ad967e8b115f691a9d850b988ac00000000000000001e6a1c5bb3f7b957486719fa29c24680566102a08b2862189ba7ab1812d2075a4a0100000000004751210219e028f671718df9f95bcb398c7b2afe9ac025d8ac031aaf48ee2dd4175c34a921034e46baa15435cb22791f9d06d6f370d6cf89bf9ff8978aa13605b326792e81ca52ae00000000");
  });
});

Object.keys(fixtures).forEach(function(network) {
  var data = fixtures[network];
  var prefix = '[' + network + '][' + data.network.toUpperCase() + '] ';

  describe(prefix, function() {

    // set the global NETWORK to the correct one for the test
    beforeEach(function() {
      NETWORK = bitcore.Networks[data.network];
    });

    describe(prefix + 'HierarchicalKey addresses', function() {

      it('should correctly generate addresses from passphrase', function() {
        var hkey = new CWHierarchicalKey(data.passphrase);
        for (var i = 0; i < 3; i++) {
          var cwk = hkey.getAddressKey(i);
          var address = cwk.getAddress();
          address.should.be.a('string');
          address.should.equal(data.addresses[i]);
        }
      });

      it('should correctly generate OLD addresses from passphrase', function() {
        var hkey = new CWHierarchicalKey('old ' + data.passphrase);
        for (var i = 0; i < 3; i++) {
          var cwk = hkey.getAddressKey(i);
          var address = cwk.getAddress();
          address.should.be.a('string');
          address.should.equal(data.oldaddresses[i]);
        }
      });

      it('should generate different addresses from diffrent passphrase', function() {
        var hkey = new CWHierarchicalKey(data.passphrase2);
        for (var i = 0; i < 3; i++) {
          var cwk = hkey.getAddressKey(i);
          var address = cwk.getAddress();
          address.should.be.a('string');
          address.should.not.equal(data.addresses[i]);
        }
      });

      it('should generate OLD different addresses from diffrent passphrase', function() {
        var hkey = new CWHierarchicalKey('old ' + data.passphrase2);
        for (var i = 0; i < 3; i++) {
          var cwk = hkey.getAddressKey(i);
          var address = cwk.getAddress();
          address.should.be.a('string');
          address.should.not.equal(data.oldaddresses[i]);
        }
      });

      it('should correctly validate address', function() {
        CWBitcore.isValidAddress(data.addresses[0]).should.equal.true;
        var badAddress = data.addresses[0].replace(/u/g, "v");
        CWBitcore.isValidAddress(badAddress).should.equal.false;
      });
    });

    describe(prefix + 'Private keys methods', function() {

      it('should correctly instanciate CWPrivateKey object from HEX', function() {
        var cwk = new CWPrivateKey(data.privkey);
        cwk.getAddress().should.equal(data.addresses[0]);
        cwk.getPub().should.equal(data.pubkey);
        cwk.isValid().should.equal.true;
        cwk.getWIF().should.equal(data.wif);
      });

      it('should correctly instanciate CWPrivateKey object from WIF', function() {
        var cwk = new CWPrivateKey(data.wif);
        cwk.getAddress().should.equal(data.addresses[0]);
        cwk.getPub().should.equal(data.pubkey);
        cwk.isValid().should.equal.true;
        cwk.priv.toString().should.equal(data.privkey);
      });

      it('should reject transaction with incorrect destination', function() {
        var cwk = new CWPrivateKey(data.privkey);
        var check = cwk.checkTransactionDest(data.transaction.unsigned, [data.addresses[2]]);
        check.should.equal.false;
      });

      it('should be able to sign a message', function() {
        var cwk = new CWPrivateKey(data.privkey);

        var message = "testing123";

        var signature = cwk.signMessage(message);

        signature.should.be.a('string');
        bitcore.Message(message).verify(data.addresses[0], signature).should.be.true;
      });

      /**
       * this test is `CWPrivateKey.signRawTransaction` dissected,
       *  makes it a little easier to test/debug
       */
      it('should correctly sign raw transaction [playground]', function() {
        var cwk = new CWPrivateKey(data.privkey);
        var utxoInfo = {
          address: data.addresses[0],
          txId: '93cb35b7e13c7c6de45d4c54375b94c14cb35073f67f974ced464b855a8abd39',
          outputIndex: 2,
          script: bitcore.Script.buildPublicKeyHashOut(data.addresses[0]).toString(),
          satoshis: 895789030
        };

        var tx = bitcore.Transaction();
        tx.from(utxoInfo)
          .to(data.addresses[1], 10860)
          .addOutput(bitcore.Transaction.Output({
            script: bitcore.Script("512102b6f17e170c40a6b1cdbb4572b172175199122b01f81a56a2d2666a035ed5feef211c434e545250525459000000000000000000000001000000000bebc2000000000052ae"),
            satoshis: 10860
          }))
          .to(data.addresses[0], 895747310)
        ;

        // unsigned serialized
        tx.uncheckedSerialize().should.equal(data.transaction.unsigned, "unsigned");

        // unsigned serialized, with script set
        tx.inputs[0].setScript(bitcore.Script.buildPublicKeyHashOut(data.addresses[0]).toString());
        tx.uncheckedSerialize().should.equal(data.transaction.unsigned2, "unsigned2");

        // take unsigned serialized and set proper input again
        tx = bitcore.Transaction(data.transaction.unsigned2);

        // dissect what was set as input script to use it as output script
        if (bitcore.Script(tx.inputs[0]._scriptBuffer.toString('hex')).isPublicKeyHashOut()) {
          var inputObj = tx.inputs[0].toObject();
          inputObj.output = bitcore.Transaction.Output({
            script: tx.inputs[0]._scriptBuffer.toString('hex'),
            satoshis: 0 // we don't know this value, setting 0 because otherwise it's going to cry about not being an INT
          });
          tx.inputs[0] = new bitcore.Transaction.Input.PublicKeyHash(inputObj);
        }

        // sign with priv
        tx.sign([cwk.priv]);

        // disable any checks that have anything to do with the values, because we don't know the values of the inputs
        var opts = {
          disableSmallFees: true,
          disableLargeFees: true,
          disableDustOutputs: true,
          disableMoreOutputThanInput: true
        };

        // signed serialized
        tx.serialize(opts).should.equal(data.transaction.signed, "signed");
      });

      it('should be able to check transaction destination', function() {
        var cwk = new CWPrivateKey(data.privkey);

        cwk.checkTransactionDest(data.transaction.unsigned2, [data.transaction.destination]).should.be.true;
        cwk.checkTransactionDest(data.transaction.signed, [data.transaction.destination]).should.be.true;
      });

      it('should correctly sign raw transaction', function(done) {
        var cwk = new CWPrivateKey(data.privkey);
        
        cwk.signRawTransaction(data.transaction.unsigned2, function(err, signedHex) {
          should.equal(err, null);
          signedHex.should.equal(data.transaction.signed, "signed");

          done();
        });
      });
    });

    describe(prefix + 'Multi-Signature, send to 2of3', function() {

      it('should be able to check transaction destination', function() {
        var cwk = new CWPrivateKey(data.privkey);

        cwk.checkTransactionDest(data.msigto2of3transaction.unsigned, [data.msigto2of3transaction.destination]).should.be.true;
        cwk.checkTransactionDest(data.msigto2of3transaction.signed, [data.msigto2of3transaction.destination]).should.be.true;
      });

      it('should correctly sign raw transaction', function(done) {
        var cwk = new CWPrivateKey(data.privkey);

        cwk.signRawTransaction(data.msigto2of3transaction.unsigned, function(err, signedHex) {
          should.equal(err, null);
          signedHex.should.equal(data.msigto2of3transaction.signed, "signed");

          done();
        });
      });
    });

    describe(prefix + 'Multi-Signature, send from 2of3', function() {

      it('should be able to check transaction destination', function () {
        // these are never done normally, but it doesn't hurt to test it
        CWBitcore.checkTransactionDest(
          data.msigfrom2of3transaction.unsigned,
          [data.msigfrom2of3transaction.source],
          [data.msigfrom2of3transaction.destination]
        ).should.be.true;

        CWBitcore.checkTransactionDest(
          data.msigfrom2of3transaction.signed12,
          [data.msigfrom2of3transaction.source],
          [data.msigfrom2of3transaction.destination]
        ).should.be.true;
      });

      it('should correctly sign raw transaction with key 1 and key 2', function (done) {
        var hkey = new CWHierarchicalKey(data.passphrase);
        var cwk1 = hkey.getAddressKey(0);
        var cwk2 = hkey.getAddressKey(1);

        cwk1.signRawTransaction(data.msigfrom2of3transaction.unsigned, true, function (err, partiallySignedTx) {
          should.equal(err, null);

          cwk2.signRawTransaction(partiallySignedTx, function (err, fullySignedTx) {
            should.equal(err, null);

            fullySignedTx.should.equal(data.msigfrom2of3transaction.signed12, "signed");

            done();
          });
        });
      });

      it('should correctly sign raw transaction with key 1 and key 3', function (done) {
        var hkey = new CWHierarchicalKey(data.passphrase);
        var cwk1 = hkey.getAddressKey(0);
        var cwk3 = hkey.getAddressKey(2);

        cwk1.signRawTransaction(data.msigfrom2of3transaction.unsigned, true, function (err, partiallySignedTx) {
          should.equal(err, null);

          cwk3.signRawTransaction(partiallySignedTx, function (err, fullySignedTx) {
            should.equal(err, null);

            fullySignedTx.should.equal(data.msigfrom2of3transaction.signed13, "signed");

            done();
          });
        });
      });

      it('should correctly sign raw transaction with key 2 and key 3', function (done) {
        var hkey = new CWHierarchicalKey(data.passphrase);
        var cwk2 = hkey.getAddressKey(1);
        var cwk3 = hkey.getAddressKey(2);

        cwk2.signRawTransaction(data.msigfrom2of3transaction.unsigned, true, function (err, partiallySignedTx) {
          should.equal(err, null);

          cwk3.signRawTransaction(partiallySignedTx, function (err, fullySignedTx) {
            should.equal(err, null);

            fullySignedTx.should.equal(data.msigfrom2of3transaction.signed23, "signed");

            done();
          });
        });
      });

      it('should correctly sign raw transaction with key 1 and key 3 in reverse order', function (done) {
        var hkey = new CWHierarchicalKey(data.passphrase);
        var cwk1 = hkey.getAddressKey(0);
        var cwk3 = hkey.getAddressKey(2);

        cwk3.signRawTransaction(data.msigfrom2of3transaction.unsigned, true, function (err, partiallySignedTx) {
          should.equal(err, null);

          cwk1.signRawTransaction(partiallySignedTx, function (err, fullySignedTx) {
            should.equal(err, null);

            fullySignedTx.should.equal(data.msigfrom2of3transaction.signed13, "signed");

            done();
          });
        });
      });
    });
    
    describe(prefix + 'Misc', function() {

      it('should be able to verify multisig input', function() {
        var input = (data.addresses.length - 1) + "_" + data.addresses.join("_") + "_" + (data.addresses.length);
        CWBitcore.isValidMultisigAddress(input).should.be.true;
      });

      it('should compare outputs properly', function() {
        var isSame = CWBitcore.compareOutputs(data.transaction.signed, [data.transaction.signed, data.transaction.unsigned, data.transaction.unsigned2]);

        isSame.should.be.true;
      });
    });
  });
});
