import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box/Box';
import Label from '@material-ui/core/FormLabel/FormLabel'
import Button from '@material-ui/core/Button/Button';
import Input from '../../../components/UI/Input/input';
import * as actions from '../../../store/actions/index'
import Notification from '../../../components/UI/Notification/notification';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

class UpdateUserModal extends Component {

    inputChanceHandler = (event, identifier) => {
        const updateUserObject = { ...this.props.userUpdate }
        const updateUser = { ...updateUserObject[identifier] }
        updateUser.value = event.target.value
        updateUserObject[identifier] = updateUser

        this.props.onUpdateUser(updateUserObject)
    }

    formSubmit = () => {
        const updateUserData = {}
        for (let id in this.props.userUpdate) {
            updateUserData[id] = this.props.userUpdate[id].value
        }

        let sendObject = updateUserData
        this.props.onSendUpdateUser(this.props.idFromUser, sendObject)
    }

    render() {
        let userArray = []
        for (let key in this.props.userUpdate) {
            userArray.push({
                id: key,
                config: this.props.userUpdate[key]
            })
        }
        return (
            <div>
                <Box sx={style} >
                    <Label aria-atomic>Update User</Label>
                    {userArray.map(user => (
                        <div>
                            <Input
                                elementType={user.config.elementType}
                                elementConfig={user.config.elementConfig}
                                key={user.id}
                                color="primary"
                                variant="outlined"
                                style={{ width: "100%", marginBottom: '10px' }}
                                placeholder={user.config.placeHolder}
                                value={user.config.value}
                                onChange={(event) => this.inputChanceHandler(event, user.id)}
                            />
                        </div>
                    ))}
                    <Button style={{ margin: '10px' }} color="primary" variant="contained" onClick={() => this.formSubmit()}>Update User</Button>
                    {
                        this.props.response === 'OK' ? [<Notification message="User updated successfully" severity='success' />, window.location.reload()] : ''
                    }
                </Box>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userUpdate: state.user.userUpdate,
    idFromUser: state.user.idFromUser,
    success: state.notification.success,
    response: state.user.response
})
const mapDispatchToProps = dispatch => ({
    onAddNewUser: (newUserObject) => dispatch(actions.addNewUser(newUserObject)),
    onSendUpdateUser: (id, newUserObject) => dispatch(actions.sendUpdateUser(id, newUserObject)),
    onUpdateUser: (updateUserObject) => dispatch(actions.updateUser(updateUserObject)),
    onSetNotification: (info) => dispatch(actions.setNotification(info))
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserModal)