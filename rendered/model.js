/**
 * Module dependencies.
 */
     //"Mongoose MongoDB ODM" https://github.com/Automattic/mongoose | https://www.npmjs.com/package/mongoose
    var mongoose = require('mongoose');
    // Mongoose schema
    var Schema = mongoose.Schema;

/**
 * Menu Schema
 */

	var MenuSchema = new Schema({
    	name:{
			type:String,
			trim:true,
			unique:'Menu already exists',
			required:'Name cannot be blank'
		}
    	isPublic:{
			type:Boolean,
			default:true
		}
    	order:{
			type:Number,
			default:0
		}
    	position:{
			type:String,
			enum:['left', 'right'],
			default:'left'
		}
    	nav:{
			type:String,
			enum:['top','bottom','left','right'],
			default:'top'
		}

	mongoose.model('Menu', MenuSchema);
