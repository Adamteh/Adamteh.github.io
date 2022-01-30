'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7b16fca834cefdddd5a65466b9a47386",
".git/config": "c8042569e19ec648ffd1a169d8c87456",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b1db9e014565b3dcc1b750a98d04b5b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ecb2eb837e75683978bd3d5a1b26504",
".git/logs/refs/heads/main": "8ecb2eb837e75683978bd3d5a1b26504",
".git/logs/refs/remotes/origin/main": "da99056be7dab854f7fa3ba7827a901c",
".git/objects/00/2d7c620cb538ada20923a593346dbab2d97b97": "39732ac7c67afc0b952b822b63a03ad3",
".git/objects/03/8caf49aed754b13f89637550ba4cc035e50031": "9547a43b93103281f68eae9a6316bd4e",
".git/objects/0a/b8b6e48d88607c6fa1443c032bf507b451fc8b": "10f7d539a128fbc479c4d713ee886316",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/17/c23e276fc6ccb693b2598445d68564c2289ef8": "5e704723f907b8c14d2e99010a659886",
".git/objects/1a/fb57c2ec54241e40f370b57f2a6391ccee0283": "a18ef7c04a7849e4e4566d586c1f3607",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/21/0247ecc410ae24d9c884aa6f0cff45c95bda2c": "e7121a280d4a53ed6f28715eba8c7807",
".git/objects/24/732a203c56589db3f764422e27785ec0e9b800": "08c2695e01d26f27d96b45ebd12b4698",
".git/objects/24/b918b2d4adcf2fcb9688aa61d4fdeb3fad058f": "bcc66a022fbbc88467d306ab064fc5af",
".git/objects/29/76d7054e0e217eb7eedbce06806d693a676e1a": "564a1a64c36649cd027ead6079e48f23",
".git/objects/29/f294c6a871833cc6521b1e8fbe3115e5434cff": "5588b27763b63c7952311369f9524a54",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/3449e1fe199c04f6aeba5d99c4c551202c6453": "5c44fc43918b68d98d42eeb292ea8fc9",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2d/a5135ac24884c024263caf20319241c27d46a7": "63e0d21b7f0d2a7c79dd43051cd89da5",
".git/objects/2d/d88a34f7dbc399b6c076435c764b3244164921": "a6b098aaae05fc4b058d29002ccd6e71",
".git/objects/2e/332372f19e5fb2e7e848900b913f09699b2b33": "421c0219245b79ceefdd37fe31f2feb2",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2e/7d451d146405120722602437b8cd30073357ad": "6d02446846b3672ec2057925d046f336",
".git/objects/2f/4522bbc34159ba6574e502c10ca78dbd5217a4": "5b6e2e419b8fd75a11a42504601faca1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/f48b1d1c9234dad798ad40f66ab7ed3286d723": "367fc8e887a07555cb07365e80f2c22c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/37/8fb5c889876facb463e2d9e9b19b110683da2c": "74b012a285f14e030b3c1d9d8413f305",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/43/46eb88ba3915f230cff22179e7c3263ca4b690": "f18729fc1d8d3938e684d129b06d471a",
".git/objects/43/99bb60c856e617633a5b0564589e6e6c56a80f": "33fd5af7843393bd2a3bf4d36cd801c1",
".git/objects/44/16f7d3b811eed7309e732a558b277a2726fc86": "9e0d504ada0216669d6ac24db2d148e7",
".git/objects/44/a3102c85687313f5bb12b333579b9a5424bb55": "54b2658f7ae319f5193bfa70eb300693",
".git/objects/47/23a5eff0ad9310a4c508405d1b62053f42a296": "fedf4c4d59b6e180d3204c0a1f8bb47e",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/47/cabbafac11b0d52fa09a94a6d4bbd961e78e63": "fec49ecb59f5bfd240603e6cd09c3127",
".git/objects/49/1ba4b38bd3546f5d9676161e39b3d94f49efa1": "8ccca3c81164705674fef4a38d664e2d",
".git/objects/4b/679a75629015bcaaf52603b536cd5cb1dec455": "4143e2174f7d55e2fef9f1c5064f4aea",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/50/09e23f300cdf950f6947c42647cfdab8ef7746": "fc5c999cf955cd8841cf52912ecc8b38",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/5c/6c1dc368cf45e1e54945fb12d3f77b7cbdd365": "9cdb3c805301715040df71bc8f3a063c",
".git/objects/5d/44977d4a35710385cccb1cbabb57663f592d4b": "f469aa80443fd453c5a40bf8466e570f",
".git/objects/5e/082a60079c3ef9ec95af256c598b3d932d065c": "0740f42a58383c3a8d87f2b16ca76ad0",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/5f/81a9e961cc5408895807f844af5164e73f3215": "6c8ce7cc5cac36873d5a65714442e61b",
".git/objects/60/8b5b3affcad1dcd9e2167611fd41a6ffc3e64d": "85539e20fb4608d12e315e4870b5c03f",
".git/objects/60/97d1233eb24d3b35c34ca1cb44ef177cd409dc": "79ce123cf3f74140dd8260b9801f1c7f",
".git/objects/64/3ffd2910bf653dccff624e7ce35e9200a9dd62": "65671751ec132322a95e593fd6bdb975",
".git/objects/66/d6a636df182b9b5889602377d12c0a33d43364": "ecdf8312cc97ab88e9fce9df53ae1b2e",
".git/objects/69/651ad1243f04e2f215323dd16397f53cd95e75": "ce6e05cf40892defef2f09daccd191e4",
".git/objects/6b/4a3a5224e76b6b423ca9bf88f3652d000e70eb": "b98fab59a5c05ffc0110bf59e80490d6",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6d/560ec129c739c2963722e4ab19e9bb3717c5f4": "620315f3ff1a741899185e645578a317",
".git/objects/71/4f91f5e96278404f1fb387f1a5439064b908dc": "cc76b946f65c5604aedc9740e56a5c33",
".git/objects/74/237d12c9c670fae1f3f9f5f1161ae2744938e5": "e95d1662bbd050c81cd98b7bae9f465e",
".git/objects/75/10b3aac62830f8251c42a94d9b2c218a0ca001": "335ac3d236f06b98ce8a3b7c89c0a61b",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/79/34dc22e6126359895ccb1e5315d3e886919f95": "e1ca6f96300bfd1f42f58d0bb70a034a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/7e/6aa0d5ddc99daf97e663ff1a0feed0c22b6caa": "da1954011e5bc2542b46ecfc5590d406",
".git/objects/7e/c537838a14825bf29e7c25bea41a459212df76": "8ca7780432d6da31d88cff29c792aa93",
".git/objects/7e/c9a0e77ad384f858abdbf3b385466c2a9b1fa1": "b2cb7418d758bcad3a8be2c68bcfb77f",
".git/objects/7f/78f3e6c74146f76ebb158203c567634f87900f": "ab2787ecadd061631a703202b5949d60",
".git/objects/81/e8e89235f66fae25cc2b88a19b058c47392081": "526a4cd541e21def3cf58a821f00d192",
".git/objects/85/0e1b07434f8d2d8e00d6560fc7bfe81ca88959": "3efd508d09d6d004f506a97c66be7fa2",
".git/objects/86/0389e7264e2c5b118b3543f4f718af332e5e6d": "9ef5deb224362fa0dc58afd02c7308bb",
".git/objects/88/9b01bfed6746066cc200a7fdb13eb9ef79036f": "7bbbcba971ace4b04f41978ec90a23b5",
".git/objects/89/a30c5686985f02bd85a576f11c34c304e58ce5": "5e8034cb5b0097ce8aedfc1771c864a6",
".git/objects/8a/7a698e8d15d7dd78f3cb37ef9cbd3c5e1046af": "f855ffd6901ef493dcd4a9677756b8ba",
".git/objects/8c/457c90acf7d87a0ad39ebb0dbdd6de0f381a4e": "56ff6935832122f04ffea648622cca6b",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/94/f4cbe038cc1108000aa40ef432f8f2cadecc19": "760ad9b57cd4f042c650d26a1da8626a",
".git/objects/96/2c57d7cdea88a50594ba29db593d9b5027f635": "cebc7248b3db0ab5a3f95c213471537c",
".git/objects/98/65a1b5e9dc4541fcc94872222802e1a183ae86": "1816b5a0eeab3396ec6b32de3bef7dd6",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/87d2509e517f3697c355f61ac69cf4751b83fd": "aaf94edec49cfa2fdbd2dd2206f9de60",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/e1d21d3e5f22c0dac5518514299453d0a81591": "fdbd7fad0d4c37674e61c91e97bc9773",
".git/objects/9e/fd9ef6008c932febaf49f66a767bdd38ec120e": "2aac7e8683e12fe43f8b84256d5f8afe",
".git/objects/a0/166d4f0ccb77fe39a911ec707c04f811280220": "672ca8622236888b3e632d21daf0d407",
".git/objects/a0/8bd97ae1ea2f444d04fa8aa32e92bbc3dd6f7a": "6a3f0037e39c57f91d5521e50f54a2df",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/d55e0e891811ceb219e294094a58a93c1c47e4": "05ed1e942e55c974b93e6f26ec2e1ef7",
".git/objects/a2/57f7e6a0877ee43f2cbfd70b967ed3185e1666": "36aa846a0a72d76289a0bb753b115e42",
".git/objects/a2/759462c3c4774ce2caaf2c103aacaa7884d3a5": "1b1cba0f75942a5778f6cf06ef5bab83",
".git/objects/a7/a17895e42665494cee99a38709e8b253711fdf": "abaf5eedcf46d4b8ed5413636a6e7ec9",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/6c5d10d0d9f4de144355baebd8aa69c7ad0519": "ce38657328764b2564d1ea18285a8449",
".git/objects/ab/8c643f0e763ddd2cadc71a2b71e7bffa8db493": "6380440a623b5067564875143e85f1d6",
".git/objects/ac/0d9ecc2c4762cb5400edcb819a1bd322ef3219": "db92a34f0265894309af37b1ce44607b",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b2/0c63a44db55d5cf2adfdfdae1273ebdcfe4235": "36729f886b493e0649ce34243eda5c36",
".git/objects/b2/d194343e9cab87c75a66fbfea170172304ab74": "fe59f083ec83008d088bd9c82292403d",
".git/objects/b3/02ed2b43fc815e25e1169424489f5bda81faca": "958d02759826d1c22fd5439d6a2f18b8",
".git/objects/b3/865e7a49acabc56c274321c90d240fdac60e9a": "ef0947efe58e4293c99ffaa37b49a85e",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b4/7adac343c116c067d58151b89810865c7f0392": "6ebf48430f3f20c3bbeec5ad839b9a8d",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b9/d865f2312266837b4746e5df4078b629cbf478": "12e5d382b5de9d03b6ae8511dec27dd8",
".git/objects/bb/327804b18b1fe2868207c5f5c8c81c9b36e702": "a88bb5b89a47d32d25c0e70348dcc2af",
".git/objects/bb/8ef5c8af76773f924ccc78a7d19bada45bda8e": "2e8f5ecdfbb8290fa778cb662e3b9e25",
".git/objects/bf/5f0ad98e398d25f92ee1977e7b2f10d1c7c345": "4eb3d66cc1b2ffc106373c9b11b34c26",
".git/objects/bf/f0dab0c43cce5466d8e36da4b96bb1b0794df0": "755cec5b39b1cf9e4009ddb8bcd85a37",
".git/objects/c3/5d0d54f2bc79c13cd3e7fefd364a78a91b7bfc": "03164e1ab60bb874ea597e50db1a45e8",
".git/objects/c5/8bf9139c9a0b7cd3edfaa2b25d235dbd4c3727": "59f196d7909ff810752c7523c872e2ab",
".git/objects/c6/100cd4f3a326ec16a82c19413b9f3f48196235": "7496ea0151954946265843b08f7f220d",
".git/objects/c6/b7303595cfdb4461a6eb86b27b45d05965d384": "853e1cae1013f7fce7abcadd442576d0",
".git/objects/c7/7b7464b049c7d6666155c61df5f486f241f760": "4ab8ee67a3eb5dc207a2be6cb6cffe4e",
".git/objects/c9/e0194c1bebef5ffac3655f3b932da45f7e3631": "40992bedf3eb70c6b1408487ec97d0b9",
".git/objects/cc/60db529f9fdd72316fd9c9ac211fd8ffa95b01": "94fc02be415953e29de56379cc200d81",
".git/objects/cc/cb223f7cdbe7f0360e3912546a91de24316cbf": "df9c079fe10d879c2c7bd3f449c9597a",
".git/objects/d1/7f8bc1e5be781d93dc22e9d888d83f38822500": "50e83f488ebfab6bad84604dccb6a81f",
".git/objects/d3/c9fa47d667db6668ea13a603838e0b77f4d8a6": "5650da2c42bf06e15e71ae6e9a88fccf",
".git/objects/d4/9205d59eed9df01be0a42a57ae7bb53de9e31c": "e6d1d4adcaa1dcc58547b5981928a731",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d8/0d3ba87f4d698211ce3bbd05055d6926223103": "cc7ffe0b167beaf9839888be6b030179",
".git/objects/d9/cc4b58b592aedaa0e663669da93eaeb2624371": "365232da1712ae8ad09454935e858a6b",
".git/objects/df/334af22223b5b7699c1080b25c4b32c1fef1b7": "bbabbd860190863ea326e86ca7fe1dee",
".git/objects/e2/25298f3790fe99c406ae83112efb97e80e6681": "291fc37e85a8dadd83fa16093779fc4b",
".git/objects/e5/7562c1a77458c93a30832b39c3955941616fe4": "8ad6bb9f2e237b230699c4516c8ab035",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/bf8e4ae23d9c59760f08367825623f45e622d9": "32a8187e941fe900d2e058726164e375",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/eb/97953b5b4be8f96c0b6efb00a7ce80d221a7b9": "068b3b867ee4348a2738fac502e2e570",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/ef/4381fd318b1d0d7e123311f5de36756e4ada14": "e705219420dd5132c89d09e742f54745",
".git/objects/f1/2a48c8e11604242ebd1a94706e7dd36de5ee12": "0da33646b26ba19cfdd15ef8467a7a5b",
".git/objects/f1/2fa3aa406ff3cab1e63d31a6579e0ea5d582bd": "496732b3ab9bd186d48bf32aba28a063",
".git/objects/f2/9b1874222b90011fc18cceb093462226b74b90": "b162bef95e4ae67a1201070fbbc211a5",
".git/objects/f5/ae963a04ff5653518c07794239a9ba0c54c073": "def7357d6a83e1191269fd6976bca65b",
".git/objects/f6/c3a03cd6a7da50c0a4410e83dd73c6e8fa2540": "4eea4d72328f4ae590270a0e418e5a45",
".git/objects/f7/50ed6cfb361c32b45c5c3ca2ade0198a122ff1": "61131231a099061edb03d3aec4aa347d",
".git/objects/f8/d89de94afc9656081be2bdbafd140f9c01cd2b": "c6d1a21d84ade19464e4dbe2c2a1a39f",
".git/objects/f9/4a3d59918483746c6d234e66aca423da6742eb": "8f0c65f2862dac2e0c455a8ec6560d2d",
".git/objects/fa/9c8df907dfba3f04416157b5c8486f3c7c5995": "a3258ca9b4addf05688cfdb0b0561aa2",
".git/objects/fb/b48ca642a61bc5b1f0ce31fd1bb0efa28befb6": "3b2b663b86055f732312c49af9faa41c",
".git/objects/fe/d6b63742aa03abc0feb4a013b4257dd4a1d0b0": "94e6723b9dadee535a1fa511e1871104",
".git/objects/ff/a47434582de645eb3994111182fd4e54fdbf52": "f7c6d390a1e57d4718140b9aeccc374b",
".git/refs/heads/main": "f33988c2bc56b477215e16129b0f7cb4",
".git/refs/remotes/origin/main": "f33988c2bc56b477215e16129b0f7cb4",
"assets/AssetManifest.json": "4e464db8d52319dd2372223b60e7f290",
"assets/assets/background.png": "cd760177ae72bdfca5cd8fa362b57d50",
"assets/assets/clima/city_background.jpg": "3f31f446bcfeb4a6d1112c1110b63ca1",
"assets/assets/clima/location_background.jpg": "17c27d970917469dc0e4181c24b605bf",
"assets/assets/coding.gif": "03a4a5f034bf0bafa661fd8a8aabedc8",
"assets/assets/flutter_coding.jpg": "8578eb8552b082da86742688bbac005f",
"assets/assets/fonts/Canterbury.ttf": "45f5fadb3dbf0140e10b498c7cb030a6",
"assets/assets/fonts/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/google_play_badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/image.jpg": "39cb0526e43d6a9ab93cbc4369cc1442",
"assets/assets/image1.jpg": "e4cd780033adb020ebc7f829dc781ee4",
"assets/assets/kakraba/chatbot/bot.gif": "d844c4bb2764085ea174d49389251f96",
"assets/assets/kakraba/chatbot/default.jpg": "653f93c3cb58cb7f21b6a721ebdbec19",
"assets/assets/kakraba/chatbot/robot.jpg": "2d1f585c1c223a11c543e1f71cc97cff",
"assets/assets/kakraba/images/background_image.png": "af4f1cb2ac980992ff66a42fe764988d",
"assets/assets/kakraba/images/ballon.png": "ef05cf5f25dce2d7cfa8c4d734426689",
"assets/assets/kakraba/images/bitcoin.png": "a3b84ed9dd97a07efebdb3b50a43b7ea",
"assets/assets/kakraba/images/btc.jpg": "e092c317a690c252144b8523d4fe61a4",
"assets/assets/kakraba/images/car.png": "4a96286b0021c3d0c0aeacebd5ece704",
"assets/assets/kakraba/images/image1.png": "3b587d2bdfcfbf518b33c909c7f8158f",
"assets/assets/kakraba/images/image2.jpeg": "a88278ddc742598c64c5da13d3ab8c91",
"assets/assets/kakraba/images/minihouse.png": "3be01058467d31de1ea431aad480ce97",
"assets/assets/kakraba/images/piggy.png": "5cbd387dd773d68e7e076b0fd740a1dd",
"assets/assets/kakraba/images/profile_image.jpg": "4111f35af8449d30f3ad40f1d36f20c8",
"assets/assets/kakraba/service.json": "c546e20a77128311a23a5f8f40149740",
"assets/assets/nectar/apple.png": "bf67c683c5b1482e68fb5dcb3537839f",
"assets/assets/nectar/bakery.png": "dcd9c06b85b84e048030196640575943",
"assets/assets/nectar/banana.png": "ae36e7da99e04223bfc8047a10ad6811",
"assets/assets/nectar/banner.png": "bfbe5cde71e009a43c6af59455833ab3",
"assets/assets/nectar/beef.png": "e5365526e980b55c51c1359c23a1ed5f",
"assets/assets/nectar/beverages/apple_juice.png": "bb3a929878d8f9507ad75af34141f7f3",
"assets/assets/nectar/beverages/coca_cola.png": "2c186872b10980884ebef183e8864afe",
"assets/assets/nectar/beverages/coke.png": "6fc47581f0ba1e19bd24b578cc64c89f",
"assets/assets/nectar/beverages/orange_juice.png": "00c2716e362839e97956bfe3f66e414e",
"assets/assets/nectar/beverages/pepsi.png": "d12e9f0d1f772e6b5d6c062c4cd39af9",
"assets/assets/nectar/beverages/sprite.png": "c5f092e1978bf8fc387fa43e504a47c3",
"assets/assets/nectar/beverages.png": "8dd717222682e92cf0933bc8bf2e190c",
"assets/assets/nectar/blur_image.png": "1bb672e25ccfd5b9cc040500aed846fd",
"assets/assets/nectar/chicken.png": "fcae00a2a20c05a2a2166685b24d02eb",
"assets/assets/nectar/confirmation.png": "34421a35259a8006d1e39efdf5bf3c16",
"assets/assets/nectar/cooking_oil.png": "1b51787cae98e28ca30dd7da56b923e5",
"assets/assets/nectar/credit_card.png": "6a1fe3a6784e87ceda596eb8971c1e05",
"assets/assets/nectar/dairy_eggs.png": "399082c2521ba10f9936a096952c7836",
"assets/assets/nectar/eggs/egg_chicken_red.png": "f7d9f2ed272d01c4110c9ada64306843",
"assets/assets/nectar/eggs/egg_chicken_white.png": "eded9c9ad8a11a7d931f50210fc08bd4",
"assets/assets/nectar/eggs/egg_noodle1.png": "cfe926c935f90dc35393c4fb298ac4c1",
"assets/assets/nectar/eggs/egg_noodles.png": "380b9dd76792c29a65833a5079d5e2a2",
"assets/assets/nectar/eggs/egg_pasta.png": "2200ee2689e495390c10f4d96239d9ef",
"assets/assets/nectar/eggs/mayonnais_eggless.png": "7a555dcd8730083e85d06622613b9e55",
"assets/assets/nectar/fruits.png": "c19554fb5b7d85d9076dd80ca4ade2c3",
"assets/assets/nectar/ginger.png": "98d99eee45e83d96fe20956cc1e24327",
"assets/assets/nectar/grains.png": "dd9533c62c35fbfcf4acd9e5a99fb913",
"assets/assets/nectar/groceries.png": "f53346116d01415cb6049d99e3963fce",
"assets/assets/nectar/meat_fish.png": "007b89153350794fd90e7dbbc8474233",
"assets/assets/nectar/person_groceries.png": "a6ec7a53ecd076948ee4471dbab20082",
"assets/assets/nectar/Pulses.png": "e5eaf9b500d16247e6f14c09cc50fc56",
"assets/assets/nectar/red_pepper.png": "bebc9580c477f2ec975898c8d3a1c065",
"assets/assets/nectar/rice.png": "23676712b183f84997d21fb1443f5141",
"assets/assets/nectar/svg/carrot.svg": "d20271e18b1f932e84b3a298e8fc1c7a",
"assets/assets/projects/bitcoin_ticker.gif": "42afd4da921f8af79a2ad830ef8143c4",
"assets/assets/projects/bmi_calc.gif": "b71a75688edfe8a51ac1237903c5614a",
"assets/assets/projects/clima.gif": "076d78a2ff6a3fc2a9ad1a73b0a86296",
"assets/assets/projects/destini.gif": "ba8ddfa3d3f63f1d6f773cf385bbe0bc",
"assets/assets/projects/flash_chat.gif": "c46f7d06ab791e1981610bec1479f4c1",
"assets/assets/projects/flutter_create_cert.png": "3ad6c3ae85d709be823969a0490819c3",
"assets/assets/projects/kakraba.jpg": "198743f1d1a1b8a717987812fabb7a3c",
"assets/assets/projects/nectar.jpg": "5a6ce828aac6ecdfce447fe426854fa8",
"assets/assets/projects/quizzler.gif": "a1c07aad706e65ef3ba2e51cb7539dc1",
"assets/assets/projects/tersh.gif": "a85b2b7b7cce936287d0bb3d151e912b",
"assets/assets/projects/todoey.gif": "22d9949d21c8a69e08deadb4919d6873",
"assets/assets/projects/xylophone.jpg": "5d2e3409165e5c6068fb0ca7a9f74b42",
"assets/assets/snow_mountain.jpg": "507e548609ffe55771464dba9a8b83a3",
"assets/assets/sounds/quizzler/correct.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/assets/sounds/quizzler/wrong.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/sounds/xylophone/note1.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/sounds/xylophone/note2.wav": "1760f9313cae8fa1564e9091c58cdcf4",
"assets/assets/sounds/xylophone/note3.wav": "ec8173470a0186fdecf2f6935260eb56",
"assets/assets/sounds/xylophone/note4.wav": "7817b629210c6d879b493439bcded62b",
"assets/assets/sounds/xylophone/note5.wav": "69f4c1dd58b17a67a632ed106f203afc",
"assets/assets/sounds/xylophone/note6.wav": "c713df4bb4bb1b6b11d041d97387d959",
"assets/assets/sounds/xylophone/note7.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/assets/svg/code.svg": "59cd9bd8639242101ab3de369a54e1ea",
"assets/assets/svg/feeling_proud.svg": "5032d5af74849a30dd2af4e056476428",
"assets/assets/svg/flutter_dev.svg": "22f00cab7630cafc4eacbb1f59f79079",
"assets/assets/svg/icons/analytics.svg": "efc7c844c13fa0c683436fa9331cc8d7",
"assets/assets/svg/icons/css3.svg": "d10f4bf68a27526ef83fd9dfdc75317d",
"assets/assets/svg/icons/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/svg/icons/database.svg": "7e1eadd6af36fcf8089d026394b77a23",
"assets/assets/svg/icons/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/svg/icons/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/svg/icons/git.svg": "5eed2c8cb62e1adfae09b0129a25a1a7",
"assets/assets/svg/icons/github.svg": "0b84f5bbe07b94a5a755a702fbc41052",
"assets/assets/svg/icons/gmail.svg": "24c5d10f0036be6e3e2716d8dfe730e1",
"assets/assets/svg/icons/html5.svg": "a0657d1cac3b20f1e113738056db3c63",
"assets/assets/svg/icons/javascript.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/svg/icons/linkedin.svg": "7f7a2ee1ddc4d78dcad430e6b312ab82",
"assets/assets/svg/icons/mongodb.svg": "409452f1b3c56ada4efdcfbd39ff1142",
"assets/assets/svg/icons/python.svg": "4948e6764d2214fe0c09621c6defe06b",
"assets/assets/svg/icons/wordpress.svg": "61efb10a4ec5faeda7a2923d195b2036",
"assets/assets/svg/programming.svg": "ac6a41a570245dd8ba794f2d36144149",
"assets/FontManifest.json": "056b7f673b9434747bc754c3e7ace236",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "666c7eff8bedbf64eb08c972b2a70ad3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon-16x16.png": "f717e3a7f8adb130b11a19f3292f3959",
"favicon.ico": "c35b0ec9a2b8c7eeee3070d091def0e6",
"flutter_coding.jpg": "8578eb8552b082da86742688bbac005f",
"icons/android-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/android-icon-192x192.png": "904e6bb3d482b868af7e8f07da1c24d0",
"icons/android-icon-36x36.png": "6912590215c9aac84eb331a33e17242c",
"icons/android-icon-48x48.png": "d25f51b47b06415bae44644b16022b16",
"icons/android-icon-72x72.png": "16fcaabe939a2cb3711af98b7740f57e",
"icons/android-icon-96x96.png": "71caea2021b1d3d46d2e1cefee06aa65",
"icons/apple-icon-114x114.png": "73be9d6d9e65dbd62ec653e994174a2a",
"icons/apple-icon-120x120.png": "b128b11ae53203bb005466df5f326fdd",
"icons/apple-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/apple-icon-152x152.png": "1aee6cb3340b2c84c7df10dcb0b08ae4",
"icons/apple-icon-180x180.png": "5cde69955f75d7045aa4f536c3ba4cd9",
"icons/apple-icon-57x57.png": "68cc7c563b89549f1dd44c83d8bb5ca1",
"icons/apple-icon-60x60.png": "718524fc7bd4c68fe92051117a7aeb34",
"icons/apple-icon-72x72.png": "16fcaabe939a2cb3711af98b7740f57e",
"icons/apple-icon-76x76.png": "0a01b705fb841923963351259007f375",
"icons/apple-icon.png": "245ad7b503c92607c0ae3e9a8a220d0c",
"icons/favicon-16x16.png": "f717e3a7f8adb130b11a19f3292f3959",
"icons/favicon-32x32.png": "eb5ea16f90b551718a8c73316c0a4620",
"icons/favicon-96x96.png": "0fc6dfc36c93a5f03769c974a288c0ac",
"icons/ms-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/ms-icon-150x150.png": "19d711aaf4f58d26c83bbca60029b3a0",
"icons/ms-icon-310x310.png": "a9ace726bbe97eff65c9638320118014",
"icons/ms-icon-70x70.png": "6763c3f58852252d5850b5273e0f121e",
"index.html": "d47ab84ffffc017ab3b4c342fc877a8a",
"/": "d47ab84ffffc017ab3b4c342fc877a8a",
"main.dart.js": "053f69a539a8d1ad50f806dc51b38cf3",
"manifest.json": "23356247bdf8b7bf05be598021da67f4",
"version.json": "eda7d549112940d75c9b2a6691e8d319"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
