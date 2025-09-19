// Importar React, hooks y librerías necesarias para exportar en EXCEL y CSV
import { useState } from "react";
import ExcelJS from "exceljs";
import { valoresRespuesta, valoresBloque4 } from "../../data/valoresRespuesta";

// Hook personalizado para manejar la lógica de la evaluación de riesgos
function useRiskCalculator(questions) {
  const [evaluaciones, setEvaluaciones] = useState({});
  const [resultados, setResultados] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Actualizar evaluación
  const actualizarEvaluacion = (key, campo, valor) => {
    setEvaluaciones(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [campo]: valor
      }
    }));
  };

  // Calcular resultados
  const calcularResultados = () => {
      // Revisar preguntas sin evaluar antes de calcular y alertar al usuario
    const preguntasSinEvaluar = questions.filter(q => {
      const ev = evaluaciones[`pregunta_${q.id}`];
      return !ev || ev.valoracion === '' || ev.valoracion === undefined;
    });

    if (preguntasSinEvaluar.length === questions.length) {
      alert('⚠️ No has evaluado ninguna pregunta. Por favor, evalúa al menos una pregunta antes de calcular los resultados.');
      return;
    }

    if (preguntasSinEvaluar.length > 0) {
      const confirmar = confirm(
        `⚠️ Hay ${preguntasSinEvaluar.length} pregunta(s) sin evaluar.\n\n` +
        `¿Deseas continuar con el cálculo? Las preguntas sin evaluar no se incluirán en el cálculo.`
      );
      if (!confirmar) {
        return;
      }
    }
    
    // Inicializar bloques y puntos en 0 para evitar NaN
    const bloques = {
      "Bloque 1": { puntos: 0 },
      "Bloque 2": { puntos: 0 },
      "Bloque 3": { puntos: 0 },
      "Bloque 4": { puntos: 0 },
      "Bloque 5": { puntos: 0 },
      "Bloque 6": { puntos: 0 }
    };

    // Definir pesos de bloque según la metodología descrita
    const pesos = {
      "Bloque 1": 0.25,
      "Bloque 2": 0.25,
      "Bloque 3": 0.25,
      "Bloque 4": 0.25,
      "Bloque 5": 1,
      "Bloque 6": 1
    };

    // Contar preguntas por bloque
    const preguntasPorBloque = {};
    questions.forEach(p => {
      preguntasPorBloque[p.category] = (preguntasPorBloque[p.category] || 0) + 1;
    });

    // Procesar respuestas
    questions.forEach(pregunta => {
      const key = `pregunta_${pregunta.id}`;
      const ev = evaluaciones[key];

    // Diccionario según el bloque
      const diccionario = pregunta.category === "Bloque 4"
        ? valoresBloque4
        : valoresRespuesta;

      const valor = diccionario[ev?.valoracion] ?? 0;

      bloques[pregunta.category].puntos += valor;
    });

    // Calcular índices parciales y por tipo
    const indicesParciales = {};
    const indicesPorTipo = {};
    Object.entries(bloques).forEach(([bloque, { puntos }]) => {
      const respuestas = preguntasPorBloque[bloque] || 0;
      const puntosPosibles = respuestas * 3;
      const indiceParcial = puntosPosibles > 0 ? puntos / puntosPosibles : 0;
      const indicePorTipo = indiceParcial * (pesos[bloque] || 1);

      indicesParciales[bloque] = indiceParcial;
      indicesPorTipo[bloque] = indicePorTipo;
    });

    // Índices globales
    const Ir = indicesPorTipo["Bloque 1"] + indicesPorTipo["Bloque 2"] + indicesPorTipo["Bloque 3"] + indicesPorTipo["Bloque 4"];
    const Ic = indicesPorTipo["Bloque 5"];
    const Ib = indicesPorTipo["Bloque 6"];
    const Iriesgototal = Ic - Ir;

    // Índice Neto según tu regla
    let Ineto;
    if (Iriesgototal > 0) {
      Ineto = Ib - Iriesgototal;
    } else {
      Ineto = Ib + Iriesgototal;
    }

    // Mostrar en la tabla por bloque
    const resultadosPorBloque = {};
    Object.entries(bloques).forEach(([bloque, { puntos }]) => {
      const respuestas = preguntasPorBloque[bloque] || 0;
      const puntosPosibles = respuestas * 3;
      const indiceParcial = indicesParciales[bloque];
      const indicePorTipo = indicesPorTipo[bloque];
      resultadosPorBloque[bloque] = {
        respuestas,
        puntos: puntos.toFixed(2),
        puntosPosibles,
        indiceParcial: indiceParcial.toFixed(2),
        indicePorTipo: indicePorTipo.toFixed(2),
        porcentaje: puntosPosibles > 0 ? Math.round((puntos / puntosPosibles) * 100) + '%' : '0%'

      };
    });

    // Calcular puntos obtenidos y total de preguntas
      const puntosObtenidos = Object.values(bloques).reduce((acc, b) => acc + b.puntos, 0);
      const totalPreguntas = questions.length;

    setResultados({
      resultadosPorBloque,
      Ir: Math.round(Ir * 100),
      Iriesgototal: Math.round(Iriesgototal * 100),
      Ineto: Math.round(Ineto * 100),
      Ic: Math.round(Ic * 100),
      Ib: Math.round(Ib * 100),
      puntosObtenidos: isNaN(Number(puntosObtenidos)) ? "0.00" : puntosObtenidos.toFixed(2),
      totalPreguntas: isNaN(Number(totalPreguntas)) ? 0 : totalPreguntas
    });

    setMostrarResultados(true);
  };

  // Función para imprimir
  const imprimir = () => {
    // Construir filas con TODAS las preguntas
    const tablaPreguntas = questions.map(q => {
      const ev = evaluaciones[`pregunta_${q.id}`] || {};
      return `
        <tr>
          <td class="col-meta">${q.component}</td>
          <td class="col-meta">${q.category}</td>
          <td class="col-meta">${q.subcategory}</td>
          <td class="col-meta">${q.area}</td>
          <td class="col-main">${q.id}</td>
          <td class="col-main">${q.question}</td>
          <td class="col-main">${ev.valoracion || "Sin responder"}</td>
          <td class="col-main">${ev.informacion || "N/A"}</td>
          <td class="col-main">${ev.bibliografia || "N/A"}</td>
        </tr>
      `;
    }).join("");

    // Crear HTML completo para imprimir
    const htmlReporte = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Evaluación de Riesgos - ${new Date().toLocaleDateString()}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
          table { border-collapse: collapse; width: 100%; margin: 15px 0; }
          th, td { border: 1px solid #000; padding: 6px; vertical-align: top; }

          th { background-color: #f0f0f0; font-weight: bold; text-align: center; }

          /* Columnas pequeñas (meta info) */
          .col-meta { font-size: 9pt; font-family: Arial, sans-serif; text-align: left; }

          /* Columnas principales */
          .col-main { font-size: 11pt; font-family: Arial, sans-serif; text-align: center; }

          h1 { text-align: center; color: #333; }
          h2 { color: #333; margin: 20px 0 10px 0; }

          @media print {
            body { margin: 0; }
            .no-print { display: none; }
            @page {
              size: landscape;   /* horizontal */
              margin: 1.5cm;

              /* Pie de página con numeración */
              @bottom-center {
                content: "Página " counter(page) " de " counter(pages); /* Numeración de páginas depende del explorador funciona o no */
                font-family: Arial, sans-serif;
                font-size: 9pt;
                color: #555;
              }
            }

            .print-scale {
              transform: scale(0.85); /* Ajusta escla según sea necesario */
              transform-origin: top left;
            }
          }
        </style>
      </head>
      <body>
        <h1>Evaluación de Riesgos de Especies</h1>
        <p style="text-align: center;">
          Fecha: ${new Date().toLocaleDateString()} - Hora: ${new Date().toLocaleTimeString()}
        </p>

        <h2>Preguntas y respuestas</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Bloque</th>
              <th>Subcategoría</th>
              <th>Área</th>
              <th>ID</th>
              <th>Pregunta</th>
              <th>Valoración</th>
              <th>Información</th>
              <th>Bibliografía</th>
            </tr>
          </thead>
          <tbody>
            ${tablaPreguntas}
          </tbody>
        </table>

        <script>
          window.onload = function() { window.print(); };
        </script>
      </body>
      </html>
    `;

    // Abrir ventana nueva para imprimir el reporte
    const ventana = window.open('', '_blank', 'width=800,height=600');
    if (ventana) {
      ventana.document.write(htmlReporte);
      ventana.document.close();
    } else {
      alert('❌ No se pudo abrir la ventana de impresión. Verifica que no esté bloqueada por el navegador.');
    }
  };

  // Exportar CSV
  const exportarCSV = () => {
    const headers = ["Bloque", "id", "Pregunta", "Respuesta", "Información", "Bibliografía"];
    const rows = questions.map(q => {
      const ev = evaluaciones[`pregunta_${q.id}`] || {};
      return [
        `"${q.category}"`,
        `"${q.id}"`,
        `"${q.question}"`,
        `"${ev.valoracion || "Sin responder"}"`,
        `"${ev.informacion || "N/A"}"`,
        `"${ev.bibliografia || "N/A"}"`
      ];
    });

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `evaluacion_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Exportar XLSX
  const exportarXLSX = async () => {
  const data = [
    ["Bloque", "id", "Pregunta", "Respuesta", "Información", "Bibliografía"],
    ...questions.map(q => {
      const ev = evaluaciones[`pregunta_${q.id}`] || {};
      return [
        q.category, 
        q.id,
        q.question,
        ev.valoracion || "Sin responder",
        ev.informacion || "N/A",
        ev.bibliografia || "N/A"
      ];
    })
  ];


    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Evaluación");

    data.forEach(row => worksheet.addRow(row));

    // Generar el archivo y descargarlo
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `evaluacion_${new Date().toISOString().split("T")[0]}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Exportar JSON
  const exportarJSON = () => {
  const dataExport = {
    preguntas: questions.map(q => {
      const ev = evaluaciones[`pregunta_${q.id}`] || {};
      return {
        bloque: q.category,
        id: q.id,
        pregunta: q.question,
        valoracion: ev.valoracion || "Sin responder",
        informacion: ev.informacion || "N/A",
        bibliografia: ev.bibliografia || "N/A"
      };
    }),
    resultados,
    fecha: new Date().toISOString()
  };

    const blob = new Blob([JSON.stringify(dataExport, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `evaluacion_${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Retornar funciones y estados necesarios para el componente que use este hook
  return {
    evaluaciones,
    resultados,
    mostrarResultados,
    actualizarEvaluacion,
    calcularResultados,
    exportarJSON,
    exportarCSV,
    exportarXLSX,
    imprimir
  };
}

export default useRiskCalculator;