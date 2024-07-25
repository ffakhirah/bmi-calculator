// Import modul readline
const readline = require("readline");

// Membuat interface readline
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Membuat fungsi untuk kalkulator BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Membuat klasifikasi BMI berdasarkan hasil kalkulasi
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Berat badan kurang";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Berat badan berlebih (kecenderungan obesitas)";
    } else if (bmi >= 30 && bmi < 34.9) {
        return "Obesitas kelas I";
    } else if (bmi >= 35 && bmi < 39.9) {
        return "Obesitas kelas II";
    } else {
        return "Obesitas kelas III";
    }
}

// Tampilan input dan output pada terminal
readlineInterface.question("Masukkan berat kamu (kg): ", (weightInput) => {
    const weight = parseFloat(weightInput);
    
    readlineInterface.question("Masukkan tinggi kamu (cm): ", (heightInput) => {
        const height = parseFloat(heightInput) / 100; // Konfersi dari cm -> m
        
        if (weight > 0 && height > 0) {
            const bmi = calculateBMI(weight, height);
            const category = getBMICategory(bmi);
            
            console.log(`Indeks Massa Tubuh (BMI) kamu adalah ${bmi.toFixed(2)}`);
            console.log(`Kamu termasuk dalam kategori ${category}`);
        } else {
            console.log("Masukkan data berat dan tinggi yang valid");
        }

        // Selesai
        readlineInterface.close();
    });
});