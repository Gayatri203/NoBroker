class VehicleShifting {

    constructor(page) {

        this.page = page;

        // Vehicle Shifting tab (adjust nth if needed)

        this.vehicleShiftingTab = this.page.locator('.text-12.text-center.px-2').nth(3);

        // Source & Destination search inputs

        this.sourceCityInput = this.page.locator('input[placeholder*="Source"]').first();

        this.destinationCityInput = this.page.locator('input[placeholder*="Destination"]').first();

        // Date picker input
 
        this.dateBtn = this.page.getByPlaceholder("Shifting Date")
        this.dateInput = this.page.locator("(//div[@role='option'])[31]")
        
        //Select the check box
        this.checkBox=page.getByLabel('I am flexible on my shifting date').click();
    
        // Check Prices

        this.checkPricesBtn = this.page.getByRole('button', { name: 'Check Prices' });

    }

    async fillVehicleShifting(data) {

        // if (!data) {

        //     throw new Error('Vehicle Shifting data is undefined');

        // }

        // Open Vehicle Shifting tab

        await this.vehicleShiftingTab.click();

        // -------------------------

        // Source city

        // -------------------------

        await this.sourceCityInput.click();

        await this.sourceCityInput.fill(data.sourceCity);

        await this.page.keyboard.press('ArrowDown');

        await this.page.keyboard.press('Enter');

        // -------------------------

        // Destination city

        // -------------------------

        await this.destinationCityInput.click();

        await this.destinationCityInput.fill(data.destinationCity);

        await this.page.keyboard.press('ArrowDown');

        await this.page.keyboard.press('Enter');

        // -------------------------

        // Shifting Date

        // -------------------------
        await this.dateBtn.click();

        console.log(data.shiftingDate)
        await this.dateInput.click(); // format: YYYY-MM-DD

        // -------------------------

        // Click on CheckBox

        // -------------------------

        //  await this.checkBox.

        // -------------------------

        // Check Prices

        // -------------------------

        await this.checkPricesBtn.click();

        // Optional: wait for navigation

        await this.page.waitForLoadState('networkidle');

    }

}

export default VehicleShifting;
 

