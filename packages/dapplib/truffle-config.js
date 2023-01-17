require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth punch equip idea arctic bottom gas'; 
let testAccounts = [
"0x21127a179e67983522d87d4db4b5872bd2bf4e1fb01fa67d4d8c6b8813031cd6",
"0xbac2928c24d94213a749ecb48cb8c6b629d2e9a059185ba32785dd7115ffa219",
"0xa3e0fab041b3031334ba9a3c77f618e0a922869daff163d17008fa8c1424050c",
"0x07d15ec6a665771fab3be04b05b268a832c1824a398ff75bf9d00f629fb4a2df",
"0xd99f729f37443edac4efcaf16d5ac3f3ac839fb2fb894d3a93296ae08bc68a40",
"0xd19e162cbe7f222ea90022eda9c1e481030c5448d1579118b8fb418668180123",
"0x641d71ecefa50d61bddf76303bb44863d9be5271d14914d5c11c9046fabdb2a3",
"0x7f704a751f0bd2ed578f8dbb29a79b5868bcb742d87229735e81bd782f116169",
"0xd1ec0c3c085f5878b0a08cd23b1868dcdf7fdf6c38ddd05b1dc0f9826804593e",
"0xe9ac6a717778f72acdc12ade5cfeef5dcc221917b81961f1ad13962356de20df"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

