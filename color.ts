/**
 * A color interface
 * @date 1/10/2024 - 2:49:15 PM
 *
 * @interface Color
 * @typedef {Color}
 */
interface Color {
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @type {number}
     */
    r: number;
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @type {number}
     */
    g: number;
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @type {number}
     */
    b: number;
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @type {number}
     */
    a: number;

    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @returns {Color}
     */
    parse(): Color;
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @returns {Color}
     */
    fromHex(): Color;
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @returns {Color}
     */
    fromRGB(): Color;
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @returns {Color}
     */
    fromHSL(): Color;
    /**
     * Description placeholder
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @returns {string}
     */
    toString(): string;
};

/**
 * All the color names
 * @date 1/10/2024 - 2:49:15 PM
 *
 * @typedef {ColorStr}
 */
type ColorStr = 
    "aliceblue"|
    "antiquewhite"|
    "aqua"|
    "aquamarine"|
    "azure"|
    "beige"|
    "bisque"|
    "black"|
    "blanchedalmond"|
    "blue" |
    "blueviolet"|
    "brown"|
    "burlywood"|
    "cadetblue"|
    "chartreuse"|
    "chocolate"|
    "coral"|
    "cornflowerblue"|
    "cornsilk"|
    "crimson"|
    "cyan"|
    "darkblue"|
    "darkcyan"|
    "darkgoldenrod"|
    "darkgray"|
    "darkgreen"|
    "darkgrey"|
    "darkkhaki"|
    "darkmagenta"|
    "darkolivegreen"|
    "darkorange"|
    "darkorchid"|
    "darkred"|
    "darksalmon"|
    "darkseagreen"|
    "darkslateblue"|
    "darkslategray"|
    "darkslategrey"|
    "darkturquoise"|
    "darkviolet"|
    "deeppink"|
    "deepskyblue"|
    "dimgray"|
    "dimgrey"|
    "dodgerblue"|
    "firebrick"|
    "floralwhite"|
    "forestgreen"|
    "fuchsia"|
    "gainsboro"|
    "ghostwhite"|
    "gold"|
    "goldenrod"|
    "gray"|
    "green"|
    "greenyellow"|
    "grey"|
    "honeydew"|
    "hotpink"|
    "indianred"|
    "indigo"|
    "ivory"|
    "khaki"|
    "lavender"|
    "lavenderblush"|
    "lawngreen"|
    "lemonchiffon"|
    "lightblue"|
    "lightcoral"|
    "lightcyan"|
    "lightgoldenrodyellow"|
    "lightgray"|
    "lightgreen"|
    "lightgrey"|
    "lightpink"|
    "lightsalmon"|
    "lightseagreen"|
    "lightskyblue"|
    "lightslategray"|
    "lightslategrey"|
    "lightsteelblue"|
    "lightyellow"|
    "lime"|
    "limegreen"|
    "linen"|
    "magenta"|
    "maroon"|
    "mediumaquamarine"|
    "mediumblue"|
    "mediumorchid"|
    "mediumpurple"|
    "mediumseagreen"|
    "mediumslateblue"|
    "mediumspringgreen"|
    "mediumturquoise"|
    "mediumvioletred"|
    "midnightblue"|
    "mintcream"|
    "mistyrose"|
    "moccasin"|
    "navajowhite"|
    "navy"|
    "oldlace"|
    "olive"|
    "olivedrab"|
    "orange"|
    "orangered"|
    "orchid"|
    "palegoldenrod"|
    "palegreen"|
    "paleturquoise"|
    "palevioletred"|
    "papayawhip"|
    "peachpuff"|
    "peru"|
    "pink"|
    "plum"|
    "powderblue"|
    "purple"|
    "red"|
    "rosybrown"|
    "royalblue"|
    "saddlebrown"|
    "salmon"|
    "sandybrown"|
    "seagreen"|
    "seashell"|
    "sienna"|
    "silver"|
    "skyblue"|
    "slateblue"|
    "slategray"|
    "slategrey"|
    "snow"|
    "springgreen"|
    "steelblue"|
    "tan"|
    "teal"|
    "thistle"|
    "tomato"|
    "transparent"|
    "turquoise"|
    "violet"|
    "wheat"|
    "white"|
    "whitesmoke"|
    "yellow"|
    "yellowgreen"|
    "rebeccapurple";



/**
 * All the bootstrap colors
 * @date 1/10/2024 - 2:49:15 PM
 *
 * @typedef {BootstrapColor}
 */
type BootstrapColor = 
    "primary"|
    "secondary"|
    "success"|
    "info"|
    "warning"|
    "danger"|
    "light"|
    "dark"|
    "indigo"|
    "indigo-light"|
    "indigo-dark"|
    "teal"|
    "teal-light"|
    "teal-dark"|
    "orange"|
    "orange-light"|
    "orange-dark"|
    "pink"|
    "pink-light"|
    "pink-dark"|
    "purple"|
    "purple-light"|
    "purple-dark"|
    "navy"|
    "navy-light"|
    "navy-dark"|
    "yellow"|
    "yellow-light"|
    "yellow-dark"|
    "lime"|
    "lime-light"|
    "lime-dark"|
    "gray"|
    "gray-light"|
    "gray-dark"|
    "brown"|
    "brown-light"|
    "brown-dark"|
    "grape"|
    "grape-light"|
    "grape-dark"|
    "vermillion"|
    "vermillion-light"|
    "vermillion-dark"|
    "steel"|
    "steel-light"|
    "steel-dark"|
    "green"|
    "green-light"|
    "green-dark";



/**
 * A color array of r,g,b,a
 * @date 1/10/2024 - 2:49:15 PM
 *
 * @typedef {colorArray}
 */
type colorArray = [number, number, number, number];

/**
 * Color object containing their name and respective color array
 * @date 1/10/2024 - 2:49:15 PM
 *
 * @typedef {colors}
 */
type colors = {
    [key: string]:colorArray;
}

/**
 * Closest color object containing the name, distance, and color
 * @date 1/10/2024 - 2:49:15 PM
 *
 * @typedef {ClosestColor}
 */
type ClosestColor = {
    name: string;
    distance: number;
    color: Color;
};

























/**
 * A color class that can be used to parse, modify, and convert colors
 * @date 1/10/2024 - 2:49:15 PM
 *
 * @class Color
 * @typedef {Color}
 * @implements {Color}
 */
class Color implements Color {


    /**
     * Math functions
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @readonly
     * @type {{ Vector: typeof Vector; getVector(from: Color, to: Color): Vector; threePointPlane(c1: Color, c2: Color, c3: Color): Plane; getTransformMatrix(normal: Vector, angle: number): Matrix; }}
     */
    static get math() {
        class Matrix {
            constructor(public matrix: number[][]) {}


            add(m: Matrix): Matrix {
                const a = this.matrix;
                const b = m.matrix;

                const aRows = a.length;
                const aCols = a[0].length;
                const bRows = b.length;
                const bCols = b[0].length;

                if (aRows !== bRows || aCols !== bCols) {
                    throw new Error('Matrix A rows must match matrix B rows and matrix A columns must match matrix B columns');
                }

                const result = new Array(aRows);

                for (let r = 0; r < aRows; ++r) {
                    result[r] = new Array(aCols);

                    for (let c = 0; c < aCols; ++c) {
                        result[r][c] = a[r][c] + b[r][c];
                    }
                }

                return new Matrix(result);
            }


            multiply(m: Matrix): Matrix {
                const a = this.matrix;
                const b = m.matrix;

                const aRows = a.length;
                const aCols = a[0].length;
                const bRows = b.length;
                const bCols = b[0].length;

                if (aCols !== bRows) {
                    throw new Error('Matrix A columns must match matrix B rows');
                }

                const result = new Array(aRows);

                for (let r = 0; r < aRows; ++r) {
                    result[r] = new Array(bCols);

                    for (let c = 0; c < bCols; ++c) {
                        result[r][c] = 0;

                        for (let i = 0; i < aCols; ++i) {
                            result[r][c] += a[r][i] * b[i][c];
                        }
                    }
                }

                return new Matrix(result);
            }



            scale(n: number): Matrix {
                const m = this.matrix.map(row => row.map(n2 => n2 * n));
                return new Matrix(m);
            }

            get modify() {
                const m = this;

                return {
                    scale(n: number): Matrix {
                        m.matrix = m.scale(n).matrix;
                        return m;
                    }
                }
            }

            multiplyVector(v: Vector): Vector {
                if (this.matrix.length !== 3 || this.matrix[0].length !== 3) {
                    throw new Error('Matrix must be 3x3');
                }

                const x = this.matrix[0][0] * v.x.magnitude + 
                          this.matrix[0][1] * v.y.magnitude + 
                          this.matrix[0][2] * v.z.magnitude;
                const y = this.matrix[1][0] * v.x.magnitude + 
                          this.matrix[1][1] * v.y.magnitude + 
                          this.matrix[1][2] * v.z.magnitude;
                const z = this.matrix[2][0] * v.x.magnitude + 
                          this.matrix[2][1] * v.y.magnitude + 
                          this.matrix[2][2] * v.z.magnitude;

                return new Vector(v.point, [x, y, z]);
            }



        }

        class Matrix1D {
            constructor(public matrix: number[]) {}

            add(m: Matrix1D): Matrix1D {
                const a = this.matrix;
                const b = m.matrix;

                const aRows = a.length;
                const bRows = b.length;

                if (aRows !== bRows) {
                    throw new Error('Matrix A rows must match matrix B rows');
                }

                const result = new Array(aRows);

                for (let r = 0; r < aRows; ++r) {
                    result[r] = a[r] + b[r];
                }

                return new Matrix1D(result);
            }

            multiply(m: Matrix1D): Matrix1D {
                const a = this.matrix;
                const b = m.matrix;

                const aRows = a.length;
                const bRows = b.length;

                if (aRows !== bRows) {
                    throw new Error('Matrix A rows must match matrix B rows');
                }

                const result = new Array(aRows);

                for (let r = 0; r < aRows; ++r) {
                    result[r] = a[r] * b[r];
                }

                return new Matrix1D(result);
            }

            scale(n: number): Matrix1D {
                const m = this.matrix.map(n2 => n2 * n);
                return new Matrix1D(m);
            }

            get modify() {
                const m = this;

                return {
                    scale(n: number): Matrix1D {
                        m.matrix = m.scale(n).matrix;
                        return m;
                    }
                }
            }
        }


        class Vector {
            constructor(public point: Color, public rate: [number, number, number]) {}


            get magnitude(): number {
                return Math.sqrt(this.x.magnitude ** 2 + this.y.magnitude ** 2 + this.z.magnitude ** 2);
            }



            get x(): {
                ft: (x: number) => number;
                pos: number;
                magnitude: number
            } {
                const v = this;
                return {
                    ft: (t: number) => this.rate[0] * t,
                    pos: v.point.math.x,
                    magnitude: this.rate[0]
                }
            }

            get y(): {
                ft: (t: number) => number;
                pos: number;
                magnitude: number
            } {
                const v = this;
                return {
                    ft: (x: number) => this.rate[1] * x,
                    pos: v.point.math.y,
                    magnitude: this.rate[1]
                }
            }

            get z(): {
                ft: (t: number) => number;
                pos: number;
                magnitude: number
            } {
                const v = this;
                return {
                    ft: (x: number) => this.rate[2] * x,
                    pos: v.point.math.z,
                    magnitude: this.rate[2]
                }
            }


            angle(v: Vector): number {
                return Math.acos(this.dot(v) / (this.magnitude * v.magnitude));
            }



            cross(v: Vector): Vector {
                const ax = this.x.magnitude;
                const ay = this.y.magnitude;
                const az = this.z.magnitude;

                const bx = v.x.magnitude;
                const by = v.y.magnitude;
                const bz = v.z.magnitude;

                return new Vector(this.point, [
                    ay * bz - az * by,
                    az * bx - ax * bz,
                    ax * by - ay * bx
                ]);
            }

            dot(v: Vector): number {
                return this.rate[0] * v.rate[0] + this.rate[1] * v.rate[1] + this.rate[2] * v.rate[2];
            }

            add(v: Vector): Vector {
                return new Vector(this.point, [
                    this.rate[0] + v.rate[0],
                    this.rate[1] + v.rate[1],
                    this.rate[2] + v.rate[2]
                ]);
            }


            intersect(v: Vector): Color | undefined {
                // magnitude of the cross product is the volume of the parallelepiped
                // if the volume is 0, the vectors are parallel
                if (this.cross(v).magnitude === 0) return undefined;

                const m1x = this.x.magnitude;
                const m1y = this.y.magnitude;
                const m1z = this.z.magnitude;

                const b1x = this.x.pos;
                const b1y = this.y.pos;
                const b1z = this.z.pos;

                const m2x = v.x.magnitude;
                const m2y = v.y.magnitude;
                const m2z = v.z.magnitude;

                const b2x = v.x.pos;
                const b2y = v.y.pos;
                const b2z = v.z.pos;



                // parametric components
                const fx1 = (t: number) => m1x * t + b1x;
                const fy1 = (t: number) => m1y * t + b1y;
                const fz1 = (t: number) => m1z * t + b1z;

                const fx2 = (t: number) => m2x * t + b2x;
                const fy2 = (t: number) => m2y * t + b2y;
                const fz2 = (t: number) => m2z * t + b2z;

                const t = (b2x - b1x) / (m1x - m2x);
                const x1 = fx1(t);
                const y1 = fy1(t);
                const z1 = fz1(t);
                const x2 = fx2(t);
                const y2 = fy2(t);
                const z2 = fz2(t);

                const equal = (tolerance: number) => (a: number, b: number) => {
                    const e = Math.abs(a - b) <= tolerance;
                    return e;
                }

                type Point = {
                    x: number;
                    y: number;
                    z: number;
                }


                const pointEqual = (tolerance: number) => (a: Point, b: Point) => {
                    const e = equal(tolerance);
                    const x = e(a.x, b.x);
                    const y = e(a.y, b.y);
                    const z = e(a.z, b.z);

                    console.log(a, b, x, y, z);

                    return x && y && z;
                }


                try {
                    return new Color(
                        x1 * 255,
                        y1 * 255,
                        z1 * 255
                    );
                } catch (e) {
                    console.log('Colors do not intersect');
                }
            }


            intersectPlane(plane: Plane): Color {
                const normal = plane.normal;
                const point = plane.point;

                const t = (normal.x.magnitude * (point.r - this.point.r) + normal.y.magnitude * (point.g - this.point.g) + normal.z.magnitude * (point.b - this.point.b)) / (normal.x.magnitude * this.rate[0] + normal.y.magnitude * this.rate[1] + normal.z.magnitude * this.rate[2]);

                return new Color(this.point.r + this.rate[0] * t, this.point.g + this.rate[1] * t, this.point.b + this.rate[2] * t);
            }





            scale(n: number): Vector {
                return new Vector(this.point, [
                    this.rate[0] * n,
                    this.rate[1] * n,
                    this.rate[2] * n
                ]);
            }


            determinant(v: Vector): number {
                return this.cross(v).magnitude;
            }


            get modify() {
                const v = this;
                return {
                    scale(n: number): Vector {
                        const v2 = v.scale(n);
                        v.rate = v2.rate;
                        return v; 
                    }
                }
            }


            get plane(): Plane {
                return new Plane(this.point, this);
            }

            move(color: Color): Vector {
                return new Vector(color, this.rate);
            }
        }


        class Plane {
            constructor(public point: Color, public normal: Vector) {}


            normalTo(v: Vector): Vector {
                return this.normal.cross(v);
            }
        }




        return {
            Vector,
            getVector(from: Color, to: Color): Vector {
                return new Vector(from, [
                    to.math.x - from.math.x,
                    to.math.y - from.math.y,
                    to.math.z - from.math.z
                ]);
            },
            threePointPlane(c1: Color, c2: Color, c3: Color): Plane {
                const v1 = this.getVector(c1, c2);
                const v2 = this.getVector(c1, c3);

                const normal = v1.cross(v2);

                return new Plane(c1, normal);
            },
            getTransformMatrix(normal: Vector, angle: number): Matrix {
                const [x, y, z] = normal.rate;

                const cos = Math.cos(angle);
                const sin = Math.sin(angle);

                return new Matrix([
                    [cos + x ** 2 * (1 - cos), x * y * (1 - cos) - z * sin, x * z * (1 - cos) + y * sin],
                    [y * x * (1 - cos) + z * sin, cos + y ** 2 * (1 - cos), y * z * (1 - cos) - x * sin],
                    [z * x * (1 - cos) - y * sin, z * y * (1 - cos) + x * sin, cos + z ** 2 * (1 - cos)]
                ]);
            }
        }
    }




    /**
     * Parses a color string and returns a Color object
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @param {(string | ColorStr | BootstrapColor)} color
     * @returns {Color}
     */
    static parse(color: string | ColorStr | BootstrapColor):Color {
        // receives a css color string and returns a Color object
        // if the string is not a valid color, returns a Color object with the default color

        const bs = Color.fromBootstrap(color as BootstrapColor);
        if (bs) return bs;
        const cl = Color.fromName(color as ColorStr);
        if (cl) return cl;

        // remove spaces
        color = color.replace(/\s/g, '');

        // hex
        if (color[0] === '#') return Color.fromHex(color);
        else {

            // get numbers between parentheses
            let parsed = color.match(/\(([^)]+)\)/);

            // error parsing
            if (!parsed) return new Color('rgb(0,0,0)');


            const colors: number[] = parsed[1].split(',').map(n => parseInt(n, 10));

            switch (color.split('(')[0]) {
                case 'rgb':
                    return Color.fromRGB(colors[0], colors[1], colors[2], colors[3]);
                case 'hsl':
                    return Color.fromHSL(colors[0], colors[1], colors[2], colors[3]);
                default:
                    return new Color('rgb(0,0,0)');
            }
        }
    }

    /**
     * Returns a color from a hex string
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @param {string} hex
     * @returns {Color}
     */
    static fromHex(hex: string): Color {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        let a = parseInt(hex.slice(7, 9), 16) / 255;
        if (isNaN(a)) a = 1;

        return new Color(r, g, b, a);
    }

    /**
     * Returns a color from rgb values
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {?number} [a]
     * @returns {Color}
     */
    static fromRGB(r: number, g: number, b: number, a?: number): Color {
        return new Color(r, g, b, a);
    }

    /**
     * Returns a color from hsl values
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @param {number} h
     * @param {number} s
     * @param {number} l
     * @param {?number} [a]
     * @returns {Color}
     */
    static fromHSL(h: number, s: number, l: number, a?: number): Color {
        const params = ['hue', 'saturation', 'lightness'];
        [h,s,l].forEach((v, i) => {
            if (isNaN(v)) throw new Error(`Invalid ${params[i]}, ${v} is not a parsable number`);

            if (v > 1) {
                console.warn(`Invalid ${params[i]}, ${v} is greater than 1. It will be set to 1`);
                v = 1;
            }

            if (v < 0) {
                console.warn(`Invalid ${params[i]}, ${v} is less than 0. It will be set to 0`);
                v = 0;
            }
        });


        let r, g, b;

        if (s == 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p: number, q: number, t: number) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;

            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return new Color(r * 255, g * 255, b * 255, a);
    }

    /**
     * Returns a random color
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @returns {Color}
     */
    static random(): Color {
        return new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    }

    /**
     * Generates a color object from a name
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @template {ColorStr} T
     * @param {T} name
     * @returns {Color}
     */
    static fromName<T extends ColorStr>(name: T):Color;
    /**
     * Generates a color object from a name
     * @date 1/10/2024 - 2:49:15 PM
     *
     * @static
     * @param {ColorStr} name
     * @returns {(Color|undefined)}
     */
    static fromName(name: ColorStr):Color|undefined {
        const c = Color.colors[name];

        if (c) return new Color(...c);
    }

    /**
     * Generates a color object from a bootstrap name
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @static
     * @template {BootstrapColor} T
     * @param {T} name
     * @returns {Color}
     */
    static fromBootstrap<T extends BootstrapColor>(name: T):Color;
    /**
     * Generates a color object from a bootstrap name
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @static
     * @param {BootstrapColor} name
     * @returns {(Color | undefined)}
     */
    static fromBootstrap(name: BootstrapColor):Color | undefined {
        const c = Color.bootstrap[name];

        if (c) return new Color(...c);
    }

    /**
     * Generates a random color with a contrast to the given colors
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @static
     * @param {...Color[]} colors
     * @returns {Color}
     */
    static generateRandomWithContrast(...colors:Color[]):Color {
        type interval = {
            diff: number;
            hues: number[];
        }

        const hsls:number[] = colors.map(c => c.hsl.values[0]);
        
        const intervals = hsls.reduce((intervals, hue, i):interval[] => {
            const next = hsls[i + 1];
            if (next) {
                intervals.push({
                    diff: Math.abs(hue - next),
                    hues: [hue, next]
                });
            }

            return intervals;
        }, [] as interval[]);

        const max = Math.max(...intervals.map(i => i.diff));
        let int = intervals.find(i => i.diff === max);
        int = int || intervals[0];

        const [hue1, hue2] = int.hues;
        const hue = Math.random() * (hue2 - hue1) + hue1;
        
        const color = Color.fromHSL(hue, 0.5, 0.5);
        return color;
    }

    /**
     * All colors and their RGB values
     */
    static get colors(): {
        [key in ColorStr]: colorArray;
    } {
        return {
            "aliceblue": [240, 248, 255, 1],
            "antiquewhite": [250, 235, 215, 1],
            "aqua": [0, 255, 255, 1],
            "aquamarine": [127, 255, 212, 1],
            "azure": [240, 255, 255, 1],
            "beige": [245, 245, 220, 1],
            "bisque": [255, 228, 196, 1],
            "black": [0, 0, 0, 1],
            "blanchedalmond": [255, 235, 205, 1],
            "blue": [0, 0, 255, 1],
            "blueviolet": [138, 43, 226, 1],
            "brown": [165, 42, 42, 1],
            "burlywood": [222, 184, 135, 1],
            "cadetblue": [95, 158, 160, 1],
            "chartreuse": [127, 255, 0, 1],
            "chocolate": [210, 105, 30, 1],
            "coral": [255, 127, 80, 1],
            "cornflowerblue": [100, 149, 237, 1],
            "cornsilk": [255, 248, 220, 1],
            "crimson": [220, 20, 60, 1],
            "cyan": [0, 255, 255, 1],
            "darkblue": [0, 0, 139, 1],
            "darkcyan": [0, 139, 139, 1],
            "darkgoldenrod": [184, 134, 11, 1],
            "darkgray": [169, 169, 169, 1],
            "darkgreen": [0, 100, 0, 1],
            "darkgrey": [169, 169, 169, 1],
            "darkkhaki": [189, 183, 107, 1],
            "darkmagenta": [139, 0, 139, 1],
            "darkolivegreen": [85, 107, 47, 1],
            "darkorange": [255, 140, 0, 1],
            "darkorchid": [153, 50, 204, 1],
            "darkred": [139, 0, 0, 1],
            "darksalmon": [233, 150, 122, 1],
            "darkseagreen": [143, 188, 143, 1],
            "darkslateblue": [72, 61, 139, 1],
            "darkslategray": [47, 79, 79, 1],
            "darkslategrey": [47, 79, 79, 1],
            "darkturquoise": [0, 206, 209, 1],
            "darkviolet": [148, 0, 211, 1],
            "deeppink": [255, 20, 147, 1],
            "deepskyblue": [0, 191, 255, 1],
            "dimgray": [105, 105, 105, 1],
            "dimgrey": [105, 105, 105, 1],
            "dodgerblue": [30, 144, 255, 1],
            "firebrick": [178, 34, 34, 1],
            "floralwhite": [255, 250, 240, 1],
            "forestgreen": [34, 139, 34, 1],
            "fuchsia": [255, 0, 255, 1],
            "gainsboro": [220, 220, 220, 1],
            "ghostwhite": [248, 248, 255, 1],
            "gold": [255, 215, 0, 1],
            "goldenrod": [218, 165, 32, 1],
            "gray": [128, 128, 128, 1],
            "green": [0, 128, 0, 1],
            "greenyellow": [173, 255, 47, 1],
            "grey": [128, 128, 128, 1],
            "honeydew": [240, 255, 240, 1],
            "hotpink": [255, 105, 180, 1],
            "indianred": [205, 92, 92, 1],
            "indigo": [75, 0, 130, 1],
            "ivory": [255, 255, 240, 1],
            "khaki": [240, 230, 140, 1],
            "lavender": [230, 230, 250, 1],
            "lavenderblush": [255, 240, 245, 1],
            "lawngreen": [124, 252, 0, 1],
            "lemonchiffon": [255, 250, 205, 1],
            "lightblue": [173, 216, 230, 1],
            "lightcoral": [240, 128, 128, 1],
            "lightcyan": [224, 255, 255, 1],
            "lightgoldenrodyellow": [250, 250, 210, 1],
            "lightgray": [211, 211, 211, 1],
            "lightgreen": [144, 238, 144, 1],
            "lightgrey": [211, 211, 211, 1],
            "lightpink": [255, 182, 193, 1],
            "lightsalmon": [255, 160, 122, 1],
            "lightseagreen": [32, 178, 170, 1],
            "lightskyblue": [135, 206, 250, 1],
            "lightslategray": [119, 136, 153, 1],
            "lightslategrey": [119, 136, 153, 1],
            "lightsteelblue": [176, 196, 222, 1],
            "lightyellow": [255, 255, 224, 1],
            "lime": [0, 255, 0, 1],
            "limegreen": [50, 205, 50, 1],
            "linen": [250, 240, 230, 1],
            "magenta": [255, 0, 255, 1],
            "maroon": [128, 0, 0, 1],
            "mediumaquamarine": [102, 205, 170, 1],
            "mediumblue": [0, 0, 205, 1],
            "mediumorchid": [186, 85, 211, 1],
            "mediumpurple": [147, 112, 219, 1],
            "mediumseagreen": [60, 179, 113, 1],
            "mediumslateblue": [123, 104, 238, 1],
            "mediumspringgreen": [0, 250, 154, 1],
            "mediumturquoise": [72, 209, 204, 1],
            "mediumvioletred": [199, 21, 133, 1],
            "midnightblue": [25, 25, 112, 1],
            "mintcream": [245, 255, 250, 1],
            "mistyrose": [255, 228, 225, 1],
            "moccasin": [255, 228, 181, 1],
            "navajowhite": [255, 222, 173, 1],
            "navy": [0, 0, 128, 1],
            "oldlace": [253, 245, 230, 1],
            "olive": [128, 128, 0, 1],
            "olivedrab": [107, 142, 35, 1],
            "orange": [255, 165, 0, 1],
            "orangered": [255, 69, 0, 1],
            "orchid": [218, 112, 214, 1],
            "palegoldenrod": [238, 232, 170, 1],
            "palegreen": [152, 251, 152, 1],
            "paleturquoise": [175, 238, 238, 1],
            "palevioletred": [219, 112, 147, 1],
            "papayawhip": [255, 239, 213, 1],
            "peachpuff": [255, 218, 185, 1],
            "peru": [205, 133, 63, 1],
            "pink": [255, 192, 203, 1],
            "plum": [221, 160, 221, 1],
            "powderblue": [176, 224, 230, 1],
            "purple": [128, 0, 128, 1],
            "red": [255, 0, 0, 1],
            "rosybrown": [188, 143, 143, 1],
            "royalblue": [65, 105, 225, 1],
            "saddlebrown": [139, 69, 19, 1],
            "salmon": [250, 128, 114, 1],
            "sandybrown": [244, 164, 96, 1],
            "seagreen": [46, 139, 87, 1],
            "seashell": [255, 245, 238, 1],
            "sienna": [160, 82, 45, 1],
            "silver": [192, 192, 192, 1],
            "skyblue": [135, 206, 235, 1],
            "slateblue": [106, 90, 205, 1],
            "slategray": [112, 128, 144, 1],
            "slategrey": [112, 128, 144, 1],
            "snow": [255, 250, 250, 1],
            "springgreen": [0, 255, 127, 1],
            "steelblue": [70, 130, 180, 1],
            "tan": [210, 180, 140, 1],
            "teal": [0, 128, 128, 1],
            "thistle": [216, 191, 216, 1],
            "tomato": [255, 99, 71, 1],
            "transparent": [0, 0, 0, 0],
            "turquoise": [64, 224, 208, 1],
            "violet": [238, 130, 238, 1],
            "wheat": [245, 222, 179, 1],
            "white": [255, 255, 255, 1],
            "whitesmoke": [245, 245, 245, 1],
            "yellow": [255, 255, 0, 1],
            "yellowgreen": [154, 205, 50, 1],
            "rebeccapurple": [102, 51, 153, 1]
        }
    }

    /**
     * All the bootstrap colors and their RGB values
     */
    static get bootstrap(): {
        [key in BootstrapColor]: colorArray;
    } {
        return {
            "primary": [0, 123, 255, 1],
            "secondary": [108, 117, 125, 1],
            "success": [40, 167, 69, 1],
            "info": [23, 162, 184, 1],
            "warning": [255, 193, 7, 1],
            "danger": [220, 53, 69, 1],
            "light": [248, 249, 250, 1],
            "dark": [52, 58, 64, 1],
            // colors-extended.css
            "indigo": [75, 0, 130, 1],
            // "indigo": Color.fromHex('#4b0082').rgba.values,
            "indigo-light": [202, 128, 255, 1],
            // "indigo-light": Color.fromHex('#ca80ff').rgba.values,
            "indigo-dark": [25, 0, 51, 1],
            // "indigo-dark": Color.fromHex('#1e0033').rgba.values,

            "teal": [0, 128, 128, 1],
            // "teal": Color.fromHex('#1fc794').rgba.values,
            "teal-light": [233, 252, 246, 1],
            // "teal-light": Color.fromHex('#e9fcf6').rgba.values,
            "teal-dark": [0, 51, 51, 1],
            // "teal-dark": Color.fromHex('#158463').rgba.values,

            "orange": [255, 165, 0, 1],
            // "orange": Color.fromHex('#ff6600').rgba.values,
            "orange-light": [255, 209, 179, 1],
            // "orange-light": Color.fromHex('#ffd1b3').rgba.values,
            "orange-dark": [204, 102, 0, 1],
            // "orange-dark": Color.fromHex('#b34700').rgba.values,

            "pink": [255, 0, 255, 1],
            // "pink": Color.fromHex('#ff33cc').rgba.values,
            "pink-light": [255, 204, 242, 1],
            // "pink-light": Color.fromHex('#ffccf2').rgba.values,
            "pink-dark": [204, 0, 153, 1],
            // "pink-dark": Color.fromHex('#e600ac').rgba.values,

            "purple": [128, 0, 128, 1],
            // "maroon": Color.fromHex('#800000').rgba.values,
            "purple-light": [255, 204, 255, 1],
            // "maroon-light": Color.fromHex('#ff8080').rgba.values,
            "purple-dark": [51, 0, 51, 1],
            // "maroon-dark": Color.fromHex('#330000').rgba.values,

            "navy": [0, 0, 128, 1],
            // "navy": Color.fromHex('#000066').rgba.values,
            "navy-light": [204, 204, 255, 1],
            // "navy-light": Color.fromHex('#6666ff').rgba.values,
            "navy-dark": [0, 0, 51, 1],
            // "navy-dark": Color.fromHex('#00001a').rgba.values,

            "yellow": [255, 255, 0, 1],
            // "yellow": Color.fromHex('#ffff00').rgba.values,
            "yellow-light": [255, 255, 179, 1],
            // "yellow-light": Color.fromHex('#ffffb3').rgba.values,
            "yellow-dark": [204, 204, 0, 1],
            // "yellow-dark": Color.fromHex('#b3b300').rgba.values,

            "lime": [0, 255, 0, 1],
            // "lime": Color.fromHex('#00ff00').rgba.values,
            "lime-light": [179, 255, 179, 1],
            // "lime-light": Color.fromHex('#b3ffb3').rgba.values,
            "lime-dark": [0, 153, 0, 1],
            // "lime-dark": Color.fromHex('#00b300').rgba.values,

            "gray": [128, 128, 128, 1],
            // "gray": Color.fromHex('#808080').rgba.values,
            "gray-light": [230, 230, 230, 1],
            // "gray-light": Color.fromHex('#e6e6e6').rgba.values,
            "gray-dark": [51, 51, 51, 1],
            // "gray-dark": Color.fromHex('#595959').rgba.values,

            "brown": [153, 51, 0, 1],
            // "brown": Color.fromHex('#993300').rgba.values,
            "brown-light": [255, 187, 153, 1],
            // "brown-light": Color.fromHex('#ffbb99').rgba.values,
            "brown-dark": [102, 0, 0, 1],
            // "brown-dark": Color.fromHex('#4d1a00').rgba.values,

            "grape": [153, 0, 153, 1],
            // "grape": Color.fromHex('#b9135b').rgba.values,
            "grape-light": [255, 204, 255, 1],
            // "grape-light": Color.fromHex('#f5a3c6').rgba.values,
            "grape-dark": [102, 0, 102, 1],
            // "grape-dark": Color.fromHex('#730c39').rgba.values,

            "vermillion": [227, 66, 52, 1],
            // "vermillion": Color.fromHex('#e34234').rgba.values,
            "vermillion-light": [255, 204, 204, 1],
            // "vermillion-light": Color.fromHex('#f6c1bc').rgba.values,
            "vermillion-dark": [179, 0, 0, 1],
            // "vermillion-dark": Color.fromHex('#b42518').rgba.values,

            "steel": [103, 103, 153, 1],
            // "steel": Color.fromHex('#878f99').rgba.values,
            "steel-light": [204, 204, 255, 1],
            // "steel-light": Color.fromHex('#a2b9bc').rgba.values,
            "steel-dark": [51, 51, 102, 1],
            // "steel-dark": Color.fromHex('#6b5b95').rgba.values,

            "green": [0, 128, 0, 1],
            // "green": Color.fromHex('#006600').rgba.values,
            "green-light": [179, 255, 179, 1],
            // "green-light": Color.fromHex('#66ff66').rgba.values,
            "green-dark": [0, 51, 0, 1],
            // "green-dark": Color.fromHex('#003300').rgba.values
        }
    }

    /**
     * @returns {Object} The closest color name and its distance
     * @property {string} name The name of the closest color
     * @property {number} distance The distance between the colors
     * @property {Color} color The closest color
     */
    get closestName():ClosestColor {
        const { colors } = Color;
        const [r, g, b] = this.rgb.values;

        return Object.entries(colors).reduce((closest, [name, rgb]) => {
            const [r2, g2, b2] = rgb;
            const distance = Math.sqrt(
                Math.pow(r - r2, 2) +
                Math.pow(g - g2, 2) +
                Math.pow(b - b2, 2)
            );

            if (distance < closest.distance) {
                return {
                    name,
                    distance,
                    color: new Color(r2, g2, b2)
                };
            }

            return closest;
        }, {
            name: '',
            distance: Infinity,
            color: new Color(0, 0, 0)
        } as ClosestColor);
    }

    /**
     * @returns {Object} The closest bootstrap color and its distance
     */
    get closestBootstrap():ClosestColor {
        const { bootstrap } = Color;
        const [r, g, b] = this.rgb.values;

        return Object.entries(bootstrap).reduce((closest, [name, rgb]) => {
            const [r2, g2, b2] = rgb;
            const distance = Math.sqrt(
                Math.pow(r - r2, 2) +
                Math.pow(g - g2, 2) +
                Math.pow(b - b2, 2)
            );

            if (distance < closest.distance) {
                return {
                    name,
                    distance,
                    color: new Color(r2, g2, b2)
                };
            }

            return closest;
        }, {
            name: '',
            distance: Infinity,
            color: new Color(0, 0, 0)
        } as ClosestColor);
    }

    /**
     * @returns {Color} A copy of this color with no dependencies
     */
    public clone(): Color {
        return new Color(this.r, this.g, this.b, this.a);
    }

    /**
     * Creates an instance of Color.
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @constructor
     * @param {(number | string | ColorStr | BootstrapColor)} redOrString
     * @param {?number} [green]
     * @param {?number} [blue]
     * @param {?number} [alpha]
     */
    constructor(redOrString: number | string | ColorStr | BootstrapColor, green?: number, blue?: number, alpha?: number) {
        if (typeof redOrString === 'string') {
            if (green !== undefined || blue !== undefined || alpha !== undefined) {
                throw new Error('Invalid arguments. If the first argument is a string, the other arguments must be undefined.');
            }

            const c = Color.parse(redOrString);

            this.r = c.r;
            this.g = c.g;
            this.b = c.b;
            this.a = c.a;
        } else {
            // let allowed:boolean = false;

            const check: string[] = [
                'red',
                'green',
                'blue',
                'alpha'
            ];

            [
                redOrString,
                green,
                blue,
                alpha
            ].forEach((value, index) => {
                if (value === undefined) return;
                if (isNaN(value)) throw new Error(`Invalid ${check[index]}, ${value} is not a parsable number`);

                if (value > 255) {
                    console.warn(`Invalid ${check[index]}, ${value} is greater than 255. It will be set to 255`);
                    value = 255;
                }

                if (value < 0) {
                    console.warn(`Invalid ${check[index]}, ${value} is less than 0. It will be set to 0`);
                    value = 0;
                }

                // allowed = true;
            });


            alpha = alpha || 1;

            this.r = redOrString;
            this.g = green || 0;
            this.b = blue || 0;
            this.a = alpha;
        }
    }

    /**
     * Rgb math
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @readonly
     * @type {{ values: {}; toString: () => string; setRed: (value: number) => this; setGreen: (value: number) => this; setBlue: (value: number) => this; }}
     */
    get rgb() {
        return {
            values: [this.r, this.g, this.b],
            toString: () => `rgb(${this.r}, ${this.g}, ${this.b})`,
            setRed: (value: number) => {
                this.r = value;
                return this;
            },
            setGreen: (value: number) => {
                this.g = value;
                return this;
            },
            setBlue: (value: number) => {
                this.b = value;
                return this;
            }
        }
    }

    /**
     * Rgba math
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @readonly
     * @type {{ values: {}; toString: () => string; setAlpha: (value: number) => this; setRed: (value: number) => this; setGreen: (value: number) => this; setBlue: (value: number) => this; }}
     */
    get rgba() {
        return {
            ...this.rgb,
            values: [...this.rgb.values, this.a],
            toString: () => `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`,
            setAlpha: this.setAlpha
        }
    }

    /**
     * Hsl math
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @readonly
     * @type {{ values: {}; toString: () => string; set: (hue: number, saturation: number, lightness: number) => this; setHue: (value: number) => this; setSaturation: (value: number) => this; setLightness: (value: number) => this; }}
     */
    get hsl() {
        let h:number, s:number, l:number;

        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        l = (max + min) / 2;

        h = s = 0;

        if (max == min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return {
            values: [h, s, l],
            toString: () => `hsl(${h}, ${s}, ${l})`,
            set: (hue: number, saturation: number, lightness: number) => {
                const color = Color.fromHSL(hue, saturation, lightness, this.a);

                this.r = color.r;
                this.g = color.g;
                this.b = color.b;

                return this;
            },
            setHue: (value: number) => {
                const color = Color.fromHSL(value, s, l, this.a);

                this.r = color.r;
                this.g = color.g;
                this.b = color.b;

                return this;
            },
            setSaturation: (value: number) => {
                const color = Color.fromHSL(h, value, l, this.a);

                this.r = color.r;
                this.g = color.g;
                this.b = color.b;

                return this;
            },
            setLightness: (value: number) => {
                const color = Color.fromHSL(h, s, value, this.a);

                this.r = color.r;
                this.g = color.g;
                this.b = color.b;

                return this;
            }
        }
    }

    /**
     * Hsla math
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @readonly
     * @type {{ values: {}; toString: () => string; setAlpha: (value: number) => this; set: (hue: number, saturation: number, lightness: number, alpha: number) => Color; setHue: (value: number) => this; setSaturation: (value: number) => this; setLightness: (value: number) => this; }}
     */
    get hsla() {
        return {
            ...this.hsl,
            values: [...this.hsl.values, this.a],
            toString: ():string => `hsla(${this.hsl.values[0]}, ${this.hsl.values[1]}, ${this.hsl.values[2]}, ${this.a})`,
            setAlpha: this.setAlpha,
            set: (hue: number, saturation: number, lightness: number, alpha: number):Color => {
                const color = Color.fromHSL(hue, saturation, lightness, alpha);

                this.r = color.r;
                this.g = color.g;
                this.b = color.b;
                this.a = color.a;
                
                return this;
            }
        }
    }

    /**
     * Hex math
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @readonly
     * @type {{ values: {}; toString: () => string; setRed: (value: number) => this; setGreen: (value: number) => this; setBlue: (value: number) => this; }}
     */
    get hex() {
        const r = this.r.toString(16) || '00';
        const g = this.g.toString(16) || '00';
        const b = this.b.toString(16) || '00';

        return {
            values: [r, g, b],
            toString: () => `#${r}${g}${b}`,
            setRed: (value: number) => {
                this.r = value;
                return this;
            },
            setGreen: (value: number) => {
                this.g = value;
                return this;
            },
            setBlue: (value: number) => {
                this.b = value;
                return this;
            }
        }
    }

    /**
     * Hexa math
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @readonly
     * @type {{ values: {}; toString: () => string; setAlpha: (value: number) => this; setRed: (value: number) => this; setGreen: (value: number) => this; setBlue: (value: number) => this; }}
     */
    get hexa() {
        const r = this.r.toString(16);
        const g = this.g.toString(16);
        const b = this.b.toString(16);
        const a = this.a.toString(16);

        return {
            ...this.hex,
            values: [r, g, b, a],
            toString: () => `#${r}${g}${b}${a}`,
            setAlpha: this.setAlpha
        }
    }



    /**
     * Sets the alpha value of the color
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {number} value
     * @returns {this}
     */
    public setAlpha(value: number) {
        this.a = value;
        return this;
    }

    /**
     * Returns a string representation of the color given a type (default rgba)
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {('hex' | 'hexa' | 'hsl' | 'hsla' | 'rgb' | 'rgba')} [type='rgba']
     * @returns {string}
     */
    public toString(type: 'hex' | 'hexa' | 'hsl' | 'hsla' | 'rgb' | 'rgba' = 'rgba'): string {
        switch (type) {
            case 'hex':
                return this.hex.toString();
            case 'hexa':
                return this.hexa.toString();
            case 'hsl':
                return this.hsl.toString();
            case 'hsla':
                return this.hsla.toString();
            case 'rgb':
                return this.rgb.toString();
            case 'rgba':
                return this.rgba.toString();
        };
    }


    // generating colors

    /**
     * Returns complimentary colors as a gradient
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {number} num
     * @returns {Gradient}
     */
    public compliment(num:number): Gradient {
        num = Math.floor(num);
        if (num < 2) num = 2;

        const interval = 1/num;
        const hsl = this.hsl.values;
        const hues = new Array(num - 1).fill(0).map((_, i) => {
            return (hsl[0] + (i + 1) * interval) % 1;
        });

        const g = [this, ...hues.map(h => Color.fromHSL(h, hsl[1], hsl[2], this.a))];

        return new Gradient(...g);
    }

    /**
     * Returns analogous colors as an array (this, left, right 30 degrees apart)
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @returns {[Color, Color, Color]}
     */
    public analogous():[Color, Color, Color] {
        const hsl = this.hsl.values;
        const hues: [number, number] = [hsl[0] - (30 / 360), hsl[0] + (30 / 360)];

        const [h1, h2] = hues.map(h => Color.fromHSL(h, hsl[1], hsl[2], this.a));
        return [
            this,
            h1,
            h2
        ];
    }

    /**
     * Interpolates a color between this and another color given a ratio
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {Color} toColor
     * @param {number} [distance=0.5]
     * @returns {Color}
     */
    public interpolate(toColor: Color, distance: number = 0.5):Color {
        if (isNaN(distance)) {
            console.warn('Distance must be a number between 0 and 1. Defaulting to 0.5');
            distance = 0.5;
        }

        if (!(toColor instanceof Color)) {
            console.warn('toColor must be an instance of Color. Defaulting to black');
            toColor = new Color(0, 0, 0);
        }

        if (distance < 0) {
            console.warn('Distance must be a number greater than 0. Defaulting to 0');
            distance = 0;
        }

        if (distance > 1) {
            console.warn('Distance must be a number less than 1. Defaulting to 1');
            distance = 1;
        }

        const [r1, g1, b1, a1] = this.rgba.values;
        const [r2, g2, b2, a2] = toColor.rgba.values;

        const r = r1 + (r2 - r1) * distance;
        const g = g1 + (g2 - g1) * distance;
        const b = b1 + (b2 - b1) * distance;
        const a = a1 + (a2 - a1) * distance;

        return new Color(r, g, b, a);
    }





    /**
     * Returns a linear gradient between two colors
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {Color} color
     * @param {number} frames
     * @returns {Gradient}
     */
    public linearFade(color:Color, frames: number):Gradient {
        return Gradient.curve(this, color, (x: number) => x, frames);
    }

    /**
     * Returns an exponential gradient between two colors
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {Color} color
     * @param {number} frames
     * @param {number} [base=2]
     * @returns {Gradient}
     */
    public exponentialFade(color:Color, frames:number, base: number = 2): Gradient {
        return Gradient.curve(this, color, (x: number) => Math.pow(base, x), frames);
    }

    /**
     * Returns a logarithmic gradient between two colors
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {Color} color
     * @param {number} frames
     * @param {number} [base=2]
     * @returns {Gradient}
     */
    public logarithmicFade(color:Color, frames:number, base: number = 2): Gradient {
        return Gradient.curve(this, color, (x: number) => Math.log(x) / Math.log(base), frames);
    }




    /**
     * Returns the contrast ratio between this and another color
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {Color} color
     * @returns {number}
     */
    public detectContrast(color:Color):number {
        const l1 = 0.2126 * Math.pow(this.r / 255, 2.2) + 0.7152 * Math.pow(this.g / 255, 2.2) + 0.0722 * Math.pow(this.b / 255, 2.2);
        const l2 = 0.2126 * Math.pow(color.r / 255, 2.2) + 0.7152 * Math.pow(color.g / 255, 2.2) + 0.0722 * Math.pow(color.b / 255, 2.2);

        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }




    // view in console
    
    /**
     * Logs the color to the console as text
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     * @param {...*} args
     */
    public logText(...args:any) {
        console.log(`%c${args.join(' ')}`, `color: ${this.toString()}`);
    }

    /**
     * Views the color in the console
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @public
     */
    public view() {
        this.logText('Color:', this.closestName.name);
    }







    /**
     * Mathematics around the color
     * @date 1/10/2024 - 2:49:14 PM
     *
     * @readonly
     * @type {{ x: number; y: number; z: number; point: [number, number, number]; }}
     */
    get math() {
        const p = this;
        return {
            x: p.r / 255,
            y: p.g / 255,
            z: p.b / 255,
            point: [p.r / 255, p.g / 255, p.b / 255] as [number, number, number]
        }
    }
};