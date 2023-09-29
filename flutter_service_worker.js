'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "f717e3a7f8adb130b11a19f3292f3959",
"version.json": "eda7d549112940d75c9b2a6691e8d319",
"favicon.ico": "c35b0ec9a2b8c7eeee3070d091def0e6",
"index.html": "373e1a1e1d4c6099a2d73717549ecf45",
"/": "373e1a1e1d4c6099a2d73717549ecf45",
"main.dart.js": "c2e6d96f0e2fc09b8eb65345fe7d79ad",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/favicon-16x16.png": "f717e3a7f8adb130b11a19f3292f3959",
"icons/apple-icon.png": "245ad7b503c92607c0ae3e9a8a220d0c",
"icons/apple-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/android-icon-192x192.png": "904e6bb3d482b868af7e8f07da1c24d0",
"icons/apple-icon-114x114.png": "73be9d6d9e65dbd62ec653e994174a2a",
"icons/ms-icon-310x310.png": "a9ace726bbe97eff65c9638320118014",
"icons/ms-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/apple-icon-57x57.png": "68cc7c563b89549f1dd44c83d8bb5ca1",
"icons/apple-icon-152x152.png": "1aee6cb3340b2c84c7df10dcb0b08ae4",
"icons/ms-icon-150x150.png": "19d711aaf4f58d26c83bbca60029b3a0",
"icons/android-icon-72x72.png": "16fcaabe939a2cb3711af98b7740f57e",
"icons/android-icon-96x96.png": "71caea2021b1d3d46d2e1cefee06aa65",
"icons/android-icon-36x36.png": "6912590215c9aac84eb331a33e17242c",
"icons/apple-icon-180x180.png": "5cde69955f75d7045aa4f536c3ba4cd9",
"icons/favicon-96x96.png": "0fc6dfc36c93a5f03769c974a288c0ac",
"icons/android-icon-48x48.png": "d25f51b47b06415bae44644b16022b16",
"icons/apple-icon-76x76.png": "0a01b705fb841923963351259007f375",
"icons/apple-icon-60x60.png": "718524fc7bd4c68fe92051117a7aeb34",
"icons/android-icon-144x144.png": "5763917bcb6ed038755d654498e1fe5e",
"icons/apple-icon-72x72.png": "16fcaabe939a2cb3711af98b7740f57e",
"icons/apple-icon-120x120.png": "b128b11ae53203bb005466df5f326fdd",
"icons/favicon-32x32.png": "eb5ea16f90b551718a8c73316c0a4620",
"icons/ms-icon-70x70.png": "6763c3f58852252d5850b5273e0f121e",
"manifest.json": "87238cc87bc362b242c91fc40398f27a",
"flutter_coding.jpg": "8578eb8552b082da86742688bbac005f",
".git/config": "ed7b05f605f913b83ae0d3381c6f73e0",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/7096c8b27e2df6c06ffb5a34cc8b5cea2e7853": "7d26c1d63467fcf792014bc2593d2db3",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/a3/7decd8394c69cab81ed846b0a0e27c0a3f3c02": "74aaeea61a625bd69c5a77d74ae72d92",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ad/c9579bf45d9d192681fd606bef3df2b4ae79d1": "d6dfe2f7852750c7abb7c0a15f0043c0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ab/409986393402f4c6cf2a0a5e31e3d40aae65ed": "8da05bb569f6bd67676fcb9b62a886ce",
".git/objects/c8/b3261b103bf27ac2afb11e693fe5f6dbc892de": "59649da5c7be7fb3c8c48045c78e3aab",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/pack/pack-720bc2d2c1dfc7c41572a57719c3e501cee8ce08.pack": "7c8a31b2678e1226ae80b49fd6f82603",
".git/objects/pack/pack-720bc2d2c1dfc7c41572a57719c3e501cee8ce08.idx": "a1e11b5a6c33b520ab3e4d65625f2bb1",
".git/objects/73/ec2096f7e94242775cb9afff00e479c48a7f93": "f9600f16b0225e41984192f38bf49cbb",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/ecbe41f3b1d13921bf97a5ab7f3296e162ebc4": "dd3a0d1512d2915d79f84e72cf5a0087",
".git/objects/43/795b226425fd398ef965700b532b1175a59c9b": "2e06b3c9d77b5765774730b2fb39a2b9",
".git/objects/31/7c922be748a3ff932bf47410432bc0536f1697": "91a992a1af55e88680a2a93d7b0bd0e8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d2/d5919bbabc6155a81a44ef54bbbb4ad8396152": "e7e8ac296908150061cffb325344f346",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/2b/2b38cd8ab2f6c52b806f23757584889dcd5f4a": "cd7a571d6f0212d0729d771322cd3b1c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4bd998d213555efda8cb8d85512fe98a",
".git/logs/refs/heads/main": "4bd998d213555efda8cb8d85512fe98a",
".git/logs/refs/remotes/origin/HEAD": "56970650b148b5b897411fec87c21732",
".git/logs/refs/remotes/origin/main": "163e22b2695da1072e77487aa721f288",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2d8b926060a109ede90333ff9634fc9c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2d8b926060a109ede90333ff9634fc9c",
".git/index": "aca270e5483da65744125c0018d7ba8f",
".git/packed-refs": "31434cdb481adeecd9b094fb6ed6b52d",
".git/COMMIT_EDITMSG": "c7c253161f9e6c413227c7a6121116cc",
".git/FETCH_HEAD": "6cbd31fe5b8a59a6400826e0a4fbc30b",
"assets/AssetManifest.json": "525ac40f02b0890fc09cbc23a60d045c",
"assets/NOTICES": "cc67f8d9f36b6e732de5bdf954030b4d",
"assets/FontManifest.json": "056b7f673b9434747bc754c3e7ace236",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "061400734164a671cf2f55cbe7471e89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7f93600ef413df5f7e06df9e926e508d",
"assets/fonts/MaterialIcons-Regular.otf": "540638ea34f2d216d0bde5f0be11c355",
"assets/assets/svg/feeling_proud.svg": "5032d5af74849a30dd2af4e056476428",
"assets/assets/svg/code.svg": "59cd9bd8639242101ab3de369a54e1ea",
"assets/assets/svg/programming.svg": "ac6a41a570245dd8ba794f2d36144149",
"assets/assets/svg/icons/javascript.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/svg/icons/gmail.svg": "e6af6eb35d1ba2724ac298d42d36909b",
"assets/assets/svg/icons/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/svg/icons/github.svg": "3727b6233772c732a57a24816bb5abec",
"assets/assets/svg/icons/database.svg": "7e1eadd6af36fcf8089d026394b77a23",
"assets/assets/svg/icons/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/svg/icons/python.svg": "4948e6764d2214fe0c09621c6defe06b",
"assets/assets/svg/icons/git.svg": "5eed2c8cb62e1adfae09b0129a25a1a7",
"assets/assets/svg/icons/app-store-badge.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/svg/icons/html5.svg": "a0657d1cac3b20f1e113738056db3c63",
"assets/assets/svg/icons/mongodb.svg": "409452f1b3c56ada4efdcfbd39ff1142",
"assets/assets/svg/icons/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/svg/icons/analytics.svg": "b34cb0108420e0b1682b2bacf51e1051",
"assets/assets/svg/icons/linkedin.svg": "2c30ea92930f1907b2f1ccad430eed34",
"assets/assets/svg/icons/css3.svg": "d10f4bf68a27526ef83fd9dfdc75317d",
"assets/assets/svg/icons/wordpress.svg": "61efb10a4ec5faeda7a2923d195b2036",
"assets/assets/svg/flutter_dev.svg": "22f00cab7630cafc4eacbb1f59f79079",
"assets/assets/kakraba/images/minihouse.png": "3be01058467d31de1ea431aad480ce97",
"assets/assets/kakraba/images/bitcoin.png": "a3b84ed9dd97a07efebdb3b50a43b7ea",
"assets/assets/kakraba/images/profile_image.jpg": "4111f35af8449d30f3ad40f1d36f20c8",
"assets/assets/kakraba/images/background_image.png": "af4f1cb2ac980992ff66a42fe764988d",
"assets/assets/kakraba/images/ballon.png": "ef05cf5f25dce2d7cfa8c4d734426689",
"assets/assets/kakraba/images/piggy.png": "5cbd387dd773d68e7e076b0fd740a1dd",
"assets/assets/kakraba/images/car.png": "4a96286b0021c3d0c0aeacebd5ece704",
"assets/assets/kakraba/images/image2.jpeg": "a88278ddc742598c64c5da13d3ab8c91",
"assets/assets/kakraba/images/btc.jpg": "e092c317a690c252144b8523d4fe61a4",
"assets/assets/kakraba/images/image1.png": "3b587d2bdfcfbf518b33c909c7f8158f",
"assets/assets/kakraba/chatbot/bot.gif": "d844c4bb2764085ea174d49389251f96",
"assets/assets/kakraba/chatbot/robot.jpg": "2d1f585c1c223a11c543e1f71cc97cff",
"assets/assets/kakraba/chatbot/default.jpg": "653f93c3cb58cb7f21b6a721ebdbec19",
"assets/assets/kakraba/service.json": "543502c1e717e227bc8856742ed5dd25",
"assets/assets/google_play_badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/projects/clima.gif": "076d78a2ff6a3fc2a9ad1a73b0a86296",
"assets/assets/projects/quizzler.gif": "a1c07aad706e65ef3ba2e51cb7539dc1",
"assets/assets/projects/tersh.gif": "a85b2b7b7cce936287d0bb3d151e912b",
"assets/assets/projects/bitcoin_ticker.gif": "42afd4da921f8af79a2ad830ef8143c4",
"assets/assets/projects/velociti.png": "80b70e8068b8daaf0e2c41f7c490130d",
"assets/assets/projects/todoey.gif": "22d9949d21c8a69e08deadb4919d6873",
"assets/assets/projects/gra_smart_office.png": "7b18db2713edce286d69cc932cb195a9",
"assets/assets/projects/flutter_create_cert.png": "3ad6c3ae85d709be823969a0490819c3",
"assets/assets/projects/destini.gif": "ba8ddfa3d3f63f1d6f773cf385bbe0bc",
"assets/assets/projects/xylophone.png": "f6758e6b251f5d71e6a4ea6752180902",
"assets/assets/projects/bmi_calc.gif": "b71a75688edfe8a51ac1237903c5614a",
"assets/assets/projects/pebble-ios.png": "d3cdb8cfbd14af96444c95981e049a3e",
"assets/assets/projects/kakraba.png": "66430b873725fbea2200652e20962c44",
"assets/assets/projects/nectar.png": "eb29ac9f787b92f494808c2ef7e093b7",
"assets/assets/projects/flash_chat.gif": "c46f7d06ab791e1981610bec1479f4c1",
"assets/assets/projects/nokofio.png": "a454e1ab191fdd5a8714368a68ec15e1",
"assets/assets/IPhone_X_vector.svg": "1f6f980f71944549f0290efc8beef03a",
"assets/assets/coding.gif": "03a4a5f034bf0bafa661fd8a8aabedc8",
"assets/assets/background.png": "cd760177ae72bdfca5cd8fa362b57d50",
"assets/assets/sounds/xylophone/note4.wav": "7817b629210c6d879b493439bcded62b",
"assets/assets/sounds/xylophone/note5.wav": "69f4c1dd58b17a67a632ed106f203afc",
"assets/assets/sounds/xylophone/note7.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/assets/sounds/xylophone/note6.wav": "c713df4bb4bb1b6b11d041d97387d959",
"assets/assets/sounds/xylophone/note2.wav": "1760f9313cae8fa1564e9091c58cdcf4",
"assets/assets/sounds/xylophone/note3.wav": "ec8173470a0186fdecf2f6935260eb56",
"assets/assets/sounds/xylophone/note1.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/sounds/quizzler/correct.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/assets/sounds/quizzler/wrong.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/clima/city_background.jpg": "3f31f446bcfeb4a6d1112c1110b63ca1",
"assets/assets/clima/location_background.jpg": "17c27d970917469dc0e4181c24b605bf",
"assets/assets/iphone_frame.png": "db1e2d65db7e3170dfecfb96add4a015",
"assets/assets/flutter_coding.jpg": "8578eb8552b082da86742688bbac005f",
"assets/assets/nectar/svg/carrot.svg": "73ddf1cfd27302a0dd194b0de4a10605",
"assets/assets/nectar/dairy_eggs.png": "399082c2521ba10f9936a096952c7836",
"assets/assets/nectar/fruits.png": "c19554fb5b7d85d9076dd80ca4ade2c3",
"assets/assets/nectar/blur_image.png": "1bb672e25ccfd5b9cc040500aed846fd",
"assets/assets/nectar/banner.png": "bfbe5cde71e009a43c6af59455833ab3",
"assets/assets/nectar/credit_card.png": "6a1fe3a6784e87ceda596eb8971c1e05",
"assets/assets/nectar/chicken.png": "fcae00a2a20c05a2a2166685b24d02eb",
"assets/assets/nectar/meat_fish.png": "007b89153350794fd90e7dbbc8474233",
"assets/assets/nectar/bakery.png": "dcd9c06b85b84e048030196640575943",
"assets/assets/nectar/Pulses.png": "e5eaf9b500d16247e6f14c09cc50fc56",
"assets/assets/nectar/ginger.png": "98d99eee45e83d96fe20956cc1e24327",
"assets/assets/nectar/confirmation.png": "34421a35259a8006d1e39efdf5bf3c16",
"assets/assets/nectar/beverages.png": "8dd717222682e92cf0933bc8bf2e190c",
"assets/assets/nectar/beef.png": "e5365526e980b55c51c1359c23a1ed5f",
"assets/assets/nectar/apple.png": "bf67c683c5b1482e68fb5dcb3537839f",
"assets/assets/nectar/rice.png": "23676712b183f84997d21fb1443f5141",
"assets/assets/nectar/groceries.png": "f53346116d01415cb6049d99e3963fce",
"assets/assets/nectar/eggs/mayonnais_eggless.png": "7a555dcd8730083e85d06622613b9e55",
"assets/assets/nectar/eggs/egg_noodles.png": "380b9dd76792c29a65833a5079d5e2a2",
"assets/assets/nectar/eggs/egg_noodle1.png": "cfe926c935f90dc35393c4fb298ac4c1",
"assets/assets/nectar/eggs/egg_chicken_white.png": "eded9c9ad8a11a7d931f50210fc08bd4",
"assets/assets/nectar/eggs/egg_chicken_red.png": "f7d9f2ed272d01c4110c9ada64306843",
"assets/assets/nectar/eggs/egg_pasta.png": "2200ee2689e495390c10f4d96239d9ef",
"assets/assets/nectar/cooking_oil.png": "1b51787cae98e28ca30dd7da56b923e5",
"assets/assets/nectar/red_pepper.png": "bebc9580c477f2ec975898c8d3a1c065",
"assets/assets/nectar/banana.png": "ae36e7da99e04223bfc8047a10ad6811",
"assets/assets/nectar/beverages/coca_cola.png": "2c186872b10980884ebef183e8864afe",
"assets/assets/nectar/beverages/pepsi.png": "d12e9f0d1f772e6b5d6c062c4cd39af9",
"assets/assets/nectar/beverages/sprite.png": "c5f092e1978bf8fc387fa43e504a47c3",
"assets/assets/nectar/beverages/apple_juice.png": "bb3a929878d8f9507ad75af34141f7f3",
"assets/assets/nectar/beverages/orange_juice.png": "00c2716e362839e97956bfe3f66e414e",
"assets/assets/nectar/beverages/coke.png": "6fc47581f0ba1e19bd24b578cc64c89f",
"assets/assets/nectar/person_groceries.png": "a6ec7a53ecd076948ee4471dbab20082",
"assets/assets/nectar/grains.png": "dd9533c62c35fbfcf4acd9e5a99fb913",
"assets/assets/fonts/Canterbury.ttf": "45f5fadb3dbf0140e10b498c7cb030a6",
"assets/assets/fonts/Horizon.otf": "1b054287f76ee4678531039506fc46a3",
"assets/assets/snow_mountain.jpg": "507e548609ffe55771464dba9a8b83a3",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
