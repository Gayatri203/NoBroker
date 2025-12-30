class endToEndCityTempo{
    constructor(page){
    this.page = page;
      this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
      this.cityDropdown = this.page.locator("(//button[@type='button'])[2]");
      
      this.cityOptionPune = this.page
          .locator('li, div[role="option"]')
          .filter({ hasText: /Pune/i })
          .first();

      this.pickupInput = this.page.getByRole('textbox', { name: 'Pickup from' });
      this.fillpickupInput=this.page.getByRole('option', { name: 'Dighi Hills Dighi, Pimpri-' }).click();
      this.dropInput = this.page.getByRole('textbox', { name: 'Drop at' });
      this.fillDropInput=this.page.getByRole('option', { name: 'Vishrantwadi, Pune, Maharashtra, India' });
      this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
    }
    async fillFullCityTempo(data) 
    {
      await this.cityTempoTab.click()
      // Select city
      await this.cityDropdown.click();
      await this.cityOptionPune.waitFor({ state: 'visible' });
      await this.cityOptionPune.click();
      // Invalid inputs from Excel
      await this.pickupInput.click()
      await this.fillpickupInput.click();
      await this.pickupInput.fill(data.pickupFrom);
      await this.fillDropInput.click()


      await this.dropInput.fill(data.dropat);
      // Check Prices
      await this.checkPricesBtn.click();
    }
}