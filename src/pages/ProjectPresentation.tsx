import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Shield, Database, Globe, Lock, Cpu, Users, MapPin, Camera, 
  FileText, Code, Server, Layers, CheckCircle, AlertTriangle,
  Printer, ArrowRight, BookOpen, HelpCircle, BarChart3, Zap
} from 'lucide-react';
import policeLogo from '@/assets/police-logo.png';

const ProjectPresentation = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-4 md:p-8 print:bg-white print:text-black" dir="rtl">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img src={policeLogo} alt="Police Logo" className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Police Ops</h1>
              <p className="text-blue-300">نظام إدارة عمليات الشرطة الفلسطينية</p>
            </div>
          </div>
          <Button onClick={handlePrint} variant="outline" className="print:hidden gap-2 border-white/30 text-white hover:bg-white/10">
            <Printer className="w-4 h-4" />
            طباعة
          </Button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-semibold text-yellow-400 mb-2">🎓 مشروع التخرج - نظم معلومات حاسوبية (أمن معلومات)</h2>
          <p className="text-white/80">أول نظام رقمي شامل ومتكامل لإدارة عمليات الشرطة الفلسطينية</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2 bg-white/10 p-2 rounded-xl mb-6 h-auto print:hidden">
            <TabsTrigger value="intro" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">المقدمة</TabsTrigger>
            <TabsTrigger value="architecture" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">الهيكل</TabsTrigger>
            <TabsTrigger value="dataflow" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">تدفق البيانات</TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">الأمان</TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">التقنيات</TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">المميزات</TabsTrigger>
            <TabsTrigger value="questions" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">الأسئلة</TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:bg-blue-600 text-xs md:text-sm">الإحصائيات</TabsTrigger>
          </TabsList>

          {/* Introduction Tab */}
          <TabsContent value="intro" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                  مقدمة المشروع
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">🎯 ما هو Police Ops؟</h3>
                  <p className="text-lg leading-relaxed">
                    نظام إدارة عمليات الشرطة الفلسطينية (Police Ops) هو <strong className="text-yellow-400">أول نظام رقمي شامل ومتكامل</strong> مصمم خصيصاً لتحويل العمليات الأمنية من النظام الورقي التقليدي إلى نظام إلكتروني ذكي وآمن.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-500/20 rounded-lg p-5 border border-red-500/30">
                    <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      المشاكل الحالية (النظام الورقي)
                    </h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• بطء في الوصول للمعلومات الأمنية</li>
                      <li>• صعوبة التنسيق بين الأقسام المختلفة</li>
                      <li>• خطر فقدان أو تلف الملفات الورقية</li>
                      <li>• عدم وجود تتبع فوري للدوريات</li>
                      <li>• صعوبة التحقق من هوية الأشخاص</li>
                      <li>• غياب نظام إشعارات موحد</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/20 rounded-lg p-5 border border-green-500/30">
                    <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      الحلول المقدمة (Police Ops)
                    </h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• وصول فوري لجميع البيانات</li>
                      <li>• تواصل مباشر بين 10 أقسام شرطية</li>
                      <li>• تخزين آمن ومشفر في السحابة</li>
                      <li>• تتبع GPS فوري للدوريات</li>
                      <li>• التعرف على الوجه بالذكاء الاصطناعي</li>
                      <li>• نظام إشعارات طوارئ موحد</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h4 className="font-bold text-blue-400 mb-3">🏛️ الأقسام الشرطية المدعومة (10 أقسام)</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {['المباحث الجنائية', 'الشرطة القضائية', 'شرطة المرور', 'الجرائم الإلكترونية', 'الشرطة الخاصة', 
                      'شرطة الحدود', 'شرطة السياحة', 'العمليات المشتركة', 'مختبر الأدلة الجنائية', 'نظام العمليات'].map((dept, i) => (
                      <Badge key={i} className="bg-blue-600/50 text-white justify-center py-2">{dept}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Layers className="w-6 h-6 text-yellow-400" />
                  الهيكل المعماري (Three-Tier Architecture)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-lg text-white/80">النظام مبني على هيكل ثلاثي الطبقات لضمان الفصل بين المسؤوليات وسهولة الصيانة</p>
                </div>

                {/* Frontend Layer */}
                <div className="bg-gradient-to-r from-blue-600/40 to-blue-800/40 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-8 h-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">الطبقة الأولى: واجهة المستخدم (Frontend)</h3>
                      <p className="text-white/70">التفاعل مع المستخدم وعرض البيانات</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">التقنيات المستخدمة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion'].map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-500/30">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">المميزات:</h4>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• أكثر من 100 صفحة تفاعلية</li>
                        <li>• دعم كامل للغة العربية (RTL)</li>
                        <li>• تصميم متجاوب لجميع الأجهزة</li>
                        <li>• لوحات تحكم ديناميكية</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Backend Layer */}
                <div className="bg-gradient-to-r from-green-600/40 to-green-800/40 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-8 h-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-bold text-green-400">الطبقة الثانية: الخدمات الخلفية (Backend)</h3>
                      <p className="text-white/70">إدارة البيانات وتنفيذ منطق الأعمال</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">التقنيات المستخدمة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Supabase Edge Functions', 'Deno Runtime', 'TypeScript', 'REST API'].map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-green-500/30">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">أمثلة على الوظائف (34 وظيفة):</h4>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• <code className="bg-black/30 px-1 rounded">verify-face-login</code> - التحقق بالوجه</li>
                        <li>• <code className="bg-black/30 px-1 rounded">check-device-access</code> - فحص الجهاز</li>
                        <li>• <code className="bg-black/30 px-1 rounded">intelligent-query</code> - الاستعلام الذكي</li>
                        <li>• <code className="bg-black/30 px-1 rounded">face-recognition</code> - التعرف على الوجه</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Database Layer */}
                <div className="bg-gradient-to-r from-purple-600/40 to-purple-800/40 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">الطبقة الثالثة: قاعدة البيانات (Database)</h3>
                      <p className="text-white/70">تخزين المعلومات وتطبيق سياسات الأمان</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">التقنيات المستخدمة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {['PostgreSQL', 'pgvector', 'Row Level Security', 'Database Functions'].map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-purple-500/30">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">أمثلة على الجداول (+75 جدول):</h4>
                      <ul className="text-sm text-white/80 space-y-1">
                        <li>• <code className="bg-black/30 px-1 rounded">citizens</code> - بيانات المواطنين</li>
                        <li>• <code className="bg-black/30 px-1 rounded">incidents</code> - الحوادث والبلاغات</li>
                        <li>• <code className="bg-black/30 px-1 rounded">face_embeddings</code> - بصمات الوجه</li>
                        <li>• <code className="bg-black/30 px-1 rounded">user_devices</code> - أجهزة المستخدمين</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Data Flow Diagram */}
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
                  <h4 className="font-bold text-yellow-400 mb-4">📊 مخطط تدفق البيانات</h4>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
                    <div className="bg-blue-600/50 px-6 py-3 rounded-lg">👤 المستخدم</div>
                    <ArrowRight className="w-6 h-6 text-white/50 rotate-90 md:rotate-0" />
                    <div className="bg-blue-500/50 px-6 py-3 rounded-lg">🖥️ Frontend</div>
                    <ArrowRight className="w-6 h-6 text-white/50 rotate-90 md:rotate-0" />
                    <div className="bg-green-500/50 px-6 py-3 rounded-lg">⚙️ Edge Functions</div>
                    <ArrowRight className="w-6 h-6 text-white/50 rotate-90 md:rotate-0" />
                    <div className="bg-purple-500/50 px-6 py-3 rounded-lg">🗄️ Database</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Flow Tab */}
          <TabsContent value="dataflow" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  تدفق البيانات - أمثلة عملية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Login Flow */}
                <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    مثال 1: تسجيل الدخول متعدد الطبقات (5 طبقات أمان)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-blue-600">1</Badge>
                      <span><strong>البريد وكلمة المرور:</strong> التحقق من بيانات الاعتماد الأساسية</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-blue-600">2</Badge>
                      <span><strong>بصمة الجهاز (Device Fingerprint):</strong> التأكد من أن الجهاز مسجل ومصرح له</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-blue-600">3</Badge>
                      <span><strong>الموقع الجغرافي (Geo-Verification):</strong> التحقق من أن المستخدم داخل النطاق المسموح</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-blue-600">4</Badge>
                      <span><strong>رمز الجهاز (Device Code):</strong> إدخال رمز سري لتسجيل جهاز جديد</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-blue-600">5</Badge>
                      <span><strong>التعرف على الوجه (Face Recognition):</strong> مطابقة الوجه مع البيانات المخزنة</span>
                    </div>
                  </div>
                </div>

                {/* Face Recognition Flow */}
                <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    مثال 2: التعرف على الوجه (Face Recognition)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-3">كيف يعمل؟</h4>
                      <ol className="space-y-2 text-sm">
                        <li className="flex gap-2"><Badge variant="outline">1</Badge> التقاط صورة الوجه بالكاميرا</li>
                        <li className="flex gap-2"><Badge variant="outline">2</Badge> استخراج 128 بُعد (Face Embedding)</li>
                        <li className="flex gap-2"><Badge variant="outline">3</Badge> تشفير البيانات قبل الإرسال</li>
                        <li className="flex gap-2"><Badge variant="outline">4</Badge> البحث في قاعدة البيانات باستخدام pgvector</li>
                        <li className="flex gap-2"><Badge variant="outline">5</Badge> حساب التشابه (Cosine Similarity)</li>
                        <li className="flex gap-2"><Badge variant="outline">6</Badge> إرجاع النتائج (نسبة تشابه &gt; 60%)</li>
                      </ol>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-400 mb-2">الصيغة الرياضية:</h4>
                      <code className="text-green-400 text-sm block mb-2">
                        Cosine Similarity = (A · B) / (||A|| × ||B||)
                      </code>
                      <p className="text-xs text-white/60">حيث A و B هما متجهان بـ 128 بُعد</p>
                      <div className="mt-3 text-sm">
                        <p><strong className="text-yellow-400">العتبة:</strong> 60% (0.6)</p>
                        <p><strong className="text-green-400">مطابقة:</strong> إذا التشابه ≥ 60%</p>
                        <p><strong className="text-red-400">لا مطابقة:</strong> إذا التشابه &lt; 60%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GPS Tracking Flow */}
                <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    مثال 3: تتبع GPS الفوري
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-purple-600 mt-1">1</Badge>
                      <div>
                        <strong>جمع البيانات:</strong>
                        <p className="text-sm text-white/70">GPS يرسل: خط العرض، خط الطول، الدقة، السرعة، الاتجاه</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-purple-600 mt-1">2</Badge>
                      <div>
                        <strong>التخزين:</strong>
                        <p className="text-sm text-white/70">حفظ في جدول gps_tracking مع profile_id</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                      <Badge className="bg-purple-600 mt-1">3</Badge>
                      <div>
                        <strong>العرض الفوري:</strong>
                        <p className="text-sm text-white/70">Supabase Realtime يدفع التحديثات للخريطة مباشرة</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  نظام الأمان المتكامل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Multi-layer Auth */}
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-xl font-bold text-red-400 mb-4">🔐 المصادقة متعددة الطبقات (Multi-Layer Authentication)</h3>
                  <div className="grid md:grid-cols-5 gap-3">
                    {[
                      { layer: '1', title: 'كلمة المرور', desc: 'Bcrypt Hash' },
                      { layer: '2', title: 'بصمة الجهاز', desc: 'Device Fingerprint' },
                      { layer: '3', title: 'الموقع', desc: 'Geo-fence' },
                      { layer: '4', title: 'رمز الجهاز', desc: 'Secret Code' },
                      { layer: '5', title: 'التعرف بالوجه', desc: 'Face API' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">{item.layer}</div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-white/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RLS */}
                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">🛡️ Row Level Security (RLS)</h3>
                  <p className="mb-4 text-white/80">سياسات أمان على مستوى الصفوف تضمن أن كل مستخدم يرى فقط البيانات المصرح له بها</p>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-green-400">
                      CREATE POLICY "incidents_select_policy"<br/>
                      ON public.incidents<br/>
                      FOR SELECT<br/>
                      USING (<br/>
                      &nbsp;&nbsp;auth.uid() = reporter_id OR<br/>
                      &nbsp;&nbsp;auth.uid() = assigned_to OR<br/>
                      &nbsp;&nbsp;EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')<br/>
                      );
                    </code>
                  </div>
                </div>

                {/* Attack Protection */}
                <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">⚔️ الحماية من الهجمات</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { attack: 'SQL Injection', protection: 'Parameterized Queries + Supabase SDK', color: 'bg-red-500/20' },
                      { attack: 'XSS', protection: 'React Auto-escaping + Content Security Policy', color: 'bg-orange-500/20' },
                      { attack: 'CSRF', protection: 'SameSite Cookies + Token Validation', color: 'bg-yellow-500/20' },
                      { attack: 'Brute Force', protection: 'Rate Limiting + Account Lockout', color: 'bg-green-500/20' },
                      { attack: 'Man-in-the-Middle', protection: 'HTTPS/TLS Encryption', color: 'bg-blue-500/20' },
                      { attack: 'Session Hijacking', protection: 'JWT + Secure Cookies', color: 'bg-purple-500/20' },
                    ].map((item, i) => (
                      <div key={i} className={`${item.color} rounded-lg p-4 border border-white/10`}>
                        <p className="font-bold text-white mb-1">{item.attack}</p>
                        <p className="text-sm text-white/70">{item.protection}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Face Encryption */}
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-xl font-bold text-green-400 mb-4">🔒 تشفير بصمات الوجه</h3>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-green-400">
                      // XOR Cipher + Base64 Encoding<br/>
                      export const encryptFaceData = (data: string, key: string): string =&gt; {'{'}<br/>
                      &nbsp;&nbsp;let result = '';<br/>
                      &nbsp;&nbsp;for (let i = 0; i &lt; data.length; i++) {'{'}<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;result += String.fromCharCode(<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.charCodeAt(i) ^ key.charCodeAt(i % key.length)<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                      &nbsp;&nbsp;{'}'}<br/>
                      &nbsp;&nbsp;return btoa(result); // Base64<br/>
                      {'}'};
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Technologies Tab */}
          <TabsContent value="tech" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="w-6 h-6 text-yellow-400" />
                  التقنيات والأدوات المستخدمة
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* IDE & Tools */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">🛠️ بيئة التطوير</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">IDE:</h4>
                      <p>Visual Studio Code </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">Version Control:</h4>
                      <p>Git + GitHub + GitHub Actions</p>
                    </div>
                  </div>
                </div>

                {/* Languages & Frameworks */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-500/20 rounded-xl p-5 border border-blue-500/30">
                    <h4 className="font-bold text-blue-400 mb-3">📝 لغات البرمجة</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><Badge variant="secondary">TS</Badge> TypeScript 5.x</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">JS</Badge> JavaScript ES6+</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">SQL</Badge> PostgreSQL</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">CSS</Badge> Tailwind CSS</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/20 rounded-xl p-5 border border-green-500/30">
                    <h4 className="font-bold text-green-400 mb-3">⚛️ الأطر والمكتبات</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><Badge variant="secondary">⚛️</Badge> React 18</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">⚡</Badge> Vite</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">🎨</Badge> Shadcn/UI</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">🔄</Badge> TanStack Query</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-500/20 rounded-xl p-5 border border-purple-500/30">
                    <h4 className="font-bold text-purple-400 mb-3">🔧 الخدمات</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2"><Badge variant="secondary">☁️</Badge> Supabase</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">🗄️</Badge> PostgreSQL</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">🦕</Badge> Deno Runtime</li>
                      <li className="flex items-center gap-2"><Badge variant="secondary">🗺️</Badge> Mapbox</li>
                    </ul>
                  </div>
                </div>

                {/* Key Libraries Table */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 overflow-x-auto">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">📚 المكتبات الرئيسية</h3>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-right py-2 px-3">المكتبة</th>
                        <th className="text-right py-2 px-3">الاستخدام</th>
                        <th className="text-right py-2 px-3">الإصدار</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { lib: 'react', use: 'واجهة المستخدم', ver: '^18.3.1' },
                        { lib: '@supabase/supabase-js', use: 'الاتصال بقاعدة البيانات', ver: '^2.75.1' },
                        { lib: 'face-api.js', use: 'التعرف على الوجه', ver: '^0.22.2' },
                        { lib: '@tanstack/react-query', use: 'إدارة حالة البيانات', ver: '^5.56.2' },
                        { lib: 'framer-motion', use: 'الرسوم المتحركة', ver: '^12.23.24' },
                        { lib: 'mapbox-gl', use: 'الخرائط التفاعلية', ver: '^3.14.0' },
                        { lib: 'zod', use: 'التحقق من البيانات', ver: '^3.23.8' },
                        { lib: 'recharts', use: 'الرسوم البيانية', ver: '^2.12.7' },
                      ].map((item, i) => (
                        <tr key={i} className="border-b border-white/10">
                          <td className="py-2 px-3 font-mono text-blue-400">{item.lib}</td>
                          <td className="py-2 px-3">{item.use}</td>
                          <td className="py-2 px-3 text-white/60">{item.ver}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Cpu className="w-6 h-6 text-yellow-400" />
                  مميزات النظام وفوائده
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: '🤖', title: 'الذكاء الاصطناعي', desc: 'استعلام ذكي باللغة الطبيعية عن المواطنين والحوادث', color: 'from-purple-600/40 to-pink-600/40' },
                    { icon: '👤', title: 'التعرف على الوجه', desc: 'مطابقة الوجوه بدقة 128 بُعد مع نسبة تشابه 60%', color: 'from-blue-600/40 to-cyan-600/40' },
                    { icon: '📍', title: 'تتبع GPS فوري', desc: 'مراقبة حية لمواقع الدوريات على الخريطة', color: 'from-green-600/40 to-emerald-600/40' },
                    { icon: '🔔', title: 'نظام إشعارات', desc: 'إشعارات طوارئ فورية لجميع الوحدات', color: 'from-red-600/40 to-orange-600/40' },
                    { icon: '🏛️', title: '10 أقسام شرطية', desc: 'دعم كامل لجميع أقسام الشرطة الفلسطينية', color: 'from-yellow-600/40 to-amber-600/40' },
                    { icon: '📊', title: 'لوحات تحكم', desc: 'إحصائيات ورسوم بيانية تفاعلية', color: 'from-indigo-600/40 to-violet-600/40' },
                    { icon: '📱', title: 'تصميم متجاوب', desc: 'يعمل على جميع الأجهزة (حاسوب، تابلت، هاتف)', color: 'from-teal-600/40 to-cyan-600/40' },
                    { icon: '🔐', title: 'أمان متعدد الطبقات', desc: '5 طبقات حماية للوصول الآمن', color: 'from-rose-600/40 to-red-600/40' },
                    { icon: '🌐', title: 'دعم العربية', desc: 'واجهة كاملة بالعربية مع RTL', color: 'from-sky-600/40 to-blue-600/40' },
                  ].map((feature, i) => (
                    <div key={i} className={`bg-gradient-to-br ${feature.color} rounded-xl p-5 border border-white/20`}>
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-sm text-white/80">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Questions Tab */}
          <TabsContent value="questions" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <HelpCircle className="w-6 h-6 text-yellow-400" />
                  أسئلة المناقشة المتوقعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      q: 'لماذا اخترت React بدلاً من Angular أو Vue؟',
                      a: 'اخترت React لعدة أسباب: (1) أكبر مجتمع مطورين ودعم مستمر من Meta، (2) Component-based Architecture يسهل إعادة الاستخدام، (3) Virtual DOM يحسن الأداء، (4) توافق ممتاز مع TypeScript، (5) توفر مكتبات غنية مثل Shadcn/UI وTanStack Query.'
                    },
                    {
                      q: 'كيف تضمن أمان البيانات الحساسة في النظام؟',
                      a: 'نستخدم نهج Defense in Depth: (1) تشفير HTTPS لجميع الاتصالات، (2) Row Level Security في PostgreSQL، (3) JWT Tokens مع انتهاء صلاحية، (4) بصمة الجهاز لمنع الوصول غير المصرح، (5) التحقق الجغرافي، (6) تشفير بصمات الوجه قبل التخزين.'
                    },
                    {
                      q: 'اشرح آلية عمل التعرف على الوجه (Face Recognition)؟',
                      a: 'نستخدم face-api.js المبني على TensorFlow.js: (1) تحميل نماذج SSD MobileNet، (2) اكتشاف الوجه في الصورة، (3) استخراج 128 قيمة عددية (Face Embedding)، (4) تخزين المتجه في PostgreSQL مع pgvector، (5) عند البحث نحسب Cosine Similarity بين المتجهات، (6) نتائج بنسبة تشابه ≥60% تعتبر مطابقة.'
                    },
                    {
                      q: 'ما الفرق بين Edge Functions والـ Backend التقليدي؟',
                      a: 'Edge Functions تعمل على الحافة (Edge) قريباً من المستخدم: (1) Serverless - لا حاجة لإدارة خوادم، (2) Auto-scaling تلقائي، (3) تكلفة أقل - تدفع فقط عند الاستخدام، (4) Cold Start أسرع مع Deno، (5) نشر فوري. العيب: وقت تنفيذ محدود (عادة 30-60 ثانية).'
                    },
                    {
                      q: 'كيف يتم تحديث البيانات بشكل فوري (Real-time)؟',
                      a: 'نستخدم Supabase Realtime المبني على Phoenix Channels: (1) المستخدم يشترك في جدول معين، (2) عند أي تغيير (INSERT/UPDATE/DELETE)، (3) Supabase يرسل إشعار WebSocket، (4) React Query يحدث الـ Cache تلقائياً، (5) الواجهة تتحدث بدون إعادة تحميل.'
                    },
                    {
                      q: 'كيف يعمل التحقق من موقع تسجيل الدخول؟',
                      a: 'عملية verify-login-location: (1) نأخذ إحداثيات GPS من المتصفح، (2) نرسلها لـ Edge Function، (3) نحسب المسافة باستخدام Haversine Formula، (4) نقارن مع المواقع المسموحة في الـ Database، (5) إذا المسافة > الحد المسموح نرفض الدخول.'
                    },
                    {
                      q: 'ما هي Row Level Security (RLS) وكيف تعمل؟',
                      a: 'RLS هي ميزة في PostgreSQL تطبق سياسات أمان على مستوى الصف: (1) نعرف POLICY لكل جدول، (2) نحدد شروط الوصول باستخدام SQL، (3) auth.uid() تعطينا هوية المستخدم الحالي، (4) كل استعلام يمر بفلتر RLS تلقائياً، (5) حتى لو حاول المهاجم SQL Injection، لن يرى إلا بياناته.'
                    },
                    {
                      q: 'لماذا TypeScript بدلاً من JavaScript العادي؟',
                      a: 'TypeScript يوفر: (1) Static Type Checking يكتشف الأخطاء قبل التشغيل، (2) IntelliSense أفضل في VS Code، (3) Refactoring آمن، (4) توثيق ذاتي للكود، (5) دعم أفضل للـ OOP، (6) تكامل ممتاز مع React وSupabase.'
                    },
                    {
                      q: 'كيف تم نشر (Deploy) المشروع؟',
                      a: 'نستخدم Lovable Platform: (1) Frontend يُنشر على CDN عالمي، (2) Edge Functions تُنشر على Supabase، (3) Database مُدارة على Supabase، (4) CI/CD تلقائي عند كل تغيير، (5) HTTPS مجاني، (6) Custom Domain متاح.'
                    },
                    {
                      q: 'ما هي التحديات التي واجهتها وكيف تغلبت عليها؟',
                      a: 'أبرز التحديات: (1) دقة التعرف على الوجه - حُلت بتجربة عتبات مختلفة ووصلنا لـ 60%، (2) أداء الخرائط - استخدمنا Mapbox بدل Google Maps، (3) أمان متعدد الطبقات - صممنا نظام Device Fingerprint + Geo-verification، (4) RTL Support - Tailwind CSS سهّل الأمر.'
                    },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`q-${i}`} className="bg-white/5 rounded-lg border border-white/10 px-4">
                      <AccordionTrigger className="text-right hover:no-underline">
                        <span className="flex items-center gap-3">
                          <Badge className="bg-blue-600">{i + 1}</Badge>
                          <span className="text-white">{item.q}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/80 leading-relaxed pt-2">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stats Tab */}
          <TabsContent value="stats" className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BarChart3 className="w-6 h-6 text-yellow-400" />
                  إحصائيات المشروع
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { value: '+100', label: 'صفحة', icon: FileText, color: 'from-blue-500 to-blue-700' },
                    { value: '+200', label: 'مكون React', icon: Code, color: 'from-green-500 to-green-700' },
                    { value: '34', label: 'Edge Function', icon: Server, color: 'from-purple-500 to-purple-700' },
                    { value: '+75', label: 'جدول بيانات', icon: Database, color: 'from-orange-500 to-orange-700' },
                    { value: '10', label: 'قسم شرطي', icon: Users, color: 'from-red-500 to-red-700' },
                    { value: '5', label: 'طبقات أمان', icon: Shield, color: 'from-pink-500 to-pink-700' },
                    { value: '128', label: 'بُعد للوجه', icon: Camera, color: 'from-cyan-500 to-cyan-700' },
                    { value: 'RTL', label: 'دعم العربية', icon: Globe, color: 'from-yellow-500 to-yellow-700' },
                  ].map((stat, i) => (
                    <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-xl p-5 text-center`}>
                      <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-sm opacity-80">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">🎯 ملخص المشروع</h3>
                  <p className="text-lg text-center leading-relaxed">
                    نظام <strong className="text-blue-400">Police Ops</strong> هو مشروع تخرج متكامل يقدم حلاً رقمياً شاملاً للشرطة الفلسطينية،
                    مبني على تقنيات حديثة مثل <strong className="text-green-400">React</strong> و<strong className="text-purple-400">Supabase</strong>،
                    مع <strong className="text-red-400">5 طبقات أمان</strong> ونظام <strong className="text-cyan-400">تعرف على الوجه بالذكاء الاصطناعي</strong>،
                    يخدم <strong className="text-yellow-400">10 أقسام شرطية</strong> بأكثر من <strong className="text-pink-400">100 صفحة تفاعلية</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
          .print\\:bg-white { background: white !important; }
          .print\\:text-black { color: black !important; }
        }
      `}</style>
    </div>
  );
};

export default ProjectPresentation;
