const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <=150; i++) {
    fetch(URL + i)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke){
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `<div class="pokemon">
    <p class="numero">${poke.id}</p>
    <img class="imagen" src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    <h2 class="nombre">${poke.name}</h2>
</div>
</div>`
listaPokemon.append(div); 
}