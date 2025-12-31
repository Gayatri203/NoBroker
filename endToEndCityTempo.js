// class endToEndCityTempo {
//    constructor(page) {
//        this.page = page;
//        this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
//        this.cityDropdown = this.page.locator("(//button[@type='button'])[2]");
//        this.cityOptionPune = this.page
//            .locator('li, div[role="option"]')
//            .filter({ hasText: /Pune/i })
//            .first();
//         this.pickupInput = this.page.getByRole('textbox', { name: 'Pickup from' }).nth(0);
//       //  this.dropInput = this.page.getByRole('textbox', { name: 'Drop at' }).nth(1);
//       //  // Generic autosuggest option
//       //  this.autoSuggestOption = this.page.locator('li, div[role="option"]').first();
//       //  this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
//    }
//    async fillFullCityTempo(data) {
       
//        // Open City Tempo
//        await this.cityTempoTab.click({Timeout:3000});
//       //  // Select City
//        await this.cityDropdown.click();
//        await this.cityOptionPune.waitFor({ state: 'visible' });
//        await this.cityOptionPune.click();
//       // //  // -------------------------
//       //  // Pickup From (Autosuggest)
//       //  // -------------------------
//        await this.pickupInput.click();
//        await this.pickupInput.fill(data.pickupFrom);
//        await this.autoSuggestOption.waitFor({ state: 'visible' });
//        await this.autoSuggestOption.first().click({Timeout:5000});
//       //  // -------------------------
//       //  // Drop At (Autosuggest)
//       //  // -------------------------
//       //  await this.dropInput.click();
//       //  await this.dropInput.fill(data.dropat);
//       //  await this.autoSuggestOption.waitFor({ state: 'visible' });
//       //  await this.autoSuggestOption.click();
//       //  // -------------------------
//       //  // Check Prices
//       //  // -------------------------
//       //  await this.checkPricesBtn.click();
//    }
// }
// export default endToEndCityTempo;



// class endToEndCityTempo {
//  constructor(page) {
//    this.page = page;
//    this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
//    this.cityDropdown = this.page.locator("(//button[@type='button'])[2]");
//    this.cityOptionPune = this.page
//      .locator('text=/Pune/i')
//      .first();
//    this.pickupInput = this.page.getByRole('textbox', { name: 'Pickup from' });
//    this.dropInput = this.page.getByRole('textbox', { name: 'Drop at' });
//    // 🔥 Autosuggest container (scoped, not global)
//    this.autoSuggestContainer = this.page.locator(
//      'div[class*="suggest"], div[class*="dropdown"], div[class*="auto"]'
//    );
//    this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
//    this.selectVehiclePage = this.page.getByText('Select Vehicle');
//  }
//  // 🔥 Click first autosuggest item (ROBUST)
//  async clickFirstAutoSuggestion() {
//    // Wait for autosuggest container
//    await this.autoSuggestContainer.first().waitFor({
//      state: 'visible',
//      timeout: 10000
//    });
//    // Click first clickable child
//    const firstOption = this.autoSuggestContainer
//      .first()
//      .locator('div, p')
//      .first();
//    await firstOption.waitFor({ state: 'visible' });
//    await firstOption.click();
//  }
//  async fillFullCityTempo(data) {
  
//    // Open City Tempo
//    await this.cityTempoTab.click();


//    // Select City
//    await this.cityDropdown.click();
//    await this.cityOptionPune.waitFor({ state: 'visible' });
//    await this.cityOptionPune.click();


//    // -------------------------
//    // Pickup From (autosuggest)
//    // -------------------------
//    await this.pickupInput.click();
//    await this.pickupInput.fill(data.pickupFrom);
//    await this.clickFirstAutoSuggestion();
//    // -------------------------
//    // Drop At (autosuggest)
//    // -------------------------
//    await this.dropInput.click();
//    await this.dropInput.fill(data.dropat);
//    await this.clickFirstAutoSuggestion();
//    // Check Prices
//    await this.checkPricesBtn.click();
//    // Verify navigation
//    await this.selectVehiclePage.waitFor({ state: 'visible' });
//  }
// }
// export default endToEndCityTempo;


// class endToEndCityTempo {
//  constructor(page) {
//    this.page = page;
//    // Tabs & City
//    this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
//    this.cityDropdown = this.page.locator("(//button[@type='button'])[2]");
//    this.cityOptionPune1 = this.page
//           .locator('li, div[role="option"]')
//           .filter({ hasText: /Pune/i })
//           .first();
//    // Inputs
//    this.pickupInput = this.page.getByRole('textbox', { name: 'Pickup from' });
//    this.dropInput = this.page.getByRole('textbox', { name: 'Drop at' });
//    // 🔥 Autosuggest container (REAL one)
//    this.autoCompleteContainer = this.page.locator('#autocomplete-dropdown-container');
//    this.firstSuggestion = this.autoCompleteContainer.locator('div').first();
//    this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
//    this.selectVehiclePage = this.page.getByText('Select Vehicle');

//    //Select Vehicle
//    this.Vehicle=this.page.getByText('Tata Ace');

//    //click on schedule button
//    this.schedulebtn=this.page.getByRole('button',{name:'Schedule'});
//  }
//  async selectFromAutoSuggest(input, value) {
//    await input.click();
//    await input.fill(value);
//    // Wait for Google autosuggest
//    await this.autoCompleteContainer.waitFor({
//      state: 'visible',
//      timeout: 10000
//    });
//    // Click FIRST suggestion
//    await this.firstSuggestion.waitFor({ state: 'visible' });
//    await this.firstSuggestion.click();
//  }
//  async fillFullCityTempo(data) {
   
//    // Open City Tempo
//    await this.cityTempoTab.click();
//    // Select City
//    await this.cityDropdown.click();
//    await this.cityOptionPune1.waitFor({ state: 'visible' });
//    await this.cityOptionPune1.click();
//    // -------------------------
//    // Pickup From (Google autosuggest)
//    // -------------------------
//    await this.selectFromAutoSuggest(this.pickupInput, data.pickupFrom);
//    // -------------------------
//    // Drop At (Google autosuggest)
//    // -------------------------
//    await this.selectFromAutoSuggest(this.dropInput, data.dropat);
//    // Check Prices
//    await this.checkPricesBtn.click();
//    // Verify navigation
//    await this.selectVehiclePage.first().waitFor({ state: 'visible' });

//    await this.Vehicle.click();
//    await this.schedulebtn.click();
//  }
// }
// export default endToEndCityTempo;



// class endToEndCityTempo {
//  constructor(page) {
//    this.page = page;
//    this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
//    this.cityDropdown = this.page.locator("(//button[@type='button'])[2]");
//    this.cityOptionPune = this.page.locator('text=/Pune/i').first();
//    this.pickupInput = this.page.getByRole('textbox', { name: 'Pickup from' });
//    this.dropInput = this.page.getByRole('textbox', { name: 'Drop at' });
//    // VISIBLE autosuggest item ONLY
//    this.visibleAutoSuggest = this.page.locator(
//      '#autocomplete-dropdown-container div:visible'
//    );
//    this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
//    this.selectVehiclePage = this.page.getByText('Select Vehicle');

//    this.selectVehiclePage = this.page.getByText('Select Vehicle');

//    //Select Vehicle
//    this.Vehicle=this.page.getByText('Tata Ace');

//    //click on schedule button
//    this.schedulebtn=this.page.getByRole('button',{name:'Schedule'});

//    // Wait for Confirm your shifting Date & Slot to open

//    this.waitForConfirm=this.page.getByText('Confirm your shifting Date & Slot');
//    this.clickConfirmbtn=this.page.getByRole('button' ,{ name :'Confirm'});
//  }
//  async selectFromAutoSuggest(input, value) {
//    await input.click();
//    await input.fill(value);
//    // wait for VISIBLE suggestion only
//    await this.visibleAutoSuggest.first().waitFor({
//      state: 'visible',
//      timeout: 10000
//    });
//    // click FIRST visible suggestion
//    await this.visibleAutoSuggest.first().click();
//  }
//  async fillFullCityTempo(data) {
   
//    // Open City Tempo
//    await this.cityTempoTab.click();
//    // Select City
//    await this.cityDropdown.click();
//    await this.cityOptionPune.waitFor({ state: 'visible' });
//    await this.cityOptionPune.click();
//    // Pickup
//    await this.selectFromAutoSuggest(this.pickupInput, data.pickupFrom);
//    // Drop
//    await this.selectFromAutoSuggest(this.dropInput, data.dropat);
//    // Check Prices
//    await this.checkPricesBtn.click();
//    // Verify next page
//    await this.selectVehiclePage.waitFor({ state: 'visible' });
//    await this.Vehicle.click();
//    await this.schedulebtn.click();
//    // wait for confirm page
//    await this.waitForConfirm.waitFor({state:'visible'});
//    await this.clickConfirmbtn.click();

//  }
// }
// export default endToEndCityTempo;


class endToEndCityTempo {
 constructor(page) {
   this.page = page;
   this.cityTempoTab = this.page.locator('.text-12.text-center.px-2').nth(2);
   this.cityDropdown = this.page.locator("(//button[@type='button'])[2]");
   this.cityOptionPune = this.page.locator('text=/Pune/i').first();
   this.pickupInput = this.page.getByRole('textbox', { name: 'Pickup from' });
   this.fillpickupInput=this.page.getByText('Dighi, Pune, Maharashtra, India')
   this.dropInput = this.page.getByRole('textbox', { name: 'Drop at' });
   this.fillDropInput=this.page.getByText('Vishrantwadi, Pune, Maharashtra, India')
   
   this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
   this.selectVehiclePage = this.page.getByText('Select Vehicle');

   this.selectVehiclePage = this.page.getByText('Select Vehicle');

   //Select Vehicle
   this.Vehicle=this.page.getByText('Tata Ace');

   //click on schedule button
   this.schedulebtn=this.page.getByRole('button',{name:'Schedule'});

   // Wait for Confirm your shifting Date & Slot to open

   this.waitForConfirm=this.page.getByText('Confirm your shifting Date & Slot');
   this.clickConfirmbtn=this.page.getByRole('button' ,{ name :'Confirm'});
 }
 

 
 async fillFullCityTempo(data) {
   
   // Open City Tempo
   await this.cityTempoTab.click();
   // Select City
   await this.cityDropdown.click();
   await this.cityOptionPune.waitFor({ state: 'visible' });
   await this.cityOptionPune.click();
   // Pickup
   await this.pickupInput.fill(data.pickupFrom);
   await this.fillpickupInput.mouse.click(down);
   // Drop
   await this.dropInput.fill(data.dropat);
   await this.fillDropInput.mouse.click(down);
   // Check Prices
   await this.checkPricesBtn.click();
   // Verify next page
   await this.selectVehiclePage.waitFor({ state: 'visible' });
   await this.Vehicle.click();
   await this.schedulebtn.click();
   // wait for confirm page
   await this.waitForConfirm.waitFor({state:'visible'});
   await this.clickConfirmbtn.click();

 }}

export default endToEndCityTempo;