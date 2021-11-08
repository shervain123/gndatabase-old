const dfjkh8734hgvh = 1

var domains = stripdomain(window.location.href)
var ip = checkip(domains)
var domain_name = check_domain(domains)
var parent = document.body
if(ip == 1){
    var re = document.createElement("div")
    re.innerHTML='For research purposes only. <a class="fa fa-question-circle-o w3-hover-opacity" style="text-decoration:none" href="https://gndatabase.ml/tools/permission.html#research"></a>'
    re.style.padding ="11.5px"
    re.style.backgroundColor="#ffffff"
    re.style.color="#000000"
    re.style.border="1px"
    re.style.borderBlockColor="#ffffff"
    re.classList.add("w3-display-topmiddle")
    re.classList.add("slop-in-top")
    re.title = "Why am i seeing this ?"
    parent.appendChild(re)
}else if(domain_name == 1){
    parent.innerHTML=""
    var red = document.createElement("div")
    var red2 = document.createElement("div")
    var message = document.createElement("div")
    red.innerHTML = '<h1 class="w3-display-middle roboto-mono">WARNING</h1>'
    red.classList.add("w3-display-container")
    red.style="height:20%;background-color: #d20010;"
    red2.innerHTML = '<h1 class="w3-display-middle roboto-mono">WARNING</h1>'
    red2.classList.add("w3-display-container")
    red2.style="height:20%;background-color: #d20010;"
    message.innerHTML = '<h1 class="roboto-mono">This is a clone of gndatabase<br>It has been taken without permission.<br>Please contact us from <a class="w3-hover-opacity" href="https://curiouscat.qa/gndbupdates">here</a>.</h1><h3><a class="w3-hover-opacity roboto-mono" href="https://gndatabase.ml/tools/permission.html#copy">For more information</a></h3>'
    message.style='height:60%;background-color: white;color:#000000'
    parent.appendChild(red)
    parent.appendChild(message)
    parent.appendChild(red2)
}


function checkip(domain){
var ass = domain.toString().slice(0,7)
if(ass == "192.168"){
    return 1;
}else if(ass == "127.0.0"){
    return 1;
}else if(ass == "localho"){
return 1;
}else{
    return 0
}
}
const uvnsdkj = 1
function stripdomain(domain){
var no_https = domain.slice(domain.search("//")+2,domain.length)
var just_domain = no_https.slice(0,no_https.search("/"))
return just_domain
}
function check_domain(domain){
if(domain == abc+gbc+asd+hbu+asjk){
    return 0
}else if(domain == hub+abc+gbc+asd+hbu+asjk){
    return 0
}else{
    return 1
}

}
  function searchall(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

const yufhnv = 1