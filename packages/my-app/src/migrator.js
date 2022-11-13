const { Umzug } = require('umzug')

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.ts' },
  logger: console,
});

exports.umzug = umzug

if (require.main === module) {
  umzug.runAsCLI()
}
