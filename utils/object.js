export function stateCompare(oldData, newData) {
	if (oldData === newData) return true;
	const arg = Array.prototype.slice.call(arguments);
	const objCall = (obj, string) => Object.prototype.toString.call(obj) === `[object ${string}]`;
	if (arg.every(obj => objCall(obj, 'Object')) && Object.keys(oldData).length === Object.keys(newData).length) {
		for (const key in oldData) {
			if (oldData.hasOwnProperty(key) && !stateCompare(oldData[key], newData[key])) return false;
		}
	} else if (arg.every(obj => objCall(obj, 'Array')) && oldData.length === newData.length) {
		for (const key in oldData) {
			if (!stateCompare(oldData[key], newData[key])) return false;
		}
	} else {
		return false;
	}
	return true;
}
