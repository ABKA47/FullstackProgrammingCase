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
class AddUserModal extends Component {

    inputChanceHandler = (event, identifier) => {
        const newUserObject = { ...this.props.newUser }
        const newUser = { ...newUserObject[identifier] }
        newUser.value = event.target.value
        newUserObject[identifier] = newUser

        this.props.onAddNewUser(newUserObject)
    }

    formSubmit = (event) => {
        event.preventDefault()
        const newUserData = {}
        for (let id in this.props.newUser) {
            newUserData[id] = this.props.newUser[id].value
        }

        let sendObject = newUserData
        this.props.onSendNewUser(sendObject)
        console.log(sendObject)
        window.location.reload()
    }

    render() {

        let userArray = [];
        for (let key in this.props.newUser) {
            userArray.push({
                id: key,
                config: this.props.newUser[key]
            })
        }
        return (
            <div>
                <Box sx={style} >
                    {userArray.map(user => (
                            <TextBox
                                key={user.id}
                                color="primary"
                                variant="outlined"
                                style={{ width: "100%", marginBottom: '10px' }}
                                placeholder={user.config.placeHolder}
                                value={user.config.value}
                                onChange={(event) => this.inputChanceHandler(event, user.id)}
                            />
                    ))}
                    <Button style={{ margin: '10px' }} color="primary" variant="contained" onClick={(event) => this.formSubmit(event)}>Add User</Button>
                </Box>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    newUser: state.user.newUser
})
const mapDispatchToProps = dispatch => ({
    onAddNewUser: (newUserObject) => dispatch(actions.addNewUser(newUserObject)),
    onSendNewUser: (newUserObject) => dispatch(actions.sendNewUser(newUserObject))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal)