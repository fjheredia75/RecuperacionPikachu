export const PikachuCharacter = 'https://pokeapi.co/api/v2/pokemon/'
export const rickAndMortyLocalizations = 'https://rickandmortyapi.com/api/location'
export const rickAndMortyEpisodes = 'https://rickandmortyapi.com/api/episode'

export const fetchRickAndMorty = async (url:string) => {
    return fetch(url).then(res=> res.json())
}
