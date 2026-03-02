// src/app/page.js

import Slider from "@/components/HomePage/Slider";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import { getCategories, getProductsByCategory } from "@/lib/api";

export default async function Home() {
      const categories = await getCategories();
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const products = await getProductsByCategory(randomCategory);

      const featuredProducts = products.slice(0, 4);

      return (
            <div className="">
                  <Slider />
                  <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
                        <FeaturedProducts products={featuredProducts} category={randomCategory} />
                  </div>
            </div>
      );
}
