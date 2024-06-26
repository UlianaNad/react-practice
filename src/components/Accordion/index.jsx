import React, { useState } from "react";
import data from "./data";

//single selection

//multiple selection

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(copyMultiple)
  };

  const handleClickButton = () =>{
    setEnableMultiSelection(!enableMultiSelection)
    setSelected(null)
    setMultiple([])
  }
  return (
    <div className="container mx-auto mt-3">
      <button
        onClick={handleClickButton}
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {enableMultiSelection === false
          ? "Activate multi selection"
          : "Enable multi selection"}
      </button>
      <div className="accordion container mx-auto pt-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="item mb-4 rounded  bg-orange-50 p-2"
              key={dataItem.id}
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                  
                }
                className="title flex justify-between  p-3 font-medium"
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="flex p-3 bg-white rounded">
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Data not found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
