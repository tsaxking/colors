const x = Color.fromName('blue');
const y = Color.fromName('red');
const o = Color.fromName('yellow');

// Gradient.curve(r, g, x => 1/(x + .6) - .6, 60).view();
// Gradient.curve(x, y, x => x, 60, o).view();
// Gradient.curve(x, y, x => (x-1)**2, 60, o).view();




const grad = Gradient.parametric(
    (t) => Math.cos(t * Math.PI / 2),
    (t) => Math.sin(t * Math.PI / 2),
    (t) => 0,
    60
);

const canvas = document.querySelector('canvas');

if (canvas) {
    canvas.width = 500;
    canvas.height = 500;
}

const ctx = canvas?.getContext('2d');


if (!ctx) throw new Error('Could not get context');


type Point3d = [number, number, number];
type Point2d = [number, number];

function multiplyMatricies(a: number[][], b: number[][]) {
    // ensure that the matricies are compatible
    if (a[0].length !== b.length) {
        throw new Error('Matricies are not compatible, ' + 'A: ' + a.length + 'x' + a[0].length + ' B: ' + b.length + 'x' + b[0].length + '');
    }


    // create the new matrix
    const c: number[][] = [];

    // for each row in a
    for (let i = 0; i < a.length; i++) {
        // create a new row
        c[i] = [];

        // for each column in b
        for (let j = 0; j < b[0].length; j++) {
            // create a new column
            c[i][j] = 0;

            // for each element in the column
            for (let k = 0; k < b.length; k++) {
                // add the product of the elements
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return c;
}


function transform(
    [x, y, z]: Point3d,
    i: Point3d,
    j: Point3d,
    k: Point3d): Point3d {
    
    const [[a], [b], [c]] = multiplyMatricies(
        [   [i[0], j[0], k[0]],
            [i[1], j[1], k[1]],
            [i[2], j[2], k[2]]
        ],
        [[x], [y], [z]]
    );

    return [a, b, c];
};

function translate([x, y, z]: Point3d, [dx, dy, dz]: Point3d): Point3d {
    return [x + dx, y + dy, z + dz];
}

function scale([x, y, z]: Point3d, [sx, sy, sz]: Point3d): Point3d {
    return [x * sx, y * sy, z * sz];
}


function rotate2d([x, y]: Point2d, r: number): Point2d {
    return [
        x * Math.cos(r) - y * Math.sin(r),
        x * Math.sin(r) + y * Math.cos(r)
    ];
}

function rotate3d([x, y, z]: Point3d, [ax, ay, az]: [number, number, number],  [rx, ry, rz]: [number, number, number]): Point3d {
    // rx, ry, rz are all radians
    // ax, ay, az are all displacement of axis of rotation

    // translate to origin
    [x, y, z] = translate([x, y, z], [-ax, -ay, -az]);

    // rotate

    // rotate x
    [y, z] = rotate2d([y, z], rx);

    // rotate y
    [x, z] = rotate2d([x, z], ry);

    // rotate z
    [x, y] = rotate2d([x, y], rz);

    // translate back
    [x, y, z] = translate([x, y, z], [ax, ay, az]);

    return [x, y, z];
}



const cube3d: Point3d[] = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],

    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 1]
];


function generateColor(point: Point3d): Color|undefined {
    const [x, y, z] = point;
    if (isNaN(x + y + z)) {
        return;
    }
    return new Color(
        x * 255,
        y * 255,
        z * 255
    );
}




type Face = [Point3d, Point3d, Point3d, Point3d];
type Edge = [Point3d, Point3d];






const rotationMatrix: Point3d = [Math.PI / 6, Math.PI / 4, Math.PI / 6];
const rotationSpeedMatrix: Point3d = [0.001, 0.003, 0.002];

const point3dTransform = (p: Point3d): Point3d => {
    p = rotate3d(p, [.5,.5,.5], rotationMatrix);
    p = scale(p, [.6, .6, .6]);
    p = translate(p, [.2, .2, 0]);

    return p;
}

let action: boolean = false;
let previousPoint: Point2d|undefined;

const stopManipulation = () => {
    action = false;
    previousPoint = undefined;
}
const sensitivity = .01;

canvas?.addEventListener('mousedown', () => action = true);
canvas?.addEventListener('mousemove', e => {
    if (!action) return;
    const p = [
        e.clientX / canvas.width,
        e.clientY / canvas.height
    ] as Point2d;
    
    if (!previousPoint) {
        previousPoint = p;
        return;
    }



    const dy = p[1] - previousPoint[1];
    const dx = p[0] - previousPoint[0];

    rotationMatrix[0] -= dy * sensitivity;
    rotationMatrix[1] -= dx * sensitivity;
});
canvas?.addEventListener('mouseleave', stopManipulation);
canvas?.addEventListener('mouseup', stopManipulation);



function drawPoint2d(ctx: CanvasRenderingContext2D, [x, y]: Point2d) {
    ctx.fillRect(
        x * ctx.canvas.width, 
        y * ctx.canvas.height, 
        10, 
        10
    );
}


function normalize(points: Point2d[], canvas: HTMLCanvasElement): Point2d[] {
    return points.map(([x, y]) => [x * canvas.width, y * canvas.height]);
}

function distance([x1, y1, z1]: Point3d, [x2, y2, z2]: Point3d): number {
    return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2 + (z1 - z2)**2);
}

function drawColorPoint(ctx: CanvasRenderingContext2D, [x, y, z]: Point3d, size: number) {
    const c = generateColor([x, y, z]);
    if (!c) return;
    ctx.fillStyle = c.toString();
    const [nx, ny] = point3dTransform([x, y, z]);
    ctx.fillRect(
        nx * ctx.canvas.width -  size / 2, 
        ny * ctx.canvas.height - size / 2, 
        size, 
        size
    );

    // ctx.arc(
    //     nx * ctx.canvas.width,
    //     ny * ctx.canvas.height,
    //     size / 2,
    //     0,
    //     Math.PI * 2
    // );
    // // ctx.fillStyle = 'black';
    // ctx.fill();
}


const edges: Edge[] = cube3d.flatMap((p, i) => {
    // get closest points
    const closest = cube3d.filter((_, j) => i !== j)
                            .sort((a, b) => distance(p, a) - distance(p, b))
                            .slice(0, 3);

    return closest.map(q => [p, q] as Edge);
});


function sortVector(points: Point3d[]): Point3d[] {
    return points.sort((a, b) => distance(a, [0, 0, 0]) - distance(b, [0, 0, 0]));
}



function point3dToColor(p: Point3d): Color {
    return new Color(
        p[0] * 255,
        p[1] * 255,
        p[2] * 255
    );
}



function drawColorEdge(ctx: CanvasRenderingContext2D, [p1, p2]: Edge, thickness: number = 1) {
    const [b,a] = sortVector([p1, p2]).map(point3dToColor);

    const [x1, y1] = point3dTransform(p1);
    const [x2, y2] = point3dTransform(p2);

    ctx.createLinearGradient(
        x1, y1, x2, y2
    );

    const gradient = ctx.createLinearGradient(
        x1 * ctx.canvas.width,
        y1 * ctx.canvas.height,
        x2 * ctx.canvas.width,
        y2 * ctx.canvas.height
    );

    gradient.addColorStop(0, a.closestName.name);
    gradient.addColorStop(1, b.closestName.name);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = thickness;
    ctx.beginPath();
    ctx.moveTo(x1 * ctx.canvas.width, y1 * ctx.canvas.height);
    ctx.lineTo(x2 * ctx.canvas.width, y2 * ctx.canvas.height);
    ctx.stroke();
}

function drawEdge(ctx: CanvasRenderingContext2D, [p1, p2]: Edge, thickness: number = 1, color: Color = Color.fromName('black')) {
    
    const [x1, y1] = point3dTransform(p1);
    const [x2, y2] = point3dTransform(p2);
    
    
    ctx.lineWidth = thickness;
    ctx.strokeStyle = color.toString();
    ctx.beginPath();
    ctx.moveTo(
        x1 * ctx.canvas.width,
        y1 * ctx.canvas.height
    );
    ctx.lineTo(
        x2 * ctx.canvas.width,
        y2 * ctx.canvas.height
    );
    ctx.stroke();
}


function drawCube(ctx: CanvasRenderingContext2D, cube2d: Point2d[]) {
    // draw lines of cube
    ctx.beginPath();
    ctx.moveTo(...cube2d[0]);
    ctx.lineTo(...cube2d[1]);
    ctx.lineTo(...cube2d[2]);
    ctx.lineTo(...cube2d[3]);
    ctx.lineTo(...cube2d[0]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(...cube2d[4]);
    ctx.lineTo(...cube2d[5]);
    ctx.lineTo(...cube2d[6]);
    ctx.lineTo(...cube2d[7]);
    ctx.lineTo(...cube2d[4]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(...cube2d[0]);
    ctx.lineTo(...cube2d[4]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(...cube2d[1]);
    ctx.lineTo(...cube2d[5]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(...cube2d[2]);
    ctx.lineTo(...cube2d[6]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(...cube2d[3]);
    ctx.lineTo(...cube2d[7]);
    ctx.stroke();
}




function drawCurve(
    fx: (t: number) => number,
    fy: (t: number) => number,
    fz: (t: number) => number,
    ctx: CanvasRenderingContext2D,
    frames: number = 60,
    percentage: number = 1
) {
    const numFrames = Math.round(frames * percentage);



    ctx.beginPath();
    for (let i = 0; i < numFrames; i++) {
        const t = i / frames;
        const x = fx(t);
        const y = fy(t);
        const z = fz(t);

        drawColorPoint(ctx, [x, y, z], 2);
    }
    ctx.stroke();
}


type fn = (t: number) => number;
type PointFn = (t: number) => Point3d;



function getSplinePoints(points: Point3d[], i: number): [Point3d,Point3d,Point3d,Point3d]|undefined {
    // get points in four point groups

    // if (i % 2 !== 0) return;



    const p1 = points[i];





    const p2 = points[(i + 1) % points.length];
    const p3 = points[(i + 2) % points.length];
    const p4 = points[(i + 3) % points.length];
    // const p2 = points[(i + 1)];
    // const p3 = points[(i + 2)];
    // const p4 = points[(i + 3)];

    if (ctx) [p1, p2, p3, p4].forEach(p => drawColorPoint(ctx, p, 8));

    // if (points.indexOf(p2) !== i + 1) return;
    // if (points.indexOf(p3) !== i + 2) return;
    // if (points.indexOf(p4) !== i + 3) return;

    return [p1, p2, p3, p4];
}



const tPoint = (pointFns: PointFn[], a: number) => (t: number): number => {
    const i = Math.floor(t * pointFns.length);
    // console.log(i, pointFns);
    const c = pointFns[i];
    // console.log(c);
    if (!c) {
        // console.log('NaN');
        return NaN;
    }
    const v = c(t * pointFns.length - i)[a];
    // console.log(v);
    return v;
}


function cubicSpline(...points: Point3d[]): [fn, fn, fn] {
    // return fx, fy, and fz

    // use spline patching to create a cubic spline

    // f(t) = a * t^3 + b * t^2 + c * t + d
    // f'(t) = 3 * a * t^2 + 2 * b * t + c

    // f(0) = d
    // f(1) = a + b + c + d
    // f'(0) = c
    // f'(1) = 3 * a + 2 * b + c

    const curves = points.map((_, i) => {
        try {
            const ps = getSplinePoints(points, i);

            if (!ps) return;
            const [p1, p2, p3, p4] = ps;

            const [x1, y1, z1] = p1;
            const [x2, y2, z2] = p2;
            const [x3, y3, z3] = p3;
            const [x4, y4, z4] = p4;

            const fx: fn = t => (
                -x1 * t**3 + 3 * x1 * t**2 - 3 * x1 * t + x1 +
                3 * x2 * t**3 - 6 * x2 * t**2 + 3 * x2 * t +
                -3 * x3 * t**3 + 3 * x3 * t**2 +
                x4 * t**3
            );

            const fy: fn = t => (
                -y1 * t**3 + 3 * y1 * t**2 - 3 * y1 * t + y1 +
                3 * y2 * t**3 - 6 * y2 * t**2 + 3 * y2 * t +
                -3 * y3 * t**3 + 3 * y3 * t**2 +
                y4 * t**3
            );

            const fz: fn = t => (
                -z1 * t**3 + 3 * z1 * t**2 - 3 * z1 * t + z1 +
                3 * z2 * t**3 - 6 * z2 * t**2 + 3 * z2 * t +
                -3 * z3 * t**3 + 3 * z3 * t**2 +
                z4 * t**3
            );

            return (t: number) => [fx(t), fy(t), fz(t)];
        } catch {}
    }).filter(x => x !==undefined) as PointFn[];


    return [
        tPoint(curves, 0),
        tPoint(curves, 1),
        tPoint(curves, 2)
    ];
}


function interpolate(p1: Point3d, p2: Point3d, delta: number): Point3d {
    if (delta < 0) {
        throw new Error('Distance must be positive');
    }

    if (delta > 1) {
        throw new Error('Distance must be less than 1');
    }

    // if (ctx) drawColorEdge(ctx, [p1, p2], 3);

    // get A point proportionally between p1 and p2

    const [x1, y1, z1] = p1;
    const [x2, y2, z2] = p2;

    const x = x1 + (x2 - x1) * delta;
    const y = y1 + (y2 - y1) * delta;
    const z = z1 + (z2 - z1) * delta;

    return [x, y, z];
}


const casteljau = (accuracy: number, [p1, p2, p3, p4]: [Point3d, Point3d, Point3d, Point3d]): Point3d => {
    const a1 = interpolate(p1, p2, accuracy);
    const a2 = interpolate(p2, p3, accuracy);
    const a3 = interpolate(p3, p4, accuracy);

    const b1 = interpolate(a1, a2, accuracy);
    const b2 = interpolate(a2, a3, accuracy);

    return interpolate(b1, b2, accuracy);
}


function bezierSpline(detail: number,...points: Point3d[]): [fn, fn, fn] {
    // using casteljau's algorithm

    if (Math.round(detail) !== detail) {
        throw new Error('Detail must be an integer');
    }

    const arr = new Array(detail).fill(0).map((_, i) => i / detail);

    const curves = points.map((_, i) => {
        try {
            const ps = getSplinePoints(points, i);

            if (!ps) return;
            const [p1, p2, p3, p4] = ps;

            const map = arr.map(x => casteljau(x, [p1, p2, p3, p4]));

            return (t: number) => {
                return map[Math.floor(t * map.length)];
            }
        } catch {}
    }).filter(x => x) as PointFn[];

    return [
        tPoint(curves, 0),
        tPoint(curves, 1),
        tPoint(curves, 2)
    ];
}







function highOrderSpline(...points: Point3d[]): [fn, fn, fn] {
    const order = points.length - 1;


    const curves = points.map((_, i) => {
        // use f(x) = a * x^order + b * x^(order - 1) + ... + c * x^0

        

        return (t: number) => {
        };
    }).filter(x => x) as PointFn[];

    return [
        tPoint(curves, 0),
        tPoint(curves, 1),
        tPoint(curves, 2)
    ];
}



















class Vector {
    static from(p1: Point3d, p2: Point3d): Vector {
        const [x1, y1, z1] = p1;
        const [x2, y2, z2] = p2;

        return new Vector(p1, [
            x2 - x1,
            y2 - y1,
            z2 - z1
        ]);
    }

    constructor(public point: Point3d, public rate: [number, number, number]) {}


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
            pos: v.point[0],
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
            pos: v.point[1],
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
            pos: v.point[2],
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


    intersect(v: Vector): Point3d | undefined {
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
            return [x1, y1, z1]
        } catch (e) {
            console.log('Colors do not intersect');
        }
    }


    intersectPlane(plane: Plane): Point3d {
        const normal = plane.normal;
        const point = plane.point;

        const t = (normal.x.magnitude * (point[0] - this.point[0]) + normal.y.magnitude * (point[1] - this.point[1]) + normal.z.magnitude * (point[2] - this.point[2])) / (normal.x.magnitude * this.rate[0] + normal.y.magnitude * this.rate[1] + normal.z.magnitude * this.rate[2]);

        return [
            this.rate[0] * t + this.point[0],
            this.rate[1] * t + this.point[1],
            this.rate[2] * t + this.point[2]
        ];
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

    move(point: Point3d): Vector {
        return new Vector(point, this.rate);
    }
}


class Plane {
    constructor(public point: Point3d, public normal: Vector) {}


    normalTo(v: Vector): Vector {
        return this.normal.cross(v);
    }
}





const circle = (radius: number, detail: number, center: Vector): Point3d[] => {
    const arr = new Array(detail).fill(0).map((_, i) => i / detail);

    return arr.map(t => {
        const x = Math.cos(t * Math.PI * 2) * radius;
        const y = Math.sin(t * Math.PI * 2) * radius;
        const z = 0;

        return [
            x + center.point[0],
            y + center.point[1],
            z + center.point[2]
        ];
    });
}


const sphere = (radius: number, layers: number, circleDetail: number, center: Vector): Point3d[] => {
    return new Array(layers).fill(0).flatMap((_, i) => {
        const r = radius * Math.sin((i / layers) * Math.PI);
        const z = radius - radius * Math.cos((i / layers) * Math.PI);

        return circle(r, circleDetail, center.move([center.point[0], center.point[1], z]));
    });
}

const s = sphere(.5, 50, 50, new Vector([.5, .5, .5], [0, 0, 0]));



const axis = (center: Point3d, length: number): Edge[] => {
    return [
        [center, [center[0] + length, center[1], center[2]]],
        [center, [center[0], center[1] + length, center[2]]],
        [center, [center[0], center[1], center[2] + length]],
        [center, [center[0] - length, center[1], center[2]]],
        [center, [center[0], center[1] - length, center[2]]],
        [center, [center[0], center[1], center[2] - length]]
    ];
}

const a = axis([.5, .5, .5], .5);






























































let framePercentage = 1;
let framePercentageSpeed = .01;

const update = () => {
    rotationMatrix[0] += rotationSpeedMatrix[0];
    rotationMatrix[1] += rotationSpeedMatrix[1];
    rotationMatrix[2] += rotationSpeedMatrix[2];
    

    // framePercentage += framePercentageSpeed;


    if (framePercentage >= 1 || framePercentage <= 0) {
        framePercentageSpeed *= -1;
    }
};

const clear = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = Color.fromName('gray').toString();
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}




const points: Point3d[] = [
    [0, 0, 0],
    [.5, 0, 0],
    [1, .5, 0],
    [0, 1, 0],
    [.75, .75, 0],
    [1, 1, 0],
    [1, .25, 0]
]; 

// const points: Point3d[] = new Array(8).fill(0).map((_, i) => {
//     return[
//         Math.random(),
//         Math.random(),
//         Math.random()
//     ]
// });


// const points: Point3d[] = [
//     Color.fromName('red').math.point,
//     // Color.fromName('orange').math.point,
//     // Color.fromName('yellow').math.point,
//     Color.fromName('lime').math.point,
//     Color.fromName('blue').math.point//,
//     // Color.fromName('purple').math.point,
//     // Color.fromName('pink').math.point,
//     // Color.fromName('white').math.point
// ]

let totalFrames = 0;
const start = Date.now();

const draw = () => {

    clear(ctx);
    edges.forEach(e => drawColorEdge(ctx, e));

    // a.forEach(e => drawEdge(ctx, e));

    s.forEach(p => drawColorPoint(ctx, p, 5));


    // const p1: Point3d = [0, 0, 0];
    // const p2: Point3d = [1, 1, 1];
    // const p3: Point3d = [1, 0, 0];
    // const p4: Point3d = [0, 1, 0];

    // const p5 = casteljau(
    //     .1,
    //     [
    //         p1,
    //         p2,
    //         p3,
    //         p4
    //     ]
    // );

    // [p1, p2, p3, p4, p5].forEach(p => drawColorPoint(ctx, p, 2));

    // const p1: Point3d = [0, 0, 0];
    // const p2: Point3d = [1, .7, .3];
    // const p3 = interpolate(p1, p2, .75);

    // drawColorPoint(ctx, p1, 8);
    // drawColorPoint(ctx, p2, 8);
    // drawColorPoint(ctx, p3, 8);




    
    // drawCurve(
    //     ...highOrderSpline(
    //         ...points
    //     ),
    //     ctx,
    //     1000,
    //     framePercentage
    // )


    
    // drawCurve(
    //     ...bezierSpline(
    //         500,
    //         ...points
    //     ),
    //     ctx,
    //     500,
    //     framePercentage
    // )

    // drawCurve(
    //     t => t,
    //     t => t,
    //     t => t,
    //     // t => 1 / (10 * t - 10.5) + 1.6 * t + .1,
    //     ctx,
    //     60,
    //     framePercentage
    // )
    cube3d.forEach(p => drawColorPoint(ctx, p, 2));

    update();

    requestAnimationFrame(draw);

    
    totalFrames++;
    const now = Date.now();
    document.querySelector('#fps')!.innerHTML = (totalFrames / ((now - start) / 1000)).toFixed(2);
}

requestAnimationFrame(draw);
