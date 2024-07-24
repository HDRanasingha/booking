import { useEffect, useState } from "react";
import "../Styles/List.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import Loader from "../component/Loader";
import Navbar from "../component/Navbar";



const TripList = () => {
const[loading, setLoading] = useState(true);
const userId = useSelector((state)=> state.user._id)
const tripList = useSelector((state) => state.user.tripList);

const dispatch = useDispatch()


const getTripList = async () => {
  try{
    const response = await fetch(
      `http://localhost:3002/users/${userId}/trips`,
      {
        method: "GET",
      }
    );

const data = await response.json()
dispatch(setTripList(data))
setLoading(false)

  }catch(err) {
    console.log("Fetch Trip List failed",err.message)

  }
  
}
useEffect(() =>{
  getTripList()
},[])

  return loading ? <Loader/> :(
    <>
  <Navbar/>
    <h1 className="title-list">Your Trip List</h1>
    <div className="list">
      
    </div>
 </> 
 )
}

export default TripList
