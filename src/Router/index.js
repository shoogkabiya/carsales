import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//screens imports
import Signin from "../screens/Signin/Signin";
import Signup from "../screens/Signup/Signup";
import PageCars from "../screens/PageCars";
import UploadForm from "../screens/UploadCars/UploadForm";
import PaymentDetails from "../screens/PaymentDetails/index";
import CarsDetails from "../screens/CarsDetails";
import CardDetails from "../screens/CardDetails";
import PayPalDetails from "../screens/PayPalDetails";

//components imports
import HeadSection from "../components/HeadSection/index";

const Routing = () => {
  return (
    <div className="Page">
      <Router>
        <HeadSection />
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/UploadForm">
            <UploadForm />
          </Route>
          <Route path="/Cars">
            <PageCars />
          </Route>
          <Route path="/paymentdetails">
            <PaymentDetails />
          </Route>
          <Route path="/carsdetails">
            <CarsDetails />
          </Route>
          <Route path="/carddetails">
            <CardDetails />
          </Route>
          <Route path="/PayPalDetails">
            <PayPalDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
