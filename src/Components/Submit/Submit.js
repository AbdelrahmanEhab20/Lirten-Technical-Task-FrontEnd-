import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Select from "@mui/material/Select";
import "./Submit.css";

const MySwal = withReactContent(Swal);

export default function Submit() {
  // const navigate = useNavigate();
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
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
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
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
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
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tittle: "",
    city: "cairo",
    country: "Egypt",
  });
  const [formValuesErrors, setFormValuesErrors] = useState({
    firstError: null,
    lastError: null,
    emailError: null,
    tittleError: null,
  });
  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "firstname":
        setFormValues({
          ...formValues,
          firstname: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          firstError:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;

      case "lastname":
        setFormValues({
          ...formValues,
          lastname: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          lastError:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;

      case "email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          emailError:
            event.target.value.length === 0 ? "This field is required" : null,
        });
        break;

      case "tittle":
        setFormValues({
          ...formValues,
          tittle: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          tittleError:
            event.target.value.length === 0 ? "This field is required" : null,
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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !formValuesErrors.firstError &&
      !formValuesErrors.lastError &&
      !formValuesErrors.emailError &&
      !formValuesErrors.tittleError
    ) {
      axios
        .post("http://localhost:8000/profiles/createprofile", formValues)
        .then((response) => {
          MySwal.fire(`Profile Added Successfully`).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/");
            }
          });
        })
        .catch((err) => {
          MySwal.fire(`Can't Add This Profile , Enter All The Date Correct`);
        });
    }
  };

  return (
    <>
      <h1 className="text-center mt-5 p-2 Heading-Submit"> Submit Profile</h1>
      <div className="d-flex justify-content-center box-Group-Style">
        <Box className="d-flex justify-content-center">
          <div className="m-2 p-2">
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                First Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
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
            {formValuesErrors.firstError && (
              <div id="usernameHelp" className="form-text text-danger">
                {formValuesErrors.firstError}
              </div>
            )}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Last Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
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
            {formValuesErrors.lastError && (
              <div id="usernameHelp" className="form-text text-danger">
                {formValuesErrors.lastError}
              </div>
            )}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
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
            {formValuesErrors.emailError && (
              <div id="usernameHelp" className="form-text text-danger">
                {formValuesErrors.emailError}
              </div>
            )}
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Job Tittle
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                name="tittle"
                value={formValues.tittle}
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
            {formValuesErrors.tittleError && (
              <div id="usernameHelp" className="form-text text-danger">
                {formValuesErrors.tittleError}
              </div>
            )}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">States</InputLabel>
              <Select
                native
                defaultValue=""
                name="city"
                value={formValues.city}
                onChange={(e) => handleFormChange(e)}
                id="grouped-native-select"
                label="Grouping"
              >
                {States.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-native-select">Country</InputLabel>
              <Select
                native
                name="country"
                value={formValues.country}
                onChange={(e) => handleFormChange(e)}
                defaultValue=""
                id="grouped-native-select"
                label="Grouping"
              >
                {Countries.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Select>
            </FormControl>

            <button
              onClick={(e) => handleSubmitForm(e)}
              className="m-5 p-3 New-Btn"
              disabled={
                formValuesErrors.firstError ||
                formValuesErrors.lastError ||
                formValuesErrors.emailError ||
                formValuesErrors.tittleError ||
                (formValues.firstname ||
                  formValues.lastname ||
                  formValues.email ||
                  formValues.tittle) === " "
              }
            >
              Submit Profile
            </button>
          </div>
        </Box>
      </div>
    </>
  );
}
