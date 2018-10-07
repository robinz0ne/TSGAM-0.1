 import { Engine, Scene, ArcRotateCamera, HemisphericLight, Vector3, MeshBuilder, Mesh } from "babylonjs";

 var canvas: any = document.getElementById("renderCanvas");
 var engine: Engine = new Engine(canvas, true);

function createScene(): Scene {
    var scene: Scene = new Scene(engine);

    var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
    camera.attachControl(canvas, false);

    var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);

  //  var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

   // var myBox = BABYLON.MeshBuilder.CreateBox("myBox", {height: 1, width: 1 , depth: 1}, scene);
  
   var myGround = BABYLON.MeshBuilder.CreateGround("myGround", {width: 6, height: 4, subdivisions: 4}, scene);
  
   return scene;
}

var scene: Scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});