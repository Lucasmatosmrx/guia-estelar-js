// variaveis e tipo de dados
//declaracao or declaration
var name;

// assigment or atribuicao de valores
name = "lucas";

// que tipo de dados foi colocado na variavel
console.log(typeof name);

//let age = 20
//let isHuman =  true

//agrupamento de declarações
let age, isHuman;

age = 18;
isHuman = true;

//multiplos argumentos na funcao
console.log(name, age, isHuman);

//concatenando valores
console.log(name + " - " + age + " - " + isHuman);
console.log("O " + name + " tem " + age + " e ele é humano? " + isHuman);

//interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`);
