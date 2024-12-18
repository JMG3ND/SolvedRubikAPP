import * as THREE from 'three';

export class RubikPiece {
    static number = 0;
    static colors = {
        red: 0xff012d,
        orange: 0xff5500,
        yellow: 0xcacd00,
        white: 0xdceae1,
        blue: 0x0094c6,
        green: 0x0aaa0a,
        grey: 0x858585
    }
    constructor(x, y, z, oll = false, f2l = false) {
        this._id = ++RubikPiece.number;
        this._piece = new THREE.Mesh();
        this._oll = oll;
        this._f2l = f2l;
        this.addPrincipalBox();
        this.addColorBox(x, y, z);
        this.definePositionBox(x, y, z);
    }

    addPrincipalBox() {
        const geometryPrincipalBox = new THREE.BoxGeometry(1, 1, 1);
        const materialPrincipalBox = new THREE.MeshBasicMaterial({ color: 0x595959 });
        const principalBox = new THREE.Mesh(geometryPrincipalBox, materialPrincipalBox);
        this._piece.add(principalBox);
    }
    addColorBox(x, y, z) {
        if (x != 0) {
            const geometryColorBox_x = new THREE.BoxGeometry(0.05, 0.9, 0.9);
            let materialColorBox_x;
            if ((this._oll && y == 1) || (this._f2l && y == 1)) {
                materialColorBox_x = new THREE.MeshBasicMaterial({ color: RubikPiece.colors.grey });
            } else {
                materialColorBox_x = new THREE.MeshBasicMaterial({ color: x == 1 ? RubikPiece.colors.red : RubikPiece.colors.orange });
            }
            const colorBox_x = new THREE.Mesh(geometryColorBox_x, materialColorBox_x);
            colorBox_x.position.x += 0.5 * x;
            this.piece.add(colorBox_x);
        }

        if (y != 0) {
            const geometryColorBox_y = new THREE.BoxGeometry(0.9, 0.05, 0.9);
            let materialColorBox_y;
            if (this._f2l && y == 1) {
                materialColorBox_y = new THREE.MeshBasicMaterial({ color: RubikPiece.colors.grey });
            } else {
                materialColorBox_y = new THREE.MeshBasicMaterial({ color: y == 1 ? RubikPiece.colors.yellow : RubikPiece.colors.white });
            }
            const colorBox_y = new THREE.Mesh(geometryColorBox_y, materialColorBox_y);
            colorBox_y.position.y += 0.5 * y;
            this.piece.add(colorBox_y);
        }

        if (z != 0) {
            const geometryColorBox_z = new THREE.BoxGeometry(0.9, 0.9, 0.05);
            let materialColorBox_z;
            if (this._oll && y == 1 || this._f2l && y == 1) {
                materialColorBox_z = new THREE.MeshBasicMaterial({ color: RubikPiece.colors.grey });
            } else {
                materialColorBox_z = new THREE.MeshBasicMaterial({ color: z == 1 ? RubikPiece.colors.blue : RubikPiece.colors.green });
            }
            const colorBox_z = new THREE.Mesh(geometryColorBox_z, materialColorBox_z);
            colorBox_z.position.z += 0.5 * z;
            this.piece.add(colorBox_z);
        }
    }
    definePositionBox(x, y, z) {
        this._piece.position.x += x;
        this._piece.position.y += y;
        this._piece.position.z += z;
    }

    get piece() {
        return this._piece;
    }
}