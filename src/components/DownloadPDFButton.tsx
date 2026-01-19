import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateSalesPDF } from '@/utils/generateSalesPDF';

const DownloadPDFButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    // Small delay for UX feedback
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      generateSalesPDF();
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        onClick={handleDownload}
        disabled={isGenerating}
        size="lg"
        className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <motion.span
          className="flex items-center gap-3"
          animate={isGenerating ? { opacity: 0.7 } : { opacity: 1 }}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generando PDF...
            </>
          ) : isComplete ? (
            <>
              <CheckCircle className="w-5 h-5" />
              ¡Descargado!
            </>
          ) : (
            <>
              <FileDown className="w-5 h-5" />
              Descargar Presentación PDF
            </>
          )}
        </motion.span>
      </Button>
    </motion.div>
  );
};

export default DownloadPDFButton;
