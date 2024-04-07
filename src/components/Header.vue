<template>
  <div class="header">
    <div class="headerLeft">
      <img :src="logo" height="80px" />
    </div>
    <div class="headerRight">
      <a-menu
        :selectedKeys="[selectedKey]"
        mode="horizontal"
        @click="handelClick"
      >
        <a-menu-item key="index">
          <template #icon>
            <img :src="indexImg" width="20px" height="20px" />
          </template>
          首页
        </a-menu-item>
        <!-- <a-menu-item key="hot" disabled>
          <template #icon>
            <img :src="hotImg" width="20px" height="20px" />
          </template>
          热门
        </a-menu-item>
        <a-sub-menu key="project" disabled>
          <template #icon>
            <img :src="projectImg" width="20px" height="20px" />
          </template>
          <template #title>项目</template>
          <a-menu-item key="service">旅游</a-menu-item>
          <a-menu-item key="group">3D打印</a-menu-item>
        </a-sub-menu> -->
        <a-menu-item key="share">
          <template #icon>
            <img :src="shareImg" width="20px" height="20px" />
          </template>
          游客分享
        </a-menu-item>
        <a-sub-menu key="work">
          <template #icon>
            <img :src="projectImg" width="20px" height="20px" />
          </template>
          <template #title>交流合作</template>
          <a-menu-item key="hone">
            <img :src="phoneImg" width="20px" height="20px" />
            龙共134＊8418
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="about" disabled>
          <template #icon>
            <img :src="aboutImg" width="20px" height="20px" />
          </template>
          关于我们
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: 'headerName',
  computed: {
    selectedKey () {
      return this.$route.name;
    },
  },
  setup () {
    const router = useRouter();
    const handelClick = (e) => {
      router.push({ name: e.key });
    };
    return {
      handelClick,
      logo: require("@/assets/img/logo.png"),
      indexImg: require("@/assets/img/index.png"),
      hotImg: require("@/assets/img/hot.png"),
      projectImg: require("@/assets/img/project.png"),
      phoneImg: require("@/assets/img/phone.png"),
      shareImg: require("@/assets/img/share.png"),
      workImg: require("@/assets/img/work.png"),
      aboutImg: require("@/assets/img/about.png"),
    };
  },

}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: white;
  box-shadow: 0 0 5px 3px rgb(0 0 0 / 15%);
}

.headerLeft {
  width: 400px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.headerRight {
  display: inline-flex;
  margin-top: 20px;
}

.ant-menu-horizontal {
  background-color: transparent;
}

.ant-menu {
  font-size: 20px;
}
</style>
