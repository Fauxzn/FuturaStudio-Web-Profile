import './input.css';
console.log('Company Profile loaded.');
function loadPartial(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Gagal load ${file} - status ${res.status}`);
      }
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      console.log(`${file} berhasil dimuat.`);
    })
    .catch(err => console.error("Error:", err));
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  console.log("Footer element:", footer);

  if (footer) {
    fetch('/src/components/footer.html')
      .then((res) => {
        console.log("Fetch status:", res.status);
        return res.text();
      })
      .then((html) => {
        footer.innerHTML = html;
        console.log("Footer loaded successfully");
      })
      .catch(err => console.error('Gagal load footer:', err));
  } else {
    console.warn("Elemen #footer tidak ditemukan di halaman");
  }
});

