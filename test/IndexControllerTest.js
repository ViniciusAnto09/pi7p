var IndexController = require("../app/controllers/IndexController")()
var expect = require("expect");

describe("IndexController", function() {
	
	//Teste de Somar
	it("Espero quando passar 2 e 3 retorne 5", function() {
		var retorno = IndexController.somar2Num(2,3);
		var esperado = 5;
		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar 0 e 3 retorne 3", function() {
		var retorno = IndexController.somar2Num(0,3);
		var esperado = 3;
		
		expect(retorno).toEqual(esperado);	
	});
	
	it("Espero quando passar 3 e -2 retorne 1", function() {
		var retorno = IndexController.somar2Num(3,-2);
		var esperado = 1;
		
		expect(retorno).toEqual(esperado);	
	});
	
	it("Espero quando passar -2 e -2 retorne -4", function() {
		var retorno = IndexController.somar2Num(-2,-2);
		var esperado = -4;
		
		expect(retorno).toEqual(esperado);	
	});
	
	//Teste de Subtrair
	it("Espero quando passar 3 e 2 retorne 1", function() {
		var retorno = IndexController.subtrair2Num(3,2);
		var esperado = 1;
		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar 3 e 0 retorne 3", function() {
		var retorno = IndexController.subtrair2Num(3,0);
		var esperado = 3;
		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar 2 e 3 retorne -1", function() {
		var retorno = IndexController.subtrair2Num(2,3);
		var esperado = -1;
		
		expect(retorno).toEqual(esperado);
	});
	
	//Teste de Multiplicar
	it("Espero quando passar 2 e 3 retorne 6", function() {
		var retorno = IndexController.multiplicar2Num(2,3);
		var esperado = 6;
		
		expect(retorno).toEqual(esperado);	
	});
	
	it("Espero quando passar 2 e 0 retorne 0", function() {
		var retorno = IndexController.multiplicar2Num(2,0);
		var esperado = 0;
		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar -1 e -1 retorne 1", function() {
		var retorno = IndexController.multiplicar2Num(-1,-1);
		var esperado = 1;
		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar 1 e -1 retorne -1", function() {
		var retorno = IndexController.multiplicar2Num(1,-1);
		var esperado = -1;
		
		expect(retorno).toEqual(esperado);
	});
	
	//Teste de Dividir
	it("Espero quando passar 1 e 1 retorne 1", function() {
		var retorno = IndexController.dividir2Num(1,1);
		var esperado = 1;
		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar 3 e 2 retorne 1,5", function() {
		var retorno = IndexController.dividir2Num(3,2);
		var esperado = 1.5;
		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar -3 e 2 retorne -1,5", function() {
		var retorno = IndexController.dividir2Num(-3,2);
		var esperado = -1.5;
		
		expect(retorno).toEqual(esperado);
	});
	
	//Teste Soma 100
	it("Soma 100 ao numero", function() {
		var retorno = IndexController.soma100aoValor(1);
		var esperado = 101;
		
		expect(retorno).toEqual(esperado);
	});
	
});
