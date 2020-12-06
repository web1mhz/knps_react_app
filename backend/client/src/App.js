import { render } from "@testing-library/react";
import "./App.css";
import Customer from "./components/Customer";
import Movies from "./components/Movies";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Component } from "react";
import React from "react";



const Styles = theme => (
  {
    root: {
      width:'100%',
      marginTop: 60,
      overflowX:"auto"
    },
    table:{
      minWidth: 1080
    }
  }
)

  
class App extends React.Component {

  state = {

    customers:""

  }


  componentDidMount(){

    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err=> console.log(err));
  }

  callApi = async()=>{
    const response = await fetch("/customers");
    const body = response.json();
    return body;
  }
  
  render(){

    const {classes} = this.props;
    return (
      <Paper className={classes.root}>      
          <Table className = {classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>일련번호</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>사진</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => {
                return (
                  <Customer
                    key={c.id}                    
                    id={c.id}
                    name={c.name}
                    birthday={c.birthday}
                    job={c.job}
                    img={c.img}
                  />
                );
              }): ""}
            </TableBody>
          </Table>
              
      </Paper>
    );

  }s 
  
}

export default withStyles(Styles)(App);
