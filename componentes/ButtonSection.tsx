import "@/componentes/ButtonSection.css";
import { geistSans } from "@/app/layout";

const ButtonSection = () => {
  return (
    <div className="button-container">
      <button className={`cart-button ${geistSans.className} `}>
        <i className="cart-icon"></i>
        Mas informacion
      </button>
      <button className={`cart-button ${geistSans.className} `}>
        <i className="cart-icon"></i>
        Ahora no
      </button>
    </div>
  );
};

export default ButtonSection;