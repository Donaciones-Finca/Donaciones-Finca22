// Sample JSON data - would normally be loaded from an external file
const data = {
    "cars": [
        // SEDANES (8)
        {
            "id": "car_001",
            "brand": "Mercedes Benz",
            "model": "CLS350",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "cls500w219",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712026916061254/image.png?ex=69286807&is=69271687&hm=cf186a3b62589a9151f97ceb711925b139f5cb6b15a11fad2d0f17e2b5a3008a&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712026706350141/image.png?ex=69286807&is=69271687&hm=a22e771da67e7b7afb1b1ce3eacb130cfa3af55c0cc3c04f2fd3fe7f02a183dc&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_002",
            "brand": "Mercedes Benz",
            "model": "CLS53 AMG",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "cls19",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712078745075772/image.png?ex=69286813&is=69271693&hm=e8319cd3a5a6e82d603f2ce9938db364264cd6628ca3071cc4d3c57501d3d2a7&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712079017574460/image.png?ex=69286813&is=69271693&hm=84ef9c6ab3e87d7361b41652cf9b43707fd1b2db90a07ea1f5c38d37fba87566&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_003",
            "brand": "Audi",
            "model": "S8",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "audirs8",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712255983517749/image.png?ex=6928683e&is=692716be&hm=23ae5521d7aaca2cc83afed018d489484820f480fcf0d91d7cdeef669fe1e1e3&=&format=webp&quality=lossless&width=808&height=433",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712256226791506/image.png?ex=6928683e&is=692716be&hm=f0ac880a404773595e143d454f05b82ebb1efeb43017230ad8cb3099bad24987&=&format=webp&quality=lossless&width=808&height=300"
            ]
        },
        {
            "id": "car_004",
            "brand": "BMW",
            "model": "Alpina B7",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "alpinab7",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712410539561160/image.png?ex=69286862&is=692716e2&hm=a7678db650bd1b21e7b33bfd4dac99bd11b16958e239776c68e7abd8aa8ecb4e&=&format=webp&quality=lossless&width=808&height=258",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712410795282492/image.png?ex=69286863&is=692716e3&hm=cd5c885e89dac9fdd8369c39d40d87126ca3633b09db162e5b9769c24f6b83ae&=&format=webp&quality=lossless&width=808&height=318"
            ]
        },
        {
            "id": "car_005",
            "brand": "Audi",
            "model": "Q4",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "AAQ4",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712459755651214/image.png?ex=6928686e&is=692716ee&hm=03ce35550aa14be850cd868f5c22a680ce84cd72f7d6240ac787bd4a65862432&=&format=webp&quality=lossless&width=808&height=358",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712459482759310/image.png?ex=6928686e&is=692716ee&hm=930356040a1b9e043ffd70c09f606f8b53afb8e178d91526f5392fdda6d2584c&=&format=webp&quality=lossless&width=808&height=363"
            ]
        },
        {
            "id": "car_006",
            "brand": "Mercedez Benz",
            "model": "CLA 45",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "2020CLA45s",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712516575891537/image.png?ex=6928687c&is=692716fc&hm=c3a23154ca13a82dda462ebe7d9b30ac1a2950441de013c43df362528026eb2a&=&format=webp&quality=lossless&width=808&height=295",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712516844322857/image.png?ex=6928687c&is=692716fc&hm=4c4adf10ec0f56b485d2906efb4219a2d72fd19394b4915d2917136044147400&=&format=webp&quality=lossless&width=808&height=327"
            ]
        },
        {
            "id": "car_007",
            "brand": "BMW",
            "model": "M5",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "2019m5",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712576558497944/image.png?ex=6928688a&is=6927170a&hm=292261db3e1fdbf4e919c8af2115479ffcd8fc8ac795c2b9d564e92824e15df0&=&format=webp&quality=lossless&width=808&height=348",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712576910954496/image.png?ex=6928688a&is=6927170a&hm=5a45a260e270301c32a1abe9dd56861de279b5a332739f443cafc65d6105b257&=&format=webp&quality=lossless&width=808&height=355"
            ]
        },
        {
            "id": "car_008",
            "brand": "Audi",
            "model": "RS7",
            "category": "sedanes",
            "price": 6500,
            "spawnCode": "18rs7",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442712692325351455/image.png?ex=692868a6&is=69271726&hm=302ab57be13ce26e5bcf5f8e720152fc234e413972187e305004ee16361cf479&=&format=webp&quality=lossless&width=808&height=380",
                "https://media.discordapp.net/attachments/1293813114135117855/1442712692598116496/image.png?ex=692868a6&is=69271726&hm=0a5314927280514c6e0d9cd8b42301f6dc3e388980fd4ab8a87cd7802a72c82d&=&format=webp&quality=lossless&width=808&height=339" 
            ]
        },

        // SUVS (8)
        {
            "id": "car_009",
            "brand": "Jeep",
            "model": "Wrangler",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "2022jeep",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711392388911268/image.png?ex=69286770&is=692715f0&hm=39439af4e84e46d25cb7dd3575da6d59ca1eb1538ab4296c476b6586faa0b5b2&=&format=webp&quality=lossless&width=808&height=447",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711392766529578/image.png?ex=69286770&is=692715f0&hm=f4adc18f48860e039b9611380510e907c5912009d008ac2cc2fc8be308c25dcf&=&format=webp&quality=lossless&width=808&height=378"
            ]
        },
        {
            "id": "car_010",
            "brand": "Mercedes Benz",
            "model": "AMG G 63",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "22g63",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711449326850099/image.png?ex=6928677d&is=692715fd&hm=9ca65b863dcf2f7d619d51e73b504481356ebe8d2103ba0749925696a68f175a&=&format=webp&quality=lossless&width=808&height=374",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711449603539115/image.png?ex=6928677d&is=692715fd&hm=124b5741099fee068274d6de200a241a10b8b3297f79c78fcd12a3db20f7e1b5&=&format=webp&quality=lossless&width=808&height=398"
            ]
        },
        {
            "id": "car_011",
            "brand": "Cadillac",
            "model": "Escalate",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "escaladeprime",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711529387589642/image.png?ex=69286790&is=69271610&hm=a5846899744eda8e2c38d932402d2cfe03352e416776ad716a4e6450fc676194&=&format=webp&quality=lossless&width=808&height=355",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711529639116903/image.png?ex=69286790&is=69271610&hm=183c54b0b5bbe4570619b5a4c7c842226058c8074dc4b470c0f84e0965557673&=&format=webp&quality=lossless&width=808&height=391"
            ]
        },
        {
            "id": "car_012",
            "brand": "Mercedes Benz",
            "model": "AMG G63C",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "g63c",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711598526500894/image.png?ex=692867a1&is=69271621&hm=8e9235382be60ef805605e81878e45bb0cd204f5621c54b5ab21d330bd48c754&=&format=webp&quality=lossless&width=808&height=470",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711598816038972/image.png?ex=692867a1&is=69271621&hm=86bb3cbaf8648bde8a59f3de695df8c82272bb68d48292952aa68aa3fb709892&=&format=webp&quality=lossless&width=808&height=417"
            ]
        },
        {
            "id": "car_013",
            "brand": "Mercedes Benz",
            "model": "G65",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "g65",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711635025334383/image.png?ex=692867aa&is=6927162a&hm=063d40696ce95fe286e4d0737b29b56d1f0dda82b28fc208b493b228f360f4f4&=&format=webp&quality=lossless&width=808&height=397",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711635310415913/image.png?ex=692867aa&is=6927162a&hm=da24963d3944b7593fa8e6fdbe432051429a1ec4a01ab7a7a927715797442c7b&=&format=webp&quality=lossless&width=808&height=486"
            ]
        },
        {
            "id": "car_014",
            "brand": "Brabus",
            "model": "g700",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "g700brabusretuned",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711737143922923/image.png?ex=692867c2&is=69271642&hm=26591169bd2cdb552b0484c0753a95bdec0f9443a0f2aabbacdd969e97bff0ea&=&format=webp&quality=lossless&width=808&height=445",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711737433587752/image.png?ex=692867c2&is=69271642&hm=52a54e9bf11b686244483d1d9b1368156b69a9ca70efbacb0fd79c8233572602&=&format=webp&quality=lossless&width=808&height=442"
            ]
        },
        {
            "id": "car_015",
            "brand": "Hummer",
            "model": "h2",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "h2m",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711865326043156/image.png?ex=692867e0&is=69271660&hm=9e012190f91f5a0b698e3e76868b7ddf69ebb84ca35ed6b0139229f0a381b1cb&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711865078714533/image.png?ex=692867e0&is=69271660&hm=99dd678d5ae7d779ff6241bf82cbd016cccfc795509d2c236f712b14e795899f&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_016",
            "brand": "Mercedes Benz",
            "model": "GL63",
            "category": "suvs",
            "price": 6500,
            "spawnCode": "GL63",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442711801136545792/image.png?ex=692867d1&is=69271651&hm=7fd9d99e24da1ee7422971e85a152fe9a586f057f6aef9ccd2a2bfa93d082bbb&=&format=webp&quality=lossless&width=808&height=415",
                "https://media.discordapp.net/attachments/1293813114135117855/1442711801379819643/image.png?ex=692867d1&is=69271651&hm=6858adc02ef68b33ab4a51163524191e482677fb4e4e89f52e2a1db4111fe607&=&format=webp&quality=lossless&width=808&height=437"
            ]
        },

        // PICK UP (8)
        {
            "id": "car_017",
            "brand": "Jeep",
            "model": "Gladiator",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "rmodjeepg",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709660296810644/image.png?ex=692865d3&is=69271453&hm=4142a792688d235e8f1d50c7d41a8f97be2cd63c86a97f10e10f894e5c9a23cf&=&format=webp&quality=lossless&width=808&height=402",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709659977912400/image.png?ex=692865d3&is=69271453&hm=796fef60da8122b2787f176e3769125ad7ff12b581fd64aea56c9e760b79eb9d&=&format=webp&quality=lossless&width=808&height=353"
            ]
        },
        {
            "id": "car_018",
            "brand": "Ford",
            "model": "Ranger",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "rapger19",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709702654955701/image.png?ex=692865dd&is=6927145d&hm=0e82e7239f781817151dc3db8485186f4519d495d59b326d065704d8f6a35911&=&format=webp&quality=lossless&width=808&height=387",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709703145685064/image.png?ex=692865dd&is=6927145d&hm=3cdcea85d90d03892a8dcafecd1170fb9a0a54a56feeaf6197c72cdc80cca70a&=&format=webp&quality=lossless&width=808&height=422"
            ]
        },
        {
            "id": "car_019",
            "brand": "Dodge",
            "model": "RAM 1500 TRX",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "ramtrx6x6",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709729007894558/image.png?ex=692865e3&is=69271463&hm=44dc13ae2c5bd1df6414811223a6e6b358152f97d7aa403afc228026994d45e8&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709729263751232/image.png?ex=692865e3&is=69271463&hm=9110583d6bbdc46ec65400aa96c91db343abbea9a074b7c850f90b2c49d5508d&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_020",
            "brand": "Ford",
            "model": "f-350 Super Duty",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "madf350lift",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709807860551740/image.png?ex=692865f6&is=69271476&hm=d7f164a0361b3c0db78075eff8ea3d3d76673bcc4c5e90c088b36b6cdfdf4941&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709808141828327/image.png?ex=692865f6&is=69271476&hm=6bbe8983b840b55a149684399ea618a0cbd2ed44e915d7460da18fb6da32892b&=&format=webp&quality=lossless&width=808&height=428"
            ]
        },
        {
            "id": "car_021",
            "brand": "Dodge",
            "model": "Ram 1500",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "gcram1500",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442710227668570234/image.png?ex=6928665a&is=692714da&hm=ffc12852bf9780dd8adad49bc3b8179bba60ea8f54d25f0e0291ae291578e7fc&=&format=webp&quality=lossless&width=808&height=296",
                "https://media.discordapp.net/attachments/1293813114135117855/1442710227941330954/image.png?ex=6928665a&is=692714da&hm=f11d17204114e2c4aae00e735e70051d6473eeb3b953e1af7c41387ed4fb8fb9&=&format=webp&quality=lossless&width=808&height=363"
            ]
        },
        {
            "id": "car_022",
            "brand": "Toyota",
            "model": "Tundra",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "19gv80",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442710348355338312/image.png?ex=69286677&is=692714f7&hm=cd39b7d3d417e3c5cfb30088e18f150ec189070da20ff1e77aa38107516c25fe&=&format=webp&quality=lossless&width=808&height=434",
                "https://media.discordapp.net/attachments/1293813114135117855/1442710348112072839/image.png?ex=69286677&is=692714f7&hm=481eddecc8e56d479997551ce1aa788becc4a2f7e6189bcfdff113f3ece3faee&=&format=webp&quality=lossless&width=808&height=401"
            ]
        },
        {
            "id": "car_023",
            "brand": "GMC",
            "model": "Sierra",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "21sierra",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442710382010699948/image.png?ex=6928667f&is=692714ff&hm=cb36d396d65a8b9a6c38e9253ead717ce0493023cc94fbdaedd4dbce10faa07b&=&format=webp&quality=lossless&width=808&height=433",
                "https://media.discordapp.net/attachments/1293813114135117855/1442710382409154560/image.png?ex=6928667f&is=692714ff&hm=7526d0eef468f6c56c96fdee20ae48dde548de590803be83e4218b6c29e17c82&=&format=webp&quality=lossless&width=808&height=393"
            ]
        },
        {
            "id": "car_024",
            "brand": "Dodge",
            "model": "RAM TRX",
            "category": "pickup",
            "price": 6500,
            "spawnCode": "1500ghoul",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442710440663711876/image.png?ex=6928668d&is=6927150d&hm=2436610fc3536a2b7eb1a073cb18f00558ecab99d9a91cfa2f2ad9378b6fe3ee&=&format=webp&quality=lossless&width=808&height=387",
                "https://media.discordapp.net/attachments/1293813114135117855/1442710441276084316/image.png?ex=6928668d&is=6927150d&hm=642c2dc45b810a810bf4d13c071ecd1d07b94098b37b879cb403d4fa245a3dd0&=&format=webp&quality=lossless&width=808&height=353"
            ]
        },

        // DEPORTIVOS (8)
        {
            "id": "car_025",
            "brand": "BMW",
            "model": "Z4",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "DLZ4",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708861671702568/image.png?ex=69286514&is=69271394&hm=f59be9b825f9267596ca92b817d3fa1302051e7b21c0632b8ed2a1b414cf17fc&=&format=webp&quality=lossless&width=808&height=364",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708862070296737/image.png?ex=69286514&is=69271394&hm=b7be3d3b5a8ce93ef16c5cbfda07425998ff0d168f227dcc79143e048aaa17fa&=&format=webp&quality=lossless&width=808&height=354"
            ]
        },
        {
            "id": "car_026",
            "brand": "Ford",
            "model": "Mustang RTR",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "manssupersnake",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708967041011762/image.png?ex=6928652d&is=692713ad&hm=9ffec9eb87138ec1e2bf7022d4a6c58435ad270de5de1238f7a6db23535d99ce&=&format=webp&quality=lossless&width=808&height=335",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708967368163488/image.png?ex=6928652e&is=692713ae&hm=4c4090b29c32eb9afaecf88f475a1017a5561288b8382b7346656a0fc68e56d0&=&format=webp&quality=lossless&width=808&height=351"
            ]
        },
        {
            "id": "car_027",
            "brand": "Nissan",
            "model": "Nismo",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "nismo20",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709117725573331/image.png?ex=69286551&is=692713d1&hm=98482634104620021a35357508179e8d8a54a1a23d8f37620b36de93f67f1bc3&=&format=webp&quality=lossless&width=808&height=332",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709117440491691/image.png?ex=69286551&is=692713d1&hm=036a1c2cd1470ac05522c92393987bdbdb10f9d6bf6a5536ed3c5159230bd3a8&=&format=webp&quality=lossless&width=808&height=331"
            ]
        },
        {
            "id": "car_028",
            "brand": "Honda",
            "model": "NSX",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "nsx17",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709201020518571/image.png?ex=69286565&is=692713e5&hm=195f837f41fbf3c610be7ce80bc255c606c65f25e423c0be4bd0505c691860c5&=&format=webp&quality=lossless&width=808&height=397",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709201305473065/image.png?ex=69286565&is=692713e5&hm=5ede0d0989de9294aaa00c85700420ae63dc85d7824ed63c456ec8617a772368&=&format=webp&quality=lossless&width=808&height=343"
            ]
        },
        {
            "id": "car_029",
            "brand": "Porshe",
            "model": "911",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "porche911speedhunter",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709296763764856/image.png?ex=6928657c&is=692713fc&hm=2f4c515d461f1329abccc853d2665e9046b5393767e987e432e5b657cbe7e059&=&format=webp&quality=lossless&width=808&height=398",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709297048846408/image.png?ex=6928657c&is=692713fc&hm=b3f5e2606cbd5fd5387f8101cd07d568d09a008896b4ee8b44ac151095b75ffa&=&format=webp&quality=lossless&width=808&height=371"

            ]
        },
        {
            "id": "car_030",
            "brand": "Audi",
            "model": "R8",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "r8beastedit",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709330448351395/image.png?ex=69286584&is=69271404&hm=ac443bb1aeea233472669b64bae405231d9579406f4258feda9b24c0ad5dbc10&=&format=webp&quality=lossless&width=808&height=380",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709330712465548/image.png?ex=69286584&is=69271404&hm=5736f68072ca2d9e4f5a39c9e111041b702176b2ec20c65cfd5d7f715344bc12&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_031",
            "brand": "Nissan",
            "model": "GTR",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "rmodgtr",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709439860703292/image.png?ex=6928659e&is=6927141e&hm=0e29d0e2fe2789a667226c1477583a3babce4c5305e5fa66b270f65a617c8a8d&=&format=webp&quality=lossless&width=808&height=346",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709440179605535/image.png?ex=6928659e&is=6927141e&hm=b923c3ede1e650b869551e1b4a0f2c7f3640ce8a3a03faba0f15a26fd58a35bf&=&format=webp&quality=lossless&width=808&height=337"
            ]
        },
        {
            "id": "car_032",
            "brand": "Nissan",
            "model": "Skyline",
            "category": "deportivos",
            "price": 6500,
            "spawnCode": "rmodskyline34",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442709522719178783/image.png?ex=692865b2&is=69271432&hm=7dac065b40cbf06bcf2b6f6527e7754eea6eee800555634f0d245087de9c0593&=&format=webp&quality=lossless&width=808&height=427",
                "https://media.discordapp.net/attachments/1293813114135117855/1442709522962710611/image.png?ex=692865b2&is=69271432&hm=36717cee8cc7c86b7c9f477bf4159690466e1c9ab5a56c06187e93c0ada73667&=&format=webp&quality=lossless&width=808&height=429"
            ]
        },

        // SUPERDEPORTIVOS (8)
        {
            "id": "car_033",
            "brand": "Ferrari",
            "model": "LaFerrari",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "gta5rp_veh_ferrari19",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442707208612741293/image.png?ex=6928638a&is=6927120a&hm=1e2e3911cb7c775d2289cbacefc6e4c21c4aa92d270a2f54c206eb6fc5b1a69e&=&format=webp&quality=lossless&width=808&height=316",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707208860340294/image.png?ex=6928638a&is=6927120a&hm=76e67ddf4c99080c11d720c647e33a424b7e5aa9f34b43adb9342b9a3dc696cb&=&format=webp&quality=lossless&width=808&height=312"
            ]
        },
        {
            "id": "car_034",
            "brand": "Lamborghini",
            "model": "Aventador",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "gcmlamboultimae",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442707281803477064/image.png?ex=6928639c&is=6927121c&hm=a3776c8940b40bcda8c4b4b7726ecabf4f4b5091ea8e2f820955b9702f1ebd3c&=&format=webp&quality=lossless&width=808&height=271",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707280935129188/image.png?ex=6928639b&is=6927121b&hm=bfd7e0f3edeb67a7fd12fd4e73812fdbf8cdc51273efc49ab546a81ad7a72067&=&format=webp&quality=lossless&width=808&height=213"
            ]
        },
        {
            "id": "car_035",
            "brand": "Ferrari",
            "model": "FXX",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "fxxkevo",
            "images": [
                "https://cdn.discordapp.com/attachments/1293813114135117855/1442707333414129674/image.png?ex=692863a8&is=69271228&hm=e24e363139037c90c5a6d5455dd3eab8c522da17d727e328a2a81931044e6003&",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707333699600394/image.png?ex=692863a8&is=69271228&hm=792cf4a9a2d4d1e71ca61098f2c1b1919ff3ff01da6677178f3b9aaf010aba84&=&format=webp&quality=lossless&width=808&height=278"
            ]
        },
        {
            "id": "car_036",
            "brand": "Ferrari",
            "model": "488",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "488sp",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442707554051424389/image.png?ex=692863dd&is=6927125d&hm=04fb52e412dcc91eef7c21bf1c9e99e823dbb35450f863493594c2027ca4aee2&=&format=webp&quality=lossless&width=808&height=306",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707554319994940/image.png?ex=692863dd&is=6927125d&hm=52cec6739ed59e97ecc9063428fcf17d99680b62d692fd0d8305f56236c7f586&=&format=webp&quality=lossless&width=808&height=288"
            ]
        },
        {
            "id": "car_037",
            "brand": "Lamborghini",
            "model": "Revuelto",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "amrevu23mg",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442707627803938947/image.png?ex=692863ee&is=6927126e&hm=bbae2fe840a7aec2b904e0b9f37d24d45346c870d01c9c77b53f822905b3bd2f&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707627506401320/image.png?ex=692863ee&is=6927126e&hm=1c45f3bd229d351e40106a2496e5f25f2db8bac6dd1ee2a433fde791da1f14de&=&format=webp&quality=lossless&width=808&height=340"
            ]
        },
        {
            "id": "car_038",
            "brand": "Bugatti",
            "model": "Chiron",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "chironspeedhunter",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442707703536549978/image.png?ex=69286400&is=69271280&hm=4b2d41b3a504624928fda214d14e96ca5f4dc0b4aa1c66a174673b478dc5f18e&=&format=webp&quality=lossless&width=808&height=310",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707704094130177/image.png?ex=69286400&is=69271280&hm=a2dc5b6a1fa8129bbada3202609e21dfa01d6d4ff26ff9762e8b3a75441e09df&=&format=webp&quality=lossless&width=808&height=364"
            ]
        },
        {
            "id": "car_039",
            "brand": "Bugatti",
            "model": "Chiron Super",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "chironsuper",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442707738194084034/image.png?ex=69286408&is=69271288&hm=d05312249b308a55d396495fe41ae156dd0570d81b847cc4d154647e132501f2&=&format=webp&quality=lossless&width=808&height=308",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707737963270174/image.png?ex=69286408&is=69271288&hm=0d42d6433fe9eabd60a96df48f8712ff301691e35ca9f51b62829d74cf835df7&=&format=webp&quality=lossless&width=808&height=302"
            ]
        },
        {
            "id": "car_040",
            "brand": "Ford",
            "model": "GT",
            "category": "superdeportivos",
            "price": 6500,
            "spawnCode": "gt17",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442707865281364038/image.png?ex=69286427&is=692712a7&hm=256296e5e3589e615a61f555f5c394f8b5875e922791b6d31356ee793fa6d379&=&format=webp&quality=lossless&width=808&height=349",
                "https://media.discordapp.net/attachments/1293813114135117855/1442707865566580788/image.png?ex=69286427&is=692712a7&hm=defcbdfe5ddcb9f584465e085284aadcb82debaa97bd9ce4368859d2c4e32c81&=&format=webp&quality=lossless&width=808&height=332"
            ]
        },

        // MOTOS (8)
        {
            "id": "car_041",
            "brand": "Harley Davidson",
            "model": "Breakout",
            "category": "motos",
            "price": 6500,
            "spawnCode": "claw",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708201031073792/image.png?ex=69286477&is=692712f7&hm=b53aa863f5c3c2e1c1af85e3a65a49a93aa26bf7c2f7896e2d8089e8899396f4&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708201308033064/image.png?ex=69286477&is=692712f7&hm=ba1eb4e04eb49a6f5bc909869709b9778ff80479a1f33e142b0ff77fb3734575&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_042",
            "brand": "Honda",
            "model": "CB650R",
            "category": "motos",
            "price": 6500,
            "spawnCode": "cb650r",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708240503931002/image.png?ex=69286480&is=69271300&hm=5bff82d493f5371dade91a4d09f8b7f9696291de746e750061a50ead3430e202&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708241015509052/image.png?ex=69286480&is=69271300&hm=ad0ec88c6db9e0df941bbd04b9eb00b02060244dce1ec1278194f554cc5102c6&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_043",
            "brand": "Yamaha",
            "model": "Aerox",
            "category": "motos",
            "price": 6500,
            "spawnCode": "aerox155",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708298003382273/image.png?ex=6928648e&is=6927130e&hm=a5894b76033d2e2c025ebbbb7252e1d8b60f7314f69c2cf25b6a87113e4d52cb&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708298418753709/image.png?ex=6928648e&is=6927130e&hm=7d2243654dea4693e825af9bcc683b71c65a41e59c5c9659136850d62b82ed28&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_044",
            "brand": "Yamaha",
            "model": "Raptor",
            "category": "motos",
            "price": 6500,
            "spawnCode": "GGbanshee",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708458263674950/image.png?ex=692864b4&is=69271334&hm=12d33c424b95c66d3e32de0e6688dc90a7202024de29d39c504bdeeb5b1a6ebe&=&format=webp&quality=lossless&width=808&height=351",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708458569732226/image.png?ex=692864b4&is=69271334&hm=e971b956d2b7d1b46f9a3e9dee38d6916d4702ddf1bb29810fefde982474a02b&=&format=webp&quality=lossless&width=808&height=327"
            ]
        },
        {
            "id": "car_045",
            "brand": "BMW",
            "model": "S100RR",
            "category": "motos",
            "price": 6500,
            "spawnCode": "GODzBMWS100RR",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708496909860884/image.png?ex=692864bd&is=6927133d&hm=15680f425ead61d24d58e04615bede42344462c5c9f3d1720bf71c829e582137&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708497178562640/image.png?ex=692864bd&is=6927133d&hm=d9e9edc7914d43830441027f6aa6c0f85110943c61c15f2902c37bafa8a03f76&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_046",
            "brand": "Kawazaki",
            "model": "Ninja H2",
            "category": "motos",
            "price": 6500,
            "spawnCode": "GODzNINJAH2",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708533492711457/image.png?ex=692864c6&is=69271346&hm=5ec596c55d5fadc68cc21bbea7ea2ba11a8cd83f6ea1a072acfbc11e2c2843a3&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708533815677040/image.png?ex=692864c6&is=69271346&hm=3e7ac3a871e038ddcc12e78a5edfe8927841f32f9036cb490b22a5771942ee46&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_047",
            "brand": "BMW",
            "model": "S100",
            "category": "motos",
            "price": 6500,
            "spawnCode": "km100rr",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708685187973210/image.png?ex=692864ea&is=6927136a&hm=ae999d7ce1ec8df493e811f013a8262a234734b027a2fb3b8307df6d76124dd5&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708685435699240/image.png?ex=692864ea&is=6927136a&hm=f983efc1522be2f695630799c2bec26b00d317309e19c9d6d9e1a7dd8b0afb&=&format=webp&quality=lossless"
            ]
        },
        {
            "id": "car_048",
            "brand": "Kawazaki",
            "model": "ZX",
            "category": "motos",
            "price": 6500,
            "spawnCode": "kawagala",
            "images": [
                "https://media.discordapp.net/attachments/1293813114135117855/1442708643291070696/image.png?ex=692864e0&is=69271360&hm=971437a88130ab9ef4b05d09e1017a4b06cb2a864af68a7726163dd4553c3968&=&format=webp&quality=lossless",
                "https://media.discordapp.net/attachments/1293813114135117855/1442708643538800771/image.png?ex=692864e0&is=69271360&hm=3bbdec67c4e718392c050e053298b46d99428f6d89d0e6174b74083b57b99d65&=&format=webp&quality=lossless"
            ]
        }
    ],
    "houses": [
        {
            "id": "house_001",
            "type": "Mansión Moderna",
            "location": "Vinewood Hills",
            "price": 6500,
            "badge": "luxury",
            "images": [
                "https://media.discordapp.net/attachments/1425311490511998976/1435329092567171185/9.png?ex=692892e2&is=69274162&hm=50fbcbacdc0e8c5a8c6b32f486d39ae9a8098bbbee085050658d79f01b21e0c9&=&format=webp&quality=lossless&width=808&height=436",
                "http://static.photos/realestate/640x360/2"
            ]
        },
        {
            "id": "house_002",
            "type": "Apartamento",
            "location": "Downtown",
            "price": 6500,
            "badge": "premium",
            "images": [
                "http://static.photos/realestate/640x360/3"
            ]
        },
        {
            "id": "house_003",
            "type": "Casa de Playa",
            "location": "Vespucci Beach",
            "price": 6500,
            "badge": "luxury",
            "images": [
                "http://static.photos/realestate/640x360/4",
                "http://static.photos/realestate/640x360/5",
                "http://static.photos/realestate/640x360/6"
            ]
        }
    ],
    "businesses": [
        {
            "id": "business_001",
            "type": "Club Nocturno",
            "location": "Del Perro",
            "price": 6500,
            "badge": "exclusive",
            "images": [
                "http://static.photos/nightclub/640x360/1",
                "http://static.photos/nightclub/640x360/2"
            ]
        },
        {
            "id": "business_002",
            "type": "Concesionario",
            "location": "Pillbox Hill",
            "price": 6500,
            "badge": "premium",
            "images": [
                "http://static.photos/dealership/640x360/1"
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousels and load data
    loadCars();
    loadHouses();
    loadBusinesses();
    
    // Set up filter buttons
    setupFilters();
    
    // Initialize copy buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.copy-btn')) {
            const card = e.target.closest('.card');
            const spawnCode = card.dataset.spawnCode;
            copyToClipboard(spawnCode);
            showToast('¡Código copiado!');
        }
    });
});

function loadCars(filter = 'all') {
    const carGrid = document.getElementById('car-grid');
    carGrid.innerHTML = '';
    
    let carsToShow = data.cars;
    if (filter !== 'all') {
        carsToShow = data.cars.filter(car => car.category === filter);
    }
    
    carsToShow.forEach(car => {
        const carCard = createCarCard(car);
        carGrid.appendChild(carCard);
        
        // Initialize carousel for this card if multiple images
        if (car.images.length > 1) {
            initCarousel(carCard, car.images);
        }
    });
}

function loadHouses() {
    const houseGrid = document.getElementById('house-grid');
    houseGrid.innerHTML = '';
    
    data.houses.forEach(house => {
        const houseCard = createHouseCard(house);
        houseGrid.appendChild(houseCard);
        
        // Initialize carousel for this card if multiple images
        if (house.images.length > 1) {
            initCarousel(houseCard, house.images);
        }
    });
}

function loadBusinesses() {
    const businessGrid = document.getElementById('business-grid');
    businessGrid.innerHTML = '';
    
    data.businesses.forEach(business => {
        const businessCard = createBusinessCard(business);
        businessGrid.appendChild(businessCard);
        
        // Initialize carousel for this card if multiple images
        if (business.images.length > 1) {
            initCarousel(businessCard, business.images);
        }
    });
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = car.category;
    card.dataset.spawnCode = car.spawnCode;
    
    const badgeClass = car.category === 'superdeportivos' ? 'badge-luxury' : 
                      car.category === 'motos' ? 'badge-exclusive' : 'badge-premium';
    const badgeText = car.category === 'superdeportivos' ? 'Lujo' : 
                     car.category === 'motos' ? 'Exclusivo' : 'Premium';
    
    card.innerHTML = `
        <div class="card-img-container">
            ${car.images.map((img, index) => 
                `<img src="${img}" class="card-img ${index === 0 ? 'opacity-100' : 'opacity-0'}" data-index="${index}">`
            ).join('')}
            <div class="card-dots">
                ${car.images.map((_, index) => 
                    `<div class="card-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
                ).join('')}
            </div>
            <div class="absolute top-4 right-4">
                <span class="${badgeClass} badge">${badgeText}</span>
            </div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900">${car.brand}</h3>
                    <p class="text-gray-600">${car.model}</p>
                </div>
                <div class="copy-btn" title="Copiar código de spawn">
                    <i data-feather="copy" class="w-4 h-4"></i>
                </div>
            </div>
            <div class="mt-4 flex justify-between items-center">
                <span class="price">$${car.price.toLocaleString()}</span>
                <span class="text-sm text-gray-500">${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
            </div>
        </div>
    `;
    
    return card;
}

function createHouseCard(house) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const badgeClass = house.badge === 'luxury' ? 'badge-luxury' : 
                      house.badge === 'exclusive' ? 'badge-exclusive' : 'badge-premium';
    
    card.innerHTML = `
        <div class="card-img-container">
            ${house.images.map((img, index) => 
                `<img src="${img}" class="card-img ${index === 0 ? 'opacity-100' : 'opacity-0'}" data-index="${index}">`
            ).join('')}
            <div class="card-dots">
                ${house.images.map((_, index) => 
                    `<div class="card-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
                ).join('')}
            </div>
            <div class="absolute top-4 right-4">
                <span class="${badgeClass} badge">${house.badge.charAt(0).toUpperCase() + house.badge.slice(1)}</span>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900">${house.type}</h3>
            <p class="text-gray-600 mt-1">${house.location}</p>
            <div class="mt-4">
                <span class="price">$${house.price.toLocaleString()}</span>
            </div>
        </div>
    `;
    
    return card;
}

function createBusinessCard(business) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const badgeClass = business.badge === 'luxury' ? 'badge-luxury' : 
                      business.badge === 'exclusive' ? 'badge-exclusive' : 'badge-premium';
    
    card.innerHTML = `
        <div class="card-img-container">
            ${business.images.map((img, index) => 
                `<img src="${img}" class="card-img ${index === 0 ? 'opacity-100' : 'opacity-0'}" data-index="${index}">`
            ).join('')}
            <div class="card-dots">
                ${business.images.map((_, index) => 
                    `<div class="card-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`
                ).join('')}
            </div>
            <div class="absolute top-4 right-4">
                <span class="${badgeClass} badge">${business.badge.charAt(0).toUpperCase() + business.badge.slice(1)}</span>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-900">${business.type}</h3>
            <p class="text-gray-600 mt-1">${business.location}</p>
            <div class="mt-4">
                <span class="price">$${business.price.toLocaleString()}</span>
            </div>
        </div>
    `;
    
    return card;
}

function initCarousel(card, images) {
    const imgContainer = card.querySelector('.card-img-container');
    const imagesEl = card.querySelectorAll('.card-img');
    const dots = card.querySelectorAll('.card-dot');
    let currentIndex = 0;
    let interval;
    
    // Start carousel on hover
    imgContainer.addEventListener('mouseenter', () => {
        if (images.length > 1) {
            interval = setInterval(() => {
                nextImage();
            }, 2000);
        }
    });
    
    // Stop carousel on mouse leave
    imgContainer.addEventListener('mouseleave', () => {
        clearInterval(interval);
        resetToFirstImage();
    });
    
    function nextImage() {
        imagesEl[currentIndex].classList.remove('opacity-100');
        imagesEl[currentIndex].classList.add('opacity-0');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % images.length;
        
        imagesEl[currentIndex].classList.remove('opacity-0');
        imagesEl[currentIndex].classList.add('opacity-100');
        dots[currentIndex].classList.add('active');
    }
    
    function resetToFirstImage() {
        imagesEl[currentIndex].classList.remove('opacity-100');
        imagesEl[currentIndex].classList.add('opacity-0');
        dots[currentIndex].classList.remove('active');
        
        currentIndex = 0;
        
        imagesEl[currentIndex].classList.remove('opacity-0');
        imagesEl[currentIndex].classList.add('opacity-100');
        dots[currentIndex].classList.add('active');
    }
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-gradient-to-r', 'from-cyan-500', 'to-purple-500', 'text-white', 'shadow-lg', 'shadow-cyan-500/20');
                btn.classList.add('bg-white/80', 'backdrop-blur-sm', 'border', 'border-gray-200');
            });
            
            button.classList.add('active', 'bg-gradient-to-r', 'from-cyan-500', 'to-purple-500', 'text-white', 'shadow-lg', 'shadow-cyan-500/20');
            button.classList.remove('bg-white/80', 'backdrop-blur-sm', 'border', 'border-gray-200');
            
            // Filter cars
            const category = button.dataset.category;
            loadCars(category);
        });
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-show');
    
    setTimeout(() => {
        toast.classList.remove('toast-show');
        toast.classList.add('toast-hide');
        
        setTimeout(() => {
            toast.classList.add('hidden');
            toast.classList.remove('toast-hide');
        }, 300);
    }, 200);
}