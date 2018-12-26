import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh, AbstractMesh } from "babylonjs";


class MeshManager {

    static canvas: HTMLCanvasElement;

    // static canvas = engine.getRenderingCanvas();
    // var startingPoint;
    currentMesh: AbstractMesh;
    static centerAnchor: Mesh;


    public static init(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

}

export { MeshManager };