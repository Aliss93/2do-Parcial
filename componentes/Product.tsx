import { geistSans, geistMono } from "@/app/layout";
import "@/componentes/Product.css";
import ButtonSection from "./ButtonSection";

const Product = ({product}:any) => {
  return (
    <section className="background-white ">
      <img
        src= {product.image}
        alt="imagen del producto"
      />
      <div className="detalles">
        <h1 className={`${geistSans.className} `}>{product.titulo} </h1>
        <h2 className={`${geistMono.className} font-semibold`}>
          {product.name}
        </h2>
        <p className={`${geistSans.className} `}>{product.titulo}
          Actualiza tu plan para trabajar en Dev Mde
        </p>
        <div>
          <span className={`${geistMono.className} font-semibold`}>
            Copia el codigo en el lenguaje que necesitas<br/>

          </span>
        </div>
        <ButtonSection />
      </div>
    </section>
  );
};

export default Product;