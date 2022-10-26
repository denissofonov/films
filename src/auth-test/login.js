export default {
    login(login, password) {
      return new Promise(((resolve, reject) => {
        const matchLogin = '123'
        const matchPassword = '123'
  
        setTimeout(() => {
          if (login !== matchLogin) {
            reject({msg: 'Wrong login'})
            return
          } else if (password !== matchPassword) {
            reject({msg: 'Wrong password'})
            return
          } else {
            resolve({success: true})
          }
        }, 3000)
      }))
    }
  }