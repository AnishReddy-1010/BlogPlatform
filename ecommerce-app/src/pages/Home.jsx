import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import ProductCard from "../components/ProductCard";
import API from "../services/api";

function Home() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts =
    async () => {
      try {
        const res =
          await API.get(
            "/products"
          );

        setProducts(
          res.data
        );

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const filteredProducts =
    products.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div>

      <Navbar />

      <section className="hero-section">

        <div className="hero-content">

          <h1>
            Welcome To ShopEase
          </h1>

          <p>
            Discover Amazing
            Deals On Electronics,
            Fashion, Home &
            More.
          </p>

          <button
            className="shop-now-btn"
          >
            Explore Products
          </button>

        </div>

      </section>

      <CategoryMenu />

      <section className="search-section">

        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </section>

      {loading ? (

        <h2
          style={{
            textAlign:
              "center",
            marginTop:
              "40px",
          }}
        >
          Loading Products...
        </h2>

      ) : (

        <div className="products-container">

          {filteredProducts
            .length > 0 ? (

            filteredProducts.map(
              (
                product
              ) => (
                <ProductCard
                  key={
                    product._id
                  }
                  product={
                    product
                  }
                />
              )
            )

          ) : (

            <h2 className="no-products">
              No Products Found
            </h2>

          )}

        </div>

      )}

    </div>
  );
}

export default Home;