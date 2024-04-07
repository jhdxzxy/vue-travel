<template>
  <div class="body">
    <Header />
    <div></div>
    <div class="content">
      <div class="introduction">
        <p>
          “又一村”是一个富有诗意和深意的名字，它源自陆游的《游山西村》，“山穷水复疑无路”体现了乡村振兴工作困难重重；“柳暗花明又一村”表达了我们团队寻找到了方法，并同心协力努力前进。“又一村”这个名字，既体现了我们对乡村振兴事业的热爱和投入，也寄托了我们对农村经济繁荣和农民富裕的美好愿景。
        </p>
        <p>
          乡村振兴是一个系统性、复杂性的工程，需要政府、企业、社会等多方共同努力。在这个过程中，如何利用和盘活农村的闲置资源，使之转化为推动农村发展的动力，是一项重要的任务。我们的“又一村”平台，正是这样一个创新性的尝试，通过文旅融合的方式，将农村的风景、文化、特色产品等资源进行有效整合和推广，吸引游客前来体验，从而带动农村经济的发展。
        </p>
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
.body::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/bg2.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: blur(3px);
}

.content {
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.introduction {
  margin: 0 250px 50px;
  color: cornflowerblue;
  font-family: initial;
  font-size: 24px;
  font-weight: bold;
  text-indent: 2em;
  text-align: justify;
  text-justify: newspaper;
}
</style>
