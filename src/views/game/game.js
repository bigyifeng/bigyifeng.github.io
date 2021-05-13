window.addEventListener('load', () => {
  let itemList = document.querySelector('.gameList')
  const dataItemList = [
    {
      name: '坦克大战',
    },
  ]

  let itemListInnerHTMLStr = ''
  dataItemList.forEach((item, index) => {
    itemListInnerHTMLStr += `
    <section>
    <p>${index}.${item.name}</p>
    </section>`
  })

  itemList.innerHTML = itemListInnerHTMLStr
})