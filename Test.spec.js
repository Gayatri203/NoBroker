import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { getTestData } from '../utils/ExcelReader'; 

import testDataJson from '../data/citytempotest.json' assert { type: 'json' };

import { getTestData1} from '../utils/withinCityExcelReader';   
import { WithinCityPage } from '../pages/within_city'; 
import  CityTempo  from '../pages/CityTempo';


let newChildWindow;
test.describe('NoBroker', () =>
{   
    
    // Test 1: NoBroker Login and navigate through menu and packers and movers and the page opens successfully.
    test.beforeEach('NoBroker Login and Edit Pr', async ({page}) => 
    {
        const testData = getTestData('TC001');
    
        const loginPage = new LoginPage(page);
        

        await page.goto(testData.url)
        //const newWindow= await loginPage.login(testData.phone);

       // const childWindow= await newWindow;
        const homePage = new HomePage(page);
         await loginPage.login("7038846064");
        newChildWindow=await homePage.openMenu();

        //await page.waitForTimeout(10000); // Wait to observe the result
    });


//test 2: Within City Flow
test('Within City Flow', async () => {
    
    const childWindow = await newChildWindow;
    const loginData = getTestData('Login', 'TC001');
    const withinCityData = getTestData1('WithInCity', 'TC001');
    const withinCityPage = new WithinCityPage(childWindow);
 

    await withinCityPage.fillWithinCity(withinCityData);
});

//test 3: City Tempo Data Collection

// test('select City Tempo', async ({ page }) => {
  
//     const childWindow = await newChildWindow
//     const cityTo = new CityTempo(childWindow);
//     await cityTo.fillCityTempo();

// });


});




