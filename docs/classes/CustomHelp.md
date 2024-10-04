[**@offline-ai/cli-common**](../README.md) • **Docs**

***

[@offline-ai/cli-common](../globals.md) / CustomHelp

# Class: CustomHelp

## Extends

- `Help`

## Constructors

### new CustomHelp()

> **new CustomHelp**(`config`, `opts`?): [`CustomHelp`](CustomHelp.md)

#### Parameters

• **config**: `Config`

• **opts?**: `Partial`\<`HelpOptions`\>

#### Returns

[`CustomHelp`](CustomHelp.md)

#### Inherited from

`Help.constructor`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:24

## Properties

### CommandHelpClass

> `protected` **CommandHelpClass**: *typeof* `CommandHelp`

#### Inherited from

`Help.CommandHelpClass`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:23

***

### config

> `protected` **config**: `Config`

#### Inherited from

`Help.config`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:17

***

### indentSpacing

> **indentSpacing**: `number`

#### Inherited from

`Help.indentSpacing`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:18

***

### opts

> `protected` **opts**: `HelpOptions`

#### Inherited from

`Help.opts`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:19

***

### render()

> **render**: (`input`) => `string`

Takes a string and replaces `<%= prop =>` with the value of prop, where prop is anything on
`config=Interfaces.Config` or `opts=Interface.HelpOptions`.

```javascript
`<%= config.bin =>` // will resolve to the bin defined in `pjson.oclif`.
```

#### Parameters

• **input**: `string`

#### Returns

`string`

#### Inherited from

`Help.render`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:28

## Accessors

### sortedCommands

> `get` `protected` **sortedCommands**(): `Loadable`[]

#### Returns

`Loadable`[]

#### Inherited from

`Help.sortedCommands`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:25

***

### sortedTopics

> `get` `protected` **sortedTopics**(): `Topic`[]

#### Returns

`Topic`[]

#### Inherited from

`Help.sortedTopics`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:26

## Methods

### command()

> `protected` **command**(`command`): `string`

#### Parameters

• **command**: `Loadable`

#### Returns

`string`

#### Inherited from

`Help.command`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:27

***

### description()

> `protected` **description**(`c`): `string`

#### Parameters

• **c**: `Loadable`

#### Returns

`string`

#### Inherited from

`Help.description`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:28

***

### formatCommand()

> `protected` **formatCommand**(`command`): `string`

#### Parameters

• **command**: `Loadable`

#### Returns

`string`

#### Inherited from

`Help.formatCommand`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:29

***

### formatCommands()

> `protected` **formatCommands**(`commands`): `string`

#### Parameters

• **commands**: `Loadable`[]

#### Returns

`string`

#### Inherited from

`Help.formatCommands`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:30

***

### formatRoot()

> `protected` **formatRoot**(): `string`

#### Returns

`string`

#### Inherited from

`Help.formatRoot`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:31

***

### formatTopic()

> `protected` **formatTopic**(`topic`): `string`

#### Parameters

• **topic**: `Topic`

#### Returns

`string`

#### Inherited from

`Help.formatTopic`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:32

***

### formatTopics()

> `protected` **formatTopics**(`topics`): `string`

#### Parameters

• **topics**: `Topic`[]

#### Returns

`string`

#### Inherited from

`Help.formatTopics`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:33

***

### getCommandHelpClass()

> `protected` **getCommandHelpClass**(`command`): `CommandHelp`

#### Parameters

• **command**: `Loadable`

#### Returns

`CommandHelp`

#### Inherited from

`Help.getCommandHelpClass`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:34

***

### indent()

> **indent**(`body`, `spacing`?): `string`

Indent by `this.indentSpacing`. The text should be wrap based on terminal width before indented.

In order to call indent multiple times on the same set or text, the caller must wrap based on
the number of times the text has been indented. For example.

```javascript
const body = `main line\n${indent(wrap('indented example line', 4))}`
const header = 'SECTION'
console.log(`${header}\n${indent(wrap(body))}`
```
will output
```
SECTION
  main line
    indented example line
```

If the terminal width was 24 and the `4` was not provided in the first wrap, it would like like the following.
```
SECTION
  main line
    indented example
  line
```

#### Parameters

• **body**: `string`

the text to indent

• **spacing?**: `number`

the final number of spaces this text will be indented

#### Returns

`string`

the formatted indented text

#### Inherited from

`Help.indent`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:59

***

### log()

> `protected` **log**(...`args`): `void`

#### Parameters

• ...**args**: `string`[]

#### Returns

`void`

#### Inherited from

`Help.log`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:35

***

### renderList()

> **renderList**(`input`, `opts`): `string`

#### Parameters

• **input**: (`undefined` \| `string`)[][]

• **opts**

• **opts.indentation**: `number`

• **opts.multiline?**: `boolean`

• **opts.spacer?**: `string`

• **opts.stripAnsi?**: `boolean`

#### Returns

`string`

#### Inherited from

`Help.renderList`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:60

***

### section()

> **section**(`header`, `body`): `string`

#### Parameters

• **header**: `string`

• **body**: `string` \| [`string`, `undefined` \| `string`][] \| `HelpSection` \| `HelpSectionKeyValueTable`

#### Returns

`string`

#### Inherited from

`Help.section`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:66

***

### showCommandHelp()

> **showCommandHelp**(`command`): `Promise`\<`void`\>

#### Parameters

• **command**: `Loadable`

#### Returns

`Promise`\<`void`\>

#### Overrides

`Help.showCommandHelp`

#### Defined in

[packages/cli-common/src/help.ts:26](https://github.com/offline-ai/cli-common.js/blob/f5403084c6cad1017bb1dc2f58143687de078061/src/help.ts#L26)

***

### showHelp()

> **showHelp**(`args`): `Promise`\<`void`\>

#### Parameters

• **args**: `string`[]

#### Returns

`Promise`\<`void`\>

#### Overrides

`Help.showHelp`

#### Defined in

[packages/cli-common/src/help.ts:13](https://github.com/offline-ai/cli-common.js/blob/f5403084c6cad1017bb1dc2f58143687de078061/src/help.ts#L13)

***

### showRootHelp()

> `protected` **showRootHelp**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Help.showRootHelp`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:38

***

### showTopicHelp()

> `protected` **showTopicHelp**(`topic`): `Promise`\<`void`\>

#### Parameters

• **topic**: `Topic`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Help.showTopicHelp`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:39

***

### summary()

> `protected` **summary**(`c`): `undefined` \| `string`

#### Parameters

• **c**: `Loadable`

#### Returns

`undefined` \| `string`

#### Inherited from

`Help.summary`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/index.d.ts:40

***

### wrap()

> **wrap**(`body`, `spacing`?): `string`

Wrap text according to `opts.maxWidth` which is typically set to the terminal width. All text
will be rendered before bring wrapped, otherwise it could mess up the lengths.

A terminal will automatically wrap text, so this method is primarily used for indented
text. For indented text, specify the indentation so it is taken into account during wrapping.

Here is an example of wrapping with indentation.
```
<------ terminal window width ------>
<---------- no indentation --------->
This is my text that will be wrapped
once it passes maxWidth.

<- indent -><------ text space ----->
            This is my text that will
            be wrapped once it passes
            maxWidth.

<-- indent not taken into account ->
            This is my text that will
be wrapped
            once it passes maxWidth.
```

#### Parameters

• **body**: `string`

the text to wrap

• **spacing?**: `number`

the indentation size to subtract from the terminal width

#### Returns

`string`

the formatted wrapped text

#### Inherited from

`Help.wrap`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/help/formatter.d.ts:95
