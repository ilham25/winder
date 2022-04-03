import React from "react";
import Profile from "assets/images/me.png";

type Props = {};

const Account = (props: Props) => {
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <p className="text-xs uppercase">Ilham Adiputra</p>
      <img
        src={Profile}
        alt="profile"
        className="h-8 w-8 object-cover rounded-full outline-hidden border-2 border-blue-400"
      />
    </div>
  );
};

export default Account;
