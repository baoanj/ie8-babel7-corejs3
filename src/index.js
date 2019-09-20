window.onload = async () => {
  const app = document.querySelector('#app')
  const pro = new Pro()
  const now = await pro.now()
  app.innerHTML = `Now: ${now}`
  pro.now().then(n => {
    app.innerHTML = `Now: ${n}`
  }).finally(() => {
    console.log('finally')
  })
}

class Pro {
  now() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Date().toLocaleString())
      }, 1000)
    })
  }
}
