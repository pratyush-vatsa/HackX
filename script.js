
const csvData = `Name,Location,Contact
MARSHALL MEDICAL CENTER SOUTH	,2505 U S HIGHWAY 431 NORTH	,2565938310
DEKALB REGIONAL MEDICAL CENTER,	200 MED CENTER DRIVE,	2568453150
WEDOWEE HOSPITAL,	209 NORTH MAIN STREET,	2563572111
HALE COUNTY HOSPITAL	,508 GREEN STREET,	3346243024
CRESTWOOD MEDICAL CENTER,	ONE HOSPITAL DR SE	,2568823100
CHOCTAW GENERAL HOSPITAL,	401 VANITY FAIR LANE PO BOX 618,	2054599100
YUKON KUSKOKWIM DELTA REG HOSPITAL,	PO BOX 287,	9075436300
NORTON SOUND REGIONAL HOSPITAL,	1000 GREG KRUSCHEK AVENUE (P O BOX 966)	,9074433311
KANAKANAK HOSPITAL,	P O BOX 130	,9078425201
MANIILAQ HEALTH CENTER,	PO BOX 43,	9074423321
FORT DEFIANCE INDIAN HOSPITAL	,PO BOX 649,	9287298000
TUBA CITY REGIONAL HEALTH CARE CORPORATION	,PO BOX 600	,9282832501
SELLS HOSPITAL,	HIGHWAY 86 AT TOPAWA ROAD	,5203627003
SAN CARLOS APACHE HEALTHCARE,	103 MEDICINE WAY ROAD	,9284751200
CHINLE COMPREHENSIVE HEALTH CARE FACILITY,	US HWY 191 HOSPITAL ROAD	,9286747001`;


function parseCSV() {
    const tableBody = document.querySelector('#hospitalTable tbody');
    const lines = csvData.split('\n');
    
    for (let i = 1; i < lines.length; i++) {
        const data = lines[i].split(',');
        const name = data[0];
        const location = data[1];
        const contact = data[2];
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${location}</td>
            <td>${contact}</td>
        `;
        
        tableBody.appendChild(row);
    }
}

window.onload = parseCSV;
