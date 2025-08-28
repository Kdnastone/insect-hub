// Importar React
import { useState } from 'react';

export const useRiskCalculator = (questions) => {
  // Estado para almacenar las evaluaciones
  const [evaluaciones, setEvaluaciones] = useState(() => {
    const inicial = {};
    questions.forEach(pregunta => {
      const key = `pregunta_${pregunta.id}`;
      inicial[key] = {
        valoracion: '',
        informacion: '', 
        bibliografia: '',
        categoria: pregunta.category,
        pregunta: pregunta.question
      };
    });
    return inicial;
  });

  const [resultados, setResultados] = useState(null);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Función para actualizar evaluación
  const actualizarEvaluacion = (key, campo, valor) => {
    setEvaluaciones(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [campo]: valor
      }
    }));
  };

  // Función para calcular resultados
  const calcularResultados = () => {
    const preguntasSinEvaluar = Object.values(evaluaciones).filter(evaluacion => 
      evaluacion.valoracion === '' || evaluacion.valoracion === undefined
    );

    if (preguntasSinEvaluar.length === Object.keys(evaluaciones).length) {
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

    const preguntasEvaluadas = Object.values(evaluaciones).filter(evaluacion => 
      evaluacion.valoracion !== '' && evaluacion.valoracion !== undefined
    );
    
    //Cálculo de resultados generales según las preguntas totales
    const totalPreguntas = preguntasEvaluadas.length;
    const puntosObtenidos = preguntasEvaluadas.reduce((sum, evaluacion) => {
      return sum + parseInt(evaluacion.valoracion || 0);
    }, 0);
    
    // Son 3 puntos máximos por pregunta. Evitar división por cero
    const porcentaje = totalPreguntas > 0 ? (100 / (totalPreguntas * 3)) * puntosObtenidos : 0;
    
    // Calcular por categoría
    const resultadosPorCategoria = {};
    const categorias = [...new Set(questions.map(q => q.category))];
    
    // Calcular resultados por cada categoría
    categorias.forEach(categoria => {
      const preguntasCategoria = questions.filter(q => q.category === categoria);
      let puntosCat = 0;
      let preguntasEvaluadasCat = 0;
      
      preguntasCategoria.forEach(pregunta => {
        const key = `pregunta_${pregunta.id}`;
        const valoracion = evaluaciones[key]?.valoracion;
        if (valoracion !== '' && valoracion !== undefined) {
          puntosCat += parseInt(valoracion || 0);
          preguntasEvaluadasCat++;
        }
      });

      // Calcular porcentaje por categoría
      const porcentajeCat = preguntasEvaluadasCat > 0 ? (100 / (preguntasEvaluadasCat * 3)) * puntosCat : 0;
      resultadosPorCategoria[categoria] = {
        puntos: puntosCat,
        preguntas: preguntasEvaluadasCat,
        total: preguntasCategoria.length,
        porcentaje: porcentajeCat.toFixed(2)
      };
    });

    // Determinar nivel de riesgo
    let nivelRiesgo = 'Bajo';
    if (porcentaje > 60) nivelRiesgo = 'Alto';
    else if (porcentaje > 30) nivelRiesgo = 'Moderado';

    setResultados({
      puntosObtenidos,
      totalPreguntas,
      totalPreguntasDisponibles: Object.keys(evaluaciones).length,
      porcentaje: porcentaje.toFixed(2),
      nivelRiesgo,
      resultadosPorCategoria
    });
    setMostrarResultados(true);

    alert(
      `✅ Cálculo completado exitosamente!\n\n` +
      `Preguntas evaluadas: ${totalPreguntas} de ${Object.keys(evaluaciones).length}\n` +
      `Puntos obtenidos: ${puntosObtenidos} de ${totalPreguntas * 3}\n` +
      `Resultado: ${porcentaje.toFixed(2)}% - Riesgo ${nivelRiesgo}`
    );
  };

  // Función para imprimir
  const imprimir = () => {
    // Crear HTML completo para imprimir
    const htmlReporte = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Evaluación de Riesgos - ${new Date().toLocaleDateString()}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
          table { border-collapse: collapse; width: 100%; margin: 15px 0; }
          th, td { border: 1px solid #000; padding: 8px; text-align: left; vertical-align: top; }
          th { background-color: #f0f0f0; font-weight: bold; }
          h1 { text-align: center; color: #333; }
          h2 { color: #333; margin: 20px 0 10px 0; }
          .resumen { background: #f9f9f9; padding: 15px; margin: 20px 0; border: 1px solid #ddd; }
          .formulario { margin: 20px 0; }
          .pregunta { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
          .sin-evaluar { background-color: #fff3cd; }
          .evaluada { background-color: #d4edda; }
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>Evaluación de Riesgos de Especies</h1>
        <p style="text-align: center;">Fecha: ${new Date().toLocaleDateString()} - Hora: ${new Date().toLocaleTimeString()}</p>

        {/* Resumen de Resultados */}
        ${mostrarResultados && resultados ? `
          <div class="resumen">
            <h2>Resumen General</h2>
            <p><strong>Puntos obtenidos:</strong> ${resultados.puntosObtenidos} de ${resultados.totalPreguntas * 3} posibles</p>
            <p><strong>Preguntas evaluadas:</strong> ${resultados.totalPreguntas} de ${resultados.totalPreguntasDisponibles}</p>
            <p><strong>Porcentaje:</strong> ${resultados.porcentaje}%</p>
            <p><strong>Nivel de Riesgo:</strong> ${resultados.nivelRiesgo}</p>
          </div>
          
          <h2>Resultados por Categoría</h2>
          <table>
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Puntos</th>
                <th>Preguntas Evaluadas</th>
                <th>Porcentaje</th>
                <th>Nivel</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeo de resultados por categoría */}
              ${Object.entries(resultados.resultadosPorCategoria).map(([categoria, datos]) => {
                let nivel = 'Bajo';
                if (parseFloat(datos.porcentaje) > 60) nivel = 'Alto';
                else if (parseFloat(datos.porcentaje) > 30) nivel = 'Moderado';
                
                return `
                  <tr>
                    <td>${categoria}</td>
                    <td>${datos.puntos}</td>
                    <td>${datos.preguntas} de ${datos.total}</td>
                    <td>${datos.porcentaje}%</td>
                    <td>${nivel}</td>
                  </tr>
                `;
              }).join('')}
              {/* Fin del mapeo de resultados por categoría. Inicio del mapeo de evaluaciones */}
            </tbody>
          </table>
        ` : `
          <div class="resumen">
            <h2>Estado de la Evaluación</h2>
            <p><strong>Estado:</strong> Evaluación en progreso</p>
            <p><strong>Total de preguntas:</strong> ${Object.keys(evaluaciones).length}</p>
            <p><strong>Preguntas evaluadas:</strong> ${Object.values(evaluaciones).filter(e => e.valoracion !== '' && e.valoracion !== undefined).length}</p>
          </div>
        `}
        {/* Formulario de Evaluación */}
        <div class="formulario">
          <h2>Formulario de Evaluación</h2>
          <table>
            <thead>
              <tr>
                <th style="width: 20%;">Categoría</th>
                <th style="width: 40%;">Pregunta</th>
                <th style="width: 15%;">Valoración</th>
                <th style="width: 25%;">Información</th>
                <th style="width: 25%;">Bibliografía</th>
              </tr>
            </thead>
            <tbody>
            
            {/* Mapeo de evaluaciones */}
              ${Object.entries(evaluaciones).map(([key, evaluacion]) => {
                const estaEvaluada = evaluacion.valoracion !== '' && evaluacion.valoracion !== undefined;
                const valoracionTexto = evaluacion.valoracion === '0' ? 'No aplica / Sin información (0)' : 
                                      evaluacion.valoracion === '1' ? 'Riesgo bajo (1)' : 
                                      evaluacion.valoracion === '2' ? 'Riesgo moderado (2)' : 
                                      evaluacion.valoracion === '3' ? 'Riesgo alto (3)': 'Sin evaluar';

                return `
                  <tr class="${estaEvaluada ? 'evaluada' : 'sin-evaluar'}">
                    <td>${evaluacion.categoria}</td>
                    <td>${evaluacion.pregunta}</td>
                    <td>${valoracionTexto}</td>
                    <td>${evaluacion.informacion || '-'}</td>
                    <td>${evaluacion.bibliografia || '-'}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
        
        <script>
          window.onload = function() { 
            window.print(); 
          };
        </script>
      </body>
      </html>
    `;

    // Abrir ventana nueva para imprimir
  const ventana = window.open('', '_blank', 'width=800,height=600');
  if (ventana) {
    const doc = ventana.document;

    // Crear la estructura base
    const html = doc.createElement("html");
    const head = doc.createElement("head");
    const body = doc.createElement("body");

    // Estilos básicos
    const style = doc.createElement("style");
    style.textContent = `
      body { 
        font-family: Arial, sans-serif; 
        padding: 20px; 
        background: white; 
        color: black; 
      }
    `;
    head.appendChild(style);

    // Insertar el contenido generado
    body.innerHTML = htmlReporte;

    html.appendChild(head);
    html.appendChild(body);
    doc.replaceChild(html, doc.documentElement);

    // Esperar a que la ventana cargue y luego imprimir
    setTimeout(() => {
      ventana.print();
    }, 100);
  } else {
    alert('❌ No se pudo abrir la ventana de impresión. Verifica que no esté bloqueada por el navegador.');
  }
  };

  // Función para exportar JSON
  const exportarJSON = () => {
    const dataExport = {
      evaluaciones,
      resultados,
      fechaEvaluacion: new Date().toISOString(),
      metadatos: {
        totalPreguntas: Object.keys(evaluaciones).length,
        preguntasEvaluadas: Object.values(evaluaciones).filter(e => e.valoracion !== '' && e.valoracion !== undefined).length,
        version: '1.0'
      }
    };

    // Crear el blob y el enlace de descarga
    const blob = new Blob([JSON.stringify(dataExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `evaluacion_riesgos_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Retornar los valores necesarios
  return {
    evaluaciones,
    resultados,
    mostrarResultados,
    actualizarEvaluacion,
    calcularResultados,
    imprimir,
    exportarJSON
  };
};