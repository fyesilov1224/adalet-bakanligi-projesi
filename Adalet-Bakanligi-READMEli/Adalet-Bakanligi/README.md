
# Adalet Bakanlığı Personel Talep ve Takip Sistemi

Bu proje, Adalet Bakanlığı personellerinin tayin taleplerini oluşturabildiği ve yöneticilerin bu talepleri yönetebildiği bir **web tabanlı yönetim sistemi**dir.

---

## 🚀 Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|----------|----------|
| **HTML5** | Sayfa yapısı ve içerik oluşturma |
| **CSS3**  | Sayfa stilleri, responsive yapı, tema renkleri |
| **JavaScript** | Form işlemleri, dinamik veri yönetimi, modal pencereler |
| **JSON** | İl ve ilçe verilerinin yönetimi |
| **Bootstrap 5** | Butonlar, grid yapılar ve responsive yapı |
| **Yerel Depolama (LocalStorage)** | Formdan gelen verilerin geçici saklanması |

---

## 📁 Proje Klasör Yapısı

```
Adalet-Bakanligi/
├── css/              → Tüm stil dosyaları (adminpaneli.css vb.)
├── html/             → Ana HTML sayfaları
├── js/               → JavaScript dosyaları (form, admin panel vb.)
├── json/             → İl/ilçe verilerini içeren JSON dosyaları
└── img/              → Profil resimleri (kullanıcı ikonları)
```

---

## 🔧 Sayfa Özellikleri

### 1. `adminpaneli.html`
- Kırmızı-beyaz hover efektli yönetici paneli
- 30x30 px yuvarlak kullanıcı resmi
- Açıklama kısmı tıklanınca modal olarak görüntülenir
- Dilekçeler bağlantı üzerinden görüntülenir
- Reddet (açılır sebep listeli), Beklemede ve Onayla butonları


### 2. `yenitalep.html`
- Kullanıcının tayin başvurusu oluşturduğu form
- Ad Soyad, Sicil No, GSM, Tayin İli/İlçesi vb. bilgileri içerir

### 3. `eskitalep.html`
- Reddedilen taleplerin geçmiş kayıtlarını içerir
- LocalStorage kullanılarak admin panelinden aktarılan veriler görüntülenir

---

## 📸 Görseller ve Modal Pencereler
- Açıklamalar kırmızı "..." ile gösterilir, üzerine tıklanınca detay çıkar
- Dilekçeler PDF olarak açılabilir
- Resimler: `img/indir.jfif`, `img/avatar3.png` gibi yerel kaynaklardan yüklenir

---

## 📦 Gelecek Geliştirmeler (Opsiyonel)
- Gerçek veritabanı bağlantısı (MySQL, MongoDB vs.)
- Admin onay durumu filtreleme / sıralama
- PDF çıktısı alma ve yazdırma
- Kullanıcı doğrulama / login paneli
- Veri tabanına JSON yerine AJAX ile veri gönderimi

---

## 👨‍💼 Geliştirici
**Fırat Yeşilova**  


