import { motion } from "framer-motion";
import { ArrowRight, Network, Camera, Settings, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Network,
    title: "Infraestructura de Red",
    description: "Diseño e implementación de redes empresariales escalables y seguras.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    icon: Camera,
    title: "Videovigilancia",
    description: "Sistemas CCTV HD con monitoreo 24/7 y acceso remoto.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
  },
  {
    icon: Settings,
    title: "Servicios Administrados",
    description: "Monitoreo, mantenimiento y optimización continua de sistemas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    icon: Wifi,
    title: "Red Inalámbrica",
    description: "Cobertura WiFi optimizada de alto rendimiento empresarial.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos soluciones integrales adaptadas a las necesidades de tu empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 card-hover"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/50" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-16 h-16 rounded-xl bg-accent-gradient flex items-center justify-center mb-6"
                >
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto hover:bg-transparent"
                  asChild
                >
                  <Link to="/servicios">
                    <span className="text-primary font-medium">Más información</span>
                    <ArrowRight className="ml-2 w-4 h-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="xl" className="button-glow" asChild>
            <Link to="/servicios">
              Ver todos los servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
