import { useParams } from "react-router-dom";
import "../Styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../redux/state";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";
import ListingCard from "../component/ListingCard";
import Navbar from "../component/Navbar";

const SearchPage = () => {
    const [loading, setLoading] = useState(true)
    const { search } = useParams()
    const listings = useSelector((state) => state.listings)
  
    const dispatch = useDispatch()
  
    const getSearchListings = async () => {
      try {
        const response = await fetch(`http://localhost:3002/properties/search/${search}`, {
          method: "GET"
        })
  
        const data = await response.json()
        dispatch(setListings({ listings: data }))
        setLoading(false)
      } catch (err) {
        console.log("Fetch Search List failed!", err.message)
      }
    }
  
    useEffect(() => {
      getSearchListings()
    }, [search])
    
    return loading ? <Loader /> : (
      <>
        <Navbar />
        <h1 className="title-list">{search}</h1>
        <div className="list">
          {listings?.map(
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
  }
  
  export default SearchPage