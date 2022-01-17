import { useContext } from "react";
import { Dropdown, DropdownProps, Search } from "semantic-ui-react";
import { IDropdownData } from "../../../../constants";
import { Context } from "../../../../context";

interface ISelectsSectionProps {
  data: IDropdownData[];
}

const SelectsSection: React.FC<ISelectsSectionProps> = ({ data }) => {
  const { dropdownValues, onChange: setDropdownValues } = useContext(Context);

  const handleHierarchicalChange = (
    e: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps,
    dropdownData: IDropdownData[]
  ) => {
    const options = dropdownData
      .map((i) => i.options)
      .filter((i) => i)
      .flat();
    const filtered =
      options?.filter((i: any) => {
        if (typeof data.value !== "object") return i.id === data.value;
        if (data.value.includes(i.id)) return i;
        return false;
      }) ?? [];
    const study = filtered.map((i) => i?.studyId).filter((i) => i);
    const run = filtered.map((i) => i?.runId).filter((i) => i);
    setDropdownValues((prev: any) => {
      const payload = {
        ...prev,
        study: study.length ? study : prev.study,
        run: run.length ? run : prev.run,
        [data.name]:
          typeof data.value === "object" ? [...data.value] : data.value,
      };
      if (!payload.study.length) {
        payload.study = options
          .filter((i) => i?.id.includes("study"))
          .map((i) => i?.id);
        payload.run = options
          .filter((i) => i?.id.includes("run"))
          .map((i) => i?.id);
      }
      return payload;
    });
  };

  return (
    <>
      {data.map((v, i) => {
        if (i === 0) {
          return (
            <Search style={{ marginBottom: "16px", display: "flex" }} key={i} />
          );
        }
        return (
          <Dropdown
            clearable
            fluid
            search
            selection
            multiple={v.isMultipleSelect}
            placeholder={v.placeholder}
            style={{ marginBottom: "16px" }}
            options={v.options?.map((i) => ({
              value: i.id,
              text: i.label,
              label: undefined,
            }))}
            name={v.keyName}
            value={dropdownValues[v.keyName]}
            onChange={(e, d) => handleHierarchicalChange(e, d, data)}
            key={i}
          />
        );
      })}
    </>
  );
};

export default SelectsSection;
