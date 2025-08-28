const questions = [
  {
    "id": 1,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A1",
    "question": "¿La especie ha sido registrada como invasora en otros países?"
  },
  {
    "id": 2,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A2",
    "question": "¿Tiene antecedentes de invasión en ecosistemas similares?"
  },
  {
    "id": 3,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A3",
    "question": "¿Posee alta capacidad reproductiva?"
  },
  {
    "id": 4,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A4",
    "question": "¿Tiene mecanismos eficientes de dispersión?"
  },
  {
    "id": 5,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A5",
    "question": "¿Puede sobrevivir en una amplia gama de condiciones ambientales?"
  },
  {
    "id": 6,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A6",
    "question": "¿Está asociada a vectores humanos o rutas comerciales frecuentes?"
  },
  {
    "id": 7,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A7",
    "question": "¿Tiene capacidad de establecerse en hábitats alterados por el hombre?"
  },
  {
    "id": 8,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A8",
    "question": "¿Puede establecerse en hábitats naturales no perturbados?"
  },
  {
    "id": 9,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A9",
    "question": "¿Tiene ciclos de vida cortos o múltiples generaciones por año?"
  },
  {
    "id": 10,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A10",
    "question": "¿Presenta estrategias de reproducción asexual o partenogénesis?"
  },
  {
    "id": 11,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A11",
    "question": "¿Tiene alta plasticidad ecológica o fisiológica?"
  },
  {
    "id": 12,
    "component": "A",
    "category": "Riesgo de establecimiento e invasión",
    "subcategory": "A12",
    "question": "¿Se ha registrado su presencia en áreas cercanas o con conectividad ecológica?"
  },
  {
    "id": 11,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B1",
    "question": "¿Compite con especies nativas por recursos?"
  },
  {
    "id": 12,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B2",
    "question": "¿Depreda especies nativas?"
  },
  {
    "id": 13,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B3",
    "question": "¿Transmite enfermedades a especies nativas, humanas o domésticas?"
  },
  {
    "id": 14,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B4",
    "question": "¿Altera procesos ecológicos clave (nutrición, polinización, etc.)?"
  },
  {
    "id": 15,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B5",
    "question": "¿Modifica la estructura del hábitat?"
  },
  {
    "id": 16,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B6",
    "question": "¿Causa pérdidas económicas en sectores productivos?"
  },
  {
    "id": 17,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B7",
    "question": "¿Representa riesgos para la salud humana?"
  },
  {
    "id": 18,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B8",
    "question": "¿Afecta negativamente la biodiversidad?"
  },
  {
    "id": 19,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B9",
    "question": "¿Tiene efectos sinérgicos con otras especies invasoras?"
  },
  {
    "id": 20,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B10",
    "question": "¿Interfiere con prácticas culturales o recreativas?"
  },
  {
    "id": 21,
    "component": "B",
    "category": "Impacto potencial",
    "subcategory": "B11",
    "question": "¿Genera conflictos sociales o institucionales?"
  },
  {
    "id": 22,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C1",
    "question": "¿Existen métodos efectivos de control disponibles?"
  },
  {
    "id": 23,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C2",
    "question": "¿El costo de erradicación es elevado?"
  },
  {
    "id": 24,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C3",
    "question": "¿La especie puede regenerarse fácilmente tras intentos de control?"
  },
  {
    "id": 25,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C4",
    "question": "¿Tiene alta tolerancia a tratamientos químicos o físicos?"
  },
  {
    "id": 26,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C5",
    "question": "¿Es difícil de detectar en etapas tempranas?"
  },
  {
    "id": 27,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C6",
    "question": "¿Su control requiere coordinación interinstitucional compleja?"
  },
  {
    "id": 28,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C7",
    "question": "¿Tolera o se ve favorecido por condiciones ambientales extremas o perturbaciones frecuentes (como sequía, contaminación, alteración del hábitat)?"
  },
  {
    "id": 29,
    "component": "C",
    "category": "Factibilidad de control",
    "subcategory": "C8",
    "question": "¿Existen métodos de control conocidos, accesibles y efectivos para esta especie?"
  }
]
export default questions;