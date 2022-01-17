import React, { useRef, useState } from "react";
import {
  Button,
  Grid,
  Input,
  InputOnChangeData,
  Modal,
} from "semantic-ui-react";

interface ITimeDropdownData {
  title: string;
}

const timeDropdownData: ITimeDropdownData[] = [
  {
    title: "Start",
  },
  {
    title: "End",
  },
];

const ExplorerPageModal = () => {
  const [value, setValue] = useState<{ [x: string]: any }>({
    [timeDropdownData[0].title]: 0,
    [timeDropdownData[1].title]: 0,
  });
  const error = useRef<boolean>(false);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    v: InputOnChangeData
  ) => {
    if (+v.value < 0) return;
    setValue((prev) => {
      return { ...prev, [v.name]: v.value };
    });
  };

  return (
    <Modal trigger={<Button>Limit Time Scale</Button>}>
      <Modal.Header>Limit Time Scale</Modal.Header>
      <Modal.Content>
        <Grid>
          {timeDropdownData.map((i, idx) => {
            return (
              <div key={idx}>
                <p>{i.title}</p>
                <Input
                  type="number"
                  error={
                    value["Start"] > value["End"] && i.title === "End"
                      ? (error.current = true)
                      : (error.current = false)
                  }
                  name={i.title}
                  value={value[i.title]}
                  onChange={changeHandler}
                />
              </div>
            );
          })}
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button positive disabled={error.current}>
          Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ExplorerPageModal;
