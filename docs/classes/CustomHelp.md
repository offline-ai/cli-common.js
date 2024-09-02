[@offline-ai/cli-common](../README.md) / [Exports](../modules.md) / CustomHelp

# Class: CustomHelp

## Hierarchy

- `Help`

  ↳ **`CustomHelp`**

## Table of contents

### Constructors

- [constructor](CustomHelp.md#constructor)

### Properties

- [CommandHelpClass](CustomHelp.md#commandhelpclass)
- [config](CustomHelp.md#config)
- [indentSpacing](CustomHelp.md#indentspacing)
- [opts](CustomHelp.md#opts)
- [render](CustomHelp.md#render)

### Accessors

- [\_topics](CustomHelp.md#_topics)
- [sortedCommands](CustomHelp.md#sortedcommands)
- [sortedTopics](CustomHelp.md#sortedtopics)

### Methods

- [command](CustomHelp.md#command)
- [description](CustomHelp.md#description)
- [formatCommand](CustomHelp.md#formatcommand)
- [formatCommands](CustomHelp.md#formatcommands)
- [formatRoot](CustomHelp.md#formatroot)
- [formatTopic](CustomHelp.md#formattopic)
- [formatTopics](CustomHelp.md#formattopics)
- [getCommandHelpClass](CustomHelp.md#getcommandhelpclass)
- [indent](CustomHelp.md#indent)
- [log](CustomHelp.md#log)
- [renderList](CustomHelp.md#renderlist)
- [section](CustomHelp.md#section)
- [showCommandHelp](CustomHelp.md#showcommandhelp)
- [showHelp](CustomHelp.md#showhelp)
- [showRootHelp](CustomHelp.md#showroothelp)
- [showTopicHelp](CustomHelp.md#showtopichelp)
- [summary](CustomHelp.md#summary)
- [wrap](CustomHelp.md#wrap)

## Constructors

### constructor

• **new CustomHelp**(`config`, `opts?`): [`CustomHelp`](CustomHelp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |
| `opts?` | `Partial`\<`HelpOptions`\> |

#### Returns

[`CustomHelp`](CustomHelp.md)

#### Inherited from

Help.constructor

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:24

## Properties

### CommandHelpClass

• `Protected` **CommandHelpClass**: typeof `CommandHelp`

#### Inherited from

Help.CommandHelpClass

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:23

___

### config

• `Protected` **config**: `Config`

#### Inherited from

Help.config

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:17

___

### indentSpacing

• **indentSpacing**: `number`

#### Inherited from

Help.indentSpacing

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:18

___

### opts

• `Protected` **opts**: `HelpOptions`

#### Inherited from

Help.opts

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:19

___

### render

• **render**: (`input`: `string`) => `string`

Takes a string and replaces `<%= prop =>` with the value of prop, where prop is anything on
`config=Interfaces.Config` or `opts=Interface.HelpOptions`.

```javascript
`<%= config.bin =>` // will resolve to the bin defined in `pjson.oclif`.
```

#### Type declaration

▸ (`input`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

##### Returns

`string`

#### Inherited from

Help.render

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:28

## Accessors

### \_topics

• `get` **_topics**(): `any`

#### Returns

`any`

#### Inherited from

Help.\_topics

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:41

___

### sortedCommands

• `get` **sortedCommands**(): `Loadable`[]

#### Returns

`Loadable`[]

#### Inherited from

Help.sortedCommands

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:25

___

### sortedTopics

• `get` **sortedTopics**(): `Topic`[]

#### Returns

`Topic`[]

#### Inherited from

Help.sortedTopics

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:26

## Methods

### command

▸ **command**(`command`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Loadable` |

#### Returns

`string`

#### Inherited from

Help.command

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:27

___

### description

▸ **description**(`c`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Loadable` |

#### Returns

`string`

#### Inherited from

Help.description

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:28

___

### formatCommand

▸ **formatCommand**(`command`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Loadable` |

#### Returns

`string`

#### Inherited from

Help.formatCommand

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:29

___

### formatCommands

▸ **formatCommands**(`commands`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands` | `Loadable`[] |

#### Returns

`string`

#### Inherited from

Help.formatCommands

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:30

___

### formatRoot

▸ **formatRoot**(): `string`

#### Returns

`string`

#### Inherited from

Help.formatRoot

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:31

___

### formatTopic

▸ **formatTopic**(`topic`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `Topic` |

#### Returns

`string`

#### Inherited from

Help.formatTopic

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:32

___

### formatTopics

▸ **formatTopics**(`topics`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topics` | `Topic`[] |

#### Returns

`string`

#### Inherited from

Help.formatTopics

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:33

___

### getCommandHelpClass

▸ **getCommandHelpClass**(`command`): `CommandHelp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Loadable` |

#### Returns

`CommandHelp`

#### Inherited from

Help.getCommandHelpClass

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:34

___

### indent

▸ **indent**(`body`, `spacing?`): `string`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | the text to indent |
| `spacing?` | `number` | the final number of spaces this text will be indented |

#### Returns

`string`

the formatted indented text

#### Inherited from

Help.indent

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:59

___

### log

▸ **log**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `string`[] |

#### Returns

`void`

#### Inherited from

Help.log

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:35

___

### renderList

▸ **renderList**(`input`, `opts`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | (`undefined` \| `string`)[][] |
| `opts` | `Object` |
| `opts.indentation` | `number` |
| `opts.multiline?` | `boolean` |
| `opts.spacer?` | `string` |
| `opts.stripAnsi?` | `boolean` |

#### Returns

`string`

#### Inherited from

Help.renderList

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:60

___

### section

▸ **section**(`header`, `body`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `body` | `string` \| [`string`, `undefined` \| `string`][] \| `HelpSection` \| `HelpSectionKeyValueTable` |

#### Returns

`string`

#### Inherited from

Help.section

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:66

___

### showCommandHelp

▸ **showCommandHelp**(`command`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Loadable` |

#### Returns

`Promise`\<`void`\>

#### Overrides

Help.showCommandHelp

#### Defined in

[packages/cli-common/src/help.ts:26](https://github.com/offline-ai/cli-common.js/blob/eb1dc9523bb49cce90c4b880e1af57ec6fba37d2/src/help.ts#L26)

___

### showHelp

▸ **showHelp**(`args`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |

#### Returns

`Promise`\<`void`\>

#### Overrides

Help.showHelp

#### Defined in

[packages/cli-common/src/help.ts:13](https://github.com/offline-ai/cli-common.js/blob/eb1dc9523bb49cce90c4b880e1af57ec6fba37d2/src/help.ts#L13)

___

### showRootHelp

▸ **showRootHelp**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

Help.showRootHelp

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:38

___

### showTopicHelp

▸ **showTopicHelp**(`topic`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `Topic` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

Help.showTopicHelp

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:39

___

### summary

▸ **summary**(`c`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `Loadable` |

#### Returns

`undefined` \| `string`

#### Inherited from

Help.summary

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/index.d.ts:40

___

### wrap

▸ **wrap**(`body`, `spacing?`): `string`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | the text to wrap |
| `spacing?` | `number` | the indentation size to subtract from the terminal width |

#### Returns

`string`

the formatted wrapped text

#### Inherited from

Help.wrap

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/help/formatter.d.ts:95
