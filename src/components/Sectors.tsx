import { motion } from "framer-motion";
import { Building2, GraduationCap, ShoppingBag, Heart, Factory, Landmark, Hotel } from "lucide-react";

const sectors = [
  { icon: Building2, name: "Corporativo", description: "Empresas y oficinas" },
  { icon: GraduationCap, name: "Educación", description: "Instituciones educativas" },
  { icon: ShoppingBag, name: "Retail", description: "Comercio y tiendas" },
  { icon: Heart, name: "Salud", description: "Hospitales y clínicas" },
  { icon: Factory, name: "Manufactura", description: "Industria y producción" },
  { icon: Landmark, name: "Finanzas", description: "Bancos y financieras" },
  { icon: Hotel, name: "Hotelería", description: "Hoteles y resorts" },
];

const Sectors = () => {
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
            Industrias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sectores que <span className="text-gradient">Atendemos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experiencia comprobada en múltiples industrias con soluciones especializadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-3 group-hover:bg-accent-gradient transition-all duration-300"
              >
                <sector.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </motion.div>
              <h3 className="font-semibold text-center group-hover:text-primary transition-colors">
                {sector.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center mt-1">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
