import xlsx from 'xlsx';

export function getTestData1(WithInCity,tcId) {
        const workbook = xlsx.readFile('C:/Users/gjalinda/Desktop/nobroker/tests/data/NoBrokerTestData.xlsx');
        const sheet = workbook.Sheets['WithInCity'];
        const data = xlsx.utils.sheet_to_json(sheet);
        return data
}

