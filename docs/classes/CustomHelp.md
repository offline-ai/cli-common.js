[**@offline-ai/cli-common**](../README.md)

***

[@offline-ai/cli-common](../globals.md) / CustomHelp

# Class: CustomHelp

Defined in: [packages/cli-common/src/help.ts:12](https://github.com/offline-ai/cli-common.js/blob/8734d711b72ab61c6e0e0da58f2d1482ff36341e/src/help.ts#L12)

## Extends

- `Help`

## Constructors

### Constructor

> **new CustomHelp**(`config`, `opts?`): `CustomHelp`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:24

#### Parameters

##### config

`Config`

##### opts?

`Partial`\<`HelpOptions`\>

#### Returns

`CustomHelp`

#### Inherited from

`Help.constructor`

## Properties

### CommandHelpClass

> `protected` **CommandHelpClass**: *typeof* `CommandHelp`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:23

#### Inherited from

`Help.CommandHelpClass`

***

### config

> `protected` **config**: `Config`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:17

#### Inherited from

`Help.config`

***

### indentSpacing

> **indentSpacing**: `number`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:18

#### Inherited from

`Help.indentSpacing`

***

### opts

> `protected` **opts**: `HelpOptions`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:19

#### Inherited from

`Help.opts`

***

### render()

> **render**: (`input`) => `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:28

Takes a string and replaces `<%= prop =>` with the value of prop, where prop is anything on
`config=Interfaces.Config` or `opts=Interface.HelpOptions`.

```javascript
`<%= config.bin =>` // will resolve to the bin defined in `pjson.oclif`.
```

#### Parameters

##### input

`string`

#### Returns

`string`

#### Inherited from

`Help.render`

## Accessors

### sortedCommands

#### Get Signature

> **get** `protected` **sortedCommands**(): `Loadable`[]

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:26

##### Returns

`Loadable`[]

#### Inherited from

`Help.sortedCommands`

***

### sortedTopics

#### Get Signature

> **get** `protected` **sortedTopics**(): `Topic`[]

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:27

##### Returns

`Topic`[]

#### Inherited from

`Help.sortedTopics`

## Methods

### command()

> `protected` **command**(`command`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:28

#### Parameters

##### command

`Loadable`

#### Returns

`string`

#### Inherited from

`Help.command`

***

### description()

> `protected` **description**(`c`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:29

#### Parameters

##### c

`Loadable`

#### Returns

`string`

#### Inherited from

`Help.description`

***

### formatCommand()

> `protected` **formatCommand**(`command`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:30

#### Parameters

##### command

`Loadable`

#### Returns

`string`

#### Inherited from

`Help.formatCommand`

***

### formatCommands()

> `protected` **formatCommands**(`commands`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:31

#### Parameters

##### commands

`Loadable`[]

#### Returns

`string`

#### Inherited from

`Help.formatCommands`

***

### formatRoot()

> `protected` **formatRoot**(): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:32

#### Returns

`string`

#### Inherited from

`Help.formatRoot`

***

### formatTopic()

> `protected` **formatTopic**(`topic`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:33

#### Parameters

##### topic

`Topic`

#### Returns

`string`

#### Inherited from

`Help.formatTopic`

***

### formatTopics()

> `protected` **formatTopics**(`topics`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:34

#### Parameters

##### topics

`Topic`[]

#### Returns

`string`

#### Inherited from

`Help.formatTopics`

***

### getCommandHelpClass()

> `protected` **getCommandHelpClass**(`command`): `CommandHelp`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:35

#### Parameters

##### command

`Loadable`

#### Returns

`CommandHelp`

#### Inherited from

`Help.getCommandHelpClass`

***

### indent()

> **indent**(`body`, `spacing?`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:59

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

##### body

`string`

the text to indent

##### spacing?

`number`

the final number of spaces this text will be indented

#### Returns

`string`

the formatted indented text

#### Inherited from

`Help.indent`

***

### log()

> `protected` **log**(...`args`): `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:36

#### Parameters

##### args

...`string`[]

#### Returns

`void`

#### Inherited from

`Help.log`

***

### renderList()

> **renderList**(`input`, `opts`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:60

#### Parameters

##### input

(`undefined` \| `string`)[][]

##### opts

###### indentation

`number`

###### multiline?

`boolean`

###### spacer?

`string`

###### stripAnsi?

`boolean`

#### Returns

`string`

#### Inherited from

`Help.renderList`

***

### section()

> **section**(`header`, `body`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:66

#### Parameters

##### header

`string`

##### body

`string` | \[`string`, `undefined` \| `string`\][] | `HelpSection` | `HelpSectionKeyValueTable`

#### Returns

`string`

#### Inherited from

`Help.section`

***

### showCommandHelp()

> **showCommandHelp**(`command`): `Promise`\<`void`\>

Defined in: [packages/cli-common/src/help.ts:26](https://github.com/offline-ai/cli-common.js/blob/8734d711b72ab61c6e0e0da58f2d1482ff36341e/src/help.ts#L26)

#### Parameters

##### command

`Loadable`

#### Returns

`Promise`\<`void`\>

#### Overrides

`Help.showCommandHelp`

***

### showHelp()

> **showHelp**(`args`): `Promise`\<`void`\>

Defined in: [packages/cli-common/src/help.ts:13](https://github.com/offline-ai/cli-common.js/blob/8734d711b72ab61c6e0e0da58f2d1482ff36341e/src/help.ts#L13)

#### Parameters

##### args

`string`[]

#### Returns

`Promise`\<`void`\>

#### Overrides

`Help.showHelp`

***

### showRootHelp()

> `protected` **showRootHelp**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:39

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Help.showRootHelp`

***

### showTopicHelp()

> `protected` **showTopicHelp**(`topic`): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:40

#### Parameters

##### topic

`Topic`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Help.showTopicHelp`

***

### summary()

> `protected` **summary**(`c`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/index.d.ts:41

#### Parameters

##### c

`Loadable`

#### Returns

`undefined` \| `string`

#### Inherited from

`Help.summary`

***

### wrap()

> **wrap**(`body`, `spacing?`): `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/help/formatter.d.ts:95

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

##### body

`string`

the text to wrap

##### spacing?

`number`

the indentation size to subtract from the terminal width

#### Returns

`string`

the formatted wrapped text

#### Inherited from

`Help.wrap`
