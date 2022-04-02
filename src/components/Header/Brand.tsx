import React from "react";

import BrandLogo from "assets/images/brand.svg";

type Props = {};

const Brand = (props: Props) => {
  return (
    <div className="flex flex-grow bg-white border-b-4 border-slate-100 h-14 w-14 p-1">
      <img
        src={BrandLogo}
        alt="brand logo"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default Brand;
