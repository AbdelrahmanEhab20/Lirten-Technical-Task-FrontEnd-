import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profiles.css";
import vector from "../../Images/Vector.png";
import logo from "../../Images/Card-logo.png";
import plus from "../../Images/last.png";
import { Link } from "react-router-dom";

export default function Profiles() {
  const [Profiledetails, setDetails] = useState([]);

  const Move_Function = (e) => {
    e.preventDefault();
    window.location.replace("/Submit");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/profiles`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="features-section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title Text-Color-big">
                <h2 className="subtitle">Professional Profiles</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {Profiledetails.map((profile) => (
              <div className="col-md-6 col-lg-4  d-flex">
                <div className="col-lg-12 d-flex features-item">
                  <div className="col-6 mt-5">
                    <h3 className="Text-Color-H">
                      {" "}
                      {profile.firstname + " " + profile.lastname}
                    </h3>
                    <h3 className="Text-Color-H2">{profile.tittle}</h3>
                    <img src={vector} height={"80"} alt={""} />
                  </div>
                  <div className="col-6">
                    <Link to={`/Update/${profile._id}`}>
                      {" "}
                      <img
                        className="Logo-Card"
                        src={logo}
                        width={"150"}
                        alt={""}
                      />
                    </Link>
                    <div className="col-3 m-5">
                      <h5>01116685662</h5>
                      <h5>{profile.email}</h5>
                      <h5>
                        {profile.city},{profile.country}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={(e) => Move_Function(e)} class="button button5">
          {" "}
          <img className="Logo-Card" src={plus} alt={""} />
        </button>
      </section>
    </>
  );
}
