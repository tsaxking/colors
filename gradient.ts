class Gradient {
    colors:Color[];

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











    constructor(...colors:Color[]) {
        this.colors = colors;
    }

    /**
     * 
     * @param deg The degree of the gradient (0-360)
     * @returns {string} Returns the gradient as a linear-gradient string
     */
    public toString(deg:number = 90):string {
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
    public add(...gradients:Gradient[]) {
        gradients.forEach(g => {
            this.colors.push(...g.colors);
        });
    }

    /**
     * Randomizes the colors in the gradient
     * @returns {Gradient} Returns the current gradient
     */
    public random():Gradient {
        this.colors.forEach(_ => Math.random() - 0.5);
        return this;
    }





    public draw(ctx: CanvasRenderingContext2D) {
    }


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