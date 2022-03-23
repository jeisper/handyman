import { Button, Flex, useToast } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [data, setData] = useState(null);

  const toast = useToast();
  const nagivate = useNavigate();

  const signUserOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setCurrentUser(null);
      setProfileData(null);
    });
  };

  return (
    <Flex>
      <Button
        mt="6"
        p="6"
        bg="blue.400"
        w="40%"
        fontWeight="bold"
        onClick={signUserOut}
      >
        Sign Out
      </Button>
    </Flex>
  );
}

export default Profile;
