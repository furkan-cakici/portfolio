

document.addEventListener('DOMContentLoaded', () => {

    const shellLoader = document.getElementById('shellLoader');
    const shellCount = document.getElementById('shellCount');
    const shellBarFill = document.getElementById('shellBarFill');
    const shellStatus = document.getElementById('shellStatus');

    let count = 0;
    const loaderInterval = setInterval(() => {
        count += Math.floor(Math.random() * 8) + 3;
        if (count >= 100) {
            count = 100;
            clearInterval(loaderInterval);

            if (shellCount) shellCount.textContent = '100';
            if (shellBarFill) shellBarFill.style.width = '100%';
            if (shellStatus) shellStatus.textContent = 'PORTFOLYO HAZIR // HOŞ GELDİNİZ';

            setTimeout(() => {
                shellLoader?.classList.add('loaded');
                document.body.classList.add('page-ready');
            }, 450);
        } else {
            const formatted = count < 10 ? `00${count}` : count < 100 ? `0${count}` : `${count}`;
            if (shellCount) shellCount.textContent = formatted;
            if (shellBarFill) shellBarFill.style.width = `${count}%`;

            if (count > 40 && count < 80 && shellStatus) {
                shellStatus.textContent = 'İÇERİK YÜKLENİYOR...';
            }
        }
    }, 40);

    window.addEventListener('keydown', (e) => {
        if ((e.code === 'Space' || e.code === 'Escape') && !shellLoader?.classList.contains('loaded')) {
            clearInterval(loaderInterval);
            if (shellCount) shellCount.textContent = '100';
            if (shellBarFill) shellBarFill.style.width = '100%';
            shellLoader?.classList.add('loaded');
        }
    });

    const liveClock = document.getElementById('liveClock');
    const heroLiveClock = document.getElementById('heroLiveClock');

    function updateClock() {
        const now = new Date();
        const options = {
            timeZone: 'Europe/Istanbul',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const timeString = new Intl.DateTimeFormat('tr-TR', options).format(now);
        if (liveClock) liveClock.textContent = timeString;

        if (heroLiveClock) {
            const shortOptions = {
                timeZone: 'Europe/Istanbul',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            heroLiveClock.textContent = new Intl.DateTimeFormat('tr-TR', shortOptions).format(now);
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

    const typewriterTarget = document.getElementById('typewriterTarget');
    const typewriterPhrases = [
        "C# & ASP.NET Core ile Modern Backend Geliştirme",
        "Unreal Engine 5 & TÜBİTAK Destekli Oyun Yapay Zekası",
        "Algoritmik Düşünme & Temiz Kod (Clean Code) Disiplini",
        "Kurumsal Staj Deneyimleri: Bien Yapı & İstikamet Döküm",
        "Sürekli Öğrenme, Gelişim ve Mühendislik Tutkusu"
    ];

    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeletingPhrase = false;
    let typingSpeed = 70;

    function typewriterTick() {
        if (!typewriterTarget) return;

        const currentPhrase = typewriterPhrases[phraseIndex];

        if (isDeletingPhrase) {
            typewriterTarget.textContent = currentPhrase.substring(0, letterIndex - 1);
            letterIndex--;
            typingSpeed = 35;
        } else {
            typewriterTarget.textContent = currentPhrase.substring(0, letterIndex + 1);
            letterIndex++;
            typingSpeed = 70;
        }

        if (!isDeletingPhrase && letterIndex === currentPhrase.length) {
            typingSpeed = 2200; 
            isDeletingPhrase = true;
        } else if (isDeletingPhrase && letterIndex === 0) {
            isDeletingPhrase = false;
            phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
            typingSpeed = 400;
        }

        setTimeout(typewriterTick, typingSpeed);
    }

    typewriterTick();

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.desktop-menu .nav-item');
    const overlayLinks = document.querySelectorAll('.overlay-link');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                
                const headerHeight = 56;
                const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (window.history && window.history.pushState) {
                    window.history.pushState(null, null, targetId);
                }
            }
        });
    });

    function onScrollSpy() {
        const scrollPosition = window.scrollY + 80;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });

                overlayLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScrollSpy, { passive: true });

    const backToTopBtn = document.getElementById('backToTopBtn');
    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
    const mobileOverlayMenu = document.getElementById('mobileOverlayMenu');
    const overlayClose = document.getElementById('overlayClose');
    const overlayBackdrop = document.getElementById('overlayBackdrop');

    function openMobileMenu() {
        mobileOverlayMenu?.classList.add('open');
        mobileOverlayMenu?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileOverlayMenu?.classList.remove('open');
        mobileOverlayMenu?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    mobileMenuTrigger?.addEventListener('click', openMobileMenu);
    overlayClose?.addEventListener('click', closeMobileMenu);
    overlayBackdrop?.addEventListener('click', closeMobileMenu);

    overlayLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    const filterTabs = document.querySelectorAll('.filter-tab-btn');
    const projectItems = document.querySelectorAll('.project-arch-item');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            projectItems.forEach(item => {
                const itemCat = item.getAttribute('data-cat');
                if (filterValue === 'all' || itemCat === filterValue) {
                    item.classList.remove('is-filtered-out');
                    item.style.display = 'block';
                } else {
                    item.classList.add('is-filtered-out');
                    item.style.display = 'none';
                }
            });
        });
    });

    const projectDetailsData = {
        'echo-of-fury': {
            specNum: "PROJE_01 // TÜBİTAK 2209-A",
            title: "Echo of Fury: Souls-like Boss NPC AI",
            domain: "ARAŞTIRMA & OYUN YAPAY ZEKASI // UNREAL ENGINE 5",
            date: "14.04.2025 – 14.04.2026",
            description: "Echo of Fury, 2 kişilik bir ekiple 3 aylık yoğun bir geliştirme sürecinde üretilen ve TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Programı kapsamında resmi olarak desteklenen yeni nesil aksiyon oyunu prototipidir.",
            deliverables: [
                "<strong>Kural Tabanlı Boss NPC Yapay Zekası:</strong> Oyuncunun Öklid mesafesi ve açısal konumunu (açı & oryantasyon) gerçek zamanlı analiz ederek 9 farklı saldırı deseni arasından dinamik seçim yapan durum makinesi mimarisi.",
                "<strong>Niagara Effect System:</strong> Boss savaşları için alan etkili (AOE) karanlık büyü ve patlama parçacık simülasyonları.",
                "<strong>Modüler UE5 Entegrasyonu:</strong> C++ ve Blueprint hibrit yapısıyla kusursuz oyuncu-düşman etkileşimi, vuruş tepkileri ve gelişmiş animasyon montajları.",
                "<strong>TÜBİTAK Süreci:</strong> 14.04.2025 – 14.04.2026 tarihleri arasında araştırma kapsamı sürdürülmektedir."
            ],
            tech: ["Unreal Engine 5", "C++", "Blueprints", "Niagara VFX", "State Machines", "Motion Warping", "AI Perception"],
            repoUrl: "https://github.com/furkan-cakici"
        },
        'bt-destek': {
            specNum: "PROJE_02 // KURUMSAL YAPAY ZEKA",
            title: "BT Destek Karar ve E-posta Otomasyon Paneli",
            domain: "DOĞAL DİL İŞLEME & LLM // KARAR OTOMASYON MOTORU",
            date: "2024 // İSTİKAMET DÖKÜM A.Ş.",
            description: "İstikamet Döküm A.Ş. stajı sırasında kurumsal BT operasyonlarının yükünü azaltmak amacıyla geliştirilen yapay zeka destekli teknik arıza karar motoru.",
            deliverables: [
                "<strong>Google Gemini LLM REST API:</strong> Gelen arıza e-postalarını semantik olarak analiz edip donanım, ağ veya sistem arızası olarak sınıflandırır.",
                "<strong>Kural Tabanlı Yerel NLP Motoru:</strong> Kurum içi standart arıza prosedürlerini süzerek çözüm önerileri üretir.",
                "<strong>MailKit & MimeKit Entegrasyonu:</strong> Gmail IMAP üzerinden gelen biletleri otomatik okur, SMTP ile son kullanıcı yanıt taslakları oluşturur.",
                "<strong>ASP.NET Core REST API:</strong> Güvenli yetkilendirme ve yüksek hızlı yanıt mimarisi."
            ],
            tech: ["ASP.NET Core", "C#", "Google Gemini REST API", "MailKit", "MimeKit", "REST API", "Doğal Dil İşleme (NLP)"],
            repoUrl: "https://github.com/furkan-cakici"
        },
        'stok-takip': {
            specNum: "PROJE_03 // GERÇEK ZAMANLI SENKRONİZASYON",
            title: "Uçtan Uca Çok Platformlu Stok Takip Sistemi",
            domain: "FULLSTACK // WEB & ANDROİD SENKRONİZASYONU",
            date: "2024 // ENDÜSTRİYEL UYGULAMA",
            description: "Web ve Android platformlarında eşzamanlı olarak çalışan, fabrika depo personeli ile ofis yönetimi arasında anlık stok hareketlerini senkronize eden kurumsal bulut sistemi.",
            deliverables: [
                "<strong>Çoklu Platform Mimarisi:</strong> Web tarafında React.js, Android mobil tarafta Kotlin ile iki bağımsız istemci tek bir bulut veritabanını tüketir.",
                "<strong>Firebase Firestore NoSQL:</strong> Depoda yapılan stok güncellemeleri ofis paneline sıfır gecikmeyle (real-time listener) yansır.",
                "<strong>Kritik Stok Kontrolü:</strong> Belirlenen eşik değerlerin altına düşen hammaddeler için anlık görsel bildirimler.",
                "<strong>Modern Arayüz:</strong> Duyarlı, hızlı ve hatasız kullanıcı deneyimi."
            ],
            tech: ["React.js", "Kotlin (Android)", "Firebase Firestore", "NoSQL", "Bulut Senkronizasyonu"],
            repoUrl: "https://github.com/furkan-cakici"
        },
        'lisans-otomasyon': {
            specNum: "PROJE_04 // KURUMSAL WEB SİSTEMİ",
            title: "Kurumsal Lisans Takip Otomasyonu",
            domain: "WEB SİSTEMLERİ // ARKA PLAN SERVİSLERİ",
            date: "2024 // İSTİKAMET DÖKÜM A.Ş.",
            description: "Şirket içi yazılım ve donanım lisanslarının sürelerini takip eden, süresi yaklaşan lisanslar için otomatik uyarı mekanizmaları çalıştıran kurumsal web otomasyonu.",
            deliverables: [
                "<strong>ASP.NET Core MVC & EF Core:</strong> MSSQL üzerinde sağlam ilişkisel veritabanı tasarımı ve CRUD optimizasyonları.",
                "<strong>Background Service (Arka Plan Görevleri):</strong> Sunucu arkasında periyodik çalışan lisans süresi kontrol algoritması.",
                "<strong>Otomatik SMTP E-posta Bildirimleri:</strong> Vadesine 30, 15 ve 3 gün kalan lisanslar için ilgili departman yöneticilerine anlık e-postalar.",
                "<strong>Dinamik Takvim Arayüzü:</strong> Tüm lisans takviminin görsel olarak izlenebilmesi."
            ],
            tech: ["ASP.NET Core MVC", "Entity Framework Core", "MSSQL", "Background Services", "SMTP"],
            repoUrl: "https://github.com/furkan-cakici"
        },
        'algoritma': {
            specNum: "PROJE_05 // ALGORİTMALAR & CI/CD",
            title: "Algoritma Optimizasyonu & GitHub Actions CI/CD",
            domain: "VERİ YAPILARI // SÜREKLİ ENTEGRASYON İŞ AKIŞLARI",
            date: "2024 - 2026 // AÇIK KAYNAK",
            description: "C++ ile LeetCode algoritma optimizasyonları ve GitHub Actions boru hatları ile metriklerin otomatik analiz edilerek profil panosuna dinamik yansıtılması.",
            deliverables: [
                "<strong>C++ & Algoritmalar:</strong> Ağaçlar, grafikler, dinamik programlama ve dizi algoritmalarında bellek ve zaman optimizasyonları.",
                "<strong>GitHub Actions CI/CD:</strong> Yapılan her çözüm ve commit'in otomatik olarak test edilip profil istatistiklerine işlenmesi.",
                "<strong>Python Betikleri:</strong> Veri işleme ve istatistik raporlama otomasyonları."
            ],
            tech: ["C++", "Python", "GitHub Actions", "CI/CD", "LeetCode", "Veri Yapıları"],
            repoUrl: "https://github.com/furkan-cakici"
        }
    };

    const projectModal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalCloseTrigger = document.getElementById('modalCloseTrigger');
    const modalScrim = document.getElementById('modalScrim');
    const openModalBtns = document.querySelectorAll('.open-project-modal');

    function openProjectModal(key) {
        const item = projectDetailsData[key];
        if (!item || !modalContent) return;

        modalContent.innerHTML = `
            <div style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--color-accent); margin-bottom: 8px;">
                ${item.specNum} // ${item.date}
            </div>
            <h3 style="font-family: var(--font-heading); font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 800; text-transform: uppercase; color: var(--color-chalk); line-height: 1; margin-bottom: 12px;">
                ${item.title}
            </h3>
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-muted); margin-bottom: 20px;">
                ALAN: ${item.domain}
            </div>
            <p style="font-size: 1rem; color: var(--color-chalk); line-height: 1.65; margin-bottom: 24px; padding-bottom: 18px; border-bottom: 1px solid var(--color-line);">
                ${item.description}
            </p>

            <div style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; color: var(--color-accent); margin-bottom: 12px;">
                [ ÖNE ÇIKAN MİMARİ ÖZELLİKLER & ÇÖZÜMLER ]
            </div>
            <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 26px;">
                ${item.deliverables.map(d => `
                    <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--color-chalk); line-height: 1.55;">
                        <span style="color: var(--color-accent); font-family: var(--font-mono);">→</span>
                        <div>${d}</div>
                    </li>
                `).join('')}
            </ul>

            <div style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; color: var(--color-accent); margin-bottom: 10px;">
                [ KULLANILAN TEKNOLOJİLER ]
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 28px;">
                ${item.tech.map(t => `
                    <span style="font-family: var(--font-mono); font-size: 10px; padding: 4px 10px; border: 1px solid var(--color-line); color: var(--color-chalk); background: rgba(255, 255, 255,0.04);">
                        ${t}
                    </span>
                `).join('')}
            </div>

            <div style="display: flex; gap: 12px; padding-top: 18px; border-top: 1px solid var(--color-line);">
                <a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-arch btn-accent">
                    GITHUB DEPOSU <i class="fa-brands fa-github"></i>
                </a>
                <button class="btn-arch" onclick="document.getElementById('modalCloseTrigger').click()">
                    KAPAT [ESC]
                </button>
            </div>
        `;

        projectModal?.classList.add('active');
        projectModal?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        projectModal?.classList.remove('active');
        projectModal?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectKey = btn.getAttribute('data-project');
            if (projectKey) openProjectModal(projectKey);
        });
    });

    modalCloseTrigger?.addEventListener('click', closeProjectModal);
    modalScrim?.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeMobileMenu();
        }
    });

    const copyButtons = document.querySelectorAll('.btn-copy-channel');
    const toastNotification = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMsg');
    let toastTimer = null;

    function triggerToast(text) {
        if (!toastNotification || !toastMsg) return;
        toastMsg.textContent = text;
        toastNotification.classList.add('show');

        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toastNotification.classList.remove('show');
        }, 2800);
    }

    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                triggerToast(`PANOYA KOPYALANDI: ${textToCopy}`);
            }).catch(() => {
                triggerToast(`KOPYALANDI: ${textToCopy}`);
            });
        });
    });

    const contactForm = document.getElementById('contactForm');
    const formSubmitBtn = document.getElementById('formSubmitBtn');
    const formStatus = document.getElementById('formStatus');

    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('formName')?.value.trim();
        const email = document.getElementById('formEmail')?.value.trim();
        const subject = document.getElementById('formSubject')?.value.trim();
        const message = document.getElementById('formMessage')?.value.trim();

        if (!name || !email || !subject || !message) {
            if (formStatus) {
                formStatus.className = 'form-status-msg error';
                formStatus.textContent = '[ HATA: LÜTFEN TÜM ZORUNLU ALANLARI DOLDURUNUZ ]';
            }
            return;
        }

        if (formSubmitBtn) {
            formSubmitBtn.disabled = true;
            formSubmitBtn.innerHTML = `İLETİLİYOR... <i class="fa-solid fa-spinner fa-spin"></i>`;
        }

        setTimeout(() => {
            const mailtoUrl = `mailto:info.furkancakici.tr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Gönderen: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`)}`;

            if (formStatus) {
                formStatus.className = 'form-status-msg success';
                formStatus.textContent = '[ İLETİM HAZIR: E-POSTA İSTEMCİNİZ AÇILIYOR ]';
            }

            triggerToast('İLETİŞİM HAZIRLANDI — E-POSTA AÇILIYOR');

            window.location.href = mailtoUrl;
            contactForm.reset();

            if (formSubmitBtn) {
                formSubmitBtn.disabled = false;
                formSubmitBtn.innerHTML = `MESAJI İLET [GÖNDER] <i class="fa-solid fa-paper-plane"></i>`;
            }
        }, 600);
    });

    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    const customCursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    const cursorLabel = document.getElementById('cursorLabel');

    if (customCursor && cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = -100, mouseY = -100;
        let ringX = -100, ringY = -100;
        let isCursorActive = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isCursorActive) {
                isCursorActive = true;
                customCursor.classList.add('active');
                ringX = mouseX;
                ringY = mouseY;
            }

            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        window.addEventListener('mouseleave', () => {
            isCursorActive = false;
            customCursor.classList.remove('active');
        });

        window.addEventListener('mouseenter', () => {
            isCursorActive = true;
            customCursor.classList.add('active');
        });

        window.addEventListener('mousedown', () => {
            customCursor.classList.add('is-clicking');
        });

        window.addEventListener('mouseup', () => {
            customCursor.classList.remove('is-clicking');
        });

        const interactiveElements = document.querySelectorAll('a, button, .filter-tab-btn, .btn-arch, .nav-item, input, textarea, .m-char');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.classList.add('is-hovering');
            });
            el.addEventListener('mouseleave', () => {
                customCursor.classList.remove('is-hovering');
            });
        });

        const projectCardElements = document.querySelectorAll('.project-arch-item, .open-project-modal');
        projectCardElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.classList.add('is-card-hover');
                if (cursorLabel) cursorLabel.textContent = 'İNCELE';
            });
            el.addEventListener('mouseleave', () => {
                customCursor.classList.remove('is-card-hover');
                if (cursorLabel) cursorLabel.textContent = '';
            });
        });

        const renderCursorLoop = () => {
            if (isCursorActive) {
                ringX += (mouseX - ringX) * 0.18;
                ringY += (mouseY - ringY) * 0.18;

                cursorRing.style.left = `${ringX}px`;
                cursorRing.style.top = `${ringY}px`;
            }
            requestAnimationFrame(renderCursorLoop);
        };
        requestAnimationFrame(renderCursorLoop);
    }

    const ditherCanvas = document.getElementById('ditherSphereCanvas');

    if (ditherCanvas) {
        const ctx = ditherCanvas.getContext('2d');
        let width = 0;
        let height = 0;
        let dpr = 1;

        function resizeDitherCanvas() {
            const rect = ditherCanvas.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width || 550;
            height = rect.height || 550;

            ditherCanvas.width = width * dpr;
            ditherCanvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }

        window.addEventListener('resize', resizeDitherCanvas);
        resizeDitherCanvas();

        let mouseX = 0.5;
        let mouseY = 0.5;
        let targetRotX = 0;
        let targetRotY = 0;
        let curRotX = 0.2;
        let curRotY = 0.3;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            targetRotY = (mouseX - 0.5) * 0.9;
            targetRotX = (mouseY - 0.5) * 0.9;
        });

        const Lx = 0.45;
        const Ly = -0.55;
        const Lz = 0.70;
        const lightLen = Math.hypot(Lx, Ly, Lz);
        const nLx = Lx / lightLen;
        const nLy = Ly / lightLen;
        const nLz = Lz / lightLen;

        let startTime = performance.now();

        function renderDitherFrame(now) {
            const time = (now - startTime) * 0.0012;

            curRotX += (targetRotX - curRotX) * 0.045 + 0.0012;
            curRotY += (targetRotY - curRotY) * 0.045 + 0.0022;

            ctx.clearRect(0, 0, width, height);

            const cx = width * 0.52;
            const cy = height * 0.50;
            const baseRadius = Math.min(width, height) * 0.42;
            const cellSize = Math.max(4.2, Math.min(6, width / 95));

            const cosX = Math.cos(curRotX);
            const sinX = Math.sin(curRotX);
            const cosY = Math.cos(curRotY);
            const sinY = Math.sin(curRotY);

            ctx.fillStyle = '#ffffff';

            const rBounds = baseRadius * 1.15;
            const yStart = cy - rBounds;
            const yEnd = cy + rBounds;
            const xStart = cx - rBounds;
            const xEnd = cx + rBounds;

            for (let py = yStart; py <= yEnd; py += cellSize) {
                const dy = py - cy;
                for (let px = xStart; px <= xEnd; px += cellSize) {
                    const dx = px - cx;
                    const distSq = dx * dx + dy * dy;

                    const theta = Math.atan2(dy, dx);
                    
                    const wave = 1.0 + 0.042 * Math.sin(theta * 3 + time * 1.5)
                                     + 0.032 * Math.cos(theta * 5 - time * 1.1)
                                     + 0.018 * Math.sin(theta * 7 + time * 2.2);
                    const currentR = baseRadius * wave;
                    const currentRSq = currentR * currentR;

                    if (distSq < currentRSq) {
                        const dist = Math.sqrt(distSq);
                        const dz = Math.sqrt(currentRSq - distSq);

                        const nx = dx / currentR;
                        const ny = dy / currentR;
                        const nz = dz / currentR;

                        const rx1 = nx * cosY + nz * sinY;
                        const rz1 = -nx * sinY + nz * cosY;
                        const ry1 = ny;

                        const ry2 = ry1 * cosX - rz1 * sinX;
                        const rz2 = ry1 * sinX + rz1 * cosX;
                        const rx2 = rx1;

                        let dot = rx2 * nLx + ry2 * nLy + rz2 * nLz;
                        dot = Math.max(0, dot);

                        let intensity = Math.pow(dot, 1.3) * 1.18 + Math.pow(Math.max(0, 1 - rz2), 2.5) * 0.22;
                        intensity = Math.min(1, Math.max(0, intensity));

                        if (intensity > 0.03) {
                            
                            const maxDotRadius = cellSize * 0.53;
                            const dotRadius = maxDotRadius * Math.sqrt(intensity);

                            ctx.beginPath();
                            ctx.arc(px, py, Math.max(0.6, dotRadius), 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                }
            }

            requestAnimationFrame(renderDitherFrame);
        }

        requestAnimationFrame(renderDitherFrame);
    }

    const terrainCanvas = document.getElementById('footerTerrainCanvas');
    const terrainStage = document.getElementById('footerTerrainStage');
    const footerScrollTopBtn = document.getElementById('footerScrollTopBtn');

    if (footerScrollTopBtn) {
        footerScrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (terrainCanvas && terrainStage) {
        const ctx = terrainCanvas.getContext('2d');
        let width = 0;
        let height = 0;
        let dpr = 1;

        function resizeTerrainCanvas() {
            const rect = terrainStage.getBoundingClientRect();
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = rect.width;
            height = rect.height;

            terrainCanvas.width = width * dpr;
            terrainCanvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        }

        window.addEventListener('resize', resizeTerrainCanvas);
        resizeTerrainCanvas();

        let mouseX = 0.5;
        let targetMouseX = 0.5;

        terrainStage.addEventListener('mousemove', (e) => {
            const rect = terrainStage.getBoundingClientRect();
            targetMouseX = (e.clientX - rect.left) / rect.width;
        });

        terrainStage.addEventListener('mouseleave', () => {
            targetMouseX = 0.5;
        });

        const numLines = 36;
        let startTime = performance.now();

        function renderTerrainFrame(now) {
            const time = (now - startTime) * 0.001;
            mouseX += (targetMouseX - mouseX) * 0.06;

            ctx.clearRect(0, 0, width, height);

            const cx = width * 0.5;
            const spread = width * 0.17;
            const mouseOffset = (mouseX - 0.5) * 1.6;

            const startY = height * 0.06;
            const endY = height * 0.94;
            const lineSpacing = (endY - startY) / (numLines - 1);

            for (let i = 0; i < numLines; i++) {
                const y0 = startY + i * lineSpacing;
                const t = i / (numLines - 1); 

                const lineWeight = Math.sin(t * Math.PI);
                const peakAmp = height * 0.50 * Math.pow(lineWeight, 0.72);

                const p1 = i * 0.45 + mouseOffset * 0.6;
                const p2 = i * 0.9 + 1.4 - mouseOffset * 0.3;
                const p3 = i * 1.7 + 2.8;

                ctx.beginPath();
                ctx.moveTo(0, y0);

                const step = Math.max(3, width / 320);

                for (let x = 0; x <= width; x += step) {
                    const dx = (x - cx) / spread;
                    let elev = 0;

                    if (Math.abs(dx) < 2.9) {
                        const env = Math.exp(-0.5 * dx * dx);
                        const r1 = Math.abs(Math.sin(dx * 2.8 + p1)) * 0.85;
                        const r2 = Math.abs(Math.cos(dx * 5.4 - p2)) * 0.48;
                        const r3 = Math.sin(dx * 10.2 + p3) * 0.2;
                        const micro = Math.cos(dx * 19.0 + i) * 0.05;
                        const spike = Math.exp(-dx * dx * 3.2) * 0.42;

                        elev = (r1 + r2 + r3 + micro + spike) * env * peakAmp;
                    }

                    const py = y0 - elev;
                    ctx.lineTo(x, py);
                }

                ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.22 + lineWeight * 0.22})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            requestAnimationFrame(renderTerrainFrame);
        }

        requestAnimationFrame(renderTerrainFrame);
    }

    const monumentChars = document.querySelectorAll('.m-char:not(.m-char-space)');
    const monumentWrap = document.querySelector('.footer-monument-wrap');
    const monumentStage = document.getElementById('footerTerrainStage');

    if (monumentChars.length > 0 && monumentWrap) {
        let charCenters = [];

        function updateCharCenters() {
            charCenters = Array.from(monumentChars).map((charEl) => {
                const rect = charEl.getBoundingClientRect();
                return {
                    el: charEl,
                    centerX: rect.left + rect.width / 2,
                    width: rect.width
                };
            });
        }

        window.addEventListener('resize', updateCharCenters);
        window.addEventListener('scroll', updateCharCenters, { passive: true });
        updateCharCenters();

        function calculateWeights(cursorX) {
            if (charCenters.length === 0 || charCenters[0].width === 0) {
                updateCharCenters();
            }

            const avgWidth = charCenters.length > 1 
                ? (charCenters[charCenters.length - 1].centerX - charCenters[0].centerX) / (charCenters.length - 1)
                : 42;
            const spread = Math.max(44, avgWidth * 1.15);
            const peakThreshold = Math.max(22, avgWidth * 0.58);

            charCenters.forEach((item) => {
                const dx = Math.abs(cursorX - item.centerX);
                let weight = 300;

                if (dx <= peakThreshold) {
                    weight = 900;
                } else {
                    const factor = Math.exp(-0.5 * Math.pow((dx - peakThreshold) / spread, 2));
                    const rawW = 300 + factor * 600;
                    if (rawW >= 760) weight = 900;
                    else if (rawW >= 580) weight = 700;
                    else if (rawW >= 420) weight = 500;
                    else weight = 300;
                }

                item.el.style.fontWeight = weight;
                item.el.style.fontVariationSettings = `'wght' ${weight}`;

                if (weight >= 700) {
                    item.el.style.textShadow = '0 0 16px rgba(255, 255, 255, 0.55)';
                } else {
                    item.el.style.textShadow = '';
                }
            });

            if (customCursor) customCursor.classList.add('is-hovering');
        }

        function resetAllWeights() {
            charCenters.forEach((item) => {
                item.el.style.fontWeight = '';
                item.el.style.fontVariationSettings = '';
                item.el.style.textShadow = '';
            });
            if (customCursor) customCursor.classList.remove('is-hovering');
        }

        monumentWrap.addEventListener('mousemove', (e) => {
            calculateWeights(e.clientX);
        });

        monumentWrap.addEventListener('mouseleave', () => {
            resetAllWeights();
        });

        if (monumentStage) {
            monumentStage.addEventListener('mousemove', (e) => {
                const wrapRect = monumentWrap.getBoundingClientRect();
                if (e.clientY >= wrapRect.top - 60 && e.clientY <= wrapRect.bottom + 20) {
                    calculateWeights(e.clientX);
                } else {
                    resetAllWeights();
                }
            });

            monumentStage.addEventListener('mouseleave', () => {
                resetAllWeights();
            });
        }
    }

    console.log('%c FURKAN ÇAKICI // MİMARİ PORTFOLYO 2026 ', 'background: #ffffff; color: #000000; font-family: monospace; font-weight: bold; padding: 4px 8px;');
});
