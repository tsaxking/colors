const colors = {
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    transparent: [0, 0, 0, 0],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1],
    rebeccapurple: [102, 51, 153, 1]
};

export type ColorStr = keyof typeof colors;

const BootstrapColors = {
    blue: [13, 110, 253],
    indigo: [102, 16, 242],
    purple: [111, 66, 193],
    pink: [214, 51, 132],
    red: [220, 53, 69],
    orange: [253, 126, 20],
    yellow: [255, 193, 7],
    green: [25, 135, 84],
    teal: [32, 201, 151],
    cyan: [13, 202, 240],
    black: [0, 0, 0],
    white: [240, 240, 240],
    gray: [108, 117, 125],
    grayDark: [52, 58, 64],
    gray100: [248, 249, 250],
    gray200: [233, 236, 239],
    gray300: [222, 226, 230],
    gray400: [206, 212, 218],
    gray500: [173, 181, 189],
    gray600: [108, 117, 125],
    gray700: [73, 80, 87],
    gray800: [52, 58, 64],
    gray900: [33, 37, 41],
    primary: [13, 110, 253],
    secondary: [108, 117, 125],
    success: [25, 135, 84],
    info: [13, 202, 240],
    warning: [255, 193, 7],
    danger: [220, 53, 69],
    light: [248, 249, 250],
    dark: [33, 37, 41],
    'primaryText-Emphasis': [5, 44, 101],
    'secondaryText-Emphasis': [43, 47, 50],
    'successText-Emphasis': [10, 54, 34],
    'infoText-Emphasis': [5, 81, 96],
    'warningText-Emphasis': [102, 77, 3],
    'dangerText-Emphasis': [88, 21, 28],
    'lightText-Emphasis': [73, 80, 87],
    'darkText-Emphasis': [73, 80, 87],
    'primaryBg-Subtle': [207, 226, 255],
    'secondaryBg-Subtle': [226, 227, 229],
    'successBg-Subtle': [209, 231, 221],
    'infoBg-Subtle': [207, 244, 252],
    'warningBg-Subtle': [255, 243, 205],
    'dangerBg-Subtle': [248, 215, 218],
    'lightBg-Subtle': [252, 252, 253],
    'darkBg-Subtle': [206, 212, 218],
    'primaryBorder-Subtle': [158, 197, 254],
    'secondaryBorder-Subtle': [196, 200, 203],
    'successBorder-Subtle': [163, 207, 187],
    'infoBorder-Subtle': [158, 234, 249],
    'warningBorder-Subtle': [255, 230, 156],
    'dangerBorder-Subtle': [241, 174, 181],
    'lightBorder-Subtle': [233, 236, 239],
    'darkBorder-Subtle': [173, 181, 189],
    bodyColor: [33, 37, 41],
    bodyBg: [240, 240, 240],
    emphasisColor: [0, 0, 0],
    secondaryBg: [233, 236, 239],
    tertiaryBg: [248, 249, 250],
    linkColor: [13, 110, 253],
    'linkHover-Color': [10, 88, 202],
    codeColor: [214, 51, 132],
    highlightColor: [33, 37, 41],
    highlightBg: [255, 243, 205],
    borderColor: [222, 226, 230],
    'formValid-Color': [25, 135, 84],
    'formValid-Border-Color': [25, 135, 84],
    'formInvalid-Color': [220, 53, 69],
    'formInvalid-Border-Color': [220, 53, 69],
    // colors-extended.css
    // "indigo": Color.fromHex('#4b0082').rgba.values,
    'indigo-light': [202, 128, 255, 1],
    // "indigo-light": Color.fromHex('#ca80ff').rgba.values,
    'indigo-dark': [25, 0, 51, 1],
    // "indigo-dark": Color.fromHex('#1e0033').rgba.values,

    // "teal": Color.fromHex('#1fc794').rgba.values,
    'teal-light': [233, 252, 246, 1],
    // "teal-light": Color.fromHex('#e9fcf6').rgba.values,
    'teal-dark': [0, 51, 51, 1],
    // "teal-dark": Color.fromHex('#158463').rgba.values,

    // "orange": Color.fromHex('#ff6600').rgba.values,
    'orange-light': [255, 209, 179, 1],
    // "orange-light": Color.fromHex('#ffd1b3').rgba.values,
    'orange-dark': [204, 102, 0, 1],
    // "orange-dark": Color.fromHex('#b34700').rgba.values,

    // "pink": Color.fromHex('#ff33cc').rgba.values,
    'pink-light': [255, 204, 242, 1],
    // "pink-light": Color.fromHex('#ffccf2').rgba.values,
    'pink-dark': [204, 0, 153, 1],
    // "pink-dark": Color.fromHex('#e600ac').rgba.values,

    // "maroon": Color.fromHex('#800000').rgba.values,
    'purple-light': [255, 204, 255, 1],
    // "maroon-light": Color.fromHex('#ff8080').rgba.values,
    'purple-dark': [51, 0, 51, 1],
    // "maroon-dark": Color.fromHex('#330000').rgba.values,

    // "navy": Color.fromHex('#000066').rgba.values,
    'navy-light': [204, 204, 255, 1],
    // "navy-light": Color.fromHex('#6666ff').rgba.values,
    'navy-dark': [0, 0, 51, 1],
    // "navy-dark": Color.fromHex('#00001a').rgba.values,

    // "yellow": Color.fromHex('#ffff00').rgba.values,
    'yellow-light': [255, 255, 179, 1],
    // "yellow-light": Color.fromHex('#ffffb3').rgba.values,
    'yellow-dark': [204, 204, 0, 1],
    // "yellow-dark": Color.fromHex('#b3b300').rgba.values,

    lime: [0, 255, 0, 1],
    // "lime": Color.fromHex('#00ff00').rgba.values,
    'lime-light': [179, 255, 179, 1],
    // "lime-light": Color.fromHex('#b3ffb3').rgba.values,
    'lime-dark': [0, 153, 0, 1],
    // "lime-dark": Color.fromHex('#00b300').rgba.values,

    // "gray": Color.fromHex('#808080').rgba.values,
    'gray-light': [230, 230, 230, 1],
    // "gray-light": Color.fromHex('#e6e6e6').rgba.values,
    'gray-dark': [51, 51, 51, 1],
    // "gray-dark": Color.fromHex('#595959').rgba.values,

    brown: [153, 51, 0, 1],
    // "brown": Color.fromHex('#993300').rgba.values,
    'brown-light': [255, 187, 153, 1],
    // "brown-light": Color.fromHex('#ffbb99').rgba.values,
    'brown-dark': [102, 0, 0, 1],
    // "brown-dark": Color.fromHex('#4d1a00').rgba.values,

    grape: [153, 0, 153, 1],
    // "grape": Color.fromHex('#b9135b').rgba.values,
    'grape-light': [255, 204, 255, 1],
    // "grape-light": Color.fromHex('#f5a3c6').rgba.values,
    'grape-dark': [102, 0, 102, 1],
    // "grape-dark": Color.fromHex('#730c39').rgba.values,

    vermillion: [227, 66, 52, 1],
    // "vermillion": Color.fromHex('#e34234').rgba.values,
    'vermillion-light': [255, 204, 204, 1],
    // "vermillion-light": Color.fromHex('#f6c1bc').rgba.values,
    'vermillion-dark': [179, 0, 0, 1],
    // "vermillion-dark": Color.fromHex('#b42518').rgba.values,

    steel: [103, 103, 153, 1],
    // "steel": Color.fromHex('#878f99').rgba.values,
    'steel-light': [204, 204, 255, 1],
    // "steel-light": Color.fromHex('#a2b9bc').rgba.values,
    'steel-dark': [51, 51, 102, 1],
    // "steel-dark": Color.fromHex('#6b5b95').rgba.values,

    // "green": Color.fromHex('#006600').rgba.values,
    'green-light': [179, 255, 179, 1],
    // "green-light": Color.fromHex('#66ff66').rgba.values,
    'green-dark': [0, 51, 0, 1]
    // "green-dark": Color.fromHex('#003300').rgba.values
};

export type BootstrapColor = keyof typeof BootstrapColors;
export type colorArray = [number, number, number, number];

export type colors = {
    [key: string]: colorArray;
};

export type ClosestColor = {
    name: string;
    distance: number;
    color: Color;
};

/**
 * Represents a color with RGB and alpha values, providing utilities for color manipulation,
 * conversion, and generation.
 */
export class Color {
    /**
     * Parses a CSS color string and returns a Color object.
     * Supports named colors, Bootstrap colors, hex, rgb, and hsl formats.
     * @param color - The color string to parse (e.g., "red", "#ff0000", "rgb(255,0,0)", "hsl(0,100%,50%)")
     * @returns A Color object representing the parsed color
     * @example
     * ```ts
     * Color.parse("red")
     * Color.parse("#ff0000")
     * Color.parse("rgb(255, 0, 0)")
     * Color.parse("hsl(0, 100%, 50%)")
     * ```
     */
    static parse(color: string | ColorStr | BootstrapColor): Color {
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
            const parsed = color.match(/\(([^)]+)\)/);

            // error parsing
            if (!parsed) return new Color('rgb(0,0,0)');

            const colors: number[] = parsed[1]
                .split(',')
                .map(n => parseInt(n, 10));

            switch (color.split('(')[0]) {
                case 'rgb':
                    return Color.fromRGB(
                        colors[0],
                        colors[1],
                        colors[2],
                        colors[3]
                    );
                case 'hsl':
                    return Color.fromHSL(
                        colors[0],
                        colors[1],
                        colors[2],
                        colors[3]
                    );
                default:
                    return new Color('rgb(0,0,0)');
            }
        }
    }

    /**
     * Creates a Color from a hexadecimal color string.
     * @param hex - Hex color string (e.g., "#ff0000", "#f00", "#ff0000ff")
     * @returns A new Color object
     * @example
     * ```ts
     * Color.fromHex("#ff0000")  // Red
     * Color.fromHex("#f00")     // Red (shorthand)
     * Color.fromHex("#ff0000ff") // Red with full opacity
     * ```
     */
    static fromHex(hex: string): Color {
        if (hex.length === 4) {
            const [r, g, b] = hex
                .slice(1)
                .split('')
                .map(n => parseInt(n, 16));

            return new Color(r * 17, g * 17, b * 17);
        }

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        let a = parseInt(hex.slice(7, 9), 16) / 255;
        if (isNaN(a)) a = 1;

        return new Color(r, g, b, a);
    }

    /**
     * Creates a Color from RGB values.
     * @param r - Red value (0-255)
     * @param g - Green value (0-255)
     * @param b - Blue value (0-255)
     * @param a - Alpha value (0-1), defaults to 1
     * @returns A new Color object
     */
    static fromRGB(r: number, g: number, b: number, a?: number): Color {
        return new Color(r, g, b, a);
    }

    /**
     * Creates a Color from HSL values.
     * @param h - Hue (0-1)
     * @param s - Saturation (0-1)
     * @param l - Lightness (0-1)
     * @param a - Alpha value (0-1), defaults to 1
     * @returns A new Color object
     * @example
     * ```ts
     * Color.fromHSL(0, 1, 0.5)      // Red
     * Color.fromHSL(0.33, 1, 0.5)   // Green
     * Color.fromHSL(0.66, 1, 0.5)   // Blue
     * ```
     */
    static fromHSL(h: number, s: number, l: number, a?: number): Color {
        const params = ['hue', 'saturation', 'lightness'];
        const values = [h, s, l];
        
        values.forEach((v, i) => {
            if (isNaN(v)) {
                throw new Error(
                    `Invalid ${params[i]}, ${v} is not a parsable number`
                );
            }
        });

        // Clamp values to 0-1 range
        if (h > 1) {
            console.warn(`Invalid hue, ${h} is greater than 1. It will be set to 1`);
            h = 1;
        }
        if (h < 0) {
            console.warn(`Invalid hue, ${h} is less than 0. It will be set to 0`);
            h = 0;
        }
        if (s > 1) {
            console.warn(`Invalid saturation, ${s} is greater than 1. It will be set to 1`);
            s = 1;
        }
        if (s < 0) {
            console.warn(`Invalid saturation, ${s} is less than 0. It will be set to 0`);
            s = 0;
        }
        if (l > 1) {
            console.warn(`Invalid lightness, ${l} is greater than 1. It will be set to 1`);
            l = 1;
        }
        if (l < 0) {
            console.warn(`Invalid lightness, ${l} is less than 0. It will be set to 0`);
            l = 0;
        }

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
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;

            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return new Color(r * 255, g * 255, b * 255, a);
    }

    /**
     * Generates a random color.
     * @returns A new Color object with random RGB values
     */
    static random(): Color {
        return new Color(
            Math.random() * 255,
            Math.random() * 255,
            Math.random() * 255
        );
    }

    /**
     * Creates a Color from a named CSS color.
     * @param name - The name of the color (e.g., "red", "blue", "aliceblue")
     * @returns A new Color object, or undefined if the name is not recognized
     */
    static fromName<T extends ColorStr>(name: T): Color;
    static fromName(name: ColorStr): Color | undefined {
        const c = Color.colors[name];

        if (c) return new Color(...c);
    }

    /**
     * Creates a Color from a Bootstrap color name.
     * @param name - The name of the Bootstrap color (e.g., "primary", "danger", "success")
     * @returns A new Color object, or undefined if the name is not recognized
     */
    static fromBootstrap<T extends BootstrapColor>(name: T): Color;
    static fromBootstrap(name: BootstrapColor): Color | undefined {
        const c = Color.bootstrap[name];

        if (c) return new Color(...c);
    }

    /**
     * Generates a random color that contrasts with the provided colors.
     * Finds the largest gap in hue values and generates a color in that range.
     * @param colors - Colors to contrast against
     * @returns A new Color object with high contrast
     */
    static generateRandomWithContrast(...colors: Color[]): Color {
        type interval = {
            diff: number;
            hues: number[];
        };

        const hues: number[] = colors.map(c => c.hsl.hue);

        const intervals = hues.reduce((intervals, hue, i): interval[] => {
            const next = hues[i + 1];
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
     * Calculates the contrast ratio between two colors according to WCAG standards.
     * @param color1 - First color
     * @param color2 - Second color
     * @returns Contrast ratio (1-21). Values >= 4.5 are generally readable, >= 7 is preferred.
     * @example
     * ```ts
     * const contrast = Color.detectContrast(Color.fromName("black"), Color.fromName("white"));
     * // Returns 21 (maximum contrast)
     * ```
     */
    public static detectContrast(color1: Color, color2: Color): number {
        const l1 =
            0.2126 * Math.pow(color1.r / 255, 2.2) +
            0.7152 * Math.pow(color1.g / 255, 2.2) +
            0.0722 * Math.pow(color1.b / 255, 2.2);
        const l2 =
            0.2126 * Math.pow(color2.r / 255, 2.2) +
            0.7152 * Math.pow(color2.g / 255, 2.2) +
            0.0722 * Math.pow(color2.b / 255, 2.2);
        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }

    /**
     * All colors and their RGB values
     */
    static get colors(): {
        [key in ColorStr]: colorArray;
    } {
        return colors as {
            [key in ColorStr]: colorArray;
        };
    }

    /**
     * Get the bootstrap colors
     */
    static get bootstrap(): {
        [key in BootstrapColor]: colorArray;
    } {
        return BootstrapColors as {
            [key in BootstrapColor]: colorArray;
        };
    }

    /**
     * @returns {Object} The closest color name and its distance
     * @property {string} name The name of the closest color
     * @property {number} distance The distance between the colors
     * @property {Color} color The closest color
     */
    get closestName(): ClosestColor {
        const { colors } = Color;
        const [r, g, b] = [this.r, this.g, this.b];

        return Object.entries(colors).reduce(
            (closest, [name, rgb]) => {
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
            },
            {
                name: '',
                distance: Infinity,
                color: new Color(0, 0, 0)
            } as ClosestColor
        );
    }

    /**
     * @returns {Object} The closest bootstrap color and its distance
     */
    get closestBootstrap(): ClosestColor {
        const { bootstrap } = Color;
        const [r, g, b] = [this.r, this.g, this.b];

        return Object.entries(bootstrap).reduce(
            (closest, [name, rgb]) => {
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
            },
            {
                name: '',
                distance: Infinity,
                color: new Color(0, 0, 0)
            } as ClosestColor
        );
    }

    private readonly r: number;
    private readonly g: number;
    private readonly b: number;
    private readonly a: number;


    private withValues(r = this.r, g = this.g, b = this.b, a = this.a): Color {
        return new Color(r, g, b, a);
    }

    /**
     * Creates a new Color instance.
     * @param redOrString - Red value (0-255), or a color string to parse
     * @param green - Green value (0-255)
     * @param blue - Blue value (0-255)
     * @param alpha - Alpha value (0-1), defaults to 1
     * @example
     * ```ts
     * new Color(255, 0, 0)           // Red
     * new Color(255, 0, 0, 0.5)      // Semi-transparent red
     * new Color("red")                // Named color
     * new Color("#ff0000")            // Hex color
     * ```
     */
    constructor(
        redOrString: number | string | ColorStr | BootstrapColor,
        green?: number,
        blue?: number,
        alpha?: number
    ) {
        if (typeof redOrString === 'string') {
            if (
                green !== undefined ||
                blue !== undefined ||
                alpha !== undefined
            ) {
                throw new Error(
                    'Invalid arguments. If the first argument is a string, the other arguments must be undefined.'
                );
            }

            const c = Color.parse(redOrString);

            this.r = c.r;
            this.g = c.g;
            this.b = c.b;
            this.a = c.a;
        } else {
            const check: string[] = ['red', 'green', 'blue', 'alpha'];

            [redOrString, green, blue, alpha].forEach((value, index) => {
                if (value === undefined) return;
                if (isNaN(value)) {
                    throw new Error(
                        `Invalid ${check[index]}, ${value} is not a parsable number`
                    );
                }
            });

            // Clamp RGB values to 0-255
            if (redOrString > 255) {
                console.warn(`Invalid red, ${redOrString} is greater than 255. It will be set to 255`);
                redOrString = 255;
            }
            if (redOrString < 0) {
                console.warn(`Invalid red, ${redOrString} is less than 0. It will be set to 0`);
                redOrString = 0;
            }
            if (green !== undefined) {
                if (green > 255) {
                    console.warn(`Invalid green, ${green} is greater than 255. It will be set to 255`);
                    green = 255;
                }
                if (green < 0) {
                    console.warn(`Invalid green, ${green} is less than 0. It will be set to 0`);
                    green = 0;
                }
            }
            if (blue !== undefined) {
                if (blue > 255) {
                    console.warn(`Invalid blue, ${blue} is greater than 255. It will be set to 255`);
                    blue = 255;
                }
                if (blue < 0) {
                    console.warn(`Invalid blue, ${blue} is less than 0. It will be set to 0`);
                    blue = 0;
                }
            }

            alpha = alpha || 1;
            
            // Clamp alpha to 0-1
            if (alpha > 1) {
                console.warn(`Invalid alpha, ${alpha} is greater than 1. It will be set to 1`);
                alpha = 1;
            }
            if (alpha < 0) {
                console.warn(`Invalid alpha, ${alpha} is less than 0. It will be set to 0`);
                alpha = 0;
            }

            // Round RGB values to integers
            this.r = Math.round(redOrString);
            this.g = Math.round(green || 0);
            this.b = Math.round(blue || 0);
            this.a = alpha;
        }
    }

    /**
     * Sets the alpha (opacity) value.
     * @param value - Alpha value (0-1), will be clamped to valid range
     * @returns This Color instance for method chaining
     */
    setAlpha(value: number): Color {
        if (value > 1) {
            console.warn(`Invalid alpha, ${value} is greater than 1. It will be set to 1`);
            value = 1;
        }
        if (value < 0) {
            console.warn(`Invalid alpha, ${value} is less than 0. It will be set to 0`);
            value = 0;
        }
        return this.withValues(this.r, this.g, this.b, value);
    }

    /**
     * Sets the red channel value.
     * @param value - Red value (0-255), will be clamped to valid range and rounded to integer
     * @returns This Color instance for method chaining
     */
    setRed(value: number): Color {
        if (value > 255) {
            console.warn(`Invalid red, ${value} is greater than 255. It will be set to 255`);
            value = 255;
        }
        if (value < 0) {
            console.warn(`Invalid red, ${value} is less than 0. It will be set to 0`);
            value = 0;
        }
        return this.withValues(Math.round(value), this.g, this.b, this.a);
    }
    
    /**
     * Sets the green channel value.
     * @param value - Green value (0-255), will be clamped to valid range and rounded to integer
     * @returns This Color instance for method chaining
     */
    setGreen(value: number): Color {
        if (value > 255) {
            console.warn(`Invalid green, ${value} is greater than 255. It will be set to 255`);
            value = 255;
        }
        if (value < 0) {
            console.warn(`Invalid green, ${value} is less than 0. It will be set to 0`);
            value = 0;
        }
        return this.withValues(this.r, Math.round(value), this.b, this.a);
    }
    
    /**
     * Sets the blue channel value.
     * @param value - Blue value (0-255), will be clamped to valid range and rounded to integer
     * @returns This Color instance for method chaining
     */
    setBlue(value: number): Color {
        if (value > 255) {
            console.warn(`Invalid blue, ${value} is greater than 255. It will be set to 255`);
            value = 255;
        }
        if (value < 0) {
            console.warn(`Invalid blue, ${value} is less than 0. It will be set to 0`);
            value = 0;
        }
        return this.withValues(this.r, this.g, Math.round(value), this.a);
    }

    /**
     * Sets the hue while preserving saturation and lightness.
     * @param value - Hue value (0-1)
     * @returns This Color instance for method chaining
     */
    setHue(value: number): Color {
        const hsl = this.hsl
        const newColor = Color.fromHSL(value, hsl.saturation, hsl.lightness, this.a);
        return this.withValues(
            Math.round(newColor.r),
            Math.round(newColor.g),
            Math.round(newColor.b),
            this.a
        );
    }

    /**
     * Sets the saturation while preserving hue and lightness.
     * @param value - Saturation value (0-1)
     * @returns This Color instance for method chaining
     */
    setSaturation(value: number): Color {
        const hsl = this.hsl
        const newColor = Color.fromHSL(hsl.hue, value, hsl.lightness, this.a);
        return this.withValues(
            Math.round(newColor.r),
            Math.round(newColor.g),
            Math.round(newColor.b),
            this.a
        );
    }

    /**
     * Sets the lightness while preserving hue and saturation.
     * @param value - Lightness value (0-1)
     * @returns This Color instance for method chaining
     */
    setLightness(value: number): Color {
        const hsl = this.hsl
        const newColor = Color.fromHSL(hsl.hue, hsl.saturation, value, this.a);
        return this.withValues(
            Math.round(newColor.r),
            Math.round(newColor.g),
            Math.round(newColor.b),
            this.a
        );
    }

    /**
     * Gets the red channel value.
     * @returns Red value (0-255)
     */
    get red() {
        return this.r;
    }

    /**
     * Gets the green channel value.
     * @returns Green value (0-255)
     */
    get green() {
        return this.g;
    }

    /**
     * Gets the blue channel value.
     * @returns Blue value (0-255)
     */
    get blue() {
        return this.b;
    }

    /**
     * Gets the alpha (opacity) value.
     * @returns Alpha value (0-1)
     */
    get alpha() {
        return this.a;
    }

    /**
     * Gets the HSL representation of this color.
     * @returns Object containing hue, saturation, and lightness values (all 0-1)
     * @private
     */
    private get hsl() {
        const me = this;
        let h: number, s: number;

        const r = me.r / 255;
        const g = me.g / 255;
        const b = me.b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        const l = (max + min) / 2;

        h = s = 0;

        if (max == min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }

            h /= 6;
        }
        return {
            hue: h,
            saturation: s,
            lightness: l,
        }
    }

    /**
     * Gets the hue value.
     * @returns Hue value (0-1)
     */
    get hue() {
        return this.hsl.hue;
    }

    /**
     * Gets the saturation value.
     * @returns Saturation value (0-1)
     */
    get saturation() {
        return this.hsl.saturation;
    }

    /**
     * Gets the lightness value.
     * @returns Lightness value (0-1)
     */
    get lightness() {
        return this.hsl.lightness;
    }

    /**
     * Converts the color to a string representation.
     * @param type - Output format: 'hex', 'hexa', 'hsl', 'hsla', 'rgb', or 'rgba' (default)
     * @returns String representation of the color
     * @example
     * ```ts
     * color.toString('hex')   // "#ff0000"
     * color.toString('rgb')   // "rgb(255, 0, 0)"
     * color.toString('hsl')   // "hsl(0, 100%, 50%)"
     * color.toString('rgba')  // "rgba(255, 0, 0, 1)"
     * ```
     */
    public toString(
        type: 'hex' | 'hexa' | 'hsl' | 'hsla' | 'rgb' | 'rgba' = 'rgba'
    ): string {
        switch (type) {
            case 'hex':
                const rHex = Math.round(this.r).toString(16).padStart(2, '0');
                const gHex = Math.round(this.g).toString(16).padStart(2, '0');
                const bHex = Math.round(this.b).toString(16).padStart(2, '0');
                return `#${rHex}${gHex}${bHex}`;
            case 'hexa':
                const rHexA = Math.round(this.r).toString(16).padStart(2, '0');
                const gHexA = Math.round(this.g).toString(16).padStart(2, '0');
                const bHexA = Math.round(this.b).toString(16).padStart(2, '0');
                const aHex = Math.round(this.a * 255)
                    .toString(16)
                    .padStart(2, '0');
                return `#${rHexA}${gHexA}${bHexA}${aHex}`;
            case 'hsl':
                const hsl = this.hsl;
                return `hsl(${Math.round(hsl.hue * 360)}, ${Math.round(
                    hsl.saturation * 100
                )}%, ${Math.round(hsl.lightness * 100)}%)`;
            case 'hsla':
                const hsla = this.hsl;
                return `hsla(${Math.round(hsla.hue * 360)}, ${Math.round(
                    hsla.saturation * 100
                )}%, ${Math.round(hsla.lightness * 100)}%, ${this.a})`;
            case 'rgb':
                return `rgb(${this.r}, ${this.g}, ${this.b})`;
            case 'rgba':
                return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
            default:
                return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        }
    }

    /**
     * Darkens the color by decreasing its lightness.
     * Mutates the current color instance.
     * @param amount - Amount to darken (0-1)
     * @returns This Color instance for method chaining
     */
    darken(amount: number): Color {
        const hsl = this.hsl;
        const newLightness = Math.max(0, hsl.lightness - amount);
        return Color.fromHSL(hsl.hue, hsl.saturation, newLightness, this.a);
    }

    /**
     * Lightens the color by increasing its lightness.
     * Mutates the current color instance.
     * @param amount - Amount to lighten (0-1)
     * @returns This Color instance for method chaining
     */
    lighten(amount: number): Color {
        const hsl = this.hsl;
        const newLightness = Math.min(1, hsl.lightness + amount);
        return Color.fromHSL(hsl.hue, hsl.saturation, newLightness, this.a);
    }

    /**
     * Inverts the color by subtracting each RGB channel from 255.
     * Mutates the current color instance. Alpha is preserved.
     * @returns This Color instance for method chaining
     */
    invert(): Color {
        return this.withValues(
            Math.round(255 - this.r),
            Math.round(255 - this.g),
            Math.round(255 - this.b),
            this.a
        );
    }

    /**
     * Generates complementary colors by distributing them evenly around the color wheel.
     * @param num - Number of colors to generate (minimum 2)
     * @returns Array of Color objects including this color and its complements
     * @example
     * ```ts
     * const colors = color.complement(3); // Returns 3 evenly spaced colors
     * ```
     */
    public complement(num: number): Color[] {
        num = Math.floor(num);
        if (num < 2) num = 2;

        const interval = 1 / num;
        const hsl = this.hsl;
        const hues = new Array(num - 1).fill(0).map((_, i) => {
            return (hsl.hue + (i + 1) * interval) % 1;
        });

        const g = [
            this.withValues(),
            ...hues.map(h => Color.fromHSL(h, hsl.saturation, hsl.lightness, this.a))
        ];

        return g
    }

    /**
     * Generates an analogous color scheme (three colors adjacent on the color wheel).
     * @returns Tuple of three Color objects: [left neighbor, this color, right neighbor]
     */
    public analogous(): [Color, Color, Color] {
        const hsl = this.hsl;
        const color1 = Color.fromHSL(
            (hsl.hue + 1 / 12) % 1,
            hsl.saturation,
            hsl.lightness,
            this.a
        );
        const color2 = this;
        const color3 = Color.fromHSL(
            (hsl.hue + 11 / 12) % 1,
            hsl.saturation,
            hsl.lightness,
            this.a
        );

        return [color1, color2, color3];
    }

    /**
     * Interpolates between this color and another color.
     * Creates a new color that is a blend between the two.
     * @param toColor - Target color to interpolate towards
     * @param distance - Interpolation distance (0-1), where 0 is this color and 1 is the target
     * @returns A new Color object representing the interpolated color
     * @example
     * ```ts
     * const red = new Color(255, 0, 0);
     * const blue = new Color(0, 0, 255);
     * const purple = red.interpolate(blue, 0.5); // 50% between red and blue
     * ```
     */
    public interpolate(toColor: Color, distance = 0.5): Color {
        if (isNaN(distance)) {
            console.warn(
                'Distance must be a number between 0 and 1. Defaulting to 0.5'
            );
            distance = 0.5;
        }

        if (!(toColor instanceof Color)) {
            console.warn(
                'toColor must be an instance of Color. Defaulting to black'
            );
            toColor = new Color(0, 0, 0);
        }

        if (distance < 0 || distance > 1) {
            console.warn(
                'Distance must be a number between 0 and 1. Defaulting to 0.5'
            );
            distance = 0.5;
        }

        const [r1, g1, b1, a1] = [this.r, this.g, this.b, this.a];
        const [r2, g2, b2, a2] = [toColor.r, toColor.g, toColor.b, toColor.a];

        const r = r1 + (r2 - r1) * distance;
        const g = g1 + (g2 - g1) * distance;
        const b = b1 + (b2 - b1) * distance;
        const a = a1 + (a2 - a1) * distance;

        return new Color(r, g, b, a);
    }


    // view in console

    /**
     * Logs text to the console with this color applied.
     * @param args - Text and values to log
     */
    public logText(...args: any) {
        console.log(`%c${args.join(' ')}`, `color: ${this.toString()}`);
    }

    /**
     * Displays the color in the console with its closest named color.
     */
    public view() {
        this.logText('Color:', this.closestName.name);
    }
}
