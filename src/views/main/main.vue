<template>
	<div class="body">
		<div class="header">
			<div class="headerLeft">
				<img :src="schoolLogo" width="267px" height="63px" />
			</div>
			<div class="headerRight">
				<a-menu v-model:selectedKeys="current" mode="horizontal">
					<a-menu-item key="index">
						<template #icon>
							<img :src="indexImg" width="20px" height="20px" />
						</template>
						首页
					</a-menu-item>
					<a-menu-item key="hot">
						<template #icon>
							<img :src="hotImg" width="20px" height="20px" />
						</template>
						热门
					</a-menu-item>
					<a-sub-menu key="project">
						<template #icon>
							<img :src="projectImg" width="20px" height="20px" />
						</template>
						<template #title>项目</template>
						<a-menu-item key="service">旅游</a-menu-item>
						<a-menu-item key="group">3D打印</a-menu-item>
					</a-sub-menu>
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
					<a-menu-item key="about">
						<template #icon>
							<img :src="aboutImg" width="20px" height="20px" />
						</template>
						关于我们
					</a-menu-item>
				</a-menu>
			</div>
		</div>
		<div class="content">
			<div class="introduction">
				景区3D文创馆，打造特色旅游路径，精致服务游客
				<br />成立于2024年3月，旨在打造3D立体的旅游体验
				<br />以3D打印为基础的特色旅游服务项目
			</div>
			<a-button type="primary" shape="round">
				<template #icon>
					<arrow-right-outlined />
				</template>
				了解更多
			</a-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'mainName',
	data() {
		return {
			schoolLogo: require('../../assets/img/school-logo.png'),
			indexImg: require('../../assets/img/index.png'),
			hotImg: require('../../assets/img/hot.png'),
			projectImg: require('../../assets/img/project.png'),
			phoneImg: require('../../assets/img/phone.png'),
			shareImg: require('../../assets/img/share.png'),
			workImg: require('../../assets/img/work.png'),
			aboutImg: require('../../assets/img/about.png')
		}
	}
}
</script>

<style scoped>
.body {
	position: absolute;
	contain: '';
	width: 100%;
	height: 100%;
	background-image: url('../../assets/img/bg.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

.header {
	display: flex;
	justify-content: space-between;
	height: 80px;
	background-color: rgba(128, 128, 128, 0.4);
}

.headerLeft {
	width: 500px;
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
	color: white;
}

.ant-menu {
	font-size: 20px;
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
