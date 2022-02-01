const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const EventSchema = new mongoose.Schema({
    organizer:{type: String, required: true ,maxlength:20,unique:true } ,
    name: {type: String , required: true},
    email: {type: String ,unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "email field is not provided. Cannot create user without email "],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }},
    image: {type: String , required: true},
    numOfSeats: {type: Number , required: true, min: 5,max:20},
    bookedSeates: {type: Number,default : 0 , required: true,},
    startDate:{type: Date, default: Date.now +1, required:[ true,"Must have a start date"]} ,
    endDate: {type: Date, default: this.startDate + 1, required:[true, "Must have a end date"]}
},

{
    timestamps: true
})

EventSchema.plugin(mongooseSlugPlugin,{tmpl:"<%=name%>"});

module.exports = mongoose.model("Event",EventSchema);