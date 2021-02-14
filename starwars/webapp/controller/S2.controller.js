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
				this.oRouter = this.getOwnerComponent().getRouter();
				var oRoute = this.oRouter.getRoute("detail");

				oRoute.attachPatternMatched(this.onPBO, this);
				
			},
			//Name "onPBO" only to make one reference with ABAP language 
			onPBO: function(oEvent){
				// alert("chamou");
				var oParameters = oEvent.getParameters();
				var oArguments  = oParameters.arguments;
				var sName       = oArguments.namePerson;
				
				var oModel = this.getView().getModel();

				// var sPath = "/results/" + sName;
				var  sPath = "/results/" + sName ;
				this.getView().bindElement(sPath);

			},

			onBack: function(oEvent){
				
				this.oRouter.navTo("default");
			}	

        });
    })