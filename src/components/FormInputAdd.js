import React, { useState } from "react";
import searchIcon from "../images/icon-search.svg";
import data from "../data/data.json"

export const FormInputAdd = ({ onSearchResult }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    const result = data.find(item => item.word.toLowerCase() === searchQuery.toLowerCase());

    if (result) {
      onSearchResult(result);
    } else {
      onSearchResult({ word: searchQuery, definition: "" });
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
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
