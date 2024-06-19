import React, { useState } from "react";
import FormInputAdd from "./FormInputAdd";

export const AddVocab = () => {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchResult = (result) => {
    setSearchResult(result);
  };

  return (
    <>
      <div className="addVocabArea">
        <FormInputAdd onSearchResult={handleSearchResult} />
        {searchResult && (
          <ul className="searchResultList">
            <li className="searchResultItem">
              <p className="searchResultText">{searchResult.word}</p>
            </li>
            <li>
              <p>{searchResult.definition}</p>
            </li>
            {/* 他の情報も表示できるように拡張 */}
          </ul>
        )}
      </div>
    </>
  );
};

export default AddVocab;
