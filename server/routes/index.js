const express = require('express')
const router = express.Router()
const User = require('../models/user')
const randomInt = require('random-int')

router.get('/users', (req, res) => {

	User.getAllUsers((err, result) => {
		if(err) {
			return res.json({ success: false, result: err })
		}
		
		res.json({ success: true, result })
	})
})

router.get('/user/:id', (req, res) => {

	User.getUserById(req.params.id, (err, result) => {

		if(err) {
			return res.json({ success: false, result: err })
		}
		
		res.json({ success: true, result })
	})
})

router.post('/user', (req, res) => {

	const userObj = {
		name: req.body.name || '-',
		location: req.body.location || '-',
		picture: {
	    	thumbnail: `https://api.adorable.io/avatars/200/${randomInt(10, 100)}.png`
    	},
		phone: req.body.phone || '-'
	}
	
	User.addUser(userObj, (err, result) => {

		if(err) {
			return res.json({success: false, result: err})
		}

		res.json({success: true, result})
	})
})

router.put('/user', (req, res) => {

	User.updateUser(req.body.id, req.body, (err, result) => {
		if(err) {
			return res.json({success: false, result: err})
		}

		res.json({success: true, result})
	})
})

router.delete('/user?:id', (req, res) => {

	User.deleteUser(req.query.id, (err, result) => {
		if(err || !result) {
			return res.json({success: false, result: err})
		}

		res.json({success: true, result})
	})
})

module.exports = router