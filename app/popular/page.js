'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSelection/CardsListSelection"
export default function Popular (){
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    return(
        <main className={"main-inner"}>
        {popularGames ? (
            <CardsListSection id='popular' title="Популярное" data={popularGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
} 