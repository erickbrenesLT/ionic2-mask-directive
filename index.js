var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
let Ionic2MaskDirective = class Ionic2MaskDirective {
    constructor(control) {
        this.control = control;
    }
    /*when loading dynamically data to the input, without this
    the mask will only work on keyup event changes */
    ngOnChanges() {
        let value = this.control.control.value;
        if (value) {
            this.control.control.setValue(this.format(value));
        }
    }
    onKeyUp($event) {
        if ($event.keyCode !== 13 && $event.keyCode !== 9) {
            let value = this.control.control.value;
            this.control.control.setValue(this.format(value));
        }
    }
    format(v) {
        let s = '';
        var matches = v.match(/[a-zA-Z0-9]+/g);
        if (matches !== null) {
            let value = matches.join('').split('');
            var chars = this.mask.split('');
            for (let c of chars) {
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
};
__decorate([
    Input(),
    __metadata("design:type", String)
], Ionic2MaskDirective.prototype, "mask", void 0);
__decorate([
    HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Ionic2MaskDirective.prototype, "ngOnChanges", null);
__decorate([
    HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Ionic2MaskDirective.prototype, "onKeyUp", null);
Ionic2MaskDirective = __decorate([
    Pipe({ name: '[mask]' }),
    __metadata("design:paramtypes", [NgControl])
], Ionic2MaskDirective);
export { Ionic2MaskDirective };
//# sourceMappingURL=index.js.map