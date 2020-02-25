import { LightningElement, api } from "lwc";

export default class FractalControls extends LightningElement {

    elementId;
    @api min;
    @api max
    @api value;
    @api title;
    @api step;

    connectedCallback() {
        this.elementId = this.randomIdGenerator();
    }

    handleChange(event) {
        
        this.value = event.target.value;
        this.dispatchEvent(
            new CustomEvent("change", { detail: this.value })
        );
    }

    randomIdGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return "_"+(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
}