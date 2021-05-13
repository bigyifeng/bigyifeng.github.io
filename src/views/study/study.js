window.addEventListener('load', () => {
  let itemList = document.querySelector('.itemList')
  const dataItemList = [
    {
      date: '2021/4/27',
      value: [
        `Object.freeze()   对象冻结`,
        `attr()   配合content使用，获取自定义属性的值`,
      ],
      diary: '',
    },
    {
      date: '2021/4/28',
      value: [`踩坑：空文件石不能转换成base64`],
      diary: '今天一天啥也没干，就改这个小bug，结果弄了一天，裂开了',
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
      diary: '五一了，冲',
    },
    {
      date: '2021/5/6',
      value: [`art-template`],
    },
    {
      date: '2021/5/7',
      value: [`技术调研收银app的双屏异显`],
      diary: '搞了一下午，如果要做的话需要使用原生安卓，有点难',
    },
    {
      date: '2021/5/8',
      value: [`fetch`, `vue3 hooks`],
      diary: '尤雨溪:“读书人的事儿，怎么能叫抄呢”  hooks真香',
    },
    {
      date: '2021/5/11',
      value: [`vue3 Suspense`],
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

    itemListInnerHTMLStr += `
      <section class="item">
      <p class="date">${item.date}  ${weekStr} </p>
      <div class="val">${itemValueStr}</div>
 `
    //  如果有日记  就加上去
    if (item.diary) {
      itemListInnerHTMLStr += ` <div class="val"><b>小记：</b>${item.diary}</div> </section>`
      return
    }
    itemListInnerHTMLStr += '</section>'
  })

  itemList.innerHTML = itemListInnerHTMLStr

  // 将时间转换成周几
  function toweek(date) {
    console.log(date)
    let datelist = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    return datelist[new Date(date).getDay()]
  }
})
