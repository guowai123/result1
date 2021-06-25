$(function(){
    $("#link_reg").on("click",function(){
        $(".login_box").hide();
        $(".reg_box").show();
    })
    $("#link_login").on("click",()=>{
        $(".reg_box").hide();
        $(".login_box").show();
    })


    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ],
        repwd:(value)=>{
            let pwd1=$(".reg_box [name=password]").val();
            if(pwd1!==value){
                return "两次密码输入不一致";
            }
        }
    }); 

    $("#form_reg").submit(function(e){
        e.preventDefault();
        $.ajax({
            url:"/api/reguser",
            method:"post",
            data:$(this).serialize(),
            success:function(res){
                if(res.status!==0){
                    return layer.msg(res.message);
                }
                layer.msg("注册成功");
                $("#link_login").click();
            }
        })
    })


    $("#form_login").submit(function(e){
        e.preventDefault();
        $.ajax({
            url:"/api/login",
            method:"POST",
            data:$(this).serialize(),
            success:function(res){
                if(res.status!==0){
                    return layer.msg('登陆失败');
                }
                layer.msg("登陆成功");
                localStorage.setItem("token",res.token);
                location.href="index.html"
            }
        })
    })

})