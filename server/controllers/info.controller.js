const Info = require('../models/info.model')
const mongoose = require('mongoose')

// get all info
const getInfos = async (req, res) => {

    const user_id = req.user._id
    console.log(user_id)
    const infos = await Info.find({user_id}).sort({createdAt : -1})

    res.status(200).json(infos);
}


// get a single info
const getInfo = async (req, res) => {
    const { id } = req.params
    const info = await Info.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: ' No such info' })
    }
    if (!info) {
        return res.status(400).json({ error: 'No such thing' })
    }


    res.status(200).json(info)
}

// create new info
const createInfo = async (req, res) => {
    const { history, symptoms, phoneNum, medication, date, location, } = req.body

    let fields = []
    if (!history){
        fields.push('history')
    }
    if (!symptoms){
        fields.push('symptoms')
    }
    if (!phoneNum){
        fields.push('phoneNum')
    }
    if (!medication){
        fields.push('medication')
    }
    if (!date){
        fields.push('date')
    }
    if (!location){
        fields.push('location')
    }
    if(fields.length> 0) {
        return res.status(400).json({error:'Please fill in all the fields',fields})
    }
    const user_id = req.user._id
    try {
        const info = await Info.create({ history, symptoms, phoneNum, medication, date, location, user_id })
        
        res.status(200).json(info)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a info
const deleteInfo = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: ' No such info' })
    }

    const info = await Info.findOneAndDelete({ _id: id })

    if (!info) {
        return res.status(400).json({ error: 'No such thing' })
    }
    res.status(200).json(info)
}

// update a info
const updateInfo = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: ' No such info' })
    }

    const info = await Info.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!info) {
        return res.status(400).json({ error: 'No such thing' })
    }
    res.status(200).json(info)
}



module.exports = {
    createInfo,
    getInfo,
    getInfos,
    deleteInfo,
    updateInfo
}