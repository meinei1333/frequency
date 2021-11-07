import View from '../../libraries/puremvc/core/View';
import Global from '../Global';
import { Container, Graphics, Sprite, Text } from 'pixi.js';
import { TweenMax } from 'gsap';

export default class MapView extends View {
    private circle: Graphics;
    private diamond: Sprite;
    private screenshotText: Text;
    private frequencyText: Text;
    constructor() {
        super('MapView');
        this.container = new Container();
        Global.PIXI.stage.addChild(this.container);

        // Circle
        this.circle = new Graphics();
        this.circle.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        this.circle.beginFill(0xFFFFFF, 1);
        this.circle.drawCircle(0, 0, 10);
        this.circle.endFill();
        Global.PIXI.stage.addChild(this.circle);
    }

    takeScreenshot() {
        console.log('takeScreenshot');
        this.aa();
    }


    init() {
        this.diamond = PIXI.Sprite.from('assets/rainbow.png');
        this.container.addChild(this.diamond);

        const style = new PIXI.TextStyle({
            fontSize: 36,
            fill: '#FFFFFF',
        });

        this.screenshotText = new Text('閉上眼睛深呼吸三次,說出\n"請高我告訴我,我現在的頻率",\n然後按下畫面上任何地方', style);
        this.screenshotText.x = 300;
        this.screenshotText.y = 100;
        this.container.addChild(this.screenshotText);

        this.frequencyText = new Text('', style);
        this.frequencyText.x = 300;
        this.frequencyText.y = 400;
        this.container.addChild(this.frequencyText);

        Global.PIXI.renderer.plugins.interaction.on('pointerdown', this.takeScreenshot.bind(this));
    }

    aa() {
        let fre = 20 + Math.random() * 680
        let percentage = fre / 7;
        this.circle.x = this.diamond.x + this.diamond.width / 2;
        this.circle.y = this.diamond.y + this.diamond.height;
        let target = this.diamond.y + this.diamond.height - (percentage / 100 * this.diamond.height);
        this.frequencyText.text = `頻率:${Math.ceil(fre)}`;

        var myTween = TweenMax.to(this.circle, 1, { y: target })

    }
}