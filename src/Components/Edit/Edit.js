import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePersonPin } from "react-icons/md";
import Select from "@mui/material/Select";
import "./Edit.css";

const MySwal = withReactContent(Swal);

export default function Edit() {
  const [States] = useState([
    "Cairo",
    "Giza",
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Ismailia",
    "Kafr El Sheikh",
    "Matruh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez",
  ]);
  const [Countries] = useState([
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Belgium",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]);
  const params = useParams();

  const [Profiledetails, setDetails] = useState({});

  console.log(Profiledetails);
  const [formValues, setFormValues] = useState({});

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "firstname":
        setFormValues({
          ...formValues,
          firstname: event.target.value,
        });
        break;

      case "lastname":
        setFormValues({
          ...formValues,
          lastname: event.target.value,
        });

        break;

      case "email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        break;

      case "tittle":
        setFormValues({
          ...formValues,
          tittle: event.target.value,
        });

        break;

      case "city":
        setFormValues({
          ...formValues,
          city: event.target.value,
        });
        break;

      case "country":
        setFormValues({
          ...formValues,
          country: event.target.value,
        });
        break;
      default:
        break;
    }
  };

  //Get Specific Profile
  useEffect(() => {
    axios
      .get(`http://localhost:8000/profiles/${params.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Update Profile
  const handleUpdateForm = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/profiles/update/${params.id}`, formValues)
      .then((response) => {
        MySwal.fire(`Profile Updated Successfully`).then((result) => {
          if (result.isConfirmed) {
            window.location.replace("/");
          }
        });
      })
      .catch((err) => {
        MySwal.fire(`Can't Add This Profile , Enter All The Date Correct`);
      });
  };

  //Delete Profile
  const handleDeleteForm = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/profiles/delete/${params.id}`)
      .then((response) => {
        MySwal.fire(`Profile Deleted Successfully`).then((result) => {
          if (result.isConfirmed) {
            window.location.replace("/");
          }
        });
      })
      .catch((err) => {
        MySwal.fire(`Can't Delete or find This Profile`);
      });
  };

  return (
    <>
      <h1 className="text-center mt-5 p-2 Heading-Submit"> Edit Profile</h1>
      <div className="d-flex justify-content-center box-Group-Style">
        <Box className="d-flex justify-content-center">
          <div className="m-2 p-2">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                First Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                placeholder={Profiledetails.firstname}
                name="firstname"
                value={formValues.firstname}
                onChange={(e) => handleFormChange(e)}
                startAdornment={
                  <InputAdornment position="start">
                    {" "}
                    <FaUserAlt />
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Last Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                placeholder={Profiledetails.lastname}
                name="lastname"
                value={formValues.lastname}
                onChange={(e) => handleFormChange(e)}
                startAdornment={
                  <InputAdornment position="start">
                    {" "}
                    <FaUserAlt />
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                placeholder={Profiledetails.email}
                name="email"
                value={formValues.email}
                onChange={(e) => handleFormChange(e)}
                startAdornment={
                  <InputAdornment position="start">
                    {" "}
                    <AiOutlineMail />
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Job Tittle
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                placeholder={Profiledetails.tittle}
                name="tittle"
                value={formValues.tittle}
                onChange={(e) => handleFormChange(e)}
                startAdornment={
                  <InputAdornment position="start">
                    {" "}
                    <MdOutlinePersonPin />
                  </InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">States</InputLabel>
              <Select
                name="city"
                value={formValues.city}
                onChange={(e) => handleFormChange(e)}
                native
                defaultValue=""
                id="grouped-native-select"
                label="Grouping"
              >
                {States.map((item) => (
                  <option placeholder={Profiledetails.city} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">Country</InputLabel>
              <Select
                name="country"
                value={formValues.country}
                onChange={(e) => handleFormChange(e)}
                native
                defaultValue=""
                id="grouped-native-select"
                label="Grouping"
              >
                {Countries.map((item) => (
                  <option placeholder={Profiledetails.country} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>

            <div className="d-flex">
              <FormControl sx={{ m: 1 }}>
                <button
                  onClick={(e) => handleUpdateForm(e)}
                  className=" p-3 New-Btn"
                >
                  Edit Profile
                </button>
              </FormControl>

              <FormControl sx={{ m: 1 }}>
                <button
                  onClick={(e) => handleDeleteForm(e)}
                  className="p-3 New-Btn-Delete"
                >
                  Delete Profile
                </button>
              </FormControl>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
