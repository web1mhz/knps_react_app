import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Customer extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>
          <img src={this.props.img}></img>
        </TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.job} </TableCell>
      </TableRow>
    );
  }
}

export default Customer;
