import Mediator from '../../libraries/puremvc/patterns/mediator/Mediator';
import View from '../../libraries/puremvc/core/View';
import MapView from '../views/MapView';
import CommandEventName from '../enums/CommandEventName';

export default class MapMediator extends Mediator<View> {
    private view: MapView;
    constructor() {
        let v = new MapView();
        super('MapMediator', v);
        this.view = v;
    }

    handleNotification(notificationName: string) {
        switch (notificationName) {
            case CommandEventName.bgInit:
                this.view.init();
                break;
        }
    }

    listNotificationInterests(): Array<string> {
        return [CommandEventName.bgInit]
    }
}