import React, { Component } from 'react'
import DataTable, { } from 'react-data-table-component'
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button/Button"
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'

class User extends Component {
    componentDidMount() {
        this.props.onFetchAllUsers()
    }
    render() {
        let userTable = (
            <div className="User">
                <Card>
                    <Button>Add New User</Button>
                    <DataTable                        
                        title="Users"
                        columns={this.props.tableColumns}
                        data={this.props.users}
                        defaultSortFieldId={1}
                        sortIcon={<SortIcon />}
                        pagination
                        selectableRows
                    />
                </Card>
            </div>
        )
        return (
            <div>
                {userTable}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    tableColumns: state.user.columns,
    users: state.user.userList
})
const mapDispatchToProps = dispatch => ({
    onFetchAllUsers: () => dispatch(actions.fetchAllUsers()),

})

export default connect(mapStateToProps, mapDispatchToProps)(User)