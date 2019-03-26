module.exports = {
  apps : [{
    name: 'portfolio',
    script: 'server/app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      EMAIL: 'postmaster@kimguyton.com',
      PASSWORD: 'dahlia',
      MAILGUN_API_KEY: 'a22c3a27d94c543f02f6553cca0b2b52-059e099e-27ee8096',
      TWILIO_NUMBER: '+18015095714',
      MYNUMBER: '+14356691797',
      TWILIO_TEST_TOKEN: '22e1d0f5a50eb39e86bc79f063c1d40b',
      ACCOUNT_SID: 'AC22bbeb910ffe62db6568a19dbb34a831',
      AUTH_TOKEN: '0c28fec579ec2a1f92e33f2d62e6880a'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : 'kimguyton.com',
      ref  : 'origin/master',
      repo : 'https://github.com/kguyton6/portfolio',
      path : '/var/www/portfolio',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
