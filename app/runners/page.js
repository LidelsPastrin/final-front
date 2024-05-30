'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSelection/CardsListSelection"
export default function runner (){
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return(
        <main className={"main-inner"}>
        {runnerGames ? (
            <CardsListSection id='runner' title="Раннеры" data={runnerGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
} 