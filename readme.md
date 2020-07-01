> 自动生成个人博客或文章的目录

---

1. 使用方法， 克隆项目到本地， 解压文件夹。

    - 在头部引入CSS文件
    
    ```html
    <link rel="stylesheet" href="your/path/catalogue.css">
    ```
    
    - 自定义其位置， 默认位置 ` right: 40px ` , `bottom: 40px`
    ```css
    #catalogue {
          bottom: 40px;
          right: 40px;
    }
    ```
    
    - 在页面需要的地方添加HTML代码
    ```html
    <div id="catalogue"></div>
    ```
    
    - 在尾部引入JS文件
    ```html
    <script src="your/path/catalogue.js"></script>    
    ```
    - 自定义样式
    
        - **下面的代码需要catalogue.js支持， 请务必放在其文件下方**
    ```javascript
    new Catalogue({
        wrapper: "#content",
        topLeave: "h1",
        secondLeave: "h2",
        backgroundColor: "#eee",
        padding: "10",
        color: "green",
        fontSize: "16",
        offsetTop: 50
      })
    ```
    
2. 参数解释
    |选项|类型|默认值|解释|
    |-|-|-|-|
    |wrapper|String|""|这个参数是必须的。确定选择生成目录的边界, 接收一个选择器字符串, 该选择器不能包含目录按钮。默认为空 |
    |topLeave|String|"h1"|选择一级目录的标签。只能是 h1 ~ h6 |
    |secondLeave|String|"h2"|选择二级目录的标签。只能是 h1 ~ h6 |
    |backgroundColor|String|"#ec407a10"|目录面板的背景颜色， 接收任何合法的颜色值|
    |padding|String|"16"|目录面板的内边距， 接收一个**数字类型字符串**|
    |color|String|"#EC407A"|目录面板的字体颜色， 接收任何合法的颜色值。|
    |fontSize|String|"16"|目录面板的字体大小， 接收一个**数字类型字符串**|
    |offsetTop|Number|50|距离顶端的偏移量|
    
    
3. 注意的地方
    - 该脚本会给设置为目录的标签添加id属性。如果您有在设置为目录标签上设置id, 为了避免冲突， 请自行调试代码。
    
4. 优缺点
    - 优点 ： 使用简单方便， 可自定义。 插件使用体积小，未压缩前两个文件共5.4Kb。
    - 缺点 ： 缺少动画等过渡效果， 看起来比较生硬。 只支持两级目录， 暂不支持更多
