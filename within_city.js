// export class WithinCityPage {
//     constructor(page) {
//         this.page = page;
//         this.cityDropDown = this.page.locator('//input[@class="w-full h-full outline-none bg-transparent"]'); // City dropdown caret
//         this.fromInput = this.page.locator('[class="form-control rounded-12"]').nth(0);
//         this.toInput = this.page.locator('[class="form-control rounded-12"]').nth(1);
//         this.checkPrice = this.page.getByRole('button', { name: 'Check Prices' });
//     }

//     async fillWithinCity(data) {
//         // Wait for page to load
//         // await this.page.waitForTimeout(20000);

//         // Click city dropdown
//         // await this.page.waitForLoadState('networkidle');
//         await this.cityDropDown.click();

//         // Select city dynamically (Mumbai/Pune/etc.)
//         const cityTile = this.page.locator(`img[alt="Pune"]`);
//         await cityTile.click();

//         // Fill "Shifting From"
//         await this.fromInput.type("Aundh, Pune");
//         await this.page.waitForTimeout(10000);
//         await this.page.keyboard.press('ArrowDown');
//         await this.page.keyboard.press('Enter');
//         // await this.page.locator('input[placeholder="Shifting From"]').click();
//         // await this.page.keyboard.type("Aundh, Pune");
//         // await this.page.keyboard.press('Enter');

//         await this.page.waitForTimeout(6000);
//         // Fill "Shifting To"
//         await this.toInput.type("Baner, Pune");
//         await this.page.waitForTimeout(10000);
//         await this.page.keyboard.press('ArrowDown');
//         await this.page.keyboard.press('Enter');

//         // Click "Check Prices"
//         await this.checkPrice.click();
//     }
// }


export class WithinCityPage {
    constructor(page) {
        this.page = page;
        this.cityDropDown = this.page.locator('//input[@class="w-full h-full outline-none bg-transparent"]'); // City dropdown caret
        this.fromInput = this.page.locator('[class="form-control rounded-12"]').nth(0);
        this.toInput = this.page.locator('[class="form-control rounded-12"]').nth(1);
        this.checkPrice = this.page.getByRole('button', { name: 'Check Prices' });
    }

    async fillWithinCity(data) {
        // Wait for page to load
        // await this.page.waitForTimeout(20000);

        // Click city dropdown
        // await this.page.waitForLoadState('networkidle');
        await this.cityDropDown.click();

        // Select city dynamically (Mumbai/Pune/etc.)
        const cityTile = this.page.locator(`img[alt="Pune"]`);
        await cityTile.click();

        // Fill "Shifting From"
        await this.fromInput.type("Aundh, Pune");
        await this.page.waitForTimeout(10000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        // Fill "Shifting To"
        await this.toInput.type("Baner, Pune");
        await this.page.waitForTimeout(10000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');

        // Click "Check Prices"
        await this.checkPrice.click();
    }
}
