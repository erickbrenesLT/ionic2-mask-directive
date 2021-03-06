import { Pipe, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Ionic2MaskDirective {
    /**
     * @param {?} control
     */
    constructor(control) {
        this.control = control;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        let /** @type {?} */ value = this.control.control.value;
        if (value) {
            this.control.control.setValue(this.format(value));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyUp($event) {
        if ($event.keyCode !== 13 && $event.keyCode !== 9) {
            let /** @type {?} */ value = this.control.control.value;
            this.control.control.setValue(this.format(value));
        }
    }
    /**
     * @param {?} v
     * @return {?}
     */
    format(v) {
        let /** @type {?} */ s = '';
        var /** @type {?} */ matches = v.match(/[a-zA-Z0-9]+/g);
        if (matches !== null) {
            let /** @type {?} */ value = matches.join('').split('');
            var /** @type {?} */ chars = this.mask.split('');
            for (let /** @type {?} */ c of chars) {
                if (value.length === 0) {
                    break;
                }
                switch (c) {
                    case '#':
                        s += value[0];
                        value = value.slice(1);
                        break;
                    case '9':
                        if (value[0].match(/\d/) !== null) {
                            s += value[0];
                            value = value.slice(1);
                        }
                        break;
                    case 'A':
                        if (value[0].match(/[a-zA-Z]/) !== null) {
                            s += value[0];
                            value = value.slice(1);
                        }
                        break;
                    default:
                        s += c;
                }
            }
        }
        return s;
    }
}
Ionic2MaskDirective.decorators = [
    { type: Pipe, args: [{ name: '[mask]' },] },
];
/** @nocollapse */
Ionic2MaskDirective.ctorParameters = () => [
    { type: NgControl, },
];
Ionic2MaskDirective.propDecorators = {
    "mask": [{ type: Input },],
    "ngOnChanges": [{ type: HostListener, args: ['change',] },],
    "onKeyUp": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { Ionic2MaskDirective };
//# sourceMappingURL=ionic2-mask-directive.js.map
