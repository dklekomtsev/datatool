import { Tab } from "semantic-ui-react";
import { DataExplorer } from "./components/DataExplorer/DataExplorer";
import { Export } from "./components/Export/Export";

const tabs = [
  {
    menuItem: "Data explorer",
    render: () => (
      <Tab.Pane>
        <DataExplorer />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Export",
    render: () => (
      <Tab.Pane>
        <Export />
      </Tab.Pane>
    ),
  },
];
export const Main = () => {
  return <Tab panes={tabs} />;
};
