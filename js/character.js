function characterimg(name){
  switch(name){
case "albedo":return "/img/character/head/Albedo.png";
case "aloy":return "/img/character/head/Aloy.png";
case "amber":return "/img/character/head/Amber.png";
case "ayaka":return "/img/character/head/Ayaka.png";
case "barbara":return "/img/character/head/Barbara.png";
case "beidou":return "/img/character/head/Beidou.png";
case "bennett":return "/img/character/head/Bennett.png";
case "chongyun":return "/img/character/head/Chongyun.png";
case "diluc":return "/img/character/head/Diluc.png";
case "diona":return "/img/character/head/Diona.png";
case "eula":return "/img/character/head/Eula.png";
case "fischl":return "/img/character/head/Fischl.png";
case "ganyu":return "/img/character/head/Ganyu.png";
case "hu tao":return "/img/character/head/Hu Tao.png";
case "jean":return "/img/character/head/Jean.png";
case "kaeya":return "/img/character/head/Kaeya.png";
case "kazuha":return "/img/character/head/Kazuha.png";
case "keqing":return "/img/character/head/Keqing.png";
case "klee":return "/img/character/head/Klee.png";
case "kokomi":return "/img/character/head/Kokomi.png";
case "lisa":return "/img/character/head/Lisa.png";
case "mona":return "/img/character/head/Mona.png";
case "ningguang":return "/img/character/head/Ningguang.png";
case "noelle":return "/img/character/head/Noelle.png";
case "qiqi":return "/img/character/head/Qiqi.png";
case "raiden":return "/img/character/head/Raiden.png";
case "razor":return "/img/character/head/Razor.png";
case "rosaria":return "/img/character/head/Rosaria.png";
case "sara":return "/img/character/head/Sara.png";
case "sayu":return "/img/character/head/Sayu.png";
case "sucrose":return "/img/character/head/Sucrose.png";
case "tartaglia":return "/img/character/head/Tartaglia.png";
case "thoma":return "/img/character/head/Thoma.png";
case "traveler":return "/img/character/head/Traveler.png";
case "venti":return "/img/character/head/Venti.png";
case "xiangling":return "/img/character/head/Xiangling.png";
case "xiao":return "/img/character/head/Xiao.png";
case "xingqiu":return "/img/character/head/Xingqiu.png";
case "xinyan":return "/img/character/head/Xinyan.png";
case "yanfei":return "/img/character/head/Yanfei.png";
case "yoimiya":return "/img/character/head/Yoimiya.png";
case "zhongli":return "/img/character/head/Zhongli.png";

  }
}

function charactertimes(name){
  switch(name){
    case "albedo": return ["wednesday"]; 
case "aloy": return ["monday"]; 
case "amber": return ["monday"]; 
case "ayaka": return ["tuesday"]; 
case "barbara": return ["monday"]; 
case "beidou": return ["wednesday"]; 
case "bennett": return ["tuesday"]; 
case "chongyun": return ["tuesday"]; 
case "diluc": return ["tuesday"]; 
case "diona": return ["monday"]; 
case "eula": return ["tuesday"]; 
case "fischl": return ["wednesday"]; 
case "ganyu": return ["tuesday"]; 
case "hu tao": return ["tuesday"]; 
case "jean": return ["tuesday"]; 
case "kaeya": return ["wednesday"]; 
case "kazuha": return ["tuesday"]; 
case "keqing": return ["monday"]; 
case "klee": return ["monday"]; 
case "kokomi": return ["monday"]; 
case "lisa": return ["wednesday"]; 
case "mona": return ["tuesday"]; 
case "ningguang": return ["monday"]; 
case "noelle": return ["tuesday"]; 
case "qiqi": return ["monday"]; 
case "raiden": return ["wednesday"]; 
case "razor": return ["tuesday"]; 
case "rosaria": return ["wednesday"]; 
case "sara": return ["tuesday"]; 
case "sayu": return ["wednesday"]; 
case "sucrose": return ["monday"]; 
case "tartaglia": return ["monday"]; 
case "traveler": return ["monday","tuesday","wednesday"]; 
case "venti": return ["wednesday"]; 
case "xiangling": return ["tuesday"]; 
case "xiao": return ["monday"]; 
case "xingqiu": return ["wednesday"]; 
case "xinyan": return ["wednesday"]; 
case "yanfei": return ["wednesday"]; 
case "yoimiya": return ["monday"]; 
case "zhongli": return ["wednesday"]; 

  }
}

function characterimage(name){
  var imagefile = characterimg(name)
  var days = charactertimes(name)
  document.cookie= name+"=1"
  for (let step = 0; step < days.length; step++) {
    var day = document.getElementById(days[step])
    var image = document.createElement("img")
    image.src = imagefile
    image.style.width="120px"
    image.style.margin="5px 0px 5px 0px"
    image.id=name+days[step]
    image.onclick = function(){location.href = "/character/"+name+".html#talent"}
    image.classList.add("w3-hover-opacity")
    day.appendChild(image)
  }
  var day = document.getElementById("sunday")
    var image = document.createElement("img")
    image.src = imagefile
    image.style.width="120px"
    image.style.margin="5px 0px 5px 0px"
    image.id=name+"sunday"
    image.onclick = function(){location.href = "/character/"+name+".html#talent"}
    image.classList.add("w3-hover-opacity")
    day.appendChild(image)
}


function removecha(name){
  var day = charactertimes(name)
  document.cookie= name+"=0"
  for (let step = 0; step < day.length; step++) {
    var days = document.getElementById(name+day[step])
    days.remove()
  }
  var days = document.getElementById(name+"sunday")
    days.remove()
}