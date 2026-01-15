import { motion } from "framer-motion";
import { Network, Camera, Settings, Wifi, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import service images
import networkDatacenter from "@/assets/services/network-datacenter.jpg";
import cctvSecurity from "@/assets/services/cctv-security.jpg";
import managedServices from "@/assets/services/managed-services.jpg";
import wirelessNetwork from "@/assets/services/wireless-network.jpg";

const services = [
  {
    icon: Network,
    title: "Infraestructura de Red",
    description:
      "Diseñamos e implementamos redes empresariales robustas que garantizan conectividad continua y alta disponibilidad. Nuestras soluciones están pensadas para crecer junto con tu negocio.",
    image: networkDatacenter,
    benefits: [
      "Escalabilidad para crecimiento futuro",
      "Alta disponibilidad 99.9%",
      "Conectividad robusta y segura",
      "Diseño personalizado",
      "Soporte técnico especializado",
    ],
  },
  {
    icon: Camera,
    title: "Infraestructura de Videovigilancia",
    description:
      "Implementamos sistemas de videovigilancia de última generación con cámaras HD, almacenamiento en la nube y acceso remoto desde cualquier dispositivo.",
    image: cctvSecurity,
    benefits: [
      "CCTV en alta definición",
      "Monitoreo 24/7",
      "Acceso remoto desde cualquier lugar",
      "Almacenamiento seguro",
      "Análisis inteligente de video",
    ],
  },
  {
    icon: Settings,
    title: "Servicios Administrados",
    description:
      "Nos encargamos del monitoreo, mantenimiento y optimización continua de toda tu infraestructura tecnológica para que puedas enfocarte en tu negocio.",
    image: managedServices,
    benefits: [
      "Monitoreo proactivo 24/7",
      "Mantenimiento preventivo",
      "Optimización de rendimiento",
      "Reportes mensuales detallados",
      "Reducción de costos operativos",
    ],
  },
  {
    icon: Wifi,
    title: "Red Inalámbrica Estructurada",
    description:
      "Diseñamos e implementamos redes WiFi empresariales con cobertura optimizada, seguridad avanzada y alto rendimiento para todos tus dispositivos.",
    image: wirelessNetwork,
    benefits: [
      "Cobertura optimizada sin puntos muertos",
      "Alto rendimiento y velocidad",
      "Seguridad empresarial WPA3",
      "Gestión centralizada",
      "Escalable según necesidades",
    ],
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--hyperlink-secondary) / 0.3) 1px, transparent 1px),
                                 linear-gradient(90deg, hsl(var(--hyperlink-secondary) / 0.3) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Nuestras Soluciones
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Servicios de <span className="text-gradient">Clase Mundial</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ofrecemos soluciones integrales de telecomunicaciones e infraestructura 
                diseñadas para impulsar el crecimiento de tu empresa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden glow-effect group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      
                      {/* Floating Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="absolute bottom-6 left-6 w-16 h-16 rounded-xl bg-accent-gradient flex items-center justify-center"
                      >
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button variant="cta" size="lg" className="button-glow" asChild>
                      <Link to="/contacto">
                        Solicitar información
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Necesitas una solución <span className="text-gradient">personalizada</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro equipo de expertos está listo para ayudarte a encontrar 
                la mejor solución para las necesidades específicas de tu empresa.
              </p>
              <Button variant="cta" size="xl" className="button-glow" asChild>
                <Link to="/contacto">
                  Contactar a un experto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Servicios;
