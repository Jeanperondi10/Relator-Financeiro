function login(cond) {
	if(cond==1){
		carregarDados();
	}
	document.getElementById('tela-config').style="display:none";
	document.getElementById('tela-display').style="display:block";
}
window.onload = function(){
	var app=new Vue({
		el:"#app",
		data:{
			titulo:"Testamodel",
			check:false,
			text:["eai","oi"],
			title:"Oi"
		},
		methods:{
			oi(){
				alert("olá")
			},
			alert(){
				alert("oi sou um alert")
			}
		}
	});
}
function alerat(){
	alert("oi sou um alert")
}



/*
	ANOTACAO

		Crie um game que se não for feito desconto uma,

		Jokei-po
			A cada rodada o jogador verá um menu, com as opicoes pedra papel tesoura
			
*/