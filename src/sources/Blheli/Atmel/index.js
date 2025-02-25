import { BLHeliSource } from '..';
import eeprom from '../eeprom';
import settingsDescriptions from '../settings';
import escs from './escs.json';
import versions from './versions.json';

class BLHeliAtmelSource extends BLHeliSource {
  async getVersions() {
    return versions;
  }
}

const blheliSource = new BLHeliAtmelSource(
  'BLHeli',
  eeprom,
  settingsDescriptions,
  escs
);

export default blheliSource;
