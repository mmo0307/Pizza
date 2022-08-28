import React from "react";

import { About } from "../about/about";
import { Footer } from "../footer/footer";
import { HomeBanner } from "../home-banner/homeBanner";
import { Menu } from "../menu/menu";

export const Main = () => {
  return (
    <>
      <HomeBanner />

      <About />

      <Menu />

      <Footer />
    </>
  );
}
