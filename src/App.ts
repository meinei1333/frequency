import Global from './Global';
import Facade from '../libraries/puremvc/patterns/facade/Facade';
import { Application, Loader } from 'pixi.js';
import CommandEventName from './enums/CommandEventName';
import MapMediator from './mediators/MapMediator';

export default class App {
    constructor() {
        this.loadAssets();
        this.initMVC();
        this.initPIXI();
        this.registerMediator();
    }

    registerMediator() {
        Global.facade.registerMediator(new MapMediator());
    }

    loadAssets() {
        let source = ['bullet.png', 'car.png', 'hay.jpg', 'wall.jpg'];
        let loader = new Loader('assets/');
        source.forEach(element => {
            loader.add(element);
        })
        loader.load(this.loadCompelted.bind(this));
    }

    loadCompelted() {
        Global.facade.sendNotification(CommandEventName.bgInit);
    }

    initMVC() {
        Global.facade = Facade.getInstance('unique');
    }
    initPIXI() {
        Global.PIXI = new Application({
            width: Global.DEFAULT_GAME_WIDTH,
            height: Global.DEFAULT_GAME_HEIGHT,
            backgroundColor: 0x000000,
        });
        document.body.appendChild(Global.PIXI.view);
    }
}