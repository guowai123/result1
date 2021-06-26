$(function(){
    var form=layui.form;
    var layer=layui.layer;
    form.verify({
        nickname:function(value){
            if(value.length>6){
                return "昵称长度必须在1~6个字符之间"
            }
        }
    })

    initUserinfo();
    
    //初始化用户基本信息
    function  initUserinfo(){
        $.ajax({
            url:"/my/userinfo",
            method:"GET",
            success:function(res){
                if(res.status!==0){
                    return layer.msg("获取用户信息失败");
                }
                form.val("formUserInfo",res.data);
            }
        })
    } 
    
    //重置表单按钮的功能
    $("#btnReset").on("click",function(e){
        e.preventDefault();
        initUserinfo();
    })
    $(".layui-form").on("submit",function(e){
        e.preventDefault();
        $.ajax({
            url:"/my/userinfo",
            method:"POST",
            data:$(this).serialize(),
            success:function(res){
                if(res.status!==0){
                    return layer.msg("修改用户信息失败")
                }

               layer.msg("用户更新成功");
               window.parent.getUserinfo();
            }
        })
    })
   
})
