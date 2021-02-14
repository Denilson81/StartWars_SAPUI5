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
				
				// var oHeader = oContext.getObject();
				// var sName = oHeader.name;

				var sPath = oListItem.getBindingContext().getPath();
				var index = sPath.split("/")[sPath.split("/").length -1 ];

				var oRouter = this.getOwnerComponent().getRouter();
				//Passing parameter created on Route "detail" in the manifest.json
				oRouter.navTo("detail", {
					// namePerson: sName
					   namePerson: index
				});
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
    })