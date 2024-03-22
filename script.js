
function positiveResult(){
    document.getElementById("resultrice").style.display = "block";
    document.getElementById("resultrice").innerHTML =`
    <strong> Rice - Bacillus spp : </strong>Phosphate-Solubilizing <br>
    <strong> Rice - Azospirillum : </strong>Gibberellins-Development of plant growth <br>
    <strong> Rice - Pseudomonas spp : </strong>Siderophore-Protection against phytopathogens<br>
    <strong> Rice - Rice - Azospirillum : </strong>Nitrogen fixation<br>

    ` ;

}

function negativeResult() {
    document.getElementById("resultrice").style.display = "block";
    document.getElementById("resultrice").innerHTML = `
    <img src="./Rice Blast.jpg" alt="White Clover Mosaic" width=70px height=70px><br>
    <strong>Rice Blast - <em>Magnaporthe grisea</em>:</strong>
         This is a fungal disease that affects rice. Systemic fungicides like pyroquilon and tricyclazole can help control it.<br>
        Systemic fungicides such as pyroquilon and tricyclazole are possible chemicals for controlling the disease.<br>

        <img src="./Bacterial Leaf Blight Of Rice.png" alt="Bacterial Leaf Blight Of Rice" width=50px height=50px><br>
        <strong>Bacterial Leaf Blight Of Rice - <em>Xanthomonas oryzae </em>:</strong>
         This disease is caused by a bacterium and can be controlled by spraying Streptomycin sulphate + Tetracycline combination along with Copper oxychloride. Additionally, bleaching powder can be used in the irrigation water.<br>
        Spray Streptomycin sulphate + Tetracycline combination 300 g + Copper oxychloride 1.25kg/ha. If necessary repeat 15 days later. Application of bleaching powder @ 5 kg/ha in the irrigation water is recommended in the kresek stage.<br>
        
        <img src="./Sheath Rot Of Rice.jpeg" alt="White Clover Mosaic">
        <strong>Sheath Rot Of Rice - <em>Sarocladium oryzae</em>:</strong> Seed treatment with fungicides like Mancozeb and Benomyl can eliminate seedborne inoculum. Foliar spraying with carbendazim, edifenphos, or mancozeb at the booting stage can reduce sheath rot.<br>
        Seed treatment with fungicides such as Mancozeb and Benomyl effectively eliminates seedborne inoculum. At booting stage, foliar spraying with carbendazim, edifenphos, or mancozeb was found to reduce sheath rot. Spray Carbendazim 250 g or Chlorothalonil 1 kg or Edifenphos 1 lit/ha.<br>
       
        <img src="./Rice Brown Spot.jpeg" alt="White Clover Mosaic">
        <strong>Rice Brown Spot - <em>Helminthosporium oryzae</em>:</strong>Fungicides like iprodione, propiconazole, azoxystrobin, trifloxystrobin, and carbendazim can be used as seed treatments. Hot water treatment before planting can also help control primary infection.<br>
         Use fungicides (e.g., iprodione, propiconazole, azoxystrobin, trifloxystrobin, and carbendazim) as seed treatments. Treat seeds with hot water (53−54°C) for 10−12 minutes before planting, to control primary infection at the seedling stage.<br>
        

         <img src="./False Smut Of Rice.jpg" alt="White Clover Mosaic">
         <strong>False Smut Of Rice - <em>Ustilaginoidea virens</em>:</strong>Spraying copper oxychloride or Propiconazole at specific stages can prevent fungal infection. Seed treatment with carbendazim is also recommended.<br>
         Spraying of copper oxychloride at 2.5 g/litre or Propiconazole at 1.0 ml/litre at boot leaf and milky stages will be more useful to prevent the fungal infection. Seed treatment with carbendazim 2.0g/kg of seeds.<br>
        

         <img src="./Sheath Blight Of Rice.jpeg" alt="White Clover Mosaic">
         <strong>Sheath Blight Of Rice - <em>Rhizoctonia solani</em>:</strong>Foliar fungicides like Carbendazim and Propiconazole can be used for control.<br>
         Control of sheath blight has been mainly through the use of foliar fungicides. Carbendazim (1 g/lit), Propiconazole (1ml/lit) may be applied. Spray Carbendazim 250 g or Chlorothalonil 1 kg or Edifenphos 1 lit/ha.<br>
       

         <img src="./Tungro Disease Of Rice.jpg" alt="White Clover Mosaic">
         <strong>Tungro Disease Of Rice - <em>Rice Tungro virus (RTSV and RTBV)</em>:</strong>Insect vector control using Carbofuran granules is recommended.<br>
         In nursery when virus infection is low, apply Carbofuran granules @ 1 kg./ha to control vector population. During pre-tillering to mid-tillering when one affected hill/m is observed apply Carbofuran granules @ 3.5kg/ha to control insect vector.<br>
        

         <img src="./Foolish Seedling Disease.jpg" alt="White Clover Mosaic">
         <strong>Foot rot / Bakanae / Foolish Seedling Disease - <em>Gibberella fujikuroi<em>:</strong>Seed treatment using fungicides like thiram, thiophanate-methyl, or benomyl is effective.<br>
         Seed treatment using fungicides such as thiram, thiophanate-methyl, or benomyl is effective before planting. Benomyl or benomyl-t at 1-2% of seed weight should be used for dry seed coating.<br>
        

         <img src="./Stem Rot Of Rice.jpeg" alt="White Clover Mosaic">
         <strong>Stem Rot Of Rice - <em>Sclerotium oryzae</em>:</strong>Chemicals like fentin hydroxide and thiophanate-methyl can be sprayed to reduce stem rot incidence.<br>
         Chemicals such as fentin hydroxide sprayed at the mid-tillering stage, thiophanate-methyl sprayed at the time of disease initiation can reduce stem rot incidence in the rice field. The use of other fungicides such as Ferimzone and validamycin A also effective against the fungus.<br>
        
         <img src="./Grassy Stunt Disease Of Rice.jpeg" alt="White Clover Mosaic">
         <strong>Grassy Stunt Disease Of Rice - <em>Rice grassy stunt tenuivirus</em>:</strong> Managing brown planthopper vectors is crucial for controlling this virus. Insecticides, resistant varieties, and synchronized crop establishment can be used.<br>
        To control rice grassy stunt virus, the brown planthopper vectors need to be managed. This can be done either through the use of insecticides, brown plant hopper-resistant varieties, or synchronized crop establishment. Infected stubble needs to be plowed under after harvest to reduce the virus source.
    `;
}


function showPositiveResult() {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <strong>Azospirillum lipoferum:</strong> Development of root system<br>
        <strong>Bacillus sp.:</strong> Phosphate-Solubilizing<br>
        <strong>Azotobacter:</strong> Nitrogen fixation
    `;
}

function showNegativeResult() {
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
    <img src="./Black or Stem Rust.jpg" alt="White Clover Mosaic">
    <strong>Black or Stem Rust:<em>Puccinia graminis tritici </em>    </strong> <br>
    Treatment 
	Fungicides azoxystrobin at 200 g/liter + cyproconazole at 80 g/liter (AmistarXtra 280 SC), tebuconazole (Folicur 250 EC), tebuconazole + tridimenol (Silvacur 375 EC), and tebuconazole (Orius 25 EW) were more effective in reducing stem rust across the sites.
<br>
    This is a fungal disease that affects cereal crops. Fungicides like azoxystrobin and cyproconazole can help reduce its impact.<br>
        Fungicides such as azoxystrobin and cyproconazole are effective in reducing stem rust.<br>


        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Brown or Leaf Rust: <em>Puccinia triticina (P. recondita)</em> </strong><br>
        Treatment
Fungicides with the active ingredient Myclobutanil or Azoxystrobin are most effective against rust fungi.
<br>
         Another fungal disease affecting cereals, fungicides containing Myclobutanil or Azoxystrobin are effective against it.<br>
        Fungicides with Myclobutanil or Azoxystrobin are effective against rust fungi.<br>
       

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Yellow or Stripe Rust:<em>Puccinia striiformis 
</em>        </strong> <br>
Treatment
Mixed cropping with suitable crops.
Avoid excess dose of nitrogenous fertilizers.
Spray Zineb at 2.5 kg/ha or Propioconazole @ 0.1 %.
<br>
This rust disease affects cereals as well. Control measures include mixed cropping, avoiding excess nitrogenous fertilizers, and using fungicides like Zineb or Propioconazole. <br>
        Control with mixed cropping, avoiding excess nitrogenous fertilizers, and using Zineb or Propioconazole.<br>
        

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Loose Smut:<em>Ustilago nuda tritici (Ustilago tritici) 
</em>        </strong><br>
Treatment
            Treat the seed with Vitavax @ 2g/kg seed before sowing. Burry the infected ear heads in the soil, so that secondary spread is avoided.
<br>
 A disease affecting cereals caused by a fungus, it can be controlled by treating seeds with Vitavax before sowing and burying infected ear heads in the soil to prevent further spread.<br>
        Treat seeds with Vitavax before sowing and bury infected ear heads in the soil to prevent secondary spread.<br>
        

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Flag Smut:<em> Urocystis tritici
</em>        </strong><br>
Treatment
Treat the seeds with carboxin at 2g /kg.
<br>
This disease can be controlled by treating seeds with carboxin, a fungicide.<br>
         Treat seeds with carboxin.<br>
       

         <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
         <strong>Hill Bunt or Stinking Smut:<em>Tilletia caries / T.foetida
</em>         </strong> <br>
Treatment
Treat the seeds with carboxin or carbendazim at 2g/kg.
Grow the crop during high temperature period.
Adopt shallow sowing.
<br>
Treat seeds with carboxin or carbendazim, grow during high-temperature periods, and adopt shallow sowing to manage this disease.<br>
        Treat seeds with carboxin or carbendazim, grow during high-temperature periods, and adopt shallow sowing.<br>
       

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Karnal Bunt:<em>- Neovassia indica
</em>        </strong> <br>
Treatment
	Good hygiene during harvest, storage, and transport will reduce the chance of the disease spreading to healthy grain. Delaying drilling of a second wheat crop, after harvesting an infected wheat crop, also reduces infection risk.

    <br>
This disease affects wheat and can be managed through good hygiene practices and delaying the drilling of a second wheat crop after harvesting an infected wheat crop.<br>
         Practice good hygiene and delay drilling of a second wheat crop after harvesting an infected wheat crop.<br>
        


         <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
         <strong>Fusarium Head Blight:</strong>This disease affects cereals like wheat. Strobilurins like pyraclostrobin or azoxystrobin are effective fungicides against it. <br>
        Strobilurins like pyraclostrobin or azoxystrobin are effective.<br>
       

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Foot Rot:<em> Fusarium graminearum
</em>        </strong> <br>
Treatment 
	Strobilurins like pyraclostrobin (Insignia or Pageant) or azoxystrobin (Heritage) are often some of the most effective
<br>
 Manage this disease by following crop rotation practices and treating seeds with Carboxin or Carbendazim.<br>
        Follow crop rotation and treat seeds with Carboxin or Carbendazim.<br>
       

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Powdery Mildew:<em>Pythium graminicolumand P. arrhenoma/nes
</em>        </strong>Treatment
Follow crop rotation.
Treat the seeds with Carboxin or Carbendazim at 2g/kg.
<br>
 A fungal disease affecting a wide range of plants, it can be controlled by spraying the crop with Wettable Sulphur or Carbendazim.<br>
         Spray Wettable Sulphur or Carbendazim.<br>
       

         <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
         <strong>Leaf Blight:<em>Alternaria triticina / Bipolaris sorokiniana
</em>         </strong><br>
Treatment
	Spray the crop with Mancozeb or Zineb at 2 kg/ha.

This disease affects cereals like maize and wheat. Control measures include spraying the crop with Mancozeb or Zineb.<br>
         Spray the crop with Mancozeb or Zineb.<br>
    `;
}



function positiveResultMaize(){
    document.getElementById("resultmaize").style.display = "block";
    document.getElementById("resultmaize").innerHTML = `
        <strong>Maize - Bacillus amyloliquefaciens:</strong> Enhance salt tolerance & chlorophyll<br>
    `;
}

function negativeResultMaize() {
    document.getElementById("resultmaize").style.display = "block";
    document.getElementById("resultmaize").innerHTML = `
    <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Downy mildew - Peronospora parasitica:</strong> Downy mildew is a fungal disease that affects maize. Control measures include using disease-free healthy seeds, drying seeds to less than 14% moisture, implementing deep tillage and crop rotations for more than three years, roguing of diseased plants and alternate grass hosts, seed treatment with metalaxyl, and foliar spray with metalaxyl + mancozeb or mancozeb after initial symptoms.<br>
        Treatment:<br>
        - Use disease-free healthy seeds.<br>
        - Dry seeds to less than 14% moisture.<br>
        - Implement deep tillage and crop rotations for more than three years.<br>
        - Roguing of diseased plants and alternate grass hosts.<br>
        - Seed treatment with metalaxyl @ 6g/kg of seeds.<br>
        - Foliar spray with metalaxyl + mancozeb @ 1000 g or mancozeb 1000 g/ha after initial symptom / 20 DAP and 40 DAP.<br><br>


        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Rust - Puccinia sorghi:</strong>  Rust is a fungal disease that affects maize. Fungicides containing mancozeb, pyraclostrobin, pyraclostrobin + metconazole, pyraclostrobin + fluxapyroxad, azoxystrobin + propiconazole, trifloxystrobin + prothioconazole can be used to control it.<br>
        Treatment: Numerous fungicides are available for rust control. Products containing mancozeb, pyraclostrobin, pyraclostrobin + metconazole, pyraclostrobin + fluxapyroxad, azoxystrobin + propiconazole, trifloxystrobin + prothioconazole can be used to control the disease.<br><br>


        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Leaf Blight - Cochliobolus heterostrophus:</strong> Leaf blight is a fungal disease that affects maize. Daconil fungicides offer three-way protection to prevent leaf blight and control active diseases.<br>
        Treatment: Daconil fungicides offer three-way protection to prevent leaf blight and to stop and control active diseases.<br><br>


        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Turcicum blight - Exserohilum turcicum & Helminthosporium maydis:</strong> Turcicum blight is a fungal disease that affects maize. Fungicides like mancozeb and combination treatments of carbendazim and mancozeb can reduce the disease.<br>
        Treatment: Seven fungicides were evaluated in vitro against Exserohilum turcicum causing leaf blight of maize. The treatment mancozeb 0.25% and combination treatments of carbendazim and mancozeb i.e. saff 0.25% recorded the lowest percent disease index (PDI) reducing the disease by 73.0% and 72.1% respectively.<br>
    `;
}
function positiveResultFieldMustard(){
    document.getElementById("resultfieldmustard").style.display = "block";
    document.getElementById("resultfieldmustard").innerHTML = `
        <strong>Field Mustard - Bacillus spp.:</strong> Promoted root & shoot elongation<br>
    `;
}

function negativeResultFieldMustard() {
    document.getElementById("resultfieldmustard").style.display = "block";
    document.getElementById("resultfieldmustard").innerHTML = `

    <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Bacterial black rot - Xanthomonas campestris pv. campestris:</strong> Bacterial black rot is a seed-borne disease that affects mustard plants. Treatment includes seed treatment with mercuric chloride, hot water treatment of seeds, a three-year crop rotation, and maintaining strict sanitary precautions.<br>
        Treatment:<br>
        - Seed treatment with mercuric chloride for half an hour is effective in eradicating seed-borne infection.<br>
        - Hot water treatment of the seed at 50°C for 30 minutes is also effective.<br>
        - A three-year rotation of the crop is desirable.<br>
        - Strict sanitary precautions should be maintained.<br><br>


        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>White Rust - Albugo candida:</strong>  White rust is a fungal disease that affects mustard plants. Treatment options include seed treatment with Trichoderma viride, soil application of Trichoderma viride along with copper oxychloride, and the use of garlic extract as alternatives to systemic fungicides.<br>
        Treatment: T. viride seed treatment and soil application along with copper oxychloride and also garlic extract were found as suitable alternatives for the systemic fungicides for managing white rust especially in organic mustard production.<br><br>

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Sclerotinia White Mould - Sclerotinia sclerotiorum:</strong> Sclerotinia white mould is a fungal disease that affects mustard plants. Aviator (bixafen + prothioconazole) is an effective fungicide for controlling Sclerotinia and other diseases like light leaf spot.<br>
        Treatment: Aviator (bixafen + prothioconazole) provides the most effective control of Sclerotinia as well as other important diseases, such as light leaf spot.<br><br>

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Aster Yellows - Aster Yellows Phytoplasma:</strong> Aster yellows is a disease caused by a phytoplasma that affects mustard plants. Once a plant is infected, there is no cure. Infected plants should be removed, and perennial weeds should be controlled to prevent the pathogen from surviving in the field.<br>
        Treatment: Once aster yellows infects a plant, there is no way to cure it. Remove infected plants. Control perennial weeds. If infected by the aster yellows phytoplasma, these plants allow the pathogen to survive in the field from one year to the next.<br><br>

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Downy Mildew - Hyaloperonospora parasitica:</strong> Aster yellows is a disease caused by a phytoplasma that affects mustard plants. Once a plant is infected, there is no cure. Infected plants should be removed, and perennial weeds should be controlled to prevent the pathogen from surviving in the field.<br>
        Treatment: Copper fungicides are often used to control downy mildew. While many people believe copper is approved for organic production, it is only conditionally approved.
    `;
}

function positiveResultCucumber(){
    document.getElementById("resultcucumber").style.display = "block";
    document.getElementById("resultcucumber").innerHTML = `
        <strong>Cucumber - Stenotrophomonas maltophilia:</strong> Prevent diseases<br>
    `;
}

function negativeResultCucumber() {
    document.getElementById("resultcucumber").style.display = "block";
    document.getElementById("resultcucumber").innerHTML = `
    <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Angular Leaf Spot - Pseudomonas syringae:</strong> Angular leaf spot is a bacterial disease that affects cucumbers. Treatment options include hot water treatment to remove some bacteria, crop rotation to avoid planting squash family members in the same location for at least two years, and using drip irrigation instead of overhead sprinklers.
        Treatment:<br>
        - Hot water treatment can remove some, but not all, bacteria.<br>
        - Rotate vegetables so two or more years go by before planting any member of the squash family in the same location.<br>
        - Use drip irrigation instead of overhead sprinklers if possible.<br><br>

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Bacterial Wilt - Erwinia tracheiphila:</strong> Bacterial wilt is a disease caused by Erwinia tracheiphila that affects cucumbers. Once a plant is infected, it cannot be controlled. Infected plants should be immediately removed and disposed of by burning or burying.
        Treatment: Bacterial wilt cannot be controlled once a plant is infected. In particular, chemical sprays are not effective for control once plants show symptoms. If you find bacterial wilt in your garden, immediately remove infected plants, and dispose of them by burning (where allowed by law) or burying them.<br><br>

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Phytophthora Crown And Root Rot - Phytophthora capsici:</strong> Phytophthora crown and root rot is a disease caused by Phytophthora capsici that affects cucumbers. Treatment involves removing diseased plants and surrounding healthy-looking border plants. Fungicide treatments have shown positive results in trials.
        Treatment: If Phytophthora is found in the field, remove diseased plants and surrounding healthy-looking border plants. In MSU trials, cucumbers treated with fungicides performed better than untreated plots.<br><br>

        <img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
        <strong>Downy Mildew - Pseudoperonospora cubensis:</strong> Downy mildew is a fungal disease that affects cucumbers. A homemade remedy can be made by mixing baking soda, water, and liquid soap, with optional addition of vegetable oil, to help control the disease.
        Treatment: Mix a tablespoon of ordinary baking soda into four litres of water, and stir in a tablespoon of liquid (non-detergent based) soap. Adding a tablespoon of vegetable oil is optional, but helps the mixture stick to the leaves.
    `;
}

// Watermelon
function positiveResultWatermelon(){
document.getElementById("resultwatermelon").style.display = "block";
document.getElementById("resultwatermelon").innerHTML = `
<strong>Watermelon - Paenibacillus polymyxa:</strong> Prevent diseases, root development<br>
<strong>Watermelon - Bacillus spp.:</strong> Prevent diseases & Nematode<br>
<strong>Watermelon - Rhizobium undicola:</strong> Nitrogen fixation<br>
`;
}

function negativeResultWatermelon() {
document.getElementById("resultwatermelon").style.display = "block";
document.getElementById("resultwatermelon").innerHTML = `
<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Downy Mildew - Pseudoperonospora cubensis:</strong> Downy mildew is a fungal disease that affects watermelons. Organic controls include spraying a mixture of milk and water or a mixture of baking soda and water on affected foliage weekly.  <br>
Treatment: Downy mildew doesn't like warm or dry weather. Organic controls include trying 3 parts of milk to 10 parts of water or one tablespoon of baking soda into one litre of water. Mix either option into a spray container and spray the affected foliage weekly.<br><br>

<strong>Powdery Mildew - Podosphaera xanthii:</strong>  Powdery mildew is a fungal disease that affects watermelons. Treatment options include various homemade remedies like mixing baking soda, vegetable oil, and dish soap in water, using neem oil, vinegar, or mouthwash diluted in water, and spraying the affected foliage.<br>
Treatment:
- Mix 1 tablespoon baking soda with 1 tablespoon vegetable oil and 1 teaspoon dish soap in 1 gallon of water.
- Mix 4 tablespoons baking soda with 2 tablespoons of Murphy’s oil soap in 1 gallon of water.
- Mix 2 to 3 tablespoons vinegar with 1 gallon of water. Be sure to test this first because vinegar can burn plants.
- Neem is an organic fungicide. Follow instructions on the label.
- Mix 1 part milk with 10 parts water.
- Some folks swear by mouthwash as an effective fungicide but it is not organic. They recommend 1 cup mouthwash to 3 cups of water.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Anthracnose - Colletotrichum orbiculare:</strong> Anthracnose is a fungal disease that affects watermelons. Effective fungicides for control include those containing chlorothalonil, copper, propiconazole, and thiophanate-methyl.<br>
Treatment: The most effective fungicides for control are the protective fungicides containing chlorothalonil (e.g., Daconil), copper sprays containing copper diammonia diacetate (e.g., Liquicop), propiconazole (e.g., Banner Maxx II), and the systemic fungicide thiophanate-methyl (e.g., Cleary's 3336, for professional use only).<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Alternaria leaf spot - Alternaria cucmerina:</strong> Alternaria leaf spot is a fungal disease that affects watermelons. Control measures include avoiding overhead watering, ensuring good air circulation and sun penetration, and keeping the garden free of fallen leaves.<br>
Treatment: Avoid overhead watering to limit leaf wetness, and allow enough space at planting time for good air circulation and ample sun penetration. Keep your garden free of fallen leaves all season, and especially thorough at fall cleanup time.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Fusarium Wilt - Fusarium oxysporum:</strong>  Fusarium wilt is a fungal disease that affects watermelons. Control is best achieved using resistant or tolerant cultivars and cultural practices like liming soils and using nitrate nitrogen fertilizer.<br>
Treatment: Fusarium wilt diseases are best controlled by using resistant or tolerant cultivars, not by using soil applied fungicides. Liming soils and using nitrate nitrogen fertilizer have been effective for management of F. oxysporum on chrysanthemum, aster, gladiolus, cucumber, tomato, and watermelon.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Bud Necrosis disease - Watermelon bud necrosis orthotospovirus (WBNV):</strong> Bud necrosis disease is caused by a virus that affects watermelons. Integrated Pest Management (IPM) modules have been devised to manage the disease by reducing thrips populations and increasing fruit yield.<br>
Treatment: For the management of WBNV in watermelon, an Integrated Pest Management (IPM) module has been devised which reduced the thrips population and WBNV incidence to a great extent besides increasing the fruit yield.<br>
`;
}

// Guava
function positiveResultGuava(){
document.getElementById("resultguava").style.display = "block";
document.getElementById("resultguava").innerHTML = `
<strong>Guava - Staphylococcus:</strong> Promote the Growth under Adverse Environmental Conditions<br>
`;
}

function negativeResultGuava() {
document.getElementById("resultguava").style.display = "block";
document.getElementById("resultguava").innerHTML = `
<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Anthracnose - Colletotrichum gloeosporioides:</strong> 

Anthracnose is a fungal disease that affects guava trees. Cultural practices like pruning infected branches and removing fallen fruit can help reduce the disease's source. Fungicides can also be applied before the flowering season and regularly during fruit development for better control.<br>
Treatment:
- Cultural Practices: Prune infected branches and remove fallen fruit to reduce the disease's source. Maintain proper spacing between trees to improve air circulation. 
- Fungicides: Apply appropriate fungicides before the flowering season to prevent infection. Regular spraying during fruit development is also effective. For better control Spray.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Guava Wilt - Fusarium oxysporum:</strong> Guava wilt is a disease caused by Fusarium oxysporum that affects guava trees. Control measures include choosing resistant varieties, soil sterilization before planting, fungicidal drenches for severely affected trees, and proper irrigation to avoid overly wet conditions.<br>
Treatment:
- Resistant Varieties: Choose guava varieties resistant to Fusarium wilt. 
- Soil Sterilization: Solarize or steam-sterilize the soil before planting to kill pathogens. 
- Fungicides: Fungicidal drenches may help control the disease in severely affected trees. 
- Proper Irrigation: Ensure adequate but not excessive soil moisture, as overly wet conditions can exacerbate wilt.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Powdery Mildew - Oidium psidii:</strong>  Powdery mildew is a fungal disease that affects guava trees. Pruning affected branches, applying sulfur-based fungicides, and using neem oil can help manage the disease.<br>
Treatment:
- Pruning: Prune affected branches to improve air circulation and sunlight penetration. 
- Sulfur-Based Fungicides: Apply sulfur-based fungicides as a preventive measure. 
- Neem Oil: Neem oil can also be effective in managing powdery mildew.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Bacterial Wilt - Erwinia psidii:</strong>  Bacterial wilt is a disease caused by Erwinia psidii that affects guava trees. Control measures include sanitation by removing infected plants, avoiding overhead irrigation, applying copper-based bactericides, and planting resistant varieties.<br>
Treatment:
- Sanitation: Remove and destroy infected plants promptly. 
- Avoid Overhead Irrigation: Use drip irrigation to prevent splashing of bacteria. 
- Copper-Based Sprays: Apply copper-based bactericides as a preventive measure. 
- Resistant Varieties: Consider planting guava varieties known for their resistance to bacterial wilt.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Rust - Puccinia psidii:</strong>  Rust is a fungal disease that affects guava trees. Control measures include applying copper-based fungicides during the rainy season, pruning infected leaves and branches, and ensuring proper spacing between trees for better air circulation.<br>
Treatment:
- Fungicides: Apply copper-based fungicides during the rainy season to prevent rust. 
- Pruning: Remove and destroy severely infected leaves and branches. 
- Proper Spacing: Ensure adequate spacing between trees for better air circulation.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Root-Knot Nematodes - Meloidogyne spp.:</strong>  Root-knot nematodes are soilborne pests that affect guava trees. Control measures include soil solarization before planting, choosing resistant varieties, and incorporating nematode-resistant cover crops into orchard management.<br>
Treatment:
- Soil Solarization: Solarize the soil before planting guava to reduce nematode populations. 
- Resistant Varieties: Choose guava varieties that are less susceptible to root-knot nematodes. 
- Nematode-Resistant Cover Crops: Incorporate nematode-resistant cover crops into your orchard management plan.
`;
}
// Strawberry
function positiveResultStrawberry(){
document.getElementById("resultstrawberry").style.display = "block";
document.getElementById("resultstrawberry").innerHTML = `
<strong>Strawberry - Alcaligenes:</strong> Prevent diseases<br>
<strong>Strawberry - Bacillus spp.:</strong> Phosphate-Solubilizing<br>
<strong>Strawberry - Pantoea:</strong> Nitrogen fixation<br>
`;
}

function negativeResultStrawberry() {
document.getElementById("resultstrawberry").style.display = "block";
document.getElementById("resultstrawberry").innerHTML = `

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Gray Mold - Botrytis cinerea:</strong> Gray mold is a fungal disease that affects strawberries. Neem oil can be used as a natural fungicide to prevent and treat infections. It should be diluted according to the bottle specifications and sprayed directly on plants.<br>
Treatment: Neem oil is one of the best natural fungicides that can be used preemptively as well as after an infection. Dilute the neem solution per the bottle specifications and spray directly on plants to reduce the chances of a botrytis breakout. Neem is a safe compound from a tropical tree, however it can taste pretty gross, so don’t forget to thoroughly wash your berries.<br><br>


<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Powdery Mildew - Podosphaera aphanis:</strong>  Powdery mildew is a fungal disease that affects strawberries. Homemade baking soda spray and vinegar spray can be effective treatments. The baking soda spray should include a viscous ingredient (oil or soap) to hold the sodium bicarbonate on the leaf surface.<br>
Treatment:
- Homemade Baking Soda Spray: This old-time granny remedy is highly effective as long as it includes a secret viscous ingredient (oil or soap) to hold the sodium bicarbonate on the leaf surface. Mix 1 tablespoon baking soda with 1 teaspoon horticultural oil or liquid soap (I like Dr. Bronners) and 1 gallon of water. Spray on the plants every 1-2 weeks.<br>
- Vinegar Spray: Mix 2-3 tablespoons of apple cider vinegar (about 5% acetic acid) in a gallon of water and spray all over plant surfaces. The acidity kills powdery mildew spores.<br><br>


<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Leaf spot - Mycospharella fragariae:</strong> Leaf spot is a fungal disease that affects strawberries. Fungicide use is not usually warranted for leaf spot unless the spots are joining together and killing off significant numbers of leaves. In such cases, removing plants and renovating the beds may be necessary.<br>
Treatment: Leaf spot is technically “incurable”. Once it’s on your plants, your only goal is to slow the spread. Because this is mostly an aesthetic issue, researchers say that fungicide use isn’t usually warranted. Leaf spot isn’t a huge issue unless you are noticing spots joining together and killing off significant numbers of leaves. At this point, you may want to remove plants and renovate the beds.<br><br>


<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Verticillium Wilt - Verticillium dahliae and V. albo-atrum:</strong> Verticillium wilt is a soilborne disease that affects strawberries. It is not treatable with fungicides or fumigants. Optimizing soil health with compost or establishing new raised beds or containers may help manage the disease.<br>
Treatment: Because verticillium wilt can lie dormant in the soil for many years, it isn’t really a treatable disease. There are no fungicides or fumigants that will eliminate the pathogens. Instead, try to optimize your soil health with plenty of microbially-rich compost, or establish new strawberry raised beds or containers.<br><br>

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Alternaria Fruit Spot - Alternaria alternata:</strong> Alternaria fruit spot is a fungal disease that affects strawberries. Once strawberries are infected, they are not edible. Infected berries should be removed and disposed of, and organic copper fungicides can be used as a last resort.<br>
Treatment: Once alternaria starts attacking your strawberries, they won’t be edible anyways. Remove infected berries and throw them away. Organic copper fungicides are available as a last resort.<br><br>


<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Anthracnose - Colletotrichum sp.:</strong> Anthracnose is a fungal disease that affects strawberries. Control options include copper-based fungicides, but these can build up to toxic levels in the soil. Removing diseased plants and practicing good sanitation measures are important for managing anthracnose.<br>
Treatment: The main control options for anthracnose are copper-based fungicides, however copper can build up to toxic levels in the soil and harm earthworms or soil microbes. The best treatment for anthracnose is removing diseased plants and following the sanitation measures described above.<br>
`;
}

// Mango Ginger
function positiveResultMangoGinger(){
document.getElementById("resultmangoginger").style.display = "block";
document.getElementById("resultmangoginger").innerHTML = `
<strong>Mango Ginger - Bacillus spp.:</strong> Root development, Phosphate-Solubilizing and Prevent diseases<br>
<strong>Mango Ginger - Pseudomonas spp.:</strong> Induce plant growth<br>
<strong>Mango Ginger - Pseudomonas putida:</strong> Tolerated to maximum salt concentration<br>
<strong>Mango Ginger - Azotobacter chroococcum:</strong> Nitrogen fixation<br>
`;
}

function negativeResultMangoGinger() {
document.getElementById("resultmangoginger").style.display = "block";
document.getElementById("resultmangoginger").innerHTML = `

<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Soft rot or rhizome rot - Pythium aphanidermatum/ P. vexans / P. myriotylum:</strong> Soft rot or rhizome rot is a disease caused by Pythium species that affects mango ginger. Treatment includes treating seed rhizomes with mancozeb before storage and planting, selecting well-drained soils, using disease-free seed rhizomes, and removing affected plants and drenching the area with mancozeb to prevent spread.<br>
Treatment:
- Treatment of seed rhizomes with mancozeb 0.3% for 30 minutes before storage and once again before planting reduces the incidence of the disease.
- Cultural practices such as selection of well-drained soils for planting are important for managing the disease, since stagnation of water predisposes the plant to infection.
- Seed rhizomes are to be selected from disease-free gardens, since the disease is also seed-borne.
- Once the disease is located in the field, removal of affected clumps and drenching the affected and surrounding beds with mancozeb 0.3% checks the spread of the disease.<br><br>


<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Bacterial wilt - Ralstonia solanacearum:</strong> Bacterial wilt is a disease caused by Ralstonia solanacearum that affects mango ginger. Control measures include adopting cultural practices for managing soft rot, treating seed rhizomes with streptocycline before planting, and drenching affected beds with Bordeaux mixture or copper oxychloride.<br>
Treatment:
- The cultural practices adopted for managing soft rot are also to be adopted for bacterial wilt.
- The seed rhizomes may be treated with streptocycline 200ppm for 30 minutes and shade dried before planting.
- Once the disease is noticed in the field all beds should be drenched with Bordeaux mixture 1% or copper oxychloride 0.2%.<br><br>


<img src="./Brown or Leaf Rust.jpg" alt="White Clover Mosaic">
<strong>Leaf spot - Phyllosticta zingiberi:</strong> Leaf spot is a disease caused by Phyllosticta zingiberi that affects mango ginger. The disease can be controlled by spraying copper oxychloride or mancozeb.<br>
Treatment: The disease can be controlled by spraying Copper oxychloride 0.25 % or Mancozeb 0.2%.<br>
`;
}

