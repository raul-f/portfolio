import DisplayProject from "./display/DisplayProject";
import DisplayMenu from "./display/DisplayMenu";

interface DisplayProps {
  language: string;
  active: string;
  selected: string;
  set: string;
  changeProject: (e: React.MouseEvent) => void;
  previewProject: (e: React.MouseEvent) => void;
}

const Display = (props: DisplayProps) => (
  <div className="display">
    <DisplayProject active={props.active} language={props.language} />
    <DisplayMenu
      set={props.set}
      selected={props.selected}
      change={props.changeProject}
      preview={props.previewProject}
      language={props.language}
    />
  </div>
);

export default Display;
