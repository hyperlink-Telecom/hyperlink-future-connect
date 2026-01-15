import { motion } from "framer-motion";
import { Target, Eye, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2014",
    title: "Fundación",
    description: "Iniciamos operaciones con el objetivo de transformar la infraestructura tecnológica empresarial.",
  },
  {
    year: "2017",
    title: "Expansión Regional",
    description: "Ampliamos nuestra cobertura a toda la península de Yucatán.",
  },
  {
    year: "2020",
    title: "Certificaciones",
    description: "Obtuvimos certificaciones de los principales fabricantes de tecnología.",
  },
  {
    year: "2023",
    title: "Innovación Continua",
    description: "Lanzamos nuevas soluciones en la nube y servicios administrados.",
  },
];

const differentiators = [
  "Equipo técnico certificado y experimentado",
  "Soporte técnico 24/7 en español",
  "Soluciones personalizadas para cada cliente",
  "Tecnología de última generación",
  "Precios competitivos y transparentes",
  "Garantía de satisfacción",
];

const Nosotros = () => {
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
                backgroundImage: `radial-gradient(hsl(var(--hyperlink-secondary)) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
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
                Nuestra Historia
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Conoce <span className="text-gradient">HyperLink Telecom</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Más de una década transformando la infraestructura tecnológica 
                de empresas en toda la región.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-2xl overflow-hidden glow-effect">
                  <img
                    src="https://www.hyperlink.com.mx/images/hyper.jpg"
                    alt="Equipo HyperLink Telecom"
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Impulsamos la <span className="text-gradient">transformación digital</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  HyperLink Telecom es una empresa especializada en soluciones integrales 
                  de infraestructura tecnológica y telecomunicaciones, enfocada en ofrecer 
                  conectividad avanzada, seguridad, monitoreo y gestión eficiente de sistemas 
                  tecnológicos para empresas de distintos sectores.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Nuestro compromiso es convertirnos en el aliado estratégico que tu empresa 
                  necesita para enfrentar los retos tecnológicos del presente y del futuro.
                </p>
                
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient">10+</div>
                    <div className="text-sm text-muted-foreground">Años de experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient">500+</div>
                    <div className="text-sm text-muted-foreground">Proyectos completados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient">100+</div>
                    <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl bg-background border border-border card-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl bg-accent-gradient flex items-center justify-center mb-6"
                >
                  <Target className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar la infraestructura tecnológica de las empresas mediante 
                  soluciones innovadoras y personalizadas que garanticen conectividad 
                  continua, seguridad robusta y gestión eficiente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border card-hover"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl bg-accent-gradient flex items-center justify-center mb-6"
                >
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser el aliado tecnológico de referencia en telecomunicaciones e 
                  infraestructura de red, anticipándonos a las necesidades del mercado 
                  e impulsando la transformación digital.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Nuestra Trayectoria
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Una historia de <span className="text-gradient">crecimiento</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <div className="p-6 rounded-xl bg-card border border-border card-hover">
                        <span className="text-primary font-bold text-lg">{item.year}</span>
                        <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  ¿Por qué elegirnos?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Lo que nos <span className="text-gradient">diferencia</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  En HyperLink Telecom nos distinguimos por nuestro compromiso con 
                  la excelencia y la satisfacción del cliente.
                </p>

                <div className="space-y-4">
                  {differentiators.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Award, title: "Certificados", desc: "Por los mejores fabricantes" },
                  { icon: Users, title: "Equipo Experto", desc: "Profesionales capacitados" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-2xl bg-background border border-border text-center card-hover"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mx-auto mb-4"
                    >
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                ¿Listo para trabajar juntos?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Descubre cómo podemos ayudarte a transformar tu infraestructura tecnológica.
              </p>
              <Button
                size="xl"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contacto">
                  Contáctanos
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

export default Nosotros;
