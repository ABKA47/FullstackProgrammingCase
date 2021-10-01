import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataTable from 'react-data-table-component'
import Box from '@material-ui/core/Box/Box';
import Card from "@material-ui/core/Card";
import Label from '@material-ui/core/FormLabel/FormLabel'
import Button from '@material-ui/core/Button/Button';
import Notification from '../../../components/UI/Notification/notification';
import * as actions from '../../../store/actions/index'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

class DeleteUserModal extends Component {

    formSubmit = (event) => {
        event.preventDefault()
        this.props.onDeleteUser(this.props.idFromUser)
    }

    render() {
        return (
            <div>
                <Box sx={style} >
                    <Card>
                        <DataTable
                            title="Users"
                            columns={this.props.tableColumns}
                            data={this.props.user}
                        />
                    </Card>
                    <Button style={{ margin: '10px' }} color="secondary" variant="contained" onClick={(event) => this.formSubmit(event)}>Delete User</Button>
                </Box>
                {
                    this.props.response === 'OK' ? [<Notification message="User deleted successfully" severity='success' />, window.location.reload()] : ''
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user.user,
    idFromUser: state.user.idFromUser,
    tableColumns: state.user.columns,
    response: state.user.response
})
const mapDispatchToProps = dispatch => ({
    onFetchAllUsers: () => dispatch(actions.fetchAllUsers()),
    onDeleteUser: (id) => dispatch(actions.deleteUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserModal)