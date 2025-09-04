import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Application, Graphics, Ticker } from 'pixi.js';

@Component({
  selector: 'app-pixi',
  templateUrl: './pixi.component.html',
  styleUrls: ['./pixi.component.scss'],
})
export class PixiComponent implements AfterViewInit {
  @ViewChild('pixi') pixi!: ElementRef;
  public app!: Application;
  public graphics!: Graphics;
  public ticker = new Ticker();

  async ngAfterViewInit(): Promise<void> {
    // PixiJS v8 აპლიკაცია
    this.app = new Application();

    await this.app.init({
      width: 400,
      height: 400,
      backgroundColor: 0x000000, // შავი background
      antialias: true,
    });

    this.ticker.start();

    // @ts-ignore
    globalThis.__PIXI_APP__ = this.app;
    this.app.stage.label = 'shavi bcg';
    this.pixi.nativeElement.appendChild(this.app.canvas);

    this.drawGrafic();

    this.ticker.add(this.rotate);
  }

  drawGrafic() {
    this.graphics = new Graphics();
    this.graphics.fill(0xff0000).roundRect(0, 0, 200, 200, 50).fill();

    this.graphics.position.set(
      this.app.canvas.width / 2,
      this.app.canvas.height / 2,
    );

    this.graphics.label = 'witeli cubi';

    this.graphics.pivot.set(this.graphics.width / 2, this.graphics.height / 2);

    this.app.stage.addChild(this.graphics);
  }

  private rotate = () => {
    this.graphics.angle += 0.5;
  };
}
