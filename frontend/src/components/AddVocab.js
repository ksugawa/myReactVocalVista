import React from "react";
import searchIcon from "../images/icon-search.svg";

export const AddVocab = ({ onInputChange, word, suggestions }) => {

  return (
    <>
      <div className="addVocabArea">
        <label>
          <input
            type="text"
            placeholder="単語を検索"
            value={word}
            onChange={onInputChange}
          />
          <img src={searchIcon} className="searchIcon" alt="アイコン" />
        </label>
        {suggestions.length > 0 && (
          <ul className="searchResultList">
            {suggestions.map((suggestion) => (
              <li className="searchResultItem" key={suggestion._id}>
                <p className="searchResultText">{suggestion.word}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AddVocab;
