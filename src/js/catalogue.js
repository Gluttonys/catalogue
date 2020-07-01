class Catalogue {

  defaultOptions = {
    wrapper: "",
    topLeave: "h1",
    secondLeave: "h2",
    backgroundColor: "#ec407a10",
    padding: "16",
    color: "#EC407A",
    fontSize: "16",
    // 偏移量
    offsetTop: "50"
  }

  titleList = ["h1", "h2", "h3", "h4", "h5", "h6"]

  constructor(options) {
    // 展开按钮
    this.button = document.getElementById("catalogue")
    this.button.innerHTML = "<span>＋</span>"
    // 目录页面
    this.catalogueList = this.initCatalogueList()
    // 初始化选项
    this.defaultOptions = Object.assign(this.defaultOptions, options)

    // 内容检错
    if (!this.titleList.includes(this.defaultOptions.topLeave.toLowerCase()) ||
      !this.titleList.includes(this.defaultOptions.secondLeave.toLowerCase())) {
      throw new Error("检查 options 中 topLeave , secondLeave 属性， 请从 h1 , h2 , h3 , h4 , h5 , h6 中任选一个")
    }

    if (!this.defaultOptions.wrapper) throw new Error("options.wrapper 参数是必须的 ！")

    // 初始化目录样式
    this.initStyle()
    // 填充列表目录
    this.padding()
  }

  initStyle() {
    /**
     * 初始化目录页
     * 1 ： 移入移出动画
     * 2 ： 确定目录页位置
     * 3 : 初始化用户自定义样式
     */
    let that = this

    function moveIn() {
      that.catalogueList.style.display = "block"
    }

    function moveOut() {
      that.catalogueList.style.display = "none"
    }

    this.button.addEventListener("mouseenter", moveIn)
    this.button.addEventListener("mouseleave", moveOut)
    this.catalogueList.addEventListener("mouseenter", moveIn)
    this.catalogueList.addEventListener("mouseleave", moveOut)

    // 初始化目录位置
    let computedStyle = window.getComputedStyle(this.button)
    let positionRight = computedStyle["right"]
    let positionBottom = computedStyle["bottom"]

    let catalogueListStyle = this.catalogueList.style
    catalogueListStyle.right = `${parseInt(positionRight) + 15}px`
    catalogueListStyle.bottom = `${parseInt(positionBottom) + 15}px`
    catalogueListStyle.backgroundColor = this.defaultOptions.backgroundColor
    catalogueListStyle.padding = `${parseInt(this.defaultOptions.padding)}px`
    catalogueListStyle.color = this.defaultOptions.color
  }

  initCatalogueList() {
    /**
     * 初始化目录页
     * @type {HTMLElement}
     */
    let block = document.createElement("div")
    block.id = "catalogue-list"
    return this.button.insertAdjacentElement("afterend", block)
  }

  padding() {
    let boundary = document.querySelector(this.defaultOptions.wrapper)
    if (!boundary) throw new Error("当前选择器匹配不到任何元素。 请指定一个合法的选择器 ！！")

    let resultStr = "<ol>"

    let count = 0
    for (let top of boundary.querySelectorAll("*")) {
      if (top.tagName === this.defaultOptions.topLeave.toUpperCase()) {
        top.id = `catalogue-${count}`
        resultStr += `<li data-to="catalogue-${count}">${top.innerText}</li>`
      } else if (top.tagName === this.defaultOptions.secondLeave.toUpperCase()) {
        top.id = `catalogue-${count}`
        resultStr += `<ul><li data-to="catalogue-${count}">${top.innerText}</li></ul>`
      }
      count++
    }

    resultStr += "</ol>"
    this.catalogueList.insertAdjacentHTML("afterbegin", resultStr)

    let lis = document.querySelectorAll("[data-to]")
    lis.forEach(li => {
      Catalogue.to(li, `#${li.dataset.to}`, this.defaultOptions.offsetTop)
    })

  }

  static to(dom, toSelector, offset, time = 1000) {
    /**
     * dom : 给选中的元素添加事件
     * toSelector : 移动到哪个元素
     * offset : 移动偏移量
     * @type {NodeListOf<Element>}
     */
    let y = document.querySelector(toSelector).offsetTop - offset

    dom.addEventListener("click", () => {
      window.scrollTo(0, y)
    })
  }
}
