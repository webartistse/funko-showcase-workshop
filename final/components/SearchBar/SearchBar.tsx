import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";

export const SearchBar = ({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "5rem",
        "& > :not(style)": { m: 1, width: "50ch", fontWeight: "bold" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        id="filled-basic"
        label="Search for your Funko!"
        variant="filled"
        aria-label="Search for your Funko!"
      />

      <Typography variant="body2" color="text.primary">
        *Use this search to filter down your collection of Funko's!. To add a Funko, click the button below!
      </Typography>
    </Box>
  );
};
