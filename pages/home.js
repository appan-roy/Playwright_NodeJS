exports.HomePage = class HomePage {
    
    // create constructor for the page and create the page objects
    constructor(page){
        this.page = page
        this.profile_link = page.getByRole('listitem').filter({ hasText: 'Paul Collings' }).locator('i')
        this.logout_link = page.getByRole('menuitem', { name: 'Logout' })
    }

    // create the page methods
    async clickOnProfileLink(){
        await this.profile_link.click()
    }

    async clickOnLogoutLink(){
        await this.logout_link.click()
    }

}