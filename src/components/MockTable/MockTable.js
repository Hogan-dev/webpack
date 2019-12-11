import React, { Component } from "react";
import { Table } from 'antd';
import Axios from "axios";
import '../../mock/index';
const { Column } = Table;
class MockTable extends Component {
    constructor(props) {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        Axios.get('/api/data', {dataType: 'json'}).then(res => {
            this.setState({
                list: res.data.list
            })
        })
    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.list} >
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    <Column title="cName" dataIndex="cName" key="cName"/>
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />    
                </Table>;
            </div>
        )
    }
}

export default MockTable;