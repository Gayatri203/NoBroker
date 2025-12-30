import xlsx from 'xlsx';
export function getfullCityTempoData(tcId) {
   const workbook = xlsx.readFile(
       'C:/Users/gjalinda/Desktop/nobroker/tests/data/NoBrokerTestData.xlsx'
   );
   const sheet = workbook.Sheets['CityTempo'];
   const data = xlsx.utils.sheet_to_json(sheet);
   return data.find(row => row.TC_ID === tcId);
}

// import xlsx from 'xlsx';
// export function getCityTempoData(tcId) {
//    const workbook = xlsx.readFile(
//        'C:/Users/gjalinda/Desktop/nobroker/tests/data/NoBrokerTestData.xlsx'
//    );
//    const sheet = workbook.Sheets['CityTempo'];
//    if (!sheet) {
//        throw new Error(' Sheet CityTempo not found');
//    }
//    const rows = xlsx.utils.sheet_to_json(sheet);
//    const row = rows.find(r => String(r.TC_ID).trim() === tcId);
//    if (!row) {
//        throw new Error(` No data found for TC_ID ${tcId}`);
//    }
//    return row; // 👈 IMPORTANT (not array)
// }