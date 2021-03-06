import parseArgs from 'minimist';
import { main as episodeOne } from './episode-1';
import { main as episodeTwo } from './episode-2';

const episodes = ['roles', 'random-user'];

let episode = process.argv.slice(2).includes('--name') ? parseArgs(process.argv.slice(2)).name[1] : parseArgs(process.argv.slice(2))._[0];
if (!episode) episode = null;

switch (episode) {
  case 'roles':
    console.log('Starting role notifications episode...');
    episodeOne();
    break;
  case 'random-user':
    console.log('Starting random reaction user episode...');
    episodeTwo();
    break;
  default:
    console.log('List of episodes:', episodes);
    console.log([
      'Usage: npm start --name [episode]',
      'Usage: yarn start --name [episode]'
    ].join('\n'));
    process.exit(0);
    break;
}
