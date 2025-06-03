const talepler = [
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
   unvan :"Bilgisayar İşletmeni",
    aciklama: "Kadrom Bakanlık Merkez Teşkilat bünyesine bağlı olmakla beraber halihazırda Çankırı Adliyesi Mahkemeler Ön Bürosu ve Veznede görevlendirilmiş bulunmaktayım, Annem ve Babam Ankara yalnız yaşamaktadırlar Babam %65 engellidir Parkinson hastalığı kalp rahatsızlığı gibi bir çok rahatsızlığı vardır annem de aynı şekilde hasta durumdadır Annem ve babam bakıma muhtaç durumda olmaları sebebiyle Tayinimin Ankara Sincan Adliyesine veya kadroma uygun bir yere verilmesi hususunda gereğini arz ederim.Saygılarımla .",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  }, 
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  },
    {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  },
   {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
     unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "Olumsuz"
  },
   {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  },
   {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
   unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  },
  
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  },
 
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "Olumsuz"
  },
  
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  },
 
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "olumlu"
  },
 
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "Olumsuz"
  },
 
  {
    adSoyad: "Fırat Yeşilova",
    sicil: "20231234",
    tc: "12345678901",
    unvan :"Bilgisayar İşletmeni",
    aciklama: "Yer değişikliği talebim bulunmaktadır. Lütfen işleme alın.",
    talepTarihi: "2024-12-01",
    sonucTarihi: "2025-01-15",
    sonuc: "Olumsuz"
  },
 
];

const tablo = document.getElementById("talepTablo");
talepler.forEach((talep, i) => {
  const aciklamaKisa = talep.aciklama.length > 10
    ? talep.aciklama.slice(0, 10) + "..."
    : talep.aciklama;

  const sonucRenk = talep.sonuc === "olumlu" ? "bg-success" : "bg-danger";
  const sonucYazi = talep.sonuc === "olumlu"
    ? "Talebiniz Olumlu Sonuçlanmıştır"
    : "Talebiniz Olumsuz Sonuçlanmıştır";

  const row = `
    <tr>
      <td>${talep.adSoyad}</td>
      <td>${talep.sicil}</td>
      <td>${talep.tc}</td>
      <td>${talep.unvan}</td>
      <td><span class="aciklama" onclick="alert('${talep.aciklama.replaceAll("'", "\'")}')">${aciklamaKisa}</span></td>
      <td>${talep.talepTarihi}</td>
      <td>${talep.sonucTarihi}</td>
      <td><span class="badge ${sonucRenk} rounded-pill text-white px-3 py-2">${sonucYazi}</span></td>
    </tr>
  `;
  tablo.innerHTML += row;
});
