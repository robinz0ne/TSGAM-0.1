import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh, ICameraInput, Nullable } from "babylonjs";
import { CenterAncor } from "./centerAncor";
import * as GC from "../../../global/globalConstatnts";
import { Environment } from "../../environment";

class GeneralCamera {
    constructor(scene: Scene, centerAncor: Mesh, canvas: any) {
        this._cameraObject = new FreeCamera("GeneralCamera", new Vector3(GC.GlobalConstatnts.Camera.InitX, GC.GlobalConstatnts.Camera.InitY, GC.GlobalConstatnts.Camera.InitZ), scene);
        this._cameraObject.setTarget(Vector3.Zero());
        this._cameraObject.attachControl(canvas, false);
        this._cameraObject.inputs.remove(this._cameraObject.inputs.attached.mouse);
        this._cameraObject.inputs.removeByType("FreeCameraKeyboardMoveInput");

      //  this._cameraObject.inputs.add(new OrthographicCameraController());

        this._cameraObject.position.x = centerAncor.position.x;
        this._cameraObject.position.y = centerAncor.position.y;
    }

    private _cameraObject: FreeCamera;

    get cameraObject(): FreeCamera {
        return this._cameraObject;
    }

   public onMoved(){
        this.cameraObject.position.x = Environment.centerAncor.objectAnchor.position.x;
        this.cameraObject.position.y = Environment.centerAncor.objectAnchor.position.y;
       // this.cameraObject.position.z = Environment.centerAncor.objectAnchor.position.z;
    }
}

class OrthographicCameraController implements ICameraInput<FreeCamera> {
    camera: FreeCamera;
    private _onKeyDown;
    private _onKeyUp;
    private _onLostFocus;
    private _keys = [];
    private keysLeft = [37];
    private keysRight = [39];
    private keysUp = [38];
    private keysDown = [40];
    private sensibility = 0.1;

    // touchAngularSensibility: number;
    // touchMoveSensibility: number;

    attachControl(element: HTMLElement, noPreventDefault?: boolean): void {

        var _this = this;
        if (!this._onKeyDown) {
            element.tabIndex = 1;
            this._onKeyDown = function (evt) {
                if (_this.keysLeft.indexOf(evt.keyCode) !== -1 ||
                    _this.keysRight.indexOf(evt.keyCode) !== -1||
                    _this.keysUp.indexOf(evt.keyCode) !== -1||
                    _this.keysDown.indexOf(evt.keyCode) !== -1) {
                    var index = _this._keys.indexOf(evt.keyCode);
                    if (index === -1) {
                        _this._keys.push(evt.keyCode);
                    }
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                }
            };
            this._onKeyUp = function (evt) {
                if (_this.keysLeft.indexOf(evt.keyCode) !== -1 ||
                    _this.keysRight.indexOf(evt.keyCode) !== -1||
                    _this.keysUp.indexOf(evt.keyCode) !== -1||
                    _this.keysDown.indexOf(evt.keyCode) !== -1) {
                    var index = _this._keys.indexOf(evt.keyCode);
                    if (index >= 0) {
                        _this._keys.splice(index, 1);
                    }
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                }
            };

            element.addEventListener("keydown", this._onKeyDown, false);
            element.addEventListener("keyup", this._onKeyUp, false);
            BABYLON.Tools.RegisterTopRootEvents([
                { name: "blur", handler: this._onLostFocus }
            ]);
        }
    }
    detachControl(element: HTMLElement): void {
        if (this._onKeyDown) {
            element.removeEventListener("keydown", this._onKeyDown);
            element.removeEventListener("keyup", this._onKeyUp);
            BABYLON.Tools.UnregisterTopRootEvents([
                { name: "blur", handler: this._onLostFocus }
            ]);
            this._keys = [];
            this._onKeyDown = null;
            this._onKeyUp = null;
        }
    }
    checkInputs(): void {
        if (this._onKeyDown) {
            var camera = this.camera;
            // Keyboard
            for (var index = 0; index < this._keys.length; index++) {
                var keyCode = this._keys[index];
                if (this.keysLeft.indexOf(keyCode) !== -1) {
                    camera.position.x -= this.sensibility;
                }
                else if (this.keysRight.indexOf(keyCode) !== -1) {
                    camera.position.x += this.sensibility;
                }
                else if (this.keysUp.indexOf(keyCode) !== -1) {
                    camera.position.y += this.sensibility;
                }
                else if (this.keysDown.indexOf(keyCode) !== -1) {
                    camera.position.y -= this.sensibility;
                }
            }
        }
    }
    getClassName(): string {
        return 'OrthographicCameraController';
    }
    getSimpleName(): string {
        return 'OrthographicController';
    }
}


export { GeneralCamera };