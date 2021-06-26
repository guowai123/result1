$(function(){

    //密码规则
    var form=layui.form,
    layer=layui.layer;

    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ],
         samePwd:function(value){
            if(value===$("[name=outpwd]").val()){
                return "新旧密码不能一致";
            }
        },
        rePwd:function(value){
            if(value!==$("[name=affrim]").val()){
                return "两次密码不一致"
            }
        }
    })
    

    // // 修改密码 接口有问题需要 自己写 
    // $(".layui-form").on("submit",function(e){
    //     e.preventDefault();
    //     $.ajax({
    //         url:"/my/updatepwd",
    //         method:"POST",
    //         data:$(this).serialize(),
    //         success: function(res){
    //             if(res.status!==0){
    //                 return console.log("密码输入错误");
    //             }
    //             console.log("更新 成功");
    //             $(".layui-form")[0].reset();
    //         }
    //     })
    // })




})