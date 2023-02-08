import {fetchRickAndMorty, PikachuCharacter} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCard from "../components/AntCard";
import styles from './character.module.css'
import Avatar from "../components/Avatar";
import AntCarousel from "../components/AntCarousel";



export const Character: React.FC = () => {
    const { data, error } = useSWR<CharacterData>(PikachuCharacter, fetchRickAndMorty, {
        suspense: false,
    });

    interface CharacterData {
        results: Array<{
            count: number;
            next: string;
            previous: null;
          
          
        }>;
    }

    return (
        <>
            <h1>Character</h1>

            <div className={styles.container}>
                {data?.results.map((character) => (
                    <AntCarousel  key={character.id} count ={character.count}  next={character.next}   previous={character.previous}    ></AntCarousel>

                ))}
            </div>
            <>
    <h1>Charmander</h1>
    
  
          <img className="avatar"
      src="https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png"
      
      alt="Pikachu" />
          <ul>
             <li>Charmander N.º 0004</li>
             <li>Prefiere las cosas calientes.</li>
             <li>Dicen que cuando llueve le sale vapor de la punta de la cola. </li>    
          </ul>  
      
</>

        </>
    );
};

