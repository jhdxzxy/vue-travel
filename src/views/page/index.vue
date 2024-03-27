<template>
  <div class="body">
    <Header />

    <a-carousel autoplay :dots="false" class="showPlace">
      <img v-for="(item, index) in placeImgs" :key="index" :src="item.url" />
    </a-carousel>

    <div class="hotWay">
      <a-divider class="hotWayDivider">热 门 路 线</a-divider>
    </div>

    <div class="content">
      <a-card hoverable :bordered="false" class="way">
        <template #cover>
          <img :src="hongjun" titlt="查看" class="wayImg" />
          <img :src="baokuan" class="imgLeft" />
        </template>
        <div class="wayName">红军路线</div>
      </a-card>

      <a-card hoverable :bordered="false" class="way">
        <template #cover>
          <img :src="yanxue" titlt="查看" class="wayImg" />
        </template>
        <div class="wayName">研学路线</div>
      </a-card>

      <a-card hoverable :bordered="false" class="way">
        <template #cover>
          <img :src="qinzi" titlt="查看" class="wayImg" />
        </template>
        <div class="wayName">亲子路线</div>
      </a-card>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: { Header },
  data () {
    return {
      placeImgs: [
        { url: require("../../assets/img/place1.png") },
        { url: require("../../assets/img/place2.jpg") },
        { url: require("../../assets/img/hot.png") },
      ],
      baokuan: require("../../assets/img/baokuan.gif"),
      hongjun: require("../../assets/img/way1.png"),
      yanxue: require("../../assets/img/place1.png"),
      qinzi: require("../../assets/img/place2.jpg"),
    };
  },
};
</script>

<style scoped>
.body {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: rgb(174, 211, 247, 0.3);
}

.showPlace {
  height: 220px;
  text-align: center;
  overflow: hidden;
}

.showPlace img {
  height: 220px;
  width: 100%;
  object-fit: contain;
}

.hotWay {
  width: 30%;
  margin-left: 35%;
}

.hotWayDivider {
  font-size: 20px;
  font-weight: 400;
  color: tomato;
}

.hotWayDivider.ant-divider-horizontal.ant-divider-with-text-center::before,
.hotWayDivider.ant-divider-horizontal.ant-divider-with-text-center::after {
  border-top: 1px solid tomato;
}

.content {
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.content > * {
  width: calc((100% - 240px) / 3);
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

.way:hover {
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 15%);
}

.way:deep(.ant-card-body) {
  background-color: lightskyblue;
}

.wayName {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.showPlace img:hover,
.wayImg:hover {
  cursor: pointer;
  filter: brightness(90%);
  -webkit-filter: brightness(90%);
}
</style>
