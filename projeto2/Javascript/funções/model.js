// Static data for phone models
const phoneModels = {
    apple: ["iPhone","iPhone 3GS","iPhone 4",
    "iPhone 4S","iPhone 5","iPhone 5S","iPhone 5C",
    "iPhone 6","iPhone 6 Plus","iPhone 6S","iPhone 6S Plus",
    "iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus",
    "iPhone X","iPhone XR","iPhone XS","iPhone XS Max",
    "iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max", 
    "iPhone 12 Mini","iPhone 12","iPhone 12 Pro","iPhone 12 Pro Max", 
    "iPhone 13 Mini","iPhone 13", "iPhone 13 Pro","iPhone 13 Pro max", 
    "iPhone 14", "iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max", 
    "iPhone 15", "iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max", 
    "iPhone SE 2020","iPhone SE 2022"],
    samsung: ["Galaxy S21", "Galaxy Note 20", "Galaxy A51"],
    motorola: ["Moto G Power", "Moto E", "Razr"],
    huawei: ["P40 Pro", "Mate 30", "Nova 7i"],
    xiaomi: ["Mi 11", "Redmi Note 10", "POCO X3"],
    asus: ["Zenfone 8", "ROG Phone 5", "Zenfone Max Pro M2"],
    nokia: ["Nokia 8.3", "Nokia 5.4", "Nokia 2.4"]
};

// Function to update the model options based on the selected brand
function updateModels() {
    const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");

    // Clear existing options
    modelSelect.innerHTML = "";

    // Get selected brand
    const selectedBrand = brandSelect.value;

    // Add options based on the selected brand
    phoneModels[selectedBrand].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

// Attach the updateModels function to the change event of the brand select
document.getElementById("brand").addEventListener("change", updateModels);

// Initial update to populate models based on the default selected brand
updateModels();
