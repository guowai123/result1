$(function(){
    getUserinfo();

    //3.退出 
    var layer=layui.layer;
    $("#btnLogour").on("click",function(e){
       //提示用户是否确认退出
        layer.confirm('确定退出登陆？', {icon: 3, title:'提示'}, function(index){
            //do something
            localStorage.removeItem("token");
            location.href="/login.html";
            layer.close(index);
        });
    })
})



//1.获取用户基本信息
function getUserinfo(){
    $.ajax({
        url:"/my/userinfo",
        method:"GET",
        // headers:{
        //     Authorization:localStorage.getItem("token")||"";
        // },
        success:function(res){
            if(res.status!==0){
                return layui.layer.msg("获取用户失败");
            }
            //调用渲染用户的头像方法
            renderAvatar(res.data)
        },
        complete:function(res){
            if(res.responseJSON.status===1&&res.responseJSON.message==="身份认证失败！"){
                localStorage.removeItem("token");
                location.href="/login.html";
            }
            // console.log(res);
            // console.log(("sdasd"));
        }
      
    })
}
//2.调用渲染用户的头像方法
function renderAvatar(user){
    //1.获取用户的名称
    var name=user.nickname||user.username;
    //2.渲染欢迎的文本
    $(".welcome").html("欢迎&nbsp;&nbsp;"+name);
    //3.按需渲染头像 有优先级
    if(user.user_pic!==null){
        $(".layui-nav-img").attr("src",user.user_pic).show();
        $(".text-avatar").hide();
    }else{
        $(".layui-nav-img").hide();
        let first=name[0].toUpperCase();
        $(".text-avatar").html(first);
    }
}