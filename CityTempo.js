
// class CityTempo {
//     constructor(page) {
//         this.page = page;
//         this.cityTempo = this.page.locator('.text-12.text-center.px-2').nth(2);
//         this.SelectCity = this.page.getByRole('button', { name: 'Mumbai' }).click();
//         this.SelectCitySpecific = this.page.getByText('Pune', { exact: true }).click();
//     }

import { time } from "node:console";

//     async fillCityTempo() {
//         await this.cityTempo.click();
//         await this.page.waitForTimeout(2000); // Wait for the city tempo options to load

//         //select the city 
//         await this.page.SelectCity
//         await this.SelectCitySpecific
//         await this.page.keyboard.press('ArrowDown');
//         await this.page.keyboard.press('ArrowDown');
//         await this.page.keyboard.press('ArrowDown');
//         await this.page.keyboard.press('Enter');
        
//         // await this.SelectCity.click();
//         await this.page.waitForTimeout(3000); // Wait for the city tempo options to load
//     }

// }
// export default CityTempo;

class CityTempo {
   constructor(page) {
       this.page = page;
       this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
       this.cityDropdown = this.page.locator("(//button[@type='button'])[2]")
       this.cityOptionPune = this.page.getByText('Pune', { exact: true });
       this.pickupInput = this.page.locator('input').nth(0);
       this.dropInput = this.page.locator('input').nth(1);
       this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });

       // error messages
       this.pickupError = this.page.getByText('Please enter your pickup locality');
       this.dropError = this.page.getByText('Please enter your destination locality');
   }

   async fillCityTempo(data) {
    //    if (!data) {
    //        throw new Error('CityTempo data is undefined');
    //    }
       await this.cityTempoTab.click();
       //await this.page.waitForTimeout(2000);
       // Select city
       await this.cityDropdown.click({ timeout: 5000 });
       await this.cityOptionPune.click();
       // Fill invalid pickup & drop
       await this.pickupInput.fill(data.pickupFrom);
       await this.dropInput.fill(data.dropat);
       // Click Check Prices
       await this.checkPricesBtn.click();
       // Assertion: error should appear
       await this.pickupError.waitFor({ state: 'visible' });
       await this.dropError.waitFor({ state: 'visible' });
   }
}
export default CityTempo;