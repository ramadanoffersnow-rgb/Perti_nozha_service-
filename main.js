document.addEventListener('DOMContentLoaded', () => {
  initApp();
  updateTime();
  setInterval(updateTime, 60000);
});

function initApp() {
  renderServices(AppConfig.services);
  
  // تفعيل الإشعارات الوهمية للتجربة
  setTimeout(() => {
    document.getElementById('notificationBar').classList.remove('hidden');
  }, 3000);
}

// عرض الخدمات
function renderServices(servicesList) {
  const container = document.getElementById('services');
  container.innerHTML = '';

  servicesList.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <button onclick="requestService('${service.name}')">اطلب الآن</button>
    `;
    container.appendChild(card);
  });
}

// التعامل مع طلب الخدمة
function requestService(serviceName) {
  const userName = localStorage.getItem('userName') || 'عميل';
  const msg = `مرحباً، أنا ${userName}. محتاج خدمة: ${serviceName} في منطقة النزهة 2.`;
  
  // فتح واتساب مباشرة
  const url = `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  
  showToast(`تم تحويلك لطلب ${serviceName} ✅`);
}

// البحث السريع
function handleQuickSearch(query) {
  const filtered = AppConfig.services.filter(s => 
    s.name.includes(query)
  );
  renderServices(filtered);
}

// الوقت
function updateTime() {
  const now = new Date();
  document.getElementById('currentTime').innerText = now.toLocaleTimeString('ar-EG', {hour: '2-digit', minute:'2-digit'});
}

// إدارة النوافذ
function showUserModal() {
  document.getElementById('userModal').classList.remove('hidden');
  document.getElementById('userName').value = localStorage.getItem('userName') || '';
}

function hideModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function saveUser() {
  const name = document.getElementById('userName').value;
  if(name) {
    localStorage.setItem('userName', name);
    showToast('تم حفظ بياناتك بنجاح');
    hideModal('userModal');
  }
}

// أدوات مساعدة
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  toast.style.opacity = 1;
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 3000);
}

function dismissNotification() {
  document.getElementById('notificationBar').classList.add('hidden');
}

// طوارئ
function quickEmergency(type) {
  alert(`جاري الاتصال بـ ${type === 'medical' ? 'الإسعاف' : 'النجدة'}...`);
  // في التطبيق الحقيقي: window.location.href = "tel:123";
}
