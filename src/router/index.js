import { createRouter, createWebHistory } from 'vue-router'
import localCache from '@/utils/cache'

import login from '@/views/login/Login.vue'
const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        name: 'main',
        path: '/main',
        component: () => {
            return import('../views/main/main.vue')
        },
        // children: [
        // 	// {
        // 	// 	path: 'index',
        // 	// 	component: () => {
        // 	// 		return import('../views/Info/index.vue')
        // 	// 	}
        // 	// },
        // 	{
        // 		path: 'home',
        // 		component: () => {
        // 			return import('../views/Info/Home.vue')
        // 		}
        // 	},
        // 	{
        // 		path: 'article',
        // 		component: () => {
        // 			return import('../views/Info/Article.vue')
        // 		}
        // 	},
        // 	{
        // 		path: 'project',
        // 		component: () => {
        // 			return import('../views/Info/Project.vue')
        // 		}
        // 	},
        // 	{
        // 		path: 'about',
        // 		component: () => {
        // 			return import('../views/Info/About.vue')
        // 		}
        // 	},

        // 	{
        // 		path: 'lifeRecord',
        // 		component: () => {
        // 			return import('../views/Info/Life.vue')
        // 		}
        // 	},
        // 	{
        // 		path: 'articleDetail/:id',
        // 		component: () => {
        // 			return import('../views/Info/ArticleDetail.vue')
        // 		}
        // 	},
        // 	{
        // 		path: 'timeline',
        // 		component: () => {
        // 			return import('../views/Info/Timeline.vue')
        // 		}
        // 	}
        // ]
    },

    {
        name: 'index',
        path: '/index',
        component: () => {
            return import('../views/page/index2.vue')
        }
    },
    {
        name: 'placeDetail',
        path: '/placeDetail',
        component: () => {
            return import('../views/page/placeDetail.vue')
        }
    },
    {
        name: 'share',
        path: '/share',
        component: () => {
            return import('../views/page/share.vue')
        }
    },

    {
        path: '/login',
        component: login
    },
    {
        path: '/authMain',
        component: () => {
            return import('../views/Manage/AuthMain.vue')
        },
        beforeEnter: () => {
            if (!localCache.getCache('token')) {
                router.push('/login')
            }
        },
        children: [
            {
                path: 'operateContent',
                component: () => {
                    return import('../views/Manage/operateContent.vue')
                },
                children: [
                    {
                        path: '',
                        redirect: '/authMain/operateContent/article'
                    },
                    {
                        name: 'article',
                        path: 'article/:id?',
                        component: () => {
                            return import('../views/Manage/operateArticle.vue')
                        }
                    },
                    {
                        path: 'todo',
                        component: () => {
                            return import('../views/Manage/operateTodos.vue')
                        }
                    },
                    {
                        path: 'project',
                        component: () => {
                            return import('../views/Manage/operateProject.vue')
                        }
                    },
                    {
                        path: 'editArticle/:id?',
                        component: () => {
                            return import('../views/Manage/EditArticle.vue')
                        }
                    },
                    {
                        path: 'timeline',
                        component: () => {
                            return import('../views/Manage/operateTimeline.vue')
                        }
                    }
                ]
            }
        ]
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
