/**
 * Module dependencies.
 */
     //"Mongoose MongoDB ODM" https://github.com/Automattic/mongoose | https://www.npmjs.com/package/mongoose
    var mongoose = require('mongoose');
    // Mongoose schema
    var Schema = mongoose.Schema;

/**
 * <%= name.charAt(0).toUpperCase()+ name.slice(1) %> Schema
 */

 var <%= name.charAt(0).toUpperCase()+ name.slice(1) %>Schema = new Schema({
    <% for (schemaElement in schemaElements) { %>
        <% if (schemaElements[schemaElement].name) { %><%= schemaElements[schemaElement].name %>:{
            <% if (schemaElements[schemaElement].type) { %>type:<%= schemaElements[schemaElement].type %><% } %>
            <% if (schemaElements[schemaElement].trim) { %>trim:'<%= schemaElements[schemaElement].trim %><% } %>
            <% if (schemaElements[schemaElement].unique) { %>unique:'<%= schemaElements[schemaElement].unique %>'<% } %>
            <% if (schemaElements[schemaElement].default) { %>default:'<%= schemaElements[schemaElement].default %>'<% } %>
            <% if (schemaElements[schemaElement].enum) {%> enum:'<%= schemaElements[schemaElement].enum %><% } %>
        } <% } %>
    <% } %>
<% function test() {return "test"} %>