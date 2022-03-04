//获取所有li元素
const elems = document.querySelectorAll("#list li");
//循环添加点击事件
for (let i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", function () {
    //获取当前点击元素要渲染的路由地址
    const routeName = this.getAttribute("data-route");
    window.location.hash = routeName;
  });
}

//获取路由对应的html
const getHtml = (hash) => {
  const routerDict = {
    home: `<div>这是主页页面</div>`,
    list: `<div>这是列表页面</div>`,
    mine: `<div>这是我的页面</div>`,
  };
  return routerDict[hash];
};

//渲染html
const renderHTML = (hash) => {
  const htmlContent = getHtml(hash);
  const wrap = document.getElementById("content");
  wrap.innerHTML = htmlContent;
};

//监听路由变化，然后更改html内容
window.addEventListener("hashchange", function () {
  const hash = window.location.hash.split("#/")[1];
  renderHTML(hash);
});

//添加默认路由
window.addEventListener("load", function () {
  const hash = window.location.hash;
  if (hash === "") {
    window.location.hash = "#/home";
  }
});