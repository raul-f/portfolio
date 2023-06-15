interface ScrollBtnProps {
  update: () => void;
}

const ScrollBtn = (props: ScrollBtnProps) => (
  <button type="button" className="scroll-btn" onClick={props.update}>
    <i className="fas fa-arrow-down" />
  </button>
);

export default ScrollBtn;
