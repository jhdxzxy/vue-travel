<template>
  <div class="body">
    <Header />

    <a-carousel autoplay arrows class="shareImg">
      <template #prevArrow>
        <div class="slick-arrow" title="上一张" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="slick-arrow" title="下一张" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>
      <img v-for="(item, index) in shareImgs" :key="index" :src="item.url" />
    </a-carousel>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  data () {
    return {
      shareImgs: [
        { url: require("../../assets/img/place1.png") },
        { url: require("../../assets/img/place2.jpg") },
        { url: require("../../assets/img/place3.jpg") },
        { url: require("../../assets/img/place4.jpg") },
        { url: require("../../assets/img/place5.jpg") },
        { url: require("../../assets/img/place6.jpg") },
        { url: require("../../assets/img/place7.png") },
        { url: require("../../assets/img/place8.png") },
        { url: require("../../assets/img/place9.jpg") },
      ],
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

.shareImg:deep(img) {
  height: auto;
  width: auto;
  max-height: 90%;
  max-width: 90%;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50;
  transform: translate(-50%, -50%);
}

.shareImg.ant-carousel:deep(.slick-slide) {
  text-align: center;
  height: calc(100vh - 80px);
  overflow: hidden;
}

.shareImg.ant-carousel:deep(.slick-arrow) {
  width: 50px;
  height: 50px;
  font-size: 50px;
  color: rgba(112, 112, 112, 0.4);
  z-index: 1;
}
.shareImg.ant-carousel:deep(.slick-arrow:before) {
  display: none;
}

.shareImg.ant-carousel:deep(.slick-arrow:hover) {
  color: rgba(36, 119, 253, 0.6);
}

.shareImg.ant-carousel:deep(.slick-dots li.slick-active button) {
  background: rgba(36, 119, 253, 0.6);
}

.shareImg.ant-carousel:deep(.slick-dots li button) {
  background: rgba(112, 112, 112, 0.6);
  margin-top: 10px;
}
</style>
