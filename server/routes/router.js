const express = require('express')

const router = express.Router()

const { User } = require("../model/user")

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object      
 *       properties:        
 *         name:
 *           type: string
 *           description: The name of the user
 *         surname:
 *           type: string
 *           description: The surname of the user
 *         username:
 *           type: string
 *           description: The username
 *         title:
 *           type: string
 *           description: The title of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         role:
 *           type: string
 *           description: The role of the user
 *       example:
 *         name: Abdullah
 *         surname: KARACAOĞLU
 *         username: ABKA47
 *         title: Software Engineer
 *         email: abdullahkaracaoglu7@gmail.com
 *         role: Admin
 */

/**
  * @swagger
  * tags:
  *   name: user
  *   description: The user managing API
  */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [user]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/user'
 */

router.get('/users', (req, res) => {
    User.find().then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send({ message: err.message || "Error Occurred while retriving user information!" })
    })
})

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       404:
 *         description: The book was not found
 */


router.get('/users/:id', (req, res) => {
    const id = req.params.id
    User.findById(id).then(data => {
        if (!data) {
            res.status(404).send({ message: "Not found user with id=" + id })
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.send(500).send({ message: "Error retriving user with id" + id })
    })
})

/**
 * @swagger
 * /add-user:
 *   post:
 *     summary: Create a new user
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       500:
 *         description: Some server error
 */

router.post('/add-user', (req, res) => {
    let user = new User({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        email: req.body.email,
        title: req.body.title,
        role: req.body.role
    })

    user.save().then(data => {
        res.status(200).send({
            message: data.message
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })


})

/**
 * @swagger
 * /update-user/{id}:
 *  put:
 *    summary: Update the user by the id
 *    tags: [user]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/user'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/user'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */

router.put('/update-user/:id', (req, res) => {
    const id = req.params.id

    User.findByIdAndUpdate(id, req.body)
        .then(data => {
            console.log(JSON.stringify(req.body))
            console.log(data)
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}.Maybe user not found!` })
            } else {
                res.send(data)
            }
        }).catch(err => {
            res.status(500).send({ message: "Error Update user information!" })
        })
})

/**
 * @swagger
 * /delete-user/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [user]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 * 
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */

router.delete('/delete-user/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete with ${id}.Maybe id is wrong!` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        }).catch(err => {
            res.status(500).send({ message: "Could not delete User with id =" + id })
        })
})

module.exports = router