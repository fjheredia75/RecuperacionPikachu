import {fetchRickAndMorty, rickAndMortyLocalizations} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'
import { Character } from "./Character";

interface LocalizationsData {
    results: Array<{
        id: number;
        name: string;
        type: string;
        image: string
    }>;
}

export const Localizations: React.FC = () => {
    const { data, error } = useSWR<LocalizationsData>(rickAndMortyLocalizations, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>
                {data?.results.map((localizations) => (
                    <AntCard  key={localizations.id} name={localizations.name} image={localizations.image}  description={localizations.type}></AntCard>
                ))}
            </div>
            <>
    <h1>Squirtle </h1>
    
  
          <img className="avatar"
      src="https://www.pngarts.com/files/3/Pokemon-PNG-Download-Image.png"
      
      alt="Pikachu" />
          <ul>
             <li>Squirtle N.º 0007</li>
             <li>Cuando retrae su largo cuello en el caparazón.</li>
             <li>Dispara agua a una presión increíble.</li>    
          </ul>  
      
</>

        </>
    );
};

