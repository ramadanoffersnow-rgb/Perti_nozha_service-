const AppConfig = {
  appName: "BertyPro Ultra",
  region: "النزهة 2 - جسر السويس",
  adminPhone: "201000000000", // ضع رقم الواتساب الخاص بالاستقبال هنا
  mapCenter: [31.355, 30.135], // إحداثيات تقريبية للنزهة 2
  
  services: [
    { id: 1, name: "صيدلية", icon: "💊", type: "delivery", urgent: true },
    { id: 2, name: "سوبر ماركت", icon: "🛒", type: "delivery", urgent: false },
    { id: 3, name: "سباك", icon: "🔧", type: "maintenance", urgent: true },
    { id: 4, name: "كهربائي", icon: "💡", type: "maintenance", urgent: true },
    { id: 5, name: "توصيل طرود", icon: "📦", type: "delivery", urgent: false },
    { id: 6, name: "كوافير منزلي", icon: "✂️", type: "beauty", urgent: false },
    { id: 7, name: "مكوجي", icon: "👕", type: "laundry", urgent: false },
    { id: 8, name: "مفاتيح سيارات", icon: "🔑", type: "emergency", urgent: true }
  ],

  emergencyNumbers: {
    medical: "123",
    security: "122",
    fire: "180"
  }
};
const AppConfig = {
  appName: "BertyPro Ultra",
  adminPhone: "201000000000", // ضع رقم الواتساب الخاص بك هنا
  defaultLocation: [31.355, 30.135], // احداثيات النزهة 2 التقريبية
  
  services: [
    { id: 1, name: "صيدلية", icon: "💊", type: "medical" },
    { id: 2, name: "سوبر ماركت", icon: "🛒", type: "delivery" },
    { id: 3, name: "كشري/مطعم", icon: "🍲", type: "food" },
    { id: 4, name: "سباك", icon: "🔧", type: "maintenance" },
    { id: 5, name: "كهربائي", icon: "💡", type: "maintenance" },
    { id: 6, name: "ونش انقاذ", icon: "🚜", type: "car" },
    { id: 7, name: "مفاتيح", icon: "🔑", type: "emergency" },
    { id: 8, name: "مكوجي", icon: "👕", type: "laundry" },
    { id: 9, name: "توصيل طرود", icon: "📦", type: "delivery" }
  ],
  
  responses: {
    hello: "أهلاً بيك يا فندم في بيرتي برو! إزاي أقدر أساعدك؟",
    price: "الأسعار بتختلف حسب الخدمة، ممكن تختار الخدمة وهنبلغك بالتفاصيل.",
    location: "إحنا بنغطي منطقة النزهة 2 وجسر السويس بالكامل."
  }
};
