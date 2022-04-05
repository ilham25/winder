import { Listbox } from "@headlessui/react";
import { LayoutTypes } from "constants/generalTool";
import React from "react";

type Props = {
  onChange: any;
  value: any;
};

const LayoutSelect = ({ onChange, value }: Props) => {
  return (
    <Listbox
      as="div"
      className={`relative w-full h-8 rounded border border-slate-200 text-slate-700 hover:bg-slate-50 mt-1`}
      value={value}
      onChange={onChange}
    >
      <Listbox.Button
        className={`w-full flex items-center px-2 h-full  outline-blue-200 `}
      >
        <p className="text-xs capitalize">{value.toLowerCase()}</p>
      </Listbox.Button>
      <Listbox.Options className="dropdown-container text-slate-700 flex flex-col ">
        {LayoutTypes.map((type) => (
          <Listbox.Option key={type} value={type}>
            {({ selected, active }) => (
              <button
                className={`bg-white flex p-2 w-full   ${
                  selected ? "bg-blue-100" : "hover:bg-blue-50"
                } ${active ? "bg-blue-50" : ""}`}
              >
                <p className="text-xs capitalize">{type.toLowerCase()}</p>
              </button>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default LayoutSelect;
