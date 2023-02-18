import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateFromLwc extends  NavigationMixin(LightningElement) {

    @api recordId;

    
    handleClick(event){
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__Navigation",
                url: '/lightning/cmp/c__MyAuraComponent?c__myParam=value',
                target: '_blank'
            },
            state: {
                c__id: this.recordId
            }
        });
    }

    disconnectedCallback(){
        alert('Discoonect')
    }
}