<template>
  <div class="body">
    <Header />

    <div class="content">
      <div class="introduction">
        景区3D文创馆，打造特色旅游路径，精致服务游客
        <br />成立于2024年3月，旨在打造3D立体的旅游体验
        <br />以3D打印为基础的特色旅游服务项目
      </div>
      <a-button type="primary" shape="round" @click="knowMore">
        <template #icon>
          <arrow-right-outlined />
        </template>
        了解更多
      </a-button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Header from '@/components/Header.vue';
export default {
  name: "mainName",
  components: { Header },
  setup () {
    const router = useRouter();
    const knowMore = () => {
      router.push({ name: 'index' });
    }
    return {
      knowMore,
    };
  },

};
</script>

<style scoped>
.body {
  position: absolute;
  contain: "";
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/bg.png");
  background-color: aqua;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.introduction {
  margin-top: 230px;
  margin-bottom: 40px;
  color: white;
  font-family: initial;
  font-size: 40px;
  font-weight: bold;
  align-items: center;
}
</style>
