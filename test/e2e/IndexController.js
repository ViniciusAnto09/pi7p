describe("Fazer Multiplicação",function () {
	it("Espero faça uma multiplicação", function(){
		var driver = browser.driver;
		
		driver.get('http://localhost:3000/multiplicar');
		
		driver.findElement( by.name( "num1" ) ).sendKeys("5");
		driver.findElement( by.name( "num2" ) ).sendKeys("4");
		driver.findElement( by.id( "multiplicar" ) ).click();
		
		driver.findElement(by.id("resultado")).getText().then(function(text){
			expect(text).toEqual("Valor Total 20");
		});
	
	});
});