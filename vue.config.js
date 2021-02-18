module.exports = {
  devServer: {
    proxy: {
      '/MisSitios/apirest/auth': {
        target: 'http://localhost:80',
        ws: true,
        changeOrigin: true
      }
    }
  }
}