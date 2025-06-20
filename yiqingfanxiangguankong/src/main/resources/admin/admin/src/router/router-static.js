import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import cart from '@/views/modules/cart/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import hesuanjiance from '@/views/modules/hesuanjiance/list'
    import shangpin from '@/views/modules/shangpin/list'
    import shangpinCollection from '@/views/modules/shangpinCollection/list'
    import shangpinCommentback from '@/views/modules/shangpinCommentback/list'
    import shangpinOrder from '@/views/modules/shangpinOrder/list'
    import wangfanYuyue from '@/views/modules/wangfanYuyue/list'
    import wuzi from '@/views/modules/wuzi/list'
    import wuziCollection from '@/views/modules/wuziCollection/list'
    import wuziLiuyan from '@/views/modules/wuziLiuyan/list'
    import wuziOrder from '@/views/modules/wuziOrder/list'
    import wuziYuyue from '@/views/modules/wuziYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryJiance from '@/views/modules/dictionaryJiance/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangpin from '@/views/modules/dictionaryShangpin/list'
    import dictionaryShangpinCollection from '@/views/modules/dictionaryShangpinCollection/list'
    import dictionaryShangpinOrder from '@/views/modules/dictionaryShangpinOrder/list'
    import dictionaryWangfanYuyue from '@/views/modules/dictionaryWangfanYuyue/list'
    import dictionaryWangfanYuyueShenti from '@/views/modules/dictionaryWangfanYuyueShenti/list'
    import dictionaryWangfanYuyueYesno from '@/views/modules/dictionaryWangfanYuyueYesno/list'
    import dictionaryWuzi from '@/views/modules/dictionaryWuzi/list'
    import dictionaryWuziCollection from '@/views/modules/dictionaryWuziCollection/list'
    import dictionaryWuziOrder from '@/views/modules/dictionaryWuziOrder/list'
    import dictionaryWuziYuyueYesno from '@/views/modules/dictionaryWuziYuyueYesno/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiance',
        name: '检测结果',
        component: dictionaryJiance
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangpin',
        name: '商品类型',
        component: dictionaryShangpin
    }
    ,{
        path: '/dictionaryShangpinCollection',
        name: '收藏表类型',
        component: dictionaryShangpinCollection
    }
    ,{
        path: '/dictionaryShangpinOrder',
        name: '订单类型',
        component: dictionaryShangpinOrder
    }
    ,{
        path: '/dictionaryWangfanYuyue',
        name: '交通工具',
        component: dictionaryWangfanYuyue
    }
    ,{
        path: '/dictionaryWangfanYuyueShenti',
        name: '身体状态',
        component: dictionaryWangfanYuyueShenti
    }
    ,{
        path: '/dictionaryWangfanYuyueYesno',
        name: '申报状态',
        component: dictionaryWangfanYuyueYesno
    }
    ,{
        path: '/dictionaryWuzi',
        name: '物资类型',
        component: dictionaryWuzi
    }
    ,{
        path: '/dictionaryWuziCollection',
        name: '收藏表类型',
        component: dictionaryWuziCollection
    }
    ,{
        path: '/dictionaryWuziOrder',
        name: '订单类型',
        component: dictionaryWuziOrder
    }
    ,{
        path: '/dictionaryWuziYuyueYesno',
        name: '捐赠状态',
        component: dictionaryWuziYuyueYesno
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/chat',
        name: '投诉',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/hesuanjiance',
        name: '核酸检测',
        component: hesuanjiance
      }
    ,{
        path: '/shangpin',
        name: '商品',
        component: shangpin
      }
    ,{
        path: '/shangpinCollection',
        name: '商品收藏',
        component: shangpinCollection
      }
    ,{
        path: '/shangpinCommentback',
        name: '商品评价',
        component: shangpinCommentback
      }
    ,{
        path: '/shangpinOrder',
        name: '商品订单',
        component: shangpinOrder
      }
    ,{
        path: '/wangfanYuyue',
        name: '出行信息',
        component: wangfanYuyue
      }
    ,{
        path: '/wuzi',
        name: '物资',
        component: wuzi
      }
    ,{
        path: '/wuziCollection',
        name: '物资收藏',
        component: wuziCollection
      }
    ,{
        path: '/wuziLiuyan',
        name: '物资留言',
        component: wuziLiuyan
      }
    ,{
        path: '/wuziOrder',
        name: '物资申请',
        component: wuziOrder
      }
    ,{
        path: '/wuziYuyue',
        name: '物资捐赠',
        component: wuziYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
