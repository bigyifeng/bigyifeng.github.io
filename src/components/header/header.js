$(function () {
  new Vue({
    el: '#header',
    data: {
      navList: [{
          text: '个人简历（建设中）',
          herf: '/src/views/me/me.html'
        },
        {
          text: '知识库',
          herf: '/repository/index.html'
        },
        {
          text: '学习打卡',
          herf: '/src/views/study/study.html'
        },
        {
          text: '演示项目',
          herf: '/src/views/items/items.html'
        },
        {
          text: '联系方式（建设中）',
          herf: '/src/404.html'
        },
      ],
    },
  })
})