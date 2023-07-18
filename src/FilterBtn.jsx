import React from "react";

function FilterBtn(props) {
  function handleClick() {
    props.tagChanger(props.title);
  }

  return (
    <button
      className={
        props.title === props.tag
          ? "bg-bgDark px-2 py-1 rounded border-white border-[2px]"
          : "bg-bgDark px-2 py-1 rounded "
      }
      onClick={handleClick}
    >
      {props.title}
    </button>
  );
}

export default FilterBtn;
