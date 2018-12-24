import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, LinesMesh, Space, MeshBuilder, Mesh } from "babylonjs";
import { Environment } from "../environment/environment";
import * as GC from "../global/globalConstatnts";

class Hex {
    constructor(x: number, y: number) {

        this.center = {
            x: x,
            y: y
        };

        this.size = GC.GlobalConstatnts.Hex.Size;

    }

    size: number;
    private lines: LinesMesh = null;
    center: Center = null;
    points: Vector3[] = [];
    posX: number = 0;
    posY: number = 0;

    //Получение графической модели 
    public get Mesh(): LinesMesh {
        return this.lines;
    }

    //Отрисовка точек многоугольника
    private hexCorner(center, size, i): Vector3 {
        var angle_deg = 60 * i + 30;
        var angle_rad = Math.PI / 180 * angle_deg;
        return new BABYLON.Vector3(center.x + size * Math.cos(angle_rad), center.y + size * Math.sin(angle_rad));
    }

    //Отрисовка многоугольника
    drawing() {
        for (let index = 0; index <= GC.GlobalConstatnts.Hex.NumberOfSides; index++) {
            var itemPoint = this.hexCorner(this.center, this.size, index);
            this.points.push(itemPoint);
        }

        this.lines = BABYLON.MeshBuilder.CreateLines("lines", { points: this.points }, Environment.scene);


    }

}

class Center {
    x: number = 0;
    y: number = 0;
}

export { Hex };