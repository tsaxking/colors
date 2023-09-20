# Colors

Hello, this is a simple client-side library for basic color theory

## Installation

```html
<script src="https://cdn.jsdelivr.net/package/npm/js-paint"></script>
```

```bash
npm i js-paint
```

<br>

## Usage

### Initialization
```typescript
// no import needed

// the color class

// Initializing a color: All of these are white
new Color(255, 255, 255);
new Color(255, 255, 255, 1);
new Color('rgb(255, 255, 255)'); 
new Color('rgba(255, 255, 255, 1)'); 
new Color('#ffffff'); 
new Color('hsl(0, 0%, 100%)'); 
new Color('white');
Color.fromName('white');
Color.fromBootstrap('light'); // bootstrap light color

// there is also
Color.random(); // generates a random color using Math.random()

// the gradient class
```

### Conversion/Manipulation
```typescript
const white = new Color(255, 255, 255);
const [r, g, b] = white.rgb.values;
const [h, s, l] = white.hsl.values;
const [_r, _g, _b] = white.hsv.values;

white.hue = 180;
white.saturation = 0.5;
white.lightness = 0.5;

white.r = 128;
white.g = 128;
white.b = 128;
white.a = 0.5;
```

### Palettes
```typescript
const red = new Color(255, 0, 0);
const compliment = red.compliment(4) // returns 4 complimentary colors
const complimentAsGradient = red.compliment(15, true) // returns 15 complimentary colors as a gradient object

const analogous = red.analogous() // returns the analogous colors (30 deg apart)

const interpolate = red.interpolate(new Color(0, 0, 255), 0.5) // returns a single color that is 50% between red and blue
const linearFade = red.linearFade(new Color(0, 255, 0), 60) // returns a 60 frame gradient object from red to green
const logarithmicFade = red.logarithmicFade(new Color(0, 255, 0), 60) // returns a 60 frame gradient object from red to green
const exponentialFade = red.exponentialFade(new Color(0, 255, 0), 60) // returns a 60 frame gradient object from red to green

const contrast = red.detectContrast(Color.from('pink')) // returns the contrast ratio between red and pink
```

### Viewing
```typescript
const pink = Color.from('pink');
pink.logText('Hello! My name is ___'); // logs the text in the color pink on the browser
pink.view(); // logs the color in the browser
```