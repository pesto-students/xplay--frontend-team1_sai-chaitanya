const getValueFromStorage = (key) =>
	JSON.parse(localStorage.getItem(key) || '{}');

export { getValueFromStorage };
