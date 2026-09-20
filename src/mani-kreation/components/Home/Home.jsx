import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLink,
  FaThLarge,
  FaLayerGroup,
  FaBoxOpen,
  FaSuitcaseRolling,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import { getFeatured, FEATURES } from "../../data/products.js";
import { BUSINESS, whatsappLink } from "../../data/business.js";
import "./Home.css";

const iconMap = {
  hook: <FaLink />,
  mesh: <FaThLarge />,
  zip: <FaLayerGroup />,
  structure: <FaBoxOpen />,
  side: <FaSuitcaseRolling />,
  portable: <FaCheck />,
};

export default function Home() {
  const products = getFeatured();

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">{BUSINESS.tagline}</span>
            <h1 className="hero__title">
              Make room
              <br />
              <span className="hero__accent">for what matters.</span>
            </h1>
            <p className="hero__lead">{BUSINESS.intro}</p>
            <div className="hero__cta">
              {/* <Link to="/shop" className="btn btn-primary">
                Shop the collection <FaArrowRight />
              </Link> */}
              <a
                className="btn btn-ghost"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> Chat with us
              </a>
            </div>
            <div className="hero__stats">
              <div>
                <strong>5</strong>
                <span>Product views</span>
              </div>
              <div>
                <strong>15 in</strong>
                <span>Organized living</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Foldable design</span>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__glow" />
            <img src="/ProductImage/IMG_3451.jpeg" alt="Hoomora foldable storage box with lid open" />
            <div className="hero__chip">
              <FaLink />
              <div>
                <strong>Easy-access lid</strong>
                <span>Open, sort and store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" id="collection">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The collection</span>
            <h2>Simple storage, beautifully sorted</h2>
            <p>
              Organizers designed to make wardrobes, shelves and daily routines
              feel lighter.
            </p>
          </div>
          <div className="home__grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features">
        <div className="container features__inner">
          <div className="features__media">
            <img src="/ProductImage/IMG_3453.jpeg" alt="Hoomora storage box folded flat" />
          </div>
          <div className="features__copy">
            <span className="eyebrow">Why you'll love it</span>
            <h2>Every detail, considered</h2>
            <p className="features__lead">
              From the lift-up lid to the fold-flat construction, Hoomora is built
              to make storing effortless and finding things a joy.
            </p>
            <div className="features__grid">
              {FEATURES.map((f) => (
                <div className="feature" key={f.title}>
                  <span className="feature__icon">{iconMap[f.icon]}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      {/* CTA banner */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready for a calmer home?</h2>
          <p>Message us on WhatsApp for pricing, bulk orders and delivery across India.</p>
          <a
            className="btn btn-dark"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Order on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
