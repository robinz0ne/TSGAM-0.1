import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import { Camera } from "./camera";

class Environment {
    static engine: Engine;
    static scene: Scene;
    static camera: Camera;
    static light: HemisphericLight;

    public static init(canvas: any) {
        this.engine = new Engine(canvas, true);
        this.scene = new Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0);
        this.camera = new Camera(this.scene, canvas);
        this.light = new HemisphericLight("light", new Vector3(1, 1, 0), this.scene);
    }
}

export { Environment };