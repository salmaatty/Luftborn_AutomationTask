const {test} = require('@playwright/test');
import { EbayPage } from '../pages/EbayHomePage';

import data from '../TestData/testdata1.json' ;

test('search and filter test', async ({ page }) => {
    const ebay = new EbayPage(page);
    await ebay.navigate();
    await ebay.search(data.search);

    const ResultsBeforeFilter = await ebay.getResultsCount();
    console.log('Results before Filter', ResultsBeforeFilter);

    await ebay.filter(data.filterentry);

    const ResultsAfterFilter = await ebay.getResultsCount();
    console.log('Results after Filter', ResultsAfterFilter);
   

});

