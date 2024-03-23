function showPositive(plant) {
    let resultDiv = document.getElementById(plant + "-result");
    switch(plant) {
        case "cotton":
            resultDiv.innerHTML = `
                <h3>Bacillus pumilis</h3>
                <p>Prevent diseases</p>
                <h3>Azospirillum lipoferum</h3>
                <p>Induced Systemic Tolerance (IST)</p>
                <h3>Pantoea agglomerans and Azospirillum brasilience</h3>
                <p>Drought stress tolerance</p>
                <!-- Add more positive aspects here -->
            `;
            break;
        case "rubber":
            resultDiv.innerHTML = `
                <h3>Trichoderma sp.</h3>
                <p>Phosphate-Solubilizing</p>
                <!-- Add more positive aspects here -->
            `;
            break;
        // Add more cases for other plants
    }
}



function showNegative(plant) {
    let resultDiv = document.getElementById(plant + "-result");
    switch(plant) {
        case "cotton":
            resultDiv.innerHTML = `
                <h3>Fusarium wilt - <em>Fusarium oxysporum f.sp. vasinfectum</em></h3>
                <h4>Treatment</h4>
                <ul>
                    <li>Remove and burn the infected plant debris in the soil after deep summer ploughing.</li>
                    <li>Apply farm yard manure or other organic manures @ 4 t/ac.</li>
                    <!-- Add more treatment options here -->
                </ul>
                <h3>Verticillium wilt - <em>Verticillium dahliae</em></h3>
                <h4>Treatment</h4>
                <ul>
                    <li>Remove and burn the infected plant debris in the soil after deep summer ploughing.</li>
                    <li>Apply farm yard manure or other organic manures @ 4 t/ac.</li>
                    <!-- Add more treatment options here -->
                </ul>
                <!-- Add more negative aspects here -->
            `;
            break;
        case "rubber":
            resultDiv.innerHTML = `
                <h3>Abnormal leaf fall - <em>Phytophthora palmivora & P. nicotianae var. parasitica</em></h3>
                <h4>Treatment</h4>
                <ul>
                    <li>Prophylactic sprays prior to onset of south west monsoon with Bordeaux mixture 1%. Addition of ZnSo4 @ 0.2% improves the efficacy.</li>
                    <!-- Add more treatment options here -->
                </ul>
                <!-- Add more negative aspects here -->
            `;
            break;
        // Add more cases for other plants
    }
}

function positiveResultjute(){
    document.getElementById("resultjute").style.display = "block";
    document.getElementById("resultjute").innerHTML =`
    <h3>Positive Aspects</h3>
    <ul>
        <li>Jute - Endophytes: Growth promoting by the production of phytohormones</li>
        <li>Jute - Klebsiella: Nitrogen Fixation</li>
        <li>Jute - Staphylococcus saprophyticus: Prevent diseases</li>
    </ul>
    ` ;
}

function negativeResultjute() {
    document.getElementById("resultjute").style.display = "block";
    document.getElementById("resultjute").innerHTML = `
    <h3>Negative Aspects</h3>
    <ul>
        <li><strong>Stem rot - <em>Macrophomina phaseolina</em>:</strong> Collection of healthy seeds from the infection-free area, crop rotation with paddy, spraying fungicide before sowing seedlings, application of stem rot disease variety, early harvesting.</li>
        <li><strong>Anthracnose -<em> Colletotrichum corchorii</em>:</strong> Control involves growing resistant varieties and rust-free plants, destroying alternate host plants, observing stringent sanitation measures, and using appropriate fungicides like copper sprays containing copper diammonia diacetate (e.g., Liquicop), propiconazole (e.g., Banner Maxx II), and the systemic fungicide thiophanate-methyl.</li>
        <li><strong>Blackband - <em>Botryodiplodia theobromae</em>:</strong> Clean cultivation, seed treatment with Carbendazim 50 WP @ 2g/kg and foliar application of Carbendazim 50 WP @ 2g/l water or Cu-oxychloride @ 5-7 g/l water or Mancozeb @ 4-5 g/l water provides effective management.</li>
        <li><strong>Soft rot - <em>Sclerotium rolfsii</em>:</strong> Burning the infected plant, deep ploughing of the soil, soil treatment, foliar spray of fungicide.</li>
    </ul>
    `;
}

function positiveResult(){
    document.getElementById("resulttobacco").style.display = "block";
    document.getElementById("resulttobacco").innerHTML =`
    <h3>Positive Aspects</h3>
    <ul>
        <li>Tobacco - Paenibacillus polymyxa: Growth promoting by the production of phytohormones</li>
    </ul>
    ` ;
}

function negativeResult() {
    document.getElementById("resulttobacco").style.display = "block";
    document.getElementById("resulttobacco").innerHTML = `
    <h3>Negative Aspects</h3>
    <ul>
        <li><strong>Damping off - <em>Pythium Aphanidermatum</em>:</strong> Deep ploughing in summer destroys the fungus, preparation of raised seed beds 15 cm high with channels around to provide drainage, rabbing the seed bed before sowing with slow-burning farm waste materials like paddy husk, tobacco stubbles, waste grass etc., seed rate @ 3.5 kg/ha is to be used to avoid overcrowding of seedlings, waterings are regulated to avoid excessive dampness on the bed surface.</li>
        <li><strong>Frog eye leaf spot - <em>Cercospora nicotianae</em>:</strong> In the field, removal of sand leaves immediately after the transplants have established, and weekly application of 0.4% (4g/lit) Bordeaux mixture or 0.1% (1g/lit) Benomyl or Thiophanate methyl or 0.03% (0.3g/lit) 5-6 weeks after planting has given adequate control of frog-eye spot.</li>
        <li><strong>Black shank - <em>Phytophthora nicofianae</em>:</strong> At the time of transplanting, seedlings with blackened stem should be discarded to prevent the spread of the disease to the field. Sanitary measures like removal and destruction of the affected plants and disinfecting the spots with 0.4% Bordeaux mixture drench will prevent the spread of the disease in the main field.</li>
        <li><strong>Anthracnose - <em>Colletotrichum tabacum</em>:</strong> Liquid copper sprays and sulfur powders should be applied weekly, starting when foliage begins to develop in the early spring and continuing throughout the growing season. Spray early in the day, and avoid applications during hot weather. Seeds may also be treated prior to planting.</li>
        <li><strong>Sore shin - <em>Rhizoctonia solani</em>:</strong> Irrigate in the pre-dawn or early morning hours to promote leaf drying. Irrigate only when needed to a depth of 4 to 6 inches. Remove dew from leaves by poling or light irrigation. Avoid nitrogen fertilization that results in soft foliage growth.</li>
        <li><strong>Fusarium Wilt - <em>Fusarium oxysporum</em>:</strong> There is no effective fungicide or other cure for Fusarium wilt. The pathogen nearly always kills infected hosts. Prevention and exclusion are the only effective management strategies. Avoid this problem by replanting at that site using species from different genera than plants previously infected there by Fusarium.</li>
        <li><strong>Brown spot - <em>Alternaria alternata</em>:</strong> Removal and destruction of diseased plant debris can check the primary infection promptly. Continuous growing of tobacco after tobacco must be avoided in the heavily infected fields. Weekly spraying of fungicides such as Maneb or Zineb @ 2g/ha or Benomyl or Thiophanate methyl at 1kg/ha.</li>
        <li><strong>Tobacco mosaic - <em>Tobacco mosaic virus(TMV)</em>:</strong> Remove and destroy infected plants. Keep the field free of weeds which harbor the virus. Wash hands with soap and running water before or after handling the plants or after weeding. Prohibit smoking, chewing, and snuffing during field operations. Spray the nursery and main field with botanical leaf extracts of Bougainvillea or Basella alba at 1 litre of extract in 150 liters of water, two to three times at weekly intervals. Adopt crop rotation by growing non-host plants for two seasons.</li>
        <li><strong>Leaf curl - <em>Tobacco leaf curl virus(TLCV)</em>:</strong> Remove and destroy the infected plants. Rogue out the reservoir weed hosts which harbor the virus and whiteflies. Planting tobacco crop during the crop periods when the vector population is low. Spray Methyldemeton at 0.1 to 0.2 per cent to control the vectors.</li>
        <li><strong>Broom rape - <em>Orobanche cernua var. desertorum</em>:</strong> Rogue out the tender shoots of the parasite before flowering and seed set. Spray the soil with 25 per cent copper sulfate. Spray 0.1 per cent Allyl alcohol. Apply a few drops of kerosene directly on the shoot. Grow decoy or trap crops like chili, moth bean, sorghum, or cowpea to stimulate seed germination and kill the parasite.</li>
        <li><strong>Powdery mildew - <em>Erysiphe cichoracearum var. nicotianae</em>:</strong> Apply balanced fertilizers. Avoid overcrowding of plants. Remove and destroy the affected leaves. Plant early in the season so that the crop escapes the cool temperature at maturity phase. Spray dinocap at 375 ml or Carbendazim at 500g/ha.</li>
    </ul>
    `;
}