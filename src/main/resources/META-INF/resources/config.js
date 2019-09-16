;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-sample-form-field': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					filter: Liferay.AUI.getFilterConfig(),
					modules: {
						'sample-form-field-form-field': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'sample-form-field_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();