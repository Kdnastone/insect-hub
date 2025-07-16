
import { useState } from "react";
import { toast } from "react-toastify";
import escarabajoCerrado from "../assets/escarabajo1.png";
import escarabajoAbierto from "../assets/escarabajo2.png";
import "react-toastify/dist/ReactToastify.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [hover, setHover] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) newErrors.correo = true;
    if (!formData.asunto.trim()) newErrors.asunto = true;
    if (!formData.mensaje.trim()) newErrors.mensaje = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Por favor completa los campos obligatorios correctamente.");
      return;
    }

    const mailto = `mailto:cinat_fmvzbog@unal.edu.co?subject=${encodeURIComponent(
      formData.asunto
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\nTeléfono: ${formData.telefono}\n\nMensaje:\n${formData.mensaje}`
    )}`;

    window.open(mailto, "_blank");
    toast.success("¡Correo listo para enviar!");
    setFormData({ nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" });
    setErrors({});
  };

  return (
    <section className="min-h-screen bg-green-50 p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-900">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold">Asunto *</label>
          <input
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            className={`p-2 rounded border ${errors.asunto ? "border-red-500" : "border-gray-300"}`}
          />
        </div>
        <div className="md:col-span-2 flex flex-col">
          <label className="font-semibold">Mensaje *</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            className={`p-2 rounded border ${errors.mensaje ? "border-red-500" : "border-gray-300"}`}
          />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flex-col items-center"
          >
            <img
              src={hover ? escarabajoAbierto : escarabajoCerrado}
              alt="Enviar"
              className="w-20 h-20"
            />
            <span className="mt-2 font-semibold text-green-800">Enviar correo</span>
          </button>
        </div>
      </form>
    </section>
  );
}
