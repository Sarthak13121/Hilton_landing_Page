export interface Product {
  id: string;
  name: string;
  size: string;
  variant: string;
  tab: "valves" | "saddles" | "fittings" | "bathroom" | "agri";
  img: string;
}

export const CATALOG: Product[] = [
    // ════════════════════════════════
    // CATEGORY 1: BALL VALVES & CORE PIPING VALVES
    // ════════════════════════════════
    {
        id: '1',
        name: 'Solid Seal Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture1.png'
    },
    {
        id: '2',
        name: 'Solid Seal Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'white',
        tab: 'valves',
        img: 'Picture2.png'
    },
    {
        id: '3',
        name: 'Solid seal ball Valve(Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture3.png'
    },
    {
        id: '4',
        name: 'Solid seal ball Valve(Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'white',
        tab: 'valves',
        img: 'Picture4.png'
    },
    {
        id: '5',
        name: 'MS handle solid ball valve',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Black',
        tab: 'valves',
        img: 'Picture5.png'
    },
    {
        id: '6',
        name: 'MS handle solid ball valve',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White',
        tab: 'valves',
        img: 'Picture6.png'
    },
    {
        id: '7',
        name: 'CPVC Ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'white',
        tab: 'valves',
        img: 'Picture8.png'
    },
    {
        id: '8',
        name: 'MS handle Valve (Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'white',
        tab: 'valves',
        img: 'Picture7.png'
    },
    {
        id: '9',
        name: 'R-UPVC Rigid Ball Valve(Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Grey — Standard Industrial Matte Finish',
        tab: 'valves',
        img: 'Picture10.png'
    },
    {
        id: '10',
        name: ' CPVC Ball Valve(Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 3/4", 1", 1¼", 1½", 2"',
        variant: 'Grey — Standard Industrial Matte Finish',
        tab: 'valves',
        img: 'Picture9.png'
    },
    {
        id: '11',
        name: 'PP. UPVC Hybrid Ball Valve(Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White / Grey — Composite Formulation',
        tab: 'valves',
        img: 'Picture12.png'
    },
    {
        id: '12',
        name: 'PP. UPVC Hybrid Ball Valve(Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'White / Grey — Composite Formulation',
        tab: 'valves',
        img: 'Picture11.png'
    },
    {
        id: '13',
        name: 'Screwed Ended Flange Valve',
        size: '15 mm to 250 mm (ranges: 15–65 mm & 80–250 mm)',
        variant: 'Black — Solid Heavy Matte Compound',
        tab: 'valves',
        img: 'Picture14.jpg'
    },
    {
        id: '14',
        name: 'Male Female Compact Utility Valve',
        size: '1" (25 mm)',
        variant: 'Black Body / Blue Accent Lever',
        tab: 'valves',
        img: 'Picture16.png'
    },
    {
        id: '15',
        name: 'MTA Rain Pipe Pressure Valve',
        size: '1" (25 mm)',
        variant: 'Black Body / Blue Accent Lever',
        tab: 'valves',
        img: 'Picture17.png'
    },
    {
        id: '16',
        name: 'Three-Way ball Valve (Short Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Grey / White — Selector Shell Housing',
        tab: 'valves',
        img: 'Picture18.png'
    },
    {
        id: '17',
        name: 'Three-Way ball Valve (Long Handle)',
        size: '1/2" (20 mm) to 4" (110 mm) — includes 1/2", 3/4", 1", 1¼", 1½", 2", 2½", 3", 4"',
        variant: 'Grey / White — Selector Shell Housing',
        tab: 'valves',
        img: 'Picture19.jpg'
    },
    {
        id: '18',
        name: 'Single Piece Ball Valve (Plain Socket)',
        size: '50 mm to 110 mm',
        variant: 'Grey — Solid Industrial Dark Grey Casting',
        tab: 'valves',
        img: 'Picture21.png'
    },
    {
        id: '19',
        name: 'Single Piece Ball Valve (Threaded End)',
        size: '50 mm to 110 mm',
        variant: 'Grey — Solid Industrial Dark Grey Casting',
        tab: 'valves',
        img: 'Picture21.png'
    },
    {
        id: '20',
        name: 'Prince Utility Ball Valve (Plain Slip)',
        size: '15 mm to 100 mm (all sizes)',
        variant: '',
        tab: 'valves',
        img: 'Picture22.png'
    },
    {
        id: '21',
        name: 'Prince Utility Ball Valve (Threaded)',
        size: '15 mm to 100 mm (all sizes)',
        variant: '',
        tab: 'valves',
        img: 'Picture22.png'
    },
    {
        id: '373',
        name: 'Rigid PVC Ball Valve (Short Handle)',
        size: '1/2" to 4" (20 mm to 110 mm)',
        variant: 'Grey — Standard Industrial Finish',
        tab: 'valves',
        img: 'Picture241.png'
    },
    {
        id: '382',
        name: 'Rigid PVC Ball Valve (Long Handle)',
        size: '1/2" to 4" (20 mm to 110 mm)',
        variant: 'Grey — Standard Industrial Finish',
        tab: 'valves',
        img: 'Picture242.png'
    },
    {
        id: '391',
        name: 'Rigid PVC Ball Valve (Long Handle — White)',
        size: '1/2" to 4" (20 mm to 110 mm)',
        variant: 'White — Architectural Smooth Pure White Mold',
        tab: 'valves',
        img: 'Picture243.png'
    },
    {
        id: '22',
        name: 'Plastic MDPE Compression Line Ball Valve',
        size: '20 mm',
        variant: 'Black Core Body + Bright Blue Nut',
        tab: 'valves',
        img: 'Picture236.png'
    },

    // ════════════════════════════════
    // CATEGORY 2: NRV / FOOT VALVES & SADDLES
    // ════════════════════════════════
    {
        id: '23',
        name: 'N.R.V. Check Valve (Nut-Bolt Ball Type)',
        size: '50 mm to 160 mm (all sizes)',
        variant: 'Black — Heavy Shielded Matte Compound',
        tab: 'saddles',
        img: 'Picture23.png'
    },
    {
        id: '24',
        name: 'Solid NRV (Plain Ball Type)',
        size: '50 mm to 160 mm (all sizes)',
        variant: 'Black — Heavy Shielded Matte Compound',
        tab: 'saddles',
        img: 'Picture24.png'
    },
    {
        id: '25',
        name: 'Solid NRV (Threaded Ball Type)',
        size: '50 mm to 160 mm (all sizes)',
        variant: 'Black — Heavy Shielded Matte Compound',
        tab: 'saddles',
        img: 'Picture25.png'
    },
    {
        id: '26',
        name: 'Solid NRV (Flange Ball Type)',
        size: '50 mm to 160 mm (all sizes)',
        variant: 'Black — Heavy Shielded Matte Compound',
        tab: 'saddles',
        img: 'Picture26.png'
    },
    {
        id: '27',
        name: 'Service Saddle (Black)',
        size: '1½" to 10" (ranges: 1½"–4" & 5"–10")',
        variant: 'Black — High-Impact Industrial Resin',
        tab: 'saddles',
        img: 'Picture27.png'
    },
    {
        id: '28',
        name: 'Pipe Saddle (Grey)',
        size: '1½" to 10" (ranges: 1½"–4" & 5"–10")',
        variant: 'Grey — Engineered High-Density Casting',
        tab: 'saddles',
        img: 'Picture28.png'
    },
    {
        id: '29',
        name: 'D-Joint — Short (Black)',
        size: '2" to 10" (ranges: 2"–5" & 6"–10")',
        variant: 'Black — High-Pressure Carbon Leak Sleeve',
        tab: 'saddles',
        img: 'Picture29.png'
    },
    {
        id: '30',
        name: 'D-Joint — Long (Black)',
        size: '2" to 10" (ranges: 2"–5" & 6"–10")',
        variant: 'Black — High-Pressure Carbon Leak Sleeve',
        tab: 'saddles',
        img: 'Picture30.png'
    },
    {
        id: '31',
        name: 'D-Joint — O-Ring',
        size: '2" to 10" (ranges: 2"–5" & 6"–10")',
        variant: 'Black — High-Pressure Carbon Leak Sleeve',
        tab: 'saddles',
        img: 'Picture31.png'
    },
    {
        id: '34',
        name: 'Flange (TEL)',
        size: '2" to 10"',
        variant: 'Black — Solid Machined Carbon Poly',
        tab: 'saddles',
        img: 'Picture32.png'
    },
    {
        id: '35',
        name: 'Flange with Collar',
        size: '4"',
        variant: 'Black — Solid Machined Carbon Poly',
        tab: 'saddles',
        img: 'Picture33.png'
    },
    {
        id: '36',
        name: 'Bore Cap(Black)',
        size: '4" to 10"',
        variant: 'Black — High-Impact Matte Resin',
        tab: 'saddles',
        img: 'Picture35.png'
    },
    {
        id: '37',
        name: 'MTV',
        size: '4" to 10"',
        variant: '',
        tab: 'saddles',
        img: 'Picture34.png'
    },
    {
        id: '38',
        name: 'Back flow NRV',
        size: '4" to 10"',
        variant: '',
        tab: 'saddles',
        img: 'Picture36.png'
    },
    {
        id: '39',
        name: 'Service Saddle (White)',
        size: '1¼" to 6" (all sizes)',
        variant: 'White — Pristine Sanitary Grade',
        tab: 'saddles',
        img: 'Picture61.png'
    },
    {
        id: '40',
        name: 'Pipe Saddle (White)',
        size: '2" to 6"',
        variant: 'White — Pristine Sanitary Grade',
        tab: 'saddles',
        img: 'Picture62.png'
    },
    {
        id: '41',
        name: 'D-Joint  Short (White)',
        size: '2" to 10" (all sizes)',
        variant: 'White — Pristine Sanitary Grade',
        tab: 'saddles',
        img: 'Picture63.png'
    },
    {
        id: '42',
        name: 'D-Joint — Long (White)',
        size: '2½" to 10" (all sizes)',
        variant: 'White — Pristine Sanitary Grade',
        tab: 'saddles',
        img: 'Picture64.png'
    },

    // ════════════════════════════════
    // CATEGORY 3: PIPELINE FITTINGS
    // ════════════════════════════════
    
    {
        id: '43',
        name: 'Elbow',
        size: '1¼" to 4" (all sizes)',
        variant: 'Grey (Standard)',
        tab: 'fittings',
        img: 'Picture37.png'
    },
    {
        id: '44',
        name: 'Elbow',
        size: '1¼" to 4" (all sizes)',
        variant: 'White (Virgin variant)',
        tab: 'fittings',
        img: 'Picture38.png'
    },
    {
        id: '45',
        name: 'Tee(Gray)',
        size: '1¼" to 4" (all sizes)',
        variant: 'Grey (Standard)',
        tab: 'fittings',
        img: 'Picture39.jpg'
    },
    {
        id: '46',
        name: 'Tee(Vergin)',
        size: '1¼" to 4" (all sizes)',
        variant: 'White (Virgin variant)',
        tab: 'fittings',
        img: 'Picture40.png'
    },
    {
        id: '47',
        name: 'Coupler Sleeve',
        size: '1¼" to 4" (all sizes)',
        variant: 'Grey (Standard) / White (Virgin variant)',
        tab: 'fittings',
        img: 'Picture42.jpg'
    },
    
    {
        id: '48',
        name: 'Vent Cowl',
        size: '1¼" to 4" (all sizes)',
        variant: 'Grey — Standard Distribution',
        tab: 'fittings',
        img: 'Picture41.jpg'
    },
    {
        id: '49',
        name: 'Union(Black)',
        size: '2" to 3"',
        variant: 'Black — Heavy Injection Solid Mold',
        tab: 'fittings',
        img: 'Picture44.png'
    },
    {
        id: '50',
        name: 'Nani Trap (White)',
        size: '1¼" to 4" (all sizes)',
        variant: 'White — Pristine Sanitary Grade',
        tab: 'fittings',
        img: 'Picture45.jpg'
    },
    {
        id: '51',
        name: 'End Cap(thd)',
        size: '1¼" to 4" (all sizes)',
        variant: 'Grey — Standard Distribution',
        tab: 'fittings',
        img: 'Picture46.jpg'
    },
    {
        id: '52',
        name: 'Plain End Cap',
        size: '1¼" to 4" (all sizes)',
        variant: 'Grey — Standard Distribution',
        tab: 'fittings',
        img: 'Picture46.jpg'
    },
    {
        id: '53',
        name: 'Hose Collar(out thread)',
        size: '15 mm to 50 mm (all sizes)',
        variant: 'Black — Solid Carbon Heavy Matte',
        tab: 'fittings',
        img: 'Picture76.png'
    },
    {
        id: '54',
        name: 'Hose Collar(Inner Thread)',
        size: '15 mm to 50 mm (all sizes)',
        variant: 'Black — Solid Carbon Heavy Matte',
        tab: 'fittings',
        img: 'Picture77.png'
    },
    {
        id: '55',
        name: 'Hose Connector (Blue)',
        size: '15 mm to 50 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture78.png'
    },
    {
        id: '56',
        name: 'Hose Connector (Black)',
        size: '32 mm to 50 mm (all sizes)',
        variant: 'Black — High-Impact Resistant',
        tab: 'fittings',
        img: 'Picture79.png'
    },
    {
        id: '57',
        name: 'Blue Threaded Bend',
        size: '15 mm to 100 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture84.png'
    },
    {
        id: '58',
        name: 'Blue Threaded Flange',
        size: '40 mm to 100 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture85.png'
    },
    {
        id: '59',
        name: 'Tank Nipple Fitting (Blue)',
        size: '15 mm to 80 mm',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture86.png'
    },
    {
        id: '60',
        name: 'Tank Nipple Fitting (White)',
        size: '15 mm to 50 mm',
        variant: 'White — Pure Alabaster Sanitary',
        tab: 'fittings',
        img: 'Picture87.png'
    },
    {
        id: '61',
        name: 'Pipe Nipple (Blue)',
        size: '3" (15–25 mm) · 4" (15–40 mm) · 6" (15–65 mm) · 9" (15–65 mm) · 12" (15–65 mm)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture94.png'
    },
    {
        id: '62',
        name: 'P.P. Elbow',
        size: '15 mm to 80 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture96.png'
    },
    {
        id: '63',
        name: 'P.P. Tee',
        size: '15 mm to 80 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture97.png'
    },
    {
        id: '64',
        name: 'P.P. Cupline',
        size: '15 mm to 80 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture98.png'
    },
    {
        id: '65',
        name: 'P.P. Union',
        size: '15 mm to 80 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture99.png'
    },
    {
        id: '66',
        name: 'P.P. Hex Nipple',
        size: '15 mm to 80 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture100.png'
    },
    {
        id: '67',
        name: 'P.P. Plug / Bush (Blue)',
        size: '15 mm to 80 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture101.png'
    },
    {
        id: '68',
        name: 'P.P. Plug / Bush (Black)',
        size: '15 mm to 25 mm',
        variant: 'Black — High-Impact Resistant Matte',
        tab: 'fittings',
        img: 'Picture102.png'
    },
    {
        id: '69',
        name: 'P.P. Cap/plug',
        size: '15 mm to 80 mm (all sizes)',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'fittings',
        img: 'Picture103.png'
    },
    {
        id: '70',
        name: 'F.T.A. Adapter (Molded Brass Thread)',
        size: '20 mm',
        variant: 'Black Body + Machine Knurled Brass',
        tab: 'fittings',
        img: 'Picture223.png'
    },
    {
        id: '71',
        name: 'F.T.A.  Adapter (Plain Running Thread)',
        size: '20 mm',
        variant: 'Black — Dense UV-Stabilized Matte Poly',
        tab: 'fittings',
        img: 'Picture224.png'
    },
    {
        id: '72',
        name: 'Compression End Cap',
        size: '20 mm',
        variant: 'Black Core Body + Bright Blue Nut',
        tab: 'fittings',
        img: 'Picture231.png'
    },
    {
        id: '73',
        name: 'MDPE  Compression both side Coupler',
        size: '20 mm',
        variant: 'Black Core Body + Bright Blue Nut',
        tab: 'fittings',
        img: 'Picture234.png'
    },

    // ════════════════════════════════
    // CATEGORY 4: BATHROOM FITTINGS
    // ════════════════════════════════
    {
        id: '74',
        name: 'Polypropylene (PP) Ball Cock',
        size: '15 mm to 25 mm',
        variant: 'White ',
        tab: 'bathroom',
        img: 'Picture90.png'
    },
    {
        id: '75',
        name: 'ABS Core Ball Cock',
        size: '15 mm to 25 mm',
        variant: 'White / Chrome Finish',
        tab: 'bathroom',
        img: 'Picture92.png'
    },
    {
        id: '76',
        name: 'PTMT Connection pipe',
        size: '12" to 2 MTR lengths',
        variant: 'White Base + Stainless Nuts',
        tab: 'bathroom',
        img: 'Picture95.png'
    },
    {
        id: '77',
        name: 'T-Cock Tap',
        size: '15 mm to 25 mm',
        variant: 'White / Colored Knobs — Standard & Fancy variants available',
        tab: 'bathroom',
        img: 'Picture103.png'
    },
    {
        id: '78',
        name: 'Pan Cock (Heavy)',
        size: '15 mm to 25 mm',
        variant: 'Blue / Colored Knobs — Heavy & Deluxe variants available',
        tab: 'bathroom',
        img: 'Picture105.png'
    },
    {
        id: '79',
        name: 'Handi Cock Tap',
        size: '15 mm to 20 mm',
        variant: 'Blue / Colored — Ergonomic Design',
        tab: 'bathroom',
        img: 'Picture109.png'
    },
    {
        id: '80',
        name: 'Push Cock',
        size: '15 mm',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture106.png'
    },
    {
        id: '81',
        name: 'Machine Adapter',
        size: '15 mm to 25 mm',
        variant: 'Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture107.png'
    },
    {
        id: '82',
        name: 'Concealed Bush(Light) ',
        size: '15 mm to 20 mm',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture110.png'
    },
    {
        id: '83',
        name: 'Aaro Cock (Short)',
        size: '15 mm',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture114.png'
    },
    {
        id: '84',
        name: 'Aaro Cock (Long Thread)',
        size: '15 mm',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture115.png'
    },
    {
        id: '85',
        name: 'Jug Cock',
        size: '15 mm',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture116.png'
    },
    {
        id: '86',
        name: 'Three Way Elbow',
        size: '15 mm to 25 mm',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture118.png'
    },
    {
        id: '87',
        name: 'Dabba Shower',
        size: '15 mm fitting socket',
        variant: 'White — Pristine Smooth Pure',
        tab: 'bathroom',
        img: 'Picture120.png'
    },
    {
        id: '88',
        name: 'PP Polo Bib Cock Series',
        size: '1/2"',
        variant: 'White Shell / High-Gloss Colored Handle — Short, Long, Foam Flow', 
        tab: 'bathroom',
        img: 'Picture126.png'
    },
    {
        id: '89',
        name: 'PP Polo Nozzle',
        size: '1/2"',
        variant: 'White Shell', 
        tab: 'bathroom',
        img: 'Picture127.png'
    },
    {
        id: '90',
        name: 'PP Polo angle cock',
        size: '1/2"',
        variant: 'White Shell ', 
        tab: 'bathroom',
        img: 'Picture129.png'
    },
    {
        id: '91',
        name: 'PP Polo 2 way angle cock',
        size: '1/2"',
        variant: 'White Shell ', 
        tab: 'bathroom',
        img: 'Picture130.png'
    },
    {
        id: '93',
        name: 'PP Mosco Short Body',
        size: '1/2"',
        variant: 'Full Branded Colored Poly — Short',
        tab: 'bathroom',
        img: 'Picture134.png'
    },
    {
        id: '94',
        name: 'PP Mosco Long Body',
        size: '1/2"',
        variant: 'Full Branded Colored Poly — Short',
        tab: 'bathroom',
        img: 'Picture135.png'
    },
    {
        id: '95',
        name: 'PP Mosco Nozzle',
        size: '1/2"',
        variant: 'Full Branded Colored Poly — Short',
        tab: 'bathroom',
        img: 'Picture136.png'
    },
    {
        id: '96',
        name: 'PP Mosco Foam Flow',
        size: '1/2"',
        variant: 'Full Branded Colored Poly — Short',
        tab: 'bathroom',
        img: 'Picture137.png'
    },
    {
        id: '97',
        name: 'PP Mosco Angle Cock',
        size: '1/2"',
        variant: 'Full Branded Colored Poly — Short',
        tab: 'bathroom',
        img: 'Picture137.png'
    },
    {
        id: '98',
        name: 'PP Mosco Pillar Cock',
        size: '1/2"',
        variant: 'Full Branded Colored Poly — Short',
        tab: 'bathroom',
        img: 'Picture138.png'
    },
    {
        id: '99',
        name: 'Sink Coupling',
        size: '1¼" × 3" and 1¼" × 4"',
        variant: 'White / Grey — Standard Structural Run',
        tab: 'bathroom',
        img: 'Picture139.png'
    },
    {
        id: '100',
        name: 'Sink Coupling with double jali',
        size: '1¼" × 3" and 1¼" × 4"',
        variant: 'White / Grey — Standard Structural Run',
        tab: 'bathroom',
        img: 'Picture140.png'
    },
    {
        id: '101',
        name: 'West Coupling',
        size: '1¾"',
        variant: 'White / Grey — Standard Structural Run',
        tab: 'bathroom',
        img: 'Picture141.png'
    },
    {
        id: '102',
        name: 'PP Royal Bib Cock Short Body',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture142.png'
    },
    {
        id: '103',
        name: 'PP Royal Bib Cock Long',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture143.png'
    },
    {
        id: '104',
        name: 'PP Royal Bib Cock Nozzle',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture144.png'
    },
    {
        id: '105',
        name: 'PP Royal Bib Cock Foam Flow',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture145.png'
    },
    {
        id: '106',
        name: 'PP Royal Bib Cock Washing Machine',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture146.png'
    },
    {
        id: '107',
        name: 'PP Royal Bib Angle Cock',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture147.png'
    },
    {
        id: '108',
        name: 'PP Royal Bib Pillar Cock',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture148.png'
    },
    {
        id: '109',
        name: 'PP Royal Bib Sink Cock',
        size: '1/2"',
        variant: 'Premium White/Grey ',
        tab: 'bathroom',
        img: 'Picture149.png'
    },
    {
        id: '110',
        name: 'Turbo Bib Cock Short Body',
        size: '1/2"',
        variant: 'Dual Tone Accent',
        tab: 'bathroom',
        img: 'Picture150.png'
    },
    {
        id: '111',
        name: 'Turbo Bib Cock Long Body',
        size: '1/2"',
        variant: 'Dual Tone Accent',
        tab: 'bathroom',
        img: 'Picture151.png'
    },
    {
        id: '112',
        name: 'Turbo Bib Nozzle cock',
        size: '1/2"',
        variant: 'Dual Tone Accent',
        tab: 'bathroom',
        img: 'Picture152.png'
    },
    {
        id: '113',
        name: 'Turbo Bib Foam Flow Cock',
        size: '1/2"',
        variant: 'Dual Tone Accent',
        tab: 'bathroom',
        img: 'Picture153.png'
    },
    {
        id: '114',
        name: 'Turbo Bib Angle Cock',
        size: '1/2"',
        variant: 'Dual Tone Accent',
        tab: 'bathroom',
        img: 'Picture154.png'
    },
    {
        id: '115',
        name: 'Zibra Bib Cock Series',
        size: '1/2"',
        variant: 'Zebra Stripe / Black & White — Short & Long Body variants',
        tab: 'bathroom',
        img: 'Picture155.png'
    },
    {
        id: '116',
        name: 'Corsa Bib Cock',
        size: '1/2"',
        variant: 'Standard White / Grey Framework',
        tab: 'bathroom',
        img: 'Picture156.png'
    },
    {
        id: '117',
        name: 'Diamond Bib Cock',
        size: '1/2"',
        variant: 'Premium Glossy High-Mirror Polishing',
        tab: 'bathroom',
        img: 'Picture158.png'
    },
    {
        id: '118',
        name: 'U-PVC Bib Cock',
        size: '1/2"',
        variant: 'Ivory / White Adaptation',
        tab: 'bathroom',
        img: 'Picture159.png'
    },
    {
        id: '119',
        name: 'Fancy Bib Short Cock',
        size: '1/2"',
        variant: 'Elegant White/Colored',
        tab: 'bathroom',
        img: 'Picture160.png'
    },
    {
        id: '120',
        name: 'Fancy Bib Long Cock',
        size: '1/2"',
        variant: 'Elegant White/Colored',
        tab: 'bathroom',
        img: 'Picture161.png'
    },
    {
        id: '121',
        name: 'Fancy Bib Nozzle Cock',
        size: '1/2"',
        variant: 'Elegant White/Colored',
        tab: 'bathroom',
        img: 'Picture162.png'
    },
    {
        id: '122',
        name: 'Fancy Bib Foam flow Cock',
        size: '1/2"',
        variant: 'Elegant White/Colored',
        tab: 'bathroom',
        img: 'Picture163.png'
    },
    {
        id: '123',
        name: 'Fancy Bib angle Cock',
        size: '1/2"',
        variant: 'Elegant White/Colored',
        tab: 'bathroom',
        img: 'Picture164.png'
    },
    {
        id: '124',
        name: 'Fancy Bib pillar Cock',
        size: '1/2"',
        variant: 'Elegant White/Colored',
        tab: 'bathroom',
        img: 'Picture165.png'
    },
    {
        id: '125',
        name: 'Classic Bib Short Cock',
        size: '1/2"',
        variant: 'Classic White ',
        tab: 'bathroom',
        img: 'Picture166.png'
    },
     {
        id: '126',
        name: 'Classic Bib Long Cock',
        size: '1/2"',
        variant: 'Classic White ',
        tab: 'bathroom',
        img: 'Picture167.png'
    },
     {
        id: '127',
        name: 'Classic Bib Nozzle Cock',
        size: '1/2"',
        variant: 'Classic White ',
        tab: 'bathroom',
        img: 'Picture168.png'
    },
     {
        id: '128',
        name: 'Classic Bib Foam Flow Cock',
        size: '1/2"',
        variant: 'Classic White ',
        tab: 'bathroom',
        img: 'Picture169.png'
    },
     {
        id: '129',
        name: 'Classic Bib Washing Machine tape',
        size: '1/2"',
        variant: 'Classic White ',
        tab: 'bathroom',
        img: 'Picture170.png'
    },
    {
        id: '130',
        name: 'Star Bib short Cock',
        size: '1/2" to 1"',
        variant: 'White/Blue Accent',
        tab: 'bathroom',
        img: 'Picture171.png'
    },
    {
        id: '131',
        name: 'Star Bib Long Cock',
        size: '1/2" to 1"',
        variant: 'White/Blue Accent',
        tab: 'bathroom',
        img: 'Picture172.png'
    },
    {
        id: '132',
        name: 'Star Bib Nozzle Cock',
        size: '1/2" to 1"',
        variant: 'White/Blue Accent',
        tab: 'bathroom',
        img: 'Picture173.png'
    },
    {
        id: '133',
        name: 'Star Bib Washing machine',
        size: '1/2" to 1"',
        variant: 'White/Blue Accent',
        tab: 'bathroom',
        img: 'Picture174.png'
    },
    {
        id: '134',
        name: 'Fancy Crystal Bib Short Cock',
        size: '1/2"',
        variant: 'Crystal Transparent Synthetic Polymer ',
        tab: 'bathroom',
        img: 'Picture175.png'
    },
     {
        id: '135',
        name: 'Fancy Crystal Bib Long Cock',
        size: '1/2"',
        variant: 'Crystal Transparent Synthetic Polymer ',
        tab: 'bathroom',
        img: 'Picture176.png'
    },
     {
        id: '136',
        name: 'Fancy Crystal Bib Nozzle Cock',
        size: '1/2"',
        variant: 'Crystal Transparent Synthetic Polymer ',
        tab: 'bathroom',
        img: 'Picture177.png'
    },
     {
        id: '137',
        name: 'Fancy Crystal Bib Foam Flow Cock',
        size: '1/2"',
        variant: 'Crystal Transparent Synthetic Polymer ',
        tab: 'bathroom',
        img: 'Picture178.png'
    },
     {
        id: '138',
        name: 'Fancy Crystal Bib Angle Cock',
        size: '1/2"',
        variant: 'Crystal Transparent Synthetic Polymer ',
        tab: 'bathroom',
        img: 'Picture179.png'
    },
     {
        id: '139',
        name: 'Fancy Crystal Bib Pillar Cock',
        size: '1/2"',
        variant: 'Crystal Transparent Synthetic Polymer ',
        tab: 'bathroom',
        img: 'Picture180.png'
    },
    {
        id: '140',
        name: 'Folding Gutter Jali',
        size: '6" × 6"',
        variant: 'White / Grey — Standard Structural',
        tab: 'bathroom',
        img: 'Picture181.png'
    },
    {
        id: '141',
        name: 'ABS Slim Shower',
        size: '4"×4" (Square) · 6"×6" (Square)',
        variant: 'Chrome Plating Over White Core',
        tab: 'bathroom',
        img: 'Picture182.png'
    },
    {
        id: '142',
        name: 'ABS Slim Shower',
        size: '5"×5" (CIrcle) ',
        variant: 'Chrome Plating Over White Core',
        tab: 'bathroom',
        img: 'Picture183.jpg'
    },
    {
        id: '143',
        name: 'PP Slim Shower',
        size: '3" (Round)',
        variant: 'Standard Matte White / Grey',
        tab: 'bathroom',
        img: 'Picture184.png'
    },
    {
        id: '144',
        name: 'PP Deluxe Shower',
        size: '4" (Round)',
        variant: 'Standard Matte White / Grey',
        tab: 'bathroom',
        img: 'Picture185.png'
    },
    {
        id: '145',
        name: 'Waste Pipe (Standard)',
        size: '1¼" × 2.5 FT and 1¼" × 3 FT',
        variant: 'White / Grey — Corrugated Flexible Resin',
        tab: 'bathroom',
        img: 'Picture186.png'
    },
    {
        id: '146',
        name: 'Royal Spring Waste Pipe',
        size: '1¼"',
        variant: 'White — Reinforced Stretchable Pure Poly',
        tab: 'bathroom',
        img: 'Picture188.png'
    },
    {
        id: '147',
        name: 'Super Flow Waste Pipe',
        size: '1¼" × 2.5 FT and 1¼" × 3 FT',
        variant: 'White — Smooth Non-Clog Internal Layer',
        tab: 'bathroom',
        img: 'Picture189.png'
    },

    // ════════════════════════════════
    // CATEGORY 5: AGRI IRRIGATION
    // ════════════════════════════════
    {
        id: '148',
        name: 'H.B. Green Foot Valve',
        size: '50 mm to 100 mm',
        variant: 'Green — High-Visibility Forest Cast',
        tab: 'agri',
        img: 'Picture60.png'
    },
    {
        id: '149',
        name: 'Foot Valve (Spring)',
        size: '15 mm to 25 mm ',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture65.png'
    },
    {
        id: '150',
        name: 'Nipple Foot Valve (Flap)',
        size: '15 mm to 25 mm',
        variant: 'red',
        tab: 'agri',
        img: 'Picture66.png'
    },
    {
        id: '151',
        name: 'Nipple Foot Valve (Spring)',
        size: '15 mm to 25 mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture66.png'
    },
    {
        id: '152',
        name: 'Spring N.R.V.',
        size: '15 mm to 25 mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture67.png'
    },
    {
        id: '153',
        name: 'Air Valve',
        size: '15 mm to 50 mm',
        variant: 'Red',
        tab: 'agri',
        img: 'Picture69.png'
    },
    {
        id: '154',
        name: 'Foot Valve (Threaded)',
        size: '15 mm to 150 mm — includes 15, 20, 25, 32, 40, 50, 65, 80, 100, 125, 150 mm',
        variant: 'Red — Solid Carbon Reinforced',
        tab: 'agri',
        img: 'Picture72.png'
    },
    {
        id: '155',
        name: 'Nut Bolt Foot Valve',
        size: '32 mm to 150 mm — includes 32, 40, 50, 65, 80, 100, 125, 150 mm',
        variant: 'Red — Solid Carbon Reinforced',
        tab: 'agri',
        img: 'Picture73.png'
    },
    {
        id: '156',
        name: 'Bore Foot Valve',
        size: '50 mm to 100 mm — includes 50, 65, 80, 100 mm',
        variant: 'Red — Solid Carbon Reinforced',
        tab: 'agri',
        img: 'Picture74.png'
    },
    {
        id: '157',
        name: 'Non Return Valve (Standard)',
        size: '32 mm to 150 mm — includes 32, 40, 50, 65, 80, 100, 125, 150 mm',
        variant: 'Black — Thick-Wall Anti-Corrosive Shield',
        tab: 'agri',
        img: 'Picture75.png'
    },
    {
        id: '158',
        name: 'Water Softener',
        size: '1/2"',
        variant: 'White / Blue Cap',
        tab: 'agri',
        img: 'Picture122.png'
    },
    {
        id: '159',
        name: 'Water Filter',
        size: '1/2"',
        variant: 'Clear / Blue Intake',
        tab: 'agri',
        img: 'Picture123.png'
    },
    {
        id: '160',
        name: 'Mini Water Filter',
        size: '1/2"',
        variant: 'Clear / Blue Intake',
        tab: 'agri',
        img: 'Picture123.png'
    },
    {
        id: '161',
        name: 'Drip Jointer (Black)',
        size: '12 mm to 20 mm',
        variant: 'Black — High-Density Solid Matte',
        tab: 'agri',
        img: 'Picture190.png'
    },
    {
        id: '162',
        name: 'Drip Jointer (Blue)',
        size: '16 mm',
        variant: 'Blue — High-Visibility Primary Poly',
        tab: 'agri',
        img: 'Picture191.png'
    },
    {
        id: '163',
        name: 'Lateral Cock (Black)',
        size: '12 mm to 20 mm',
        variant: 'Black — High-Density Solid Matte',
        tab: 'agri',
        img: 'Picture199.png'
    },
    {
        id: '164',
        name: 'Mini Sprinkler',
        size: '1/2"',
        variant: 'Black Frame + Green Swivel Spindle',
        tab: 'agri',
        img: 'Picture213.png'
    },
    {
        id: '165',
        name: 'Venturi Set',
        size: '1½" to 2½"',
        variant: 'Green — Chemical Resistant Matte',
        tab: 'agri',
        img: 'Picture211.png'
    },
    {
        id: '166',
        name: 'Flush Valve',
        size: '1½" to 2½"',
        variant: 'Black — Dense UV-Stabilized',
        tab: 'agri',
        img: 'Picture212.png'
    },
    {
        id: '167',
        name: 'Rain Pipe Jointer',
        size: '1¼" to 1½"',
        variant: 'Black — Dense UV-Stabilized',
        tab: 'agri',
        img: 'Picture214.png'
    },
    {
        id: '168',
        name: 'Rain Pipe Cock',
        size: '1¼" to 1½"',
        variant: 'Black — Dense UV-Stabilized',
        tab: 'agri',
        img: 'Picture194.png'
    },
    {
        id: '169',
        name: 'Rain Pipe (Semi & Virgin — 100 MTR Roll)',
        size: '40 mm',
        variant: 'Black — Dense UV-Stabilized',
        tab: 'agri',
        img: 'Picture220.png'
    }
];;
