var plan = require('flightplan');

var appName = 'builtright';
var username = 'deploy';
var startFile = 'bin/www';

var tmpDir = appName+'-' + new Date().getTime();

// configuration
plan.target('dev', [
  {
    host: '107.170.13.81',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

// run commands on localhost
plan.local(function(local) {
  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '~/' + appName);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Install dependencies');
  // remote.sudo('npm --production --prefix ~/' + appName + ' install ~/' + appName,
  //   {user: username});
  remote.exec('cd ~/' + appName + ' && npm install')
  remote.log('Setting up database');
  remote.exec('cd ~/' + appName + ' && nodal db:prepare && nodal db:migrate');
  remote.log('Database created and prepared.')
  remote.log('Reload application');
  remote.exec('cd ~/' + appName + ' && nodal s', {failsafe: true});
});
