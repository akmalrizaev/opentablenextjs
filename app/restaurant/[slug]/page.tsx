import Description from './components/Description';

import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';

export default function RestaurantDetails() {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */}
        {/* TITLE */}
        <Title />
        {/* TITLE */}
        {/* RATING */}
        <Rating />
        {/* RATING */}
        {/* DESCRIPTION */}
        <Description />
        {/* DESCRIPTION */}
        {/* IMAGES */}
        <Images />
        {/* IMAGES */}
        {/* REVIEWS */}
        <Reviews />
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{' '}
      {/* RESERVATION
    CARD PORTION */}
    </>
  );
}
