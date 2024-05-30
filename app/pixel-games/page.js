'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSelection/CardsListSelection"
export default function pixel (){
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return(
        <main className={"main-inner"}>
        {pixelGames ? (
                <CardsListSection id='pixel' title="Пиксельные" data={pixelGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}