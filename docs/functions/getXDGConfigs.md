[**@offline-ai/cli-common**](../README.md) • **Docs**

***

[@offline-ai/cli-common](../globals.md) / getXDGConfigs

# Function: getXDGConfigs()

> **getXDGConfigs**(`config`): `object`

## Parameters

• **config**: `any`

## Returns

`object`

### XDG\_BIN\_HOME

> **XDG\_BIN\_HOME**: `string`

### XDG\_CACHE\_HOME

> **XDG\_CACHE\_HOME**: `any` = `config.cacheDir`

### XDG\_CONFIG\_HOME

> **XDG\_CONFIG\_HOME**: `any` = `config.configDir`

### XDG\_DATA\_HOME

> **XDG\_DATA\_HOME**: `any` = `config.dataDir`

## Defined in

[packages/cli-common/src/load-config.ts:57](https://github.com/offline-ai/cli-common.js/blob/dc4a3d3ac6eb2833ca38c81e2f7d617683e5fdc3/src/load-config.ts#L57)
