const express = require('express');
const router = express.Router()
const Subscriber = require('../models/subscribers')

// Getting all
router.get('/', async(req, res) => {
    // res.send('Hello World, GET request is done!')
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})
// Getting one
router.get('/:id', (req, res) => {
    // req.params.id
    res.send(req.params.id)
})
// Creating one
router.post('/', async(req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscriberToChannel: req.body.subscriberToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
// Updating one
router.patch('/:id', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})
module.exports = router