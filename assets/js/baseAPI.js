

$.ajaxPrefilter(function(opations){
    opations.url="http://api-breakingnews-web.itheima.net"+opations.url;


    //统一为有权限的接口设置headers请求头
    if(opations.url.indexOf("/my/")!==-1){
        opations.headers={
            Authorization:localStorage.getItem("token")||""
        }
    }       
    opations.complete=function(res){
        if(res.responseJSON.status===1&&res.responseJSON.message==="身份认证失败！"){
            localStorage.removeItem("token");
            location.href="/login.html";
        }
    }
})