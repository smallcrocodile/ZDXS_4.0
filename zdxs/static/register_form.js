/**
$(document).ready(function(){
	password1=$("#id_password1").val();
	if(password1!="请输入你的密码")
	{
		$("#id_password1").attr("type","password");
	}
	password2=$("#id_password2").val()
	if(password2!="检查一次密码")
	{
		$("#id_password2").attr("type","password");
	}
	$("input").focus(function(){
		$(this).val("");
		$(this).css("color","#000000");
		$("#submit").val("注册");
		$("#submit").css("color","#FFFFFF");
	});
	$("#id_password1").focus(function(){
		$("#id_password1").attr("type","password");
		$(this).val("");

	});
	$("#id_password2").focus(function(){
		$("#id_password2").attr("type","password");
		$(this).val("");

	});
	$("#submit").click(function(){
		email=$("#id_email").val();
		if(email=="写下你的邮箱，邮箱用来登录"||email=="")
		{
			$("#warning").text("请填写邮箱");
		};
	})
})