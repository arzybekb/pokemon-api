export const BASE_URL = 'https://pokeapi.co/api/v2'

export const POKEMON_DEFAULT_VALUE = {
   types: [],
   sprites: {
      other: {
         dream_world: {
            front_default: '',
         },
      },
   },
   name: '',
   id: '',
   stats: [],
   abilities: [],
   height: 0,
   weight: 0,
}
export const STAT_LABELS = [
   'HP',
   'Attack',
   'Defense',
   'Sp. Atk',
   'Sp. Def',
   'Speed',
]

export const POKEMON_TYPES = [
   { label: 'All', value: 'all' },
   { label: 'Normal', value: 'normal' },
   { label: 'Fighting', value: 'fighting' },
   { label: 'Flying', value: 'flying' },
   { label: 'Poison', value: 'poison' },
   { label: 'Ground', value: 'ground' },
   { label: 'Rock', value: 'rock' },
   { label: 'Bug', value: 'bug' },
   { label: 'Ghost', value: 'ghost' },
   { label: 'Steel', value: 'steel' },
   { label: 'Fire', value: 'fire' },
   { label: 'Water', value: 'water' },
   { label: 'Grass', value: 'grass' },
   { label: 'Electric', value: 'electric' },
   { label: 'Psychic', value: 'psychic' },
   { label: 'Ice', value: 'ice' },
   { label: 'Dragon', value: 'dragon' },
   { label: 'Dark', value: 'dark' },
   { label: 'Fairy', value: 'fairy' },
]
