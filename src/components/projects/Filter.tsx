import React from "react";
import FilterInfo from "./filter/FilterInfo";
import FilterMenu from "./filter/FilterMenu";

interface FilterProps {
  language: string;
  selected: string;
  active: string;
  changeFilter: (e: React.MouseEvent) => void;
  previewFilter: (e: React.MouseEvent) => void;
}

const Filter = (props: FilterProps) => (
  <div className="filter">
    <FilterInfo active={props.active} language={props.language} />
    <FilterMenu
      selected={props.selected}
      change={props.changeFilter}
      preview={props.previewFilter}
      language={props.language}
    />
  </div>
);

export default Filter;
