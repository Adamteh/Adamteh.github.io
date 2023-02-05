'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "f717e3a7f8adb130b11a19f3292f3959",
"version.json": "eda7d549112940d75c9b2a6691e8d319",
"favicon.ico": "c35b0ec9a2b8c7eeee3070d091def0e6",
"index.html": "68e6e149e64d392d66a7f8bc70eea305",
"/": "68e6e149e64d392d66a7f8bc70eea305",
"main.dart.js": "b01cb312674ab02b06fce802deae7f1e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
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
".git/objects/9e/6330984ea96537dbfbbba9c69633cf728506a2": "652b78a4bedbd831a06feb5aa1e24985",
".git/objects/04/55079fb5884fd50a4dde1224ea12e20554b708": "58c9bd0dec981aca2952408b4ac3b4b6",
".git/objects/b2/19bc0393486b018efad123d89fa5bda274f9c8": "4e48f36bb714b8a976da2a61781999b4",
".git/objects/ac/706792c60190e999e2902b0d0a845a9a6aff65": "31b25e61bcee3b3aed1dfd1d01e5abbd",
".git/objects/da/ce38c39b421077a827eb74037fe26285b5c632": "4e48564b33e5a51b284fdeb405190f23",
".git/objects/a2/60efdf952f99d5824b44932d3ea52904bb7f79": "396fefb180a5dbd70f7c852c987d424e",
".git/objects/a2/e8605e174f9d93ae581485f2a21f3a48c980ea": "e4703cb846857daea6ccb794c1318968",
".git/objects/d6/a2a2e1c8e21315205956b02e3c482fb4747202": "c93dbc80c8e73f2521f3583c87e21503",
".git/objects/ed/f26d0269503af519c80aa158e3d9f238a0e233": "16b88e3bc90a595d98bfa522a3f9f3a7",
".git/objects/pack/pack-e7cb2b5f3a043d92816e9823d1b373fc39dce82d.idx": "7b3a1172e414382b940ef96ef674bfbd",
".git/objects/pack/pack-e7cb2b5f3a043d92816e9823d1b373fc39dce82d.pack": "e19950e5a3abd23dce4842ed4e80efd4",
".git/objects/11/4cfcdbbcd7c61a9ba0bd8abf403a1f1507afcb": "8ae62d4b560252286de2a3553258bd91",
".git/objects/29/0f9839915cd3457bf276f6e307fb54abf20b48": "b77afe010405862930e319d8ea24e36a",
".git/objects/89/44cba6a4c720909658f176bc5855b3c49a565b": "d9a66bc7e36277450956943cd66d65fa",
".git/objects/2a/fbfbe0919958c5f5e5d8430110242f2aa65541": "b0c95eb50575f36a50d1ffcadb33e55f",
".git/objects/6e/760a947fe16e073aae94df1ec4c1f389d23d08": "09a5bd896d004d048f5a1e3d5ee440aa",
".git/objects/97/7191d029ca5e2a0347b2ae2252135abc4122cc": "15a6d24354673c0c54b3fcb1bf679bd7",
".git/objects/b8/8479284c7a3dd873ed8b6107bff3239a4c5778": "877c821a84dcb5f9c347d4388db41826",
".git/objects/dd/f1ed2807d551e0f14004bf335bb3f25ec6213c": "9b0af7f872f0d520edaa39b1e142f13c",
".git/objects/dc/0567306e8a8de931c07251c57cbc728d04f7f4": "f70eb23d32a284ccfcef50161caaf465",
".git/objects/12/51ba0aaf07307efd255d70f1ddf365ef153434": "eba9d9f660afa20d9a473c64c00c1659",
".git/objects/12/cbd77e181551ac34aeb0ae6a632d4024d2ba2b": "5e2e7d6a5d88f9a812b947789f17a045",
".git/objects/82/54dccbbcc474b4cc23023a435877cf7367ff94": "446bb9563dffcd3a3051c79d70f3360a",
".git/objects/13/85be1cc4e7e92c3200673b3ee8f56ef344af4b": "c54d1e77a2db80ae85f53dfcf95cb3e5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f5f19256c98176671c5923c7f702dec",
".git/logs/refs/heads/main": "6f5f19256c98176671c5923c7f702dec",
".git/logs/refs/remotes/origin/HEAD": "2b984e4a1a5b504f8d490d1051a95351",
".git/logs/refs/remotes/origin/main": "a56461124791c7f5a9a52fa326c0f7e8",
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
".git/refs/heads/main": "4a96d7e69477fd206fe6616edf96312d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "4a96d7e69477fd206fe6616edf96312d",
".git/index": "c56299abe22e0a21feba1b6db27b71af",
".git/packed-refs": "b8692b1a9fa5d2f0382a79f467936c56",
".git/COMMIT_EDITMSG": "29d3edf74d3df2dfb6fdba35ae0f4055",
".git/FETCH_HEAD": "54ef447e8e96109fcb79e1a72ddc714e",
"assets/AssetManifest.json": "860ced99f43fb3b09757b831407ffa7e",
"assets/NOTICES": "88466f981c83cc37d602519abd3ec884",
"assets/FontManifest.json": "056b7f673b9434747bc754c3e7ace236",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
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
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "4e868c23a144fb853c046778c3bd9c6a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
"assets/assets/projects/todoey.gif": "22d9949d21c8a69e08deadb4919d6873",
"assets/assets/projects/flutter_create_cert.png": "3ad6c3ae85d709be823969a0490819c3",
"assets/assets/projects/destini.gif": "ba8ddfa3d3f63f1d6f773cf385bbe0bc",
"assets/assets/projects/xylophone.png": "f6758e6b251f5d71e6a4ea6752180902",
"assets/assets/projects/bmi_calc.gif": "b71a75688edfe8a51ac1237903c5614a",
"assets/assets/projects/pebble-ios.png": "fbe474141cd3b3e41b550f5be8c942cd",
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
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
