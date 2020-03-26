(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['forecast'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"forecast-detail\">\r\n    <p><strong>Date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":3,"column":21},"end":{"line":3,"column":29}}}) : helper)))
    + "</strong></p>\r\n    <ul>\r\n        <li class=\"condition\"> Condition: "
    + alias4(((helper = (helper = lookupProperty(helpers,"condition") || (depth0 != null ? lookupProperty(depth0,"condition") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":55}}}) : helper)))
    + "</li>\r\n        <li class=\"temp\">High: "
    + alias4(((helper = (helper = lookupProperty(helpers,"high") || (depth0 != null ? lookupProperty(depth0,"high") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high","hash":{},"data":data,"loc":{"start":{"line":6,"column":31},"end":{"line":6,"column":39}}}) : helper)))
    + " Low: "
    + alias4(((helper = (helper = lookupProperty(helpers,"low") || (depth0 != null ? lookupProperty(depth0,"low") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"low","hash":{},"data":data,"loc":{"start":{"line":6,"column":45},"end":{"line":6,"column":52}}}) : helper)))
    + "</li>\r\n    </ul>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"forecast") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['weather'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Weather Update</h1>\r\n<div class=\"details\">Location: "
    + alias4(((helper = (helper = lookupProperty(helpers,"location") || (depth0 != null ? lookupProperty(depth0,"location") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":43}}}) : helper)))
    + "</div>\r\n<div class=\"details\">Date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":35}}}) : helper)))
    + "</div>\r\n<div class=\"details\">Conditions: "
    + alias4(((helper = (helper = lookupProperty(helpers,"conditions") || (depth0 != null ? lookupProperty(depth0,"conditions") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"conditions","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":47}}}) : helper)))
    + "</div>\r\n<div class=\"details\">Current Temp: "
    + alias4(((helper = (helper = lookupProperty(helpers,"temp") || (depth0 != null ? lookupProperty(depth0,"temp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temp","hash":{},"data":data,"loc":{"start":{"line":5,"column":35},"end":{"line":5,"column":43}}}) : helper)))
    + "</div>\r\n<div class=\"details\">Sunrise: "
    + alias4(((helper = (helper = lookupProperty(helpers,"sunrise") || (depth0 != null ? lookupProperty(depth0,"sunrise") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunrise","hash":{},"data":data,"loc":{"start":{"line":6,"column":30},"end":{"line":6,"column":41}}}) : helper)))
    + "</div>\r\n<div class=\"details\">Sunset: "
    + alias4(((helper = (helper = lookupProperty(helpers,"sunset") || (depth0 != null ? lookupProperty(depth0,"sunset") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunset","hash":{},"data":data,"loc":{"start":{"line":7,"column":29},"end":{"line":7,"column":39}}}) : helper)))
    + "</div>\r\n<div class=\"forecast\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"forecast"),depth0,{"name":"forecast","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
})();