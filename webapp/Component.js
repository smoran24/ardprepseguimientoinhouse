sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "AR_DP_REP_REPORTESEGUIMIENTOINHOUS/AR_DP_REP_REPORTESEGUIMIENTOINHOUS/model/models"], function (t,
	e, i) {
	"use strict";
	return t.extend("AR_DP_REP_REPORTESEGUIMIENTOINHOUS.AR_DP_REP_REPORTESEGUIMIENTOINHOUS.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			t.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			this.setModel(i.createDeviceModel(), "device");

			let ODataV2Model = i.createHanaModel();
			this.setModel(ODataV2Model, "ODataHana");
		},
		getContentDensityClass: function () {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
	});
});