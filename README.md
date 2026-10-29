# Furkan Çakıcı — Kişisel Portfolyo Web Sitesi (v2.0 Architectural Edition)

> **Tasarım Referansı:** [christendijoux.com](https://christendijoux.com/) & [yeahright.co](https://yeahright.co/)  
> **Konsept:** Awwwards / Editorial Brutalist, Mimari Kılavuz Çizgileri, Monospace Telemetri ve Devasa Tipografi (`Big Shoulders Display` + `Geist Mono` + `Inter`).

---

## 🏛️ Tasarım ve Mimari Karakteristikleri

- **Christen Dijoux İmzası Detaylar:**
  - **Shell Intro Loader (000 -> 100):** Sayfa açılırken dijital sayaç ve mimari yükleme çubuğu.
  - **Canlı Sistem Telemetrisi:** Gerçek zamanlı çalışan Eskişehir saati (`GMT+3`), koordinatlar (`39.77°N • 30.52°E`) ve sistem çalışma durumu (`STATUS: OPEN FOR ROLES`).
  - **Etkileşimli 3D Dither Küre:** Canvas üzerinde çalışan dithered halftone küre animasyonu.
  - **Joy Division / Pulsar Mountain Wireframe Footer:** Sayfa altında fare hareketine duyarlı 36 katmanlı interaktif arazi canvas'ı.
  - **Kinetik Tipografi Wave:** Fare ile üzerine gelindiğinde harflerin ağırlığının dinamik değiştiği (`wght@300..900`) heykelsi `FURKAN ÇAKICI` footer ismi.
  - **Mimari Grid & Crosshair (`+`) İşaretleri:** 1px ince hairline kılavuz çizgileri ve teknik köşe işaretleri.
  - **[ Journey ] Amasya → Eskişehir Rotası:** Lisans eğitiminden sektöre geçiş bandı.

- **CV ve İçerik:**
  - **01. Manifesto / About:** Bütüncül sistem bakış açısı, algoritmik düşünce disiplini ve 4 mimari sütun (*Backend & Systems*, *Game Dev & AI*, *Infrastructure & Network*, *Applied AI & Automation*).
  - **02. Featured Works:** TÜBİTAK 2209-A destekli *Echo of Fury* Souls-like Boss NPC AI, *BT Destek Karar Otomasyonu*, *Çok Platformlu Stok Takip*, *Lisans Otomasyonu* ve *Algoritma & CI/CD*. Her projede canlı kod kutusu ve detaylı mimari inceleme modalı.
  - **03. Professional Experience:** BİEN YAPI ÜRÜNLERİ ve İSTİKAMET DÖKÜM A.Ş. stajlarının tüm teknik sorumluluklarını içeren endüstriyel spec kartları.
  - **04. Technical Stack:** 6 kategoride seviye etiketli mimari kabiliyet matrisi.
  - **05. Academic & Credentials:** Amasya Üniversitesi (2.89 GNO), Google DSC Başkan Yardımcılığı, Yeşilay Yönetim Kurulu, IEEE, TÜBİTAK Başarısı ve 4 uluslararası sertifika.
  - **06. Contact & Terminal:** Tek tıkla kopyalama, doğrudan kanallar ve terminal form konsolu.

---

## 📁 Proje Dosya Yapısı

```
deneme/
│
├── index.html                   # Semantik HTML5 mimari yapısı
├── style.css                    # Özel mimari CSS tokenları, hairline çizgiler, Big Shoulders Display
├── script.js                    # Shell loader, canvas animasyonları, filtre ve modallar
├── favicon.svg                  # Monogram vektör ikon
├── .gitignore                   # Git hariç tutma kuralları
├── README.md                    # Proje dokümantasyonu
```

---

## 🌐 Dağıtım & Yayınlama (Deploy)

1. **GitHub Pages:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete editorial brutalist portfolio"
   git branch -M main
   git remote add origin https://github.com/furkancakici/portfolio.git
   git push -u origin main
   ```
2. **Vercel / Netlify:** Bu klasörü doğrudan sürükleyip bırakarak ("Drag & Drop") veya repoyu bağlayarak saniyeler içinde yayına alabilirsiniz.
3. **Özel Alan Adı:** `portfoliofurkancakici.site` alan adını GitHub Pages ayarlarından Custom Domain olarak bağlayabilirsiniz.
