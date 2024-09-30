[**@offline-ai/cli-common**](../README.md) • **Docs**

***

[@offline-ai/cli-common](../globals.md) / AICommand

# Class: `abstract` AICommand

## Extends

- `Command`

## Constructors

### new AICommand()

> **new AICommand**(`argv`, `config`): [`AICommand`](AICommand.md)

#### Parameters

• **argv**: `string`[]

• **config**: `Config`

#### Returns

[`AICommand`](AICommand.md)

#### Inherited from

`Command.constructor`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:76

## Properties

### argv

> **argv**: `string`[]

#### Inherited from

`Command.argv`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:12

***

### config

> **config**: `Config`

#### Inherited from

`Command.config`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:13

***

### debug()

> `protected` **debug**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Inherited from

`Command.debug`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:73

***

### id

> **id**: `undefined` \| `string`

#### Inherited from

`Command.id`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:74

***

### aliases

> `static` **aliases**: `string`[]

An array of aliases for this command.

#### Inherited from

`Command.aliases`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:15

***

### args

> `static` **args**: `ArgInput`\<`object`\>

An order-dependent object of arguments for the command

#### Inherited from

`Command.args`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:17

***

### baseFlags

> `static` **baseFlags**: `FlagInput`\<`object`\>

#### Inherited from

`Command.baseFlags`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:18

***

### deprecateAliases?

> `static` `optional` **deprecateAliases**: `boolean`

Emit deprecation warning when a command alias is used

#### Inherited from

`Command.deprecateAliases`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:22

***

### deprecationOptions?

> `static` `optional` **deprecationOptions**: `Deprecation`

#### Inherited from

`Command.deprecationOptions`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:23

***

### description

> `static` **description**: `undefined` \| `string`

A full description of how to use the command.

If no summary, the first line of the description will be used as the summary.

#### Inherited from

`Command.description`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:29

***

### enableJsonFlag

> `static` **enableJsonFlag**: `boolean` = `true`

#### Overrides

`Command.enableJsonFlag`

#### Defined in

[packages/cli-common/src/ai-command.ts:11](https://github.com/offline-ai/cli-common.js/blob/2d53abf8afb8587ffdfc1f85181f5f61366d5241/src/ai-command.ts#L11)

***

### examples

> `static` **examples**: `Example`[]

An array of examples to show at the end of the command's help.

IF only a string is provided, it will try to look for a line that starts
with the cmd.bin as the example command and the rest as the description.
If found, the command will be formatted appropriately.

```
EXAMPLES:
  A description of a particular use case.

    $ <%= config.bin => command flags
```

#### Inherited from

`Command.examples`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:45

***

### flags

> `static` **flags**: `Record`\<`string`, `any`\>

A hash of flags for the command

#### Overrides

`Command.flags`

#### Defined in

[packages/cli-common/src/ai-command.ts:13](https://github.com/offline-ai/cli-common.js/blob/2d53abf8afb8587ffdfc1f85181f5f61366d5241/src/ai-command.ts#L13)

***

### hasDynamicHelp

> `static` **hasDynamicHelp**: `boolean`

#### Inherited from

`Command.hasDynamicHelp`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:48

***

### help

> `static` **help**: `undefined` \| `string`

#### Inherited from

`Command.help`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:49

***

### hidden

> `static` **hidden**: `boolean`

Hide the command from help

#### Inherited from

`Command.hidden`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:51

***

### hiddenAliases

> `static` **hiddenAliases**: `string`[]

An array of aliases for this command that are hidden from help.

#### Inherited from

`Command.hiddenAliases`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:53

***

### id

> `static` **id**: `string`

A command ID, used mostly in error or verbose reporting.

#### Inherited from

`Command.id`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:55

***

### plugin

> `static` **plugin**: `undefined` \| `Plugin`

#### Inherited from

`Command.plugin`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:56

***

### pluginAlias?

> `readonly` `static` `optional` **pluginAlias**: `string`

#### Inherited from

`Command.pluginAlias`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:57

***

### pluginName?

> `readonly` `static` `optional` **pluginName**: `string`

#### Inherited from

`Command.pluginName`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:58

***

### pluginType?

> `readonly` `static` `optional` **pluginType**: `string`

#### Inherited from

`Command.pluginType`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:59

***

### state?

> `static` `optional` **state**: `string`

Mark the command as a given state (e.g. beta or deprecated) in help

#### Inherited from

`Command.state`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:61

***

### strict

> `static` **strict**: `boolean`

When set to false, allows a variable amount of arguments

#### Inherited from

`Command.strict`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:63

***

### summary?

> `static` `optional` **summary**: `string`

The tweet-sized description for your class, used in a parent-commands
sub-command listing and as the header for the command help.

#### Inherited from

`Command.summary`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:68

***

### usage

> `static` **usage**: `undefined` \| `string` \| `string`[]

An override string (or strings) for the default usage documentation.

#### Inherited from

`Command.usage`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:72

## Accessors

### ctor

> `get` `protected` **ctor**(): *typeof* `Command`

#### Returns

*typeof* `Command`

#### Inherited from

`Command.ctor`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:90

## Methods

### \_run()

> `protected` **\_run**\<`T`\>(): `Promise`\<`T`\>

#### Type Parameters

• **T**

#### Returns

`Promise`\<`T`\>

#### Inherited from

`Command._run`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:118

***

### catch()

> `protected` **catch**(`err`): `Promise`\<`any`\>

#### Parameters

• **err**: `CommandError`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.catch`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:91

***

### error()

#### error(input, options)

> **error**(`input`, `options`): `void`

##### Parameters

• **input**: `string` \| `Error`

• **options**: `object` & `PrettyPrintableError`

##### Returns

`void`

##### Inherited from

`Command.error`

##### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:92

#### error(input, options)

> **error**(`input`, `options`?): `never`

##### Parameters

• **input**: `string` \| `Error`

• **options?**: `object` & `PrettyPrintableError`

##### Returns

`never`

##### Inherited from

`Command.error`

##### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:96

***

### exit()

> **exit**(`code`?): `never`

#### Parameters

• **code?**: `number`

#### Returns

`never`

#### Inherited from

`Command.exit`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:100

***

### finally()

> `protected` **finally**(`_`): `Promise`\<`any`\>

#### Parameters

• **\_**: `undefined` \| `Error`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.finally`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:101

***

### init()

> `protected` **init**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.init`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:102

***

### jsonEnabled()

> **jsonEnabled**(): `boolean`

Determine if the command is being run with the --json flag in a command that supports it.

#### Returns

`boolean`

true if the command supports json and the --json flag is present

#### Inherited from

`Command.jsonEnabled`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:108

***

### loadConfig()

> **loadConfig**(`configFile`?, `__namedParameters`?): `Promise`\<`any`\>

#### Parameters

• **configFile?**: `string`

• **\_\_namedParameters?**: `any` = `{}`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/cli-common/src/ai-command.ts:18](https://github.com/offline-ai/cli-common.js/blob/2d53abf8afb8587ffdfc1f85181f5f61366d5241/src/ai-command.ts#L18)

***

### log()

> **log**(`message`?, ...`args`?): `void`

#### Parameters

• **message?**: `string`

• ...**args?**: `any`[]

#### Returns

`void`

#### Inherited from

`Command.log`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:109

***

### logJson()

> `protected` **logJson**(`json`): `void`

#### Parameters

• **json**: `unknown`

#### Returns

`void`

#### Inherited from

`Command.logJson`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:110

***

### logToStderr()

> **logToStderr**(`message`?, ...`args`?): `void`

#### Parameters

• **message?**: `string`

• ...**args?**: `any`[]

#### Returns

`void`

#### Inherited from

`Command.logToStderr`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:111

***

### parse()

> `protected` **parse**\<`F`, `B`, `A`\>(`options`?, `argv`?): `Promise`\<`ParserOutput`\<`F`, `B`, `A`\>\>

#### Type Parameters

• **F** *extends* `FlagOutput`

• **B** *extends* `FlagOutput`

• **A** *extends* `ArgOutput`

#### Parameters

• **options?**: `Input`\<`F`, `B`, `A`\>

• **argv?**: `string`[]

#### Returns

`Promise`\<`ParserOutput`\<`F`, `B`, `A`\>\>

#### Inherited from

`Command.parse`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:112

***

### run()

> `abstract` **run**(): `Promise`\<`any`\>

actual command run code goes here

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.run`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:80

***

### toErrorJson()

> `protected` **toErrorJson**(`err`): `any`

#### Parameters

• **err**: `unknown`

#### Returns

`any`

#### Inherited from

`Command.toErrorJson`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:113

***

### toSuccessJson()

> `protected` **toSuccessJson**(`result`): `any`

#### Parameters

• **result**: `unknown`

#### Returns

`any`

#### Inherited from

`Command.toSuccessJson`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:114

***

### warn()

> **warn**(`input`): `string` \| `Error`

#### Parameters

• **input**: `string` \| `Error`

#### Returns

`string` \| `Error`

#### Inherited from

`Command.warn`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:115

***

### warnIfCommandDeprecated()

> `protected` **warnIfCommandDeprecated**(): `void`

#### Returns

`void`

#### Inherited from

`Command.warnIfCommandDeprecated`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:116

***

### warnIfFlagDeprecated()

> `protected` **warnIfFlagDeprecated**(`flags`): `void`

#### Parameters

• **flags**: `Record`\<`string`, `unknown`\>

#### Returns

`void`

#### Inherited from

`Command.warnIfFlagDeprecated`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:117

***

### run()

> `static` **run**\<`T`\>(`this`, `argv`?, `opts`?): `Promise`\<`ReturnType`\<`T`\[`"run"`\]\>\>

instantiate and run the command

#### Type Parameters

• **T** *extends* `Command`

#### Parameters

• **this**

the command class

• **argv?**: `string`[]

argv

• **opts?**: `LoadOptions`

options

#### Returns

`Promise`\<`ReturnType`\<`T`\[`"run"`\]\>\>

result

#### Inherited from

`Command.run`

#### Defined in

node\_modules/.pnpm/@oclif+core@4.0.17/node\_modules/@oclif/core/lib/command.d.ts:89
