sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.indra.gestionreservatile.controller.App", {
        onInit: function () {
          const model = this.getOwnerComponent().getModel();
          const resourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

          model.setProperty("/State", "Loading")
          model.setProperty("/TipoSolicitud",[
              {
              valor: 10,
              title:"Creado",
              status:"Critical"
              },
              {
              valor: 6,
              title:"Anulado",
              status:"Error"
              },
              {
              valor: 5,
              title:"Despachado",
              status:"Good"
              },
              {
              valor: 4,
              title:"Atención parcial",
              status:"Critical"
              },
              {
              valor: 4,
              title:"Sin Atender",
              status:"Error"
              }
          ]);
          model.setProperty("/Subheader","Total " + 29);
          model.setProperty("/State", "Loaded");
        },
        onPress: function (event) {
          var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
          oCrossAppNavigator.toExternal({
            target: { 
              semanticObject : "GestionReservas",
              action: "Display"
            }
          });
        }
      });
    }
  );
  