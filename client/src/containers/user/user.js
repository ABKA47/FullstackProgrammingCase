import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button/Button"
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Modal from '../../components/UI/Modal/Modal'
import UserModal from './addUserModal/AddUserModal';

class User extends Component {
    componentDidMount() {
        this.props.onFetchAllUsers()
    }
    render() {
        let userTable = (
            <div className="User">
                <Card>
                    <Button onClick={() => this.props.onOpenUserModal()}>Add New User</Button>

                    <DataTable
                        title="Users"
                        columns={this.props.tableColumns}
                        data={this.props.users}
                        defaultSortFieldId={1}
                        sortIcon={<SortIcon />}
                        pagination                     
                    />



                </Card>
            </div>
        )
        return (
            <div>
                {userTable}
                <Modal show={this.props.editAble} close={this.props.onCloseModal}>
                    <UserModal tableColumns={this.props.tableColumns} user={this.props.users}/>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    tableColumns: state.user.columns,
    users: state.user.userList,
    user: state.user.user,
    editAble: state.user.editAble
})
const mapDispatchToProps = dispatch => ({
    onFetchAllUsers: () => dispatch(actions.fetchAllUsers()),
    onEditUserModal: (id) => dispatch(actions.editUserModal(id)),
    onOpenUserModal: () => dispatch(actions.openUserModal()),
    onCloseModal: () => dispatch(actions.closeUserModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(User)