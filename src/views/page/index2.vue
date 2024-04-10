<template>
  <div class="body">
    <Header />

    <div class="content">
      <a-checkbox-group
        v-model:value="checkTags"
        :options="tags"
        @change="changeCheckTags"
      />
      <br />
      <div class="placeList">
        <div
          v-for="(item, index) in showPlaceList"
          :key="index"
          @click="toPlaceDetail(item)"
        >
          <a-card hoverable class="way">
            <template #cover>
              <img :src="item.url" titlt="查看" class="wayImg" />
              <img v-if="item.logo" :src="item.logo" class="imgLeft" />
            </template>
            <a-card-meta>
              <template #title
                ><div class="wayName">{{ item.name }}</div></template
              >
              <template #description
                ><div v-if="item.tags">
                  <a-tag
                    color="blue"
                    v-for="(tag, tagIndex) in item.tags"
                    :key="tagIndex"
                    class="wayTag"
                    >{{ tag }}</a-tag
                  >
                </div></template
              >
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Header from '@/components/Header.vue';

// const router = useRouter();
const tags = [
  { label: '名俗风情', value: '名俗风情' },
  { label: '风景', value: '风景' },
  { label: '特色美食', value: '特色美食' },
  { label: '非遗', value: '非遗' },
  { label: '手工', value: '手工' },
  { label: '劳动体验', value: '劳动体验' }
];
const 新桥镇1 = require("../../assets/placeImg/新桥镇1.webp")
const 新桥镇2 = require("../../assets/placeImg/新桥镇2.webp");
const 新桥镇3 = require("../../assets/placeImg/新桥镇3.webp");
const 新桥镇4 = require("../../assets/placeImg/新桥镇4.webp");
const 新桥镇5 = require("../../assets/placeImg/新桥镇5.webp");
const 新桥镇6 = require("../../assets/placeImg/新桥镇6.webp");
const 新桥镇7 = require("../../assets/placeImg/新桥镇7.webp");

const 石堰坪古建筑群 = require("../../assets/placeImg/石堰坪古建筑群.webp");
const 秀华山馆1 = require("../../assets/placeImg/秀华山馆1.webp");
const 秀华山馆2 = require("../../assets/placeImg/秀华山馆2.webp");
const 秀华山馆3 = require("../../assets/placeImg/秀华山馆3.webp");

const 协和1 = require("../../assets/placeImg/协和1.jpg")
const 协和2 = require("../../assets/placeImg/协和2.jpg");
const 协和3 = require("../../assets/placeImg/协和3.png");

const 许家坊1 = require("../../assets/placeImg/许家坊1.jpg")
const 许家坊2 = require("../../assets/placeImg/许家坊2.jpg");

const 桥头乡1 = require("../../assets/placeImg/桥头乡1.jpg")
const 桥头乡2 = require("../../assets/placeImg/桥头乡2.webp");
const 桥头乡3 = require("../../assets/placeImg/桥头乡3.jpg");

const 金岩乡1 = require("../../assets/placeImg/金岩乡1.png")
const 金岩乡2 = require("../../assets/placeImg/金岩乡2.jpg");
const 金岩乡3 = require("../../assets/placeImg/金岩乡3.jpg");

const 王家坪1 = require("../../assets/placeImg/王家坪1.jpg")
const 王家坪2 = require("../../assets/placeImg/王家坪2.jpg");
const 王家坪3 = require("../../assets/placeImg/王家坪3.jpg");

const 沅古坪1 = require("../../assets/placeImg/沅古坪1.jpg")
const 沅古坪2 = require("../../assets/placeImg/沅古坪2.jpg");
const 沅古坪3 = require("../../assets/placeImg/沅古坪3.jpg");

const 谢家垭1 = require("../../assets/placeImg/谢家垭1.jpg")
const 谢家垭2 = require("../../assets/placeImg/谢家垭2.jpg");
const 谢家垭3 = require("../../assets/placeImg/谢家垭3.jpg");

const 七甲坪1 = require("../../assets/placeImg/七甲坪1.jpg")
const 七甲坪2 = require("../../assets/placeImg/七甲坪2.png");
const 七甲坪3 = require("../../assets/placeImg/七甲坪3.jpg");

const 三又乡1 = require("../../assets/placeImg/三又乡1.jpg")
const 三又乡2 = require("../../assets/placeImg/三又乡2.jpg");
const 三又乡3 = require("../../assets/placeImg/三又乡3.jpg");

const 天门山镇 = require("../../assets/placeImg/天门山镇.jpg");
const 云上田园 = require("../../assets/placeImg/云上田园.jpg");

const 四都坪1 = require("../../assets/placeImg/四都坪1.jpg")
const 四都坪2 = require("../../assets/placeImg/四都坪2.jpg");
const 四都坪3 = require("../../assets/placeImg/四都坪3.jpg");

const 借母溪1 = require("../../assets/placeImg/借母溪1.jpg")
const 借母溪2 = require("../../assets/placeImg/借母溪2.jpg");
const 借母溪3 = require("../../assets/placeImg/借母溪3.jpg");
const 借母溪4 = require("../../assets/placeImg/借母溪4.jpg");
const 借母溪5 = require("../../assets/placeImg/借母溪5.jpg");

const 火场土家族1 = require("../../assets/placeImg/火场土家族1.png")
const 火场土家族2 = require("../../assets/placeImg/火场土家族2.jpg");
const 火场土家族3 = require("../../assets/placeImg/火场土家族3.jpg");
const 火场土家族4 = require("../../assets/placeImg/火场土家族4.jpg");
const 火场土家族5 = require("../../assets/placeImg/火场土家族5.jpg");
const 火场土家族6 = require("../../assets/placeImg/火场土家族6.jpg");

const 龙凤梯田 = require("../../assets/placeImg/龙凤梯田.jpg");

const 山区景色 = require("../../assets/placeImg/山区景色.jpeg");
const 双峰岩 = require("../../assets/placeImg/双峰岩.jpeg");

const 茅岩河漂流 = require("../../assets/placeImg/茅岩河漂流.jpg")

const 斗牛城 = require("../../assets/placeImg/斗牛城.jpeg");

const 莓茶种植园区 = require("../../assets/placeImg/莓茶种植园区.jpg");

const placeList = [
  {
    name: '新桥镇',
    url: 新桥镇1,
    tags: ['特色美食', '劳动体验', '手工'],
    address: '张家界永定区',
    food: '大鲵',
    introduce: `<p>风景：农家书屋，村文化中心。</p>` +
      `<p>劳动体验：采茶，大鲵养殖中心，红心殊猴。<p>` +
      `<p><img src=` + 新桥镇2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 新桥镇3 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 新桥镇4 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 新桥镇5 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 新桥镇6 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 新桥镇7 + ` class="introduceImg" /></p>`,
  },
  {
    name: '合作桥',
    url: 石堰坪古建筑群,
    tags: ['风景', '手工', '劳动体验'],
    address: '张家界永定区',
    introduce: `<p>合作桥乡物产丰富，经济状况较好。种植业、畜牧业为该乡传统产业，` +
      `主要物产有：稻谷、红薯、蔬菜、花生、油菜、苎麻、干鲜水果、楠竹、药材、畜禽产品等。` +
      `近年来，随着产业结构调整力度加大，全乡基本形成红薯、甲葛、楠竹、蔬菜、养鸭等十大某地。</p>` +
      `<p>地方特色：鱼鼓、花灯。<p>` +
      `<p>著名景点：宝峰山、宝峰庙。<p>` +
      `<p><img src=` + 秀华山馆1 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 秀华山馆2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 秀华山馆3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '协和',
    url: 协和1,
    tags: ['劳动体验', '风景'],
    address: '张家界永定区',
    introduce: `<p>景点：水绕四门，宝峰山，百龙天梯，合作水库，红旅景点。</p>` +
      `<p>劳动体验：茶园。<p>` +
      `<p>特居：龙尾巴。<p>` +
      `<p><img src=` + 协和2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 协和3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '许家坊',
    url: 许家坊1,
    tags: ['名俗风情', '劳动体验', '非遗'],
    address: '张家界永定区',
    introduce: `<p>景点：油菜花园。</p>` +
      `<p>民俗：酒坊。<p>` +
      `<p>特色：自酿酒。<p>` +
      `<p>体验：酿酒过程。<p>` +
      `<p><img src=` + 许家坊2 + ` class="introduceImg" /></p>`,
  },
  {
    name: '桥头乡',
    url: 桥头乡1,
    tags: ['劳动体验', '名俗风情'],
    address: '张家界永定区',
    introduce: `<p>景点：超级杂交水稻种植园。<p>` +
      `<p>文化：土家山歌，阳戏，花灯，哭嫁。<p>` +
      `<p>体验：种水稻，采茶。<p>` +
      `<p><img src=` + 桥头乡2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 桥头乡3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '金岩乡',
    url: 金岩乡1,
    tags: ['风景', '特色美食', '名俗风情'],
    address: '张家界永定区',
    food: '慈利杜仲、洞溪七姊妹辣椒、江垭峡谷鳙鱼、张家界岩耳、团馓与炒米',
    introduce: `<p>景点：龙王洞，江垭温泉，张开华故居及“二十八宿”古水渠。<p>` +
      `<p>民俗文化：慈利板板龙灯。<p>` +
      `<p><img src=` + 金岩乡2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 金岩乡3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '王家坪',
    url: 王家坪1,
    tags: ['名俗风情', '手工'],
    address: '张家界永定区',
    introduce: `<p>特色：土家哭嫁歌，打夯歌，高花灯，扬叉舞，土地戏。<p>` +
      `<p>手工艺：草龙灯，狮子灯，打溜子。<p>` +
      `<p><img src=` + 王家坪2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 王家坪3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '沅古坪',
    url: 沅古坪1,
    tags: ['名俗风情', '风景'],
    address: '张家界永定区',
    introduce: `<p>特色：湘西北画眉斗鸟，九子鞭舞，阳戏。<p>` +
      `<p>景点：沅古坪瀑布群，明清历史建筑群。<p>` +
      `<p>民俗风情：泼水龙习俗，糊仓习俗，张家界鬼谷神功，高花灯。<p>` +
      `<p><img src=` + 沅古坪2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 沅古坪3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '谢家垭',
    url: 谢家垭1,
    tags: ['非遗'],
    address: '张家界永定区',
    introduce: `<p>谢家垭乡地名据传明末降清将领吴三桂叛军曾转战此地，士兵在此卸甲休息，后人将"卸甲"谐音演化得名“谢家域"乡。<p>` +
      `<p>非物质文化遗产：湖南省首批非物质文化遗产谢家珈高花灯。<p>` +
      `<p><img src=` + 谢家垭2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 谢家垭3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '七甲坪',
    url: 七甲坪1,
    tags: ['非遗', '劳动体验'],
    address: '张家界永定区',
    introduce: `<p>非物质文化遗产：“傩戏”《孟姜女》《七仙女》《人像故事类--土家绣女》。<p>` +
      `<p>手工艺品：酉水砚、土家织锦、木雕。<p>` +
      `<p><img src=` + 七甲坪2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 七甲坪3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '三又乡',
    url: 三又乡1,
    tags: ['风景', '非遗'],
    address: '张家界永定区',
    introduce: `<p>风景：三又乡境内景点有天乐仙山、团木虎林场、鱼木河谷、公公洞、婆婆洞、高峡平湖，` +
      `还有芭蕉夜雨、白棠晓旭、黄沙夕萌、仙岭松风、渔歌晚唱、白波秋湛、银杏秋月、文峰霁月等“三岔八景”；` +
      `湖南四大书院之一天南书院坐落在伍家界村。<p>` +
      `<p><img src=` + 三又乡2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 三又乡3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '天门山镇',
    url: 天门山镇,
    address: '张家界永定区',
    toMap: true,
    introduce: `<p><img src=` + 云上田园 + ` class="introduceImg" /></p>`,
  },
  {
    name: '四都坪',
    url: 四都坪1,
    tags: ['名俗风情', '特色美食'],
    address: '张家界永定区',
    food: '腊肉、地笋、天花菌、葛仙米、蜂米糖等',
    introduce: `<p>民俗特色：国家级“打溜子”，省级“土家织锦”“糊仓”，市级“九子鞭舞”“土家婚俗”“土家葬俗”“贺梁”“安家神”等。<p>` +
      `<p><img src=` + 四都坪2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 四都坪3 + ` class="introduceImg" /></p>`,
  },
  {
    name: '借母溪',
    url: 借母溪1,
    tags: ['风景', '非遗'],
    address: '张家界永定区',
    introduce: `<p>特色：“生态王国、天然氧吧”。<p>` +
      `<p>国家重点保护野生植物：“沅陵鹅耳枥”、“沅陵长蒴苣”、“沅陵山矾”等首次成为以沅陵命名的植物新品种。<p>` +
      `<p>风景：高洞瀑布、通天门、八卦垭、鱼仙洞、犀牛潭、狮子啸天、娘娘岗、迷魂溪、杜鹃岭、鸳鸯瀑布、熊溪桂花谷、千堂湾佛指山等。<p>` +
      `<p>独特文化遗存：人类典妻制度唯一文化遗存——狃花文化。<p>` +
      `<p><img src=` + 借母溪2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 借母溪3 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 借母溪4 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 借母溪5 + ` class="introduceImg" /></p>`,
  },
  {
    name: '火场土家族',
    url: 火场土家族1,
    tags: ['民俗风情', '特色美食'],
    address: '张家界永定区',
    food: '将军剁椒、将军茶',
    introduce: `<p>特色：土家人文民俗特色村寨，“红色火场”。<p>` +
      `<p>历史：中村村、桃坪界村两处国家级古村落和桃坪界袁氏宗祠。<p>` +
      `<p><img src=` + 火场土家族2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 火场土家族3 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 火场土家族4 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 火场土家族5 + ` class="introduceImg" /></p>` +
      `<p><img src=` + 火场土家族6 + ` class="introduceImg" /></p>`,
  },
  {
    name: '罗水乡',
    url: 龙凤梯田,
    tags: ['名俗风情', '风景'],
    address: '张家界永定区罗水乡',
    introduce: `<p>罗水乡地名因境内乡驻地三面溪水环绕，且呈一锣形，锣与罗同音，简称“罗水”而得名。<p>` +
      `<p>地方特色：民间艺术有茅古斯舞、铜铃舞、花灯、唱山歌等，其中茅古斯舞有“人类戏剧活化石”称誉。<p>`,
  },
  {
    name: '罗塔坪',
    url: 山区景色,
    tags: ['风景', '特色美食'],
    address: '张家界永定区',
    food: '板栗、核桃、花生、猪肉、蜂蜜、莓茶等',
    introduce: `<p>罗塔坪乡地名因传说故事“罗带（谐音'塔'）坪”而得名。<p>` +
      `<p>著名景点：戈逻坑、驻马溪。<p>` +
      `<p><img src=` + 双峰岩 + ` class="introduceImg" /></p>`,
  },
  {
    name: '茅岩河镇',
    url: 茅岩河漂流,
    tags: ['劳动体验'],
    address: '张家界永定区',
    introduce: `<p>茅岩河镇地名因境内温泉得名。<p>` +
      `<p>著名景点：茅岩河漂流、百里画廊茅岩河、平湖游。<p>`,
  },
  {
    name: '三家馆',
    url: 斗牛城,
    tags: ['非遗', '劳动体验'],
    address: '张家界永定区',
    introduce: `<p>三家馆乡地名因境内曾有异姓三家分别开设酒、饭、大烟三馆，故而得名三家馆乡。<p>`,
  },
  {
    name: '温塘镇',
    url: 莓茶种植园区,
    tags: ['特色美食', '手工'],
    address: '张家界永定区',
    food: '桐子叶粑粑，莓茶',
    introduce: `<p>温塘镇因境内温泉而得名。<p>` +
      `<p>著名景点：茅岩河。<p>`,
  },
];
export default {
  components: { Header },
  setup () {
    const router = useRouter();
    return {
      router,
    };
  },
  data () {
    return {
      tags,
      showPlaceList: placeList,
    }
  },
  methods: {
    changeCheckTags (e) {
      console.log('changeCheckTags===', e)
      if (e && e.length > 0) {
        this.showPlaceList = [];
        placeList.forEach((i) => {
          if (this.hasCommonValue(i.tags, e)) {
            this.showPlaceList.push(i);
          }
        })
      } else {
        this.showPlaceList = placeList;
      }
      console.log('===showPlaceList===', this.showPlaceList)
    },

    hasCommonValue (arr1, arr2) {
      return arr1.some(function (value) {
        return arr2.includes(value);
      });
    },

    toPlaceDetail (item) {
      console.log('===item===', JSON.stringify(item))
      this.router.push({ path: '/placeDetail', query: { place: JSON.stringify(item) } });
    },

  },

  mounted () {
    console.log('===???????===')
    // this.showPlaceListA = this.placeList;
  }
};
</script>

<style scoped>
.body {
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
}

.content {
  height: calc(100vh - 80px);
  overflow-y: auto;
  padding: 20px 100px;
}

.content::-webkit-scrollbar {
  display: none;
}

.placeList {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.placeList > * {
  width: calc((100% - 240px) / 4);
  margin: 0 30px;
}

.wayImg {
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.imgLeft {
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;
  z-index: 99;
}

.way {
  margin: 20px 0;
}

/* .way:hover {
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 15%);
} */

.wayName {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1890ff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
}

.showPlace img:hover,
.wayImg:hover {
  cursor: pointer;
  filter: brightness(90%);
  -webkit-filter: brightness(90%);
}
</style>
