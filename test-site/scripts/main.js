const myImage = document.querySelector("img");

//图像交互
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/002-ccnu-cs-logo.png") {
    myImage.setAttribute("src", "images/001-ccnu-cs-logo.png");
  } else {
    myImage.setAttribute("src", "images/002-ccnu-cs-logo.png");
  }
};

// 更改用户交互
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        myHeading.textContent = '计算机学院宣传部';  // 如果用户没有输入名字，重置文本而不换行
    } else {
        // 安全地创建 myName 的文本节点
        let safeMyName = document.createTextNode(myName);
        localStorage.setItem("name", myName);
        // 使用 innerHTML 插入换行，然后添加用户名称的文本节点
        myHeading.innerHTML = `欢迎来到计算机学院宣传部<br>`;  // 使用.innerHTML以解析<br>标签
        myHeading.appendChild(safeMyName);
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    let safeStoredName = document.createTextNode(storedName);
    myHeading.innerHTML = `欢迎来到计算机学院宣传部<br> ${storedName}`;  // 使用.innerHTML以解析<br>标签
    myHeading.appendChild(safeStoredName);
}

myButton.onclick = () => {
    setUserName();
};
  