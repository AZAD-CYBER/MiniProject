import { Box, Grid, Paper } from "@material-ui/core";
import React from "react";
import {
  renderButton,
  renderInputText,
  renderSelect,
  renderText,
  handleNext,
} from "../Common/displayComponents";

export default function Step1({ state, handleOnChange, handleNext }) {
  return (
    <Paper
      component={Box}
      p={2}
      style={{ marginBottom: "10px", border: "2px solid black" }}
    >
      <Box mt={6} mb={6}>
        {renderText({ label: "Please Fill Personal Details", variant: "h6" })}
      </Box>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "First name",
            name: "firstName",
            state,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Last name",
            name: "lastName",
            state,
            handleOnChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12}>
          {renderSelect({
            label: "Gender",
            name: "gender",
            state,
            options: [
              { key: "male", value: "male" },
              { key: "female", value: "female" },
              { key: "other", value: "other" },
            ],
            handleOnChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Phone",
            name: "phone",
            state,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Email",
            name: "email",
            state,
            handleOnChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="flex-end">
        <Box p={2}>
          {renderButton({ label: "next", handleOnClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
}
