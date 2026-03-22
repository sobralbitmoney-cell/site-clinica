import { MessageCircle } from "lucide-react";

export default function App() {
  const whatsapp = "https://wa.me/5562984224831";

  return (
    <div className="min-h-screen bg-[#D9ECF7] flex flex-col items-center justify-center text-center p-6">

      <img src="/logo.png" className="w-56 mb-6" />

      <h1 className="text-4xl font-bold text-[#2589C4] mb-2">
        Mini Mundo Tia Ari
      </h1>

      <p className="text-lg mb-6">
        Clínica Multidisciplinar Especializada em Transtornos da Fala e Linguagem
      </p>

      <p className="max-w-xl mb-8">
        Atendimento especializado em fala, linguagem, TDL, DPAC e apraxia de fala na infância.
        Um espaço acolhedor e profissional para o desenvolvimento infantil.
      </p>

      <a
        href={whatsapp}
        target="_blank"
        className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition"
      >
        <MessageCircle size={20} />
        Agendar pelo WhatsApp
      </a>

    </div>
  );
}