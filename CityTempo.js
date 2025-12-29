
class CityTempo {
    constructor(page) {
        this.page = page;
        this.cityTempo = this.page.locator('.text-12.text-center.px-2').nth(2);
        this.SelectCity = this.page.getByRole('button', { name: 'Mumbai' }).click();
        this.SelectCitySpecific = this.page.getByText('Pune', { exact: true }).click();
    }

    async fillCityTempo() {
        await this.cityTempo.click();
        await this.page.waitForTimeout(2000); // Wait for the city tempo options to load

        //select the city 
        await this.page.SelectCity
        await this.SelectCitySpecific
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        
        // await this.SelectCity.click();
        await this.page.waitForTimeout(3000); // Wait for the city tempo options to load
    }

}
export default CityTempo;

