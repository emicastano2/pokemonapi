//Creamos la variable que va a contener los pokemon y la url para el fetch
const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

//Creamos un fetch que usando un for, va a obtener los primeros 150 pokemon de la API
async function obtenerPokemon(i) {
    try {
        const response = await fetch(URL + i);
        const data = await response.json();
        mostrarPokemon(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

(async () => {
    for (let i = 1; i <= 150; i++) {
        await obtenerPokemon(i);
    }
})();

//Esta función crea un div en #listaPokemon para cada pokémon y muestra la info que queremos de cada uno
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