function redirectURL(url) 
{
  window.location.href = url;
}

function UA(){
  var v = navigator.appVersion.toLowerCase(), u = navigator.userAgent.toLowerCase(), n = navigator.appName;
  this.mac = (v.indexOf("mac")+1);
  this.win = (v.indexOf("win")+1);
  this.nn = (n == "Netscape");
  this.ie = (n == "Microsoft Internet Explorer");
  this.aol = (u.indexOf("aol")+1);
  this.opera = (u.indexOf("opera")+1);
  this.ver = (this.ie) ? parseFloat(v.split('msie ')[1]) : parseFloat(v);
  this.major = this.ver.toString().split('.')[0];
	this.minor = this.ver.toString().split('.')[1];
	this.v4 = (this.major == 4);
	this.os = (this.mac) ? 'mac' : (this.win) ? 'win' : navigator.platform;
  this.name = (this.nn) ? 'nn' : (this.ie) ? 'ie' : n;
  this.codeName = this.name +'_'+ parseInt(this.ver) + '_'+ this.os;
}
var ua = new UA();

var onloadHandlers = [];
function loadEvents() {
  for(var i=0; i<onloadHandlers.length; i++) {
    eval(onloadHandlers[i]);
  }
}
window.onload = loadEvents;

var onresizeHandlers = [];
function resizeEvents() {
  for(var i=0; i<onresizeHandlers.length;i++) {
    eval(onresizeHandlers[i]);
  }
}
window.onresize = resizeEvents;

function handleResize(init) {
  if(!(document.layers)) return;
  if(init==true) with (navigator) {
    document.pgW=innerWidth;
    document.pgH=innerHeight;
    onresizeHandlers[onresizeHandlers.length] = 'handleResize()';
  }
  else if (innerWidth!=document.pgW || innerHeight!=document.pgH) location.reload();
}
handleResize(true);

function getObjByName(name,doc) {
  var o = 0;
  if(!doc) doc = document;
  if(doc[name]) o=doc[name];
  if(document.all && doc.all[name]) o=doc.all[name];
  if(o) {
    if(!o.getElementsByTagName) o.getElementsByTagName = getElementsArray;
    return o;
  }
  if(document.layers) {
    for(var i=0;i < doc.layers.length;i++){
      var lyrdoc = doc.layers[i].document;
      if(lyrdoc[name]) return lyrdoc[name];
      if(lyrdoc.layers.length > 0) {
        var o = getObjByName(name,lyrdoc);
        if(o) return o;
      }
    }
  }
  return 0;
}
if(!document.getElementById) document.getElementById = getObjByName;

function getElementsArray(el) {
  if(document.layers) {
    var doc = (this == document) ? document : this.document;
    switch(el) {
      case 'img' : return doc.images;
      case 'a' : return doc.links;
      case 'div' : return doc.layers;
      case 'form' : return doc.forms;
      default : return 0;
    }
  }
  if(document.all) return this.all.tags(el);
  return 0;
}
if(!document.getElementsByTagName) document.getElementsByTagName = getElementsArray;
if(document.layers) Layer.prototype.getElementsByTagName = getElementsArray;

function show(div){
  if(document.all) window.document.all[div].style.visibility = 'visible';
  else if(document.layers) getObjByName(div).visibility = 'show';
  else document.getElementById(div).style.visibility = 'visible';
}
function hide(div){
  if(document.all) window.document.all[div].style.visibility = 'hidden';
  else if(document.layers) getObjByName(div).visibility = 'hide';
  else document.getElementById(div).style.visibility = 'hidden';
}

function swapImg() {
  if(!document.images) return;
  var args = swapImg.arguments;
  for(var i=0;i < args.length;i+=2) {
    var imgSrc = (args[i + 1].indexOf('[') != -1) ? eval(args[i + 1] + '.src') : args[i + 1];
    if(getObjByName(args[i])) getObjByName(args[i]).src = imgSrc;
  }
}

function setCookie(name,value,expires) {
  document.cookie = escape(name)+'='+escape(value)+'; expires='+expires.toGMTString();
}

function getCookie(name) {
  var value,nl,cl,i,j,e;
  name+='=';
  value = 0;
  nl = name.length;
  cl = document.cookie.length;
  i = 0;
  while (i < cl) {
    j = i+nl;
    if(document.cookie.substring(i,j) == name) {
      e = document.cookie.indexOf(';',j);
      if(e == -1) e = document.cookie.length;
      value = unescape(document.cookie.substring(j,e));
      break;
    }
    i = document.cookie.indexOf(' ', i) + 1;
    if (i == 0) break;
  }  
  return value;
}

function openNASAWindow(url)
{
  if (url != "#")
  {
    var positionX = screen.width;
    var positionY = ((screen.height)/2);

    var sizeX = 720;
    var sizeY = 640;
    
    var strWindowFeatures = "";
    strWindowFeatures += 'menubar=yes,location=yes,toolbar=yes,directories=yes,scrollbars=yes,status=yes,resizable=yes,outerWidth='+720+',outerHeight='+640+',width='+720+'height='+640+',left='+80+',top='+60+'screenX='+80+',screenY='+60;
    winPopupWindow = window.open(url, "nasawindow", strWindowFeatures);
    winPopupWindow.focus();
  }
}

function preLoad(a) {
  var o = [];
  for(var i=0; i<a.length; i++) {
    o[i] = new Image();
    o[i].src = '/images/'+a[i]+'_1.gif';
  }
}


function NewWindow(mypage, myname, w, h, scroll) {
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
	win = window.open(mypage, myname, winprops)
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

preLoad('placeholder/navigation/topnav/nav_top_0','placeholder/navigation/topnav/nav_top_1','placeholder/navigation/topnav/nav_top_2','placeholder/navigation/topnav/nav_top_3','placeholder/navigation/topnav/nav_top_4','placeholder/navigation/topnav/nav_top_5');


