var mongoose = require("mongoose");

var Task = new mongoose.Schema({
	title: {type: String, required: true},
	details: {type: String},
	status: {type: String, enum: ["active", "completed"], default: "active"},
	due: {type: Date},
	progress: [
	{
		message: {type: String},
		updated: {type: Date, default: Date.now}
	}],
}, {timestamps: true});


module.exports = mongoose.model("Task", Task);