import {
  CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD,
  changeApplyTrafoParamInputField,
} from './changeApplyTrafoParamInputFieldActions';

describe('changeApplyTrafoParamInputFieldActions', () => {
  it('should create a CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD action', () => {
    const name = 'tx';
    const val = 20;
    const expected = {
      type: CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD,
      name,
      val,
    };
    const result = changeApplyTrafoParamInputField(name, val);
    expect(result.type).toEqual(expected.type);
    expect(result.name).toEqual(expected.name);
    expect(result.val).toEqual(expected.val);
    expect(result.receivedAt).toBeDefined();
  });
});
