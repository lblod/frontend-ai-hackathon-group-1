import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service'

export default class IndexController extends Controller {
    isPopupOpen = false;
    address = '';

    @service router;

    @action openPopup(){
        this.set('isPopupOpen', true);
    }

    @action closePopup(){
        this.set('isPopupOpen', false);

    }

    @action submitAddress(){
        this.closePopup();
        this.router.transitionTo('guidelines');
    }
}
