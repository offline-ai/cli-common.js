[@offline-ai/cli-common](../README.md) / [Exports](../modules.md) / AICommand

# Class: AICommand

## Hierarchy

- `Command`

  ↳ **`AICommand`**

## Table of contents

### Constructors

- [constructor](AICommand.md#constructor)

### Properties

- [argv](AICommand.md#argv)
- [config](AICommand.md#config)
- [debug](AICommand.md#debug)
- [id](AICommand.md#id)
- [aliases](AICommand.md#aliases)
- [args](AICommand.md#args)
- [baseFlags](AICommand.md#baseflags)
- [deprecateAliases](AICommand.md#deprecatealiases)
- [deprecationOptions](AICommand.md#deprecationoptions)
- [description](AICommand.md#description)
- [enableJsonFlag](AICommand.md#enablejsonflag)
- [examples](AICommand.md#examples)
- [flags](AICommand.md#flags)
- [hasDynamicHelp](AICommand.md#hasdynamichelp)
- [help](AICommand.md#help)
- [hidden](AICommand.md#hidden)
- [hiddenAliases](AICommand.md#hiddenaliases)
- [id](AICommand.md#id-1)
- [plugin](AICommand.md#plugin)
- [pluginAlias](AICommand.md#pluginalias)
- [pluginName](AICommand.md#pluginname)
- [pluginType](AICommand.md#plugintype)
- [state](AICommand.md#state)
- [strict](AICommand.md#strict)
- [summary](AICommand.md#summary)
- [usage](AICommand.md#usage)

### Accessors

- [ctor](AICommand.md#ctor)

### Methods

- [\_run](AICommand.md#_run)
- [catch](AICommand.md#catch)
- [error](AICommand.md#error)
- [exit](AICommand.md#exit)
- [finally](AICommand.md#finally)
- [init](AICommand.md#init)
- [jsonEnabled](AICommand.md#jsonenabled)
- [loadConfig](AICommand.md#loadconfig)
- [log](AICommand.md#log)
- [logJson](AICommand.md#logjson)
- [logToStderr](AICommand.md#logtostderr)
- [parse](AICommand.md#parse)
- [run](AICommand.md#run)
- [toErrorJson](AICommand.md#toerrorjson)
- [toSuccessJson](AICommand.md#tosuccessjson)
- [warn](AICommand.md#warn)
- [warnIfCommandDeprecated](AICommand.md#warnifcommanddeprecated)
- [warnIfFlagDeprecated](AICommand.md#warnifflagdeprecated)
- [run](AICommand.md#run-1)

## Constructors

### constructor

• **new AICommand**(`argv`, `config`): [`AICommand`](AICommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `argv` | `string`[] |
| `config` | `Config` |

#### Returns

[`AICommand`](AICommand.md)

#### Inherited from

Command.constructor

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:76

## Properties

### argv

• **argv**: `string`[]

#### Inherited from

Command.argv

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:12

___

### config

• **config**: `Config`

#### Inherited from

Command.config

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:13

___

### debug

• `Protected` **debug**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Inherited from

Command.debug

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:73

___

### id

• **id**: `undefined` \| `string`

#### Inherited from

Command.id

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:74

___

### aliases

▪ `Static` **aliases**: `string`[]

An array of aliases for this command.

#### Inherited from

Command.aliases

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:15

___

### args

▪ `Static` **args**: `ArgInput`\<\{ `[arg: string]`: `any`;  }\>

An order-dependent object of arguments for the command

#### Inherited from

Command.args

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:17

___

### baseFlags

▪ `Static` **baseFlags**: `FlagInput`\<\{ `[flag: string]`: `any`;  }\>

#### Inherited from

Command.baseFlags

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:18

___

### deprecateAliases

▪ `Static` `Optional` **deprecateAliases**: `boolean`

Emit deprecation warning when a command alias is used

#### Inherited from

Command.deprecateAliases

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:22

___

### deprecationOptions

▪ `Static` `Optional` **deprecationOptions**: `Deprecation`

#### Inherited from

Command.deprecationOptions

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:23

___

### description

▪ `Static` **description**: `undefined` \| `string`

A full description of how to use the command.

If no summary, the first line of the description will be used as the summary.

#### Inherited from

Command.description

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:29

___

### enableJsonFlag

▪ `Static` **enableJsonFlag**: `boolean` = `true`

#### Overrides

Command.enableJsonFlag

#### Defined in

[packages/cli-common/src/ai-command.ts:10](https://github.com/offline-ai/cli-common.js/blob/427d66628530c86ac7413f33d19036304f27ebf3/src/ai-command.ts#L10)

___

### examples

▪ `Static` **examples**: `Example`[]

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

Command.examples

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:45

___

### flags

▪ `Static` **flags**: `Record`\<`string`, `any`\>

#### Overrides

Command.flags

#### Defined in

[packages/cli-common/src/ai-command.ts:12](https://github.com/offline-ai/cli-common.js/blob/427d66628530c86ac7413f33d19036304f27ebf3/src/ai-command.ts#L12)

___

### hasDynamicHelp

▪ `Static` **hasDynamicHelp**: `boolean`

#### Inherited from

Command.hasDynamicHelp

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:48

___

### help

▪ `Static` **help**: `undefined` \| `string`

#### Inherited from

Command.help

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:49

___

### hidden

▪ `Static` **hidden**: `boolean`

Hide the command from help

#### Inherited from

Command.hidden

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:51

___

### hiddenAliases

▪ `Static` **hiddenAliases**: `string`[]

An array of aliases for this command that are hidden from help.

#### Inherited from

Command.hiddenAliases

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:53

___

### id

▪ `Static` **id**: `string`

A command ID, used mostly in error or verbose reporting.

#### Inherited from

Command.id

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:55

___

### plugin

▪ `Static` **plugin**: `undefined` \| `Plugin`

#### Inherited from

Command.plugin

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:56

___

### pluginAlias

▪ `Static` `Optional` `Readonly` **pluginAlias**: `string`

#### Inherited from

Command.pluginAlias

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:57

___

### pluginName

▪ `Static` `Optional` `Readonly` **pluginName**: `string`

#### Inherited from

Command.pluginName

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:58

___

### pluginType

▪ `Static` `Optional` `Readonly` **pluginType**: `string`

#### Inherited from

Command.pluginType

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:59

___

### state

▪ `Static` `Optional` **state**: `string`

Mark the command as a given state (e.g. beta or deprecated) in help

#### Inherited from

Command.state

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:61

___

### strict

▪ `Static` **strict**: `boolean`

When set to false, allows a variable amount of arguments

#### Inherited from

Command.strict

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:63

___

### summary

▪ `Static` `Optional` **summary**: `string`

The tweet-sized description for your class, used in a parent-commands
sub-command listing and as the header for the command help.

#### Inherited from

Command.summary

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:68

___

### usage

▪ `Static` **usage**: `undefined` \| `string` \| `string`[]

An override string (or strings) for the default usage documentation.

#### Inherited from

Command.usage

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:72

## Accessors

### ctor

• `get` **ctor**(): typeof `Command`

#### Returns

typeof `Command`

#### Inherited from

Command.ctor

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:90

## Methods

### \_run

▸ **_run**\<`T`\>(): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Promise`\<`T`\>

#### Inherited from

Command.\_run

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:118

___

### catch

▸ **catch**(`err`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `CommandError` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

Command.catch

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:91

___

### error

▸ **error**(`input`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |
| `options` | \{ `code?`: `string` ; `exit`: ``false``  } & `PrettyPrintableError` |

#### Returns

`void`

#### Inherited from

Command.error

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:92

▸ **error**(`input`, `options?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |
| `options?` | \{ `code?`: `string` ; `exit?`: `number`  } & `PrettyPrintableError` |

#### Returns

`never`

#### Inherited from

Command.error

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:96

___

### exit

▸ **exit**(`code?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`never`

#### Inherited from

Command.exit

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:100

___

### finally

▸ **finally**(`_`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `undefined` \| `Error` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

Command.finally

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:101

___

### init

▸ **init**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

Command.init

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:102

___

### jsonEnabled

▸ **jsonEnabled**(): `boolean`

Determine if the command is being run with the --json flag in a command that supports it.

#### Returns

`boolean`

true if the command supports json and the --json flag is present

#### Inherited from

Command.jsonEnabled

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:108

___

### loadConfig

▸ **loadConfig**(`configFile?`, `«destructured»?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configFile?` | `string` |
| `«destructured»` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/cli-common/src/ai-command.ts:17](https://github.com/offline-ai/cli-common.js/blob/427d66628530c86ac7413f33d19036304f27ebf3/src/ai-command.ts#L17)

___

### log

▸ **log**(`message?`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

Command.log

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:109

___

### logJson

▸ **logJson**(`json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `unknown` |

#### Returns

`void`

#### Inherited from

Command.logJson

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:110

___

### logToStderr

▸ **logToStderr**(`message?`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

Command.logToStderr

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:111

___

### parse

▸ **parse**\<`F`, `B`, `A`\>(`options?`, `argv?`): `Promise`\<`ParserOutput`\<`F`, `B`, `A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `FlagOutput` |
| `B` | extends `FlagOutput` |
| `A` | extends `ArgOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Input`\<`F`, `B`, `A`\> |
| `argv?` | `string`[] |

#### Returns

`Promise`\<`ParserOutput`\<`F`, `B`, `A`\>\>

#### Inherited from

Command.parse

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:112

___

### run

▸ **run**(): `Promise`\<`any`\>

actual command run code goes here

#### Returns

`Promise`\<`any`\>

#### Inherited from

Command.run

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:80

___

### toErrorJson

▸ **toErrorJson**(`err`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `unknown` |

#### Returns

`any`

#### Inherited from

Command.toErrorJson

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:113

___

### toSuccessJson

▸ **toSuccessJson**(`result`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `unknown` |

#### Returns

`any`

#### Inherited from

Command.toSuccessJson

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:114

___

### warn

▸ **warn**(`input`): `string` \| `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `Error` |

#### Returns

`string` \| `Error`

#### Inherited from

Command.warn

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:115

___

### warnIfCommandDeprecated

▸ **warnIfCommandDeprecated**(): `void`

#### Returns

`void`

#### Inherited from

Command.warnIfCommandDeprecated

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:116

___

### warnIfFlagDeprecated

▸ **warnIfFlagDeprecated**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `Record`\<`string`, `unknown`\> |

#### Returns

`void`

#### Inherited from

Command.warnIfFlagDeprecated

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:117

___

### run

▸ **run**\<`T`\>(`this`, `argv?`, `opts?`): `Promise`\<`ReturnType`\<`T`[``"run"``]\>\>

instantiate and run the command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Command` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | (`argv`: `string`[], `config`: `Config`) => `T` | the command class |
| `argv?` | `string`[] | argv |
| `opts?` | `LoadOptions` | options |

#### Returns

`Promise`\<`ReturnType`\<`T`[``"run"``]\>\>

result

#### Inherited from

Command.run

#### Defined in

node_modules/.pnpm/@oclif+core@4.0.17/node_modules/@oclif/core/lib/command.d.ts:89
