const Flu = require('../models/flu.model')
const mongoose = require('mongoose')

const getAllFlu = async (req, res) => {

    const user_id = req.user._id
    console.log(user_id)
    const flus = await Flu.find({user_id}).sort({createdAt : -1})

    res.status(200).json(flus);
}


const createFlu = async (req, res) => {
    const { birthday,vaccine,date,location} = req.body

    let fields = []
    if (!birthday){
        fields.push('birthday')
    }
    if (!vaccine){
        fields.push('vaccine')
    }
    if (!date){
        fields.push('date')
    }
    if(fields.length> 0) {
        return res.status(400).json({error:'Please fill in all the fields',fields})
    }
    const user_id = req.user._id
    try {
        const flu = await Flu.create({birthday,vaccine,date ,location, user_id })
        
        res.status(200).json(flu)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const deleteFlu = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: ' No such info' })
    }

    const flu = await Flu.findOneAndDelete({ _id: id })

    if (!flu) {
        return res.status(400).json({ error: 'No such thing' })
    }
    res.status(200).json(flu)
}

module.exports = {
    getAllFlu,
    createFlu,
    deleteFlu
}