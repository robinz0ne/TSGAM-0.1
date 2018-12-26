import { Engine, Scene, ArcRotateCamera, UniversalCamera, FreeCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";
import { Environment } from "../environment/environment";
import { KeyBoardStates } from "../states/keyBoardStates";

class ActionsKeyboard {

    //нажата клавиша "стрелка вверх"
    private static _buttonUpOnDown: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyDownTrigger,
            parameter: 38
        },
        function (e) {
            KeyBoardStates.isButtonUpPressed = true;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    //отпущена клавиша "стрелка вверх"
    private static _buttonUpOnUp: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyUpTrigger,
            parameter: 38
        },
        function (e) {
            KeyBoardStates.isButtonUpPressed = false;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    //нажата клавиша "стрелка вниз"
    private static _buttonDownOnDown: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyDownTrigger,
            parameter: 40
        },
        function () {
            KeyBoardStates.isButtonDownPressed = true;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    //отпущена клавиша "стрелка вниз"
    private static _buttonDownOnUp: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyUpTrigger,
            parameter: 40
        },
        function () {
            KeyBoardStates.isButtonDownPressed = false;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    //нажата клавиша "стрелка влево"
    private static _buttonLeftOnDown: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyDownTrigger,
            parameter: 37
        },
        function () {
            KeyBoardStates.isButtonLeftPressed = true;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    //отпущена клавиша "стрелка влево"
    private static _buttonLeftOnUp: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyUpTrigger,
            parameter: 37
        },
        function () {
            KeyBoardStates.isButtonLeftPressed = false;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    //нажата клавиша "стрелка вправо"
    private static _buttonRightOnDown: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyDownTrigger,
            parameter: 39
        },
        function () {
            KeyBoardStates.isButtonRightPressed = true;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    //отпущена клавиша "стрелка вправо"
    private static _buttonRightOnUp: BABYLON.ExecuteCodeAction = new BABYLON.ExecuteCodeAction(
        {
            trigger: BABYLON.ActionManager.OnKeyUpTrigger,
            parameter: 39
        },
        function () {
            KeyBoardStates.isButtonRightPressed = false;
            KeyBoardStates.isMovedButtonsPressed = ActionsKeyboard.isMovedPressed();
        }
    );

    static get buttonUpOnDown(): BABYLON.ExecuteCodeAction {
        return this._buttonUpOnDown;
    }
    static get buttonUpOnUp(): BABYLON.ExecuteCodeAction {
        return this._buttonUpOnUp;
    }
    static get buttonDownOnDown(): BABYLON.ExecuteCodeAction {
        return this._buttonDownOnDown;
    }
    static get buttonDownOnUp(): BABYLON.ExecuteCodeAction {
        return this._buttonDownOnUp;
    }
    static get buttonLeftOnDown(): BABYLON.ExecuteCodeAction {
        return this._buttonLeftOnDown;
    }
    static get buttonLeftOnUp(): BABYLON.ExecuteCodeAction {
        return this._buttonLeftOnUp;
    }
    static get buttonRightOnDown(): BABYLON.ExecuteCodeAction {
        return this._buttonRightOnDown;
    }
    static get buttonRightOnUp(): BABYLON.ExecuteCodeAction {
        return this._buttonRightOnUp;
    }

    private static isMovedPressed(): Boolean {
        if (KeyBoardStates.isButtonUpPressed ||
            KeyBoardStates.isButtonDownPressed ||
            KeyBoardStates.isButtonLeftPressed ||
            KeyBoardStates.isButtonRightPressed) {
            return true;
        } else {
            return false;
        }

    }
}


export { ActionsKeyboard };