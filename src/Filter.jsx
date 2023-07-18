import React from "react";

import FilterBtn from "./FilterBtn";

function Filter(props) {
  function tagChanger(tag) {
    props.tagChanger(tag);
  }

  return (
    <div className="flex justify-evenly items-center bg-bgDark2 text-white h-14 m-auto w-[30%]">
      {props.filterData.map((currFilterData) => {
        return (
          <FilterBtn
            key={currFilterData.id}
            title={currFilterData.title}
            tag={props.tag}
            tagChanger={tagChanger}
          />
        );
      })}
    </div>
  );
}

export default Filter;
