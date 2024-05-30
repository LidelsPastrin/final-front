'use client';
import { Banner } from "./components/Banner/Banner"
import { Promo } from "./components/Promo/Promo"
import { CardsListSection } from "./components/CardsListSelection/CardsListSelection";

import { Preloader } from "@/app/components/Preloader/Preloader";
import { endpoints } from "./api/config";
import { useGetDataByCategory} from "./api/api-hooks";

export default function Home() {

  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");
  return (
    (popularGames && newGames) ? (
        <main className="main">
          <Banner/>
          <CardsListSection id="new" title="Новинки" data={popularGames} type='slider'/>
          <CardsListSection id="popular" title="Популярные" data={newGames} type='slider' />
          <Promo/>
        </main>
        ):(
          <Preloader/>
        ) 
    )
} 