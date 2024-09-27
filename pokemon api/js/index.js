async function fetchData() {
    try {
        const pokemonName = document.getElementById("name").value.toLowerCase(); 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not find Pokemon");
        }

        const data = await response.json();
        
        // Use the animated GIF from Generation V sprites
        const pokemonSprite = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        const imgElement = document.getElementById("pokemonsprite");
        const nameElement = document.getElementById("pokemonName");
        const typesElement = document.getElementById("pokemonTypes");
        const statsElement = document.getElementById("pokemonStats");
        const descriptionElement = document.querySelector('.description');

        // Display Pokémon sprite
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"; // Show the image

        // Display Pokémon name
        nameElement.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1); // Capitalize first letter

        // Display Pokémon types
        const types = data.types.map(typeInfo => typeInfo.type.name).join(", ");
        typesElement.textContent = `Type(s): ${types}`;

        // Display Pokémon stats
        const stats = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(", ");
        statsElement.textContent = `Stats: ${stats}`;

        // Show the description box
        descriptionElement.style.display = "block"; // Only show the border and content once data is fetched

    } catch (error) {
        console.error(error);
    }
}

// Make fetchData available in the global scope
window.fetchData = fetchData;
