export interface IDropdownData {
  placeholder: string;
  keyName: string;
  isMultipleSelect: boolean;
  options?: {
    id: string;
    label: string;
    tagId: string;
    studyId?: string;
    runId?: string;
  }[];
}

export const dropdownData: IDropdownData[] = [
  {
    placeholder: "Add tag",
    keyName: "tag",
    isMultipleSelect: true,
  },
  {
    placeholder: "Select study",
    keyName: "study",
    options: [
      {
        id: "study_value_id",
        label: "study value label",
        tagId: "study_tag",
      },
      {
        id: "study_value_id2",
        label: "study value label2",
        tagId: "study_tag2",
      },
    ],
    isMultipleSelect: true,
  },
  {
    placeholder: "Select run",
    keyName: "run",
    options: [
      {
        id: "run_value_id",
        label: "run value label",
        tagId: "run_tag",
        studyId: "study_value_id",
      },
      {
        id: "run_value_id2",
        label: "run value label2",
        tagId: "run_tag2",
        studyId: "study_value_id2",
      },
    ],
    isMultipleSelect: true,
  },
  {
    placeholder: "Select variable",
    keyName: "variable",
    options: [
      {
        id: "var_value_id",
        label: "variable value label",
        tagId: "var_tag",
        studyId: "study_value_id",
        runId: "run_value_id",
      },
      {
        id: "var_value_id2",
        label: "variable value label2",
        tagId: "var_tag2",
        studyId: "study_value_id2",
        runId: "run_value_id2",
      },
    ],
    isMultipleSelect: false,
  },
];
