import { Button, Dropdown, Grid, Header, Table } from "semantic-ui-react";
import { dropdownData } from "../../constants";
import SelectsSection from "../DataExplorer/components/selects-section/SelectsSection";
import s from "./Export.module.scss";

interface IExportSelectSectionButtons {
  title: string;
  onClick?: () => void;
}

interface ITableData {
  title: string;
  values: string[];
}

interface IFrquencyDropdown {
  label: string;
  value: string;
}

const frequencyDropdownValues: IFrquencyDropdown[] = [
  {
    label: "Leave cells empty",
    value: "Leave cells empty",
  },
  {
    label: "First orderhold",
    value: "First orderhold",
  },
  {
    label: "Zero orederhold",
    value: "Zero orderhold",
  },
  {
    label: "Backward average",
    value: "Backward average",
  },
  {
    label: "Forward average",
    value: "Forward average",
  },
];

const btnData: IExportSelectSectionButtons[] = [
  {
    title: "Add to export",
  },
  {
    title: "Remove from export",
  },
  {
    title: "Show preview",
  },
];

const tableData: ITableData[] = [
  {
    title: "Study",
    values: ["St1", "St1", "St1", "St1", "St2"],
  },
  {
    title: "Run",
    values: ["Run4", "Run7", "Run8", "Run9", "Run10"],
  },
  {
    title: "Variable",
    values: ["Viability", "Viability", "Viability", "Viability", "Glucose"],
  },
  {
    title: "Unit",
    values: ["%", "%", "%", "%", "ml"],
  },
  {
    title: "Start date",
    values: [],
  },
  {
    title: "End date",
    values: [],
  },
];

const tableValuesMaxLength = Math.max(
  ...tableData.map((i) => {
    return i.values.length;
  })
);

const tableValues: string[][] = [];

for (let j = 0; j < tableData.length; j++) {
  let arr: string[] = [];
  for (let i = 0; i <= tableValuesMaxLength; i++) {
    arr.push(tableData[i].values[j]);
  }
  tableValues.push(arr);
}

export const Export = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <SelectsSection data={dropdownData} />
          {btnData.map((i, idx) => {
            return <Button content={i.title} key={idx} />;
          })}
          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                {tableData.map((v, idx) => {
                  return (
                    <Table.HeaderCell key={idx}>{v.title}</Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tableValues.map((i, idx) => (
                <Table.Row key={idx}>
                  {i.map((v, index) => (
                    <Table.Cell key={index}>{v}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column width={11}>
          <Grid.Row className={s.Export_leftSectionHeader}>
            <div>
              <Header as="h2">Preview</Header>
            </div>
            <div className={s.Export_leftSectionHeader_leftSection}>
              <Header as="h3">Sampling frequency</Header>
              <Dropdown
                clearable
                search
                selection
                options={frequencyDropdownValues}
                value={frequencyDropdownValues[0].value}
              />
              <Button content="Export" />
            </div>
          </Grid.Row>
          <Table>
            <Table.Header>
              <Table.Row>
                {new Array(20).fill({ title: "" }).map((v, idx) => {
                  return (
                    <Table.HeaderCell key={idx}>{v.title}</Table.HeaderCell>
                  );
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {new Array(21).fill([...new Array(20).fill("")]).map((i, idx) => (
                <Table.Row key={idx}>
                  {i.map((v: any, index: number) => (
                    <Table.Cell key={index}>{v}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
