import React from "react";

import BrandLogo from "assets/images/brand.svg";

type Props = {};

const Brand = (props: Props) => {
  return (
    <div className="flex flex-grow bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-500 border-b-4 border-slate-100 h-14 w-14 p-3">
      <img
        src={BrandLogo}
        alt="brand logo"
        className="h-full w-full object-scale-down"
      />
    </div>
  );
};

export default Brand;
