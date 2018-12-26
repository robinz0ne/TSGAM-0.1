import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import { ActionsKeyboard } from "../../../actions/actionsKeyboard";
import { KeyBoardStates } from "../../../states/keyBoardStates";
import { Environment } from "../../../environment/environment";

class WorldScene {
    constructor(engine: Engine) {
        this._sceneObject = new Scene(engine);
        this._sceneObject.clearColor = new BABYLON.Color4(0, 0, 0);
        this._sceneObject.actionManager = new BABYLON.ActionManager(this._sceneObject);

        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonUpOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonUpOnUp);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonDownOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonDownOnUp);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonLeftOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonLeftOnUp);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonRightOnDown);
        this._sceneObject.actionManager.registerAction(ActionsKeyboard.buttonRightOnUp);

        //костыль, для глобальной обработки нажатия клавиш, потому что через ActionManager работает плохо
        this._sceneObject.registerBeforeRender(function () {
            if (KeyBoardStates.isMovedButtonsPressed) {
                //Если нажата хотя бы одна клавиша отвечающая за управление и сцена не заблокирована - запускаем событие движения центр-якоря
                if (!Environment.scene.isLocked) {
                    Environment.centerAncor.onMoved();
                }
            }
        });

        this._sceneObject.onPointerDown = function (evt) {
            if (!this.isLocked) {
                Environment.display.canvas.requestPointerLock = Environment.display.canvas.requestPointerLock || Environment.display.canvas.msRequestPointerLock || Environment.display.canvas.mozRequestPointerLock || Environment.display.canvas.webkitRequestPointerLock;
                if (Environment.display.canvas.requestPointerLock) {
                    Environment.display.canvas.requestPointerLock();
                }
            }
        };

    }

    private _sceneObject: Scene;

    isLocked: Boolean = true;

    get sceneObject(): Scene {
        return this._sceneObject;
    }



    onRender() {

        this._sceneObject.render();
    }
}

export { WorldScene };