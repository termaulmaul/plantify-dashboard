async function updateStatus() {
    // Contoh data statis untuk simulasi
    const soilData = { status: Math.random() > 0.5 ? "Tanah Basah" : "Tanah Kering" };
  
    const statusElement = document.getElementById("status");
  
    if (soilData.status === "Tanah Basah") {
      statusElement.textContent = "Tanah Basah";
      statusElement.className = "status-wet";
    } else if (soilData.status === "Tanah Kering") {
      statusElement.textContent = "Tanah Kering";
      statusElement.className = "status-dry";
    }
  }
  
  // Simulasi pembaruan setiap 1 detik
  setInterval(updateStatus, 1000);
  