import React, { Component } from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box/Box';
import Card from "@material-ui/core/Card";
import Label from '@material-ui/core/FormLabel/FormLabel'
import Button from '@material-ui/core/Button/Button';
import TextBox from '@material-ui/core/TextField/TextField'
import * as actions from '../../../store/actions/index'

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

    formSubmit = (event) => {
        event.preventDefault()
        const updateUserData = {}
        for (let id in this.props.userUpdate) {
            updateUserData[id] = this.props.userUpdate[id].value
        }

        let sendObject = updateUserData
        this.props.onSendUpdateUser(this.props.idFromUser, sendObject)
        console.log(sendObject)
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
                            {console.log("user", user)}
                            <Card key={user.id}>
                                <TextBox
                                    style={{ width: "100%" }}
                                    value={user.config.value}
                                    onChange={(event) => this.inputChanceHandler(event, user.id)}
                                />
                            </Card>
                        </div>
                    ))}
                    <Button onClick={(event) => this.formSubmit(event)}>Update User</Button>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userUpdate: state.user.userUpdate,
    idFromUser: state.user.idFromUser
})
const mapDispatchToProps = dispatch => ({
    onAddNewUser: (newUserObject) => dispatch(actions.addNewUser(newUserObject)),
    onSendUpdateUser: (newUserObject) => dispatch(actions.sendUpdateUser(newUserObject)),
    onUpdateUser: (updateUserObject) => dispatch(actions.updateUser(updateUserObject))
})


export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserModal)