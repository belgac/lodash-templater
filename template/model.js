/**
 * Module dependencies.
 */
     //"Mongoose MongoDB ODM" https://github.com/Automattic/mongoose | https://www.npmjs.com/package/mongoose
    var mongoose = require('mongoose');
    // Mongoose schema
    var Schema = mongoose.Schema;

/**
 * <%= modelName %> Schema
 */

	var <%= modelName %>Schema = new Schema({<% for (schemaElement in schemaElements) { %>
    	<%= schemaElements[schemaElement].name %>:{<% var i = 0; for (schemaElementProperty in schemaElements[schemaElement].properties) {%>
			<%= schemaElementProperty %>:<%= schemaElements[schemaElement].properties[schemaElementProperty] %><%if (i!==Object.keys(schemaElements[schemaElement].properties).length-1){%>,<%}%><%i++;}%>
		}<%}%>

	mongoose.model('<%= modelName %>', <%= modelName %>Schema);
