import { useEffect, useState } from "react";
import "../Styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";
import ListingCard from "../component/ListingCard";
import { setPropertyList } from "../redux/state";


const PropertyList = () => {
  const [loading, setLoading] = useState(true)
  const user = useSelector((state) => state.user)
  const propertyList = user?.propertyList;
  console.log(user)

  const dispatch = useDispatch()
  const getPropertyList = async () => {
    try {
      const response = await fetch(`http://localhost:3002/users/${user._id}/properties`, {
        method: "GET"
      })
      const data = await response.json()
      console.log(data)
      dispatch(setPropertyList(data))
      setLoading(false)
    } catch (err) {
      console.log("Fetch all properties failed", err.message)
    }
  }

  useEffect(() => {
    getPropertyList()
  }, [])

  return loading ? <Loader /> : (
    <>
      <Navbar />
      <h1 className="title-list">Your Property List</h1>
      <div className="list">
        {propertyList?.map(
          ({
            _id,
            creator,
            listingPhotoPaths,
            city,
            province,
            country,
            category,
            type,
            price,
            booking = false,
          }) => (
            <ListingCard
              listingId={_id}
              creator={creator}
              listingPhotoPaths={listingPhotoPaths}
              city={city}
              province={province}
              country={country}
              category={category}
              type={type}
              price={price}
              booking={booking}
            />
          )
        )}
      </div>

     
    </>
  );
};

export default PropertyList;