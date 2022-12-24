
import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled, makeStyles } from '@mui/styles';
const Input = styled('input')({
  display: 'none',
});
export default function AddProduct(props) {
  const [userid, setUserId] = useState('')
  const [username, setUserName] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [icon, setIcon] = useState({ bytes: '', myfilename: '' })
  var dispatch = useDispatch()
  var navigate = useNavigate()
  const handleClick = () => {
    const body = { userid: userid, username: username, address: address, mobile: mobile, tempicon: icon }
    console.log(body)
    dispatch({ type: 'ADD_USER', payload: [userid, body] })


  }
  const handleShow = () => {
    navigate("/displayuser")
  }

  const handleIcon = (event) => {
    setIcon({ bytes: event.target.files[0], myfilename: URL.createObjectURL(event.target.files[0]) })
  }


  return (
    <div style={{ padding: 20, margin: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="User Id" variant="outlined" onChange={(e) => setUserId(e.target.value)} />
        </Grid>

        <Grid item xs={12}>
          <TextField label="User Name" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Address" variant="outlined" onChange={(e) => setAddress(e.target.value)} />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Mobile" variant="outlined" onChange={(e) => setMobile(e.target.value)} />
        </Grid>

        <Grid item xs={12} >
          <label htmlFor="contained-button-file">
            <Input onChange={handleIcon} accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span" >
              Upload
            </Button>
          </label>
        </Grid>


        <Grid item xs={12}>
          <Button onClick={handleClick}>Add In List</Button>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleShow}>Display Users</Button>
        </Grid>

      </Grid>
    </div>
  )
}