import React, { useState } from "react";
import { List } from "../components/List";
import { AzList } from "../components/AzList"

export const MyVocab = () => {

    return(
        <>
            <div className="MyVocabArea">
                <div>
                    <List />
                    <AzList />
                </div>
            </div>
        </>
    );
};

export default MyVocab;