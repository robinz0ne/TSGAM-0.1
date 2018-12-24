export namespace GlobalConstatnts {
    export class Map {

        //Количество многоугольников по горизонтали
        public static get HexCountHorizontal(): number {
            return 100;
        }

        //Количество многоугольников по вертикали
        public static get HexCountVertical(): number {
            return 100;
        }

    }

    export class Hex {

        //Размер многоугольника
        public static get Size(): number {
            return 1;
        }

        //Количесво сторон многоугольника
        public static get NumberOfSides(): number {
            return 6;
        }

    }

    export class Camera {

        //Стартовая позиция камеры по X
        public static get InitX(): number {
            return 0;
        }

        //Стартовая позиция камеры по Y
        public static get InitY(): number {
            return 0;
        }

        //Стартовая позиция камеры по Z
        public static get InitZ(): number {
            return -10;
        }

    }
}