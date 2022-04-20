import { Flex } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import { db } from "../../firebase";
import ProfileData from "./ProfileData";
import Skills from "./Skills";
import Summary from "./Summary";
import bg from "../../Assets/images/handyback2.jpg";
import { addDoc } from "firebase/firestore";

const defaultData = {
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
    area: "",
  },
  summary: "",

  skills: [
    // {
    //   title: "",
    //   desc: "",
    // },
  ],
};

function Form() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState(defaultData);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("User signed in with id: ", user.uid);
      } else {
        console.log("User is not signed in ");
      }
    });
  }, []);

  // const saveChange = async () => {
  //   console.log("User test: ", currentUser);
  //   try {
  //     await addDoc(doc(db, "handyman-collection", formData.googleID + ""), {
  //       ...formData,
  //     });
  //     console.log("Data sent to database");
  //   } catch (e) {
  //     console.log("error: ", e);
  //   }
  // };

  const saveChange = async () => {
    try {
      console.log(formData);
      await setDoc(
        doc(db, "handyman-collection", currentUser.uid + ""),
        formData,
        {
          merge: true,
        }
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
    // case 1:
    //   currentContent = (
    //     <ProfilePicture
    //       formData={formData}
    //       updateFormData={setFormData}
    //       goNext={goNext}
    //       goBack={goBack}
    //     />
    //   );
    //   break;

    case 1:
      currentContent = (
        <Skills
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
          saveChange={saveChange}
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
      <Flex
        w="100%"
        minH="100vh"
        flexWrap="wrap"
        flexDir="column"
        bgImage={bg}
        bgRepeat="no-repeat"
        bgSize="100%"
      >
        <Flex w="100%" justify="center">
          {currentContent}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Form;
