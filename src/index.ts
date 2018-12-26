import { Engine, Scene, ArcRotateCamera, UniversalCamera, HemisphericLight, FreeCamera, Vector3, MeshBuilder, Mesh, Space } from "babylonjs";
import { Initializer } from "./app/initializer";
import { Environment } from "./app/environment/environment";

import { CenterAncor } from "./app/environment/entities/general/centerAncor";

Initializer.init(document.getElementById("renderCanvas"));

// document.onmousemove = function (event) {
//     var xp = event.clientX;     // Get the horizontal coordinate
//     var yp = event.clientY;     // Get the vertical coordinate
//     var coor = "X coords: " + xp + ", Y coords: " + yp;
//     var HexXSpacing = 3;
//     var HexYSpacing = 3;


//     var x = 1.0 * (xp - Map.HexCoords["0,0"].x) / HexXSpacing;
//     var y = 1.0 * (xp - Map.HexCoords["0,0"].y) / HexYSpacing;
//     var z = -0.5 * x - y;
//     y = -0.5 * x + y;
//     var ix = Math.floor(x + 0.5);
//     var iy = Math.floor(y + 0.5);
//     var iz = Math.floor(z + 0.5);
//     var s = ix + iy + iz;

//     debugger;

//     if( s ){
//         var abs_dx = Math.abs(ix-x);
//         var abs_dy = Math.abs(iy-y);
//         var abs_dz = Math.abs(iz-z);

//         if( abs_dx >= abs_dy && abs_dx >= abs_dz )
//             ix -= s;
//         else if( abs_dy >= abs_dx && abs_dy >= abs_dz )
//             iy -= s;
//         else
//             iz -= s;
//     }

//     var foo = Map.HexCoords["0,0"];//Map.HexCoords[ix.toString()+ "," + (( iy - iz + (1-ix%2) ) / 2).toString()];
//      console.clear();
//      console.log(foo);
//      console.log(ix.toString()+ "," + (( iy - iz + (1-ix%2) ) / 2).toString());
     
// }



Environment.engine.runRenderLoop(() => {
    Environment.scene.onRender();
});