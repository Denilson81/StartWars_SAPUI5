sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("pina.starwars.controller.S0", {
			onInit: function () {
				
				var characters   = this.getView().getModel("people").getData();
				
				var oModel = new JSONModel(characters);
				this.getView().setModel(oModel, "peopleList");
			
				
			},
			onListItemPress: function(){
               
			}
		});
	});
