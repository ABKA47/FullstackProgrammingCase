import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataTable from 'react-data-table-component'
import Box from '@material-ui/core/Box/Box';
import Card from "@material-ui/core/Card";

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

class SpecificUserModal extends Component {
    render() {
        let specificUserArray = []
        specificUserArray.push(this.props.specificUser)
        return (
            <Box sx={style} >
                <Card>
                    <DataTable
                        title="Specific Users"
                        columns={this.props.tableColumns}
                        data={specificUserArray}
                    />
                </Card>
            </Box>
        )
    }
}
const mapStateToProps = (state) => ({
    specificUser: state.user.user,
    idFromUser: state.user.idFromUser,
    tableColumns: state.user.columns
})


export default connect(mapStateToProps)(SpecificUserModal)