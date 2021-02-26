// import { createPortal } from "react-dom"

const Button = ({ color, textColor, text, onClick }) => {
   return (
      <button
         onClick={onClick}
         style={{
            backgroundColor: color,
            color: textColor,
         }}
         className="button"
      >
         {text}
      </button>
   );
};

export default Button;
