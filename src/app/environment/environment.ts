import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import { GeneralCamera } from "./entities/general/generalCamera";
import { WorldScene } from "./entities/general/worldScene";
import { Cursor } from "./entities/general/cursor";
import { Display } from "./entities/general/display";
import { MeshManager } from "./meshManager";
import { GeneralLight } from "./entities/general/generalLight";
import { CenterAncor } from "./entities/general/centerAncor";
import { GlobalMap } from "../map/globalMap";

class Environment {
    private static _engine: Engine;
    private static _scene: WorldScene;
    private static _camera: GeneralCamera;
    private static _light: GeneralLight;
    private static _cursor: Cursor;
    private static _display: Display;
    private static _centerAncor: CenterAncor;

    static get engine(): Engine {
        return this._engine;
    }
    static get scene(): WorldScene {
        return this._scene;
    }
    static get centerAncor(): CenterAncor {
        return this._centerAncor;
    }
    static get camera(): GeneralCamera {
        return this._camera;
    }
    static get light(): GeneralLight {
        return this._light;
    }
    static get cursor(): Cursor {
        return this._cursor;
    }
    static get display(): Display {
        return this._display;
    }

    public static init(canvas: any) {
        this._display = new Display(canvas);
        this._engine = new Engine(canvas, true);
        this._scene = new WorldScene(this._engine);

        GlobalMap.drawing();

        this._centerAncor = new CenterAncor(Environment.scene.sceneObject);
        this._camera = new GeneralCamera(this._scene.sceneObject, this._centerAncor.objectAnchor, canvas);
        this._light = new GeneralLight(this._scene.sceneObject);
        this._cursor = new Cursor(this._scene.sceneObject);
        MeshManager.init(canvas)
    }
}


export { Environment };