import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import { Environment } from "../../environment";

class Display {
    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this.initEvents();
    }

    private _canvas: HTMLCanvasElement;

    get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    initEvents() {
        this._canvas.addEventListener("pointermove", this.onPointerMove, false);
    }


    private onPointerDown() {

    }

    private onPointerUp() {

    }

    private onPointerMove(e: any) {

        Environment.cursor.onMove(e);
    }
}

export { Display };