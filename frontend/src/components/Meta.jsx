import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={keywords} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to SIM-SHOP",
  description: "Best products for the price no on can Match",
  keywords: "electronics,buy,electronics,cheap",
};

export default Meta;
