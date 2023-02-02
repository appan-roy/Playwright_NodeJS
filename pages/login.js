exports.Loginpage = class LoginPage {
    
    // create constructor for the page and create the page objects
    constructor(page){
        this.page = page
        this.username_txtbx = page.getByPlaceholder('Username')
        this.password_txtbx = page.getByPlaceholder('Password')
        this.login_btn = page.getByRole('button', { name: 'Login' })
    }

    // create the page methods
    async gotoLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com')
    }
    async enterUsername(username){
        await this.username_txtbx.fill(username)
    }

    async enterPassword(password){
        await this.password_txtbx.fill(password)
    }

    async clickOnLoginButton(){
        await this.login_btn.click()
    }

}