require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy riot magic huge grace fashion equal giggle'; 
let testAccounts = [
"0xf4ca8dd0df2c16d17e7277c72d21cb2d651044867e9c9972ccee740095de29b7",
"0xd8a4a461740de2d5fd0abe1903f059d39dbb50c3b84ef083f19b1a78ea5887de",
"0xa9583a6952f42173c7fe61c3ad520461698c08502920ab8b4473b8acd074e8e3",
"0xac7f2b2fcc0e03af0ef656afa66f24c666d01ca34695dc6727cb0df5786dc679",
"0x38f2a78c0afe5b7f45f9759da15aba233b5b884c5199d214503dfa22e5447406",
"0xf416fb7ee218f7f9728bc19573b82a643e0e17978d95750c6912d2f3ab29a447",
"0xef3238279524e8e26b357dc7f2dff58dcbdad2f41fc2c258eb3a373bef5c1ccd",
"0xe879f55a9b6be017540f1de4a60cb914189e458561ee39555c4ec9c32dc3c520",
"0x47b05041976629dbd4c739a356fa34556715cbc790a3dfd0f08f3a1d735d03a0",
"0xfa8d4721d32a3ed560266373e00c228aa36bb8545911fdffe6198bfa71f4c2df"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


