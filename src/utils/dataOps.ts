import fs from 'fs';

const dir = '../components/organisms/FirstStepsModal';

export const stepCounter = () => fs.readdirSync(dir).length;
