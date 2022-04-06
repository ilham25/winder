import { Listbox } from "@headlessui/react";
import React, { useMemo } from "react";

type Data = {
  value: any;
  display: string;
};

type Props = {
  onChange: any;
  value: string;
  dataSource: Data[];
};

const Select = ({ onChange, value, dataSource = [] }: Props) => {
  const displayValue: Data = useMemo(() => {
    return dataSource.find((item) => item.value === value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
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
        <p className="text-xs">{displayValue.display}</p>
      </Listbox.Button>
      <Listbox.Options className="dropdown-container text-slate-700 flex flex-col ">
        {dataSource.map((data) => (
          <Listbox.Option key={data.value} value={data.value}>
            {({ selected, active }) => (
              <button
                className={`bg-white flex p-2 w-full   ${
                  selected ? "bg-blue-100" : "hover:bg-blue-50"
                } ${active ? "bg-blue-50" : ""}`}
              >
                <p className="text-xs">{data.display}</p>
              </button>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Select;
