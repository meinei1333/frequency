import { Application } from 'pixi.js';
import Facade from '../libraries/puremvc/patterns/facade/Facade';

export default class Global {
    public static facade: Facade;
    public static PIXI: Application;
    public static DEFAULT_GAME_WIDTH: number = 1920;
    public static DEFAULT_GAME_HEIGHT: number = 1080;
}