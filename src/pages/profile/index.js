import { Button, Flex, useToast } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import bg from "../../Assets/images/handyback2.jpg";

function Profile() {
  //   const [currentUser, setCurrentUser] = useState(null);
  //   const [profileData, setProfileData] = useState(null);
  //   const [data, setData] = useState(null);

  //   const toast = useToast();
  const navigate = useNavigate();

  const signUserOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      //   setCurrentUser(null);
      //   setProfileData(null);
    });
  };

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
        <Button
          mt="6"
          p="6"
          bg="blue.400"
          w="40%"
          fontWeight="bold"
          onClick={() => {
            navigate("/");
            signUserOut();
          }}
        >
          Sign Out
        </Button>
      </Flex>
    </Flex>
  );
}

export default Profile;
