import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import classes from "./CourseInput.module.css";

//this file uses 2 components in it, which is also fine in this case.
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     background-color: rgb(247, 153, 153);
//     border-color: red;
//   }

//   &.invalid label {
//     color: red;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      //following line is added to make sure when you start typing, the sarmon
      //background color disappears
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${
          !isValid ? classes.invalid : ""
        }`}
      >
        <label>Courses Goals</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add a Goal</Button>
    </form>

    //alternate way of returning this component, when we use styled components.
    // <form onSubmit={formSubmitHandler}>
    //   <FormControl className={!isValid && "invalid"}>
    //     <label>Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </FormControl>
    //   <Button type="submit">Add Goal</Button>
    // </form>
  );
};

export default CourseInput;
