import { Button, Grid } from "semantic-ui-react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import ExplorerPageModal from "../../../modal/components/ExplorerPageModal";
import SelectsSection from "./components/selects-section/SelectsSection";
import { dropdownData } from "../../constants";

export const DataExplorer = () => {
  return (
    <>
      <Grid style={{ height: "100%" }}>
        <Grid.Row style={{ minHeight: "calc(100vh - 79px)" }}>
          <Grid.Column width={4}>
            <SelectsSection data={dropdownData} />
            <Button content="Add to export" style={{ display: "flex" }} />
          </Grid.Column>
          <Grid.Column width={12}>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart>
                <XAxis type="number" dataKey={"Time"} />
                <YAxis />
                <Line />
                <Line />
              </LineChart>
            </ResponsiveContainer>
          </Grid.Column>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <ExplorerPageModal />
          </div>
        </Grid.Row>
      </Grid>
    </>
  );
};
