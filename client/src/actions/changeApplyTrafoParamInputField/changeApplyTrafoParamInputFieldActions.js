export const CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD = 'CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD';

export const changeApplyTrafoParamInputField = (name, val) => ({
  type: CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD,
  name,
  val,
  receivedAt: Date.now(),
});
