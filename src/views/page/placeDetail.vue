<template>
  <div class="body">
    <Header />

    <div class="content">
      <div class="top">
        <div class="topLeft">
          <img :src="place.url" class="palceImg" />
        </div>
        <div class="topRight">
          <p><h1>{{ place.name }}</h1></p>
          <p><div v-if="place.tags">
                  <a-tag
                    color="blue"
                    v-for="(tag, tagIndex) in place.tags"
                    :key="tagIndex"
                    class="wayTag"
                    >{{ tag }}</a-tag
                  >
                </div></p>
          <p v-if="place.address">地址：{{place.address}}</p>
          <p v-if="place.food">附近美食： {{place.food}}</p>
          <p v-if="place.toMap">
            <a-button type="primary" shape="round" @click="goMap">
                <template #icon>
                <aim-outlined />
                </template>
                云上田园
            </a-button>
      </p>
        </div>
      </div>
      <div class="bottom">
        <div v-html="place.introduce"></div>
      </div>
      <a-button type="primary" shape="round" @click="goIndex">
        <template #icon>
          <arrow-left-outlined />
        </template>
        返回
      </a-button>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import Header from "@/components/Header.vue";

export default {
  components: { Header },
  setup () {
    const route = useRoute();
    const router = useRouter();
    const goIndex = () => {
      router.push({ name: 'index' });
    }
    return {
      route,
      goIndex,
    };
  },
  data () {
    return {
      place: {
        url: require("../../assets/img/place1.png"),
        name: '新桥镇',
        tags: ['特色美食', '非遗'],
        logo: require("../../assets/img/baokuan.gif")
      }
    }
  },
  methods: {

    goMap () {
      window.open('https://www.720yun.com/t/c6akiw1e72h?scene_id=120016380');
    }

  },

  mounted () {
    this.place = JSON.parse(this.route.query.place);
    console.log('===11111===', this.place)

  }
};
</script>

<style scoped>
.body {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: rgb(174, 211, 247, 0.3);
}

.content {
  height: calc(100vh - 80px);
  overflow-y: auto;
  padding: 20px 100px;
}

.content::-webkit-scrollbar {
  display: none;
}

.top {
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: aqua; */
}

.topleft {
  align-self: start;
  background-color: antiquewhite;
}

.palceImg {
  height: 35vh;
  width: auto;
  max-width: 50vw;
  object-fit: contain;
  vertical-align: middle;
}

.topRight {
  /* align-self: start; */
  text-align: left;
  width: 50vw;
  /* background-color: bisque; */
}

.bottom {
  text-indent: 2em;
  text-align: justify;
  text-justify: newspaper;
  /* background-color: aqua; */
}

.bottom >>> .introduceImg {
  max-width: 100%;
  object-fit: contain;
  vertical-align: middle;
}
</style>
