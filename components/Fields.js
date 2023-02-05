import React from 'react'
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';


const Fields = ({name,email,index}) => {
  return (
    <div  className="data-fields">
          <h4>{name}</h4>
          <h4>{email}</h4>
          <Stack>
          <Button variant="contained" color="error"><CancelIcon/></Button>
          </Stack>
        </div>
  )
}

export default Fields