import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class List extends Component {
    render() {
      return (
        <div className="List">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Reason for visit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Pena</td>
                    <td>Coding madness</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>John</td>
                    <td>Pena</td>
                    <td>Building medical website</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>John</td>
                    <td>Pena</td>
                    <td>Might lose vision.</td>
                    </tr>
                </tbody>
            </Table>
        </div>
      )
    }
  }

export default List;