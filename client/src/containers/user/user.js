import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button/Button"
import TextBox from '@material-ui/core/TextField/TextField'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Modal from '../../components/UI/Modal/Modal'
import AddUserModal from './addUserModal/AddUserModal';
import UpdateUserModal from './updateUserModal/updateUserModal';
import DeleteUserModal from './deleteUserModal/deleteUserModal'
import SpecificUserModal from './specificUserModal/specificUserModal'

class User extends Component {
    componentDidMount() {
        this.props.onFetchAllUsers()
    }
    render() {
        let userTable = (
            <div className="User">
                <Card>
                    <Card>
                        <Button onClick={() => this.props.onOpenUserModal()}>Add New User</Button>
                        <Card>
                            <TextBox
                                placeholder="Write User ID"
                                value={this.props.idFromUser}
                                onChange={(event) => this.props.onGetIdFromUser(event.target.value)}
                            />
                            <Button onClick={() => this.props.onSpecificUserModal()}>Specific User</Button>
                            <Button onClick={() => this.props.onOpenUpdateUserModal()}>Update User</Button>
                            <Button onClick={() => this.props.onDeleteUserModal()}>Delete User</Button>
                        </Card>



                    </Card>

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
                <Modal show={this.props.addUserEditable} close={this.props.onCloseModal}>
                    <AddUserModal />
                </Modal>
                <Modal show={this.props.updateUserEditable} close={this.props.onCloseModal}>
                    <UpdateUserModal />
                </Modal>
                <Modal show={this.props.deleteUserEditable} close={this.props.onCloseModal}>
                    <DeleteUserModal />
                </Modal>
                <Modal show={this.props.specificUserEditable} close={this.props.onCloseModal}>
                    <SpecificUserModal />
                </Modal>


            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    tableColumns: state.user.columns,
    users: state.user.userList,   
    addUserEditable: state.user.addUserEditable,
    updateUserEditable: state.user.updateUserEditable,
    deleteUserEditable: state.user.deleteUserEditable,
    specificUserEditable: state.user.specificUserEditable,
    idFromUser: state.user.idFromUser
})
const mapDispatchToProps = dispatch => ({
    onFetchAllUsers: () => dispatch(actions.fetchAllUsers()),
    onEditUserModal: (id) => dispatch(actions.editUserModal(id)),
    onOpenUserModal: () => dispatch(actions.openAddUserModal()),
    onOpenDeleteUserModal: () => dispatch(actions.openDeleteUserModal()),
    onOpenUpdateUserModal: () => dispatch(actions.openUpdateUserModal()),
    onOpenSpecificUserModal: () => dispatch(actions.openSpecificUserModal()),
    onCloseModal: () => dispatch(actions.closeUserModal()),
    onGetIdFromUser: (id) => dispatch(actions.getIdFromUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)