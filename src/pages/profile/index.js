import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar";
import bg from "../../Assets/images/handyback2.jpg";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";
import FormTextInputNotRequired from "../form/FormTextInput";

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [profileData, setProfileData] = useState(null);

  //   const toast = useToast();
  const navigate = useNavigate();

  const signUserOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {});
  };

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

  useEffect(() => {
    if (currentUser !== null) {
      const getUser = async () => {
        const docRef = doc(db, "handyman-collection", currentUser.uid + "");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
        setProfileData(docSnap.data());
      };
      getUser();
    }
  }, [currentUser]);

  console.log("The user is:", currentUser);
  console.log("The data is:", profileData);

  const deleteProfileData = async () => {
    try {
      await deleteDoc(doc(db, "handyman-collection", currentUser.uid + ""));
      console.log("data was deleted");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const saveChange = async () => {
    try {
      console.log(profileData);
      await setDoc(
        doc(db, "handyman-collection", currentUser.uid + ""),

        profileData,

        {
          merge: true,
        }
      );
      console.log("data was updated");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return currentUser && profileData ? (
    <Flex w="100%" flexDir="column">
      <NavBar />
      <Flex
        w="100%"
        minH="100vh"
        flexWrap="wrap"
        flexDir="column"
        bgImage={bg}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex w="100%" justify="center" mt="10vh">
          <Flex
            bg="white"
            justify="center"
            w="50%"
            p="10"
            mb="10"
            direction="column"
            boxShadow="dark-lg"
            borderRadius="10px"
          >
            <Flex justifyContent="center">
              <Image
                w="10vw"
                h="10vh"
                borderRadius="50%"
                src={currentUser.photoURL}
              />
            </Flex>
            <Flex>
              <FormTextInputNotRequired
                label="First Name"
                placeholder="First Name"
                value={
                  profileData && profileData.name ? profileData.name.fname : ""
                }
                onChange={(text) => {
                  const copy = { ...profileData };
                  copy.name.fname = text;
                  setProfileData(copy);
                }}
              />
            </Flex>
            <Flex>
              <FormTextInputNotRequired
                label="Last Name"
                placeholder="Last Name"
                value={
                  profileData && profileData.name ? profileData.name.lname : ""
                }
                onChange={(text) => {
                  const copy = { ...profileData };
                  copy.name.lname = text;
                  setProfileData(copy);
                }}
              />
            </Flex>
            <Flex>
              <FormTextInputNotRequired
                label="Email"
                placeholder="Email"
                value={
                  profileData && profileData.contact
                    ? profileData.contact.email
                    : ""
                }
                onChange={(text) => {
                  const copy = { ...profileData };
                  copy.contact.email = text;
                  setProfileData(copy);
                }}
              />
            </Flex>
            <Flex>
              <FormTextInputNotRequired
                label="Phone Number"
                placeholder="Phone Number"
                value={
                  profileData && profileData.contact
                    ? profileData.contact.phone
                    : ""
                }
                onChange={(text) => {
                  const copy = { ...profileData };
                  copy.contact.phone = text;
                  setProfileData(copy);
                }}
              />
            </Flex>
            <Flex justifyContent="row">
              <Flex>
                <FormTextInputNotRequired
                  label="Area"
                  placeholder="Area"
                  value={
                    profileData && profileData.location
                      ? profileData.location.area
                      : ""
                  }
                  onChange={(text) => {
                    const copy = { ...profileData };
                    copy.location.area = text;
                    setProfileData(copy);
                  }}
                />
              </Flex>
              <Flex>
                <FormTextInputNotRequired
                  label="City"
                  placeholder="City"
                  value={
                    profileData && profileData.location
                      ? profileData.location.city
                      : ""
                  }
                  onChange={(text) => {
                    const copy = { ...profileData };
                    copy.location.city = text;
                    setProfileData(copy);
                  }}
                />
              </Flex>
            </Flex>
            <Flex justifyContent="row">
              <Flex>
                <FormTextInputNotRequired
                  label="Category"
                  placeholder="Category"
                  value={
                    profileData && profileData.skills
                      ? profileData.skills[0].title
                      : ""
                  }
                  onChange={(text) => {
                    const copy = { ...profileData };
                    copy.skills[0].title = text;
                    setProfileData(copy);
                  }}
                />
              </Flex>
              <Flex>
                <FormTextInputNotRequired
                  label="Years of Experience"
                  placeholder="Years of Experience"
                  value={
                    profileData && profileData.skills
                      ? profileData.skills[0].desc
                      : ""
                  }
                  onChange={(text) => {
                    const copy = { ...profileData };
                    copy.skills[0].desc = text;
                    setProfileData(copy);
                  }}
                />
              </Flex>
            </Flex>
            <Flex>
              <FormControl p="1vw" id="first-name" isRequired>
                <FormLabel fontWeight="bold">Summary</FormLabel>
                <Textarea
                  h="30vh"
                  placeholder="Summary"
                  value={
                    profileData && profileData.summary
                      ? profileData.summary
                      : ""
                  }
                  onChange={(e) => {
                    const copy = { ...profileData };
                    copy.summary = e.target.value;
                    setProfileData(copy);
                  }}
                />
              </FormControl>
            </Flex>
            <Flex>
              <Button
                mt="6"
                mx="3"
                p="6"
                bg="blue.400"
                w="25%"
                fontWeight="bold"
                onClick={() => {
                  deleteProfileData();
                  navigate("/");
                }}
              >
                Delete profile
              </Button>
              <Spacer />
              <Button
                mt="6"
                mx="3"
                p="6"
                bg="blue.400"
                w="25%"
                fontWeight="bold"
                onClick={() => {
                  navigate("/");
                  signUserOut();
                }}
              >
                Sign Out
              </Button>
              <Spacer />
              <Button
                mt="6"
                mx="3"
                p="6"
                bg="blue.400"
                w="25%"
                fontWeight="bold"
                onClick={() => {
                  saveChange();
                }}
              >
                Update Profile
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    "Loading"
  );
}

export default Profile;
