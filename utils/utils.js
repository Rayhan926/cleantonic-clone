import cx from "classnames";

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderRadius: 0,
    overflow: 'visible'
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};

export default cx;