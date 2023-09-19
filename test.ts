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

ctx.fillStyle = Color.fromName('gray').toString();
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);


type Point3d = [number, number, number];
type Point2d = [number, number];

function multiplyMatricies(a: number[][], b: number[][]) {
    // ensure that the matricies are compatible
    if (a[0].length !== b.length) {
        throw new Error('Matricies are not compatible');
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


function generateColorString(point: Point3d): Color {
    const [x, y, z] = point;    
    return new Color(
        x * 255,
        y * 255,
        z * 255
    );
}



const transformMatrix = [
    [1, 0, 0],
    [0, 1.6666666, 0],
    [.5, .5, 0]
] as [Point3d, Point3d, Point3d];

const transformScale: Point3d = [.5, .3, 1];
const translateVector: Point3d = [.1, .5, 0];

const invertMatrix: [
    Point3d,
    Point3d,
    Point3d
] = [
    [1, -1, 1],
    [1, -1, 1],
    [1, -1, 1]
];


type Face = [Point3d, Point3d, Point3d, Point3d];
type Edge = [Point3d, Point3d];

const point3dTransform = (p: Point3d) => {
    return scale(
        translate(
            transform(p, ...transformMatrix), 
            translateVector
        ),
        transformScale
    );
}


const cube2d = cube3d.map(p => transform(p, ...transformMatrix))
                        .map(p => translate(p, translateVector))
                        .map(p => scale(p, transformScale))
                        .map(p => [p[0], p[1]] as Point2d);



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

function drawColorPoint(ctx: CanvasRenderingContext2D, [x, y, z]: Point3d) {
    ctx.fillStyle = generateColorString([x, y, z]).toString();
    const [nx, ny] = point3dTransform([x, y, z]);
    ctx.fillRect(
        nx * ctx.canvas.width - 1, 
        ny * ctx.canvas.height - 1, 
        2, 
        2
    );
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



function drawColorEdge(ctx: CanvasRenderingContext2D, [p1, p2]: Edge, origin: Point3d) {
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
    ctx.beginPath();
    ctx.moveTo(x1 * ctx.canvas.width, y1 * ctx.canvas.height);
    ctx.lineTo(x2 * ctx.canvas.width, y2 * ctx.canvas.height);
    ctx.stroke();
}

edges.forEach(e => drawColorEdge(ctx, e, [0, 0, 0]));




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
    frames: number = 60
) {
    ctx.beginPath();
    for (let i = 0; i < frames; i++) {
        const t = i / frames;
        const x = fx(t);
        const y = fy(t);
        const z = fz(t);

        drawColorPoint(ctx, [x, y, z]);
    }
    ctx.stroke();
}



drawCurve(
    (t) => Math.cos(t * Math.PI / 2),
    (t) => Math.sin(t * Math.PI / 2),
    (t) => t ** 10,
    ctx
)
cube3d.forEach(p => drawColorPoint(ctx, p));
