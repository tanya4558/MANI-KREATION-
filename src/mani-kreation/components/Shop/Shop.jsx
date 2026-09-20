import ProductCard from "../ProductCard/ProductCard.jsx";
import { PRODUCTS } from "../../data/products.js";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <header className="shop__hero">
        <div className="container">
          <span className="eyebrow">Shop Hoomora</span>
          <h1>Storage made simple</h1>
          <p>Foldable, stackable organizers for calmer wardrobes and shelves.</p>
        </div>
      </header>

      <div className="container section">
        <div className="shop__grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
