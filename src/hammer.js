import Manager from "./manager";
import RotateRecognizer from './recognizers/rotate';
import PinchRecognizer from './recognizers/pinch';
import SwipeRecognizer from './recognizers/swipe';
import PanRecognizer from './recognizers/pan';
import TapRecognizer from './recognizers/tap';
import PressRecognizer from './recognizers/press';
import { DIRECTION_HORIZONTAL } from './inputjs/input-consts';

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
			recognizers: [
					// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
					[RotateRecognizer, { enable: false }],
					[PinchRecognizer, { enable: false }, ['rotate']],
					[SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
					[PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
					[TapRecognizer],
					[TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
					[PressRecognizer]
			],
			...options,
		});
	}
}
