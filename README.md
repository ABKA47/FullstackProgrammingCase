Express NodeJS, React/Redux, MongoDB

![User List](/img/userlist.PNG)

## Get Started

### 1. Prerequisites

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager
- [MongoDB](https://www.mongodb.com/) - Non-Relational database

### 2. Installation

On the command prompt run the following commands:

``` 
 $ git clone https://github.com/ABKA47/FullstackProgrammingCase.git
 $ cd FullstackProgrammingCase
 $ cd server
 $ npm install
 $ cd ../client
 $ npm install
 ```
 Finally, start and build the application:
 
 ```
 $ cd server
 $ npm run dev
 $ cd client
 $ npm start
```
### 3. Project architecture

For a detailed guide through the project architecture and more information on configuring and deploying the system.

#### Client side

```
├───public
└───src
    ├───components
    │   ├───Footer
    │   ├───Header
    │   ├───Home
    │   └───UI
    │       ├───Input
    │       ├───Modal
    │       └───Notification
    ├───containers
    │   └───user
    │       ├───addUserModal
    │       ├───deleteUserModal
    │       ├───specificUserModal
    │       └───updateUserModal
    └───store
        ├───actions
        └───reducers

```
<br>

#### Server side

```
    ├───config
    ├───database
    ├───model
    └───routes
```

### 4. Usage

URL : http://localhost:3000/

Navigate to http://localhost:4000/swagger for the API documentation.

![Swagger](/img/swagger.PNG)

### Project Images

#### Add User

![Add User](/img/addUser.PNG)

#### Specific User Details

![Specific User Details](/img/specificUser.PNG)

#### Update User

![Update User](/img/updateUser.PNG)

#### Delete User

![Delete User](/img/deleteUser.PNG)

#### Search & Export PDF or XLS

You can search by any column and export the table in pdf or xls format.

![Update User](/img/searchPDFXLS.PNG)
