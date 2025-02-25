import { BLHeliSource } from '..';
import eeprom from '../eeprom';
import settingsDescriptions from '../settings';
import escs from './escs.json';
import versions from './versions.json';

class BLHeliSilabsSource extends BLHeliSource {
  async getVersions() {
    return versions;
  }
}

const blheliSilabsSource = new BLHeliSilabsSource(
  'BLHeli',
  eeprom,
  settingsDescriptions,
  escs
);

export default blheliSilabsSource;
