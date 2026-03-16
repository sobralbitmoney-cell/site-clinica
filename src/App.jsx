// Coloque a logo da clínica na pasta /public com o nome: logo.png

// Coloque a logo da clínica na pasta /public com o nome: logo.png

export default function MiniMundoTiaAri() {
  const whatsappNumero = "5562999999999";
  const instagramUrl = "https://instagram.com/minimundotiaari";
  const googleMapsEmbed =
    "https://www.google.com/maps?q=Goi%C3%A2nia%20GO&output=embed";

  const whatsappMensagemInfo =
    "Olá, gostaria de mais informações sobre os atendimentos da Mini Mundo Tia Ari.";

  const whatsappMensagemAgendamento =
    "Olá, gostaria de agendar um atendimento na Mini Mundo Tia Ari.";

  const whatsappInfoLink = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
    whatsappMensagemInfo
  )}`;

  const whatsappAgendamentoLink = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
    whatsappMensagemAgendamento
  )}`;

  const especialidades = [
    {
      titulo: "Psicologia Infantil",
      texto: "Avaliação e acompanhamento emocional e comportamental para crianças.",
      cor: "bg-[#F8D6A5]",
      emoji: "🧠",
    },
    {
      titulo: "Fonoaudiologia",
      texto: "Desenvolvimento da fala, comunicação e linguagem infantil.",
      cor: "bg-[#F6A8C8]",
      emoji: "🗣️",
    },
    {
      titulo: "Terapia Ocupacional",
      texto: "Coordenação motora, autonomia e integração sensorial.",
      cor: "bg-[#B8E3D0]",
      emoji: "🧩",
    },
    {
      titulo: "Psicopedagogia",
      texto: "Apoio às dificuldades de aprendizagem.",
      cor: "bg-[#B8D9F0]",
      emoji: "📘",
    },
    {
      titulo: "Pedagogia Especializada",
      texto: "Acompanhamento educacional individualizado.",
      cor: "bg-[#F8D6A5]",
      emoji: "✏️",
    },
    {
      titulo: "Atendimento Familiar",
      texto: "Orientação e apoio para pais e responsáveis.",
      cor: "bg-[#F6A8C8]",
      emoji: "💛",
    },
  ];

  const equipe = [
    {
      nome: "Profissional 1",
      cargo: "Psicologia Infantil",
      cor: "bg-[#B8D9F0]",
    },
    {
      nome: "Profissional 2",
      cargo: "Fonoaudiologia",
      cor: "bg-[#F6A8C8]",
    },
    {
      nome: "Profissional 3",
      cargo: "Terapia Ocupacional",
      cor: "bg-[#B8E3D0]",
    },
  ];

  const beneficios = [
    "Atendimento acolhedor e humanizado",
    "Espaço preparado para crianças",
    "Equipe multidisciplinar",
    "Agendamento prático pelo WhatsApp",
  ];

  return (
    <div className="relative min-h-screen bg-[#D9ECF7] text-slate-800">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-10">
        <img src="/logo.png" alt="Mini Mundo Tia Ari" className="w-full max-w-[900px]" />
      </div>

      <a
        href={whatsappInfoLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#5DBB63] px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp
      </a>

      <header className="relative z-10 border-b border-[#7CC4EC]/30 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo Mini Mundo Tia Ari" className="h-14 w-auto" />
            <div>
              <h1 className="text-xl font-black text-[#2C8FC7]">Mini Mundo Tia Ari</h1>
              <p className="text-xs text-slate-600">Clínica Multidisciplinar Infantil</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700 md:gap-6">
            <a href="#inicio" className="hover:text-[#2C8FC7]">
              Início
            </a>
            <a href="#sobre" className="hover:text-[#2C8FC7]">
              Sobre
            </a>
            <a href="#especialidades" className="hover:text-[#2C8FC7]">
              Especialidades
            </a>
            <a href="#equipe" className="hover:text-[#2C8FC7]">
              Equipe
            </a>
            <a href="#instagram" className="hover:text-[#2C8FC7]">
              Instagram
            </a>
            <a href="#contato" className="hover:text-[#2C8FC7]">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="inicio"
          className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20"
        >
          <div>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2C8FC7] shadow">
              Atendimento infantil com carinho e profissionalismo
            </span>

            <h2 className="mb-6 text-4xl font-black text-[#2C8FC7] md:text-5xl">
              Um espaço acolhedor para o desenvolvimento da criança
            </h2>

            <p className="mb-8 text-lg leading-8 text-slate-700">
              A Mini Mundo Tia Ari oferece atendimento multidisciplinar especializado para
              crianças, com ambiente lúdico, acessível e agendamento simples.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappAgendamentoLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2C8FC7] px-6 py-3 font-bold text-white shadow"
              >
                Agendar pelo WhatsApp
              </a>

              <a
                href="#especialidades"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#2C8FC7] shadow"
              >
                Ver especialidades
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/logo.png" alt="Mini Mundo Tia Ari" className="w-full max-w-md" />
          </div>
        </section>

        <section id="sobre" className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-black text-[#2C8FC7]">Sobre a clínica</h2>
              <p className="mb-4 leading-8 text-slate-700">
                A Mini Mundo Tia Ari foi pensada para oferecer cuidado infantil com acolhimento,
                dedicação e suporte às famílias em diferentes etapas do desenvolvimento.
              </p>
              <p className="leading-8 text-slate-700">
                Esta versão do site foi montada da forma mais econômica possível, priorizando um
                visual profissional, leve, bonito e fácil de publicar.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FFF7E8] p-6 shadow-lg">
              <h3 className="mb-4 text-2xl font-black text-[#2C8FC7]">Diferenciais</h3>
              <div className="space-y-3">
                {beneficios.map((item) => (
                  <div key={item} className="rounded-2xl bg-white px-4 py-3 font-semibold shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="especialidades" className="py-16 bg-[#EAF6FC]">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl font-black text-[#2C8FC7]">
              Especialidades
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {especialidades.map((item) => (
                <div key={item.titulo} className={`rounded-3xl p-6 shadow-lg ${item.cor}`}>
                  <div className="mb-3 text-3xl">{item.emoji}</div>
                  <h3 className="mb-3 text-xl font-black">{item.titulo}</h3>
                  <p className="leading-7 text-slate-700">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl font-black text-[#2C8FC7]">Nossa equipe</h2>

            <div className="grid gap-6 md:grid-cols-3">
              {equipe.map((item) => (
                <div key={item.nome} className={`rounded-3xl p-6 text-center shadow-lg ${item.cor}`}>
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow">
                    👩‍⚕️
                  </div>
                  <h3 className="text-xl font-black">{item.nome}</h3>
                  <p className="mt-2 font-semibold text-slate-700">{item.cargo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="instagram" className="bg-[#FDEBF3] py-16">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-black text-[#2C8FC7]">Instagram</h2>
            <p className="mx-auto mb-8 max-w-2xl leading-8 text-slate-700">
              Divulgue novidades, rotina da clínica, dicas para famílias e conteúdos infantis.
              Nesta versão econômica, o botão leva diretamente ao Instagram, sem custo extra com
              integrações avançadas.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-[#2C8FC7] px-6 py-3 font-bold text-white shadow"
            >
              Abrir Instagram
            </a>
          </div>
        </section>

        <section id="localizacao" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-center text-3xl font-black text-[#2C8FC7]">Localização</h2>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="Mapa da clínica"
                src={googleMapsEmbed}
                width="100%"
                height="380"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contato" className="bg-[#EAF6FC] py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="mb-8 text-center text-3xl font-black text-[#2C8FC7]">
                Entre em contato
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-3 leading-8">
                    <strong>WhatsApp:</strong>
                    <a
                      href={whatsappAgendamentoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 font-bold text-[#2C8FC7]"
                    >
                      (62) 99999-9999
                    </a>
                  </p>
                  <p className="mb-3 leading-8">
                    <strong>Telefone:</strong> (62) 3333-3333
                  </p>
                  <p className="mb-3 leading-8">
                    <strong>E-mail:</strong> atendimento@minimundotiaari.com.br
                  </p>
                  <p className="mb-6 leading-8">
                    <strong>Endereço:</strong> Goiânia - GO
                  </p>

                  <a
                    href={whatsappInfoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full bg-[#5DBB63] px-6 py-3 font-bold text-white"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-full border px-4 py-3"
                  />
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full rounded-full border px-4 py-3"
                  />
                  <textarea
                    placeholder="Mensagem"
                    rows={5}
                    className="w-full rounded-2xl border px-4 py-3"
                  />
                  <button
                    type="button"
                    className="w-full rounded-full bg-[#2C8FC7] py-3 font-bold text-white"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2C8FC7] py-6 text-center text-white">
        <p>© 2026 Mini Mundo Tia Ari</p>
      </footer>
    </div>
  );
}
