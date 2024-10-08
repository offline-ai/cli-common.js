import { type Command, Help } from '@oclif/core';
import { uText } from './u-text';

const defaultBanner = 'AI'

export function showBanner(s?: string) {
  if (s) {s = defaultBanner + ' ' + s} else {s = defaultBanner + ' Agent'}
  console.log(uText(s, {color: 'blue', })); // font: 'ANSI Shadow'
  // uText('AI Agent', {font: 'block', colors:['yellow', 'white'], gradient: 'yellow,red'})
}

export class CustomHelp extends Help {
  async showHelp(args: string[]) {
    // console.log(uText('AI Agent', 'green'));
    const i = args.indexOf('--no-banner')
    if (i === -1) {
      showBanner()
    } else {
      args.splice(i, 1)
    }

    super.showHelp(args);
    // console.dir('This will be displayed in multi-command CLIs', args);
  }

  async showCommandHelp(command: Command.Loadable) {
    // showBanner();
    super.showCommandHelp(command);
    // console.log('This will be displayed in single-command CLIs');
  }
}
