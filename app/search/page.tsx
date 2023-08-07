import Link from 'next/link';
import NavBar from '../components/NavBar';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export default function Search() {
  return (
    <>
      {/* HEADER */}
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSideBar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESAURANT CARD */}
          <RestaurantCard />
          {/* RESAURANT CARD */}
        </div>
      </div>
    </>
  );
}
