import React from "react";

import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";

import iphone14 from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy New iphone 14"
        subtitle="Experience the power of the latest iphone 14 with our most Pro camera ever."
        link="product/66a2b772b009edaf80db2efa"
        image={iphone14}
      />
      <FeaturedSection />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can  add Studio Display and color-matched Magic accessories to your bag after configure your Mac mini"
        link="/product/66a2b772b009edaf80db2f02"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
