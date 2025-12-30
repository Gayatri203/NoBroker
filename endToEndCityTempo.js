class endToEndCityTempo {
   constructor(page) {
       this.page = page;
       this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
       this.cityDropdown = this.page.locator("(//button[@type='button'])[2]");
       this.cityOptionPune = this.page
           .locator('li, div[role="option"]')
           .filter({ hasText: /Pune/i })
           .first();
        this.pickupInput = this.page.getByRole('textbox', { name: 'Pickup from' }).nth(0);
      //  this.dropInput = this.page.getByRole('textbox', { name: 'Drop at' }).nth(1);
      //  // Generic autosuggest option
      //  this.autoSuggestOption = this.page.locator('li, div[role="option"]').first();
      //  this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
   }
   async fillFullCityTempo(data) {
       
       // Open City Tempo
       await this.cityTempoTab.click({Timeout:3000});
      //  // Select City
       await this.cityDropdown.click();
       await this.cityOptionPune.waitFor({ state: 'visible' });
       await this.cityOptionPune.click();
      // //  // -------------------------
      //  // Pickup From (Autosuggest)
      //  // -------------------------
       await this.pickupInput.click();
       await this.pickupInput.fill(data.pickupFrom);
       await this.autoSuggestOption.waitFor({ state: 'visible' });
       await this.autoSuggestOption.first().click({Timeout:5000});
      //  // -------------------------
      //  // Drop At (Autosuggest)
      //  // -------------------------
      //  await this.dropInput.click();
      //  await this.dropInput.fill(data.dropat);
      //  await this.autoSuggestOption.waitFor({ state: 'visible' });
      //  await this.autoSuggestOption.click();
      //  // -------------------------
      //  // Check Prices
      //  // -------------------------
      //  await this.checkPricesBtn.click();
   }
}
export default endToEndCityTempo;