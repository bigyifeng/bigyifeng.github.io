window.addEventListener('load', () => {
  let itemList = document.querySelector('.itemList')
  const dataItemList = [{
      date: '2021/4/27',
      value: [
        `Object.freeze()   对象冻结`,
        `attr()   配合content使用，获取自定义属性的值`,
      ],
      diary: '可以使用冻结对象来防止项目中其他地方对该对象进行的修改',
    },
    {
      date: '2021/4/28',
      value: [`踩坑：空文件石不能转换成base64`],
      diary: '今天一天啥也没干，就改这个小bug，弄了一天，裂开了',
    },
    {
      date: '2021/4/29',
      value: [`webpack-cdn-plugin对依赖使用cdn引入`],
      diary: '改良了一下打卡页面数据渲染的结构',
    },
    {
      date: '2021/4/30',
      value: [
        `自定义属性实现图片懒加载`,
        `Vue.API: $options(可调用自定义属性)，$parent(父实例)，$root(根实例)，$watch(类似watch，可关闭watch)，v-is(特定元素时调用组件)`,
      ],
      diary: '五一了',
    },
    {
      date: '2021/5/6',
      value: [`art-template`],
      diary: '不怎么好用，但是小',
    },
    {
      date: '2021/5/7',
      value: [`技术调研收银app的双屏异显`],
      diary: '搞了一下午，如果要做的话需要使用原生安卓，有点难',
    },
    {
      date: '2021/5/8',
      value: [`fetch`, `vue3 hooks`],
      diary: '尤雨溪:“读书人的事儿，怎么能叫抄呢”',
    },
    {
      date: '2021/5/11',
      value: [`vue3 Suspense`],
      diary: '来进行异步组件的显示',
    },
    {
      date: '2021/5/13',
      value: [`中途岛接口调用和调试`],
      diary: '写css是个体力活',
    },
    {
      date: '2021/5/18',
      value: [`小程序获取用户信息，手机信息`],
      diary: '必须得用户触发button才能进行接口的调用',
    },
    {
      date: '2021/5/21',
      value: [`了解npm script脚本`],
      diary: '',
    },
    {
      date: '2021/5/24',
      value: [`node官网node入门`],
      diary: '东西不多',
    },
    {
      date: '2021/5/28',
      value: [`proxy理论`],
      diary: '',
    },
    {
      date: '2021/6/1',
      value: [`jquery中ajax设置`],
      diary: '',
    },
    {
      date: '2021/6/2',
      value: [`uni-app的tabar`],
      diary: '',
    },
    {
      date: '2021/6/7',
      value: [`vue2组件使用v-model和sync修饰符`, `vue3组件使用v-model`],
      diary: 'vue2使用子组件修改父组件的数据时有多种方法，影响了单向数据流，所以vue3进行了统一',
    },
    {
      date: '2021/6/8',
      value: [`npx`],
      diary: '可调用还没下载的依赖，执行完之后进行依赖的删除',
    },
    {
      date: '2021/6/9',
      value: [`nodejs内置模块url`],
      diary: '对url地址的各种处理',
    },
    {
      date: '2021/6/15',
      value: [`nodejs内置模块http->request`],
      diary: '可进行所有请求',
    },
    {
      date: '2021/6/19',
      value: [`JSONP`],
      diary: '主要是运用了node环境没有同源策略的，来使用node的http模块进行其它接口的请求，将其它接口返回的数据返回给前端，然后再调用前端写好的脚本里面的方法来操作服务器返回的数据，实现跨域',
    },
    {
      date: '2021/6/22',
      value: [`vuepress`],
      diary: '使用vuepress建立自己的知识库，方便以后查阅资料,基础模板功能较少，于是添加了vdoing这个主题',
    },
    {
      date: '2021/6/22',
      value: [`BFC 用来清除浮动  防止mergin重叠，自适应多栏布局`, '$route.matched  返回该页面所在路由'],
      diary: 'BFC是CSS2.1就有的一种布局方式',
    },
  ]

  let itemListInnerHTMLStr = ''
  dataItemList.forEach((item) => {
    // 将收获从数组遍历成字符串
    itemValueStr = item.value
      .map((val, index) => `${index + 1}.${val}`)
      .join('<br>')

    // 得到周几
    weekStr = toweek(item.date)
    monthStr = toMonth(item.date)
    itemListInnerHTMLStr += `
      <section class="item month${monthStr}">
      <p class="date">${item.date}  ${weekStr} </p>
      <div class="val month${monthStr}_text">${itemValueStr}</div>
 `
    //  如果有日记  就加上去
    if (item.diary) {
      itemListInnerHTMLStr += ` <div class="val"><b>小记：</b><span>${item.diary}</span></div> </section>`
      return
    }
    itemListInnerHTMLStr += '</section>'
  })

  itemList.innerHTML = itemListInnerHTMLStr

  // 将时间转换成周几
  function toweek(date) {
    let datelist = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return datelist[new Date(date).getDay()]
  }
  // 将时间转换成月份
  function toMonth(date) {
    return new Date(date).getMonth() + 1
  }
})