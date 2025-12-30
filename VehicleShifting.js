
class VehicleShifting {
   constructor(page) {
       this.page = page;
       // Vehicle Shifting tab
       this.vehicleShiftingTab = this.page.locator('.text-12.text-center.px-2').nth(3);
       // Shifting Date
       this.dateInput = this.page.getByRole('textbox', { name: 'Shifting Date' });
       // Flexible checkbox
       this.flexibleCheckbox = this.page.getByRole('checkbox', { name: /flexible/i });
       // Check Prices
       this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });
       // Add Inventory
       this.addInventoryHeading = this.page.getByText('Add Your Inventory');
       this.selectCar=page.getByText('Add');
       this.continueBtn=this.page.getByRole('button', { name: 'Continue' }).click();
       
       // Final popup
       this.congratsPopup = this.page.getByText(/congratulations/i);
   }
   async fillVehicleShifting(data) {
       // -------------------------
       // Open Vehicle Shifting
       // -------------------------
       await this.vehicleShiftingTab.click();
       // -------------------------
       // SOURCE CITY (FROM EXCEL)
       // -------------------------
       await this.page.getByRole('textbox', { name: 'Search Source City' }).click();
       await this.page.getByRole('textbox', { name: 'Search Source City' })
           .fill(data.sourceCity);
       await this.page.getByText(data.sourceFullText).click();
       
       // -------------------------
       // DESTINATION CITY (FROM EXCEL)
       // -------------------------
       await this.page.getByRole('textbox', { name: 'Search Destination City' }).click();
       await this.page.getByRole('textbox', { name: 'Search Destination City' }).fill(data.destinationCity);
       await this.page.getByText(data.destinationFullText).click();


       // -------------------------
       // Shifting Date
       // -------------------------
       await this.dateInput.click();
       await this.page.getByRole('option', { name: 'day-31' }).click();
       // -------------------------
       // Flexible Date Checkbox
       // -------------------------
       await this.flexibleCheckbox.check();
       // -------------------------
       // Check Prices
       // -------------------------
       await this.checkPricesBtn.click();
       // -------------------------
       // Add Inventory Page
       // -------------------------
       await this.addInventoryHeading.waitFor({ state: 'visible' });
       await this.selectCar.nth(2).click();
       await this.continueBtn.click();
       
       
       // -------------------------
       // Final Validation
       // -------------------------
       await this.congratsPopup.waitFor({ state: 'visible' });
   }
}
export default VehicleShifting;


