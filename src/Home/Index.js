import React,{useState} from 'react'
import { Grid,TextField,Button } from "@mui/material";
import Item from "@mui/material/Grid";
import axios from 'axios';



export default function Index(){

    const [name,setName]=useState("");
    const [response,setResponse]=useState();


    function SaveClient(){

        axios({
            method: 'post',
            url: 'http://localhost:60735/weatherforecast/Client',
            data: name,
            headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
            setResponse(response.data);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <Grid container spacing={2}>
             <Grid item xs={12} style={{textAlign: "center"}}>
                <Item> <label >Client Details</label>  </Item>  
            </Grid>
            <Grid item xs={3} style={{marginTop:"30px"}}>
                <Item> <label>Name</label></Item>
            </Grid>
            <Grid item xs={3}>
                <Item><TextField value={name} onChange={(e)=>setName(e.target.value)} id="name"/></Item>
            </Grid>
            <Grid item xs={6} style={{textAlign: "left"}}>
                <Item><Button  onClick={SaveClient} variant="contained">Save</Button></Item>
            </Grid>
            {response?<label xs={12} style={{textAlign: "center"}}> {response}</label>:null}
        </Grid>
    )
}