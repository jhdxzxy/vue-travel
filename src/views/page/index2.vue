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
const xinqiaozhen_p1 = require("../../assets/img/place2.jpg");
const xinqiaozhen_p2 = require("../../assets/img/place3.jpg");
const xinqiaozhen_p3 = require("../../assets/img/place4.jpg");

const hezuoqiao_p1 = require("../../assets/img/place4.jpg");
const hezuoqiao_p2 = require("../../assets/img/place5.jpg");
const hezuoqiao_p3 = require("../../assets/img/place6.jpg");


const xiehe_p1 = require("../../assets/img/place7.png");
const xiehe_p2 = require("../../assets/img/place8.png");

const xujiafang_p1 = require("../../assets/img/place7.png");
const xujiafang_p2 = require("../../assets/img/place9.jpg");



const placeList = [
  {
    url: require("../../assets/img/place1.png"),
    name: '新桥镇',
    tags: ['特色美食', '非遗'],
    logo: require("../../assets/img/baokuan.gif"),
    address: '张家界',
    food: '美食1、美食2',
    introduce: `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>` +
      `<p><img src=` + xinqiaozhen_p1 + ` class="introduceImg" /></p>` +
      `<p><img src=` + xinqiaozhen_p2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + xinqiaozhen_p3 + ` class="introduceImg" /></p>` +
      `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>`,
  },
  {
    url: require("../../assets/img/place2.jpg"),
    name: '合作桥',
    tags: ['特色美食', '劳动体验'],
    address: '张家界',
    food: '美食1、美食2',
    introduce: `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>` +
      `<p><img src=` + hezuoqiao_p1 + ` class="introduceImg" /></p>` +
      `<p><img src=` + hezuoqiao_p2 + ` class="introduceImg" /></p>` +
      `<p><img src=` + hezuoqiao_p3 + ` class="introduceImg" /></p>` +
      `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>`,
  },
  {
    url: require("../../assets/img/place3.jpg"),
    name: '协和',
    tags: ['名俗风情', '风景'],
    address: '张家界',
    food: '美食1、美食2',
    introduce: `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>` +
      `<p><img src=` + xiehe_p1 + ` class="introduceImg" /></p>` +
      `<p><img src=` + xiehe_p2 + ` class="introduceImg" /></p>` +
      `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>`,
  },
  {
    url: require("../../assets/img/place4.jpg"),
    name: '许家坊',
    tags: ['特色美食', '手工'],
    address: '张家界',
    food: '美食1、美食2',
    introduce: `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>` +
      `<p><img src=` + xujiafang_p1 + ` class="introduceImg" /></p>` +
      `<p><img src=` + xujiafang_p2 + ` class="introduceImg" /></p>` +
      `<p>这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，这是一条介绍信息，` +
      `这是一条介绍信息</p>`,
  },

  { url: require("../../assets/img/place1.png"), name: '桥头乡', tags: ['特色美食', '非遗'], logo: require("../../assets/img/baokuan.gif") },
  { url: require("../../assets/img/place2.jpg"), name: '金岩乡', tags: ['特色美食', '劳动体验'] },
  { url: require("../../assets/img/place3.jpg"), name: '王家坪', tags: ['名俗风情', '风景'] },
  { url: require("../../assets/img/place4.jpg"), name: '沅古坪', tags: ['特色美食', '手工'] },

  { url: require("../../assets/img/place1.png"), name: '谢家垭', tags: ['特色美食', '非遗'], logo: require("../../assets/img/baokuan.gif") },
  { url: require("../../assets/img/place2.jpg"), name: '土甲坪', tags: ['特色美食', '劳动体验2'] },
  { url: require("../../assets/img/place3.jpg"), name: '三又乡', tags: ['名俗风情', '风景'] },
  { url: require("../../assets/img/place4.jpg"), name: '天门山镇', tags: ['特色美食', '手工'] },

  { url: require("../../assets/img/place1.png"), name: '四都坪', tags: ['特色美食', '非遗'], logo: require("../../assets/img/baokuan.gif") },
  { url: require("../../assets/img/place2.jpg"), name: '借母溪', tags: ['特色美食', '2'] },
  { url: require("../../assets/img/place3.jpg"), name: '火场土家族', tags: ['名俗风情', '风景'] },
  { url: require("../../assets/img/place4.jpg"), name: '罗水乡', tags: ['特色美食', '手工'] },

  { url: require("../../assets/img/place1.png"), name: '罗塔坪', tags: ['特色美食', '非遗'], logo: require("../../assets/img/baokuan.gif") },
  { url: require("../../assets/img/place2.jpg"), name: '茅岩河镇', tags: ['特色美食', '劳动体验2'] },
  { url: require("../../assets/img/place3.jpg"), name: '三家馆', tags: ['名俗风情', '风景'] },
  { url: require("../../assets/img/place4.jpg"), name: '温塘镇', tags: ['特色美食', '手工'] },
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
