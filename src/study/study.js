window.addEventListener('load', () => {
  let itemList = document.querySelector('.itemList')
  const dataItemList = [
    {
      date: '2021/4/27  周二',
      value: [
        `Object.freeze()   对象冻结`,
        `attr()   配合content使用，获取自定义属性的值`,
      ],
      diary: '',
    },
    {
      date: '2021/4/28  周三',
      value: [`踩坑：空文件石不能转换成base64`],
      diary: '今天一天啥也没干，就改这个小bug，结果弄了一天，烦死了，害',
    },
    {
      date: '2021/4/29  周四',
      value: [`使用webpack-cdn-plugin对依赖使用cdn引入`],
      diary: '改良了一下打卡页面数据渲染的结构',
    },
  ]
  let itemListInnerHTMLStr = ''
  dataItemList.forEach((item) => {
    itemValueStr = item.value
      .map((val, index) => `${index + 1}.${val}`)
      .join('<br>')

    itemListInnerHTMLStr += `
  <section class="item">
      <p class="date">${item.date}</p>
      <div class="val">${itemValueStr}</div>
 `
    if (item.diary) {
      itemListInnerHTMLStr += ` <div class="val"><b>日记：</b>${item.diary}</div> </section>`
      return
    }
    itemListInnerHTMLStr += '</section>'
  })
  itemList.innerHTML = itemListInnerHTMLStr
})
