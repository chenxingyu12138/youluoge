const _GUIDES_P3 = [
  {
    id: 'cyberpunk',
    title: '赛博朋克 2077',
    desc: '2.2 版本全流派 Build、往日之影 DLC 任务链、传说义体/武器坐标与 NCPD 清剿路线，覆盖主线/支线/全结局。',
    category: 'openworld',
    cover: STEAM_HERO(1091500),
    hot: 84300,
    updated: '2026-06-02',
    tags: ['开放世界', 'RPG', '科幻', 'CDPR'],
    chapters: [
      {
        id: 'builds',
        title: '全流派 Build 详解（2.2 版）',
        content: `
          <p>《赛博朋克 2077》2.2 版本对义体容量、武器平衡与 Perk 树进行了多轮调整。首周目建议选「公司狗」开局（自带手枪与社交加成），Act 1 结束后再洗点转目标流派。所有 Build 在 25 级前都应优先点满「肉体 12 / 反应 12 / 技术 12 / 智力 12 / 镇定 12」五维门槛，否则无法装备高阶义体与传说武器。</p>
          <h3>四大主流流派对照表</h3>
          <table class="data-table">
            <thead><tr><th>流派</th><th>主属性</th><th>核心义体</th><th>核心武器</th><th>难度</th></tr></thead>
            <tbody>
              <tr><td>刀剑流</td><td>反应 20 + 肉体 12</td><td>桑德维斯坦 MK.3、二阶膝腱</td><td>螳螂刀 / 尽忠丸</td><td>★★☆</td></tr>
              <tr><td>手枪流</td><td>反应 18 + 技术 12</td><td>桑德维斯坦、智能连接</td><td>猫又 / 罗格</td><td>★★★</td></tr>
              <tr><td>黑客流</td><td>智力 20 + 镇定 15</td><td>操作系统：Biotech Σ、RAM 扩展</td><td>任意（靠快速破解）</td><td>★★★★</td></tr>
              <tr><td>肉体坦克</td><td>肉体 20 + 反应 12</td><td>大猩猩臂、皮下护甲</td><td>萨达拉 / 铁胆</td><td>★★☆</td></tr>
              <tr><td>技术枪匠</td><td>技术 20 + 反应 12</td><td>智能连接、Kiroshi 光学</td><td>分则能成 / 奥马哈</td><td>★★★</td></tr>
            </tbody>
          </table>
          <p>刀剑流为 2.2 最省心 Build：桑德维斯坦激活后时间减缓 85%，配合螳螂刀「重攻击连斩」可在 3 秒内清空 Boss 70% 血量。Perk 必点：「Blade Runner」「Shinobi」「Adrenaline Rush」。黑客流适合喜欢「隔墙清场」的玩家，内存需堆至 32+ 方可一次上传「系统崩溃 + 武器故障 + 短路」三连；配合「Anamorphic Lens」可隔墙扫描 NCPD 据点内全部敌人。</p>
          <div class="tip-box">
            <strong>💡 洗点建议</strong>
            <p>维克多诊所 2 万欧即可全洗。Act 2 前不要锁死流派——先各系点到 12 试手感，确定后再专精 20。往日之影 DLC 新增 Relic 技能树，刀剑流可点「Chimera 模组」获得额外 15% 暴击，与反应系 Perk 叠加后暴击率可超 80%。</p>
          </div>
        `
      },
      {
        id: 'cyberware',
        title: '义体系统与 Ripperdoc 路线',
        content: `
          <p>义体（Cyberware）分操作系统、骨架、神经系统、皮肤、面部五大类，受「人性值」与「义体容量」双重限制。2.2 版取消部分义体互斥，但操作系统仍只能装 1 个。人性低于 20% 会触发赛博精神病对话分支，不影响战斗但锁部分 NPC 选项。</p>
          <h3>各区域 Ripperdoc 推荐义体</h3>
          <table class="data-table">
            <thead><tr><th>区域</th><th>医生</th><th>必买义体</th><th>解锁条件</th></tr></thead>
            <tbody>
              <tr><td>Watson 小中国</td><td>维克多</td><td>基础 Kiroshi、二阶骨架</td><td>主线自动</td></tr>
              <tr><td>City Center</td><td>Cassius Ryder</td><td>桑德维斯坦 MK.2</td><td>街头声望 20</td></tr>
              <tr><td>Heywood 河谷</td><td>Padre 推荐医生</td><td>大猩猩臂、皮下护甲</td><td>完成「火葬场」支线</td></tr>
              <tr><td>Pacifica</td><td>Fingers（或替代）</td><td>Mantis Blades 初版</td><td>主线「生命之路」</td></tr>
              <tr><td>Dogtown</td><td>Black Market</td><td>桑德维斯坦 MK.3、Relic 模组</td><td>往日之影 DLC</td></tr>
            </tbody>
          </table>
          <p>操作系统三选一：<strong>桑德维斯坦</strong>（刀剑/手枪时停）、<strong>Biotechnica Mk.4</strong>（黑客 RAM 恢复加速）、<strong>Berserk</strong>（肉体流狂暴减伤 50%）。骨架推荐「Epic 二阶」以上，提供 30 格容量；神经系统必装「Kerenzikov」与「Reflex Tuner」，前者滑铲时自动触发慢动作，后者低血量时暴击 +50%。皮肤类「Subdermal Armor」每层 +20 护甲，堆 3 层后配合「Nomad 套装」可硬吃重机枪扫射。</p>
          <div class="warn-box">
            <strong>⚠️ 义体容量警告</strong>
            <p>不要过早安装「Legendary 全槽义体」——Act 1 容量上限仅 20，强行安装会导致无法插入操作系统。优先操作系统 &gt; 骨架 &gt; 武器类义体 &gt; 装饰类。Fingers 任务若选杀他，Pacifica 螳螂刀需等后续补丁或找替代 Ripperdoc，首周目建议不杀以保留购买渠道。</p>
          </div>
        `
      },
      {
        id: 'phantom',
        title: '往日之影 DLC 完整攻略',
        content: `
          <p>「往日之影」（Phantom Liberty）为独立资料片，入口位于 Dogtown 传送点，Act 2 中段自动解锁短信邀请。推荐 30 级、至少 1 件传说义体、主武器 +15 以上再进入，否则「黑墙」系列战斗难度陡增。DLC 主线约 15-20 小时，含 7 个核心任务与 12 条支线，最终抉择将永久改变 V 的命运与可用结局数量。</p>
          <h3>主线任务链顺序</h3>
          <ol>
            <li>「狗镇来信」→ 抵达 Dogtown 边境检查点，选择潜行或强攻</li>
            <li>「猎鸟」→ 接触 Songbird，解锁 Relic 技能树首节点</li>
            <li>「Firestarter」→ 渗透库尔特基地，此处首次出现「黑墙」侵蚀机制</li>
            <li>「Killing Moon」→ 月球发射台决战前最后一次存档点</li>
            <li>最终抉择：<strong>送 Songbird 上月球</strong> 或 <strong>交给 Reed</strong></li>
          </ol>
          <table class="data-table">
            <thead><tr><th>抉择</th><th>后果</th><th>独家奖励</th></tr></thead>
            <tbody>
              <tr><td>送 Songbird 上月球</td><td>Songbird 存活，Reed 关系破裂</td><td>「女王固定」智能手枪</td></tr>
              <tr><td>交给 Reed</td><td>Songbird 被移交，Reed 友好</td><td>「Overwatch」狙击步枪</td></tr>
              <tr><td>隐藏第三条</td><td>需 Relic 15 级 + 特定对话</td><td>DLC 真结局分支</td></tr>
            </tbody>
          </table>
          <p>隐藏任务线「Blackwall」：在「Firestarter」任务中选择与 Songbird 深入黑墙网络，后续解锁 3 个高难战斗与传说武器「Guts」（重机枪）。该武器为全游戏最高 DPS 之一，但人性消耗 +15%。DLC 新增 5 个结局变体，与本体 5 结局独立计算，全成就需至少 2 周目分别体验不同 Songbird/Reed 路线。</p>
          <div class="tip-box">
            <strong>💡 DLC 效率路线</strong>
            <p>进入 Dogtown 后先清 NCPD Scanner（Dogtown 区共 18 个），再推主线——Scanner 掉落 Relic 升级组件。Relic 技能优先点「Chimera Core」与「Neural Link」，前者提升刀剑暴击，后者减少快速破解冷却。勿在「Killing Moon」前完成所有支线，部分支线会锁定最终抉择对话选项。</p>
          </div>
        `
      },
      {
        id: 'legendary',
        title: '传说装备与武器坐标',
        content: `
          <p>传说（Legendary / Iconic）装备共 180+ 件，固定词缀不可重 roll，但可升级至 +5。Iconic 武器自带独特模组，拆解后无法重新获取，切勿误卖。以下坐标按 Act 推进顺序排列，配合 NCPD Scanner 可在一周目内集齐主流 Build 所需全部传说。</p>
          <h3>核心 Iconic 武器获取表</h3>
          <table class="data-table">
            <thead><tr><th>武器</th><th>类型</th><th>位置</th><th>前置条件</th></tr></thead>
            <tbody>
              <tr><td>猫又（Masamune）</td><td>智能手枪</td><td>公司广场 NCPD 事件</td><td>35 级，随机掉落</td></tr>
              <tr><td>萨达拉（Sasquatch）</td><td>霰弹枪</td><td>Pacifica 体育场旁仓库</td><td>技术 18 撬门</td></tr>
              <tr><td>尽忠丸</td><td>武士刀</td><td>完成「武士道」支线</td><td>反应 16</td></tr>
              <tr><td>分则能成</td><td>智能步枪</td><td>完成帕南支线「生命之路」</td><td>技术 18</td></tr>
              <tr><td>罗格（Rogues）</td><td>手枪</td><td>结局「星星」后持有</td><td>完成罗格相关结局</td></tr>
              <tr><td>女王固定</td><td>手枪</td><td>DLC Songbird 路线</td><td>往日之影主线</td></tr>
            </tbody>
          </table>
          <p>传说义体无固定坐标，主要通过：Ripperdoc 声望购买、NCPD Scanner 清剿奖励、固定任务奖励三渠道。桑德维斯坦 MK.3 仅 Dogtown 黑市出售，售价 45 000 欧，需完成 DLC 主线第一章后解锁库存。护甲方面，「Corpo 套装」四件凑齐后增加 25% 暴击伤害，散件分别位于公司塔楼安保室、Helman 公寓、固定 NCPD 事件。</p>
          <div class="warn-box">
            <strong>⚠️ 拾取注意</strong>
            <p>部分传说武器存在「等级缩放」——早拿则低等级，后续不会自动升级。建议 30 级后再拾取固定坐标传说，或用「制造」系统重新 craft 一次同步等级。公司广场猫又若 25 级拾取，到 50 级仍显示 25 级伤害，需花素材重制。</p>
          </div>
        `
      },
      {
        id: 'ncpd',
        title: 'NCPD 清剿与刷钱路线',
        content: `
          <p>NCPD Scanner Hustle 为全图 repeatable 事件，清完单个区域所有红标后该区域 Scanner 永久消失并奖励传说装备/欧金。全地图约 220+ 个 Scanner，按区域分批清剿效率最高。2.2 版 Scanner 敌人等级随 V 等级缩放，50 级后掉落池稳定为传说品质。</p>
          <h3>分区域清剿效率表</h3>
          <table class="data-table">
            <thead><tr><th>顺序</th><th>区域</th><th>Scanner 数</th><th>预计耗时</th><th>备注</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Watson</td><td>28</td><td>2 h</td><td>密度最高，优先清</td></tr>
              <tr><td>2</td><td>Heywood</td><td>32</td><td>2.5 h</td><td>含大量室内战</td></tr>
              <tr><td>3</td><td>City Center</td><td>24</td><td>2 h</td><td>敌人护甲高，推荐黑客</td></tr>
              <tr><td>4</td><td>Santo Domingo</td><td>26</td><td>2 h</td><td>开阔地形，载具战多</td></tr>
              <tr><td>5</td><td>Pacifica</td><td>22</td><td>2 h</td><td>等级偏高，40+ 再来</td></tr>
              <tr><td>6</td><td>Badlands</td><td>18</td><td>1.5 h</td><td>需载具，Nomad 友好</td></tr>
            </tbody>
          </table>
          <p>刷钱公式：单个 Scanner 平均 800-1500 欧 + 1 件随机装备。配合「智力 20 黑客」隔墙上传「系统崩溃」，可在 30 秒内清一个据点，时薪约 15 万欧。肉体流用大猩猩臂「地面猛击」AOE 清小怪，桑德维斯坦冷却期间用 Kerenzikov 滑铲衔接。清完 Watson + Heywood 后资金足够购买全套传说义体，无需做支线赏金任务。</p>
          <div class="tip-box">
            <strong>💡 黑客清场口诀</strong>
            <p>扫描 → 标记全部 → 上传顺序：短路（控场）→ 武器故障（缴械）→ 系统崩溃（收尾）。RAM 不足时只上传「系统崩溃」，直接秒杀普通敌人。精英敌人需先「短路」再「义体故障」禁用其桑德维斯坦/狂暴。</p>
          </div>
        `
      },
      {
        id: 'endings',
        title: '全结局与成就指南',
        content: `
          <p>本体含 5 个主线结局 + 1 个秘密结局；往日之影 DLC 另增 2 个独立结局。结局判定点在「Nocturne Op55N1」任务，进入荒坂塔前务必手动存档。不同结局影响成就、可持有 Iconic 武器、以及 Johnny 好感度结算。</p>
          <h3>本体五结局触发条件</h3>
          <table class="data-table">
            <thead><tr><th>结局</th><th>名称</th><th>关键选择</th><th>成就</th></tr></thead>
            <tbody>
              <tr><td>太阳</td><td>The Sun</td><td>接受华子帮助，成为传奇</td><td>太阳</td></tr>
              <tr><td>星星</td><td>The Star</td><td>跟帕南离开夜之城</td><td>星星</td></tr>
              <tr><td>恶魔</td><td>The Devil</td><td>签荒坂合约，成为公司工具</td><td>恶魔</td></tr>
              <tr><td>自杀</td><td>The Temperance</td><td>让 Johnny 控制身体</td><td>节制</td></tr>
              <tr><td>秘密</td><td>Don't Fear the Reaper</td><td>Johnny 好感 70+ 且选特定对话</td><td>秘密</td></tr>
            </tbody>
          </table>
          <p>Johnny 好感度提升：完成所有 Johnny 相关对话选「友好/反公司」选项、在任务中带 Johnny 出场、完成「Chippin' In」支线拿到 Johnny 的吉他。好感 70+ 后在 Rooftop 对话选「Let you take my body」进入秘密结局，该结局战斗为全游戏最难之一，需带满药与桑德维斯坦。全成就最少需 2 周目：一周目太阳 + 秘密（若好感够），二周目星星/恶魔/节制补成就。</p>
          <div class="warn-box">
            <strong>⚠️ 不可逆警告</strong>
            <p>「点错」任务（Point of No Return）触发后无法返回开放世界，未完成的 NCPD Scanner、支线、Iconic 收集将锁死在本周目。进入荒坂塔前确认：NCPD 清剿进度、帕南/朱迪/瑞弗好感支线、Iconic 武器是否已拾取。DLC 结局与本体独立，可在本体结局前完成 DLC 全部内容。</p>
          </div>
        `
      },
      {
        id: 'combat-tips',
        title: '战斗机制与探索技巧',
        content: `
          <p>2.2 版战斗系统强调「护甲类型 × 伤害类型」克制：轻甲怕钝击、重甲怕电磁、赛博改造敌人怕黑客。敌人头顶图标：蓝色盾（掩体后）、红色骷髅（精英）、紫色（网络接入点可 hack）。掩体可被「技术 15+」武器穿透，Intel 流 Perk「Penetrator」可穿透轻掩体直接命中。</p>
          <h3>常见战斗场景应对</h3>
          <table class="data-table">
            <thead><tr><th>场景</th><th>推荐手段</th><th>避免</th></tr></thead>
            <tbody>
              <tr><td>室内 CQB</td><td>桑德维斯坦 + 螳螂刀</td><td>长枪管武器卡墙角</td></tr>
              <tr><td>开放区域狙击</td><td>智能武器 + 掩体 hack</td><td>纯肉体冲锋</td></tr>
              <tr><td>多精英同场</td><td>系统崩溃逐个点名</td><td>桑德维斯坦冲人群</td></tr>
              <tr><td>载具追逐</td><td>车辆 hack「急停」</td><td>下车对射</td></tr>
              <tr><td>Boss 战（Adam Smasher 等）</td><td>时停 + 暴击连斩</td><td>正面硬抗火箭</td></tr>
            </tbody>
          </table>
          <p>探索方面：扫描模式（按住左 Alt）可高亮可交互物品、敌人弱点与数据芯片。电梯/门禁需对应属性：肉体 20 强行开门、技术 20 短路、智力 20 远程 hack 面板。快速旅行点（NCART / 地铁）在 Act 1 后期解锁，比驾车穿越全城节省 80% 时间。拍照模式可暂停战斗（单人），用于欣赏义体细节或截图成就「City of Dreams」。</p>
          <div class="tip-box">
            <strong>💡 综合效率建议</strong>
            <p>Act 1 完成「The Pickup」后立刻做 NCPD Watson 区；Act 2 初拿桑德维斯坦 MK.2 转刀剑流；30 级进 DLC；50 级清 Pacifica 剩余 Scanner。按此路线 60-80 小时可 100% 全收集 + 全结局，且战斗压力最小。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'sekiro',
    title: '只狼：影逝二度',
    desc: '弹反节奏训练、技能树优先级、Boss 破戒僧/苇名一心打法、义手忍具搭配与全结局触发条件，含双难与 NG+ 建议。',
    category: 'action',
    cover: STEAM_HERO(814380),
    hot: 79800,
    updated: '2026-06-02',
    tags: ['动作', '魂系', 'FromSoftware', '弹反'],
    chapters: [
      {
        id: 'deflect',
        title: '弹反训练完全指南',
        content: `
          <p>《只狼》的核心战斗逻辑不是「闪避流」而是「弹反流（Deflect）」：在敌人攻击命中瞬间按 L1（格挡键），成功则积累对方架势条，满后触发「忍杀」。完美弹反（Just Deflect）有额外架势伤害与短暂硬直窗口。普通格挡会扣血并积累自身架势，非必要不使用。整个游戏 90% 的 Boss 战本质都是弹反节奏练习。</p>
          <h3>分阶段训练路线</h3>
          <table class="data-table">
            <thead><tr><th>阶段</th><th>训练对象</th><th>位置</th><th>练习目标</th></tr></thead>
            <tbody>
              <tr><td>入门</td><td>苇名流武士（可复活）</td><td>天守阁上层</td><td>单段攻击弹反节奏</td></tr>
              <tr><td>进阶</td><td>佐濑（苇名流）</td><td>天守阁道场</td><td>连续 3-5 段连弹</td></tr>
              <tr><td>高级</td><td>孤影众 太刀足</td><td>金刚山/仙峰寺</td><td>快慢刀混合识别</td></tr>
              <tr><td>毕业</td><td>内部大师（可选）</td><td>天守阁隐藏</td><td>全招式弹反验证</td></tr>
            </tbody>
          </table>
          <p>弹反时机口诀：<strong>听声音 &gt; 看动画</strong>。刀锋出鞘「唰」声时按 L1，比视觉反应快约 0.1 秒。敌人「危」字攻击分三类——突刺（可识破踩头）、下段 sweep（需跳踩）、Grab（只能闪避）。未解锁「识破」前遇到突刺只能侧闪，因此识破是技能树第一优先级。</p>
          <div class="tip-box">
            <strong>💡 弹反手感调整</strong>
            <p>设置中开启「UI 音效增强」便于听刀声。帧率稳定 60 FPS 以上时弹反窗口一致；30 FPS 下需略提前按键。PC 版可改键将 L1 映射到更易按的键位，但不建议用宏——弹反需要节奏感，宏会破坏学习曲线。</p>
          </div>
        `
      },
      {
        id: 'skills',
        title: '技能树优先级与流派',
        content: `
          <p>技能点通过击败 Boss/精英获得，不可洗点，因此顺序至关重要。三大分支：「苇名流」（战斗）、「忍杀」（潜行）、「义手」（忍具）。首周目 100% 先点满苇名流核心，忍杀分支仅点「空中忍杀」一项即可，义手分支按需解锁特定忍具强化。</p>
          <h3>苇名流技能优先级表</h3>
          <table class="data-table">
            <thead><tr><th>优先级</th><th>技能名</th><th>效果</th><th>理由</th></tr></thead>
            <tbody>
              <tr><td>S</td><td>识破（Mikiri Counter）</td><td>自动弹反突刺并大幅削韧</td><td>全游戏最值技能，必第一时间点</td></tr>
              <tr><td>S</td><td>拜刀（Ashina Cross）</td><td>增加弹反后追击伤害</td><td>弹反流核心输出手段</td></tr>
              <tr><td>A</td><td>活字流（活字）</td><td>连击追加伤害</td><td>提升平 A 与弹反后输出</td></tr>
              <tr><td>A</td><td>樱舞（Sakura Dance）</td><td>对空 AOE 斩击</td><td>破戒僧二阶段必备</td></tr>
              <tr><td>B</td><td>一字斩·改</td><td>突进斩击</td><td>追击与拉近用</td></tr>
              <tr><td>B</td><td>苇名流·逆回</td><td>弹反后快速反击</td><td>高阶 Boss 战锦上添花</td></tr>
            </tbody>
          </table>
          <p>忍杀分支仅推荐「空中忍杀」：对空中敌人直接忍杀，对蝴蝶夫人、破戒僧等有空战的 Boss 极其实用。义手分支随忍具解锁逐步点：斧强化（破盾）、爆竹强化（打断）、长矛强化（拉人）。不要过早点「忍义手消耗减少」——该技能在获得 10 种忍具后才体现价值。</p>
          <div class="warn-box">
            <strong>⚠️ 技能点陷阱</strong>
            <p>「苇名流·一文字」系列看似伤害高，但前摇长、可被 Boss 打断，实战远不如弹反流稳定。双难模式下敌人架势恢复加速，更不应依赖重击流。若已误点，后续周目再修正，本周目用识破 + 拜刀仍可行。</p>
          </div>
        `
      },
      {
        id: 'boss',
        title: '核心 Boss 机制拆解',
        content: `
          <p>只狼 Boss 战分「架势流」与「血量流」两类：前者弹反填架势条后忍杀（如苇名一心、弦一郎），后者需扣血至 0（如狮子猿、破戒僧幻影）。以下拆解全游戏最难的三个 Boss，掌握后可类推其他战斗。</p>
          <h3>破戒僧（幻影）三阶段</h3>
          <p><strong>一阶段</strong>：标准弹反战，注意「危」字下段 sweep 需跳踩而非弹反。长枪戳刺可识破。<strong>二阶段</strong>：召唤 4 个分身同步攻击——正确应对是「跑圈」而非弹反分身，约 10 秒后分身消失，本体出招再弹反。带「紫伞」可吸收幽灵伤害。<strong>三阶段</strong>：本体 + 分身同时存在，节奏加快；识破突刺后接拜刀输出，樱舞对空清理分身。</p>
          <h3>苇名一心·剑圣（最终战）</h3>
          <table class="data-table">
            <thead><tr><th>阶段</th><th>新增机制</th><th>应对策略</th></tr></thead>
            <tbody>
              <tr><td>一阶段</td><td>纯剑术，标准弹反</td><td>识破 + 拜刀，勿贪刀</td></tr>
              <tr><td>二阶段</td><td>长枪 + 火枪混合</td><td>枪刺可识破；火枪用义手「伞」或侧闪</td></tr>
              <tr><td>三阶段</td><td>雷属性攻击</td><td>雷返：跳起被雷击中瞬间按 R1</td></tr>
            </tbody>
          </table>
          <p>雷返是一心三阶段核心：成功则 Boss 架势条大削且长时间硬直，可连放 2-3 次忍杀伤害。练习雷返可回天守阁找苇名流武士（非必须）。一阶段到三阶段无回血机会，建议带 3 个「回生」+ 8 个「消伤」。</p>
          <div class="tip-box">
            <strong>💡 Boss 战通用原则</strong>
            <p>弹反 2-3 次 → 拜刀或 R1 追击 → 若 Boss 未破防则继续弹反，勿贪第四刀。Boss 架势满后忍杀动画期间无敌，可用来喘口气。双难下一心架势恢复极快，必须在硬直窗口内最大化输出。</p>
          </div>
        `
      },
      {
        id: 'prosthetic',
        title: '义手忍具完全搭配',
        content: `
          <p>义手忍具共 10 种，通过探索获得「忍具材料」在佛龛处升级。每种忍具有「消耗量」与「效果等级」两维升级，优先升级常用忍具至 +3。忍具在 Boss 战中承担「破机制」角色，而非主要输出来源。</p>
          <h3>忍具 PvE 推荐表</h3>
          <table class="data-table">
            <thead><tr><th>忍具</th><th>主要用途</th><th>针对 Boss</th><th>升级优先</th></tr></thead>
            <tbody>
              <tr><td>机关斧</td><td>破盾、削 Posture</td><td>弦一郎、重盾兵</td><td>★★★★★</td></tr>
              <tr><td>爆竹</td><td>打断蓄力、致盲</td><td>蝴蝶夫人、狮子猿</td><td>★★★★</td></tr>
              <tr><td>长矛</td><td>拉人、对空</td><td>破戒僧、苇名弦一郎</td><td>★★★★</td></tr>
              <tr><td>机关伞</td><td>吸收/反弹伤害</td><td>破戒僧（幽灵）</td><td>★★★</td></tr>
              <tr><td>机关枪</td><td>远程削血</td><td>樱龙（非必须）</td><td>★★</td></tr>
              <tr><td>机关蛇</td><td>毒/酸</td><td>狮子猿二阶段</td><td>★★★</td></tr>
              <tr><td>机关铃</td><td>对动物/怨灵</td><td>无头、猴子</td><td>★★</td></tr>
              <tr><td>机关雾</td><td>隐身背刺</td><td>杂兵清场</td><td>★★</td></tr>
            </tbody>
          </table>
          <p>Boss 特化搭配：蝴蝶夫人带「樱火」（专门火焰伤害 + 对空）；苇名一心三阶段前确保「神之雪」满配（雷抗）；狮子猿二阶段用「机关蛇」喷酸触发「恐怖」机制可大幅简化。口哨对动物系 Boss（如蛇眼）有额外控制效果。忍具与攻击键（R1/R2）共用节奏，施放忍具后需等硬直结束再弹反，否则会吃刀。</p>
          <div class="warn-box">
            <strong>⚠️ 忍具使用禁忌</strong>
            <p>Boss 架势条将满时勿放忍具——忍具动画期间 Boss 架势会开始恢复。爆竹对一心无效（免疫致盲）。机关枪对一心三阶段雷返练习有干扰，该阶段建议只用剑 + 雷返。</p>
          </div>
        `
      },
      {
        id: 'endings',
        title: '全结局触发条件',
        content: `
          <p>只狼共有 4 个主要结局，判定点在击败「苇名一心·剑圣」后的过场对话选择，以及此前是否完成特定支线。结局无「点数」系统，仅看关键任务完成与否。要体验全部结局需 4 周目或 Chapter Select 功能（通关后解锁）。</p>
          <h3>四结局条件对照</h3>
          <table class="data-table">
            <thead><tr><th>结局</th><th>日文名</th><th>触发条件</th><th>战斗变化</th></tr></thead>
            <tbody>
              <tr><td>断臂（默认）</td><td>Shura</td><td>击败一心，选择「遵守戒律」</td><td>标准一心战</td></tr>
              <tr><td>修罗</td><td>Shura Ending</td><td>与苇名开战，杀永真 + 一心</td><td>额外 Boss 永真、一心</td></tr>
              <tr><td>回归</td><td>Return</td><td>完成「龙之还乡」支线</td><td>标准一心战</td></tr>
              <tr><td>断臂（真）</td><td>Immortal Severance</td><td>归还樱龙之力，选「断臂」</td><td>标准一心战</td></tr>
            </tbody>
          </table>
          <p>「龙之还乡」支线：在天守阁与「变若皇子」对话获「樱龙泪滴」，收集 3 种材料（常樱之冰、神域之樱、馨香水莲）后交给皇子，触发归还仪式。该支线可在打一心前任意时点完成。「修罗」结局需在「苇名无影」任务链中选择背叛，将多战 2 个 Boss（永真极强，建议先练弹反再触发）。「回归」与「断臂真」结局 CG 不同，但战斗内容一致。</p>
          <div class="tip-box">
            <strong>💡 结局收集顺序建议</strong>
            <p>首周目默认断臂，熟悉一心战斗。二周目做龙之还乡 → 回归。三周目触发修罗（最难，永真 + 一心连战）。四周目断臂真补 CG。Chapter Select 可回到「天守阁」前重选分支，无需完整重玩。</p>
          </div>
        `
      },
      {
        id: 'explore',
        title: '探索、收集与支线',
        content: `
          <p>只狼地图采用节点式互通设计：佛龛（Idol）传送、各区域捷径单向开启。全收集含：40+ 技能点来源（Boss/精英）、10 种忍具、4 种义手改造、3 条分支结局支线、以及「源之宫」隐藏区域。错过不可补救的仅「龙之还乡」材料与部分 NPC 死亡事件。</p>
          <h3>关键支线与奖励</h3>
          <table class="data-table">
            <thead><tr><th>支线</th><th>触发 NPC</th><th>奖励</th><th>截止点</th></tr></thead>
            <tbody>
              <tr><td>龙之还乡</td><td>变若皇子</td><td>回归结局</td><td>打一心前</td></tr>
              <tr><td>苇名无影</td><td>御田</td><td>修罗结局分支</td><td>天守阁决战前</td></tr>
              <tr><td>猿王</td><td>小太郎</td><td>太郎柿、信息</td><td>无严格限制</td></tr>
              <tr><td>神隐</td><td>米娘</td><td>特殊道具、剧情</td><td>仙峰寺前</td></tr>
              <tr><td>源之宫</td><td>破戒僧（前置）</td><td>顶级素材、挑战</td><td>后期</td></tr>
            </tbody>
          </table>
          <p>探索技巧：每到新区域先绕一圈开捷径再推 Boss，死亡后可快速跑尸。「钩绳」可上绝大多数高台，注意扫描天花板是否有可钩点。水下区域（源之宫、水生村）需先击败「狮子猿」获「潜水」能力。精英敌人（紫名）首次击杀给技能点，二周目不再给但掉落素材翻倍。</p>
          <div class="warn-box">
            <strong>⚠️ 不可逆 NPC 死亡</strong>
            <p>「红莲寺」事件后部分 NPC 会死亡或离开；「内府入侵」阶段天守阁部分对话选项会锁分支。建议在打樱龙前完成所有 NPC 对话，打一心前确认龙之还乡材料已集齐。小太郎若选错选项会永久失踪，参考攻略再选。</p>
          </div>
        `
      },
      {
        id: 'ng-plus',
        title: '二周目、双难与 NG+ 建议',
        content: `
          <p>通关后开启 NG+（新游戏+），敌人血量/架势恢复提升约 40%，但保留全部技能、忍具与素材。NG+ 可继续收集遗漏内容、刷「技能残卷」解锁额外技能、挑战「双难」（Belts of Judgment + Demon Bell）。双难模式下敌人攻击可一击秒杀，仅推荐完全掌握弹反后开启。</p>
          <h3>周目差异对照</h3>
          <table class="data-table">
            <thead><tr><th>项目</th><th>一周目</th><th>NG+</th><th>双难 NG+</th></tr></thead>
            <tbody>
              <tr><td>敌人血量</td><td>基准</td><td>+40%</td><td>+40% 且一击死</td></tr>
              <tr><td>技能点</td><td>Boss 掉落</td><td>不再掉落</td><td>不再掉落</td></tr>
              <tr><td>素材</td><td>标准</td><td>×2</td><td>×2</td></tr>
              <tr><td>成就</td><td>可解锁</td><td>补漏</td><td>「修罗之路」等</td></tr>
            </tbody>
          </table>
          <p>NG+ 最优路线：直接 rush 未拿忍具/技能点 Boss → 补支线结局 → 双难下一心挑战。Chapter Select 比完整 NG+ 更适合补单个结局。「内部大师」Mod 级难度挑战：天守阁隐藏 NPC，全程弹反对话，无奖励但可作毕业考。速通 Any% 约 1.5 小时，100% 全收集约 35-45 小时（含 4 结局）。</p>
          <div class="tip-box">
            <strong>💡 双难开启建议</strong>
            <p>先 NG+ 无难通关验证 BUILD 完整度，再开 Demon Bell。Bell 可在佛龛随时开关，可先开 Bell 练某一 Boss 再关 Bell 正式打。修罗结局 + 双难 + 永真为一心连战为全游戏最高难组合，建议最后挑战。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'mh-wilds',
    title: '怪物猎人：荒野',
    desc: '14 武器改动详解、锁刃龙/白炽龙机制拆解、护石炼金与 Endgame 防具白装路线，含联机礼仪与历战王循环。',
    category: 'action',
    cover: STEAM_HERO(2246340),
    hot: 91200,
    updated: '2026-06-02',
    tags: ['动作', '共斗', 'Capcom', '狩猎'],
    chapters: [
      {
        id: 'weapons',
        title: '14 武器改动与上手推荐',
        content: `
          <p>《怪物猎人：荒野》（Monster Hunter Wilds）对全 14 种武器进行了系统性重做，核心改动方向为：降低入门门槛、提升动作衔接流畅度、Endgame 各武器 DPS 差距缩小至 15% 以内。新手选武器应优先考虑「容错率」而非极限输出——首周目推荐太刀或大剑，Endgame 再按个人喜好转双刀/轻弩刷素材。</p>
          <h3>Wilds 版武器改动要点</h3>
          <table class="data-table">
            <thead><tr><th>武器</th><th>核心改动</th><th>Endgame 推荐度</th><th>上手难度</th></tr></thead>
            <tbody>
              <tr><td>太刀</td><td>见切窗口 +40%，气刃兜割伤害 +15%</td><td>★★★★★</td><td>★★☆</td></tr>
              <tr><td>大剑</td><td>真蓄力可 360° 转向，拔刀术强化</td><td>★★★★</td><td>★★☆</td></tr>
              <tr><td>双刀</td><td>鬼人化体力 -20%，乱舞可取消</td><td>★★★★★</td><td>★★★</td></tr>
              <tr><td>长枪</td><td>突刺连段末段追加移动斩</td><td>★★★</td><td>★★★</td></tr>
              <tr><td>弓</td><td>引导箭系统重做，曲射判定优化</td><td>★★★★</td><td>★★★★</td></tr>
              <tr><td>轻弩</td><td>特殊弹药装填速度 +30%</td><td>★★★★</td><td>★★☆</td></tr>
              <tr><td>大锤</td><td>旋转攻击可边移动边蓄力</td><td>★★★</td><td>★★★</td></tr>
              <tr><td>盾斧</td><td>红盾防御判定放宽</td><td>★★★★</td><td>★★★★</td></tr>
            </tbody>
          </table>
          <p>太刀仍为 Wilds 最均衡选择：见切成功回气 + 开刃，气刃兜割（Iai Spirit Slash）成为主要爆发手段。大剑真蓄可转向后，不再需要精确站位，适合喜欢「一刀流」的玩家。双刀 Endgame 配合「锁刃龙 4 件套」会心 Build，DPS 实测可达太刀 95% 以上，且机动性更强。</p>
          <div class="tip-box">
            <strong>💡 武器试用建议</strong>
            <p>训练场（Training Area）可零成本试全武器，每个武器完成「基础连招教学」奖励 5000 zenny。建议每种武器至少打 1 场低阶狩猎再决定主武器，切换武器无惩罚，素材箱通用。</p>
          </div>
        `
      },
      {
        id: 'story-boss',
        title: '主线 Boss 机制拆解',
        content: `
          <p>Wilds 主线共 5 章，关底 Boss「锁刃龙」（Lacerator Dragon）与隐藏 Boss「白炽龙」（White Inferno）机制复杂度显著高于前作同阶段怪物。以下按阶段拆解核心机制，联机与单通用。</p>
          <h3>锁刃龙（第三章关底）三阶段</h3>
          <table class="data-table">
            <thead><tr><th>阶段</th><th>机制名</th><th>触发表现</th><th>应对方法</th></tr></thead>
            <tbody>
              <tr><td>一阶段</td><td>锁链扫击</td><td>尾部锁链横向 180° 扫</td><td>向锁链反方向滚，切龙尾</td></tr>
              <tr><td>二阶段</td><td>飞天俯冲</td><td>升空 3 秒后俯冲</td><td>投射器钩索拉近 → 登龙/兜割</td></tr>
              <tr><td>二阶段</td><td>锁链束缚</td><td>锁链缠身定身 2 秒</td><td>连打挣脱 / 队友攻击锁链</td></tr>
              <tr><td>三阶段</td><td>狂化</td><td>全身发红，攻速 +50%</td><td>优先断尾，断尾后狂化结束</td></tr>
            </tbody>
          </table>
          <p>锁刃龙二阶段飞天俯冲后有约 4 秒硬直窗口，是主要输出时段。投射器「钩索发射器」需在战斗前装配，瞄准 Boss 腹部发光点发射。三阶段「狂化」期间防御力下降 30% 但攻击频率极高，建议带「体势 5」或「防御 5」技能硬抗小招、只躲大招。</p>
          <h3>白炽龙（隐藏 Boss）</h3>
          <p>解锁条件：HR 50+，完成「Ancient Ruins」探索度 100%。全屏吐息：躲至翼下安全区（头前 45° 为危险区）。狂暴阶段优先断尾——断尾后吐息范围减半且频率降低。属性弱冰，冰属性武器伤害 +30%。</p>
          <div class="warn-box">
            <strong>⚠️ 主线 Boss 装备检查</strong>
            <p>锁刃龙战推荐 HR 30+、武器 Rare 5 以上。未达 Rare 5 时伤害不足会导致三阶段超时（35 分钟）。白炽龙 HR 50 准入但建议 HR 80+ 再挑战，否则一击半血，容错极低。</p>
          </div>
        `
      },
      {
        id: 'armor',
        title: 'Endgame 防具与护石路线',
        content: `
          <p>Wilds Endgame 装备体系围绕「锁刃龙系列」与「白炽龙系列」两套 Bis 展开。HR 100 为当前版本等级上限，护石炼金是 Endgame 最大随机性来源。目标 Build：锁刃龙 4 件 + 白炽龙 1 件（或反之），核心技能「攻击 7 / 看破 7 / 超会心 3 / 弱点特效 3」。</p>
          <h3>Endgame 防具白装路线</h3>
          <table class="data-table">
            <thead><tr><th>HR 区间</th><th>目标套装</th><th>核心技能</th><th>素材来源</th></tr></thead>
            <tbody>
              <tr><td>30-50</td><td>锁刃龙 2 件 + 混装</td><td>攻击 4 / 体势 3</td><td>主线锁刃龙</td></tr>
              <tr><td>50-80</td><td>锁刃龙 4 件</td><td>超会心 2 / 看破 4</td><td>历战锁刃龙</td></tr>
              <tr><td>80-100</td><td>锁刃龙 4 + 白炽 1</td><td>超会心 3 / 攻击 7</td><td>历战白炽龙</td></tr>
              <tr><td>100+</td><td>自定义混装</td><td>根据武器微调</td><td>历战王素材</td></tr>
            </tbody>
          </table>
          <p>护石炼金：铁匠处消耗「历战王痕迹」炼金，每次 3 选 1。优先目标「攻击 4 看破 2 超心 1」（God Roll）。带「幸运」技能护符可提升稀有护石权重约 8%。炼金前务必确认未装备中的护石已卸下——误炼已装备护石不可撤销。</p>
          <div class="tip-box">
            <strong>💡 刷护石效率</strong>
            <p>历战王任务 15 分钟/场，每场掉落 2-3 个痕迹。联机 4 人各刷各的，效率 ×4。周三/周六活动任务「痕迹双倍」务必清空。目标 200 次炼金内出 1 个 God Roll 为正常概率。</p>
          </div>
        `
      },
      {
        id: 'multiplayer',
        title: '联机狩猎礼仪与配装',
        content: `
          <p>Wilds 支持 4 人联机，匹配系统按 HR 与任务等级匹配。联机与单机怪物血量倍率约 ×2.5，但 4 人输出远超倍率，故联机效率高于单刷。遵守基本礼仪可大幅提升通过率与队友好感。</p>
          <h3>联机必备礼仪清单</h3>
          <table class="data-table">
            <thead><tr><th>行为</th><th>正确做法</th><th>错误做法</th></tr></thead>
            <tbody>
              <tr><td>治疗</td><td>带 Life Powder 或 Wide Range 5</td><td>只奶自己不奶队友</td></tr>
              <tr><td>陷阱</td><td>留 1 个给控制手定怪</td><td>连续放 3 陷阱浪费</td></tr>
              <tr><td>捕获任务</td><td>看任务图标（网 vs 剑）</td><td>把该捕获的打死</td></tr>
              <tr><td>部位破坏</td><td>联机优先断尾/断角</td><td>单人思维只打头</td></tr>
              <tr><td>猫车</td><td>猫车后观察再出击</td><td>猫车 3 次立刻三猫</td></tr>
              <tr><td>交流</td><td>用定型文/贴纸沟通</td><td>全程静音 0 互动</td></tr>
            </tbody>
          </table>
          <p>联机配装建议：至少 1 人带「广域 5 + 生命粉」当辅助；1 人带「昏厥 3 + 陷阱」当控制；2 人纯输出。太刀/双刀输出位优先「锁刃 4 + 超心 3」，长枪/盾斧坦克位堆「防御 7 + 耳栓 5」。进入任务前检查：是否携带「秘药 ×10」「生命粉 ×10」「陷阱工具 ×1」。</p>
          <div class="warn-box">
            <strong>⚠️ 三猫与踢人</strong>
            <p>联机三猫失败会连累全队任务失败。HR 不足强行进高阶任务易被踢。部分玩家设置「HR 差距 &gt; 20 自动拒绝」，进门前确认自身 HR 符合任务要求。恶意使用「爆弹」炸队友会被举报封禁。</p>
          </div>
        `
      },
      {
        id: 'endgame',
        title: 'Endgame 循环与历战王',
        content: `
          <p>HR 100 后进入 Endgame 循环：历战王狩猎 → 炼护石 → 更新武器/防具 → 挑战「黑龙级」事件怪。每 2 周 Capcom 更新活动任务，掉落限定外观、表情与家具。当前版本 Endgame 核心 KPI：全武器 Rare 8 至少 1 把、God Roll 护石 1 个、全图鉴 100%。</p>
          <h3>Endgame 周循环建议</h3>
          <table class="data-table">
            <thead><tr><th>日期</th><th>活动</th><th>目标</th><th>耗时</th></tr></thead>
            <tbody>
              <tr><td>周一</td><td>历战王轮换</td><td>刷痕迹炼护石</td><td>2-3 h</td></tr>
              <tr><td>周三/六</td><td>痕迹双倍</td><td>加倍炼金</td><td>2 h</td></tr>
              <tr><td>周五</td><td>新活动任务</td><td>限定外观</td><td>1 h</td></tr>
              <tr><td>周末</td><td>黑龙级事件</td><td>顶级素材</td><td>3-4 h</td></tr>
            </tbody>
          </table>
          <p>历战王与普怪机制差异：攻击力 +40%、新招 1-2 个、部分弱点变化。例：历战锁刃龙三阶段狂化时间延长 30 秒，需更高爆发。黑龙级事件怪（如「极白炽龙」）为当前最难内容，推荐 HR 100 + God Roll 护石 + 全员语音联机。</p>
          <div class="tip-box">
            <strong>💡 长期目标规划</strong>
            <p>先专精 1 武器到 Bis → 炼出 God Roll 护石 → 再练第二武器。不要 14 武器同时练，素材需求 ×14 不现实。全图鉴需捕获每种怪物至少 1 次，捕获任务用「麻痹陷阱 + 麻醉球」，别用眠陷阱（部分怪免疫眠）。</p>
          </div>
        `
      },
      {
        id: 'ecology',
        title: '生态位、环境利用与投射器',
        content: `
          <p>Wilds 强调「Living Ecosystem」：怪物之间有捕食/共生/领地争夺关系，猎人可利用环境生物与环境陷阱大幅简化战斗。投射器（Slinger）为 Wilds 新增核心系统，类似 World 的 Clutch Claw 但用途更广。</p>
          <h3>环境利用速查表</h3>
          <table class="data-table">
            <thead><tr><th>环境要素</th><th>效果</th><th>适用场景</th><th>获取方式</th></tr></thead>
            <tbody>
              <tr><td>落石</td><td>固定伤害 800+</td><td>大型龙硬直时</td><td>投射器打支撑柱</td></tr>
              <tr><td>爆弹草</td><td>范围爆炸 300</td><td>小怪群 / 断尾补刀</td><td>地图采集</td></tr>
              <tr><td>麻痹瓦斯</td><td>麻痹 8 秒</td><td>捕获 / 控场</td><td>特定区域固定</td></tr>
              <tr><td>钩索点</td><td>快速位移 + 登龙</td><td>锁刃龙飞天阶段</td><td>Boss 身上发光点</td></tr>
              <tr><td>环境陷阱</td><td>落穴 / 麻痹 vine</td><td>固定怪 10 秒</td><td>引导怪经过</td></tr>
            </tbody>
          </table>
          <p>生态位示例：「砂原」区域大型食草龙被锁刃龙捕食时，可趁 Boss 进食硬直输出 15 秒；「雪原」冰属性怪物打架时，第三方可渔翁得利。投射器弹药优先级：钩索 &gt; 落石 &gt; 爆弹草 &gt; 硬石（击晕）。战斗前在营地更换投射器弹药类型，不同 Boss 最优弹药不同。</p>
          <div class="warn-box">
            <strong>⚠️ 环境伤害误伤</strong>
            <p>落石与爆弹草对队友同样有效，联机时勿在队友近身时触发。部分环境陷阱会误捕小型队友（如随从猫），虽无实质伤害但会打断连招节奏。锁刃龙锁链束缚期间勿使用钩索——会被一起拉向 Boss 造成额外伤害。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'metaphor',
    title: '暗喻幻想',
    desc: '阿基多族/尤克族/希斯族属性克制、合体技能解锁、Dungeon 限时挑战与多结局分支，覆盖 Act 1-3 全流程。',
    category: 'rpg',
    cover: STEAM_HERO(2679460),
    hot: 65400,
    updated: '2026-06-02',
    tags: ['RPG', 'JRPG', 'Atlus', '回合制'],
    chapters: [
      {
        id: 'archetypes',
        title: '阿基多族（职业）完全指南',
        content: `
          <p>《暗喻幻想》（Metaphor: ReFantazio）中每个角色可装备 2 个阿基多族（Archetype），战斗中可随时切换，继承各自等级与技能。阿基多族通过「阿基多之书」解锁，升级消耗「MAG」点数，MAG 由战斗与探索获得。合理搭配双阿基多可覆盖物理/魔法/治疗/辅助全职能，避免全队同质化。</p>
          <h3>核心角色推荐双阿基多搭配</h3>
          <table class="data-table">
            <thead><tr><th>角色</th><th>主阿基多（进化链）</th><th>副阿基多</th><th>职能定位</th></tr></thead>
            <tbody>
              <tr><td>Will（主角）</td><td>求道者 → 英雄</td><td>战士 / 法师</td><td>全能物理 + 后期 AOE</td></tr>
              <tr><td>Strohl</td><td>骑士 → 圣骑士</td><td>治疗师</td><td>主坦 + 副奶</td></tr>
              <tr><td>Hulkenberg</td><td>武士 → 暗骑士</td><td>刺客</td><td>高速物理 + 暗属性</td></tr>
              <tr><td>Heismay</td><td>法师 → 元素师</td><td>治疗师</td><td>魔法输出 + 应急治疗</td></tr>
              <tr><td>Eupha</td><td>治疗师 → 大主教</td><td>法师</td><td>主奶 + 光属性攻击</td></tr>
            </tbody>
          </table>
          <p>主角 Will 的「英雄」阿基多为全游戏最强物理输出之一，需先练满「求道者」再进化。进化不可逆但可继承等级，因此副阿基多应选与主阿基多互补的类型：物理主 C 配法师副职应对高防敌人，魔法主 C 配战士副职应对高魔抗。MAG 分配建议：主角 &gt; Strohl &gt; Hulkenberg &gt; 其余，Act 2 前至少 3 人拥有 2 个阿基多。</p>
          <div class="tip-box">
            <strong>💡 阿基多解锁顺序</strong>
            <p>优先解锁「治疗师」——全游戏唯一稳定群奶。其次「骑士」给 Strohl 当坦。Act 1 Boss 前 Will 应至少拥有「战士 + 求道者」双职。Dungeon 内可自由切换，进门前在菜单确认全员双职已装备。</p>
          </div>
        `
      },
      {
        id: 'weakness',
        title: '属性克制与战斗基础',
        content: `
          <p>战斗采用 Press Turn 系统：击中弱点获得 Extra Turn（额外行动），被抵抗则扣 Turn。Analyze（分析）技能可永久显示敌人弱点，每场战斗首回合务必 Analyze。属性分火/冰/风/土/光/暗六系，无「无属性」魔法——物理攻击不受属性表影响但受防御类型影响。</p>
          <h3>六属性克制关系表</h3>
          <table class="data-table">
            <thead><tr><th>属性</th><th>弱点（Weak）</th><th>抵抗（Resist）</th><th>吸收（Drain）</th><th>无效（Null）</th></tr></thead>
            <tbody>
              <tr><td>火</td><td>冰</td><td>火</td><td>—</td><td>部分 Boss</td></tr>
              <tr><td>冰</td><td>火</td><td>冰</td><td>—</td><td>—</td></tr>
              <tr><td>风</td><td>土</td><td>风</td><td>—</td><td>—</td></tr>
              <tr><td>土</td><td>风</td><td>土</td><td>—</td><td>—</td></tr>
              <tr><td>光</td><td>暗</td><td>光</td><td>—</td><td>暗系 Boss</td></tr>
              <tr><td>暗</td><td>光</td><td>暗</td><td>—</td><td>光系 Boss</td></tr>
            </tbody>
          </table>
          <p>实战流程：Analyze → 弱点属性攻击 → Extra Turn → 继续弱点或破防技能 → 全员输出。若敌人 Resist 当前属性，立刻切换阿基多或换角色，避免浪费 Turn。Boss 战常见「阶段换弱点」，二阶段可能冰弱变火弱，需重新 Analyze。希斯族（Human）敌人通常无属性弱点但怕物理；尤克族（Magical）通常有明确属性弱点。</p>
          <div class="warn-box">
            <strong>⚠️ Turn 管理警告</strong>
            <p>攻击 Resist/Null 属性会扣除 1-2 个 Turn，可能导致本回合无法行动。Boss 战若 Turn 归零会直接进入敌方回合。带「回避」技能可浪费 Turn 换安全，但不如精准打 Weak 高效。全灭后从 Dungeon 入口重来，无 mid-battle 存档。</p>
          </div>
        `
      },
      {
        id: 'synthesis',
        title: '合体技能（Synthesis）解锁与运用',
        content: `
          <p>合体技能（Synthesis）需特定两个阿基多组合且双方均在队伍中时解锁，消耗 2 个 Turn 但伤害/效果通常为普通技能的 3-5 倍。每个合体技能有独立动画与属性，部分为全屏 AOE，部分为单体爆发。合体技能不可在 Act 1 获得，最早 Act 2 中盘解锁第一个。</p>
          <h3>必练合体技能列表</h3>
          <table class="data-table">
            <thead><tr><th>合体技名</th><th>所需阿基多组合</th><th>属性</th><th>最佳使用场景</th></tr></thead>
            <tbody>
              <tr><td>元素风暴</td><td>英雄 + 元素师</td><td>全属性 AOE</td><td>多弱点杂兵战</td></tr>
              <tr><td>神圣审判</td><td>圣骑士 + 大主教</td><td>光属性单体</td><td>暗系 Boss</td></tr>
              <tr><td>暗影斩击</td><td>暗骑士 + 刺客</td><td>暗属性连击</td><td>光系精英</td></tr>
              <tr><td>钢铁壁垒</td><td>骑士 + 战士</td><td>物理 + 防御 Buff</td><td>Boss 换阶段</td></tr>
              <tr><td>治愈之雨</td><td>治疗师 + 大主教</td><td>全体大回血</td><td>持久战续战</td></tr>
            </tbody>
          </table>
          <p>合体技使用时机：Boss 破防（Down）后、敌人 HP 50% 以下触发狂暴前、或清场杂兵节省 Turn。消耗 2 Turn 意味着本回合可能只剩 1-2 次行动，需确保合体技伤害足以 justify 代价。神圣审判对 Act 3 暗系 Boss 可一次削 30% HP，为全游戏最高效单体合体。</p>
          <div class="tip-box">
            <strong>💡 合体技前置准备</strong>
            <p>解锁合体需两个阿基多均练至 Lv 10+。Act 2 起每进新 Dungeon 前检查是否有新合体可解锁。合体动画不可跳过（首次），但伤害已在前摇开始时就判定，不会因动画延长而被打断。</p>
          </div>
        `
      },
      {
        id: 'dungeon',
        title: 'Dungeon 限时挑战攻略',
        content: `
          <p>每个 Dungeon 含 3 层，每层有独立限时挑战（Clear Time / No Death / Weakness Kill 等），三层全完成奖励该 Dungeon 最强装备或独特饰品。限时通常 30-45 分钟/层，超时仍可通关但失去挑战奖励。Metaphor 的 Dungeon 可重复进入刷级，敌人等级随队伍平均等级缩放。</p>
          <h3>各 Dungeon 挑战要点</h3>
          <table class="data-table">
            <thead><tr><th>Dungeon</th><th>层数</th><th>核心挑战</th><th>推荐策略</th><th>奖励</th></tr></thead>
            <tbody>
              <tr><td>古代图书馆</td><td>3</td><td>限时 40 min + 全 Weak</td><td>带多属性法师</td><td>Intellect 饰品</td></tr>
              <tr><td>龙墓</td><td>3</td><td>无死亡 + Boss 5 min 内</td><td>合体技爆发</td><td>Dragon Slayer 剑</td></tr>
              <tr><td>镜像迷宫</td><td>3</td><td>单人挑战（禁队友）</td><td>Will 英雄 + 自愈</td><td>Unique 阿基多</td></tr>
              <tr><td>最终Dungeon</td><td>5</td><td>复合条件</td><td>全员 Bis 再进</td><td>最强防具</td></tr>
            </tbody>
          </table>
          <p>效率技巧：带「回避」或「隐身」阿基多跳过非必要杂兵，直奔 Boss。杂兵经验约为 Boss  10%，但耗时相当，限时挑战中务必 Skip。每层 Boss 前必有存档点（蓝灯），挑战失败可读档重试而不损失进度。Dragon Slayer 剑为 Will 专属，攻击力全游戏最高，值得专门刷「龙墓」三层全挑战。</p>
          <div class="warn-box">
            <strong>⚠️ 限时挑战常见失误</strong>
            <p>「全 Weak 击杀」要求每个敌人都被弱点攻击杀死，溢出伤害打死不算。需控制最后一击属性。「无死亡」挑战中任何队员 HP 归零即失败，哪怕有复活道具也算 Death。镜像迷宫禁队友意味着 Will 必须 solo，需提前练满 Hero 阿基多并带足回复道具。</p>
          </div>
        `
      },
      {
        id: 'follower',
        title: 'Follower 任务与好感系统',
        content: `
          <p>Follower（追随者）任务为各角色个人支线，完成可提升好感、解锁额外战斗支援与真结局条件。好感度分 5 级，通过对话选择、完成个人任务、在营地互动提升。Act 3 「加冕日」前必须完成全部 Follower 任务方可进入真结局路线。</p>
          <h3>Follower 任务链概览</h3>
          <table class="data-table">
            <thead><tr><th>角色</th><th>任务名</th><th>触发 Act</th><th>关键对话选择</th><th>奖励</th></tr></thead>
            <tbody>
              <tr><td>Strohl</td><td>骑士的誓言</td><td>Act 1</td><td>支持他当骑士</td><td>圣骑士进化</td></tr>
              <tr><td>Hulkenberg</td><td>失落的荣耀</td><td>Act 2</td><td>原谅过去</td><td>暗骑士进化</td></tr>
              <tr><td>Heismay</td><td>魔法的代价</td><td>Act 2</td><td>接受他的秘密</td><td>元素师进化</td></tr>
              <tr><td>Eupha</td><td>治愈之愿</td><td>Act 2</td><td>支持她的理想</td><td>大主教进化</td></tr>
              <tr><td>Will</td><td>王者的责任</td><td>Act 3</td><td>选择为人民</td><td>真结局分支</td></tr>
            </tbody>
          </table>
          <p>对话选择无「即时反馈」提示，选错可能锁好感上限。建议在 Act 2 结束、进 Act 3 前手动存档。营地中每晚可「与队友交谈」，每次 +1 好感，勿跳过营地直接进 Dungeon。Follower 任务与主线并行，不会过期，但 Act 3 加冕日后部分 NPC 离开导致任务永久失效。</p>
          <div class="tip-box">
            <strong>💡 好感刷取建议</strong>
            <p>每完成一个 Dungeon 回营地对话一轮再推主线。Act 2 末应有 4 人好感 Lv 4+。真结局额外要求 Will 完成「龙之试炼」隐藏任务——Act 2 探索「Ancient Peak」时可触发，易错过。</p>
          </div>
        `
      },
      {
        id: 'endings',
        title: '多结局分支完全指南',
        content: `
          <p>Metaphor 共 3 个主线结局 + 1 个隐藏真结局，关键分歧点在 Act 3 「加冕日」（Coronation Day）选择支持哪位候选人登基。结局无战力需求差异，纯叙事与成就区别。全结局需 3 周目或 Act 3 加冕日前存档读档分别选择。</p>
          <h3>结局触发条件表</h3>
          <table class="data-table">
            <thead><tr><th>结局</th><th>加冕日选择</th><th>额外条件</th><th>成就名</th></tr></thead>
            <tbody>
              <tr><td>结局 A（秩序）</td><td>支持 Louis</td><td>无</td><td>Iron Rule</td></tr>
              <tr><td>结局 B（自由）</td><td>支持 Maria</td><td>无</td><td>Free Will</td></tr>
              <tr><td>结局 C（默认）</td><td>弃权 / 第三选项</td><td>无</td><td>Neutral Path</td></tr>
              <tr><td>真结局</td><td>支持 Will 自己</td><td>全 Follower Lv 5 + 隐藏 Boss</td><td>True King</td></tr>
            </tbody>
          </table>
          <p>真结局条件：① 全员 Follower 任务完成且好感 Lv 5；② 击败隐藏 Boss「龙」（Ancient Peak 深处，需 Act 2 触发支线）；③ 加冕日选择「由 Will 继承王位」。隐藏 Boss 战 2 阶段，二阶段全属性 Null 仅 Weak 物理，需 Hero 阿基多 + Dragon Slayer 剑。真结局 CG 长约 15 分钟，为全游戏最佳演出。</p>
          <div class="warn-box">
            <strong>⚠️ 不可逆分歧点</strong>
            <p>加冕日选择后立即进入最终 Dungeon，无法返回开放世界。务必在此之前：完成全 Follower、刷满装备、完成图鉴。Act 3 最终 Boss 前最后一个存档点，建议存 2 个槽分别用于真结局与普通结局尝试。漏做 Follower 将无法触发真结局，只能普通 3 结局。</p>
          </div>
        `
      },
      {
        id: 'grinding',
        title: '练级、MAG 与 Endgame 准备',
        content: `
          <p>Metaphor 等级上限随主线进度解锁，Act 3 最终战推荐 Lv 55+、全员双阿基多 Lv 15+。MAG 为阿基多专用经验，与角色等级独立——常见误区是角色 Lv 60 但阿基多仍 Lv 8，导致技能匮乏。Endgame 刷级最优地点为可重复 Dungeon + 「经验之岛」探索区域。</p>
          <h3>Efficient 练级与 MAG 路线</h3>
          <table class="data-table">
            <thead><tr><th>阶段</th><th>推荐地点</th><th>目标等级</th><th>预计耗时</th></tr></thead>
            <tbody>
              <tr><td>Act 1</td><td>主线 + 支线</td><td>Lv 15 / MAG 8</td><td>自然推进</td></tr>
              <tr><td>Act 2 初</td><td>古代图书馆重复</td><td>Lv 30 / MAG 12</td><td>3-4 h</td></tr>
              <tr><td>Act 2 末</td><td>龙墓 + 经验之岛</td><td>Lv 45 / MAG 15</td><td>5-6 h</td></tr>
              <tr><td>Act 3</td><td>最终 Dungeon 前</td><td>Lv 55 / MAG 18</td><td>2-3 h</td></tr>
            </tbody>
          </table>
          <p>MAG 获取：战斗结束结算、探索宝箱、部分 Follower 任务奖励。优先给 Will 的 Hero 阿基多和 Strohl 的 Knight 线投 MAG，其余角色 Act 2 再补。装备方面，每个 Dungeon 挑战奖励为 Bis，不必刷随机掉落。Act 3 前目标：Will 装备 Dragon Slayer、Strohl 全圣骑士套装、全员至少 1 个 Lv 5 饰品。</p>
          <div class="tip-box">
            <strong>💡 Act 3 最终战准备清单</strong>
            <p>角色 Lv 55+ ✓ / 全员双阿基多 Lv 15+ ✓ / 至少 3 个合体技 ✓ / 全 Follower Lv 5 ✓ / 携带 10 个 Revive 道具 ✓ / Analyze 技能全员装备 ✓。满足以上可较轻松通关，包括隐藏 Boss。</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'wuthering-waves',
    title: '鸣潮',
    desc: '2.0 版本深塔配队、声骸（Echo）搭配、五星角色培养优先级与全地图声匣收集路线，含体力规划与深境打法。',
    category: 'rpg',
    cover: STEAM_HERO(3513350),
    hot: 72300,
    updated: '2026-06-02',
    tags: ['RPG', '二次元', '开放世界', 'Kuro'],
    chapters: [
      {
        id: 'team',
        title: '深塔（深境）配队 2.0 详解',
        content: `
          <p>《鸣潮》2.0 版本深塔（深境之塔）共 18 层，分 3 个区域各 6 层，每区域需 2 队各 3 人通关。2.0 新增「今汐」「折枝」等五星角色后 Meta 大幅变动，旧版忌炎单 C 通杀已不适用 13-18 层。深塔每 14 天重置一次，首通每层给星声，重复挑战仅成就。</p>
          <h3>2.0 版本分层配队推荐</h3>
          <table class="data-table">
            <thead><tr><th>层数</th><th>推荐配队 A</th><th>推荐配队 B</th><th>核心机制</th><th>难度</th></tr></thead>
            <tbody>
              <tr><td>1-6</td><td>今汐 + 折枝 + 维里奈</td><td>长离 + 散华 + 白芷</td><td>教学层，熟悉协奏</td><td>★★</td></tr>
              <tr><td>7-12</td><td>长离 + 散华 + 维里奈</td><td>忌炎 + 莫特斐 + 白芷</td><td>需属性克制</td><td>★★★</td></tr>
              <tr><td>13-15</td><td>今汐 + 折枝 + 守岸人</td><td>长离 + 散华 + 维里奈</td><td>高抗 + 分阶段</td><td>★★★★</td></tr>
              <tr><td>16-18</td><td>今汐 2 命 + 折枝 + 守岸人</td><td>长离 + 散华 + 釉瑚</td><td>DPS 检测层</td><td>★★★★★</td></tr>
            </tbody>
          </table>
          <p>今汐为主 C 时，折枝提供「谐振」增伤 + 协奏能量，维里奈/守岸人为奶位兼协奏启动。长离适合 7-12 层速切：散华提供「延奏」延长输出窗口，白芷/釉瑚提供治疗。13 层起敌人属性抗性提升 50%，必须带对应属性 C，不可跨属性硬打。16-18 层有 DPS 检测机制（限时 180 秒），今汐 2 命或长离专武 +5 为最低门槛。</p>
          <div class="tip-box">
            <strong>💡 深塔通用技巧</strong>
            <p>进塔前确认两队协奏循环已练熟：主 C 出场 → 副 C 打协奏 → 增伤位开 Buff → 主 C 爆发 → 切人循环。带「共鸣回响」合适的声骸套装，12 层前至少主 C 90 级 + 武器 90。</p>
          </div>
        `
      },
      {
        id: 'echo',
        title: '声骸（Echo）搭配完全指南',
        content: `
          <p>声骸（Echo）为鸣潮核心装备系统，每个角色 5 个槽位：1 个主 Echo（提供主动技能）+ 4 个副 Echo（凑套装属性）。主 Echo 需在大世界捕获对应怪物解锁，副 Echo 无限制可任意搭配。套装效果 2 件/ 5 件触发，通常 5 件套 + 散件 2 件或 5+5 双套装（需 10 槽，仅双 C 队可行）。</p>
          <h3>T0 角色声骸推荐表</h3>
          <table class="data-table">
            <thead><tr><th>角色</th><th>主 Echo</th><th>5 件套</th><th>副词条优先</th><th>替代方案</th></tr></thead>
            <tbody>
              <tr><td>今汐</td><td>角（技能：光属爆发）</td><td>此间永驻之光</td><td>暴击 / 暴伤 / 攻击%</td><td>4 件 + 2 攻击</td></tr>
              <tr><td>长离</td><td>无常凶鹭</td><td>熔山裂谷</td><td>暴击 / 暴伤 / 火伤</td><td>余音 5 件</td></tr>
              <tr><td>忌炎</td><td>辉萤军势</td><td>啸谷长风</td><td>暴击 / 暴伤 / 风伤</td><td>轻云 5 件（辅助向）</td></tr>
              <tr><td>折枝</td><td>鸣钟之龟</td><td>轻云出月</td><td>攻击% / 充能 / 暴击</td><td>纯辅助可不要暴击</td></tr>
              <tr><td>维里奈</td><td>无常凶鹭 / 治疗向</td><td>隐世回光</td><td>治疗 / 充能 / 生命%</td><td>轻云 5 件</td></tr>
            </tbody>
          </table>
          <p>刷声骸流程：① 主 Echo 对应 Boss 首次击杀解锁图鉴；② 消耗体力刷副本获 5 星副 Echo；③ 用「调谐」系统洗副词条。暴击 + 暴伤为双 C 刚需，辅助位可牺牲暴击换充能/攻击。2.0 新增「此间永驻之光」为今汐专属 Bis，需刷「无光之森」周本，周三/六/日开放。</p>
          <div class="warn-box">
            <strong>⚠️ 声骸培养陷阱</strong>
            <p>勿过早消耗「调谐」材料在 4 星声骸上——5 星才是 Endgame。主 Echo 技能等级依赖声骸等级，优先升主 Echo 至 25 级再刷副词条。同一角色不可装备两个相同主 Echo 技能，规划双队时留意主 Echo 不冲突。</p>
          </div>
        `
      },
      {
        id: 'invest',
        title: '角色培养优先级与资源分配',
        content: `
          <p>鸣潮资源（贝币、经验书、突破材料、体力）长期稀缺，需严格优先级。2.0 Meta 下 T0 为今汐、长离、折枝；T1 为忌炎、吟霖、守岸人；其余四星仅作过渡。原则：先拉满 1 个主 C 再练第二队，勿平均分配导致两队都刮痧。</p>
          <h3>培养优先级与里程碑</h3>
          <table class="data-table">
            <thead><tr><th>优先级</th><th>角色</th><th>目标</th><th>预计资源</th><th>完成标志</th></tr></thead>
            <tbody>
              <tr><td>P0</td><td>今汐</td><td>90 级 / 专武 90 / 天赋 8/8/8</td><td>约 200 万贝币</td><td>深塔 16 层可过</td></tr>
              <tr><td>P0</td><td>折枝</td><td>80 级 / 武器 80 / 天赋 6/6/6</td><td>约 120 万贝币</td><td>今汐增伤全覆盖</td></tr>
              <tr><td>P1</td><td>长离</td><td>90 级 / 专武 90 / 天赋 8/8/8</td><td>约 200 万贝币</td><td>二队主 C 完成</td></tr>
              <tr><td>P1</td><td>维里奈</td><td>70 级 / 4 星武器 70 / 天赋 4</td><td>约 60 万贝币</td><td>双队生存足够</td></tr>
              <tr><td>P2</td><td>忌炎 / 吟霖</td><td>80 级 / 天赋 6</td><td>视 Box 而定</td><td>属性对策卡</td></tr>
            </tbody>
          </table>
          <p>天赋升级：战斗天赋 &gt; 共鸣回路 &gt; 共鸣解放。主 C 战斗天赋 8 级后伤害提升约 40%，优先于刷声骸副词条。专武（5 星武器）仅主 C 值得投入，辅助 4 星武器 70 级即可。2.0 活动送「今汐专武抽数」，务必活动内抽满或商店兑换，勿浪费在常驻池。</p>
          <div class="tip-box">
            <strong>💡 零氪 / 微氪规划</strong>
            <p>零氪：专注今汐 + 折枝 + 维里奈一队，深塔 12 层为 realistic 目标。微氪（月卡）：加练长离二队，目标 16 层。体力全投声骸本，角色突破等活动送材料补。</p>
          </div>
        `
      },
      {
        id: 'collect',
        title: '声匣全收集与探索路线',
        content: `
          <p>声匣为地图收集品，全图共 128 个（2.0 新增区域 +20），每收集 25 个可在「先约电台」兑换 1 次常驻抽卡。声匣不刷新、不遗漏，跟互动地图可 3-4 小时清完。部分声匣位于高空、解谜门后或时间限定区域，需特定角色能力（钩索、声域感知）。</p>
          <h3>分区域声匣数量与推荐顺序</h3>
          <table class="data-table">
            <thead><tr><th>顺序</th><th>区域</th><th>声匣数</th><th>难点</th><th>预计耗时</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>云陵谷</td><td>15</td><td>地形复杂，多分层</td><td>35 min</td></tr>
              <tr><td>2</td><td>中曲台地</td><td>12</td><td>部分需战斗解锁</td><td>30 min</td></tr>
              <tr><td>3</td><td>荒石高地</td><td>10</td><td>开阔易找</td><td>25 min</td></tr>
              <tr><td>4</td><td>归原林</td><td>8</td><td>解谜门多</td><td>20 min</td></tr>
              <tr><td>5</td><td>无光之森</td><td>11</td><td>2.0 新区域，需推主线</td><td>30 min</td></tr>
              <tr><td>6</td><td>其余区域</td><td>72</td><td>分散，建议跟地图</td><td>2 h</td></tr>
            </tbody>
          </table>
          <p>收集技巧：声匣在地图上为「六边形图标」，靠近 50 米内小地图显示方向。装备「声域感知」类 Echo 可扩大探测范围。联机模式下声匣状态独立——队友捡了不影响你。2.0 新增「溯回性」系统可标记未捡声匣，完成区域探索度 80% 后在地图筛选「未获得声匣」一键追踪。</p>
          <div class="warn-box">
            <strong>⚠️ 易漏声匣位置</strong>
            <p>云陵谷「三重塔」顶层需钩索连锁到达；中曲台地「地下矿道」内 2 个声匣无地图标记需跟攻略；无光之森「镜像区」仅任务特定时段开放，错过需等世界任务重置。建议 2.0 主线推完再一次性清声匣，避免重复跑图。</p>
          </div>
        `
      },
      {
        id: 'resource',
        title: '每日体力与资源规划',
        content: `
          <p>鸣潮每日自然恢复 240 体力（「结晶波片」可存 240 上限），月卡额外 90 体力/天。体力用途：声骸副本、角色突破、武器突破、材料本。2.0 版本体力分配直接决定 2 周内能否深塔 16 层，需按周表严格执行。</p>
          <h3>每周体力分配表（240/天基准）</h3>
          <table class="data-table">
            <thead><tr><th>星期</th><th>开放副本</th><th>体力分配</th><th>目标</th></tr></thead>
            <tbody>
              <tr><td>周一/四</td><td>武器突破材料</td><td>160 武器 + 80 存</td><td>主 C 专武升 90</td></tr>
              <tr><td>周二/五</td><td>角色突破材料</td><td>160 角色 + 80 存</td><td>今汐/长离升 90</td></tr>
              <tr><td>周三/六/日</td><td>声骸套装本</td><td>160 声骸 + 80 存</td><td>刷此间永驻/熔山</td></tr>
              <tr><td>每日</td><td>无限制</td><td>余 80 灵活</td><td>活动 / 存给新本</td></tr>
            </tbody>
          </table>
          <p>长期资源：贝币日常「模拟战」+ 任务一次约 30 万/周；经验书活动送为主，不足时刷「经验副本」周四开放。2.0 活动「潮汐之遗」给大量声骸调谐材料，优先活动内刷满再消耗体力刷常驻本。勿用星声换体力——星声仅抽卡，240 体力 ≈ 150 星声价值但抽卡期望远低于专武。</p>
          <div class="tip-box">
            <strong>💡 结晶波片使用时机</strong>
            <p>体力存「结晶波片」满 240 后，在新套装本开放日（如 2.0 今汐套周三）一次性清空，效率最高。版本更新前 3 天勿碎波片，等新本确认再投。深塔重置前 2 天优先刷主 C 声骸，临时提升比存材料实用。</p>
          </div>
        `
      },
      {
        id: 'combat',
        title: '战斗机制、协奏与深境实战',
        content: `
          <p>鸣潮战斗核心为「协奏值」系统：角色攻击/技能积累协奏，满值触发「协奏回响」切换至下一角色并附带属性加成。2.0 优化协奏获取速度，今汐/长离队标准循环约 12-15 秒一轮。掌握取消后摇（技能动画中闪避/跳跃取消）可缩短循环 2-3 秒，深塔 DPS 检测层必备。</p>
          <h3>协奏循环模板（今汐队）</h3>
          <table class="data-table">
            <thead><tr><th>步骤</th><th>角色</th><th>操作</th><th>协奏贡献</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>折枝</td><td>E → 重击 ×2 → 离场技</td><td>50%</td></tr>
              <tr><td>2</td><td>维里奈</td><td>E → Q → 重击</td><td>30%</td></tr>
              <tr><td>3</td><td>今汐</td><td>协奏入场 → E → 重击 ×3 → Q</td><td>爆发窗口</td></tr>
              <tr><td>4</td><td>循环</td><td>今汐打满 → 切折枝</td><td>重新积累</td></tr>
            </tbody>
          </table>
          <p>深境 13+ 层机制：部分层「属性锁」（仅光/火伤害有效）、「分阶段盾」（需协奏触发破盾）、「限时增幅」（前 60 秒伤害 +50% 务必爆发对齐）。带「延奏」类 Echo 或角色（散华）可延长主 C 站场 3-5 秒。联机共斗与深塔无关，但共斗 Boss 奖励声骸本双倍，周末优先。</p>
          <div class="warn-box">
            <strong>⚠️ 深塔常见翻车点</strong>
            <p>16 层「熔毁」机制：90 秒未击杀小怪会全屏即死，必须带 AOE（今汐 Q / 长离 E）。17 层双 Boss 需控血同时杀，忌用单体 C。18 层无治疗惩罚，维里奈/守岸人 mandatory，纯输出队必灭。每间房间可重试，灭队后从当前层重开不扣次数。</p>
          </div>
        `
      }
    ]
  }
];
