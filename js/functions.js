 function removeall(){
     var e = document.getElementById("characterss")
     var a = e.getElementsByTagName("div")
     for (let step = 0; step < a.length; step++) {
      var s = a[step]
      var b = s.getElementsByTagName("img")
      if(b[1].classList.contains("hidea")){
      }else{
        selectcha(s.id)
      }
    }
    var e = document.getElementById("weaponss")
     var a = e.getElementsByTagName("div")
     for (let step = 0; step < a.length; step++) {
      var s = a[step]
      var b = s.getElementsByTagName("img")
      if(b[1].classList.contains("hidea")){
      }else{
        selectweapon(s.id)
      }
    }
    checkitems()
 }
 function fill(){
  var e = document.getElementById("characterss")
  var a = e.getElementsByTagName("div")
  for (let step = 0; step < a.length; step++) {
   var s = a[step]
   var b = s.getElementsByTagName("img")
   if(b[1].classList.contains("hidea")){
    selectcha(s.id)
   }
 }
  var e = document.getElementById("weaponss")
  var a = e.getElementsByTagName("div")
  for (let step = 0; step < a.length; step++) {
   var s = a[step]
   var b = s.getElementsByTagName("img")
   if(b[1].classList.contains("hidea")){
    selectweapon(s.id)
   }
 }
 checkitems()
}
  // things that you don't need to care
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  function tothetopu() {
  document.body.scrollTop = 0;
  } 

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  function search(id,input) {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById(input);
    filter = input.value.toUpperCase();
    ul = document.getElementById(id);
    var li = ul.getElementsByTagName('div');
    for (i = 0; i < li.length; i++) {
      a = li[i]
      txtValue = a.id;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  function filterSelections(c) {
  var x, i;
  x = document.getElementsByClassName("filterImg");
  if (c == "all"){ c = "filterImg";}
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
    if (x[i].classList.contains(c)){  x[i].style.display = "";console.log(x[i]);}
  }
}

function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function selectcha(name){
  var parent = document.getElementById(name)
  var sel = parent.getElementsByTagName("img")
  if(sel[1].classList.contains("hidea")){
    characterimage(name)
  sel[1].classList.remove("hidea")
  sel[0].classList.remove("w3-hover-opacity")
  }else{
    removecha(name)
  sel[1].classList.add("hidea")
  sel[0].classList.add("w3-hover-opacity")
  }
  checkitems()
}
function selectweapon(name){
  var parent = document.getElementById(name)
  var sel = parent.getElementsByTagName("img")
  if(sel[1].classList.contains("hidea")){
    weaponimage(name)
  sel[1].classList.remove("hidea")
  sel[0].classList.remove("w3-hover-opacity")
  }else{
    removeweapon(name)
  sel[1].classList.add("hidea")
  sel[0].classList.add("w3-hover-opacity")
  }
  checkitems()
}

function listCookies() {
  var theCookies = document.cookie.split(';');
  var aString = []
  for (var i = 1 ; i <= theCookies.length; i++) {
    var asd = theCookies[i-1]
      asd = asd.substring(0,asd.length - 2).replace(" ",'')
      aString.push(asd)
  }
  return aString;
}
function loadsave(){
  var cookies = listCookies()
  var iteams = 0
  var i = 0
  for (i = 0; i < cookies.length; i++) {
    var name = getCookie(cookies[i])
    if(name == '1'){
      iteams = iteams + 1
      console.log(cookies[i])
      selectcha(cookies[i])
    }
    if(name == '2'){
      iteams = iteams + 1
      console.log(cookies[i])
      selectweapon(cookies[i])
    }
  }
  checkitems()
  var dayf = daycheck()

    if(dayf == "monday"){
      document.getElementById("mondaymain").classList.remove("hidea")
    }
    else if(dayf == "tuesday"){
      document.getElementById("tuesdaymain").classList.remove("hidea")
    }
    else if(dayf == "wednesday"){
      document.getElementById("wednesdaymain").classList.remove("hidea")
    }
    else if(dayf == "thursday"){
      document.getElementById("mondaymain").classList.remove("hidea")
      document.getElementById("mondaytitle").innerText="Thursday"
    }
    else if(dayf ==  "friday"){
      document.getElementById("tuesdaymain").classList.remove("hidea")
      document.getElementById("tuesdaytitle").innerText="Friday"
    }
    else if(dayf == "saturday"){
      document.getElementById("wednesdaymain").classList.remove("hidea")
      document.getElementById("wednesdaytitle").innerText="Saturday"
    }
    else if(dayf == "sunday"){
      document.getElementById("sundaymain").classList.remove("hidea")
    }
  
}
function checkitems() {
  var cookies = listCookies()
  var iteams = 0
  var nocha = 0
  for (i = 0; i < cookies.length; i++) {
    var name = getCookie(cookies[i])
    if(name == '1'){
      iteams = iteams + 1
    }
    if(name == '2'){
      iteams = iteams + 1
    }
  }
  if(iteams == 0){
    var a = document.getElementsByClassName("alert")
    for (i = 0; i < a.length; i++) {
    a[i].classList.remove("hidea")
    }
    nocha = 1
  }else{
    var a = document.getElementsByClassName("alert")
    for (i = 0; i < a.length; i++) {
    a[i].classList.add("hidea")
    }
    nocha = 0
  }
  var days = ["monday","tuesday","wednesday","sunday"]
  for (i = 0; i < days.length; i++) {
    var as = document.getElementById(days[i])
    var ha = as.getElementsByTagName("img")
    if(ha.length == 0){
      if(nocha == 0) {document.getElementById(days[i]+"no").classList.remove("hidea"); document.getElementById(days[i]+"mt").classList.add("hidea");}
      else{ document.getElementById(days[i]+"mt").classList.remove("hidea"); document.getElementById(days[i]+"no").classList.add("hidea");}
    }else{
      document.getElementById(days[i]+"no").classList.add("hidea");
      document.getElementById(days[i]+"mt").classList.add("hidea");
    }
  }
}

    function daycheck(){
      let date = new Date();
      let day = date.getDay();
      if(day == 0){
        return "sunday";
      }else if(day == 1){
        return "monday";
      }else if(day == 2){
        return "tuesday";
      }else if(day == 3){
        return "wednesday";
      }else if(day == 4){
        return "thursday";
      }else if(day == 5){
        return "friday";
      }else if(day == 6){
        return "saturday";
      }
    }