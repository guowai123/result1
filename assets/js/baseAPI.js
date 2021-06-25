

$.ajaxPrefilter(function(opations){
    console.log(opations.url);
    opations.url="http://api-breakingnews-web.itheima.net"+opations.url
})