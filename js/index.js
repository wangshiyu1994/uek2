/*
* @Author: Administrator
* @Date:   2017-04-01 14:56:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-01 15:30:44
*/

'use strict';

window.onload=function(){
	var designWidth =1080;/*定义设计尺寸8*/

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size=CW/designWidth*100+"px";
		document.querySelector("html").style.fontSize=size;
}
	fontSize();/*函数运行*/
	window.onresize= fontSize;
}