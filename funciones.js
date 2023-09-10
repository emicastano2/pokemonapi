const listaPokemon = document.querySelectorAll("listaPokemon");
let url = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <=150, i++;) {
    fetch(url + i)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
}

function mostrarPokemon(data) {
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <div class="todos" id="listaPokemon">
    <div class="pokemon">
        <p class="numero">#001</p>
        <img class="imagen" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur">
        <h2 class="nombre">Bulbasaur</h2>
    </div>
    `;
    listaPokemon.appendChild(div);
}