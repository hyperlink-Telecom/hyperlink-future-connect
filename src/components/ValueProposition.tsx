import { motion } from "framer-motion";
import { Cpu, Shield, Wifi, Zap, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Cpu,
    title: "Tecnología de Punta",
    description: "Implementamos las últimas soluciones tecnológicas del mercado.",
  },
  {
    icon: Users,
    title: "Servicio Personalizado",
    description: "Soluciones adaptadas a las necesidades específicas de tu empresa.",
  },
  {
    icon: Shield,
    title: "Seguridad Integral",
    description: "Protección completa de tu infraestructura y datos empresariales.",
  },
  {
    icon: Wifi,
    title: "Conectividad Ininterrumpida",
    description: "Garantizamos disponibilidad 24/7 en todos tus sistemas.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description: "Infraestructura que crece junto con tu negocio.",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Optimización continua para máximo desempeño.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--hyperlink-secondary)) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Propuesta de <span className="text-gradient">Valor</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nos diferenciamos por nuestro compromiso con la excelencia y la innovación constante.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center mb-4"
                >
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
