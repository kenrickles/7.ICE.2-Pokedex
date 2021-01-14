import React from 'react';
import { render } from 'react-dom';
import pokemon from './pokemon.json';
import styles from './styles.scss';

const pokedex = [];

let count = 0;
for (const pokemonName in pokemon) {
  count += 1;
  console.log(`${pokemonName}: ${pokemon[pokemonName]}`);
  console.log(pokemon[pokemonName]);
  pokedex.push(pokemon[pokemonName]);
  if (count > 19) {
    break;
  }
}

console.log(pokedex[0].types);

// [...] react code
function PokedexEntries({ pokedexEntries }) {
  return (
    <div>
      <h2 className="pokedex-entries">
        Pokedex Entries:
        {pokedexEntries.X && pokedexEntries.X.en}
      </h2>
    </div>
  );
}
function PokemonTypes({ pokemonTypes }) {
  if (pokemonTypes[1] !== undefined) {
    return (
      <div>
        <h2 className="pokemon-types">
          Pokemon Types:
          {pokemonTypes[0]}
          ,
          {pokemonTypes[1]}
        </h2>
        <img src={`/icons/${pokemonTypes[0]}.svg`} className="pokemonImg" />
        <img src={`/icons/${pokemonTypes[1]}.svg`} className="pokemonImg" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="pokemon-types">
        Pokemon Types:
        {pokemonTypes[0]}
      </h2>
      <img src={`/icons/${pokemonTypes[0]}.svg`} className="pokemonImg" />
    </div>
  );
}

function Pokemon({ name, pokedexEntries, pokemonTypes }) {
  // console.log(pokemonTypes, 'hello');
  return (
    <div>
      <h1 className="pokemon-name">
        Pokemon:
        {name}
      </h1>
      <PokedexEntries pokedexEntries={pokedexEntries} />
      <PokemonTypes pokemonTypes={pokemonTypes} />
    </div>
  );
}

const pokemonArray = pokedex.map((pokemon) => (
  <Pokemon
    key={pokemon.national_id}
    name={pokemon.names.en}
    pokedexEntries={pokemon.pokedex_entries}
    pokemonTypes={pokemon.types}
  />
));

function PokemonDisplay() {
  const myEl = (
    <div>
      {pokemonArray}
    </div>
  );
  console.log('myEl', myEl);
  return myEl;
}

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

// have react render the JSX element into the root element.
render(<PokemonDisplay />, rootElement);
