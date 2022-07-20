/*===================================
File Name    : notification.js
Description  : Notifications JS.
Author       : Bestwebcreator.
Template Name: Cryptocash – ICO, Cryptocurrency Website & ICO Landing Page HTML + Dashboard Template
Version      : 1.7
===================================*/

var times = [3120, 4442, 5224, 7510, 8636, 16002, 17222];
var facts = ['EXPERIENCED','PASSIVE','NFTs MULTI','MULTI','STRONG','LONG-TERM','+CONFIDENCE'];
var facts2 = ['SAFU TEAM','REWARDS','NETWORK','UTILITY','MARKETING','PROJECT','+TRANSPARENCY'];
var factsgot = ['',''];
var num = 0;
var themeInterval = setInterval('notification()', time());

function time() {
    return   times[parseInt(Math.random()*7)] + 8000;
}
function notification() {
	factsgot = [facts[num],facts2[num]];
    spop({
        template: '<div class="sale_notification d-flex align-items-center"><img src="assets/images/about_icon.png" alt="" /> <div class="notification_inner"> <h3>'+factsgot[0]+'</h3><p>'+factsgot[1]+'</p></div></div>',
        group: 'submit-satus',
		style     : 'nav-fixed',// error or success
        position  : 'bottom-left',
        autoclose: 5000,
        icon: false
    });
	num++;
	if (num > 6) {
		num = 0;
	}
    clearInterval(themeInterval);
    themeInterval = setInterval('notification()', time());
}