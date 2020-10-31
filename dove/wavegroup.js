import{
    Wave
} from "./wave.js";

export class WaveGroup{
    constructor(){
        this.totalWaves = 3;
        this.totalPoints = 5;
        this.color = ['rgba(181,206,230,0.8)','rgba(180,198,220,0.2)','rgba(180,220,220, 0.1)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i]
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){
        for(let i = 0; i<this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}