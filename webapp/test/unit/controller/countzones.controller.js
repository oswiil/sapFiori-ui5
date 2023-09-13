/*global QUnit*/

sap.ui.define([
	"msupply/project1/controller/countzones.controller"
], function (Controller) {
	"use strict";

	QUnit.module("countzones Controller");

	QUnit.test("I should test the countzones controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
