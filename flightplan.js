var plan = require('flightplan');

var appName = 'builtright';
var username = 'deploy';
var startFile = 'bin/www';

var tmpDir = appName+'-' + new Date().getTime();

// configuration
plan.target('dev', {
	host: '159.203.106.53',
  username: 'root',
  agent: process.env.SSH_AUTH_SOCK,

	webRoot: '/var/www/dev.builtrightapp.com/server',
  ownerUser: 'root',
  repository: 'https://github.com/dylanlott/builtright-nodal.git',
  branchName: 'master',
  maxDeploys: 10
});

plan.remote('setup', function(remote) {
  remote.hostname();
  remote.sudo('mkdir -p ' + remote.runtime.webRoot);

  remote.with('cd ' + remote.runtime.webRoot, function() {
    remote.sudo('git clone -b ' + remote.runtime.branchName + ' ' + remote.runtime.repository + ' .');
    remote.log('GitHub repo successfully cloned.');
    remote.sudo('npm install -g yarn');
    remote.log('Yarn installed successfully.');
    remote.sudo('yarn');
    remote.log('Setting up Docker Postgres Database');
    remote.exec('docker stop builtrightpostgres && docker rm builtrightpostgres');
    remote.log('Setting up Postgres database');
    remote.sudo('docker run -d --name builtrightpostgres -p 5432:5432 -v builtright-pg:/var/lib/postgresql/data -e POSTGRES_DB=builtright_nodal_development -e POSTGRES_USER=postgres postgres:latest')
    remote.log('Postgres database setup.');
    remote.exec('docker ps');
    remote.log('Starting up nodal server');
    remote.exec('nodal s');
    remote.log('Environment setup correctly.');
  });


})
