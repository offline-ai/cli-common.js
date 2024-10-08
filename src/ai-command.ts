import path from 'path'
import { defaultsDeep } from 'lodash-es'
import {Command, Flags} from '@oclif/core'
import { parseJsJson, parseObjectArgumentInfos } from '@isdk/ai-tool'
import { LogLevelMap, logLevel } from '@isdk/ai-tool-agent'
import { DEFAULT_CONFIG_NAME, loadAIConfig, loadConfigFile } from './load-config'

// const CONFIG_BASE_NAME = '.ai'

export abstract class AICommand extends Command {
  static enableJsonFlag = true

  static flags : Record<string, any> = {
    config: Flags.file({description: 'the config file', exists: true}),
    banner: Flags.boolean({description: 'show banner', allowNo: true}),
  }

  async loadConfig(configFile?: string, {args, flags, skipLoadHook}: any = {}) {
    let result = loadAIConfig(this.config)
    if (configFile) {
      configFile = path.resolve(configFile)
      const config = loadConfigFile(configFile)
      if (!config) {
        this.error(`config file ${configFile} not found`)
      }
      result = defaultsDeep(config, result)
    }
    result.theme = this.config.theme
    if (flags) {
      if (typeof flags.logLevelMaxLen === 'number') {
        logLevel.maxLength = flags.logLevelMaxLen
      }

      if (flags.streamEcho) {
        if ((flags.streamEcho[0]).toLowerCase() === 'f') {
          result.streamEcho = false
        }
      }
      if (flags.interactive !== undefined) {result.interactive = flags.interactive}
      if (flags.brainDir) {result.brainDir = flags.brainDir}
      if (flags.agentDirs) {
        if (Array.isArray(result.agentDirs)) {
          result.agentDirs.push(...flags.agentDirs)
        } else {
          result.agentDirs = flags.agentDirs
        }
      }
      if (flags.histories) {result.chatsDir = flags.histories}
      if (flags.newChat) {result.newChat = flags.newChat}
      if (result.newChat === undefined && !result.interactive) {
        result.newChat = true
      }
      if (flags['no-chats']) {result.chatsDir = undefined}
      if (flags.inputs) {result.inputsDir = flags.inputs}
      if (flags['no-inputs']) {result.inputsDir = undefined}
      if (flags.stream !== undefined) {result.stream = flags.stream}
      if (result.stream === undefined) {result.stream = true}
      if (flags.banner !== undefined) {result.banner = flags.banner}
      const api = flags.api?.toString()
      if (api) {result.apiUrl = api}
      if (!result.apiUrl) {result.apiUrl = 'http://localhost:8080'}
      if (flags.logLevel) {result.logLevel = flags.logLevel}
      if (flags.script) {result.script = flags.script}

      if (flags.arguments) {result.arguments = result.arguments ? defaultsDeep(flags.arguments, result.arguments) : flags.arguments}
      if (flags.dataFile) {result.dataFile = flags.dataFile}

      let data = result.arguments
      const dataFile = result.dataFile
      if (dataFile) {
        const _data = loadConfigFile(dataFile)
        if (_data) {
          if (data) {
            data = defaultsDeep(data, _data)
          } else {
            data = _data
          }
        } else {
          const whetherInFile = result.arguments ? '' : ' in config file'
          this.error(`The data file "${dataFile}" not found${whetherInFile}!`)
        }
      }
      Object.defineProperty(result, 'data', {
        value: data,
        enumerable: false,
        writable: true,
      })
      defaultsDeep(result, flags)
    }

    if (!result.AI_CONFIG_BASENAME) {result.AI_CONFIG_BASENAME = DEFAULT_CONFIG_NAME}
    if (!configFile) {
      configFile =  result.AI_CONFIG_BASENAME as string
    }
    if (!path.isAbsolute(configFile)) {configFile = path.resolve(this.config.configDir, configFile)}
    Object.defineProperty(result, 'configFile', {
      value: configFile,
      enumerable: false,
    })

    if (args?.data) {
      const data = args.data
      if (result.hasOwnProperty('data')) {
        result.data = typeof data !== 'string' ? defaultsDeep(data, result.data) : data
      } else {
        Object.defineProperty(result, 'data', {
          value: data,
          enumerable: false,
          writable: true,
        })
      }
    }

    if (flags.data) {
      let data: any = flags.data.map((item: string, i: number) => {
        const ix = item.indexOf('=')
        if (ix > 0) {
          item = item.slice(0, ix) + ':' + item.slice(ix + 1)
        }
        return [true, item]
      })
      data = await parseObjectArgumentInfos(data)

      if (result.hasOwnProperty('data')) {
        result.data = typeof data !== 'string' ? defaultsDeep(data, result.data) : data
      } else {
        Object.defineProperty(result, 'data', {
          value: data,
          enumerable: false,
          writable: true,
        })
      }
    }

    if (!skipLoadHook) {await this.config.runHook('config:load', {id: this.id, userConfig: result})}

    return result
  }
}

export const AICommonFlags = {
  api: Flags.url({char: 'u', description: 'the api URL'}),
  apiKey: Flags.string({description: 'the api key (optional)'}),
  agentDirs: Flags.directory({char: 's', description: 'the search paths for ai-agent script file', exists: true, multiple: true}),
  logLevel: Flags.string({
    char: 'l', description: 'the log level',
    aliases: ['loglevel', 'log-level'],
    options: Object.keys(LogLevelMap),
  }),
  logLevelMaxLen: Flags.integer({
    aliases: ['loglen'],
    description: 'the max length of log item to display',
    dependsOn: ['logLevel'],
  }),
  interactive: Flags.boolean({char: 'i', description: 'interactive mode', allowNo: true}),
  histories: Flags.directory({description: 'the chat histories folder to record', exists: true}),
  newChat: Flags.boolean({char:'n', aliases:['new-chat'], description: 'whether to start a new chat history, defaults to false in interactive mode, true in non-interactive', allowNo: true}),
  backupChat: Flags.boolean({char:'k', aliases:['backup-chat'], description: 'whether to backup chat history before start, defaults to false'}),
  inputs: Flags.directory({char: 't', description: 'the input histories folder for interactive mode to record', exists: true, dependsOn: ['interactive']}),
  'no-chats': Flags.boolean({description: 'disable chat histories, defaults to false'}),
  'no-inputs': Flags.boolean({description: 'disable input histories, defaults to false', dependsOn: ['interactive']}),
  stream: Flags.boolean({char: 'm', description: 'stream mode, defaults to true', allowNo: true}),
  script: Flags.string({char: 'f', description: 'the ai-agent script file name or id'}),
  dataFile: Flags.file({char: 'd', description: 'the data file which will be passed to the ai-agent script'}),
  data: Flags.string({char: 'D', description: 'the data which will be passed to the ai-agent script: key1=value1 key2=value2', multiple: true }),
  arguments: Flags.string({
    char: 'a', description: 'the json data which will be passed to the ai-agent script',
    parse: (input: string) => parseJsJson(input),
  }),
  brainDir: Flags.directory({char: 'b', description: 'the brains(LLM) directory', exists: true}),
  promptDirs: Flags.directory({char: 'p', description: 'the prompts template directory', exists: true, multiple: true}),
  userPreferredLanguage: Flags.string({
    char: 'L', description: 'the ISO 639-1 code for the user preferred language to translate the AI result automatically, eg, en, zh, ja, ko, etc.',
    aliases: ['user-preferred-language'],
  }),
  aiPreferredLanguage: Flags.string({
    char: 'A', description: 'the ISO 639-1 code for the AI preferred language to translate the user input automatically, eg, en, etc.',
    aliases: ['ai-preferred-language'],
  }),
  streamEcho: Flags.string({
    char: 'e', description: 'stream echo mode, defaults to true',
    default: 'line',
    options: ['true', 'false', 'line'],
    allowNo: true,
    // dependsOn: ['stream'],
  }),

  streamEchoChars: Flags.integer({
    char: 'C', description: 'stream echo max characters limit',
    default: 80,
    // dependsOn: ['stream'],
  }),

  provider: Flags.string({
    char: 'P', description: 'the LLM provider, defaults to llamacpp',
  }),
}
