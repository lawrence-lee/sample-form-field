AUI.add(
	'sample-form-field-form-field',
	function(A) {
		var SampleFormFieldField = A.Component.create(
			{
				ATTRS: {
					type: {
						value: 'sample-form-field-form-field'
					}
				},

				EXTENDS: Liferay.DDM.Renderer.Field,

				NAME: 'sample-form-field-form-field',

				prototype: {
				}
			}
		);

		Liferay.namespace('DDM.Field').SampleFormField = SampleFormFieldField;
	},
	'',
	{
		requires: ['liferay-ddm-form-renderer-field']
	}
);