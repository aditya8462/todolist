import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { styled, makeStyles } from '@mui/styles';
import MaterialTable from "@material-table/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";


const Input = styled('input')({
  display: 'none',
});
export default function DisplayProduct(props) {
  var users = useSelector(state => state.user)
  var list = Object.values(users)
  var dispatch = useDispatch()
  var navigate = useNavigate()
  const [refresh, setRefresh] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [userid, setUserId] = useState('')
  const [username, setUserName] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [icon, setIcon] = useState({ bytes: '', myfilename: '' })

  const handleEdit = () => {
    const body = { userid: userid, username: username, address: address, mobile: mobile, tempicon: icon }
    console.log(body)
    dispatch({ type: 'ADD_USER', payload: [userid, body] })
    setRefresh(!refresh)
  }
  const handleShow = () => {
    navigate("/adduser")
  }
  const handleIcon = (event) => {
    setIcon({ bytes: event.target.files[0], myfilename: URL.createObjectURL(event.target.files[0]) })
  }

  const handleEditDialog = (rowData) => {
    setOpen(true);
    setUserId(rowData.userid)
    setUserName(rowData.username)
    setAddress(rowData.address)
    setMobile(rowData.mobile)
    setIcon(rowData.tempicon)
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDelete = (rowData) => {
    dispatch({ type: 'DEL_USER', payload: [rowData.userid] })
    setRefresh(!refresh)
  }

  function EditDialog() {

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Edit User
          </DialogTitle>
          <DialogContent>
            <div style={{ padding: 20, margin: 20 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField value={userid} label="User Id" variant="outlined" onChange={(e) => setUserId(e.target.value)} />
                </Grid>

                <Grid item xs={12}>
                  <TextField value={username} label="User Name" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
                </Grid>

                <Grid item xs={12}>
                  <TextField value={address} label="Address" variant="outlined" onChange={(e) => setAddress(e.target.value)} />
                </Grid>

                <Grid item xs={12}>
                  <TextField value={mobile} label="Mobile" variant="outlined" onChange={(e) => setMobile(e.target.value)} />
                </Grid>


                <Grid item xs={6} style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <label htmlFor="contained-button-file">
                    <Input onChange={(e) => { handleIcon(e) }} accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" fullWidth>
                      Upload
                    </Button>
                  </label>
                </Grid>

                <Grid item xs={12}>
                  <Button onClick={handleEdit}>Edit User</Button>
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>

          </DialogActions>
        </Dialog>
        <Grid item xs={12}>
          <Button onClick={handleShow}>Add Users</Button>
        </Grid>
      </div>

    );
  }




  function SimpleAction() {
    return (
      <MaterialTable
        title="User Details"
        columns={[
          { title: 'User Id', field: 'userid' },
          { title: 'User Name', field: 'username' },
          { title: 'Address', field: 'address' },
          { title: 'Mobile', field: 'mobile' },
          { title: 'Icon', field: 'tempicon', render: (rowData) => <img src={rowData.tempicon.myfilename} width="50" /> },
        ]}
        data={list}
        actions={[
          {
            icon: 'delete',
            tooltip: 'delete',
            onClick: (event, rowData) => handleDelete(rowData)
          },
          {
            icon: 'edit',
            tooltip: 'edit',
            onClick: (event, rowData) => handleEditDialog(rowData)
          }
        ]}
      />
    )
  }
  return (
    <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {SimpleAction()}
      {EditDialog()}
    </div>
  )
}