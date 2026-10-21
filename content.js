window.TIBO = {
  "categories": [
    {
      "id": "character",
      "name": "人物与装备",
      "icon": "portrait",
      "description": "认识缇比，也认识她旅途中的小帮手。"
    },
    {
      "id": "flute",
      "name": "独角笛与阵石",
      "icon": "flute-icon",
      "description": "以笛声御刃，让六种阵石赋予曲子新的力量。"
    },
    {
      "id": "tree",
      "name": "神树与许愿",
      "icon": "seed",
      "description": "从一颗种子开始，慢慢长成一片家园。"
    },
    {
      "id": "home",
      "name": "家园设施",
      "icon": "base",
      "description": "温泉、农田、传送阵，和一些月下的小心愿。"
    },
    {
      "id": "material",
      "name": "材料与改装",
      "icon": "fragment1",
      "description": "宝石的碎片，和瓦格斯塔夫留下的小玩意。"
    },
    {
      "id": "food",
      "name": "专属料理",
      "icon": "food",
      "description": "田里的蔬菜，锅里的偏爱。"
    }
  ],
  "entries": [
    {
      "id": "character",
      "name": "缇比",
      "category": "character",
      "icon": "character",
      "summary": "一位喜欢和平、随身带着笛子的魔女。",
      "facts": [
        [
          "生命",
          "250"
        ],
        [
          "饥饿",
          "250"
        ],
        [
          "理智",
          "200"
        ],
        [
          "开局物品",
          "蔷薇独角笛 ×1"
        ]
      ],
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "普通武器伤害为 0.9 倍；穿戴护甲的护甲率减半，耐久消耗翻倍。",
            "每秒仅有一次生物攻击会造成生命损失。受击后移动加快，每次 +20%，最多叠加十层；各层在继续走过两块地皮后消退。",
            "非锅食物的正向恢复为 33%，锅料理为 66%。饥饿低于 100 时，饥饿消耗加快 20%。",
            "最爱大蔬丹。拖着一组非锅食物喂给自己，可以一次吃完。",
            "不会变成海盗猴，但每枚诅咒会削减三维上限、降低移速；超过十二枚还会周期性昏睡。"
          ]
        }
      ],
      "related": [
        "flute",
        "hat",
        "backpack",
        "food"
      ]
    },
    {
      "id": "flute",
      "name": "蔷薇独角笛",
      "category": "flute",
      "icon": "flute-icon",
      "summary": "将武器藏进笛中，以曲子驱使飞刃。",
      "recipe": "2 木头＋4 花瓣",
      "tech": "无需科技",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "缇比专用。打开笛子装入近战武器，发出攻击指令后站定演奏；移动会停止演奏。",
            "鼠标指定敌人可以集火，F 键恢复分散攻击。手持时右键自己可单纯奏乐。",
            "六种阵石各能融合一次，提升等级并赋予额外能力。满级另加 5 普通伤害和 5 位面伤害。",
            "可放入长矛、触手尖刺、暗夜剑、蝙蝠棒、铥矿棒、玻璃刀、亮茄剑、暗影战斧等武器；火腿棒、晨星锤、海带鞭不适用。笛子只能随身携带，不能放入背包或箱子。"
          ]
        },
        {
          "type": "table",
          "title": "等级成长",
          "headers": [
            "等级",
            "武器容量",
            "武器伤害"
          ],
          "rows": [
            [
              "1",
              "1",
              "75%"
            ],
            [
              "2",
              "2",
              "80%"
            ],
            [
              "3",
              "3",
              "85%"
            ],
            [
              "4",
              "4",
              "90%"
            ],
            [
              "5",
              "5",
              "95%"
            ],
            [
              "6",
              "6",
              "100%"
            ],
            [
              "7",
              "6",
              "105%"
            ]
          ]
        }
      ],
      "related": [
        "stone-dragonfire",
        "stone-technology",
        "stone-despair",
        "stone-shadow",
        "stone-monster",
        "stone-nature"
      ],
      "source": "开局携带一支，也可制作。",
      "art": "flute-rose"
    },
    {
      "id": "stone-dragonfire",
      "name": "龙火阵石",
      "category": "flute",
      "icon": "stone-dragonfire",
      "summary": "融入独角笛的力量。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "飞刃伤害提高 10%。",
            "用绿杖分解可获得：1 岩浆虫卵＋2 鳞片。"
          ]
        }
      ],
      "related": [
        "flute"
      ],
      "source": "龙蝇掉落。"
    },
    {
      "id": "stone-technology",
      "name": "科技阵石",
      "category": "flute",
      "icon": "stone-technology",
      "summary": "融入独角笛的力量。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "每把飞刃额外造成 10 点位面伤害。",
            "用绿杖分解可获得：1 瓦器人改装器。"
          ]
        }
      ],
      "related": [
        "flute"
      ],
      "source": "拾荒疯猪掉落。"
    },
    {
      "id": "stone-despair",
      "name": "绝望阵石",
      "category": "flute",
      "icon": "stone-despair",
      "summary": "融入独角笛的力量。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "正式起奏后的前 5 秒免疫击飞。",
            "用绿杖分解可获得：10 绝望石。"
          ]
        }
      ],
      "related": [
        "flute"
      ],
      "source": "梦魇疯猪掉落。"
    },
    {
      "id": "stone-shadow",
      "name": "暗影阵石",
      "category": "flute",
      "icon": "stone-shadow",
      "summary": "融入独角笛的力量。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "飞刃阻止影怪的受击瞬移，并使影怪、暗影洞穴猴减速 90%。",
            "用绿杖分解可获得：1 守护者之角。"
          ]
        }
      ],
      "related": [
        "flute"
      ],
      "source": "远古守护者掉落。"
    },
    {
      "id": "stone-monster",
      "name": "怪物阵石",
      "category": "flute",
      "icon": "stone-monster",
      "summary": "融入独角笛的力量。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "普通攻击不再打断演奏，仍会受伤。",
            "用绿杖分解可获得：15 蛛丝。"
          ]
        }
      ],
      "related": [
        "flute"
      ],
      "source": "蜘蛛女王掉落。"
    },
    {
      "id": "stone-nature",
      "name": "自然阵石",
      "category": "flute",
      "icon": "stone-nature",
      "summary": "融入独角笛的力量。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "手持独角笛时移速提高 30%。",
            "用绿杖分解可获得：8 活木。"
          ]
        }
      ],
      "related": [
        "flute"
      ],
      "source": "树人掉落。"
    },
    {
      "id": "seed",
      "name": "阿斯创神树种子",
      "category": "tree",
      "icon": "seed",
      "summary": "神树可以许愿吗？神树可以许愿！",
      "recipe": "3 种子",
      "tech": "无需科技",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "抱起种子，种在地面合适的土地上。培育为最终神树最快需要 20 分钟。",
            "整份世界最多拥有一株最终神树。向它献上五种许愿石，解锁能力，树荫也随之扩大：半径从 2 块地皮增至 9.5 块。"
          ]
        },
        {
          "type": "table",
          "title": "培育",
          "headers": [
            "阶段",
            "所需养料",
            "等待"
          ],
          "rows": [
            [
              "嫩芽 → 树苗",
              "无需",
              "5 分钟"
            ],
            [
              "树苗 → 雏形",
              "5 便便",
              "5 分钟"
            ],
            [
              "雏形 → 成熟树",
              "5 腐烂物",
              "5 分钟"
            ],
            [
              "成熟树 → 神树",
              "2 格罗姆粘液",
              "5 分钟"
            ]
          ]
        }
      ],
      "related": [
        "wish-wood",
        "wish-water",
        "wish-fire",
        "wish-wind",
        "wish-earth",
        "leaf"
      ]
    },
    {
      "id": "wish-wood",
      "name": "许愿石木",
      "category": "tree",
      "icon": "wish-wood",
      "summary": "让枝条也学会照料田园。",
      "recipe": "2 便便＋2 格罗姆粘液＋1 格罗姆翅膀",
      "tech": "一级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "神树会为树荫内的农田作物浇水、照料。施肥与收获仍交给你。"
          ]
        }
      ],
      "related": [
        "seed",
        "base"
      ]
    },
    {
      "id": "wish-water",
      "name": "许愿石水",
      "category": "tree",
      "icon": "wish-water",
      "summary": "在树荫里，躲过盛夏与骤雨。",
      "recipe": "1 疙瘩树种子",
      "tech": "一级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "树荫内人物体温最高保持在 55℃；人物与地面物品挡雨，神树挡雷，物品不再自燃。"
          ]
        }
      ],
      "related": [
        "seed",
        "base"
      ]
    },
    {
      "id": "wish-fire",
      "name": "许愿石火",
      "category": "tree",
      "icon": "wish-fire",
      "summary": "给神树一些木头，换一日暖意。",
      "recipe": "1 未开始孵化的岩浆虫卵＋10 冰＋10 灰烬",
      "tech": "二级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "神树获得可无限存放木头的格子。燃料充足时，树荫内人物体温最低保持在 20℃。"
          ]
        },
        {
          "type": "table",
          "title": "每日木头消耗",
          "headers": [
            "冬",
            "春",
            "秋",
            "夏"
          ],
          "rows": [
            [
              "4",
              "2",
              "1",
              "0（仍需存有木头）"
            ]
          ]
        }
      ],
      "related": [
        "seed",
        "base"
      ]
    },
    {
      "id": "wish-wind",
      "name": "许愿石风",
      "category": "tree",
      "icon": "wish-wind",
      "summary": "长夜有灯，也有循着笛声而来的精灵。",
      "recipe": "8 黄宝石＋3 蘑菇皮＋1 已充能火花柜＋20 月岩",
      "tech": "三级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "夜晚照亮树荫与外围，免除昏暗造成的理智损失；树荫内还可免受查理攻击。",
            "黄昏与夜晚会出现四种小精灵。和平演奏时，它们会围绕缇比起舞，也会追随落地漂浮的笛子。"
          ]
        }
      ],
      "related": [
        "seed",
        "base"
      ]
    },
    {
      "id": "wish-earth",
      "name": "许愿石土",
      "category": "tree",
      "icon": "wish-earth",
      "summary": "把一些不速之客留在家园之外。",
      "recipe": "20 绝望石＋1 骨甲＋8 绿宝石＋1 附生暗影心房",
      "tech": "三级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "阻止影怪与虚影在树荫内出现，驱离猎犬、亮茄等部分威胁。",
            "消除树荫内沙尘，让赃物袋、天体风暴避开家园；完全位于树荫内的地裂三日修复。",
            "绿杖分解可获得 2 绿宝石。"
          ]
        }
      ],
      "related": [
        "seed",
        "base"
      ]
    },
    {
      "id": "leaf",
      "name": "sol叶",
      "category": "tree",
      "icon": "leaf",
      "summary": "夜里落下的一份小礼物。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "神树每晚飘落，数量随天数和季节变化。采集后可获得草、树枝、绳子、芦苇或羽毛。"
          ]
        }
      ],
      "related": [
        "seed"
      ],
      "source": "最终神树夜间飘落。"
    },
    {
      "id": "hat",
      "name": "蔷薇帽",
      "category": "character",
      "icon": "hat-rose",
      "summary": "帽子里面似乎藏着太阳。",
      "recipe": "8 蜘蛛丝＋2 绳子＋1 橙宝石",
      "tech": "无需科技",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "缇比专用。每分钟恢复 6.66 理智，提供 120 隔热，无耐久。",
            "放入发光材料，夜晚与洞穴便能照明。帽内易腐材料保鲜 16 倍；荧光果、发光浆果与大型发光浆果分别每发光 90、360、960 秒消耗一个。",
            "放入启迪碎片或启迪之冠能获得更大光照；装有五颗天体宝珠的启迪之冠可以照得很远。",
            "已献风石的神树树荫内自动熄灯。可选择白蔷薇魔女帽外观，也可用清洁扫把切换。"
          ]
        }
      ],
      "related": [
        "wish-wind",
        "backpack"
      ]
    },
    {
      "id": "backpack",
      "name": "蔷薇背包",
      "category": "character",
      "icon": "backpack-rose",
      "summary": "装得下行囊，也装得下一点贪心。",
      "recipe": "2 铥矿＋4 猪皮＋2 齿轮＋4 金子",
      "tech": "无需科技",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "基础 16 格，前 4 格专放料理，保鲜 3 倍。",
            "给予 1 克劳斯的钥匙，扩充为 18 格；再给予 1 已充能火花柜，前 4 格开放存放其他物品，并保留保鲜效果。火花柜会变为空柜。",
            "可选择蔷薇花囊外观，也可用清洁扫把切换。"
          ]
        }
      ],
      "related": [
        "hat",
        "food"
      ]
    },
    {
      "id": "base",
      "name": "蔷薇基座",
      "category": "home",
      "icon": "base",
      "summary": "让一朵蔷薇，教会你更多造物。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "paragraph",
          "text": "缇比的专属科技设施，可升级至三级。"
        },
        {
          "type": "table",
          "title": "升级与解锁",
          "headers": [
            "等级",
            "建造／升级材料",
            "新增配方"
          ],
          "rows": [
            [
              "一级",
              "4 木头＋4 花瓣＋4 树枝＋1 电子元件",
              "彩虹宝石碎片与合成、许愿石木／水、小温泉"
            ],
            [
              "二级",
              "4 活木＋2 铥矿＋2 橙宝石",
              "许愿石火、两种传送阵、大型温泉"
            ],
            [
              "三级",
              "1 曼德拉草＋2 蜂王浆",
              "许愿石风／土、蔷薇耕地机"
            ]
          ]
        }
      ],
      "related": [
        "fragment1",
        "wish-wood",
        "pool-small",
        "pad"
      ]
    },
    {
      "id": "pool-small",
      "name": "魔女的温泉（小）",
      "category": "home",
      "icon": "pool-small",
      "summary": "将护甲交给泉水，再把防护带在身上。",
      "recipe": "2 活木＋2 木板＋2 花瓣",
      "tech": "一级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "缇比专用。投入身体护甲，连续泡浴 10 秒即可吸收，最多拥有三层防护；投入的装备会被消耗。",
            "吸收后保留原护甲率的 80%，不受缇比穿戴护甲减半的影响。多层按顺序消耗，不叠加护甲率。",
            "可投入草甲、木甲、大理石甲、暗夜甲、铥矿甲、鳞甲、蜗壳护甲、荆棘甲和镀金骑士胸甲。荆棘反伤、鳞甲防火、蜗壳缩壳等特殊能力可保留。"
          ]
        },
        {
          "type": "table",
          "title": "神树附近与远处",
          "headers": [
            "距神树树干",
            "泉内可存护甲",
            "保留投入时耐久"
          ],
          "rows": [
            [
              "4 块地皮内",
              "3 件",
              "90%"
            ],
            [
              "外侧",
              "1 件",
              "75%"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "树外小泉还可每 2 秒恢复 0.5 生命。温度图标左侧可查看、移除吸收层。"
        }
      ],
      "related": [
        "seed",
        "pool-large"
      ]
    },
    {
      "id": "pool-large",
      "name": "魔女的大型温泉",
      "category": "home",
      "icon": "pool-large",
      "summary": "一池暖水，留给一起生活的人。",
      "recipe": "基座：10 石头＋10 木头＋4 花瓣＋5 绳子；完工：10 铥矿＋5 活木＋3 奶奶的空漂流瓶＋10 月岩",
      "tech": "二级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "所有角色都能泡浴。投入原味大蔬丹补充泉水储备，供大家共享。",
            "神树树干周围 4 块地皮内效果更强，并可用水壶取水。"
          ]
        },
        {
          "type": "table",
          "title": "补给效果",
          "headers": [
            "位置",
            "每份大蔬丹补充",
            "泡浴时每秒恢复上限"
          ],
          "rows": [
            [
              "树旁",
              "100 饥饿＋30 理智储备",
              "20 饥饿、10 理智，另加 1.5 生命"
            ],
            [
              "树外",
              "80 饥饿＋20 生命储备",
              "缇比 6 饥饿，其他人 3 饥饿；4 生命"
            ]
          ]
        },
        {
          "type": "paragraph",
          "text": "恢复需要泉中仍有相应储备。两种温泉拆除都不返还材料。"
        }
      ],
      "related": [
        "food",
        "pool-small",
        "seed"
      ]
    },
    {
      "id": "pad",
      "name": "初级蔷薇传送阵",
      "category": "home",
      "icon": "pad",
      "summary": "让两处熟悉的地方，近一些。",
      "recipe": "1 沙之石＋4 电子元件＋4 齿轮＋1 橙宝石",
      "tech": "二级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "在同一层世界定点传送，每层最多 7 座。建造者可为阵命名并设置目的地，所有人都能使用。",
            "按距离消耗饥饿；饥饿不足时，依次用理智、生命补足。"
          ]
        },
        {
          "type": "note",
          "text": "三维不足以支付时，会掉下随身物品，并在本层随机陆地死亡。请留意状态再出发。"
        }
      ],
      "related": [
        "pad-advanced"
      ]
    },
    {
      "id": "pad-advanced",
      "name": "高级蔷薇传送阵",
      "category": "home",
      "icon": "pad-advanced",
      "summary": "把地面与洞穴，连成一段旅途。",
      "recipe": "3 沙之石＋2 橙宝石＋10 月岩＋1 海象牙",
      "tech": "二级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "地面与洞穴各建一座即可跨层传送，每层最多 1 座。每次固定消耗 100 饥饿。"
          ]
        },
        {
          "type": "note",
          "text": "饥饿不足 100 时，会掉下随身物品，并在出发层随机陆地死亡。"
        }
      ],
      "related": [
        "pad"
      ]
    },
    {
      "id": "plow",
      "name": "蔷薇耕地机",
      "category": "home",
      "icon": "plow",
      "summary": "在神树的庇护下，开一片好田。",
      "recipe": "5 木板＋6 绳子＋2 亮茄外壳＋2 纯粹辉煌",
      "tech": "三级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "4 次用途，只能在最终神树树荫内开垦蔷薇农田。",
            "不长杂草，作物自动满足家族与季节需求，成熟后不会过熟。",
            "水、肥与其他生长需求仍需照顾；献上许愿石木后，神树可帮忙浇水、照料。"
          ]
        }
      ],
      "related": [
        "seed",
        "wish-wood",
        "food"
      ]
    },
    {
      "id": "altar",
      "name": "月祀祭台",
      "category": "home",
      "icon": "altar",
      "summary": "向明晚的月亮，借一份礼物。",
      "recipe": "1 彩虹宝石＋4 玻璃碎片＋2 活木",
      "tech": "无需科技",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "夜晚在地面祈月，持续 5 秒，消耗 40 理智，使明晚成为满月。每次使用后冷却 4 天。",
            "先给予 1 噩梦燃料再祈月，明晚将变成黑月。若同一晚有多次祈愿，以最后一次为准。"
          ]
        }
      ],
      "related": [
        "fragment1",
        "fragment2",
        "fragment3"
      ]
    },
    {
      "id": "robot",
      "name": "瓦格斯塔夫机器人",
      "category": "home",
      "icon": "robot",
      "summary": "那个老头的东西，还能再好用一些。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "用瓦器人改装器升级瓦器人，工作半径扩大至 7.5 块地皮，续航增至 7 天，并具有防雨能力。",
            "在工作范围内，制作时可直接使用附近容器的材料与科技台的科技。",
            "改装后获得 1 张瓦器人制作图纸和 1 个瓦器人核心。学会图纸后，可用 5 齿轮＋5 废料＋1 核心制作新瓦器人。"
          ]
        }
      ],
      "related": [
        "upgrader",
        "core",
        "stone-technology"
      ],
      "source": "用瓦器人改装器升级瓦器人。"
    },
    {
      "id": "fragment1",
      "name": "彩虹宝石碎片1",
      "category": "material",
      "icon": "fragment1",
      "summary": "把散落的虹光，重新拼成宝石。",
      "recipe": "2 红宝石＋2 橙宝石",
      "tech": "一级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "三种碎片各 1 枚，可在一级蔷薇基座合成为 1 彩虹宝石。月祀祭台拆除时也会掉落碎片。"
          ]
        }
      ],
      "related": [
        "fragment2",
        "fragment3",
        "altar"
      ]
    },
    {
      "id": "fragment2",
      "name": "彩虹宝石碎片2",
      "category": "material",
      "icon": "fragment2",
      "summary": "把散落的虹光，重新拼成宝石。",
      "recipe": "2 蓝宝石＋2 黄宝石",
      "tech": "一级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "三种碎片各 1 枚，可在一级蔷薇基座合成为 1 彩虹宝石。月祀祭台拆除时也会掉落碎片。"
          ]
        }
      ],
      "related": [
        "fragment1",
        "fragment3",
        "altar"
      ]
    },
    {
      "id": "fragment3",
      "name": "彩虹宝石碎片3",
      "category": "material",
      "icon": "fragment3",
      "summary": "把散落的虹光，重新拼成宝石。",
      "recipe": "2 紫宝石＋2 绿宝石",
      "tech": "一级蔷薇基座",
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "三种碎片各 1 枚，可在一级蔷薇基座合成为 1 彩虹宝石。月祀祭台拆除时也会掉落碎片。"
          ]
        }
      ],
      "related": [
        "fragment1",
        "fragment2",
        "altar"
      ]
    },
    {
      "id": "upgrader",
      "name": "瓦器人改装器",
      "category": "material",
      "icon": "upgrader",
      "summary": "换一个盖子，多一些本事。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "可将瓦器人升级为瓦格斯塔夫机器人。"
          ]
        }
      ],
      "related": [
        "stone-technology",
        "robot",
        "core"
      ],
      "source": "用绿杖分解科技阵石获得。"
    },
    {
      "id": "core",
      "name": "瓦器人核心",
      "category": "material",
      "icon": "core",
      "summary": "被换下来的顶盖，还有用武之地。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "学会瓦器人制作图纸后，可用 5 齿轮＋5 废料＋1 核心制作瓦器人。"
          ]
        }
      ],
      "related": [
        "upgrader",
        "robot"
      ],
      "source": "成功改装瓦器人时获得。"
    },
    {
      "id": "food",
      "name": "大蔬丹",
      "category": "food",
      "icon": "food",
      "summary": "把田里的庄稼烩在一起，搅拌，再搅拌。",
      "recipe": null,
      "tech": null,
      "blocks": [
        {
          "type": "bullets",
          "rows": [
            "满足蔬菜杂烩配方，且原料不含蘑菇、石果时，烹饪得到大蔬丹。",
            "保质期 15 天；原味大蔬丹是缇比最爱的料理，也可为大型温泉补充储备。"
          ]
        },
        {
          "type": "table",
          "title": "新鲜原味大蔬丹",
          "headers": [
            "食用者",
            "生命",
            "饥饿",
            "理智"
          ],
          "rows": [
            [
              "缇比",
              "30",
              "60",
              "15"
            ],
            [
              "其他角色",
              "13",
              "50",
              "5"
            ]
          ]
        }
      ],
      "related": [
        "pool-large",
        "plow",
        "character"
      ],
      "source": "料理锅烹饪。"
    }
  ],
  "settings": [
    [
      "蔷薇帽消耗",
      "有",
      "选“无”后不再因照明消耗荧光果、大小发光浆果。"
    ],
    [
      "魔女饿不饿",
      "特别饿",
      "选“一般饿”后，非锅食物、锅料理的正向恢复分别提高至 60%、80%。"
    ],
    [
      "缇比的头硬不硬？",
      "不硬",
      "选“稍微硬一点”后，头部护甲保留 85% 护甲率，耐久消耗为 1.3 倍。"
    ],
    [
      "笛子",
      "自己打造的笛子",
      "选“前辈留传下来的笛子”后，新人物携带满级独角笛。"
    ]
  ]
};
