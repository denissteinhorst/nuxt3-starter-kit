module.exports = {
  apps: [
    {
      name: 'nuxtapp',
      port: '3000',
      exec_mode: 'fork',
      instances: 'max',
      script: './runapp.js',
      interpreter : 'node@18.15.0'
    }
  ]
}