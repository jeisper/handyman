import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import Experience from "./Experience";
import ProfileData from "./ProfileData";
import ProfilePicture from "./ProfilePicture";
import Skills from "./Skills";
import Summary from "./Summary";

const defaultData = {
  googleID: "get from firebase",
  profileImg: "",
  name: {
    fname: "",
    lname: "",
  },
  contact: {
    phone: "",
    email: "",
  },
  location: {
    city: "",
    country: "",
    area: "",
  },
  summary: "",

  skills: [
    {
      title: "",
      list: ["", "", ""],
    },
  ],
  experience: {
    years: "",
  },
};

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState(defaultData);

  const navigate = Navigate();

  let currentContent = <Flex>Loading</Flex>;
  const goNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep === 0) {
      navigate("/");
    }
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 0:
      currentContent = (
        <ProfileData
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 1:
      currentContent = (
        <ProfilePicture
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 2:
      currentContent = (
        <Summary
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 3:
      currentContent = (
        <Skills
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 4:
      currentContent = (
        <Experience
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    default:
      break;
  }

  return (
    <Flex w="100%" flexDir="column">
      <NavBar />
      <Flex w="100%" justify="center">
        {currentContent}
      </Flex>
    </Flex>
  );
}

export default Form;
