sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
      var ZMMGS_REPORT_RESERV_SRV;
      return BaseController.extend("com.indra.gestionreservatile.controller.App", {
        onInit: function () {
          const model = this.getOwnerComponent().getModel();
          ZMMGS_REPORT_RESERV_SRV = this.getOwnerComponent().getModel("ZMMGS_REPORT_RESERV_SRV");
          const resourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
          model.setProperty("/State", "Loading")
          ZMMGS_REPORT_RESERV_SRV.read("/EstadoReservaCantSet", {
            success: function (oData) {
              var respuesta = oData.results;
              var aFilas= [];
              var suma = 0;
              respuesta.forEach(element => {
                var fila = {
                  valor: element.Cantidad,
                  title:element.Estado,
                  status:element.Usuario
                  }
                  aFilas.push(fila);
                  suma+=element.Cantidad;
              });
             
              model.setProperty("/TipoSolicitud",aFilas);
              model.setProperty("/Subheader","Total " + suma);
              model.setProperty("/State", "Loaded");
            },
            error: function (oError) {
              MessageBox.error(oError.responseText);
                          sap.ui.core.BusyIndicator.hide(0);
            }
          });

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
  