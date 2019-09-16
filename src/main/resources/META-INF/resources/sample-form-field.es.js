import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './sample-form-field.soy';

/**
 * SampleFormField Component
 */
class SampleFormField extends Component {}

// Register component
Soy.register(SampleFormField, templates, 'render');

if (!window.DDMSampleFormField) {
	window.DDMSampleFormField = {

	};
}

window.DDMSampleFormField.render = SampleFormField;

export default SampleFormField;