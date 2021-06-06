import React, { FC, useState, useContext } from "react";
import styled from "styled-components";
import Stepper, { Step } from "./components/Stepper";
import Input from "./components/Input";
import Button from "./components/Button";
import RadioButton from "./components/RadioButton";
import ProgressBar from "./components/ProgressBar";
import { Store } from "./context";

const Wrapper = styled.div`
  width: 600px;
  min-height: 300px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 0 auto;
  z-index: 99;
  background-color: white;
  position: relative;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 94%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StepHeader = styled.div`
  border-bottom: 1px solid #eee;
  font-weight: 400;
  color: #565656;
  padding: 0 1rem;
`;

const App: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { state, dispatch } = useContext(Store);

  const { firstname, lastname, email, phone, salary } = state;

  const radioButtonChangeHandler = (value) => {
    dispatch({
      type: "UPDATE_SALARY",
      payload: value,
    });
  };

  const onNextClickHandler = () => {
    setCurrentStep(currentStep + 1);
  };
  const onPrevClicKHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Wrapper>
      {/* header stepper */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stepper current={currentStep}>
          <Step>
            <StepHeader>
              <h1>Basic Information</h1>
              <p>Enter your first and name</p>
            </StepHeader>
          </Step>
          <Step>
            <StepHeader>
              <h1>Email Address</h1>
              <p>Enter your contact information</p>
            </StepHeader>
          </Step>
          <Step>-
            <StepHeader>
              <h1>Salary Indication</h1>
              <p>Select from one of these options</p>
            </StepHeader>
          </Step>
          <Step>
            <StepHeader>
              <h1>Confirmation</h1>
              <p>Please confirm you entrys</p>
            </StepHeader>
          </Step>
        </Stepper>
        <div style={{ padding: "1rem" }}>
          <ProgressBar
            progress={currentStep * 33}
            size={80}
            strokeWidth={8}
            circleOneStroke="#eee"
            circleTwoStroke={"#38d738"}
          />
        </div>
      </div>
      <Stepper current={currentStep}>
        <Step>
          <FlexContainer>
            <Input
              placeholder="First Name"
              value={firstname}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIRST_NAME",
                  payload: e.target.value,
                })
              }
            />
            <Input
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => {
                dispatch({
                  type: "UPDATE_LAST_NAME",
                  payload: e.target.value,
                });
              }}
            />
          </FlexContainer>
        </Step>
        <Step>
          <Input
            type="email"
            label="Email Address"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_EMAIL",
                payload: e.target.value,
              });
            }}
          />
          <Input
            type="number"
            label="phone number"
            value={phone}
            onChange={(e) => {
              dispatch({
                type: "UPDATE_PHONE",
                payload: e.target.value,
              });
            }}
          />
        </Step>
        <Step>
          <div
            style={{
              padding: "1rem",
              height: "260px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <RadioButton
              onChange={() => radioButtonChangeHandler("0- 1.000")}
              onClick={() => radioButtonChangeHandler("0- 1.000")}
              id="1"
              name="all"
              checked={salary === "0- 1.000"}
            >
              0- 1.000
            </RadioButton>
            <RadioButton
              onChange={() => radioButtonChangeHandler("1.000 - 2.000")}
              onClick={() => radioButtonChangeHandler("1.000 - 2.000")}
              id="2"
              name="all"
              checked={salary == "1.000 - 2.000"}
            >
              1.000 - 2.000
            </RadioButton>
            <RadioButton
              onChange={(e) => radioButtonChangeHandler("2.000 - 3.000")}
              onClick={() => radioButtonChangeHandler("2.000 - 3.000")}
              id="3"
              name="all"
              checked={salary === "2.000 - 3.000"}
            >
              2.000 - 3.000
            </RadioButton>
            <RadioButton
              id="4"
              onChange={() => radioButtonChangeHandler("3.000 - 4.000")}
              onClick={() => radioButtonChangeHandler("3.000 - 4.000")}
              name="all"
              checked={salary === "3.000 - 4.000"}
            >
              3.000 - 4.000
            </RadioButton>
            <RadioButton
              id="5"
              onChange={() => radioButtonChangeHandler("4.000 - 5.000")}
              onClick={() => radioButtonChangeHandler("4.000 - 5.000")}
              name="all"
              checked={salary === "4.000 - 5.000"}
            >
              4.000 - 5.000
            </RadioButton>
          </div>
        </Step>
        <Step>
          <div style={{padding: '1rem'}}>
            <p>
              <strong>First Name: </strong> {firstname}{" "}
            </p>
            <p>
              <strong>Last Name: </strong> {lastname}{" "}
            </p>
            <p>
              <strong>Email Address: </strong> {email}{" "}
            </p>
            <p>
              <strong>Phone Number: </strong> {phone}{" "}
            </p>
            <p>
              <strong>Salary: </strong> {salary}{" "}
            </p>
          </div>
        </Step>
      </Stepper>
      <FlexContainer style={{ padding: "1rem", width: "95%" }}>
        <Button disabled={currentStep == 0} onClick={onPrevClicKHandler}>
          Prev
        </Button>
        <Button disabled={currentStep == 3} onClick={onNextClickHandler}>Next</Button>
      </FlexContainer>
    </Wrapper>
  );
};

export default App;
