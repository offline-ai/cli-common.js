[@offline-ai/cli-common](README.md) / Exports

# @offline-ai/cli-common

## Table of contents

### Classes

- [AICommand](classes/AICommand.md)
- [CustomHelp](classes/CustomHelp.md)

### Variables

- [AICommonFlags](modules.md#aicommonflags)
- [DEFAULT\_CONFIG\_NAME](modules.md#default_config_name)

### Functions

- [expandConfig](modules.md#expandconfig)
- [expandPath](modules.md#expandpath)
- [getXDGConfigs](modules.md#getxdgconfigs)
- [loadAIConfig](modules.md#loadaiconfig)
- [loadConfig](modules.md#loadconfig)
- [loadConfigFile](modules.md#loadconfigfile)
- [showBanner](modules.md#showbanner)
- [uText](modules.md#utext)

## Variables

### AICommonFlags

• `Const` **AICommonFlags**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agentDirs` | `OptionFlag`\<`undefined` \| `string`[], `CustomOptions`\> |
| `api` | `OptionFlag`\<`undefined` \| `URL`, `CustomOptions`\> |
| `arguments` | `OptionFlag`\<`undefined` \| `string`, `CustomOptions`\> |
| `backupChat` | `BooleanFlag`\<`boolean`\> |
| `brainDir` | `OptionFlag`\<`undefined` \| `string`, `CustomOptions`\> |
| `dataFile` | `OptionFlag`\<`undefined` \| `string`, `CustomOptions`\> |
| `histories` | `OptionFlag`\<`undefined` \| `string`, `CustomOptions`\> |
| `inputs` | `OptionFlag`\<`undefined` \| `string`, `CustomOptions`\> |
| `interactive` | `BooleanFlag`\<`boolean`\> |
| `logLevel` | `OptionFlag`\<`undefined` \| `string`, `CustomOptions`\> |
| `newChat` | `BooleanFlag`\<`boolean`\> |
| `no-chats` | `BooleanFlag`\<`boolean`\> |
| `no-inputs` | `BooleanFlag`\<`boolean`\> |
| `promptDirs` | `OptionFlag`\<`undefined` \| `string`[], `CustomOptions`\> |
| `script` | `OptionFlag`\<`undefined` \| `string`, `CustomOptions`\> |
| `stream` | `BooleanFlag`\<`boolean`\> |

#### Defined in

[packages/cli-common/src/ai-command.ts:104](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/ai-command.ts#L104)

___

### DEFAULT\_CONFIG\_NAME

• `Const` **DEFAULT\_CONFIG\_NAME**: ``".ai"``

#### Defined in

[packages/cli-common/src/load-config.ts:1](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/load-config.ts#L1)

## Functions

### expandConfig

▸ **expandConfig**(`config`, `defaultConfig`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |
| `defaultConfig` | `any` |

#### Returns

`any`

#### Defined in

[packages/cli-common/src/load-config.ts:18](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/load-config.ts#L18)

___

### expandPath

▸ **expandPath**(`path`, `config?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `config?` | `any` |

#### Returns

`any`

#### Defined in

[packages/cli-common/src/load-config.ts:67](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/load-config.ts#L67)

___

### getXDGConfigs

▸ **getXDGConfigs**(`config`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `XDG_BIN_HOME` | `string` |
| `XDG_CACHE_HOME` | `any` |
| `XDG_CONFIG_HOME` | `any` |
| `XDG_DATA_HOME` | `any` |

#### Defined in

[packages/cli-common/src/load-config.ts:57](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/load-config.ts#L57)

___

### loadAIConfig

▸ **loadAIConfig**(`config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `any` |

#### Returns

`any`

#### Defined in

[packages/cli-common/src/load-config.ts:53](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/load-config.ts#L53)

___

### loadConfig

▸ **loadConfig**(`filename`, `config`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `config` | `any` |

#### Returns

`any`

#### Defined in

[packages/cli-common/src/load-config.ts:27](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/load-config.ts#L27)

___

### loadConfigFile

▸ **loadConfigFile**(`filename`, `searchPaths?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `searchPaths` | `string`[] |

#### Returns

`any`

#### Defined in

[packages/cli-common/src/load-config.ts:9](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/load-config.ts#L9)

___

### showBanner

▸ **showBanner**(`s?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s?` | `string` |

#### Returns

`void`

#### Defined in

[packages/cli-common/src/help.ts:6](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/help.ts#L6)

___

### uText

▸ **uText**(`s`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |
| `options` | `any` |

#### Returns

`any`

#### Defined in

[packages/cli-common/src/u-text.ts:17](https://github.com/offline-ai/cli-common.js/blob/67bb5c911a9d4560353014b988476b81e4bff797/src/u-text.ts#L17)
