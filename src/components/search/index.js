import { Flex, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AREAS, SKILLS } from "../../utils/Constants";

function SearchFilters({ inputList, setFilteredList, setIsFilterActive }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    area: "",
  });

  useEffect(() => {
    console.log("filters", filters);
    if (inputList) {
      let newList = [];
      if (searchQuery !== "") {
        for (let i = 0; i < inputList.length; i++) {
          const item = inputList[i];
          const fname = item.name.fname.toLowerCase();
          const lname = item.name.lname.toLowerCase();
          if (
            fname.includes(searchQuery.toLowerCase()) ||
            lname.includes(searchQuery.toLowerCase())
          ) {
            newList.push(item);
          }
        }
      } else {
        newList = [...inputList];
      }
      // country
      if (filters.country !== "") {
        for (let i = newList.length - 1; i >= 0; i--) {
          const item = newList[i];
          if (!item.location.country.toUpperCase().includes(filters.country)) {
            newList.splice(i, 1);
          }
        }
      }
      // city
      if (filters.city !== "") {
        console.log("count");
        for (let i = newList.length - 1; i >= 0; i--) {
          const item = newList[i];
          if (!item.location.city.toUpperCase().includes(filters.city)) {
            newList.splice(i, 1);
          }
        }
      }
      // skill
      if (filters.skill !== "") {
        for (let i = 0; i < newList.length; i++) {
          const item = newList[i];
          let userHasSkill = false;

          for (let j = 0; j < item.skills.length; j++) {
            if (
              item.skills[j].selected &&
              item.skills[j].text.includes(filters.skill)
            ) {
              userHasSkill = true;
              break;
            }
          }
          if (!userHasSkill) {
            newList.splice(i, 1);
          }
        }
      }
      // sector
      if (filters.sector !== "") {
        for (let i = 0; i < newList.length; i++) {
          const item = newList[i];
          let userHasInterest = false;

          for (let j = 0; j < item.interests.length; j++) {
            if (
              item.interests[j].selected &&
              item.interests[j].text.includes(filters.sector)
            ) {
              userHasInterest = true;
              break;
            }
          }
          if (!userHasInterest) {
            newList.splice(i, 1);
          }
        }
      }
      setFilteredList(newList);
      setIsFilterActive(true);
    }
  }, [searchQuery, filters]);

  return (
    <Flex w="100%" my="10" flexWrap="wrap" justifyContent="space-evenly">
      <Input
        w="20vw"
        placeholder="Search for Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></Input>

      <Select
        placeholder="Country"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.country = e.target.value;
          setFilters(copy);
        }}
      ></Select>
      <Select
        placeholder="City"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.city = e.target.value;
          setFilters(copy);
        }}
      ></Select>
      <Select
        placeholder="Skills"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.skill = e.target.value;
          setFilters(copy);
        }}
      ></Select>
      <Select
        placeholder="Sector"
        w="110px"
        onChange={(e) => {
          const copy = { ...filters };
          copy.sector = e.target.value;
          setFilters(copy);
        }}
      ></Select>
    </Flex>
  );
}

export default SearchFilters;
