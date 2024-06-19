import React, { useState } from "react";
import searchIcon from "../images/icon-search.svg";

export const FormInputAdd = ({ onSearchResult }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = async () => {
  //   const apiUrl = `https://wordsapiv1.p.rapidapi.com/words/${searchQuery}`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "21210d65a1msha43ea28b86b0a5ap190e59jsn2385fb4b68f2",
  //       "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await fetch(apiUrl, options);
  //     const result = await response.json();
  //     onSearchResult(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //handleSearch();
        }}
      >
        <label>
          <input
            type="text"
            placeholder="単語を検索"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={searchIcon} className="searchIcon" alt="アイコン" />
        </label>
      </form>
    </>
  );
};

export default FormInputAdd;
