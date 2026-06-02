const _GUIDES_P2 = [
  {
    id: 'hollow-knight',
    title: '空洞骑士',
    desc: '112% 完成度路线、全 Boss 难度分级、护符 40 槽 Build 与「丝之歌」前必做清单。',
    category: 'indie',
    cover: STEAM_HERO(367520),
    hot: 68900,
    updated: '2026-05-22',
    tags: ['独立', 'Metroidvania', '魂系', 'Team Cherry'],
    chapters: [
      {
        id: 'progression',
        title: '推荐推进路线与能力解锁',
        content: `
          <p>《空洞骑士》采用非线性 Metroidvania 结构，能力解锁顺序直接决定你能探索的区域范围。首周目建议按「十字路 → 苍绿之径 → 真菌荒地 → 泪水之城 → 水晶山峰 → 深邃巢穴 → 王国边缘 → 王后花园 → 白色宫殿 → 空洞骑士」的主线推进，同时穿插收集地图、护符与 Geo，避免后期回头跑图效率过低。每获得一项关键能力，务必先回十字路存档点确认地图更新，再规划下一目标区域。</p>
          <h3>核心能力解锁表</h3>
          <table class="data-table">
            <thead><tr><th>能力</th><th>获取位置</th><th>解锁内容</th><th>优先级</th></tr></thead>
            <tbody>
              <tr><td>蛾翼披风（冲刺）</td><td>Greenpath  Hornet 1 战后</td><td>地面冲刺、部分平台跳跃</td><td>★★★★★</td></tr>
              <tr><td>螳螂爪（蹬墙跳）</td><td>Mantis Village 左部</td><td>蹬墙跳、垂直探索</td><td>★★★★★</td></tr>
              <tr><td>水晶之心（超级冲刺）</td><td>Crystal Peak 顶部</td><td>长距离冲刺、Breakable 墙</td><td>★★★★☆</td></tr>
              <tr><td>帝王之翼（二段跳）</td><td>Ancient Basin 左下</td><td>二段跳、高台探索</td><td>★★★★☆</td></tr>
              <tr><td>梦之钉</td><td>Resting Grounds</td><td>梦境 Boss、Secrets</td><td>★★★★☆</td></tr>
              <tr><td>伊思玛的眼泪（酸泳）</td><td>Blue Lake 底部</td><td>酸液区域、Isma's Grove</td><td>★★★☆☆</td></tr>
              <tr><td>阴影斗篷（暗影冲刺）</td><td>White Palace 前</td><td>穿越危险区域、部分捷径</td><td>★★★☆☆</td></tr>
            </tbody>
          </table>
          <h3>首周目推荐探索顺序（0-40 小时）</h3>
          <ol>
            <li><strong>Forgotten Crossroads</strong>：击败 Gruz Mother、False Knight，购买地图与基础护符槽</li>
            <li><strong>Greenpath</strong>：击败 Hornet 1 获取冲刺，探索左部获取 Mantis Claw 前置</li>
            <li><strong>Fungal Wastes</strong>：获取 Mantis Claw，解锁 Mantis Village 与 City of Tears 入口</li>
            <li><strong>City of Tears</strong>：升级骨钉、购买 Soul Catcher 等关键护符，挑战 Soul Master</li>
            <li><strong>Crystal Peak</strong>：获取 Crystal Heart，挑战 Crystal Guardian</li>
            <li><strong>Deepnest + Kingdom's Edge</strong>：获取 Monarch Wings，挑战 Hornet 2</li>
            <li><strong>White Palace + Hollow Knight</strong>：完成主线，解锁 The Radiance 可选挑战</li>
          </ol>
          <div class="tip-box">
            <strong>💡 跑图效率技巧</strong>
            <p>购买 Cornifer 地图后，优先解锁各区域 Stag Station 快速旅行。泪水之城的 Stag Station 是全局枢纽，建议尽早解锁。灯笼（1800 Geo）在 Deepnest 和 Crystal Peak 几乎必备，否则视野极差且容易迷路。若 Geo 不足，可先在 Colosseum of Fools 刷 Trial of the Warrior 赚取 2500 Geo/次。</p>
          </div>
          <div class="warn-box">
            <strong>⚠️ 不可逆警告</strong>
            <p>击败 Hollow Knight 或 Radiance 后将触发结局并锁定当前存档（除非使用 Bench 回档）。若计划追求 112% 完成度，务必在最终战前完成：全护符收集、全钉子/法术升级、四 Pantheon 挑战、Grimm Troupe DLC 全内容。漏做任意一项将无法达成 112%。</p>
          </div>
        `
      },
      {
        id: 'charms',
        title: '护符 Build 大全与 40 槽配置',
        content: `
          <p>护符（Charms）是《空洞骑士》Build 系统的核心，共 40 个护符槽位可通过 Notch 升级解锁。Notch 总量固定为 11，不同护符消耗 1-4 Notch，合理搭配是 Boss 战与探索效率的关键。首周目 Notch 有限时，优先购买护符槽（Salubra 处 4 次升级）而非囤积 Geo。以下按场景分类推荐 Build，所有配置均基于 Notch 11 满槽假设。</p>
          <h3>探索/跑图 Build（Notch 5）</h3>
          <table class="data-table">
            <thead><tr><th>护符</th><th>Notch</th><th>效果</th><th>说明</th></tr></thead>
            <tbody>
              <tr><td>Wayward Compass</td><td>1</td><td>显示当前区域地图位置</td><td>新手必备，后期可替换</td></tr>
              <tr><td>Grubsong</td><td>1</td><td>受伤时获得 15 Soul</td><td>探索续航，配合 Hiveblood 更佳</td></tr>
              <tr><td>Stalwart Shell</td><td>2</td><td>受伤后无敌帧延长</td><td>降低探索死亡率</td></tr>
              <tr><td>Hiveblood</td><td>2</td><td>缓慢自动回血</td><td>Deepnest 等危险区域神器</td></tr>
              <tr><td>Sprintmaster</td><td>1</td><td>冲刺速度 +20%</td><td>跑图效率提升明显</td></tr>
            </tbody>
          </table>
          <h3>Boss 战通用 Build（Notch 11）</h3>
          <table class="data-table">
            <thead><tr><th>护符</th><th>Notch</th><th>效果</th><th>适用 Boss</th></tr></thead>
            <tbody>
              <tr><td>Quick Slash</td><td>3</td><td>攻击速度 +54%</td><td>几乎所有 Boss</td></tr>
              <tr><td>Unbreakable Strength</td><td>3</td><td>攻击力 +50%</td><td>输出核心，死亡不破碎</td></tr>
              <tr><td>Longnail</td><td>2</td><td>攻击范围 +25%</td><td>安全距离输出</td></tr>
              <tr><td>Mark of Pride</td><td>3</td><td>范围 +25%，需 Longnail</td><td>与 Longnail 叠加</td></tr>
              <tr><td>Shaman Stone</td><td>3</td><td>法术伤害 +33%</td><td>Spell 流 Build 核心</td></tr>
            </tbody>
          </table>
          <p><strong>辐光（Absolute Radiance）专用 Build</strong>：Quick Slash + Unbreakable Strength + Mark of Pride + Longnail + Fragile/Unbreakable Heart + Joni's Blessing（可选，换血策略）+ Shape of Unn（减伤）+ Spell Twister + Shaman Stone。核心思路：最大化 DPS 的同时利用 Joni's Blessing 将 HP 换为更多护符槽，配合 Spell 爆发快速压阶段。</p>
          <div class="tip-box">
            <strong>💡 护符获取优先级</strong>
            <p>必买顺序：Wayward Compass &gt; Grubsong &gt; Soul Catcher &gt; Quick Slash &gt; Longnail &gt; Mark of Pride &gt; Unbreakable Strength。Fragile 护符（Strength/Heart/Greed）首周目可用，死亡破碎后需找 Leg Eater 修复（Geo 消耗递增）。Unbreakable 系列需通过 Divine 购买，二周目或 112% 路线必备。</p>
          </div>
        `
      },
      {
        id: 'boss-tier',
        title: 'Boss 难度分级与打法要点',
        content: `
          <p>《空洞骑士》Boss 战难度跨度极大，从 False Knight 的教学战到 Absolute Radiance 的极限挑战。以下按 S/A/B/C 四级分类，并附各 Boss 核心机制与推荐策略。分类基于：招式密度、容错窗口、学习曲线、装备依赖度四个维度综合评估。</p>
          <h3>难度分级总表</h3>
          <table class="data-table">
            <thead><tr><th>等级</th><th>Boss 名称</th><th>核心难点</th><th>推荐护符 Build</th></tr></thead>
            <tbody>
              <tr><td>S</td><td>Absolute Radiance</td><td>三阶段、平台消失、光球弹幕</td><td>输出最大化 + Spell 爆发</td></tr>
              <tr><td>S</td><td>Pure Vessel</td><td>零容错、招式连贯、Pantheon 5 压轴</td><td>Quick Slash + Strength 标准输出</td></tr>
              <tr><td>A</td><td>Nightmare King Grimm</td><td>弹幕密度极高、节奏变化多</td><td>Spell 流或高输出物理</td></tr>
              <tr><td>A</td><td>Radiance（普通）</td><td>二阶段平台战、光球追踪</td><td>标准 Boss Build</td></tr>
              <tr><td>B</td><td>Hornet 2</td><td>冲刺预判、丝线束缚</td><td>探索 Build 即可</td></tr>
              <tr><td>B</td><td>Mantis Lords</td><td>三螳螂连击、节奏熟悉</td><td>Grubsong + 回血护符</td></tr>
              <tr><td>C</td><td>False Knight</td><td>教学 Boss，熟悉闪避</td><td>任意</td></tr>
            </tbody>
          </table>
          <h3>重点 Boss 机制拆解</h3>
          <p><strong>Hornet 1（Greenpath）</strong>：攻击模式为冲刺 → 上挑 → 空中下砸。保持中距离，冲刺后 0.5 秒硬直可输出 2-3 刀。二阶段增加丝线束缚，被束缚时按攻击键可挣脱并造成额外伤害。推荐：Grubsong 受伤回 Soul，快速 Focus 回血。</p>
          <p><strong>Soul Master（City of Tears）</strong>：一阶段法术弹幕为主，二阶段 Soul Master 本体脱离法杖，攻击频率翻倍。核心：二阶段开始时法杖落地有 2 秒硬直，全力输出。Spell 流（Shaman Stone + Spell Twister）可大幅缩短战斗时间。</p>
          <p><strong>Absolute Radiance</strong>：三阶段分别为地面战、半平台战、纯平台战。一阶段熟悉 Radiance 基础招式；二阶段平台部分消失，需利用剩余平台走位；三阶段仅 3 个小平台，光球追踪 + 激光扫射，必须 Spell 爆发压阶段或完美闪避每一个窗口。建议练习 50+ 次再挑战，Pantheon 5 中位于第 42 场，疲劳度极高。</p>
          <div class="warn-box">
            <strong>⚠️ Pantheon 5 警告</strong>
            <p>Pantheon 5（五门）需连续击败 42 个 Boss，中间不可存档、不可使用 Bench。Pure Vessel 与 Absolute Radiance 为最后两场，此时已战斗 40+ 分钟，体力与注意力均达极限。建议：先单独练习 Radiance 至稳定击败，再挑战完整 Pantheon 5；挑战前确保充分休息，避免疲劳导致前功尽弃。</p>
          </div>
        `
      },
      {
        id: '112-percent',
        title: '112% 完成度清单与路线规划',
        content: `
          <p>112% 完成度是《空洞骑士》的最高成就标准，需在标准 100% 基础上完成 Godmaster DLC 的 Pantheon 1-4 及 Pantheon 5（五门）。完成度计算包含：全 Boss（含 Dream Boss、Grimm、Godmaster）、全护符、全法术/钉子升级、全 Stag Station、全 Grub、全 Hunter's Journal 条目等。以下按模块列出清单与推荐完成顺序。</p>
          <h3>112% 完成度模块清单</h3>
          <table class="data-table">
            <thead><tr><th>模块</th><th>数量</th><th>完成条件</th><th>预计耗时</th></tr></thead>
            <tbody>
              <tr><td>主线 Boss</td><td>1</td><td>击败 Hollow Knight 或 Radiance</td><td>20-30h</td></tr>
              <tr><td>Dream Boss</td><td>3</td><td>Lost Kin、Broken Vessel、Failed Champion</td><td>+2h</td></tr>
              <tr><td>Grimm Troupe</td><td>1</td><td>Nightmare King Grimm</td><td>+5h</td></tr>
              <tr><td>Pantheon 1-4</td><td>4</td><td>各 Pantheon 通关</td><td>+10h</td></tr>
              <tr><td>Pantheon 5</td><td>1</td><td>五门 42 Boss 连战</td><td>+20h 练习</td></tr>
              <tr><td>全护符</td><td>40</td><td>含 Unbreakable、Fragile 修复</td><td>+5h</td></tr>
              <tr><td>全升级</td><td>—</td><td>钉子 4 级、法术 3 级、Notch 11</td><td>+3h</td></tr>
            </tbody>
          </table>
          <h3>推荐 112% 路线（首周目 100% + 二周目 112%）</h3>
          <ol>
            <li>首周目：主线 + 全探索 + 全护符 + 全升级，击败 Radiance 解锁结局 3</li>
            <li>Godmaster 入口：King's Edge 新增入口，完成 Pantheon 1-4 解锁 Pantheon 5</li>
            <li>Grimm Troupe：Greenpath 左侧新增帐篷，完成 Grimm 线至 Nightmare King</li>
            <li>Pantheon 5 练习：单独练习 Pure Vessel、Absolute Radiance，再挑战完整五门</li>
          </ol>
          <div class="tip-box">
            <strong>💡 五门练习技巧</strong>
            <p>Pantheon 5 允许在 Godhome 内单独练习任意 Boss（需先在该 Pantheon 中击败过）。建议练习顺序：Radiance &gt; Pure Vessel &gt; Nightmare King Grimm &gt; 其他高难 Boss。练习时使用与正式挑战相同的护符 Build，形成肌肉记忆。正式挑战时准备 2-3 小时 uninterrupted 时间，中途暂停可退出但进度不保存。</p>
          </div>
        `
      },
      {
        id: 'geo-farm',
        title: 'Geo 刷取与商店购买优先级',
        content: `
          <p>Geo 是《空洞骑士》的主要货币，用于购买地图、护符、护符槽、钉子升级、钥匙等。全收集 + 全升级预计消耗 15000+ Geo，而主线流程自然获取约 8000-10000 Geo，缺口需通过刷怪或 Colosseum 补足。以下列出高效刷 Geo 方法与商店购买优先级。</p>
          <h3>Geo 刷取方法对比</h3>
          <table class="data-table">
            <thead><tr><th>方法</th><th>位置</th><th>收益</th><th>效率</th><th>备注</th></tr></thead>
            <tbody>
              <tr><td>Colosseum Trial of the Warrior</td><td>City of Tears 右侧</td><td>2500 Geo/次</td><td>★★★★★</td><td>需 875 Geo 入场，净赚 1625</td></tr>
              <tr><td>Colosseum Trial of the Conqueror</td><td>同上</td><td>5000 Geo/次</td><td>★★★★☆</td><td>难度更高，需一定装备</td></tr>
              <tr><td>Deepnest 刷怪</td><td>Deepnest 各区域</td><td>50-200 Geo/怪</td><td>★★★☆☆</td><td>需 Lantern，危险度高</td></tr>
              <tr><td>Kingdom's Edge 刷怪</td><td>王国边缘</td><td>100-300 Geo/怪</td><td>★★★★☆</td><td>推荐，相对安全</td></tr>
              <tr><td>Grimm Troupe 刷 Geo</td><td>Grimm 帐篷内</td><td>500 Geo/次</td><td>★★☆☆☆</td><td>需完成 Grimm 线</td></tr>
            </tbody>
          </table>
          <h3>商店购买优先级（Salubra / 其他）</h3>
          <ol>
            <li><strong>护符槽 ×4</strong>（Salubra）：共 4 次升级，每次 +1 Notch，优先于一切</li>
            <li><strong>灯笼</strong>（1800 Geo，Sly 或 Cornifer 处）：Deepnest/Crystal Peak 必备</li>
            <li><strong>关键护符</strong>：Soul Catcher、Quick Slash、Longnail、Mark of Pride</li>
            <li><strong>地图</strong>：各区域 Cornifer 地图，50-75 Geo/张</li>
            <li><strong>钉子升级 ×4</strong>：Nailsmith 处，逐级升级，最后两级需 Pale Ore</li>
            <li><strong>钥匙</strong>：Simple Key ×4，用于 Stag Station、Grub 等</li>
          </ol>
          <div class="warn-box">
            <strong>⚠️ Geo 浪费警告</strong>
            <p>避免过早购买 Fragile 护符（Strength/Heart/Greed）若尚未熟悉死亡机制——Fragile 死亡破碎后修复成本递增。首周目优先 Unbreakable 系列（需 Divine）或普通护符。Rancid Egg 可交给 Divine 换取 Geo，但全收集需保留部分 Egg 完成 Hunter's Journal。</p>
          </div>
        `
      },
      {
        id: 'dream-nail',
        title: '梦之钉与梦境 Boss 攻略',
        content: `
          <p>梦之钉（Dream Nail）在 Resting Grounds 获取，是探索 Hidden 内容、Dream Boss 及 112% 完成度的关键道具。Dream Nail 可对 NPC、Corpse、特定物体使用，获取 Lore、Essence 或触发 Dream Boss 战。Essence 用于升级 Dream Nail（1/2/3 级），升级后伤害与功能增强。全 Essence 收集约 2400 点，升级需 100/200/400/700 共 1400，剩余可用于其他用途。</p>
          <h3>Dream Boss 一览</h3>
          <table class="data-table">
            <thead><tr><th>Boss</th><th>位置</th><th>原 Boss</th><th>难度变化</th><th>奖励</th></tr></thead>
            <tbody>
              <tr><td>Lost Kin</td><td>Broken Vessel 处</td><td>Broken Vessel</td><td>更快、更多小怪</td><td>400 Essence</td></tr>
              <tr><td>Failed Champion</td><td>False Knight 处</td><td>False Knight</td><td>无倒地阶段</td><td>400 Essence</td></tr>
              <tr><td>Soul Tyrant</td><td>Soul Master 处</td><td>Soul Master</td><td>更快、更 aggressive</td><td>400 Essence</td></tr>
              <tr><td>White Defender</td><td>White Palace 入口</td><td>Dung Defender</td><td>五战升级</td><td>Essence + 对话</td></tr>
              <tr><td>Grimm</td><td>Grimm 帐篷</td><td>—</td><td>Grimm Troupe 线</td><td>Grimmchild 护符</td></tr>
            </tbody>
          </table>
          <h3>Essence 高效收集路线</h3>
          <p>优先完成 Dream Boss（各 400 Essence），其次 Whispering Root（各 100-200 Essence），最后 Scattered Essence 与 NPC Dream Nail 对话。Resting Grounds 的 Essence 容器、Queen's Gardens 的 Hidden 区域、Path of Pain（White Palace 内）含大量 Essence。Path of Pain 为可选高难平台关卡，奖励 500 Essence 与 Hunter's Journal 条目，112% 非必须但推荐完成。</p>
          <div class="tip-box">
            <strong>💡 Dream Nail 战斗技巧</strong>
            <p>Dream Boss 战机制与原 Boss 相似但强化，推荐相同护符 Build。Lost Kin 需优先清理小怪避免被围攻；Soul Tyrant 二阶段节奏更快，Spell 流更有效；White Defender 共五战，每战难度递增，第五战后可获得特殊对话与 Essence。Dream Nail 对敌人使用可偷取 Soul，Boss 战前可先 Dream Nail 满 Soul 再开战。</p>
          </div>
        `
      },
      {
        id: 'pantheon',
        title: '万神殿（Pantheon）完全攻略',
        content: `
          <p>Godmaster DLC 的 Pantheon 系统是 112% 完成度的核心，共 5 个 Pantheon，每个包含若干 Boss 连战。Pantheon 1-4 可存档退出，Pantheon 5（五门）不可中断。Godhome 入口位于 King's Edge，完成任意 Pantheon 后解锁更多内容。以下详述各 Pantheon Boss 列表、难度曲线与五门练习策略。</p>
          <h3>Pantheon Boss 数量与难度</h3>
          <table class="data-table">
            <thead><tr><th>Pantheon</th><th>Boss 数</th><th>压轴 Boss</th><th>难度</th><th>预计耗时</th></tr></thead>
            <tbody>
              <tr><td>Pantheon 1</td><td>5</td><td>Gruz Mother → Hornet 1</td><td>入门</td><td>5 分钟</td></tr>
              <tr><td>Pantheon 2</td><td>10</td><td>Collector → Oblobbles</td><td>简单</td><td>10 分钟</td></tr>
              <tr><td>Pantheon 3</td><td>17</td><td>Enraged Guardian → Grey Prince Zote</td><td>中等</td><td>20 分钟</td></tr>
              <tr><td>Pantheon 4</td><td>26</td><td>Lost Kin → Nightmare King Grimm</td><td>困难</td><td>35 分钟</td></tr>
              <tr><td>Pantheon 5</td><td>42</td><td>Pure Vessel → Absolute Radiance</td><td>极限</td><td>45-60 分钟</td></tr>
            </tbody>
          </table>
          <h3>五门（Pantheon 5）Boss 顺序（第 38-42 场）</h3>
          <p>第 38 场：Markoth | 第 39 场：Watcher Knights | 第 40 场：Soul Master | 第 41 场：Pure Vessel | 第 42 场：Absolute Radiance。Pure Vessel 与 Radiance 为全游戏最高难，此时已连续战斗 40+ 分钟，建议：前 37 场使用「保守 Build」节省注意力，最后 5 场切换「Radiance 专用 Build」；若在第 41 场 Pure Vessel 失败，需从第 1 场重开，因此 Pure Vessel 单独练习至 90%+ 胜率再挑战五门。</p>
          <div class="warn-box">
            <strong>⚠️ 五门心理准备</strong>
            <p>五门平均尝试次数 50-200 次，顶尖玩家亦需 20+ 次。失败是常态，每次失败总结：死于哪一 Boss、何种招式、护符是否合适。避免 Tilt（连输后强开），连输 3 次建议休息。成功五门后可获得「Embrace the Void」成就及特殊结局动画，为《丝之歌》前最硬核挑战。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'valorant',
    title: '无畏契约',
    desc: '12.09 版本 Agent Tier 榜、全地图默认点位、经济局决策树与 Aim Lab 练枪计划。',
    category: 'multiplayer',
    cover: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/c07f29d903296e00ab9462d7515d7b8d38f53903-1920x1080.jpg',
    hot: 81200,
    updated: '2026-06-01',
    tags: ['FPS', '竞技', '联机', 'Riot'],
    chapters: [
      {
        id: 'agents',
        title: '12.09 版本 Agent Tier 榜与角色详解',
        content: `
          <p>《无畏契约》12.09 版本 Meta 以 Jett、Omen、Sova 为核心，决斗者位 Jett/Raze 双雄争霸，控场 Omen 烟雾灵活性碾压 Brimstone，先锋 Sova 信息获取仍为 T0。以下按角色类型分梯队，并附各 Agent 核心技巧与地图适配度。Tier 评估基于：竞技模式出场率、胜率、职业赛场选取率、版本 Patch 影响四维综合。</p>
          <h3>Agent Tier 总表（12.09）</h3>
          <table class="data-table">
            <thead><tr><th>梯队</th><th>决斗者</th><th>控场者</th><th>先锋</th><th>守卫</th></tr></thead>
            <tbody>
              <tr><td>S</td><td>Jett、Raze</td><td>Omen</td><td>Sova</td><td>Sage</td></tr>
              <tr><td>A</td><td>Reyna、Neon、Yoru</td><td>Brimstone、Astra</td><td>Breach、Fade</td><td>Cypher、Killjoy</td></tr>
              <tr><td>B</td><td>Phoenix、Iso</td><td>Viper、Harbor</td><td>KAY/O、Gekko</td><td>Chamber、Deadlock</td></tr>
              <tr><td>C</td><td>—</td><td>Clove</td><td>Skye</td><td>—</td></tr>
            </tbody>
          </table>
          <h3>S 级 Agent 核心技巧</h3>
          <p><strong>Jett</strong>：Updraft + Operator 非常规架枪是 Ascent/Bind 标配；Cloudburst 贴墙可制造单向烟，防守 A 大/ B 长神器；Dash 可取消后摇（Dash 后立刻切刀/切枪），减少 0.3 秒 vulnerability。Tailwind 用于 reposition 而非纯逃跑，配合 Updraft 可上 High Ground 打 Angle。</p>
          <p><strong>Omen</strong>：Paranoia 穿墙致盲，Push 时先 Paranoia 再 Smoke；Dark Cover 可 Smoke 后 TP 到烟内制造 Fake；From the Shadows TP 有 2 秒 cast，需 Pre-aim TP 落点。Split Push 时 Omen 可 Smoke 一条 Lane 后 TP 到另一侧，打乱防守 Rotation。</p>
          <p><strong>Sova</strong>：Recon Bolt 需 Pre-aim 常用 Angle（如 Ascent A 大、Haven C 长）；Owl Drone 标记 + 队友 Follow-up 是 Free Kill 来源；Shock Dart 可清 Corner、打断 Defuse。Post-plant 时 Sova 箭 + Shock 组合可 Delay 10+ 秒，为 Rotate 争取时间。</p>
          <div class="tip-box">
            <strong>💡 角色池建议</strong>
            <p>竞技模式建议主练 2 决斗 + 1 控场 + 1 先锋 + 1 守卫，共 5 角色。低段位（铁银）可专精 Jett/Reyna 练枪；黄金铂金需补 Omen/Sova 提升 Map Control；钻石以上需 3 角色池应对 Ban Pick 与 Map 适配。避免「只会 Jett」—— Bind/Haven 等地图 Jett 选取率下降，需 Raze/Neon 替补。</p>
          </div>
        `
      },
      {
        id: 'maps',
        title: '全地图默认点位与控图策略',
        content: `
          <p>《无畏契约》每张地图有独特的 Choke Point、Default Plant 点与 Rotation 路线。掌握 Default 烟雾、Flash 点位与 Post-plant 站位是上分基础。以下按地图详述 T/CT 两侧 Default 配置、常见 Rush 与 Retake 策略，适用于 Unrated 至 Immortal 段位。</p>
          <h3>主流地图 Default 配置</h3>
          <table class="data-table">
            <thead><tr><th>地图</th><th>T Default</th><th>CT Default</th><th>关键 Choke</th></tr></thead>
            <tbody>
              <tr><td>Bind</td><td>A 短烟 + 澡堂烟，B 长烟 + 窗口烟</td><td>A 短 + B 长双控，留 1 人 Mid</td><td>Teleporter、Hookah</td></tr>
              <tr><td>Ascent</td><td>Mid 控图 + B 大 Default，A 大 Slow Push</td><td>Mid Cat + B 大 Op 架枪</td><td>Mid Market、B Main</td></tr>
              <tr><td>Haven</td><td>C 长控 + A 短 Rush 二选一</td><td>3-2 或 2-1-2 分散</td><td>Garage、A Long</td></tr>
              <tr><td>Split</td><td>Mid 控 B 或 A，Ropes 利用</td><td>Mid Mail + Vent 交叉</td><td>Mid Ropes、A Ramp</td></tr>
              <tr><td>Icebox</td><td>A 管 + B 黄 Default</td><td>A 管 Op + B 黄 Smoke</td><td>A Tube、B Yellow</td></tr>
              <tr><td>Lotus</td><td>A Main + C Mound 双 Push</td><td>A Main Smoke + C 控 Root</td><td>A Door、C Mound</td></tr>
            </tbody>
          </table>
          <h3>分地图控图要点</h3>
          <p><strong>Bind</strong>：T 方 Teleporter 可 Fake B 打 A，需 CT 留 1 人 Mid 防 Info。A 短 Smoke 后 Flash 进，澡堂 Smoke 封 CT Rotation。Post-plant A 时 Default 站 Teleporter 侧，防 Retake 从 Hookah 来。</p>
          <p><strong>Ascent</strong>：Mid 控制是核心，Jett Updraft 抢 Mid Cat 可 Early Pick。B 大 Default 需 2 Smoke（Market + CT），Slow Push 配合 Sova 箭清 Angle。CT 方 B 大 Op 架 Market 窗是经典点位，Pre-aim Head Level。</p>
          <p><strong>Haven</strong>：三点位地图 Rotation 压力大，T 方 C 长控 + A 短 Rush 可分散 CT。C 长 Smoke 后 Default 2-3 人，A 短 1-2 人 Fake。CT 方 3-2 配置（3 人 A/C，2 人 B）或 2-1-2 灵活轮换。</p>
          <div class="warn-box">
            <strong>⚠️ 常见错误</strong>
            <p>避免「全员 Rush 一点」无 Smoke/Flash—— 低段位常见 5 人 B Long Rush 被 Op 架死。Default 需至少 2 Smoke + 1 Flash，且有人 Mid 防 Rotation。Post-plant 勿全员找 Kill，留 1 人看 Defuse 角度；Spike 40 秒倒计时内 CT Retake 有 Advantage，T 方需 Crossfire 站位。</p>
          </div>
        `
      },
      {
        id: 'economy',
        title: '经济局决策树与购买策略',
        content: `
          <p>《无畏契约》经济系统决定每回合购买能力，正确 Eco/Force/Save 决策是竞技上分的关键。团队经济需协调：5 人 Full Buy 优于 2 人 Full + 3 人 Eco。以下按存款区间给出决策树，并附 Force Buy 与 Bonus Round 策略。</p>
          <h3>经济决策表（按个人存款）</h3>
          <table class="data-table">
            <thead><tr><th>存款</th><th>决策</th><th>推荐购买</th><th>团队配合</th></tr></thead>
            <tbody>
              <tr><td>0-800</td><td>Full Eco</td><td>Classic/Shorty，无甲</td><td>5 人 Eco，下局 Full Buy</td></tr>
              <tr><td>800-2000</td><td>Half Eco</td><td>Sheriff/Stinger + Light Armor</td><td>2-3 人 Half，其余 Full Eco</td></tr>
              <tr><td>2000-3500</td><td>Force Buy</td><td>SMG/Marshal + Light/Heavy</td><td>全队 Force 或 3 Force 2 Save</td></tr>
              <tr><td>3500-4500</td><td>Force / Save 二选一</td><td>Vandal/Phantom + Light，或 Save 下局</td><td>看对方经济，Loss Bonus 高可 Save</td></tr>
              <tr><td>4500+</td><td>Full Buy</td><td>Vandal/Phantom + Heavy + 技能</td><td>5 人 Full，配 1-2 Ult 或 Shield</td></tr>
            </tbody>
          </table>
          <h3>特殊回合策略</h3>
          <p><strong>Pistol Round</strong>：T 方 Classic + Light 或 Ghost；CT 方 Sheriff + Light 或 Frenzy。Pistol 胜则第二回合 SMG Force 扩大优势；Pistol 负则 Eco 至 第三回合 Full Buy。</p>
          <p><strong>Loss Bonus</strong>：连输 5 局后 Loss Bonus 达 2900，此时 Eco 一局下局仍可 Full Buy。避免「连输仍 Force」导致永远买不起 Vandal。</p>
          <p><strong>Bonus Round</strong>：己方连赢 3+ 局后，对方必 Force，己方可 Half Buy（SMG + Light）保经济，输一局仍 Full Buy 下局。</p>
          <div class="tip-box">
            <strong>💡 团队经济沟通</strong>
            <p>开局 5 秒报存款：「3k Eco」「4k Force」「5k Full」。队长（或 IGL）决定全队策略，避免 3 人 Force 2 人 Eco 导致下局 2 人仍穷。Save 时留 1 把 Vandal/Operator 给下局 Star Player（如 Jett Entry 或 Op 手），称「Drop」—— 队友可 Request Drop 获取武器。</p>
          </div>
        `
      },
      {
        id: 'aim',
        title: '练枪计划（4 周）与灵敏度设置',
        content: `
          <p>枪法是无畏契约的基础，系统练枪可显著缩短从 Iron 到 Diamond 的周期。以下 4 周计划结合 Aim Lab/Kovaak's 与游戏内 Deathmatch，按 Micro → Tracking → Flick → In-game 递进。灵敏度建议：400 DPI × 0.3-0.5（eDPI 120-200），低灵敏度利于 Precise Aim，高灵敏度利于 Close Range Flick。</p>
          <h3>4 周练枪计划</h3>
          <table class="data-table">
            <thead><tr><th>周次</th><th>重点</th><th>Aim Lab 项目</th><th>游戏内</th><th>时长/天</th></tr></thead>
            <tbody>
              <tr><td>第 1 周</td><td>Micro Adjustment</td><td>Microshot、Spidershot</td><td>—</td><td>30 分钟</td></tr>
              <tr><td>第 2 周</td><td>Tracking</td><td>Strafetrack、Circleshot</td><td>—</td><td>30 分钟</td></tr>
              <tr><td>第 3 周</td><td>Flick + Prefire</td><td>Microshot、Headshot</td><td>Bot 100 Kill 5 分钟</td><td>40 分钟</td></tr>
              <tr><td>第 4 周</td><td>In-game 应用</td><td>—</td><td>DM 仅 Headshot，Comp 实战</td><td>60 分钟</td></tr>
            </tbody>
          </table>
          <h3>灵敏度与设置</h3>
          <p><strong>eDPI 计算</strong>：DPI × 游戏内灵敏度 = eDPI。职业玩家 eDPI 多在 150-280，推荐新手 180-220。若 Flick 不足可略提高，若 Tracking 不稳可略降低。同一 eDPI 下，400 DPI 比 800 DPI 更细腻，800 DPI 更省力。</p>
          <p><strong>Crosshair</strong>：静态 Crosshair 利于 Consistency，推荐 1-2 像素点或短十字。颜色选 Cyan/Green 与地图区分。Disable Movement Error 关闭，Enable Shooting Error 可选。</p>
          <div class="tip-box">
            <strong>💡 练枪纪律</strong>
            <p>每天固定时段练枪，形成习惯。Aim Lab 分数提升不代表实战提升—— 第四周必须打 Comp 应用。Deathmatch 只打 Headshot，Body Shot 不计。Comp 前 15 分钟 Bot Range 或 DM 热身，避免 Cold Start 第一局白给。</p>
          </div>
        `
      },
      {
        id: 'rank',
        title: '上分心态与排位策略',
        content: `
          <p>排位上分除枪法外，心态、沟通与角色池深度同样重要。以下按段位给出侧重点，并附 Tilt 管理、连输应对与 Long-term 提升路径。避免「只练枪不打 Comp」或「只打 Comp 不练枪」两个极端。</p>
          <h3>分段位侧重点</h3>
          <table class="data-table">
            <thead><tr><th>段位</th><th>核心能力</th><th>推荐练习</th><th>避免</th></tr></thead>
            <tbody>
              <tr><td>Iron-Silver</td><td>基础枪法、Default 点位</td><td>DM、学 1 地图 Default</td><td>贪 Kill、无 Smoke Rush</td></tr>
              <tr><td>Gold-Platinum</td><td>沟通、Map Control</td><td>报点、学 2-3 角色</td><td>Tilt、Force 每局</td></tr>
              <tr><td>Diamond</td><td>Prefire、Crossfire</td><td>Head Level、Post-plant</td><td>单摸、无 Info Push</td></tr>
              <tr><td>Ascendant-Immortal</td><td>团队配合、Adapt</td><td>5 Stack、VOD Review</td><td>Ego Peek、不 Trade</td></tr>
            </tbody>
          </table>
          <h3>心态与纪律</h3>
          <p><strong>连输 3 把</strong>：休息 30 分钟，避免 Tilt 导致连输 10 把。Tilt 表现：Force 每局、单摸、不沟通、怪队友。识别后立刻停排。</p>
          <p><strong>连赢勿飘</strong>：连赢 5 把后易遇 Smurf 或 Hard Counter 阵容，保持 Default 纪律，不冒险。</p>
          <p><strong>每日局数</strong>：建议 3-5 把/天，质量 &gt; 数量。5 把全 Focus 优于 10 把后 5 把 Tilt。</p>
          <div class="warn-box">
            <strong>⚠️ Tilt Force Buy 警告</strong>
            <p>连输后「再 Force 一把就赢」是典型 Tilt 行为，导致经济崩盘、连输 8-10 把。正确做法：连输 2 把检查是否战术问题（无 Smoke、无 Trade）；连输 3 把休息；连输 5 把今日停排。Save 一局不丢人，经济恢复后 Full Buy 更易赢。</p>
          </div>
        `
      },
      {
        id: 'comms',
        title: '沟通报点与 IGL 指挥基础',
        content: `
          <p>有效沟通可弥补枪法差距，职业队 IGL（In-Game Leader）负责 Call Default、Rotate、Eco/Force 决策。普通排位虽无固定 IGL，但报点、Request、Confirm 是基本素养。以下列出标准 Callout 格式、信息优先级与简易 IGL 流程。</p>
          <h3>报点标准格式</h3>
          <table class="data-table">
            <thead><tr><th>要素</th><th>示例</th><th>错误示例</th></tr></thead>
            <tbody>
              <tr><td>人数</td><td>「A 大 2 个」</td><td>「他们 A 大」（无人数）</td></tr>
              <tr><td>位置</td><td>「B 窗 1 个，Main 1 个」</td><td>「B 有人」（不精确）</td></tr>
              <tr><td>血量</td><td>「A 短 1 个，打残 30」</td><td>不报血量</td></tr>
              <tr><td>技能</td><td>「Sova 箭 A 大，1 个 Op B 长」</td><td>不报 Utility</td></tr>
            </tbody>
          </table>
          <h3>IGL 简易流程（T 方）</h3>
          <ol>
            <li>Pistol 后报经济，决定 Eco/Force/Full</li>
            <li>选 Default 点位（A/B/C/Mid），分配 Smoke/Flash</li>
            <li>Execute 前 Confirm：「3-2 A 短，Smoke 好，Go」</li>
            <li>Post-plant：报 Remaining 人数、Default 站位</li>
            <li>Rotate 时 Call：「CT 2 B，转 A」</li>
          </ol>
          <div class="tip-box">
            <strong>💡 沟通礼仪</strong>
            <p>Dead 后仍可报 Info（Last Known Position），但勿 Long Call 干扰 Alive 队友。Request 用简短句：「Smoke A 短」「Flash 我进」。Confirm 用「Clear」「One More」避免重复 Push。中文排可用中文 Callout，但地图名建议英文（Ascent A Main）便于国际服兼容。</p>
          </div>
        `
      },
      {
        id: 'utility',
        title: '技能联动与 Combo 技巧',
        content: `
          <p>《无畏契约》技能（Utility）与枪法同等重要，S 级 Agent 往往因技能 Combo 强力。以下按角色类型列出常用 Combo、Timing 与 Counter 策略，适用于 Unrated 至 Immortal。</p>
          <h3>经典 Combo 表</h3>
          <table class="data-table">
            <thead><tr><th>Combo</th><th>角色</th><th>步骤</th><th>用途</th></tr></thead>
            <tbody>
              <tr><td>Updraft + Op</td><td>Jett</td><td>Updraft 升空 → 开 Op 架 Unconventional Angle</td><td>Ascent B 大、Bind A 短</td></tr>
              <tr><td>Paranoia + Push</td><td>Omen</td><td>Paranoia 穿墙 → 队友 Follow Flash</td><td>Clear Corner、Entry</td></tr>
              <tr><td>Recon + Shock</td><td>Sova</td><td>箭 Mark → Shock 补伤害或 Clear</td><td>Post-plant Delay</td></tr>
              <tr><td>Flash + Entry</td><td>Breach/Skye</td><td>Flash 致盲 → Duelist Entry</td><td>Execute 标配</td></tr>
              <tr><td>Wall + Smoke</td><td>Sage/Viper</td><td>Ice Wall 封路 + Smoke 交叉</td><td>Split Mid、Haven C</td></tr>
            </tbody>
          </table>
          <h3>技能 Counter 与反制</h3>
          <p>对方 Sova 箭：Back off 出 Range 或 Destroy 箭（部分可 Shoot）。Omen Smoke：可穿 Smoke 听 Footstep，或用 Fade Seize 抓 TP。Killjoy Lockdown：Post-plant 时优先 Destroy Nest/Turret 再 Plant。Cypher Trip：Jump Over 或 Destroy，Push 前用 Utility Clear。</p>
          <div class="warn-box">
            <strong>⚠️ 技能浪费警告</strong>
            <p>避免 Pistol Round 交全部 Utility—— 留 1 技能给 Round 2 Force。Execute 前 Confirm 队友 Ready 再交 Flash，否则 Flash 白给。Post-plant 时 Sova 箭/Shock 比 Rush Kill 更有价值，Delay 10 秒 = 对方 Defuse 失败。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'stellar-blade',
    title: '剑星',
    desc: '完美闪避/格挡帧数表、全 EX 技能解锁、NG+ 二周目路线与 30 套纳米服收集指南。',
    category: 'action',
    cover: STEAM_HERO(3489700),
    hot: 67800,
    updated: '2026-06-01',
    tags: ['动作', '科幻', 'PS5', 'Shift Up'],
    chapters: [
      {
        id: 'combat',
        title: '战斗系统与完美闪避/格挡帧数表',
        content: `
          <p>《剑星》战斗核心围绕完美闪避（Perfect Dodge）、完美格挡（Perfect Parry）与爆发模式（Burst Mode）三大机制。掌握帧数窗口是 Boss 战与高难度挑战的基础。普通攻击分轻击连段与重击，轻-轻-重-轻为通用输出循环；完美操作可触发子弹时间、能量恢复与反击窗口，大幅缩短战斗时间。</p>
          <h3>操作帧数与奖励表</h3>
          <table class="data-table">
            <thead><tr><th>操作</th><th>输入窗口</th><th>成功奖励</th><th>失败惩罚</th></tr></thead>
            <tbody>
              <tr><td>完美闪避</td><td>攻击命中前约 0.2 秒</td><td>子弹时间 2s、能量 +15、可接反击</td><td>受伤、硬直</td></tr>
              <tr><td>完美格挡</td><td>攻击命中前约 0.15 秒</td><td>削韧 200%、反击窗口、能量 +10</td><td>格挡值耗尽则破防</td></tr>
              <tr><td>爆发模式</td><td>能量槽满（100）</td><td>攻击 +80%、持续 15 秒</td><td>—</td></tr>
              <tr><td>连锁攻击</td><td>连击数 10+ 后</td><td>伤害递增、最后一击 AOE</td><td>被打断则重置</td></tr>
            </tbody>
          </table>
          <h3>通用连段与 Boss 策略</h3>
          <p><strong>小怪清场</strong>：轻-轻-重-轻 → 完美闪避下一招 → 继续连段。保持移动，避免被包围。</p>
          <p><strong>大型 Boss</strong>：观察前摇，完美闪避/格挡后接 3-4 刀，不贪刀。二阶段通常攻击频率提升，优先完美格挡削韧，韧条空后 Burst Mode + 重攻击循环。</p>
          <p><strong>练习场</strong>：大峡谷（Xion 外）小怪无限刷新，反复练完美闪避至肌肉记忆。建议 30 分钟/天，连续 3 天可稳定触发。</p>
          <div class="tip-box">
            <strong>💡 完美闪避识别</strong>
            <p>敌人攻击前会有闪光或音效提示，看到闪光立刻闪避（非提前闪）。不同敌人前摇不同：快速刺击 0.1s、重劈 0.3s、远程 0.5s。先熟悉 1 种敌人再扩展，大峡谷的 Scavenger 类型最适合入门练习。</p>
          </div>
          <div class="warn-box">
            <strong>⚠️ 贪刀警告</strong>
            <p>Boss 连招第 3 击往往不可闪避（Super Armor），第 2 击后勿贪第 3 刀。完美闪避后立即反击 2-3 刀再拉开，比 Stand 连砍更安全。Burst Mode 期间仍会被 Grab 打断，Grab 前摇时勿开 Burst。</p>
          </div>
        `
      },
      {
        id: 'skills',
        title: 'EX 技能解锁与 SP 加点优先级',
        content: `
          <p>EX 技能（扩展技能）通过 SP（Skill Point）解锁，SP 来源为升级、任务与收集。全 EX 技能树分攻击、防御、辅助三系，首周目 SP 有限，需优先解锁对 Boss 战与探索影响最大的技能。以下按优先级列出推荐解锁顺序与各技能实战用途。</p>
          <h3>EX 技能优先级表</h3>
          <table class="data-table">
            <thead><tr><th>优先级</th><th>技能名</th><th>SP 消耗</th><th>效果</th><th>适用场景</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>序列冲击</td><td>2</td><td>AOE 多段伤害，可打断充能</td><td>小怪清场、Boss 打断</td></tr>
              <tr><td>2</td><td>追踪弹</td><td>2</td><td>远程自动追踪，削韧</td><td>飞行敌人、Boss 磨血</td></tr>
              <tr><td>3</td><td>超速</td><td>3</td><td>短时移速 + 闪避距离提升</td><td>探索、Boss 走位</td></tr>
              <tr><td>4</td><td>攻击强化 I-III</td><td>各 1</td><td>基础攻击 +10%/级</td><td>全场景</td></tr>
              <tr><td>5</td><td>能量恢复</td><td>2</td><td>完美操作能量 +20%</td><td>Burst 流</td></tr>
              <tr><td>6</td><td>防御强化</td><td>2</td><td>格挡值 +30%</td><td>格挡流，次优先</td></tr>
            </tbody>
          </table>
          <h3>分 Boss 技能配置</h3>
          <p><strong>贝塔型纳提乌斯</strong>：带追踪弹远程磨血，二阶段充能时用序列冲击打断。勿近身贪刀，保持中距离。</p>
          <p><strong>渡鸦（隐藏 Boss）</strong>：需完美格挡为主，攻击频率极高。带能量恢复 + 攻击强化，Burst 窗口短，需多次完美操作充能。</p>
          <p><strong>巨塔（Tower）</strong>：四塔 Boss 连战，SP 不足时优先攻击强化而非防御。序列冲击清小怪，追踪弹打飞行单位。</p>
          <div class="tip-box">
            <strong>💡 SP 不足时的选择</strong>
            <p>首周目 SP 紧张时，先点「攻击强化」而非「防御强化」—— 输出够高可缩短战斗，减少受伤次数。二周目 NG+ SP 更充裕，可补防御系与辅助系。漏点可后续补，无不可逆分支。</p>
          </div>
        `
      },
      {
        id: 'gear',
        title: '装备、武器与芯片搭配指南',
        content: `
          <p>《剑星》装备系统包含主武器（Blade）、纳米服（Nano Suit）与芯片（Chip）三模块。芯片可嵌入武器槽位，提供攻击、暴击、能量、爆发等加成。不同 Build 需搭配不同武器与芯片组合，以下按流派列出推荐配置与获取方式。</p>
          <h3>三大流派配置表</h3>
          <table class="data-table">
            <thead><tr><th>流派</th><th>武器</th><th>核心芯片</th><th>纳米服</th><th>适用</th></tr></thead>
            <tbody>
              <tr><td>爆发流</td><td>灭世者</td><td>攻击 + 暴击 + 爆发延长</td><td>增加 Burst 时长</td><td>Boss 速杀</td></tr>
              <tr><td>闪避流</td><td>审判者</td><td>完美闪避增伤 + 能量恢复</td><td>闪避距离</td><td>高难 Boss</td></tr>
              <tr><td>平衡流</td><td>天启</td><td>全属性均衡</td><td>防御 + 攻击</td><td>首周目推荐</td></tr>
              <tr><td>格挡流</td><td>守护者</td><td>格挡值 + 反击伤害</td><td>格挡恢复</td><td>渡鸦等</td></tr>
            </tbody>
          </table>
          <h3>芯片获取与升级</h3>
          <p>芯片通过 Boss 掉落、宝箱与商店获取，同名芯片可叠加（最多 3 同效果）。优先升级攻击类芯片，暴击芯片在 Burst 期间收益最高。废土区域宝箱含大量芯片，探索时务必开完。</p>
          <p><strong>灭世者</strong>：Act 3 击败特定 Boss 后解锁，爆发流核心武器。配合 Burst 延长芯片，15 秒 Burst 可延长至 20 秒。</p>
          <div class="warn-box">
            <strong>⚠️ 芯片槽限制</strong>
            <p>每把武器芯片槽有限（通常 3-4 槽），不可同时堆满所有加成。爆发流放弃防御芯片，闪避流可少堆攻击。勿盲目追求「全 MAX 芯片」—— 流派协同 &gt; 单属性极限。</p>
          </div>
        `
      },
      {
        id: 'sidequest',
        title: '支线任务与结局相关 NPC',
        content: `
          <p>《剑星》共 30+ 支线任务，部分影响结局分支与 NPC 存活。艾德（Adam）、莉莉（Lily）、奥维（Owen）三人为关键 NPC，其支线需在进「巢穴」（Nexus）前完成，否则将锁死真结局。以下列出必做支线、触发条件与奖励。</p>
          <h3>结局相关支线表</h3>
          <table class="data-table">
            <thead><tr><th>NPC</th><th>支线名</th><th>触发区域</th><th>截止点</th><th>影响</th></tr></thead>
            <tbody>
              <tr><td>艾德</td><td>废土幸存者</td><td>废土 1-3 区</td><td>进巢穴前</td><td>真结局条件</td></tr>
              <tr><td>莉莉</td><td>医疗物资</td><td>Xion、废土</td><td>进巢穴前</td><td>真结局 + 道具</td></tr>
              <tr><td>奥维</td><td>工程师之路</td><td>大峡谷、工厂</td><td>进巢穴前</td><td>真结局 + 芯片</td></tr>
              <tr><td>卡尔</td><td>收集癖</td><td>全区域</td><td>无</td><td>纳米服、SP</td></tr>
            </tbody>
          </table>
          <h3>支线完成建议顺序</h3>
          <ol>
            <li>每进新区域先找 NPC 对话，接取可用支线</li>
            <li>废土区域支线集中，建议一次性清完再进 Act 2</li>
            <li>进「巢穴」前对照清单，确认艾德/莉莉/奥维线全绿</li>
            <li>巢穴内部分支线仍可做，但三人主线已不可接</li>
          </ol>
          <div class="tip-box">
            <strong>💡 漏做补救</strong>
            <p>若进巢穴后发现漏做，可读档至进巢穴前（需有 Save）。NG+ 可补部分支线，但结局相关需在首周目完成。建议巢穴前 Manual Save 一份，便于回溯。</p>
          </div>
        `
      },
      {
        id: 'ng-plus',
        title: 'NG+ 二周目与全收集路线',
        content: `
          <p>通关后解锁 NG+（New Game Plus），保留等级、装备、技能与芯片，敌人 HP 约 +50%、攻击 +30%。NG+ 专属内容：5 套纳米服、隐藏 Boss「渡鸦」、部分芯片升级版。全 30 套纳米服需 NG+ 二周目才能集齐，首周目约可获 22-25 套。</p>
          <h3>NG+ 与首周目差异</h3>
          <table class="data-table">
            <thead><tr><th>项目</th><th>首周目</th><th>NG+</th></tr></thead>
            <tbody>
              <tr><td>敌人 HP</td><td>基准</td><td>+50%</td></tr>
              <tr><td>敌人攻击</td><td>基准</td><td>+30%</td></tr>
              <tr><td>保留内容</td><td>—</td><td>等级、装备、技能、芯片</td></tr>
              <tr><td>纳米服</td><td>22-25 套</td><td>+5 套 NG+ 专属</td></tr>
              <tr><td>隐藏 Boss</td><td>渡鸦不可打</td><td>渡鸦解锁</td></tr>
            </tbody>
          </table>
          <h3>NG+ 最优路线</h3>
          <ol>
            <li>Rush 主线至渡鸦解锁，挑战隐藏 Boss 获取顶级芯片</li>
            <li>回头清 NG+ 专属纳米服（标记在地图上的 Gold 图标）</li>
            <li>补首周目漏掉的宝箱、芯片与支线</li>
            <li>全纳米服 30 套后挑战「完美」相关成就</li>
          </ol>
          <div class="warn-box">
            <strong>⚠️ NG+ 难度警告</strong>
            <p>NG+ 敌人 HP +50% 意味着战斗时间拉长，完美闪避/格挡要求更高。若首周目依赖「狂砍」过关，NG+ 易卡关。建议首周目就练习完美操作，NG+ 更顺畅。渡鸦难度极高，建议 Burst 流 + 满级芯片再挑战。</p>
          </div>
        `
      },
      {
        id: 'areas',
        title: '区域探索与收集品分布',
        content: `
          <p>《剑星》地图分 Xion（主城）、大峡谷、废土、工厂、巢穴等大类，每类含 3-5 子区域。收集品包括：纳米服设计图、芯片、SP 道具、音频日志、文档。以下按区域列出关键收集与探索要点，避免漏项导致 NG+ 回头跑图。</p>
          <h3>各区域收集要点</h3>
          <table class="data-table">
            <thead><tr><th>区域</th><th>纳米服</th><th>芯片</th><th>隐藏要素</th></tr></thead>
            <tbody>
              <tr><td>Xion</td><td>3 套（商店/任务）</td><td>基础芯片</td><td>支线 NPC 集中</td></tr>
              <tr><td>大峡谷</td><td>4 套</td><td>攻击/能量</td><td>练习场、宝箱</td></tr>
              <tr><td>废土</td><td>8 套</td><td>暴击/爆发</td><td>艾德支线、隐藏 cave</td></tr>
              <tr><td>工厂</td><td>5 套</td><td>防御/格挡</td><td>奥维支线</td></tr>
              <tr><td>巢穴</td><td>6 套</td><td>顶级芯片</td><td>渡鸦、Boss 连战</td></tr>
            </tbody>
          </table>
          <h3>探索技巧</h3>
          <p>每进新区域先激活 Camp（存档点）与 Fast Travel。地图标记 Gold = 纳米服，Purple = 芯片，Blue = SP。不可达区域需后续能力（如超速、二段跳）解锁，看到「锁」图标先标记，能力解锁后回头。</p>
          <div class="tip-box">
            <strong>💡 漏收集检查</strong>
            <p>进 Boss 战前检查区域完成度（地图右下角 %）。&lt;90% 建议先探索再推进，Boss 战后部分区域不可返回。巢穴最终战前为 Last Chance 全收集。</p>
          </div>
        `
      },
      {
        id: 'bosses',
        title: '重点 Boss 机制与打法详解',
        content: `
          <p>《剑星》Boss 战分主线 Boss、支线 Boss 与隐藏 Boss，机制从单纯 DPS Check 到多阶段、多机制并存。以下详述关底、贝塔型纳提乌斯、渡鸦等高频卡关 Boss 的招式解析与推荐策略。</p>
          <h3>Boss 难度与对策表</h3>
          <table class="data-table">
            <thead><tr><th>Boss</th><th>阶段</th><th>核心机制</th><th>推荐 Build</th></tr></thead>
            <tbody>
              <tr><td>贝塔型纳提乌斯</td><td>2</td><td>二阶段充能 AOE，需打断</td><td>追踪弹 + 序列冲击</td></tr>
              <tr><td>斯卡文</td><td>3</td><td>飞行 + 地面，需换武器</td><td>追踪弹 + 爆发</td></tr>
              <tr><td>渡鸦</td><td>4</td><td>极速连击、Grab、范围 AOE</td><td>格挡流 / 完美闪避流</td></tr>
              <tr><td>巨塔</td><td>4 连战</td><td>四塔连续，续航要求高</td><td>平衡流 + 回血道具</td></tr>
            </tbody>
          </table>
          <h3>贝塔型纳提乌斯详解</h3>
          <p>一阶段：远程激光 + 冲刺，保持侧向移动，追踪弹磨血。二阶段：Boss 浮空充能，地面出现红圈 AOE，需在 3 秒内用序列冲击打断，否则全屏伤害。打断后 5 秒硬直，Burst Mode 全力输出。未打断则躲红圈边缘，充能结束后再打。</p>
          <h3>渡鸦（隐藏 Boss）详解</h3>
          <p>NG+ 解锁，四阶段。一阶段熟悉基础连招；二阶段增加 Grab（前摇 0.5s，侧闪）；三阶段范围 AOE + 极速刺击；四阶段混合所有招式，频率翻倍。推荐格挡流，完美格挡削韧后反击。勿贪刀，每轮只打 2-3 下。预计尝试 10-20 次，需充分练习完美格挡。</p>
          <div class="warn-box">
            <strong>⚠️ 渡鸦前准备</strong>
            <p>渡鸦为全游戏最高难，建议：满级武器、Burst 流或格挡流芯片满配、带满回血道具。挑战前 Manual Save，失败可快速重试。勿在 NG+ 初期挑战—— 敌人已 +50% HP，渡鸦更虐。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'bg3',
    title: '博德之门3',
    desc: '12 职业 Build 评级、Act 1-3 重要抉择后果表、传说装备获取与 Tav 存档导入指南。',
    category: 'rpg',
    cover: STEAM_HERO(1086940),
    hot: 89100,
    updated: '2026-05-28',
    tags: ['RPG', 'D&D', 'CRPG', 'Larian'],
    chapters: [
      {
        id: 'builds',
        title: '12 职业 Build 评级与 Multiclass 指南',
        content: `
          <p>《博德之门3》基于 D&amp;D 5e 规则，12 职业各有优劣，Multiclass（兼职）可组合出 S 级 Build。以下按 PvE 难度、资源消耗（短休/长休）、Act 1-3 全程强度综合评级，并附核心 Multiclass 组合与加点建议。Honour Mode 与 Tactician 难度下 S 级 Build 差距更明显。</p>
          <h3>Build 评级总表</h3>
          <table class="data-table">
            <thead><tr><th>评级</th><th>Build</th><th>核心组合</th><th>优势</th><th>劣势</th></tr></thead>
            <tbody>
              <tr><td>S</td><td>散打武僧</td><td>武僧6/游荡4/战士2</td><td>Bonus Action 攻击、几乎不需休息</td><td>前期较弱</td></tr>
              <tr><td>S</td><td>预言法师</td><td>纯法师20</td><td>时间停止 + 魔法飞弹、控场</td><td>Act 1 脆弱</td></tr>
              <tr><td>A</td><td>至圣斩圣武士</td><td>圣武士6/战争域2</td><td>爆发最高、Smite 堆叠</td><td>依赖短休</td></tr>
              <tr><td>A</td><td>游荡者刺客</td><td>游荡5/战士3/游荡7</td><td>先攻 + 偷袭、Act 1 最强</td><td>后期乏力</td></tr>
              <tr><td>A</td><td>野蛮人熊</td><td>野蛮人5/德鲁伊7</td><td>高 HP、野性形态</td><td>无重甲</td></tr>
              <tr><td>B</td><td>纯战士</td><td>战士12</td><td>简单、易上手</td><td>后期输出不足</td></tr>
              <tr><td>B</td><td>纯游侠</td><td>游侠12</td><td>远程稳定</td><td>无突出亮点</td></tr>
            </tbody>
          </table>
          <h3>散打武僧详细配置</h3>
          <p>武僧 6 级获 Ki 与 Extra Attack，游荡 4 级获 Sneak Attack 与 Bonus Action 躲藏，战士 2 级获 Action Surge。主属性：敏捷 &gt; 感知。装备：警觉长袍（Act 1 幽暗地域）、加速鞋。战斗循环：Bonus Action 攻击 → Action 攻击 → Flurry of Blows，一回合 4-5 次攻击。几乎不消耗 Spell Slot，长休需求低。</p>
          <div class="tip-box">
            <strong>💡 Respec 时机</strong>
            <p>Act 1 结束可找 Withers 免费 Respec。若 Act 1 选了纯战士/游侠觉得乏力，可改散打武僧或预言法师。Respec 后等级保留，仅重置加点与职业分配。建议 Act 1 末、进 Act 2 前 Respec 至目标 Build。</p>
          </div>
        `
      },
      {
        id: 'act1',
        title: 'Act 1 重要抉择与后果表',
        content: `
          <p>Act 1 的选择会影响 Act 2/3 的 NPC 存活、任务线、装备与结局分支。以下列出不可反悔或高影响抉择，并附建议选项。漏做或选错可能导致同伴离队、任务线断裂、传说装备缺失。</p>
          <h3>Act 1 关键抉择表</h3>
          <table class="data-table">
            <thead><tr><th>抉择点</th><th>选项 A</th><th>选项 B</th><th>后果</th><th>建议</th></tr></thead>
            <tbody>
              <tr><td>地精营地</td><td>杀 Minthara</td><td>不杀/招募</td><td>杀则失去暗夜之歌线、Minthara 同伴</td><td>不杀</td></tr>
              <tr><td>德鲁伊林地</td><td>帮卡哈</td><td>帮提夫林</td><td>帮卡哈 → 提夫林全灭、商店关闭</td><td>帮提夫林</td></tr>
              <tr><td>鬼婆</td><td>接受交易</td><td>拒绝并击杀</td><td>交易 → 永久 -1 属性</td><td>拒绝击杀</td></tr>
              <tr><td>阿斯代伦</td><td>同意吸血</td><td>拒绝</td><td>影响好感与个人任务</td><td>按角色扮演</td></tr>
              <tr><td>钢铁卫士</td><td>提前杀</td><td>按任务推进</td><td>影响 Act 3 博德安之剑</td><td>按任务</td></tr>
            </tbody>
          </table>
          <h3>地精营地与 Minthara</h3>
          <p>Minthara 为卓尔圣武士，可招募为同伴。若在地精营地攻击或杀 Minthara，将永久失去：Minthara 同伴、暗夜之歌相关任务线、部分 Act 2 内容。招募方式：不触发战斗，通过对话加入；或击晕后对话。建议 Act 1 末再处理地精营地，确保等级足够应对。</p>
          <div class="warn-box">
            <strong>⚠️ 鬼婆交易警告</strong>
            <p>鬼婆 offering「+1 某属性」实为永久 -1 另一属性，且不可恢复。无论对话如何选，拒绝并击杀是正确选择。击杀后可获鬼婆头发（可卖或留任务），无属性惩罚。</p>
          </div>
        `
      },
      {
        id: 'legendary',
        title: '传说装备获取路线',
        content: `
          <p>传说装备（Legendary）为全游戏最强装备，部分有 Act 限制或任务前置。以下按 Act 列出关键传说装备、获取条件与 Build 适配，避免漏拿或选错导致无法获取。</p>
          <h3>传说装备一览</h3>
          <table class="data-table">
            <thead><tr><th>装备</th><th>Act</th><th>位置/任务</th><th>适配 Build</th></tr></thead>
            <tbody>
              <tr><td>博德安之剑</td><td>3</td><td>下城区，钢铁卫士任务链</td><td>圣武士、战士</td></tr>
              <tr><td>暗夜之誓</td><td>2/3</td><td>Minthara 线 / 不杀地精</td><td>圣武士</td></tr>
              <tr><td>加速鞋</td><td>1</td><td>散塔林地下</td><td>武僧、游荡者</td></tr>
              <tr><td>警觉长袍</td><td>1</td><td>幽暗地域</td><td>武僧、无甲</td></tr>
              <tr><td>尼瑟雷荣耀</td><td>2</td><td>幽暗地域 Boss</td><td>法师、术士</td></tr>
              <tr><td>致命诱惑</td><td>3</td><td>下城区</td><td>游荡者、游侠</td></tr>
            </tbody>
          </table>
          <h3>Act 1 必拿装备路线</h3>
          <p><strong>加速鞋</strong>：散塔林地下，需从地精营地或德鲁伊林地进入。游荡者/武僧神器，+3m 移速，Act 1 即可获取。</p>
          <p><strong>警觉长袍</strong>：幽暗地域，从地精营地或德鲁伊林地进入。无甲时 +2 AC，武僧必备。</p>
          <p><strong>地狱骑手之盔</strong>：地精营地，需潜行或战斗。+1 攻击，早期优质头盔。</p>
          <div class="tip-box">
            <strong>💡 博德安之剑前置</strong>
            <p>Act 3 博德安之剑需完成「钢铁卫士」任务链，且 Act 1 勿提前杀关键 NPC。进 Act 3 下城区后，按任务指引推进，最终战利品在 Ansur 相关任务中。漏做 Act 1/2 前置将导致无法获取。</p>
          </div>
        `
      },
      {
        id: 'companions',
        title: '同伴好感度与恋爱线攻略',
        content: `
          <p>每位同伴有隐藏「批准值」（Approval），影响个人任务、恋爱线与结局。长休时对话、完成任务、符合价值观的选择都会增减。Approval 过低会导致同伴离队。以下列出各同伴 Approval 要点、恋爱触发条件与 Act 2 分支选择。</p>
          <h3>同伴 Approval 要点</h3>
          <table class="data-table">
            <thead><tr><th>同伴</th><th>增加 Approval</th><th>减少 Approval</th><th>恋爱 Act</th></tr></thead>
            <tbody>
              <tr><td>Shadowheart</td><td>帮助提夫林、尊重信仰</td><td>嘲讽莎尔、杀无辜</td><td>1 末 / 2</td></tr>
              <tr><td>Astarion</td><td>同意吸血、支持自由</td><td>限制自由、杀卓尔</td><td>2</td></tr>
              <tr><td>Lae'zel</td><td>强者、服从体系</td><td>软弱、违抗</td><td>2</td></tr>
              <tr><td>Karlach</td><td>帮助他人、正义</td><td>自私、伤害无辜</td><td>1 末</td></tr>
              <tr><td>Minthara</td><td>力量、卓尔利益</td><td>背叛、软弱</td><td>2（需招募）</td></tr>
            </tbody>
          </table>
          <h3>Shadowheart 线关键选择</h3>
          <p>Act 2 必须选择「暗夜之歌」或「塞伦涅」路线，不可反悔。选暗夜之歌：Shadowheart 莎尔线，部分装备与结局；选塞伦涅：塞伦涅线，不同结局分支。恋爱需在 Act 1 末或 Act 2 长休时触发对话，Approval 需 &gt; 中等。Act 3 进城前务必完成 Shadowheart 个人任务，否则部分结局无法触发。</p>
          <div class="warn-box">
            <strong>⚠️ 同伴离队警告</strong>
            <p>Approval 极低时同伴会永久离队，个人任务与装备无法获取。Act 3 最终战前，未完成个人任务的同伴可能缺席。建议每 Act 末检查同伴 Approval，低则通过长休对话或符合价值观的选择补救。</p>
          </div>
        `
      },
      {
        id: 'act2-act3',
        title: 'Act 2-3 流程与关键节点',
        content: `
          <p>Act 2 幽暗地域/月之塔、Act 3 下城区/博德之门为游戏后半程，任务线交织、抉择后果显现。以下按 Act 列出主线节点、必做支线与进 Act 3 前 checklist，避免锁死结局或漏关键内容。</p>
          <h3>Act 2 关键节点</h3>
          <table class="data-table">
            <thead><tr><th>节点</th><th>位置</th><th>内容</th><th>截止</th></tr></thead>
            <tbody>
              <tr><td>暗夜之歌/塞伦涅</td><td>月之塔</td><td>Shadowheart 线二选一</td><td>Act 2 内</td></tr>
              <tr><td>幽暗地域探索</td><td>全区域</td><td>尼瑟雷荣耀、装备</td><td>无</td></tr>
              <tr><td>Minthara 个人任务</td><td>月之塔</td><td>需 Minthara 在队</td><td>Act 2 内</td></tr>
              <tr><td>进 Act 3</td><td>月之塔顶</td><td>主线推进</td><td>—</td></tr>
            </tbody>
          </table>
          <h3>Act 3 进城前 Checklist</h3>
          <ol>
            <li>所有同伴个人任务完成或推进至 Act 3 可续</li>
            <li>Shadowheart 线已选暗夜之歌或塞伦涅</li>
            <li>Act 2 传说装备已拿（尼瑟雷荣耀等）</li>
            <li>等级建议 10+，装备 +1 以上</li>
          </ol>
          <h3>Act 3 下城区要点</h3>
          <p>下城区为最终 Act，含博德安之剑、钢铁卫士、各同伴 Act 3 个人任务。进城后先探索再推进主线，部分区域随主线关闭。最终战前游戏会提示「点 of no return」，此前务必完成所有同伴任务与收集。</p>
          <div class="tip-box">
            <strong>💡 Act 2 练级</strong>
            <p>幽暗地域敌人等级 5-8，适合 Act 1 末（等级 4-5）进入练级。月之塔敌人 7-10，建议 8 级+ 再推进主线。Act 2 可轻松练至 10 级，Act 3 更轻松。</p>
          </div>
        `
      },
      {
        id: 'combat-tips',
        title: '战斗、探索与环境互动技巧',
        content: `
          <p>《博德之门3》战斗强调环境互动、高度优势、元素组合。以下列出通用战斗技巧、元素 Combo、探索要点与 Honour Mode 注意事项，适用于 Tactician 及以上难度。</p>
          <h3>元素与环境 Combo</h3>
          <table class="data-table">
            <thead><tr><th>Combo</th><th>条件</th><th>效果</th><th>示例</th></tr></thead>
            <tbody>
              <tr><td>油 + 火</td><td>地面有油，火系法术</td><td>双倍伤害、燃烧</td><td>油脂术 + 火球</td></tr>
              <tr><td>水 + 电</td><td>地面有水，电系</td><td>范围导电</td><td>造水 + 闪电链</td></tr>
              <tr><td>高度优势</td><td>高于敌人 2m+</td><td>攻击 +2、不易被近战</td><td>弓箭手、法师</td></tr>
              <tr><td>隐形 + 偷袭</td><td>隐形状态攻击</td><td>优势、偷袭触发</td><td>游荡者</td></tr>
            </tbody>
          </table>
          <h3>通用战斗原则</h3>
          <p>遇强敌先「高处优势 + 隐形」开怪，第一轮爆发减员。Tank 顶前，DPS 侧翼，法师控场。善用 Shove 将敌人推下悬崖（即死）。Act 2 幽暗地域用「昼阳术」照明，避免黑暗 Debuff。</p>
          <p><strong>Save 策略</strong>：Boss 战前 Manual Save。Honour Mode 仅 1 Save，需更谨慎。Tactician 可频繁 Save-Load 试战术。</p>
          <div class="warn-box">
            <strong>⚠️ Act 3 剧透警告</strong>
            <p>Act 3 进城前先完成所有同伴个人任务，否则部分结局无法触发。最终战前游戏会提示，届时检查同伴是否都有 Act 3 任务完成。漏做将导致普通结局或同伴缺席。</p>
          </div>
        `
      },
      {
        id: 'tav-import',
        title: 'Tav 存档导入与 Mod 推荐',
        content: `
          <p>《博德之门3》支持通过 Tav 快照（Character Snapshot）在新周目导入自定义角色外观与部分设置。Mod 社区活跃，以下介绍 Tav 导入流程、推荐 Mod 与安装注意事项，便于二周目或 Honour Mode 使用同一角色。</p>
          <h3>Tav 导入流程</h3>
          <ol>
            <li>主菜单 → 新游戏 → 选择「Import Origin」或 Character Snapshot</li>
            <li>选择已保存的 Tav 快照（需先在游戏中 Save Character）</li>
            <li>导入后外观保留，职业/等级需重新选择</li>
            <li>Origin 角色（如 Shadowheart）不可被 Tav 覆盖，仅自定义 Origin 可</li>
          </ol>
          <h3>推荐 Mod（Steam 创意工坊 / Nexus）</h3>
          <table class="data-table">
            <thead><tr><th>Mod</th><th>功能</th><th>优先级</th></tr></thead>
            <tbody>
              <tr><td>ImprovedUI</td><td>UI 优化、高亮</td><td>★★★★★</td></tr>
              <tr><td>Better Targeting</td><td>目标选择优化</td><td>★★★★☆</td></tr>
              <tr><td>5e Spells</td><td>扩展 D&amp;D 法术</td><td>★★★☆☆</td></tr>
              <tr><td>Transmog</td><td>外观幻化</td><td>★★★★☆</td></tr>
            </tbody>
          </table>
          <div class="tip-box">
            <strong>💡 Mod 与成就</strong>
            <p>使用 Mod 可能禁用 Steam 成就。追求成就的周目建议无 Mod 或仅用 UI 类 Mod。Honour Mode 建议无 Mod，避免兼容性问题导致存档损坏。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'palworld',
    title: '幻兽帕鲁',
    desc: '配种 Power 计算器、自动化基地蓝图、Boss 塔顺序与 0.6 版本新帕鲁强度榜。',
    category: 'openworld',
    cover: STEAM_HERO(1623730),
    hot: 76500,
    updated: '2026-05-26',
    tags: ['生存', '建造', '联机', 'Pocketpair'],
    chapters: [
      {
        id: 'breeding',
        title: '配种 Power 完全指南与计算器',
        content: `
          <p>《幻兽帕鲁》配种系统通过 Power 值决定子代属性上限，是获得四速、四攻、四防完美个体的核心。子代 Power = (父 Power + 母 Power) / 2 ± 随机浮动，通过多代选育可逐步提升。以下详解 Power 机制、配种路线、种马选择与预计代数，并附 0.6 版本配种公式要点。</p>
          <h3>Power 与属性关系</h3>
          <table class="data-table">
            <thead><tr><th>Power 区间</th><th>属性表现</th><th>获取难度</th></tr></thead>
            <tbody>
              <tr><td>0-200</td><td>野生基础</td><td>易</td></tr>
              <tr><td>200-500</td><td>良好个体</td><td>2-4 代选育</td></tr>
              <tr><td>500-800</td><td>优秀个体</td><td>4-6 代选育</td></tr>
              <tr><td>800-1000</td><td>接近完美</td><td>6-8 代选育</td></tr>
              <tr><td>1000+</td><td>完美/传说</td><td>8-10 代或异种配种</td></tr>
            </tbody>
          </table>
          <h3>目标配种路线表</h3>
          <table class="data-table">
            <thead><tr><th>目标</th><th>起始种马</th><th>预计代数</th><th>关键帕鲁</th></tr></thead>
            <tbody>
              <tr><td>跑速 MAX</td><td>猫/鸡（Power 低）</td><td>6-8 代</td><td>迅雷鸟、空涡龙</td></tr>
              <tr><td>攻击 MAX</td><td>捣蛋猫</td><td>8-10 代</td><td>空涡龙、异构格里芬</td></tr>
              <tr><td>工作速度 MAX</td><td>阿努比斯种</td><td>5-7 代</td><td>阿努比斯</td></tr>
              <tr><td>传说个体</td><td>固定 1500 Power</td><td>需异种配种</td><td>空涡龙、杰诺路达</td></tr>
            </tbody>
          </table>
          <h3>配种实操流程</h3>
          <ol>
            <li>捕获 Power 最低的同族帕鲁 2 只（一雄一雌）</li>
            <li>建造配种牧场，放入蛋糕（配种消耗）</li>
            <li>子代出生后检查 Power，选 Power 最高者继续配种</li>
            <li>每代替换 Power 更低的亲本，逐步提升</li>
            <li>6-8 代后 Power 可达 800+，再配 2-3 代可冲击 1000</li>
          </ol>
          <div class="tip-box">
            <strong>💡 配种加速</strong>
            <p>蛋糕需蜂蜜 + 红色野果 + 牛奶 + 蛋 + 小麦，基地自动化生产后配种效率大增。配种牧场需 2 级科技，建议 Act 2 优先建造。异种配种（不同族）可产出稀有帕鲁，但 Power 计算相同，仍看亲本 Power。</p>
          </div>
          <div class="warn-box">
            <strong>⚠️ 传说帕鲁配种</strong>
            <p>空涡龙、杰诺路达等传说帕鲁 Power 固定 1500，无法通过选育提升，但可作为亲本产出高 Power 子代。传说帕鲁需 Boss 塔或特殊位置捕获，捕获率极低，建议先提升等级与帕鲁球等级再挑战。</p>
          </div>
        `
      },
      {
        id: 'base',
        title: '自动化基地蓝图与布局优化',
        content: `
          <p>基地自动化是《幻兽帕鲁》中后期核心，合理布局可让帕鲁 24 小时产出资源、完成配种、制造装备。以下提供 20×20 标准布局、各区域功能分配、帕鲁工作优先级与常见布局错误，适用于 0.6 版本。</p>
          <h3>标准 20×20 布局分区</h3>
          <table class="data-table">
            <thead><tr><th>区域</th><th>功能</th><th>推荐帕鲁</th><th>工作等级</th></tr></thead>
            <tbody>
              <tr><td>中央</td><td>箱子里程碑 + 传送点 + 帕鲁床</td><td>—</td><td>—</td></tr>
              <tr><td>北区</td><td>伐木 + 采石</td><td>阿努比斯、碎岩龟</td><td>3-4</td></tr>
              <tr><td>南区</td><td>种植 + 浇水</td><td>百合女王、碧海龙</td><td>3-4</td></tr>
              <tr><td>东区</td><td>手工 + 冶炼</td><td>阿努比斯、熔岩兽</td><td>4</td></tr>
              <tr><td>西区</td><td>发电 + 冷却</td><td>雷角马×4、企丸丸</td><td>2-3</td></tr>
            </tbody>
          </table>
          <h3>布局关键规则</h3>
          <p><strong>帕鲁床距离</strong>：所有工作台必须在帕鲁床 50m 内，否则帕鲁不工作。建基地时先放帕鲁床，再围绕床建工作台。</p>
          <p><strong>食物供应</strong>：饲料箱需在帕鲁活动范围内，定期补充。帕鲁 SAN 值过低会怠工或逃跑，需红果、优质饲料维持。</p>
          <p><strong>防御</strong>：基地会遭袭击，建议建围墙 + 防御塔，留 1-2 战斗帕鲁守家。</p>
          <h3>自动化产业链</h3>
          <ol>
            <li>伐木 → 木材 → 手工台 → 建筑材料</li>
            <li>种植 → 小麦/野果 → 料理锅 → 蛋糕（配种）</li>
            <li>采石 → 石头 → 冶炼 → 金属锭 → 装备</li>
            <li>发电 → 维持冰箱、照明、高级工作台运转</li>
          </ol>
          <div class="tip-box">
            <strong>💡 多基地分工</strong>
            <p>0.6 版本支持多基地，建议：主基地全自动化生产；副基地 1 专配种；副基地 2 专挖矿/伐木（资源点旁）。箱子里程碑可跨基地共享资源，配种牧场放副基地避免主基地拥挤。</p>
          </div>
        `
      },
      {
        id: 'boss-tower',
        title: 'Boss 塔挑战顺序与对策',
        content: `
          <p>Boss 塔为《幻兽帕鲁》主线挑战，共 4 座塔，每塔 1 名 Boss 训练师 + 1 只强力帕鲁。塔顺序影响难度曲线与奖励获取，以下按推荐顺序列出各塔 Boss、等级要求、属性克制与战术要点。</p>
          <h3>Boss 塔顺序与对策表</h3>
          <table class="data-table">
            <thead><tr><th>顺序</th><th>Boss</th><th>帕鲁</th><th>推荐等级</th><th>克制属性</th><th>对策帕鲁</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>佐伊</td><td>暴电熊</td><td>Lv 15</td><td>雷 ← 火</td><td>火系（火绒狐、熔岩兽）</td></tr>
              <tr><td>2</td><td>莉莉</td><td>碧海龙</td><td>Lv 25</td><td>水 ← 雷</td><td>雷系（雷角马、暴电熊）</td></tr>
              <tr><td>3</td><td>Marcus</td><td>雪猛犸</td><td>Lv 35</td><td>冰 ← 火</td><td>火系（熔岩兽、火绒狐）</td></tr>
              <tr><td>4</td><td>维克托</td><td>空涡龙</td><td>Lv 50</td><td>龙</td><td>龙系 + 传说装备</td></tr>
            </tbody>
          </table>
          <h3>各塔战术要点</h3>
          <p><strong>佐伊 + 暴电熊</strong>：首塔，暴电熊雷属性，火系帕鲁 2-3 只即可。玩家等级 15+，帕鲁 20+ 更稳。暴电熊蓄电时可打断或躲技能。</p>
          <p><strong>莉莉 + 碧海龙</strong>：碧海龙水属性，雷系克制。建议 2 雷 + 1 火（备用）。碧海龙会飞，需远程或飞行帕鲁。</p>
          <p><strong>Marcus + 雪猛犸</strong>：雪猛犸冰属性高 HP，火系 + 持续输出。建议带治疗帕鲁或玩家远程磨血。</p>
          <p><strong>维克托 + 空涡龙</strong>：最终塔，空涡龙龙属性全游戏最强。需 Lv 50+ 玩家、传说帕鲁（异构格里芬、杰诺路达）或完美个体四攻帕鲁。建议先清小怪再集火空涡龙，带足恢复道具。</p>
          <div class="warn-box">
            <strong>⚠️ 空涡龙警告</strong>
            <p>空涡龙攻击范围大、伤害高，低等级挑战易团灭。建议 50 级+、至少 1 只 45 级+ 完美个体或传说帕鲁。可联机组队挑战，分工：1 人拉仇恨、2 人输出、1 人治疗。</p>
          </div>
        `
      },
      {
        id: 'tier',
        title: '帕鲁强度榜（0.6 版本）',
        content: `
          <p>0.6 版本新增多只帕鲁并调整平衡，以下按战斗、工作、坐骑三维度列出 T0-T2 分级，并附获取方式与适用场景。强度评估基于：Boss 战、PVP、基地自动化、探索效率四维综合。</p>
          <h3>战斗 T0 帕鲁</h3>
          <table class="data-table">
            <thead><tr><th>帕鲁</th><th>属性</th><th>优势</th><th>获取</th></tr></thead>
            <tbody>
              <tr><td>空涡龙</td><td>龙</td><td>全属性最高、可骑</td><td>Boss 塔 4、地图边缘</td></tr>
              <tr><td>异构格里芬</td><td>暗</td><td>高攻、机动</td><td>后期区域</td></tr>
              <tr><td>杰诺路达</td><td>龙</td><td>传说、高 HP</td><td>特殊 Boss</td></tr>
              <tr><td>阿努比斯</td><td>地</td><td>手工/伐木/采石全能</td><td> desert 区域</td></tr>
            </tbody>
          </table>
          <h3>工作 T0 帕鲁</h3>
          <table class="data-table">
            <thead><tr><th>帕鲁</th><th>工作</th><th>等级</th><th>备注</th></tr></thead>
            <tbody>
              <tr><td>阿努比斯</td><td>手工、伐木、采石</td><td>4</td><td>全能工人</td></tr>
              <tr><td>百合女王</td><td>种植</td><td>4</td><td>作物加速</td></tr>
              <tr><td>碧海龙</td><td>浇水</td><td>4</td><td>配合种植</td></tr>
              <tr><td>熔岩兽</td><td>冶炼</td><td>4</td><td>金属锭</td></tr>
              <tr><td>雷角马</td><td>发电</td><td>3</td><td>需 4 只满电</td></tr>
            </tbody>
          </table>
          <h3>坐骑 T0</h3>
          <p>空涡龙（飞行 + 战斗）、迅雷鸟（高速飞行）、火绒狐（早期地面）。0.6 新增坐骑帕鲁可查看科技树解锁条件。</p>
          <div class="tip-box">
            <strong>💡 早期过渡</strong>
            <p>Act 1 用火绒狐、企丸丸过渡，Act 2 捕获阿努比斯后基地效率质变。勿过早追求传说帕鲁，先升级与配种完美个体更务实。</p>
          </div>
        `
      },
      {
        id: 'early-game',
        title: '前期生存与科技优先级',
        content: `
          <p>《幻兽帕鲁》前期（0-25 级）资源紧张、帕鲁弱、科技未解锁，合理规划生存与科技顺序可平滑过渡。以下列出 Act 1 生存要点、科技解锁优先级、首只推荐帕鲁与常见死亡原因，避免前期卡关或重复跑尸。</p>
          <h3>科技解锁优先级</h3>
          <table class="data-table">
            <thead><tr><th>顺序</th><th>科技</th><th>作用</th><th>解锁等级</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>帕鲁球、帕鲁床</td><td>捕获、休息</td><td>1</td></tr>
              <tr><td>2</td><td>工作台、 campfire</td><td>基础制造、取暖</td><td>2</td></tr>
              <tr><td>3</td><td>箱子里程碑</td><td>传送、存储</td><td>4</td></tr>
              <tr><td>4</td><td>配种牧场</td><td>配种</td><td>6</td></tr>
              <tr><td>5</td><td>高级工作台</td><td>装备、建筑</td><td>10</td></tr>
            </tbody>
          </table>
          <h3>前期生存要点</h3>
          <p><strong>体温</strong>：夜晚寒冷、 desert 白天炎热，需 campfire 或冷却设施。死亡后掉落物品，可跑尸捡回。</p>
          <p><strong>首只帕鲁</strong>：火绒狐（火、易捕获）或 企丸丸（早期工作）。勿过早挑战高等级帕鲁，捕获率极低。</p>
          <p><strong>基地选址</strong>：近传送点、资源点、平坦地形。避开 Boss 巡逻区。</p>
          <div class="warn-box">
            <strong>⚠️ 常见死亡原因</strong>
            <p>体温耗尽、被高等级帕鲁秒杀、坠落、饥饿。建议随时携带食物、建 campfire、勿深入高等级区域。联机可队友复活，单人需跑尸。</p>
          </div>
        `
      },
      {
        id: 'multiplayer',
        title: '联机与 PVP 要点',
        content: `
          <p>《幻兽帕鲁》支持 4 人联机 Co-op 与 PVP 服务器，联机规则与单机有差异：经验共享、基地共建、PvP 规则等。以下列出联机设置、分工建议、PVP 规则与 0.6 版本联机更新要点。</p>
          <h3>联机模式对比</h3>
          <table class="data-table">
            <thead><tr><th>模式</th><th>人数</th><th>特点</th><th>适用</th></tr></thead>
            <tbody>
              <tr><td>Co-op PvE</td><td>1-4</td><td>共享进度、共建基地</td><td>好友合作</td></tr>
              <tr><td>PvP</td><td>1-32</td><td>可偷帕鲁、拆家</td><td>竞技向</td></tr>
              <tr><td>专用服务器</td><td>自定义</td><td>Mod、规则自定义</td><td>长期服</td></tr>
            </tbody>
          </table>
          <h3>Co-op 分工建议</h3>
          <ol>
            <li>1 人专探索 + 捕获，扩图开传送点</li>
            <li>1 人专基地建造 + 自动化</li>
            <li>1 人专 Boss 塔 + 战斗帕鲁培养</li>
            <li>1 人专配种 + 资源生产</li>
          </ol>
          <h3>PVP 要点</h3>
          <p>PvP 服务器可设置：是否允许偷帕鲁、拆家、死亡惩罚。建议新手先 PvE 熟悉再 PvP。PVP 需完美个体帕鲁 + 高等级装备，配种与基地资源是后盾。</p>
          <div class="tip-box">
            <strong>💡 联机存档</strong>
            <p>Co-op 进度保存在房主存档，房客退出不保留个人进度（除非同存档继续）。Dedicated Server 所有人共享世界。0.6 优化联机同步，减少卡顿。</p>
          </div>
        `
      },
      {
        id: 'endgame',
        title: '后期内容与 0.6 更新要点',
        content: `
          <p>通关 4 座 Boss 塔后，《幻兽帕鲁》仍有大量后期内容：传说帕鲁捕获、完美个体配种、基地极致自动化、PvP 竞技、0.6 新增区域与帕鲁。以下列出 Endgame 目标、0.6 更新摘要与长期游玩建议。</p>
          <h3>Endgame 目标清单</h3>
          <table class="data-table">
            <thead><tr><th>目标</th><th>内容</th><th>预计耗时</th></tr></thead>
            <tbody>
              <tr><td>全 Boss 塔</td><td>4 塔通关</td><td>20-40h</td></tr>
              <tr><td>传说帕鲁</td><td>空涡龙、杰诺路达等</td><td>+10h</td></tr>
              <tr><td>完美个体</td><td>四攻/四速 1000+ Power</td><td>+20h 配种</td></tr>
              <tr><td>全图鉴</td><td>捕获全部帕鲁</td><td>+30h</td></tr>
              <tr><td>基地极致</td><td>全自动化 + 多基地</td><td>+15h</td></tr>
            </tbody>
          </table>
          <h3>0.6 版本更新要点</h3>
          <p>新增帕鲁若干、新区域、平衡调整。配种公式微调，Power 上限仍为 1500（传说）。联机优化、新建筑与科技。建议更新后重新评估帕鲁强度榜，部分 T1 可能上调/下调。</p>
          <div class="tip-box">
            <strong>💡 长期游玩</strong>
            <p>帕鲁适合「建基地 → 配种 → 挑战 Boss → 扩图」循环。若 Boss 塔全通且完美个体达成，可尝试 PvP 或等待新内容更新。Mod 社区有扩展帕鲁、建筑 Mod，可延长寿命。</p>
          </div>
        `
      }
    ]
  }
];
