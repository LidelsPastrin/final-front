'use client';
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader"; 
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSelection/CardsListSelection"
export default function TDS (){
    const TDSGames = useGetDataByCategory(endpoints.games, "TDS");
    return(
        <main className={"main-inner"}>
        {TDSGames ? (
            <CardsListSection id='TDS' title="TDS" data={TDSGames}/>
            ) : (
                <Preloader />
            )}
        </main>
    )
} 