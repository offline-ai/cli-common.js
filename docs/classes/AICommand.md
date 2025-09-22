[**@offline-ai/cli-common**](../README.md)

***

[@offline-ai/cli-common](../globals.md) / AICommand

# Abstract Class: AICommand

Defined in: [packages/cli-common/src/ai-command.ts:10](https://github.com/offline-ai/cli-common.js/blob/1e1aff8c4c5ef6ac298adc1592a4046b5d0b00d9/src/ai-command.ts#L10)

## Extends

- `Command`

## Constructors

### Constructor

> **new AICommand**(`argv`, `config`): `AICommand`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:76

#### Parameters

##### argv

`string`[]

##### config

`Config`

#### Returns

`AICommand`

#### Inherited from

`Command.constructor`

## Properties

### argv

> **argv**: `string`[]

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:12

#### Inherited from

`Command.argv`

***

### config

> **config**: `Config`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:13

#### Inherited from

`Command.config`

***

### debug()

> `protected` **debug**: (...`args`) => `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:74

#### Parameters

##### args

...`any`[]

#### Returns

`void`

#### Inherited from

`Command.debug`

***

### id

> **id**: `undefined` \| `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:75

#### Inherited from

`Command.id`

***

### aliases

> `static` **aliases**: `string`[]

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:16

An array of aliases for this command.

#### Inherited from

`Command.aliases`

***

### args

> `static` **args**: `ArgInput`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:18

An order-dependent object of arguments for the command

#### Inherited from

`Command.args`

***

### baseFlags

> `static` **baseFlags**: `FlagInput`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:19

#### Inherited from

`Command.baseFlags`

***

### deprecateAliases?

> `static` `optional` **deprecateAliases**: `boolean`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:23

Emit deprecation warning when a command alias is used

#### Inherited from

`Command.deprecateAliases`

***

### deprecationOptions?

> `static` `optional` **deprecationOptions**: `Deprecation`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:24

#### Inherited from

`Command.deprecationOptions`

***

### description

> `static` **description**: `undefined` \| `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:30

A full description of how to use the command.

If no summary, the first line of the description will be used as the summary.

#### Inherited from

`Command.description`

***

### enableJsonFlag

> `static` **enableJsonFlag**: `boolean` = `true`

Defined in: [packages/cli-common/src/ai-command.ts:11](https://github.com/offline-ai/cli-common.js/blob/1e1aff8c4c5ef6ac298adc1592a4046b5d0b00d9/src/ai-command.ts#L11)

#### Overrides

`Command.enableJsonFlag`

***

### examples

> `static` **examples**: `Example`[]

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:46

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

***

### flags

> `static` **flags**: `Record`\<`string`, `any`\>

Defined in: [packages/cli-common/src/ai-command.ts:13](https://github.com/offline-ai/cli-common.js/blob/1e1aff8c4c5ef6ac298adc1592a4046b5d0b00d9/src/ai-command.ts#L13)

A hash of flags for the command

#### Overrides

`Command.flags`

***

### hasDynamicHelp

> `static` **hasDynamicHelp**: `boolean`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:49

#### Inherited from

`Command.hasDynamicHelp`

***

### help

> `static` **help**: `undefined` \| `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:50

#### Inherited from

`Command.help`

***

### hidden

> `static` **hidden**: `boolean`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:52

Hide the command from help

#### Inherited from

`Command.hidden`

***

### hiddenAliases

> `static` **hiddenAliases**: `string`[]

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:54

An array of aliases for this command that are hidden from help.

#### Inherited from

`Command.hiddenAliases`

***

### id

> `static` **id**: `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:56

A command ID, used mostly in error or verbose reporting.

#### Inherited from

`Command.id`

***

### plugin

> `static` **plugin**: `undefined` \| `Plugin`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:57

#### Inherited from

`Command.plugin`

***

### pluginAlias?

> `readonly` `static` `optional` **pluginAlias**: `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:58

#### Inherited from

`Command.pluginAlias`

***

### pluginName?

> `readonly` `static` `optional` **pluginName**: `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:59

#### Inherited from

`Command.pluginName`

***

### pluginType?

> `readonly` `static` `optional` **pluginType**: `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:60

#### Inherited from

`Command.pluginType`

***

### state?

> `static` `optional` **state**: `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:62

Mark the command as a given state (e.g. beta or deprecated) in help

#### Inherited from

`Command.state`

***

### strict

> `static` **strict**: `boolean`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:64

When set to false, allows a variable amount of arguments

#### Inherited from

`Command.strict`

***

### summary?

> `static` `optional` **summary**: `string`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:69

The tweet-sized description for your class, used in a parent-commands
sub-command listing and as the header for the command help.

#### Inherited from

`Command.summary`

***

### usage

> `static` **usage**: `undefined` \| `string` \| `string`[]

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:73

An override string (or strings) for the default usage documentation.

#### Inherited from

`Command.usage`

## Accessors

### ctor

#### Get Signature

> **get** `protected` **ctor**(): *typeof* `Command`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:86

##### Returns

*typeof* `Command`

#### Inherited from

`Command.ctor`

## Methods

### \_run()

> `protected` **\_run**\<`T`\>(): `Promise`\<`T`\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:87

#### Type Parameters

##### T

`T`

#### Returns

`Promise`\<`T`\>

#### Inherited from

`Command._run`

***

### catch()

> `protected` **catch**(`err`): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:88

#### Parameters

##### err

`CommandError`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.catch`

***

### error()

#### Call Signature

> **error**(`input`, `options`): `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:89

##### Parameters

###### input

`string` | `Error`

###### options

`object` & `PrettyPrintableError`

##### Returns

`void`

##### Inherited from

`Command.error`

#### Call Signature

> **error**(`input`, `options?`): `never`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:93

##### Parameters

###### input

`string` | `Error`

###### options?

`object` & `PrettyPrintableError`

##### Returns

`never`

##### Inherited from

`Command.error`

***

### exit()

> **exit**(`code?`): `never`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:97

#### Parameters

##### code?

`number`

#### Returns

`never`

#### Inherited from

`Command.exit`

***

### finally()

> `protected` **finally**(`_`): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:98

#### Parameters

##### \_

`undefined` | `Error`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.finally`

***

### init()

> `protected` **init**(): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:99

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.init`

***

### jsonEnabled()

> **jsonEnabled**(): `boolean`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:105

Determine if the command is being run with the --json flag in a command that supports it.

#### Returns

`boolean`

true if the command supports json and the --json flag is present

#### Inherited from

`Command.jsonEnabled`

***

### loadConfig()

> **loadConfig**(`configFile?`, `__namedParameters?`): `Promise`\<`any`\>

Defined in: [packages/cli-common/src/ai-command.ts:18](https://github.com/offline-ai/cli-common.js/blob/1e1aff8c4c5ef6ac298adc1592a4046b5d0b00d9/src/ai-command.ts#L18)

#### Parameters

##### configFile?

`string`

##### \_\_namedParameters?

`any` = `{}`

#### Returns

`Promise`\<`any`\>

***

### log()

> **log**(`message?`, ...`args?`): `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:106

#### Parameters

##### message?

`string`

##### args?

...`any`[]

#### Returns

`void`

#### Inherited from

`Command.log`

***

### logJson()

> `protected` **logJson**(`json`): `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:107

#### Parameters

##### json

`unknown`

#### Returns

`void`

#### Inherited from

`Command.logJson`

***

### logToStderr()

> **logToStderr**(`message?`, ...`args?`): `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:108

#### Parameters

##### message?

`string`

##### args?

...`any`[]

#### Returns

`void`

#### Inherited from

`Command.logToStderr`

***

### parse()

> `protected` **parse**\<`F`, `B`, `A`\>(`options?`, `argv?`): `Promise`\<`ParserOutput`\<`F`, `B`, `A`\>\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:109

#### Type Parameters

##### F

`F` *extends* `FlagOutput`

##### B

`B` *extends* `FlagOutput`

##### A

`A` *extends* `ArgOutput`

#### Parameters

##### options?

`Input`\<`F`, `B`, `A`\>

##### argv?

`string`[]

#### Returns

`Promise`\<`ParserOutput`\<`F`, `B`, `A`\>\>

#### Inherited from

`Command.parse`

***

### run()

> `abstract` **run**(): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:113

actual command run code goes here

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Command.run`

***

### toErrorJson()

> `protected` **toErrorJson**(`err`): `any`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:114

#### Parameters

##### err

`unknown`

#### Returns

`any`

#### Inherited from

`Command.toErrorJson`

***

### toSuccessJson()

> `protected` **toSuccessJson**(`result`): `any`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:115

#### Parameters

##### result

`unknown`

#### Returns

`any`

#### Inherited from

`Command.toSuccessJson`

***

### warn()

> **warn**(`input`): `string` \| `Error`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:116

#### Parameters

##### input

`string` | `Error`

#### Returns

`string` \| `Error`

#### Inherited from

`Command.warn`

***

### warnIfCommandDeprecated()

> `protected` **warnIfCommandDeprecated**(): `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:117

#### Returns

`void`

#### Inherited from

`Command.warnIfCommandDeprecated`

***

### warnIfFlagDeprecated()

> `protected` **warnIfFlagDeprecated**(`flags`): `void`

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:118

#### Parameters

##### flags

`Record`\<`string`, `unknown`\>

#### Returns

`void`

#### Inherited from

`Command.warnIfFlagDeprecated`

***

### run()

> `static` **run**\<`T`\>(`this`, `argv?`, `opts?`): `Promise`\<`ReturnType`\<`T`\[`"run"`\]\>\>

Defined in: node\_modules/.pnpm/@oclif+core@4.2.10/node\_modules/@oclif/core/lib/command.d.ts:85

instantiate and run the command

#### Type Parameters

##### T

`T` *extends* `Command`

#### Parameters

##### this

(`argv`, `config`) => `T`

the command class

##### argv?

`string`[]

argv

##### opts?

`LoadOptions`

options

#### Returns

`Promise`\<`ReturnType`\<`T`\[`"run"`\]\>\>

result

#### Inherited from

`Command.run`
