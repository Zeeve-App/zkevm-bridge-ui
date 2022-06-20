import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

interface StylesProps {
  displayAll: boolean;
}

const useActivityStyles = createUseStyles((theme: Theme) => ({
  selectorBoxes: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  numberAllBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: ({ displayAll }: StylesProps) =>
      displayAll ? theme.palette.grey.light : theme.palette.grey.main,
    padding: [0, theme.spacing(1)],
    borderRadius: 6,
    lineHeight: `${theme.spacing(1.75)}px`,
  },
  numberPendingBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: ({ displayAll }: StylesProps) =>
      !displayAll ? theme.palette.grey.light : theme.palette.grey.main,
    padding: [0, theme.spacing(1)],
    borderRadius: 6,
    lineHeight: `${theme.spacing(1.75)}px`,
  },
  selectorBox: {
    display: "flex",
    padding: [[theme.spacing(0.75), theme.spacing(1)]],
    marginRight: theme.spacing(2),
    borderRadius: 8,
  },
  allBox: ({ displayAll }: StylesProps) =>
    displayAll
      ? {
          backgroundColor: theme.palette.white,
        }
      : {
          backgroundColor: "inherit",
          color: theme.palette.grey.dark,
          cursor: "pointer",
        },
  pendingBox: ({ displayAll }: StylesProps) =>
    !displayAll
      ? {
          backgroundColor: theme.palette.white,
        }
      : {
          backgroundColor: "inherit",
          color: theme.palette.grey.dark,
          cursor: "pointer",
        },
  status: {
    padding: [theme.spacing(0.5), theme.spacing(1)],
    lineHeight: `${theme.spacing(1.75)}px`,
  },
  emptyMessage: {
    textAlign: "center",
    lineHeight: "26px",
  },
}));

export default useActivityStyles;
