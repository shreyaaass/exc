import React from "react";
import "./Landing.css";
import Button from "../../shared/Button";

const Landing = (props) => (
  <div className="Landing">
    <div className="Landing__banner">
      <h1 className="Landing__banner__heading">
        Custom <br /> Meal Planning <br /> made easy
      </h1>
    </div>
    <div className="Landing__data">
      <div className="Landing__data__content">
        <p>
          Plan your meals for the entire week based on desired calorie intake
          and other personal preferences. Get suggestions for a wide variety of
          recipes based on what's in your food inventory. Buy the groceries on
          the go and get them delivered to your doorstep.
        </p>
        <Button
          type="accent"
          link={true}
          path="/survey"
          className="Landing__data__button"
        >
          Let's find that meal plan
        </Button>
      </div>
    </div>
  </div>
);

export default Landing;
