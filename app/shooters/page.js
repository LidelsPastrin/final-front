'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSelection/CardsListSelection"
export default function shooter (){
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
    return(
        <main className={"main-inner"}>
        {shooterGames ? (
            <CardsListSection id='shooter' title="Шутеры" data={shooterGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
}