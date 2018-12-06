const multiHashing = require('../build/Release/multihashing')

//sum256()

let tdata = [
    {
        data: Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff1d5104c809015c0818000000000000000d2f6e6f64655374726174756d2f000000000100f2052a010000001a76a914f1627777996288556166614462639988446255776688ac00000000', 'hex'),
        b1: '0525ffc40d67fa507d688d1e3d57d006b41ec9b53f1ee4e08acd76e35884d799',
        b2: '22d4735d9ee6ee79895fcb614412ba5f9381f4e648b025e2062c62d2a091237f',
    },
    {
        data: Buffer.from('0100000001000000000000000000000000000000000000000000000000000000', 'hex'),
        b1: 'c8b4fc0aa6b3207afd270fd12bb0afd5db65917a257d8052feb9935f90f0b988',
        b2: '134da7c6e3e9fee3913993dd23a992b07cff2847174e7a4edaf505ef75faa24e',
    },
    {
        data: Buffer.from('2f6e6f64655374726174756d2f000000000100f2052a010000001a76a914f162', 'hex'),
        b1: 'b3614bdbeeafe9964d7d74f07efb9f1d1f23989165e6f9b17dd125ceeb92784d',
        b2: '539897b2088ba5f04dd76dc4730b2bcb281baf60c8412c8a496157219fe20a3a',
    },
];


{
    tdata.forEach(item => {
        let blake2b1 = multiHashing.blake2b(item.data);
        let blake2b2 = multiHashing.blake2b(blake2b1);
        console.log('blake2b', blake2b1.toString('hex') == item.b1, blake2b2.toString('hex') == item.b2);
    })
}

{
    tdata.forEach(item => {
        let b2bd = multiHashing.blake2bd(item.data);
        console.log('blake2bd', b2bd.toString('hex') == item.b2);
    })
}