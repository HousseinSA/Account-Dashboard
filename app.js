// get the emlents
const menuBtn = document.querySelector(".menu-btn")
const Close = document.querySelector(".close")
const navBar = document.querySelector("aside")
const themeChange = document.querySelector(".theme-toggle")

// event listener when clicking the menu btn
menuBtn.addEventListener("click", () => {
  navBar.style = "display:block"
})
// remove  the menu when scrolling
window.addEventListener("scroll", () => {
  // navBar.style = "display:none"
})
// event when clicking on close btn
Close.addEventListener("click", () => {
  navBar.style = "display:none"
})

// changing the theme 
themeChange.addEventListener("click",()=>{
  document.querySelector("body").classList.toggle("changingtheme")
  themeChange.querySelector("span:nth-child(1)").classList.toggle("active")
  themeChange.querySelector("span:nth-child(2)").classList.toggle("active")
  
})

// add produts to table 
products.map(product=>{
  const tr = document.createElement("tr")
  const tableDate = `
    <td>${product.productName}</td>
    <td>${product.productsID}</td>
    <td>${product.pay}</td>
    <td class="${
      product.status === "panding"
        ? "pending"
        : product.status === "fail"
        ? "danger"
        : "success"
    }">${product.status}</td>
    <td>details</td>
  `
  tr.innerHTML = tableDate
  document.querySelector("tbody").appendChild(tr)
})

