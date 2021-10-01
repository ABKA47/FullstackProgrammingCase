import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button/Button"
import TextBox from '@material-ui/core/TextField/TextField'
import XLSX from 'xlsx'
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Modal from '../../components/UI/Modal/Modal'
import AddUserModal from './addUserModal/AddUserModal';
import UpdateUserModal from './updateUserModal/updateUserModal';
import DeleteUserModal from './deleteUserModal/deleteUserModal'
import SpecificUserModal from './specificUserModal/specificUserModal'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import {  pink } from "@material-ui/core/colors";

// CSS
import "./user.css"


class User extends Component {
    componentDidMount() {
        this.props.onFetchAllUsers()
    }
    render() {
        const downloadExcel = () => {
            const newData = this.props.users.map(row => {
                delete row.tableData
                return row
            })
            const workSheet = XLSX.utils.json_to_sheet(newData)
            const workBook = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(workBook, workSheet, "Users")
            //Buffer
            XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
            //Binary string
            XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
            //Download
            XLSX.writeFile(workBook, "Users.xlsx")


        }
        const downloadPdf = () => {
            const doc = new jsPDF()
            doc.text("User Details", 20, 10)
            doc.autoTable({
                theme: "grid",
                columns: this.props.tableColumns.map(col => ({ ...col, dataKey: col.selector })),
                body: this.props.users
            })
            doc.save('Users.pdf')
        }

        const defaultTheme = createTheme({
            palette: {
              secondary: pink
            }
          });

        const customTheme = createTheme({
            palette: {
              secondary: pink
            }
          });

        let userTable = (
            <div className="User">
                <Card>
                    <Card>
                        <TextBox
                            placeholder="Write User ID"
                            value={this.props.idFromUser}
                            style={{ margin: '10px' }}
                            onChange={(event) => this.props.onGetIdFromUser(event.target.value)}
                        />
                        <ThemeProvider theme={defaultTheme}>
                        <Button style={{ margin: '10px' }} color="primary" variant="contained" onClick={() => this.props.onGetSpecificUser(this.props.idFromUser)}>Specific User</Button>
                        <Button style={{ margin: '10px' }} color="primary" variant="contained" onClick={() => this.props.onOpenUpdateUserModal()}>Update User</Button>
                        <Button style={{ margin: '10px' }} color="primary" variant="contained" onClick={() => this.props.onOpenDeleteUserModal()}>Delete User</Button>
                        <Button style={{ margin: '10px', marginLeft: '50px' }} color="primary" variant="contained" onClick={() => this.props.onOpenAddUserModal()}>Add New User</Button>
                        </ThemeProvider>
                    </Card>

                    <DataTable
                        title="Users"
                        columns={this.props.tableColumns}
                        data={this.props.searchList}
                        defaultSortFieldId={1}
                        sortIcon={<SortIcon />}
                        pagination
                        actions={[<TextBox placeholder="Search" onChange={(event) => this.props.onSearchedItemList(event.target.value)} />,
                        <ThemeProvider theme={defaultTheme}><Button color="secondary" variant="contained" onClick={() => downloadPdf()}>Export PDF</Button></ThemeProvider>,
                        <ThemeProvider theme={customTheme}><Button color="secondary" variant="contained" onClick={() => downloadExcel()}>Export XLS</Button></ThemeProvider>  ]}
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
    idFromUser: state.user.idFromUser,
    searchList: state.user.searchedUserList
})
const mapDispatchToProps = dispatch => ({
    onFetchAllUsers: () => dispatch(actions.fetchAllUsers()),
    onEditUserModal: (id) => dispatch(actions.editUserModal(id)),
    onOpenAddUserModal: () => dispatch(actions.openAddUserModal()),
    onOpenDeleteUserModal: () => dispatch(actions.openDeleteUserModal()),
    onOpenUpdateUserModal: () => dispatch(actions.openUpdateUserModal()),
    onGetSpecificUser: (id) => dispatch(actions.getSpecificUser(id)),
    onCloseModal: () => dispatch(actions.closeUserModal()),
    onGetIdFromUser: (id) => dispatch(actions.getIdFromUser(id)),
    onSearchedItemList: (searchItem) => dispatch(actions.changeSearchFilter(searchItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)