import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//icons imports
import { AddIcon } from "../../icons/index";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [preview, setPreview] = useState("");
  const [version, setVersion] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [currentmileage, setCurrentmileage] = useState("");
  const [hand, setHand] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [color, setColor] = useState("");
  const [originalownership, setOriginalownership] = useState("");
  const [nexttest, setNexttest] = useState("");
  const [annuallicensingfee, setAnnuallicensingfee] = useState("");
  const [isValidVersion, setIsValidVersion] = useState(false);
  const [isValidYear, setIsValidYear] = useState(false);
  const [isValidEngine, setIsValidEngine] = useState(false);
  const [isValidcurrentmileage, setIsValidCurrentmileage] = useState(false);
  const [isValidhand, setIsValidHand] = useState(false);
  const [isValidgearbox, setIsValidGearbox] = useState(false);
  const [isValidcolor, setIsValidColor] = useState(false);
  const [isValidoriginalownership, setIsValidOriginalownership] = useState(
    false
  );
  const [isValidnexttest, setIsValidNexttest] = useState(false);
  const [
    isValidannuallicensingfee,
    setIsValidHandAnnuallicensingfee,
  ] = useState(false);
  ////
  const types = ["image/png", "image/jpeg", "image/webp"];
  const history = useHistory();
  ////
  ////validation
  const validateVersion = (event) => {
    const patternversion = /[a-ת_]/gi;
    setVersion(event.target.value);
    if (patternversion.test(event.target.value)) {
      console.log("version:", "version");
      setIsValidVersion(true);
    } else {
      setIsValidVersion(false);
    }
  };
  ////
  const validateYear = (event) => {
    const patternyear = /^\d{4}$/i;
    setYear(event.target.value);
    if (patternyear.test(event.target.value)) {
      console.log("year:", "year");
      setIsValidYear(true);
    } else {
      setIsValidYear(false);
    }
  };
  ////
  const validateEngine = (event) => {
    const patternengine = /[a-ת_\d]/gi;
    setEngine(event.target.value);
    if (patternengine.test(event.target.value)) {
      console.log("engine:", "engine");
      setIsValidEngine(true);
    } else {
      setIsValidEngine(false);
    }
  };
  ////
  const validateCurrentmileage = (event) => {
    const patterncurrentmileage = /[,\d]/gi;
    setCurrentmileage(event.target.value);
    if (patterncurrentmileage.test(event.target.value)) {
      console.log("currentmileage:", "currentmileage");
      setIsValidCurrentmileage(true);
    } else {
      setIsValidCurrentmileage(false);
    }
  };
  ////
  const validateHand = (event) => {
    const patternhand = /^\d$/gi;
    setHand(event.target.value);
    if (patternhand.test(event.target.value)) {
      console.log("hand:", "hand");
      setIsValidHand(true);
    } else {
      setIsValidHand(false);
    }
  };
  ////
  const validategearbox = (event) => {
    const patterngearbox = /[א-ת]/gi;
    setGearbox(event.target.value);
    if (patterngearbox.test(event.target.value)) {
      console.log("gearbox:", "gearbox");
      setIsValidGearbox(true);
    } else {
      setIsValidGearbox(false);
    }
  };
  ////
  const validatecolor = (event) => {
    const patterncolor = /[א-ת]/gi;
    setColor(event.target.value);
    if (patterncolor.test(event.target.value)) {
      console.log("color:", "color");
      setIsValidColor(true);
    } else {
      setIsValidColor(false);
    }
  };
  ////
  const validateoriginalownership = (event) => {
    const patternoriginalownership = /[א-ת]/gi;
    setOriginalownership(event.target.value);
    if (patternoriginalownership.test(event.target.value)) {
      console.log("originalownership:", "originalownership");
      setIsValidOriginalownership(true);
    } else {
      setIsValidOriginalownership(false);
    }
  };
  ////
  const validateNexttest = (event) => {
    const patternnexttest = /[א-ת\d]/gi;
    setNexttest(event.target.value);
    if (patternnexttest.test(event.target.value)) {
      console.log("nexttest:", "nexttest");
      setIsValidNexttest(true);
    } else {
      setIsValidNexttest(false);
    }
  };
  ////
  const validateAnnuallicensingfee = (event) => {
    const patternannuallicensingfee = /[,\d]/gi;
    setAnnuallicensingfee(event.target.value);
    if (patternannuallicensingfee.test(event.target.value)) {
      console.log("annuallicensingfee:", "annuallicensingfee");
      setIsValidHandAnnuallicensingfee(true);
    } else {
      setIsValidHandAnnuallicensingfee(false);
    }
  };
  ////
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log(selected);
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg)");
    }
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      preview &&
      isValidVersion &&
      isValidYear &&
      isValidEngine &&
      isValidcurrentmileage &&
      isValidhand &&
      isValidgearbox &&
      isValidcolor &&
      isValidoriginalownership &&
      isValidnexttest &&
      isValidannuallicensingfee
    ) {
      console.log("Correct data");
      history.push("/Profile");
    }
  };
  ////
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {preview ? (
        <img src={preview} width="150" height="100" />
      ) : (
        "no picture uppload"
      )}
      <label>
        <input
          type="file"
          onChange={changeHandler}
          style={{ display: "none" }}
          accept="image/*"
        />
        <AddIcon className="Add-icon"></AddIcon>
      </label>
      <div className="error">
        {error && <div className="errormessage">{error}</div>}
        {file && <div style={{ display: "none" }}>{file.name}</div>}
        <div className="UploadForm">
          <p className="Vehicledetails">Vehicle details</p>
          <input
            type="text"
            placeholder="Version"
            value={version}
            onChange={validateVersion}
            className="input-form"
          />

          <input
            type="text"
            placeholder="year"
            value={year}
            onChange={validateYear}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Engine"
            value={engine}
            onChange={validateEngine}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Current mileage"
            value={currentmileage}
            onChange={validateCurrentmileage}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Hand"
            value={hand}
            onChange={validateHand}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Gearbox"
            value={gearbox}
            onChange={validategearbox}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={validatecolor}
            className="input-form"
          />

          <input
            type="text"
            value={originalownership}
            placeholder="Original ownership"
            onChange={validateoriginalownership}
            className="input-form"
          />

          <input
            type="text"
            placeholder="Next Test"
            value={nexttest}
            onChange={validateNexttest}
            className="input-form"
          />

          <input
            type="text"
            placeholder=" Annual licensing fee"
            value={annuallicensingfee}
            onChange={validateAnnuallicensingfee}
            className="input-form"
          />

          <button className="AddCar" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default UploadForm;