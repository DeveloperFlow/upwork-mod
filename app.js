(function(){
  var style = document.createElement("style");
  style.innerHTML = "body.yotta-darkmode *{background-color:#000 !important; color:#fff !important;}"
  document.head.appendChild(style)
  // load the mod menu
  function modMenu(){
    var modBar = document.createElement("div")
    modBar.className = "yotta-mod-bar"
    var modIniBtn = document.createElement("button")
    modIniBtn.className = "yotta-mod-btn"
    modBar.appendChild(modIniBtn)
    modIniBtn.onclick = openModMenu
    modBar.appendChild(modIniBtn)
    document.body.appendChild(modBar)
  }
  function openModMenu(){}
}()) 
