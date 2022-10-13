//1 - Declare uma variavel de nome weight
//let weight;

//2 - Que tipo de dado é a variavel acima?
//console.log(typeof weight);

/*
  3. Declare uma variavel e atribua valores para cada
  um dos dados:
    * name: String
    * age: Number(integer)
    * stars: Number(float)
    * isSubscribed: Boolean

*/

//let name = "Lucas";
//let age = 50;
//let start = 3.5;
//let isSubscribed = true;

/*
  4. A variavel student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

  4.2 Mostre no console a seguinte mensagem: 

    <name> de idade <age> pensa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

*/

let student = {
  name: "Lucas",
  age: 50,
  weight: 73.5,
  isSubscribed: true,
};

console.log(typeof student);

console.log(
  `${student.name} tem idade de ${student.age} pesa ${student.weight} kg.`
);

/*
  5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor,
  ou seja, somente o Array vazio.

*/
