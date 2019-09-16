package sample.form.field.form.field;

import com.liferay.dynamic.data.mapping.form.field.type.BaseDDMFormFieldType;
import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldType;

import org.osgi.service.component.annotations.Component;

/**
 * @author lawrence
 */
@Component(
	immediate = true,
	property = {
		"ddm.form.field.type.description=sample-form-field-description",
		"ddm.form.field.type.display.order:Integer=10",
		"ddm.form.field.type.icon=text",
		"ddm.form.field.type.js.class.name=Liferay.DDM.Field.SampleFormField",
		"ddm.form.field.type.js.module=sample-form-field-form-field",
		"ddm.form.field.type.label=sample-form-field-label",
		"ddm.form.field.type.name=sampleFormField"
	},
	service = DDMFormFieldType.class
)
public class SampleFormFieldDDMFormFieldType extends BaseDDMFormFieldType {

	@Override
	public String getName() {
		return "sampleFormField";
	}

}