# Variaveis

- Nomes simbolicos para receber algum valor
- Atalhos de codigo
- Identificadores
- 3 palavras reservadas para criar uma variavel
  - var
  - let
  - const

O JS é uma linguagem fracamento tipada e dinâmica

- Variávies não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

# Scope

- Escopo determina a visibilidade de alguma variavel no JS

# Block statement

```js
//vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer codigo
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de
`block-scoped`

## var

```js
// var é global e poderá funcionar fora de um espoco de bloco
console.log("> existe x antes do bloco?", x);

{
  var x = 0;
}

console.log("> existe x depois do bloco?", x);
```

## let e const

```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log("> existe y antes do bloco?", y);

{
  let y = 0;
}

console.log("> existe x depois do bloco?", y);
```

## Para criar nomes

- JS é case-sensitive (sensível ao caso)
- JS aceita a cadeia de caracteres Unicode

* Posso:

  - Inciar com esse caracteres especiais: $ \_
  - Iniciar com letras
  - Colocar acentos
  - Letras maísculas e minúsculas fazem diferença

* Não posso:

  - Iniciar com números
  - Colocar espaços vazios no nome

* Ideal:
  - Criar nomes que fazem sentido
  - Que explique o que a varivel é ou faz
  - camelCase
  - snake_case
  - Escrever em inglês
