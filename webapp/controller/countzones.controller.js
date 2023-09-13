sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/util/File"

  ], function (Controller, File) {
    "use strict";
    return Controller.extend("msupply.project1.controller.countzones", {
      onInit: function () {
        // Inicialización
      },
      onListItemPress: function (oEvent) {
        var oItem = oEvent.getParameter("listItem");
        var sAction = oItem.getCustomData()[0].getValue();
        if (sAction === "edit") {
          // Lógica para editar el elemento seleccionado
        }
      },
      onAddRecord: function() {
        // Navega a la vista del formulario
        console.log("EEESA")
        this.getOwnerComponent().getRouter().navTo("formView");
      },
      onSave: function() {
         // Obtén los valores de los campos de entrada
  var input1 = this.byId("inputField1").getValue();
  var input2 = this.byId("inputField2").getValue();
  var input3 = this.byId("inputField3").getValue();
  var input4 = this.byId("inputField4").getValue();

  // Crea un nuevo objeto con los valores de los campos de entrada
  var newRecord = {
    "ID": "3",
    "Name": input1,
    "Description": input2,
    "Column3": input3,
    "Column4": input4
  };
  var oFileReader = new FileReader();
  
  // Obtén los datos existentes del archivo yourData.json
  oFileReader.read("mockdata/yourData.json", "json")
    .then(function(data) {
      // Agrega el nuevo objeto al arreglo "results"
      data.results.push(newRecord);

      // Guarda los datos actualizados en el archivo yourData.json
      File.write("mockdata/yourData.json", JSON.stringify(data));

      // Muestra un mensaje de éxito
      sap.m.MessageToast.show("Registro añadido");
    })
    .catch(function(error) {
      // Muestra un mensaje de error
      sap.m.MessageToast.show("Error al añadir el registro");
    });
}
      
    
    });
  });