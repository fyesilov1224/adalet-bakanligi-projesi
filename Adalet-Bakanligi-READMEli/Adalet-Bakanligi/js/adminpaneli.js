document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.getElementById("adminTableBody");

  const veri = [
    {
      resim: "../img/indir.jfif",
      adSoyad: "Ayşe Demir",
      sicil: "789456",
      basvuruTarihi: "2025-05-28",
      bulunduIl: "İstanbul",
      bulunduIlce: "Üsküdar",
      basvuruIl: "Ankara",
      basvuruIlce: "Keçiören",
      unvan: "Mübaşir",
      hizmet: "6 yıl",
      kadro: "10/2",
      aciklama: "Eş durumu nedeniyle Ankara'ya geçiş yapmak istiyorum.",
      dilekce: "#"
    },
    {
       resim: "../img/indir.jfif",
      adSoyad: "Mehmet Kaya",
      sicil: "654321",
      basvuruTarihi: "2025-05-29",
      bulunduIl: "İzmir",
      bulunduIlce: "Konak",
      basvuruIl: "Ankara",
      basvuruIlce: "Yenimahalle",
      unvan: "Yazı İşleri Müdürü",
      hizmet: "12 yıl",
      kadro: "7/1",
      aciklama: "Çocuğumun eğitimi için tayin talep ediyorum.",
      dilekce: "#"
    },
    {
      resim: "../img/avatar3.png",
      adSoyad: "Fırat Yeşilova",
      sicil: "123456",
      basvuruTarihi: "2025-05-30",
      bulunduIl: "Çankırı",
      bulunduIlce: "Merkez",
      basvuruIl: "Ankara",
      basvuruIlce: "Çankaya",
      unvan: "Zabıt Katibi",
      hizmet: "8 yıl",
      kadro: "9/1",
      aciklama: "Ailevi nedenlerden dolayı Ankara'ya tayin talep ediyorum.",
      dilekce: "#"
    }
  ];

  veri.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${item.resim}" style="width:30px; height:30px; border-radius:50%;" /></td>
      <td>${item.adSoyad}</td>
      <td>${item.sicil}</td>
      <td>${item.basvuruTarihi}</td>
      <td>${item.bulunduIl}</td>
      <td>${item.bulunduIlce}</td>
      <td>${item.basvuruIl}</td>
      <td>${item.basvuruIlce}</td>
      <td>${item.unvan}</td>
      <td>${item.hizmet}</td>
      <td>${item.kadro}</td>
      <td><span style="color:red; cursor:pointer;" onclick="gosterAciklama('${item.aciklama}')">Açıklama...</span></td>
      <td><a href="${item.dilekce}" style="color:red;" onclick="gosterDilekce()">Dilekçe</a></td>
      <td>
        <select>
          <option>Red Sebebi Seçin</option>
          <option>Eksik Evrak</option>
          <option>Uygun Görülmedi</option>
        </select><br/>
        <button class="btn-red">Reddet</button>
        <button class="btn-yellow">Beklemede</button>
        <button class="btn-green">Onayla</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
});

function gosterAciklama(metin) {
  document.getElementById("aciklamaIcerik").innerText = metin;
  document.getElementById("aciklamaModal").style.display = "block";
}

function kapatModal() {
  document.getElementById("aciklamaModal").style.display = "none";
}

function gosterDilekce() {
  document.getElementById("dilekceModal").style.display = "block";
}

function kapatDilekce() {
  document.getElementById("dilekceModal").style.display = "none";
}
