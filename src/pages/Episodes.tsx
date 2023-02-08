import {fetchRickAndMorty, PikachuCharacter, rickAndMortyEpisodes} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'

interface EpisodesData {
    results: Array<{
        id: number;
        name: string;
        air_date: string;
        episode: string;
        character: string;
    }>;
}

export const Episodes: React.FC = () => {
    const { data, error } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Character</h1>

            <div className={styles.container}>
                {data?.results.map((episode) => (
                    <AntCard  key={episode.id} name={episode.name} air_date={episode.air_date}  episode={episode.episode} character={episode.character}></AntCard>

                ))}
            </div>

            <>
    <h1>Totodile</h1>
    
  
          <img className="avatar"
      src="http://pm1.narvii.com/6699/327ae45dad527361f7524f22560f48848c668191_00.jpg"
      
      alt="Pikachu" />
          <ul>
             <li>Totodile N.º 0158</li>
             <li>Totodile tiene cuerpo pequeño, pero fuertes mandíbulas.</li>
             <li>A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.</li>    
          </ul>  
      
</>
        </>
    );
};

