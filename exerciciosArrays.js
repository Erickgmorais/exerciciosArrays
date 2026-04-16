// =========================================
/*


   █████████                                                   
  ███░░░░░███                                                  
 ░███    ░███  ████████  ████████   ██████   █████ ████  █████ 
 ░███████████ ░░███░░███░░███░░███ ░░░░░███ ░░███ ░███  ███░░  
 ░███░░░░░███  ░███ ░░░  ░███ ░░░   ███████  ░███ ░███ ░░█████ 
 ░███    ░███  ░███      ░███      ███░░███  ░███ ░███  ░░░░███
 █████   █████ █████     █████    ░░████████ ░░███████  ██████ 
░░░░░   ░░░░░ ░░░░░     ░░░░░      ░░░░░░░░   ░░░░░███ ░░░░░░  
                                              ███ ░███         
                                             ░░██████          
                                              ░░░░░░        
                                              
                                              
*/
// =========================================
// Instruções:
// - Leia cada enunciado com atenção
// - Implemente a solução logo abaixo de cada exercício
// - NÃO pule exercícios
// - Pesquise na internet métodos que você não conhece
// =========================================
const ask = require('readline-sync');

// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================
let films = ["O Menino do Pijama Listrado", "A Empregada", "Velozes e Furiosos: Hobbs e Shaw", "Panico", "Planeta dos Macacos", "Ate o Ultimo Homem"];
let write = ask.question("Digite um numero de 0 a 5: ");

console.log(films[write]);




// =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================
let drink = ["Coca-Cola", "Guarana", "Dolly", "Fanta", "Fruki", "Whisky", "Agua", "Suco de Laranja "]
console.log(drink.length);




// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================
let pokemons = ["CHARIZARD", "MEWTWO", "LUCARIO", "RAYQUAZA", "EEVEE"];
let writePokemons = ask.question("Digite o nome de um pokemon: ").toUpperCase();

console.log(pokemons.includes(writePokemons));



// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================
let empty = [];
let games = ask.question("Digite o nome de 3 jogos: ");
let add = empty.push(games);

console.log(empty);


// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================
let series = ["Stranger Things", "Round Six", "Wandinha", "The Crown", "Black Mirror"];
let remove = series.pop();

console.log(series);




// ========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================

let food = ["Lasanha", "Churrasco", "Pastel", "Arroz e feijao", "Alaminuta", "Strogonoff"];
let remove1 = food.splice(3, 2);

console.log(food)




// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================
let bands = ["CPM 22", "Guns N Roses", "The Polices", "The Doors"]; 
console.log(bands)
console.log(bands.join('-'))





// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================
let prices = ["49.99", "60.49", "91.99", "56.99"];
console.log(prices[0], prices[3]);




// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================
let character = ["Mario", "Zelda", "Kratos", "Lara Croft"];
console.log(character.sort())




// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================
let films1 = ["Velozes e furiosos", "Ate o ultimo homem", "Velozes e furioso"];
console.log(films1.length);




// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =========================================
let seriesOne = ["Stranger Things", "Round Six", "Wandinha", "The Crown", "Black Mirror"];
let filmesTwo = ["O Menino do Pijama Listrado", "A Empregada", "Velozes e Furiosos: Hobbs e Shaw", "Panico"];

let junction = series.concat(filmesTwo);
console.log(junction)



// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================

let ep = ["Breaking Bad, “Ozymandias (Temporada 5, Episódio 14)", "The Simpsons, Last Exit to Springfield (Temporada 4, Episódio 17)", "The Leftovers, “International Assassin” (Temporada 2, Episódio 8)", "The Sopranos, “College” (Temporada 1, Episódio 5)" ]
let reverse = ep.reverse();

console.log(reverse); 





// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes (map, filter, reduce, find, etc.)
// - Exemplo de ideias:
//   * Filtrar filmes por gênero
//   * Encontrar um filme específico
//   * Calcular média de notas dos filmes
// =========================================

let sortList = ["GUERRA", "DRAMA", "ROMANCE", "COMEDIA", "SUSPENSE"];
console.log(sortList);

let sortAsk = ask.question("Qual genero que listei acima voce deseja? ").toLowerCase();
let dramaFilms = ["A BALEIA", 
"VIDAS PASSADAS",
"O SOL DE 2026",
"O PIOR VIZINHO DO MUNDO"]

let romanceFilms = ["TODOS MENOS VOCE",
"QUESTAO DE TEMPO",
"CONTINENCIA NO AMOR",
"VERMELHO, BRANCO E SANGUE AZUL"]

let warFilms = ["NADA DE NOVO NO FRONT",
"O RESGATE DO SOLDADO RYAN",
"ATE O ULTIMO HOMEM",
"SOCIEDADE DA NEVE"]

let comedyFilms = ["UPGRADE DE AMIZADE",
"QUE HORAS EU TE PEGO?",
"GLOSS ONION",
"MISTERIO EM PARIS"]

let suspenseFilms = ["O HOMEM DE GIZ",
"O MUNDO DEPOIS DE NOS",
"SORRIA 2",
"O PALIDO OLHO AZUL"]

if(sortAsk == "guerra"){
   console.log(warFilms);
}else if(sortAsk == "drama") {
   console.log(dramaFilms)
}else if(sortAsk == "romance"){
   console.log(romanceFilms)
}else if(sortAsk == "suspense"){
   console.log(suspenseFilms)
}else if(sortAsk == "comedia"){
   console.log(comedyFilms)
}else {
   console.log("Genero inexistente")
}
