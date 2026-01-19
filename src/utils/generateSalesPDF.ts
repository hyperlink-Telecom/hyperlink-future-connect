import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateSalesPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  
  // Colors
  const primaryBlue = [11, 60, 93] as const; // #0B3C5D
  const secondaryBlue = [31, 122, 255] as const; // #1F7AFF
  const darkBg = [2, 6, 23] as const; // #020617
  const white = [255, 255, 255] as const;
  const gray = [148, 163, 184] as const;

  // Helper functions
  const addHeader = (text: string, y: number, size: number = 18) => {
    doc.setFontSize(size);
    doc.setTextColor(...secondaryBlue);
    doc.setFont('helvetica', 'bold');
    doc.text(text, 20, y);
    return y + 10;
  };

  const addParagraph = (text: string, y: number, maxWidth: number = 170) => {
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, 20, y);
    return y + (lines.length * 6) + 4;
  };

  // ========== PAGE 1: Cover ==========
  // Background gradient effect
  doc.setFillColor(...darkBg);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative elements
  doc.setFillColor(...secondaryBlue);
  doc.circle(pageWidth - 30, 40, 60, 'F');
  doc.setFillColor(...primaryBlue);
  doc.circle(30, pageHeight - 40, 40, 'F');

  // Logo/Title area
  doc.setFontSize(42);
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.text('HYPERLINK', pageWidth / 2, 90, { align: 'center' });
  
  doc.setFontSize(16);
  doc.setTextColor(...secondaryBlue);
  doc.text('TELECOM', pageWidth / 2, 102, { align: 'center' });

  // Tagline
  doc.setFontSize(14);
  doc.setTextColor(...gray);
  doc.setFont('helvetica', 'normal');
  doc.text('Infraestructura Tecnologica y Telecomunicaciones', pageWidth / 2, 130, { align: 'center' });

  // Divider line
  doc.setDrawColor(...secondaryBlue);
  doc.setLineWidth(0.5);
  doc.line(60, 145, pageWidth - 60, 145);

  // Subtitle
  doc.setFontSize(24);
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.text('Presentacion de Servicios', pageWidth / 2, 170, { align: 'center' });

  doc.setFontSize(12);
  doc.setTextColor(...gray);
  doc.text('Soluciones Integrales de Conectividad y Seguridad', pageWidth / 2, 185, { align: 'center' });

  // Contact info box
  doc.setFillColor(20, 30, 50);
  doc.roundedRect(40, 220, pageWidth - 80, 45, 5, 5, 'F');

  doc.setFontSize(10);
  doc.setTextColor(...white);
  doc.text('Tel: 56 5639 1877', 55, 235);
  doc.text('Email: info@hyperlink.com.mx', 55, 248);
  doc.text('Cancun, Quintana Roo, Mexico', pageWidth - 55, 235, { align: 'right' });
  doc.text('Web: hyperlink.lovable.app', pageWidth - 55, 248, { align: 'right' });

  // ========== PAGE 2: About Us ==========
  doc.addPage();
  doc.setFillColor(...white);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Header bar
  doc.setFillColor(...primaryBlue);
  doc.rect(0, 0, pageWidth, 25, 'F');
  doc.setFontSize(12);
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.text('HYPERLINK TELECOM', 20, 16);
  doc.text('Presentacion de Servicios', pageWidth - 20, 16, { align: 'right' });

  let y = 45;
  y = addHeader('Quienes Somos?', y, 22);
  
  y = addParagraph(
    'Hyperlink Telecom es tu aliado estrategico en infraestructura tecnologica y telecomunicaciones. Ofrecemos soluciones integrales de conectividad y seguridad para empresas de todos los tamanos.',
    y + 5
  );

  // Mission & Vision boxes
  y += 10;
  
  // Mission box
  doc.setFillColor(240, 247, 255);
  doc.roundedRect(20, y, 80, 50, 3, 3, 'F');
  doc.setFontSize(12);
  doc.setTextColor(...primaryBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('NUESTRA MISION', 25, y + 12);
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  const missionText = doc.splitTextToSize(
    'Transformar la infraestructura tecnologica mediante soluciones innovadoras que garanticen conectividad continua y seguridad robusta.',
    70
  );
  doc.text(missionText, 25, y + 22);

  // Vision box
  doc.setFillColor(240, 247, 255);
  doc.roundedRect(110, y, 80, 50, 3, 3, 'F');
  doc.setFontSize(12);
  doc.setTextColor(...primaryBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('NUESTRA VISION', 115, y + 12);
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  const visionText = doc.splitTextToSize(
    'Ser el aliado tecnologico de referencia, anticipandonos a las necesidades del mercado e impulsando la transformacion digital.',
    70
  );
  doc.text(visionText, 115, y + 22);

  y += 65;
  y = addHeader('Por Que Elegirnos?', y, 18);

  const differentiators = [
    ['Equipo Certificado', 'Tecnicos especializados con experiencia comprobada'],
    ['Soporte 24/7', 'Atencion en espanol todo el dia, todos los dias'],
    ['Soluciones Personalizadas', 'Diseno a la medida de cada cliente'],
    ['Tecnologia de Punta', 'Equipamiento de ultima generacion'],
    ['Precios Competitivos', 'Transparencia y valor por tu inversion'],
    ['Garantia de Satisfaccion', 'Compromiso con resultados'],
  ];

  autoTable(doc, {
    startY: y,
    head: [['Diferenciador', 'Beneficio']],
    body: differentiators,
    theme: 'striped',
    headStyles: { fillColor: [11, 60, 93] as [number, number, number], textColor: [255, 255, 255] as [number, number, number] },
    styles: { fontSize: 10, cellPadding: 4 },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 60 },
      1: { cellWidth: 110 },
    },
    margin: { left: 20, right: 20 },
  });

  // ========== PAGE 3: Services ==========
  doc.addPage();
  
  // Header bar
  doc.setFillColor(...primaryBlue);
  doc.rect(0, 0, pageWidth, 25, 'F');
  doc.setFontSize(12);
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.text('HYPERLINK TELECOM', 20, 16);
  doc.text('Nuestros Servicios', pageWidth - 20, 16, { align: 'right' });

  y = 45;
  y = addHeader('Nuestros Servicios', y, 22);

  // Service 1: Network Infrastructure
  y += 5;
  doc.setFillColor(240, 247, 255);
  doc.roundedRect(20, y, pageWidth - 40, 55, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setTextColor(...secondaryBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('INFRAESTRUCTURA DE RED', 25, y + 12);
  
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  const netDesc = doc.splitTextToSize(
    'Disenamos e implementamos redes empresariales robustas con 99.9% de disponibilidad.',
    pageWidth - 50
  );
  doc.text(netDesc, 25, y + 22);
  
  doc.setFontSize(9);
  doc.text('> Escalabilidad  > Alta disponibilidad  > Diseno personalizado  > Soporte especializado', 25, y + 38);
  
  y += 65;

  // Service 2: CCTV
  doc.setFillColor(240, 247, 255);
  doc.roundedRect(20, y, pageWidth - 40, 55, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setTextColor(...secondaryBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('INFRAESTRUCTURA DE VIDEOVIGILANCIA', 25, y + 12);
  
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  const cctvDesc = doc.splitTextToSize(
    'Sistemas CCTV de ultima generacion con camaras HD y monitoreo 24/7.',
    pageWidth - 50
  );
  doc.text(cctvDesc, 25, y + 22);
  
  doc.setFontSize(9);
  doc.text('> CCTV HD  > Acceso remoto  > Almacenamiento seguro  > Analisis inteligente', 25, y + 38);

  y += 65;

  // Service 3: Managed Services
  doc.setFillColor(240, 247, 255);
  doc.roundedRect(20, y, pageWidth - 40, 55, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setTextColor(...secondaryBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('SERVICIOS ADMINISTRADOS', 25, y + 12);
  
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  const managedDesc = doc.splitTextToSize(
    'Gestion integral de tu infraestructura TI con monitoreo proactivo 24/7.',
    pageWidth - 50
  );
  doc.text(managedDesc, 25, y + 22);
  
  doc.setFontSize(9);
  doc.text('> Monitoreo 24/7  > Mantenimiento preventivo  > Reportes mensuales  > Reduccion de costos', 25, y + 38);

  y += 65;

  // Service 4: WiFi
  doc.setFillColor(240, 247, 255);
  doc.roundedRect(20, y, pageWidth - 40, 55, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setTextColor(...secondaryBlue);
  doc.setFont('helvetica', 'bold');
  doc.text('RED INALAMBRICA ESTRUCTURADA', 25, y + 12);
  
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.setFont('helvetica', 'normal');
  const wifiDesc = doc.splitTextToSize(
    'WiFi empresarial de alto rendimiento con cobertura optimizada y seguridad WPA3.',
    pageWidth - 50
  );
  doc.text(wifiDesc, 25, y + 22);
  
  doc.setFontSize(9);
  doc.text('> Cobertura total  > Alto rendimiento  > Seguridad WPA3  > Gestion centralizada', 25, y + 38);

  // ========== PAGE 4: Sectors & Contact ==========
  doc.addPage();
  
  // Header bar
  doc.setFillColor(...primaryBlue);
  doc.rect(0, 0, pageWidth, 25, 'F');
  doc.setFontSize(12);
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.text('HYPERLINK TELECOM', 20, 16);
  doc.text('Sectores y Contacto', pageWidth - 20, 16, { align: 'right' });

  y = 45;
  y = addHeader('Sectores que Atendemos', y, 18);

  const sectors = [
    ['Corporativo', 'Educacion', 'Retail', 'Salud'],
    ['Manufactura', 'Finanzas', 'Hoteles', ''],
  ];

  autoTable(doc, {
    startY: y,
    body: sectors,
    theme: 'plain',
    styles: { fontSize: 12, cellPadding: 8, halign: 'center' },
    margin: { left: 20, right: 20 },
  });

  y = (doc as any).lastAutoTable.finalY + 20;
  
  y = addParagraph(
    'Contamos con experiencia comprobada en multiples industrias, ofreciendo soluciones especializadas para cada sector.',
    y
  );

  y += 15;
  y = addHeader('Contactanos', y, 18);

  // Contact info
  doc.setFillColor(...darkBg);
  doc.roundedRect(20, y, pageWidth - 40, 70, 5, 5, 'F');

  doc.setFontSize(12);
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'normal');
  
  doc.text('Telefono / WhatsApp:', 30, y + 18);
  doc.setFont('helvetica', 'bold');
  doc.text('56 5639 1877', 100, y + 18);
  
  doc.setFont('helvetica', 'normal');
  doc.text('Email:', 30, y + 32);
  doc.setFont('helvetica', 'bold');
  doc.text('info@hyperlink.com.mx', 100, y + 32);
  
  doc.setFont('helvetica', 'normal');
  doc.text('Ubicacion:', 30, y + 46);
  doc.setFont('helvetica', 'bold');
  doc.text('Cancun, Quintana Roo, Mexico', 100, y + 46);
  
  doc.setFont('helvetica', 'normal');
  doc.text('Web:', 30, y + 60);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...secondaryBlue);
  doc.text('hyperlink.lovable.app', 100, y + 60);

  y += 90;

  // CTA box
  doc.setFillColor(...secondaryBlue);
  doc.roundedRect(20, y, pageWidth - 40, 40, 5, 5, 'F');
  
  doc.setFontSize(16);
  doc.setTextColor(...white);
  doc.setFont('helvetica', 'bold');
  doc.text('Transforma tu Infraestructura Hoy!', pageWidth / 2, y + 18, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'italic');
  doc.text('"Conectividad continua. Seguridad robusta. Gestion eficiente."', pageWidth / 2, y + 32, { align: 'center' });

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Pagina ${i} de ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
    if (i > 1) {
      doc.text('Hyperlink Telecom - Todos los derechos reservados', pageWidth - 20, pageHeight - 10, { align: 'right' });
    }
  }

  // Save the PDF
  doc.save('Hyperlink_Telecom_Presentacion.pdf');
};
