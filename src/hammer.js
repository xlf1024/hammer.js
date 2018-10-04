import Manager from "./manager";
import defaults from "./defaults";

/**
 * @private
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
export default class Hammer {
	/**
   * @private
   * @const {string}
   */
	static VERSION = "#__VERSION__#";

	constructor(element, options = {}) {
		return new Manager(element, {
			recognizers: defaults.preset,
			...options,
		});
	}
}
