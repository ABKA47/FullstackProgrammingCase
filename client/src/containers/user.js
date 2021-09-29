import React, { Component } from 'react'
import DataTable, { } from 'react-data-table-component'
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button/Button"
import { connect } from 'react-redux'

class User extends Component {
    componentDidMount() {

    }
    render() {
        let userTable = (
            <div className="User">
                <Card>
                    <DataTable
                        title="Users"
                        columns={this.props.tableColumns}
                        defaultSortFieldId={1}
                        sortIcon={<SortIcon />}
                        pagination
                        selectableRows
                    />
                    <Button>Button</Button>
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
    tableColumns: state.user.columns
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps)(User)