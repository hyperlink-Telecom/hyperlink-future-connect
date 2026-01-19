import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200" />
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(hsl(217, 100%, 56%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            ¿Listo para transformar tu infraestructura tecnológica?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              asChild
            >
              <Link to="/contacto">
                Solicitar Asesoría
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-slate-400 text-slate-700 hover:bg-slate-200/50 hover:border-slate-500"
              asChild
            >
              <a href="tel:5656391877">
                <Phone className="mr-2 w-5 h-5" />
                56 5639 1877
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
