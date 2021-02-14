sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("pina.starwars.controller.S0", {
			onInit: function () {
				
				
			},
			onListItemPress: function(oEvent){
				var oParameters = oEvent.getParameters();
				var oListItem = oParameters.listItem;
				var oContext = oListItem.getBindingContext()
				var oHeader = oContext.getObject();
				var sId = oHeader.name;
			},
			onSearch: function (oEvent) {
				// add filter for search
				var aFilters = [];
				var sQuery = oEvent.getSource().getValue();
				if (sQuery && sQuery.length > 0) {
					var filter = new Filter("name", FilterOperator.Contains, sQuery);
					aFilters.push(filter);
				}
	
				// update list binding
				var oList = this.byId("idList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilters, "Application");
			},

		});
	});
