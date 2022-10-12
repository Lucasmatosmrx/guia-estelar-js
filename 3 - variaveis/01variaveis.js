/*
//var
var clima = "Quente";
clima = "Frio";

console.log(clima);*/

/*
//let
let clima = "Quente";
clima = "Frio";

console.log(clima);*/

/*
//const
const clima = "Quente";
clima = "Frio";

console.log(clima);*/

let clima = true; //boolean
clima = ""; //string

console.log(typeof clima);

//var é global e, também local
//hoiting /  conceito de elevação
console.log("> existe x antes do bloco?", x);

{
  var x = 0;
}

console.log("> existe x depois do bloco?", x);

// const e let são locais e só funcionam no escopo onde foi criada
//console.log("> existe y antes do bloco?", y);

//{
//  let y = 0;
//  console.log("> existe y antes?", y);
//}

//console.log("> existe y depois do bloco?", y);

/*
let y = 1;

{
  // aqui eu não atribuo uma palavra reservada para y ai ela sobe o escopo
  y = 0;
  console.log("> existe y antes?", y);
}

console.log("> existe y depois do bloco?", y);*/

const y = 1;

{
  //a varivel const não sobe escopo ela fica local
  const y = 0;
  console.log("> existe y antes?", y);
}

console.log("> existe y depois do bloco?", y);
