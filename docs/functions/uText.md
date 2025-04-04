[**@offline-ai/cli-common**](../README.md)

***

[@offline-ai/cli-common](../globals.md) / uText

# Function: uText()

> **uText**(`s`, `options`?): `string`

Defined in: node\_modules/.pnpm/@isdk+artistic-text@0.1.1/node\_modules/@isdk/artistic-text/dist/index.d.ts:25

Generates artistic text with custom fonts and colors.

This function create styled text with a random or specified font, and applies color.

## Parameters

### s

`string`

The text to be styled.

### options?

[`ArtisticTextOptions`](../interfaces/ArtisticTextOptions.md)

Optional configuration for the text styling.

## Returns

`string`

The styled text.

## Examples

```ts
// Generate text with a random font and gray color
console.log(artisticText('Hello World'));
```

```ts
// Generate text with a specific font and color
console.log(artisticText('Hello World', { font: '3D-ASCII', color: 'blue' }));
```
