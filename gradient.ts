/**
 * The gradient class, used to create transitions between colors
 * @date 1/10/2024 - 2:58:08 PM
 *
 * @class Gradient
 * @typedef {Gradient}
 */
class Gradient {

    /**
     * Creates a a random gradient
     * @param frames The number of frames to fade between the colors
     * @returns {Gradient} Returns a new gradient with the colors faded between each other
     */
    static random(frames:number = 60):Gradient {
        return Color.random().linearFade(Color.random(), frames);
    }

    /**
     * Creates a gradient from a color to another color
     * @param gradients The gradients to combine
     * @returns {Gradient} Returns a new gradient with all the colors from the gradients
     */
    static combine(...gradients:Gradient[]):Gradient {
        return new Gradient(...gradients.flatMap(g => g.colors));
    }


    /**
     * Generates a gradient from a color to another color using a function
     * @date 1/10/2024 - 2:58:08 PM
     *
     * @static
     * @param {Color} x1
     * @param {Color} y1
     * @param {(x: number) => number} fx
     * @param {number} frames
     * @param {Color} [base=new Color(0,0,0)]
     * @returns {Gradient}
     */
    static curve(x1: Color, y1: Color, fx: (x: number) => number, frames: number, base: Color = new Color(0,0,0)): Gradient {
        const v1 = Color.math.getVector(base, x1);
        const plane = Color.math.threePointPlane(base, x1, y1);
        const planeNormal = plane.normalTo(v1);

        return new Gradient(...Array(frames).fill(0).map((_, i, arr) => {
            const x = i / frames;
            const y = fx(x);

            const x2 = base.interpolate(x1, x);
            const y2 = base.interpolate(y1, y);

            const yv = v1.move(y2);
            const normal = planeNormal.move(x2);

            const intersect = yv.intersect(normal);

            if (intersect) return intersect;
            return arr[i - 1] || x2;
        }));
    }



    /**
     * Generates a gradient from a color to another color using a function
     * @date 1/10/2024 - 3:04:12 PM
     *
     * @static
     * @param {Color} from
     * @param {Color} to
     * @param {(t: number) => [number, number, number]} ft
     * @param {number} frames
     * @returns {[number, number, number], frames: number) => Gradient}
     */
    static ftCurve(from: Color, to: Color, ft: (t: number) => [number, number, number], frames: number) {
        frames = Math.max(frames, 1);
        frames = Math.round(frames);
        const interpolate = (from: number, to: number, ratio: number) => (from + (to - from) * ratio) * 255;

        const [r1, g1, b1] = from.rgb.values;
        const [r2, g2, b2] = to.rgb.values;

        return new Gradient(...(new Array(frames).fill(0).map((_, i) => {
            const t = i / frames;
            const [r, g, b] = ft(t);
            return new Color(
                interpolate(r1, r2, r),
                interpolate(g1, g2, g),
                interpolate(b1, b2, b)
            );
        })));
    }



    /**
     * Generates a gradient using functions for each color
     * @date 1/10/2024 - 2:58:08 PM
     *
     * @static
     * @param {(t: number) => number} fr
     * @param {(t: number) => number} fg
     * @param {(t: number) => number} fb
     * @param {number} frames
     * @returns {Gradient}
     */
    static parametric(fr: (t: number) => number, fg: (t: number) => number, fb: (t: number) => number, frames: number): Gradient {
        return new Gradient(...Array(frames).fill(0).map((_, i) => {
            const t = i / frames;
            return new Color(
                fr(t) * 255, 
                fg(t) * 255, 
                fb(t) * 255
            );
        }));
    }









    /**
     * The colors in the gradient
     * @date 1/10/2024 - 2:58:08 PM
     *
     * @type {Color[]}
     */
    colors:Color[];


    /**
     * Creates an instance of Gradient.
     * @date 1/10/2024 - 2:58:08 PM
     *
     * @constructor
     * @param {...Color[]} colors
     */
    constructor(...colors:Color[]) {
        this.colors = colors;
    }

    /**
     * Generates a gradient from a color to another color
     * @param deg The degree of the gradient (0-360)
     * @returns {string} Returns the gradient as a linear-gradient string
     */
    public toLinearGradientString(deg:number = 90):string {
        let gradient = `linear-gradient(${deg}deg`;
        this.colors.forEach(color => {
            gradient += `,${color.toString()}`;
        });
        gradient += ')';
        return gradient;
    }

    /**
     * View each color in the gradient
     */
    public view() {
        this.colors.forEach(c => c.view());
    }

    /**
     * Logs each character in the gradient to the console
     * @param string The string to log
     */
    public logText(string:string) {
        if (typeof string !== 'string') throw new Error('logText() expects a string, received ' + typeof string);

        const { colors } = this;

        const gradientLength = colors.length;

        const gradient = string.split('').map((char) => {
            return `%c${char}`;
        }).join('');

        let gradientIndex = 0;
        let direction = 1;
        const gradientString = string.split('').map((_, i) => {
            if (direction === 1) {
                if (gradientIndex === gradientLength - 1) {
                    direction = -1;
                }
            } else {
                if (gradientIndex === 0) {
                    direction = 1;
                }
            }

            gradientIndex += direction;

            return `color: ${colors[gradientIndex].toString()}`
        });

        console.log(gradient, ...gradientString);
    }

    /**
     * Adds colors to the gradient
     */
    public addGradients(...gradients:Gradient[]) {
        gradients.forEach(g => {
            this.colors.push(...g.colors);
        });
    }


    /**
     * Adds colors to the gradient
     * @date 1/10/2024 - 3:07:10 PM
     *
     * @public
     * @param {...Color[]} colors
     */
    public addColors(...colors:Color[]) {
        this.colors.push(...colors);
    }

    /**
     * Randomizes the colors in the gradient
     * @returns {Gradient} Returns the current gradient
     */
    public randomize():Gradient {
        this.colors.forEach(_ => Math.random() - 0.5);
        return this;
    }





    /**
     * Draws the gradient to a canvas (not implemented)
     * @deprecated
     * @date 1/10/2024 - 2:58:08 PM
     *
     * @public
     * @param {CanvasRenderingContext2D} ctx
     */
    public draw(ctx: CanvasRenderingContext2D) {
    }


    /**
     * Description placeholder
     * @date 1/10/2024 - 2:58:08 PM
     *
     * @public
     * @static
     * @param {CanvasRenderingContext2D} ctx
     */
    public static  drawGrid(ctx: CanvasRenderingContext2D) {
        // draw a cube
        const cubePoints:
        [number, number, string][] = [
            [0,1,'black'],
            [2,0,'red'],
            [4,0,'black'],
            [2,2,'black'],
            [0,1,'blue'],
            [0,4,'green'],
            [2,5,'black'],
            [2,2,'black'],
            [2,5,'black'],
            [4,4,'black'],
            [4,0,'black'],
            [4,4,'black'],
            [2,2,'black'],
            [2,0,'black'],
            [2,2,'black'],
            [0,4,'black']
        ];

        cubePoints.forEach(([x, y, color], i) => {
            x = x * ctx.canvas.width;
            y = y * ctx.canvas.height;

            ctx.fillStyle = color;
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            // ctx.fill();


            // if (i > 0) {
            //     const [x2, y2] = cubePoints[i - 1];
            //     ctx.beginPath();
            //     ctx.moveTo(x, y);
            //     ctx.lineTo(x2, y2);
            //     ctx.stroke();
            //     ctx.
            // }
        });
    }
}