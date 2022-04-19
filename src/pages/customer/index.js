import { Button, Flex, Heading, Select } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import bg from "../../Assets/images/handyback2.jpg";
import Card from "../../components/card";
import NavBar from "../../components/navbar";
import { db } from "../../firebase";

function Customer() {
  const [handyMan, setHandyMan] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "handyman-collection")
      );
      querySnapshot.forEach((doc) => {
        const newHandyMan = [...handyMan, doc.data()];
        setHandyMan(newHandyMan);
        // setHandyMan([doc.data()]);
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    };

    getAllData().catch(console.error);

    console.log("line2: ", handyMan);
  }, []);

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
        color="white"
      >
        <Flex fontSize="5xl" justifyContent="center" mt="5vh">
          <Heading> Find your local HandyMan</Heading>
        </Flex>
        <Flex flexDir="row" fontSize="2xl" justifyContent="center" mt="5vh">
          <Flex>
            <Select placeholder="Category" variant="outline" m="5">
              <option value="">Carpenter</option>
              <option value="">Cleaner</option>
              <option value="">Electrician</option>
              <option value="">Furniture Assembler</option>
              <option value="">Gardener</option>
              <option value="">General Handyman</option>
              <option value="">Painter</option>
              <option value="">Plumber</option>
              <option value="">Removals</option>
              <option value="">Tiler</option>
            </Select>
          </Flex>
          <Flex>
            <Select placeholder="Area" variant="outline" m="5">
              <option value="">Dublin 1</option>
              <option value="">Dublin 2</option>
              <option value="">Dublin 3</option>
              <option value="">Dublin 4</option>
              <option value="">Dublin 5</option>
              <option value="">Dublin 6</option>
              <option value="">Dublin 6W</option>
              <option value="">Dublin 7</option>
              <option value="">Dublin 8</option>
              <option value="">Dublin 9</option>
              <option value="">Dublin 10</option>
              <option value="">Dublin 11</option>
              <option value="">Dublin 12</option>
              <option value="">Dublin 13</option>
              <option value="">Dublin 14</option>
              <option value="">Dublin 15</option>
              <option value="">Dublin 16</option>
              <option value="">Dublin 17</option>
              <option value="">Dublin 18</option>
              <option value="">Dublin 20</option>
              <option value="">Dublin 22</option>
              <option value="">Dublin 24</option>
              <option value="">Balbriggan</option>
              <option value="">Ballyboughal</option>
              <option value="">Blackrock</option>
              <option value="">Garristown</option>
              <option value="">Gjenageary</option>
              <option value="">Lucan</option>
              <option value="">Lusk</option>
              <option value="">Malahide</option>
              <option value="">Old Town</option>
              <option value="">Rush</option>
              <option value="">Skerries</option>
              <option value="">Swords</option>
            </Select>
          </Flex>
        </Flex>
        <Flex justifyContent="center" flexWrap="wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Customer;
