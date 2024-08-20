import packageJson from '../package.json';
import { ManifestType } from '@src/manifest-type';

const manifest: ManifestType = {
  manifest_version: 3,
  name: 'Sink Tool',
  version: packageJson.version,
  description: packageJson.description,
  options_page: 'src/options/index.html',
  background: { service_worker: 'src/background/index.js' },
  action: {
    default_popup: 'src/popup/index.html',
    default_icon: 'icon32.png',
  },
  permissions: ['storage', 'tabs'],
  icons: {
    '16': 'icon16.png',
    '32': 'icon32.png',
    '48': 'icon48.png',
    '128': 'icon128.png',
    '256': 'icon256.png',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*', '<all_urls>'],
      js: ['src/content/index.js'],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'icon16.png',
        'icon32.png',
        'icon48.png',
        'icon128.png',
        'icon256.png',
      ],
      matches: [],
    },
  ],
};

export default manifest;
