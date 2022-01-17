import { useState } from "react";
import { Tab } from "semantic-ui-react";
import { DataExplorer } from "./components/DataExplorer/DataExplorer";
import { Export } from "./components/Export/Export";
import { dropdownData } from "./constants";
import { Context } from "./context";

const tabs = [
  {
    menuItem: "Data explorer",
    render: () => (
      <Tab.Pane style={{ minHeight: "calc(100vh - 43px)", height: "100%" }}>
        <DataExplorer />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Export",
    render: () => (
      <Tab.Pane style={{ minHeight: "calc(100vh - 43px)", height: "100%" }}>
        <Export />
      </Tab.Pane>
    ),
  },
];
export const Main = () => {
  const [dropdownValues, setDropdownValues] = useState<{ [x: string]: any }>(
    dropdownData.reduce(
      (acc, i) => ({
        [i.keyName]: i.isMultipleSelect
          ? [i.options?.[0].id]
          : i.options?.[0].id,
        ...acc,
      }),
      {}
    )
  );

  return (
    <Context.Provider value={{ dropdownValues, onChange: setDropdownValues }}>
      <Tab panes={tabs} />
    </Context.Provider>
  );
};
