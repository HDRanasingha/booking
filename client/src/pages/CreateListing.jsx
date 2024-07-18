import React from 'react';
import "../Styles/CreateListing.scss"
import Navbar from "../component/Navbar"
import { categories, types, facilities } from "../data";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import variables from "../Styles/variables.scss";
const CreateListing = () => {
  return (
    <>
    <Navbar />
    <div className="create_listing">
      <h1>Publish Your Place</h1>
      <form>
        <div className="create_listing_step1">
          <h2>Step 1: Tell us about your place</h2>
          <hr />
          <h3>Which of these categories best describe your place?</h3>
          <div className="category-list">
           
            {categories.map((item, index) => (
              <div className="category" key={index}>
                <div className="category_icon">{item.icon}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <h3>What type of place will guests have?</h3>
          <div className="type-list">
            {types?.map((item, index) => (
              <div className="type" key={index}>
                {" "}
                {/* Added key and corrected structure */}
                <div className="type_text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="type_icon">{item.index}</div>
              </div>
            ))}
          </div>
          <h3>where is your place located</h3>
          <div className="full">
            <div className="location">
              <p>Street Address</p>
              <input
                type="text"
                placeholder="Street Address"
                name="streetAddress"
                required
              />
            </div>
          </div>
          <div className="half">
            <div className="location">
              <p>Apartment,Suite,etc(if applicable)</p>
              <input
                type="text"
                placeholder="Apt,Suite,etc.(if applicable)"
                name="aptSuite"
                required
              />
            </div>
            <div className="location">
              <p>City</p>
              <input type="text" placeholder="City" name="city" required />
            </div>
          </div>
          <div className="half">
            <div className="location">
              <p>Apartment,Suite,etc(if applicable)</p>
              <input
                type="text"
                placeholder="Province"
                name="province"
                required
              />
            </div>
            <div className="location">
              <p>City</p>
              <input
                type="text"
                placeholder="Country"
                name="country"
                required
              />
            </div>
          </div>
          <h3>Share some basic about your place</h3>
          <div className="basics">
            <p>Guests</p>
            <div className="basic_count"></div>
            <RemoveCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
            <p>
              1
            </p>
            <AddCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
          </div>
          
          <div className="basics">
            <p>Bedrooms</p>
            <div className="basic_count"></div>
            <RemoveCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
            <p>
              1
            </p>
            <AddCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
          </div>
          <div className="basics">
            <p>Beds</p>
            <div className="basic_count"></div>
            <RemoveCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
            <p>
              1
            </p>
            <AddCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
          </div>
          <div className="basics">
            <p>Bathrooms</p>
            <div className="basic_count"></div>
            <RemoveCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
            <p>
              1
            </p>
            <AddCircleOutline
              sx={{
                fontSize: "25px",
                cursor: "pointer",
                "&:hover": { color: variables.pinkred },
              }}
            />
          </div>
        </div>
        <div className="create_listing_step2">
          <h2>Step 2:Make your place stand out</h2>
          <hr/>

          <h3>Tell guests what your place has to offer</h3>
          <div className="facilities">
            {facilities.map((item, index) => (
              <div className="facility" key={index}>
                <div className="facility_icon">{item.icon}</div>
                <p>{item.name}</p>
              </div>
            ))}
            </div>

        </div>
      </form>
    </div>
  </>
);
};

export default CreateListing;
