(function(){
    var serverUri = "https://developerflow.github.io/upwork-mod/"
    var modMenuEl

    //load the styles
    loadStyle()
    //load the mod menu
    modMenu()
    function loadStyle(){
        var style = document.createElement("style");
        style.innerHTML = "\
        @font-face{font-family:mauline; src:url(" + serverUri + "mauline.otf)}\
        .yotta-icon{width:20vw; height:auto; max-width:50px;}\
        .yotta-pointer{cursor:pointer}\
        .yotta-round-btn{width:30px; height:30px; border-radius:50%}\
        .minor-pad{padding:2%}\
        body.yotta-darkmode *{background-color:#000 !important; color:#fff !important;}\
        #yotta-mod-bar{position:fixed; left:0; height:100%; top:0; display:flex; flex-direction:column;\
        justify-content:flex-end; box-sizing:border-box; background-color:transparent !important}\
        #yotta-mod-bar *{box-sizing:border-box;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}\
        #yotta-mod-menu{box-sizing:border-box}\
        #yotta-mod-menu *{box-sizing:border-box;font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}\
        #yotta-mod-menu{height:100%; position:fixed; top:0; left:0; overflow:auto; position:flex;\
        flex-direction:column; justify-content:center; padding:2%; border:1px solid #75c2af; background:#fff;\
        max-width:300px; z-index:10000}\
        #yotta-mod-menu h2{font-family:mauline}\
        "
        document.head.appendChild(style)
    }
    // load the mod menu
    function modMenu(){
      var modBar = document.createElement("div"); modBar.id = "yotta-mod-bar"; modBar.className = "minor-pad"
      var modIniBtn = document.createElement("img"); modIniBtn.src = serverUri + "img/logo.png"; console.log(serverUri,modIniBtn.src)
      modIniBtn.className = "yotta-icon yotta-pointer"; modIniBtn.style.border = "1px solid #75c2af";
      modIniBtn.style.borderRadius = "50%"
      modBar.appendChild(modIniBtn)
      modIniBtn.onclick = openModMenu
      modBar.appendChild(modIniBtn)
      document.body.appendChild(modBar)
    }
    function openModMenu(){
      if(!modMenuEl){
        modMenuEl = document.createElement("div"); modMenuEl.id = "yotta-mod-menu"
        //top section
        topSection()
        //appearance
        appearance()
      }
      document.body.appendChild(modMenuEl)
    }
    function closeModMenu(){
      if(modMenuEl){
        var parent = modMenuEl.parentElement
        if(parent){
          parent.removeChild(modMenuEl)
        }
      }
    }
    function topSection(){
      var container = document.createElement("div");
      var navSection = document.createElement("div"); 
      var closeBtn = document.createElement("button"); closeBtn.className = "yotta-round-btn yotta-pointer"
      closeBtn.style.background = "none"; closeBtn.style.border = "1px solid #75c2af"
      closeBtn.innerHTML = "x"; closeBtn.onclick = closeModMenu
      navSection.appendChild(closeBtn)
      var infoPad = document.createElement("div"); infoPad.className = "minor-pad"
      infoPad.innerHTML = "Note that all changes made will be lost if the page where to reload"
      container.append(navSection,infoPad)
      modMenuEl.appendChild(container)
    }
    function appearance(){
        var container = document.createElement("div")
        var heading = document.createElement("h2"); heading.innerHTML = "Appearance"
        var contentContainer = document.createElement("div"); contentContainer.className = "minor-pad"
        container.appendChild(heading); container.appendChild(contentContainer)
        modMenuEl.appendChild(container)
        //dark mode control
        darkMode(contentContainer)
    }
    function darkMode(container){
        var darkModeEl = document.createElement("div")
        var label = document.createElement("label"); label.innerHTML = "darkmode"
        var select = document.createElement("input"); select.type = "checkbox";
        select.oninput = function(){
          if(select.checked){
            changeClass(document.body,"","yotta-darkmode")
          }
          else{
            changeClass(document.body,"yotta-darkmode","")
          }
        }
        darkModeEl.appendChild(label); darkModeEl.appendChild(select)
        container.appendChild(darkModeEl)
    }

    //help functions
    function changeClass(element,oldClass,newClass){
        //changes the css class of an element
      if(newClass instanceof Array){
        for(var i=0; i < newClass.length; i++){changeClass(element,oldClass,newClass[i])}
        return
      }
      if(oldClass instanceof Array){
        for(var c=0; c < oldClass.length; c++){changeClass(element,oldClass[c],newClass)}
      }
      var classes=single(element.className," ").split(" ")
      var numClasses=classes.length
      for(var i=0; i < numClasses; i++){
        if(classes[i] == oldClass || classes[i] == newClass){classes.splice(i,1); i--}
      }
      classes.push(newClass)
      element.className=classes.join(" ")
    }
    function single(word,target){
      /*searches "word" and makes sure that there are no more than 2 consecutive
      "target"s by making each occurence a single "target"
      */
      var targetExp = new RegExp(target+"+","g")
      return word.replace(targetExp,target)
    }
}()) 
  
