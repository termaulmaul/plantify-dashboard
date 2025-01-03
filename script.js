async function updateStatus() {
    try {
      // Memanggil API untuk mendapatkan status tanah
      const response = await fetch('https://termaulmaul.github.io/plantify-dashboard/api/soil/status');
      
      // Periksa apakah respon API berhasil
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const soilData = await response.json(); // Parse JSON dari respons API
      
      const statusElement = document.getElementById("status");
  
      // Perbarui status berdasarkan data API
      if (soilData.status === "Tanah Basah") {
        statusElement.textContent = "Tanah Basah";
        statusElement.className = "status-wet";
      } else if (soilData.status === "Tanah Kering") {
        statusElement.textContent = "Tanah Kering";
        statusElement.className = "status-dry";
      } else {
        statusElement.textContent = "Status Tidak Diketahui";
        statusElement.className = "";
      }
    } catch (error) {
      console.error('Error fetching soil status:', error);
  
      const statusElement = document.getElementById("status");
      statusElement.textContent = "Gagal mengambil data";
      statusElement.className = "";
    }
  }
  
  // Perbarui status setiap 1 detik
  setInterval(updateStatus, 1000);
  