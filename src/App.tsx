import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Star, 
  Award, 
  Heart, 
  Sparkles, 
  ChevronRight,
  CheckCircle,
  Calendar,
  Wallet,
  GraduationCap,
  Trophy,
  PhoneCall,
  MessageCircle,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

function CountdownTimer({ endDate }: { endDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const end = new Date(endDate).getTime();
      const now = new Date().getTime();
      const distance = end - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <div className="bg-white rounded-lg shadow-lg p-3 min-w-[70px]">
            <span className="text-2xl font-bold text-[#FD3F92]">{value}</span>
          </div>
          <span className="text-sm mt-1 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
}

function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    payment: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '8b72650e-2011-494c-a8ed-4b8f01ccd7cc',
          ...formData
        })
      });

      if (response.ok) {
        alert('Merci pour votre inscription! Nous vous contacterons bientôt.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          payment: ''
        });
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Réservez votre place maintenant</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FD3F92] focus:border-[#FD3F92]"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FD3F92] focus:border-[#FD3F92]"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FD3F92] focus:border-[#FD3F92]"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Formation souhaitée</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FD3F92] focus:border-[#FD3F92]"
            value={formData.interest}
            onChange={(e) => setFormData({...formData, interest: e.target.value})}
            required
          >
            <option value="">Sélectionnez une formation</option>
            <option value="ongles">Pose d'ongles</option>
            <option value="cils">Extension de cils</option>
            <option value="microblading">Microblading</option>
            <option value="lipblush">Lip Blush</option>
            <option value="combo">Combo (4 formations)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Option de paiement</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#FD3F92] focus:border-[#FD3F92]"
            value={formData.payment}
            onChange={(e) => setFormData({...formData, payment: e.target.value})}
            required
          >
            <option value="">Sélectionnez une option de paiement</option>
            <option value="1x">Paiement en 1 fois</option>
            <option value="3x">3 fois sans frais</option>
            <option value="6x">6 fois sans frais</option>
            <option value="12x">12 fois</option>
            <option value="24x">24 fois</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#FD3F92] text-white py-3 rounded-lg font-semibold hover:bg-[#fe8bbd] transition-colors duration-300"
        >
          Réserver ma place
        </button>
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white relative">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/message/NSLINSWARQDDM1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Header with countdown */}
      <div className="bg-gradient-to-r from-[#FD3F92] via-[#fe8bbd] to-[#FD3F92] text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Offre limitée jusqu'au 15 avril!</span>
          </div>
          <CountdownTimer endDate="2025-04-15T23:59:59" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 text-center mb-12">
          Gagnez jusqu'à <span className="text-[#FD3F92]">216 000 $</span> par an<br />
          grâce à notre formation beauté à Montréal
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src="https://static.wixstatic.com/media/d88ab2_679d31c7cdc5401892a44ea7e9ccd95b~mv2.gif"
              alt="Formation beauté professionnelle"
              className="rounded-2xl shadow-2xl"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Centre-ville de Montréal</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <a href="tel:438-545-9908" className="hover:text-[#FD3F92]">438-545-9908</a>
              </div>
              <img
                src="https://static.wixstatic.com/media/d88ab2_48963ad2a61f4f87aedeb45219c0aeaa~mv2.png"
                alt="Logo"
                className="h-16 object-contain mt-2"
              />
            </div>
            <a
              href="https://wa.me/message/NSLINSWARQDDM1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Poser une question sur WhatsApp
              <MessageCircle className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Photos Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src="https://static.wixstatic.com/media/d88ab2_06f96cc0e7d743c9938043aa719d0d26~mv2.jpg"
                alt="Formation beauté 1"
                className="rounded-xl shadow-lg w-full h-auto mb-4"
              />
              <p className="text-center text-gray-700">Formation professionnelle complète</p>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/d88ab2_987d0f0c5a8043d3b13884b1507f3b83~mv2.jpg"
                alt="Formation beauté 2"
                className="rounded-xl shadow-lg w-full h-auto mb-4"
              />
              <p className="text-center text-gray-700">Apprentissage pratique intensif</p>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/d88ab2_8cff5eb783814df29ae1fb261e8b199b~mv2.jpg"
                alt="Formation beauté 3"
                className="rounded-xl shadow-lg w-full h-auto mb-4"
              />
              <p className="text-center text-gray-700">Accompagnement personnalisé</p>
            </div>
          </div>
        </div>
      </div>

      {/* Potential Earnings Section */}
      <div className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Potentiel de Gains</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[#FD3F92] mb-2">18 000 $</div>
              <p className="text-gray-700">Revenu mensuel potentiel</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[#FD3F92] mb-2">216 000 $</div>
              <p className="text-gray-700">Revenu annuel potentiel</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-[#FD3F92] mb-2">150 $</div>
              <p className="text-gray-700">Prix moyen par service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Display */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Votre Certification Professionnelle</h2>
          <img
            src="https://static.wixstatic.com/media/d88ab2_f9d3a8d014f04751b3de24f0a53b309d~mv2.png"
            alt="Certification professionnelle"
            className="max-w-2xl mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Forfaits section */}
      <div className="bg-gradient-to-b from-white to-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Forfaits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#FD3F92]">
              <h3 className="text-2xl font-bold mb-4">Forfait Essentiel</h3>
              <div className="text-3xl font-bold text-[#FD3F92] mb-6">990$</div>
              <p className="text-lg mb-6 text-gray-700">Pour une formation au choix</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>1 formation complète sur place</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Support pendant 3 mois</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Kit de démarrage</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#FD3F92]">
              <h3 className="text-2xl font-bold mb-4">Forfait Premium</h3>
              <div className="text-3xl font-bold text-[#FD3F92] mb-6">1990$</div>
              <p className="text-lg mb-6 text-gray-700">Accès aux 4 formations</p>
              <div className="bg-yellow-100 p-4 rounded-lg mb-6 flex items-center gap-3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
                  alt="Amazon Gift Card"
                  className="h-8 object-contain"
                />
                <span className="font-semibold text-gray-800">Carte cadeau Amazon de 100$ offerte!</span>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Les 4 formations complètes sur place</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Support pendant 6 mois</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Certification pour chaque formation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Kit de démarrage premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-[#FD3F92] w-5 h-5" />
                  <span>Ressources marketing exclusives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transformez votre passion en carrière lucrative</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-[#FD3F92] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Formation pratique intensive</h3>
                    <p className="text-gray-600">Apprenez les techniques les plus demandées du marché avec des experts du domaine.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-[#FD3F92] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support complet</h3>
                    <p className="text-gray-600">Bénéficiez d'un accompagnement personnalisé pour lancer votre activité.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-[#FD3F92] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Opportunités illimitées</h3>
                    <p className="text-gray-600">Créez votre propre entreprise ou rejoignez les meilleurs salons de beauté.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/d88ab2_827a264348ad47a7bdfdaba1b195a1b1~mv2.jpeg"
                alt="Formation beauté professionnelle"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { number: "95%", text: "Taux de réussite", icon: <Trophy /> },
              { number: "4.9/5", text: "Satisfaction", icon: <Star /> },
              { number: "24/7", text: "Support", icon: <PhoneCall /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[#FD3F92] mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Capture Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://static.wixstatic.com/media/d88ab2_7a4ca1e0df804b6889f480b2fdfd3130~mv2.png"
                alt="Formation beauté à Montréal"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <LeadCaptureForm />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie L.",
                role: "Esthéticienne certifiée",
                text: "Cette formation a changé ma vie. Je gagne maintenant 5 fois plus qu'avant."
              },
              {
                name: "Marie C.",
                role: "Entrepreneure beauté",
                text: "Le support est incroyable. J'ai pu lancer mon salon en 3 mois."
              },
              {
                name: "Aminata K.",
                role: "Ancienne infirmière en reconversion",
                text: "La meilleure décision de ma carrière. Formation complète et professionnelle."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Où êtes-vous situé ?",
                a: "Nous sommes situés à Montréal, au centre ville"
              },
              {
                q: "Est-ce que je peux payer en plusieurs fois ?",
                a: "Oui, vous pouvez payer en 3 fois à 24 fois."
              },
              {
                q: "Ai-je besoin d'expérience préalable ?",
                a: "Non, notre formation convient aux débutants comme aux professionnels."
              },
              {
                q: "Quel support est inclus ?",
                a: "Vous bénéficiez d'un support disponible 24/7."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[#FD3F92] via-[#fe8bbd] to-[#FD3F92] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Commencez votre nouvelle carrière à Montréal
          </h2>
          <p className="text-white text-xl mb-8">
            Ne manquez pas cette opportunité de transformer votre vie
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://buy.stripe.com/14k3fW2HU2G17Cw6or"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-[#FD3F92] rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Je réserve ma place
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:438-545-9908"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg hover:bg-green-600 transition-colors duration-300"
            >
              Appelez-nous
              <Phone className="ml-2 w-5 h-5" />
            </a>
          </div>
          <p className="text-white text-sm mt-4">
            Formation sur place au centre-ville de Montréal
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;