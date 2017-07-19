import Encryptor from './Encryptor'

class App extends Encryptor {
    constructor() {
        super()
        this.Encrypt()
        setTimeout(() => this.Decrypt(),2000)
    }
}
new App()