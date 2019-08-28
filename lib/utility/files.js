const fs = require('fs');
const os = require('os');

function getTempFilePath() {
  return `${os.tmpdir()}/coc-tools-last-npc.txt`;
}

function getDesktopFilePath(file) {
  const filename = file.replace(/ /g, '-').toLowerCase();
  return `${os.homedir()}/Desktop/${filename}.txt`;
}

module.exports = {
  save: content => fs.writeFileSync(getTempFilePath(), content, 'UTF-8'),
  read: () => {
    try {
      return fs.readFileSync(getTempFilePath(), 'UTF-8').toString();
    } catch (e) {
      return null;
    }
  },
  move: name => {
    const filename = getDesktopFilePath(name);
    fs.renameSync(getTempFilePath(), filename);
    return filename;
  },
  arrayToTxt: array => array.join('\n') + '\r',
  txtToArray: txt => txt.replace('\r', '').split('\n')
};
