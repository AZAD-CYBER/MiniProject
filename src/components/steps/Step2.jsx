import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { renderButton, renderInputText, renderText } from '../Common/displayComponents'

export default function Step2({state, handleOnChange, handleNext, handlePrev }) {
  return (
    <Paper component={Box} p={2}>
         <Box mt={6} mb={6}>
                            {renderText({ label: "Add Your Bank Details", variant:"h6" })}
                            </Box>

<Grid container spacing={2} style={{marginBottom:"10px"}}>
<Grid item xs={12} sm={6}>
    {renderInputText({
        label: "Recepient Name",
        name: "recepientName",
        state,
        handleOnChange,
    })}
</Grid>
<Grid item xs={12} sm={6}>
    {renderInputText({
        label: "Account Number",
        name: "accountNumber",
        state,
        handleOnChange,
    })}
</Grid>
</Grid>

<Grid container spacing={2} style={{marginBottom:"10px"}}>
<Grid item xs={12}>
    {renderInputText({
        label: "Bank Name",
        name: "bankName",
        state,
    
        handleOnChange,
    })}
</Grid>
</Grid>
<Grid container spacing={2} style={{marginBottom:"10px"}}>
<Grid item xs={12} sm={6}>
{renderInputText({
        label: "Account Type",
        name: "accountType",
        state,
        handleOnChange,
    })}
</Grid>
<Grid item xs={12} sm={6}>
{renderInputText({
        label: "IFSC Code",
        name: "ifscCode",
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
 {renderButton({label:"next", handleOnClick: handleNext })}
 </Box>
</Grid>

    </Paper>
  );
}