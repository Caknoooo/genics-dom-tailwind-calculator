// Ambil elemen-elemen yang diperlukan dari DOM
const resultInput = document.getElementById('resultInput');

// Fungsi untuk menambahkan karakter ke input
function appendToInput(character) {
  resultInput.value += character;
}

// Fungsi untuk menghitung hasil
function calculateResult() {
  try {
    const result = eval(resultInput.value);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}

// Fungsi untuk menghapus input
function clearInput() {
  resultInput.value = '';
}
