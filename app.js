var _ = require('lodash');
var fs = require('fs');

var data = require('./data/data');

var modelValidElements = ["type","trim","unique","required","default","enum"];

var modelData = {};
modelData.modelName = data.name.charAt(0).toUpperCase()+ data.name.slice(1);
modelData.schemaElements = [];
for (schemaElement in data.schemaElements){
	var tempSchemaElementProperty = {name:data.schemaElements[schemaElement].name,properties:{}};
	for(schemaElementProperty in data.schemaElements[schemaElement].properties){
		if (_.includes(modelValidElements,schemaElementProperty)){
			tempSchemaElementProperty.properties[schemaElementProperty]=data.schemaElements[schemaElement].properties[schemaElementProperty]
		}
	}
	modelData.schemaElements.push(tempSchemaElementProperty)
}
var compile = _.template(fs.readFileSync('./template/model.js'));

fs.writeFileSync('./rendered/model.js', compile(modelData))