import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
// import countryList from 'react-select-country-list'
import { renderButton, renderInputText, renderSelect, renderText } from '../Common/displayComponents'

export default function Step3({state, handleOnChange, handleNext, handlePrev }) {
  return (
    <Paper component={Box} p={2}>
         <Box mt={6} mb={6}>
                            {renderText({ label: "More Information", variant:"h6" })}
                            </Box>
<Grid container spacing={2} style={{marginBottom:"10px"}}>
<Grid item xs={12} sm={6}>
    {renderInputText({
        label: "Business Name",
        name: "businesstName",
        state,
        handleOnChange,
    })}
</Grid>
<Grid item xs={12} sm={6}>
    {renderInputText({
        label: "Business Type",
        name: "businessType",
        state,
        handleOnChange,
    })}
</Grid>
</Grid>

<Grid container spacing={2} style={{marginBottom:"10px"}}>
<Grid item xs={12}>
    {renderSelect({
        label: "Country",
        name: "country",
        state,
        options: [
            {key:"India", value:"India"},
            {key:"United State", value:"United State"},
            {key:"other", value:"other"},
        ],
        
    })}
</Grid>
</Grid>
<Grid container spacing={2} style={{marginBottom:"10px"}}>
<Grid item xs={12} sm={6}>
{renderInputText({
        label: "State",
        name: "state",
        state,
        handleOnChange,
    })}
</Grid>
<Grid item xs={12} sm={6}>
{renderInputText({
        label: "Website url",
        name: "websiteUrl",
        state,
        handleOnChange,
    })}
</Grid>
</Grid>

<Grid container spacing={2} justify="flex-end">
<Box p={2}>
 {renderButton({
     label:"Back", 
     handleOnClick: handlePrev, 
     color:"default",
      })}
 </Box>
 <Box p={2}>
 {renderButton({label:"finish", handleOnClick: handleNext })}
 </Box>
</Grid>

    </Paper>
  );
}