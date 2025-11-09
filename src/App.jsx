import React, { useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Small_banner from "./components/Small_Banner";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={setQuery} />
      <main>
        <Banner />
        <Small_banner/>
        <Categories />
        
        <section className="max-w-6xl mx-auto p-4">
          <h2 className="text-xl font-semibold mb-3">Popular products</h2>
          <ProductGrid query={query} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
