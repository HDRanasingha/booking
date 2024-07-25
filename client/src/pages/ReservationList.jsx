import { useEffect, useState } from "react";
import "../Styles/List.scss"
import { useDispatch, useSelector } from "react-redux";
import { setReservationList } from "../redux/state";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import ListingCard from "../component/ListingCard";

const ReservationList = () => {
    const [loading, setLoading] = useState(true);
    const userId = useSelector((state) => state.user._id);
    const reservationList = useSelector((state) => state.user.reservationList);
  
    const dispatch = useDispatch();
  
    const getReservationList = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/users/${userId}/reservations`,
          {
            method: "GET",
          }
        );
  
        const data = await response.json();
        dispatch(setReservationList(data));
        setLoading(false);
      } catch (err) {
        console.log("Fetch Reservation List failed!", err.message);
      }
    };
  
    useEffect(() => {
      getReservationList();
    }, []);
  
    return loading ? (
      <Loader />
    ) : (
      <>
        <Navbar />
        <h1 className="title-list">Your Reservation List</h1>
        <div className="list">
          {reservationList?.map(({ listingId, hostId, startDate, endDate, totalPrice, booking=true }) => (
            <ListingCard
              listingId={listingId._id}
              creator={hostId._id}
              listingPhotoPaths={listingId.listingPhotoPaths}
              city={listingId.city}
              province={listingId.province}
              country={listingId.country}
              category={listingId.category}
              startDate={startDate}
              endDate={endDate}
              totalPrice={totalPrice}
              booking={booking}
            />
          ))}
        </div>
       
      </>
    );
  };
  
  export default ReservationList;