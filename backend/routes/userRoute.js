const express = require('express');
const mongoose = require('mongoose')
const User = require('../models/userModel')

const router = express.Router();







router.post("/", async (req, res) => {
    const { name, email, age } = req.body
    try {
        const userData = await User.create({
            name: name,
            email: email,
            age: age
        })
        res.status(201).json(userData)
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
})

router.get("/", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const singleUser = await User.findById({ _id: id });
        res.status(200).json(singleUser)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deleteUser = await User.findByIdAndDelete({ _id: id });
        res.status(200).json(deleteUser)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
})

router.patch("/:id", async (req, res) => {
    const { id } = req.params
    const { name, email, age } = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUser)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
})

module.exports = router