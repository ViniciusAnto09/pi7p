module.exports = function( app ) {
    var controller = {
    
		direcionarIndex : function(	request, response ){
			response.render("index",{
				mensagem: "Hello Word"
			});
		},
		
		direcionarMeuNome : function(request, response){
			response.render("index");
		},
		
		meuNome : function(	request, response ){
			var nome = request.body.nome;
			
			response.render( "index",{
				"nome" : nome
			});
			
			
		},
		
		direcionarSomar : function(request, response){
			response.render("somar");
		},
		
		somar : function(	request, response ){	
			var num1 = parseInt(request.body.num1);
			var num2 = parseInt(request.body.num2);
			var resultado = controller.somar2Num(num1,num2);
			response.render( "somar" , {
				"resultado" : resultado
			});
		},
		
		somar2Num : function(num1,num2){
			return num1 + num2;
		},
		
		direcionarSubtrair : function(request, response){
			response.render("subtrair");
		},
		
		subtrair : function(	request, response ){	
			var num1 = parseInt(request.body.num1);
			var num2 = parseInt(request.body.num2);
			var resultado = controller.subtrair2Num(num1,num2);
			response.render( "subtrair" , {
				"resultado" : resultado
			});
		},
		
		subtrair2Num : function(num1,num2){
			return num1 - num2;
		},
		
		direcionarMultiplicar : function(request, response){
			response.render("multiplicar");
		},
		
		multiplicar : function(	request, response ){	
			var num1 = parseInt(request.body.num1);
			var num2 = parseInt(request.body.num2);
			var resultado = controller.multiplicar2Num(num1,num2);
			response.render( "multiplicar" , {
				"resultado" : resultado
			});
		},
		
		multiplicar2Num : function(num1,num2){
			return num1 * num2;
		},
		
		direcionarDividir : function(request, response){
			response.render("dividir");
		},
		
		dividir : function(	request, response ){	
			var num1 = parseFloat(request.body.num1);
			var num2 = parseFloat(request.body.num2);
			var resultado = controller.dividir2Num(num1,num2);
			response.render( "dividir" , {
				"resultado" : resultado
			});
		},
		
		dividir2Num : function(num1,num2){
			return num1 / num2;
		},
		
		direcionarSomar100aoValor : function(request, response){
			response.render("somar100aoValor");
		},
		
		somar100 : function(	request, response ){	
			var num1 = parseInt(request.body.num1);
			var resultado = controller.somar100aoValor(num1);
			response.render( "somar100aoValor" , {
				"resultado" : resultado
			});
		},
		
		somar100aoValor : function(num1){
			var novoValor = Number(num1);
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			novoValor += 1;
			
			return novoValor;
		},
		
	};
    
    return controller;
};
