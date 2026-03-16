// Coloque a logo da clínica na pasta /public com o nome: logo.png
// Depois edite os dados abaixo com as informações reais da clínica.

import { motion } from "framer-motion";
import { Instagram, MapPin, Phone, MessageCircle, HeartHandshake, Star, Clock3, Users, Stethoscope, ChevronRight } from "lucide-react";

export default function MiniMundoTiaAri() {
  const dadosClinica = {
    nome: "Mini Mundo Tia Ari",
    subtitulo: "Clínica Multidisciplinar Especializada em Transtornos da Fala e Linguagem",
    whatsappNumero: "5562984224831",
    telefone: "(62) 98422-4831",
    email: "atendimento@minimundotiaari.com.br",
    endereco: "Goiânia - GO",
    horario: "Atendimento mediante agendamento",
    instagramUrl: "https://instagram.com/minimundotiaari",
    googleMapsEmbed:
      "https://www.google.com/maps?q=Goi%C3%A2nia%20GO&output=embed",
  };

  const mensagemInfo =
    "Olá, gostaria de mais informações sobre os atendimentos da Mini Mundo Tia Ari.";
  const mensagemAgendamento =
    "Olá, gostaria de agendar um atendimento na Mini Mundo Tia Ari.";

  const whatsappInfoLink = `https://wa.me/${dadosClinica.whatsappNumero}?text=${encodeURIComponent(
    mensagemInfo
  )}`;
  const whatsappAgendamentoLink = `https://wa.me/${dadosClinica.whatsappNumero}?text=${encodeURIComponent(
    mensagemAgendamento
  )}`;

  const especialidades = [
    {
      titulo: "Transtornos da Fala",
      texto: "Atendimento especializado para crianças com alterações no desenvolvimento da fala.",
      cor: "bg-[#F8D6A5]",
      emoji: "🗣️",
    },
    {
      titulo: "Linguagem",
      texto: "Acompanhamento focado no desenvolvimento da comunicação e da linguagem infantil.",
      cor: "bg-[#F6A8C8]",
      emoji: "💬",
    },
    {
      titulo: "Apraxia de Fala na Infância",
      texto: "Suporte especializado para crianças com dificuldades no planejamento motor da fala.",
      cor: "bg-[#B8E3D0]",
      emoji: "🧠",
    },
    {
      titulo: "TDL",
      texto: "Atendimento para transtorno do desenvolvimento da linguagem com plano individualizado.",
      cor: "bg-[#B8D9F0]",
      emoji: "📘",
    },
    {
      titulo: "DPAC",
      texto: "Acompanhamento em demandas relacionadas ao processamento auditivo central.",
      cor: "bg-[#F8D6A5]",
      emoji: "🎧",
    },
    {
      titulo: "Atendimentos Particulares e Planos",
      texto: "A clínica informa atendimento particular e também por planos de saúde.",
      cor: "bg-[#F6A8C8]",
      emoji: "🩺",
    },
  ];

  const equipe = [
    {
      nome: "Ariane Secundo",
      cargo: "Especialista e palestrante",
      descricao: "A página da clínica destaca palestras com Ariane Secundo e a atuação especializada no desenvolvimento infantil.",
      cor: "bg-[#B8D9F0]",
      emoji: "👩‍⚕️",
    },
    {
      nome: "Equipe Multidisciplinar",
      cargo: "Atendimento infantil especializado",
      descricao: "Profissionais voltados para fala, linguagem, comunicação, aprendizado e desenvolvimento infantil.",
      cor: "bg-[#FDEBF3]",
      emoji: "🧑‍⚕️",
    },
    {
      nome: "Unidades de Atendimento",
      cargo: "Goiânia e regiões",
      descricao: "A presença de matriz em Goiânia e links para Noroeste e Santo Antônio reforça uma estrutura com mais de um ponto de atendimento.",
      cor: "bg-[#EAF7F0]",
      emoji: "🏥",
    },
  ];

  const diferenciais = [
    {
      titulo: "Especialização em fala e linguagem",
      texto: "O foco principal da clínica está em transtornos da fala, linguagem, apraxia de fala na infância, TDL e DPAC.",
      icon: HeartHandshake,
    },
    {
      titulo: "Equipe multidisciplinar",
      texto: "A comunicação do serviço destaca cuidado integrado para diferentes necessidades do desenvolvimento infantil.",
      icon: Users,
    },
    {
      titulo: "Atendimento por planos de saúde",
      texto: "Além de atendimentos particulares, a clínica informa suporte também para convênios.",
      icon: Star,
    },
    {
      titulo: "Agendamento rápido",
      texto: "A chamada principal da página direciona para agendamentos diretos pelo WhatsApp.",
      icon: MessageCircle,
    },
  ];

  const beneficios = [
    "Especialização em fala, linguagem, TDL, DPAC e apraxia",
    "Agendamento simples e direto pelo WhatsApp",
    "Atendimento particular e por planos de saúde",
    "Possíveis unidades em Goiânia, Noroeste e Santo Antônio",
  ];

  const depoimentos = [
    {
      nome: "Famílias atendidas",
      texto: "O site foi estruturado para transmitir acolhimento, clareza e confiança desde o primeiro contato.",
    },
    {
      nome: "Comunicação mais clara",
      texto: "Agora a apresentação destaca com mais força as áreas de especialidade realmente mostradas na página oficial.",
    },
    {
      nome: "Contato facilitado",
      texto: "Com WhatsApp em evidência e convênios destacados, o site ficou mais alinhado ao que as famílias procuram.",
    },
  ];

  const faq = [
    {
      pergunta: "Como faço para agendar um atendimento?",
      resposta: "Você pode agendar diretamente pelo botão de WhatsApp no site.",
    },
    {
      pergunta: "Quais áreas a clínica destaca?",
      resposta: "A apresentação institucional destaca transtornos da fala, linguagem, apraxia de fala na infância, TDL e DPAC.",
    },
    {
      pergunta: "A clínica atende particular e convênios?",
      resposta: "Sim. A página informa atendimentos particulares e também por planos de saúde.",
    },
  ];

  const anim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#D9ECF7] text-slate-800">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-[0.08]">
        <img src="/logo.png" alt="Mini Mundo Tia Ari" className="w-full max-w-[950px]" />
      </div>

      <a
        href={whatsappInfoLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#5DBB63] px-5 py-3 text-sm font-bold text-white shadow-2xl transition hover:scale-105"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-[#7CC4EC]/30 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo Mini Mundo Tia Ari" className="h-14 w-auto rounded-xl" />
            <div>
              <h1 className="text-xl font-black text-[#2C8FC7]">{dadosClinica.nome}</h1>
              <p className="text-sm text-slate-600">{dadosClinica.subtitulo}</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700 md:gap-6">
            <a href="#inicio" className="hover:text-[#2C8FC7]">Início</a>
            <a href="#sobre" className="hover:text-[#2C8FC7]">Sobre</a>
            <a href="#especialidades" className="hover:text-[#2C8FC7]">Especialidades</a>
            <a href="#equipe" className="hover:text-[#2C8FC7]">Equipe</a>
            <a href="#depoimentos" className="hover:text-[#2C8FC7]">Depoimentos</a>
            <a href="#faq" className="hover:text-[#2C8FC7]">Dúvidas</a>
            <a href="#contato" className="hover:text-[#2C8FC7]">Contato</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }}>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#2C8FC7] shadow">
              Clínica infantil com cuidado, carinho e acolhimento
            </span>

            <h2 className="mb-6 text-4xl font-black leading-tight text-[#2C8FC7] md:text-6xl">
              Um site profissional para uma clínica infantil cheia de acolhimento
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-700">
              A {dadosClinica.nome} apresenta uma proposta especializada em transtornos da fala, linguagem, apraxia de fala na infância, TDL e DPAC, com comunicação acolhedora e foco no desenvolvimento infantil.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappAgendamentoLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2C8FC7] px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Agendar pelo WhatsApp
              </a>

              <a
                href="#especialidades"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#2C8FC7] shadow-lg transition hover:-translate-y-0.5"
              >
                Ver especialidades
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {beneficios.map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 px-4 py-3 font-semibold shadow-sm backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-[#F6A8C8]/50 blur-2xl" />
            <div className="absolute -right-2 top-8 h-24 w-24 rounded-full bg-[#F7D46A]/40 blur-2xl" />
            <div className="relative rounded-[2rem] border-4 border-white bg-white/80 p-6 shadow-2xl backdrop-blur-sm">
              <img src="/logo.png" alt="Logo da clínica" className="mx-auto mb-6 w-full max-w-md" />
              <div className="grid gap-4 sm:grid-cols-2">
                {diferenciais.map((item, index) => {
                  const Icon = item.icon;
                  const bg =
                    index === 0
                      ? "bg-[#FDEBF3]"
                      : index === 1
                        ? "bg-[#EAF6FC]"
                        : index === 2
                          ? "bg-[#FFF7E8]"
                          : "bg-[#EAF7F0]";

                  return (
                    <div key={item.titulo} className={`rounded-[1.5rem] p-5 shadow-sm ${bg}`}>
                      <Icon size={22} className="mb-3 text-[#2C8FC7]" />
                      <h3 className="mb-2 text-lg font-black">{item.titulo}</h3>
                      <p className="text-sm leading-6 text-slate-700">{item.texto}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="sobre" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }}>
              <span className="mb-3 inline-block rounded-full bg-[#FDEBF3] px-4 py-2 text-sm font-bold text-[#B95A8D]">
                Sobre a clínica
              </span>
              <h2 className="mb-4 text-3xl font-black text-[#2C8FC7] md:text-4xl">
                Cuidado infantil com atenção ao desenvolvimento e ao acolhimento da família
              </h2>
              <p className="mb-4 leading-8 text-slate-700">
                A {dadosClinica.nome} foi posicionada no site como uma clínica multidisciplinar especializada em fala e linguagem, com visual acolhedor e informações mais próximas do perfil apresentado na bio oficial.
              </p>
              <p className="leading-8 text-slate-700">
                Tudo foi reorganizado para destacar agendamento, especialidades clínicas, planos de saúde, foco infantil e possíveis unidades de atendimento citadas na página institucional.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.6 }} className="rounded-[2rem] bg-[#FFF7E8] p-8 shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <Stethoscope className="text-[#2C8FC7]" />
                <h3 className="text-2xl font-black text-[#2C8FC7]">Por que escolher a clínica?</h3>
              </div>
              <div className="space-y-3">
                {beneficios.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm">
                    <ChevronRight size={18} className="text-[#2C8FC7]" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="especialidades" className="bg-[#EAF6FC] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }}>
              <h2 className="mb-3 text-center text-3xl font-black text-[#2C8FC7] md:text-4xl">
                Especialidades
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-center leading-8 text-slate-700">
                As especialidades abaixo foram ajustadas para refletir os serviços destacados na página institucional da clínica.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {especialidades.map((item, index) => (
                <motion.div
                  key={item.titulo}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={anim}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`rounded-[2rem] p-6 shadow-lg transition hover:-translate-y-1 ${item.cor}`}
                >
                  <div className="mb-4 text-4xl">{item.emoji}</div>
                  <h3 className="mb-3 text-xl font-black text-slate-800">{item.titulo}</h3>
                  <p className="leading-7 text-slate-700">{item.texto}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }}>
              <h2 className="mb-3 text-center text-3xl font-black text-[#2C8FC7] md:text-4xl">Nossa equipe</h2>
              <p className="mx-auto mb-12 max-w-2xl text-center leading-8 text-slate-700">
                A seção foi ajustada para valorizar Ariane Secundo, a equipe multidisciplinar e a estrutura de atendimento mostrada na apresentação pública da clínica.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {equipe.map((item, index) => (
                <motion.div
                  key={item.nome}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={anim}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className={`rounded-[2rem] p-6 text-center shadow-lg ${item.cor}`}
                >
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl shadow-md">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl font-black">{item.nome}</h3>
                  <p className="mt-2 font-semibold text-[#2C8FC7]">{item.cargo}</p>
                  <p className="mt-4 leading-7 text-slate-700">{item.descricao}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="bg-[#FDEBF3] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }}>
              <h2 className="mb-3 text-center text-3xl font-black text-[#2C8FC7] md:text-4xl">Depoimentos</h2>
              <p className="mx-auto mb-12 max-w-2xl text-center leading-8 text-slate-700">
                Aqui você pode mostrar a percepção das famílias sobre a clínica. Os textos atuais são
                exemplos e podem ser trocados por depoimentos reais.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {depoimentos.map((item, index) => (
                <motion.div
                  key={item.nome}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={anim}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-[2rem] bg-white p-6 shadow-lg"
                >
                  <div className="mb-4 flex gap-1 text-[#F2B94B]">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="mb-4 leading-7 text-slate-700">“{item.texto}”</p>
                  <p className="font-black text-[#2C8FC7]">{item.nome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="instagram" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }} className="rounded-[2rem] bg-[#EAF6FC] p-8 shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <Instagram className="text-[#2C8FC7]" />
                <h2 className="text-3xl font-black text-[#2C8FC7]">Instagram</h2>
              </div>
              <p className="mb-6 leading-8 text-slate-700">
                Use esta área para levar as famílias ao Instagram da clínica, divulgar novidades,
                rotina, conteúdos educativos e fortalecer a presença digital da marca.
              </p>
              <a
                href={dadosClinica.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#2C8FC7] px-6 py-3 font-bold text-white shadow-lg"
              >
                <Instagram size={18} /> Abrir Instagram
              </a>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.6 }} className="grid gap-4 sm:grid-cols-3">
              {[
                "Conteúdos educativos",
                "Rotina da clínica",
                "Novidades e avisos",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[2rem] p-6 text-center shadow-lg ${
                    index === 0
                      ? "bg-[#B8D9F0]"
                      : index === 1
                        ? "bg-[#F8D6A5]"
                        : "bg-[#B8E3D0]"
                  }`}
                >
                  <div className="mb-3 text-4xl">📱</div>
                  <h3 className="text-lg font-black">{item}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="localizacao" className="bg-[#EAF6FC] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }} className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-black text-[#2C8FC7] md:text-4xl">Localização</h2>
              <p className="mx-auto max-w-2xl leading-8 text-slate-700">
                Facilite a chegada das famílias com um mapa incorporado e dados de contato visíveis.
              </p>
            </motion.div>

            <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
              <iframe
                title="Mapa da clínica"
                src={dadosClinica.googleMapsEmbed}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }} className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-black text-[#2C8FC7] md:text-4xl">Dúvidas frequentes</h2>
              <p className="leading-8 text-slate-700">
                As respostas foram ajustadas para reforçar as áreas de atuação e a forma de atendimento destacadas publicamente pela clínica.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faq.map((item, index) => (
                <motion.details
                  key={item.pergunta}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={anim}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[1.5rem] bg-[#F8FBFE] p-5 shadow-md"
                >
                  <summary className="cursor-pointer list-none text-lg font-black text-[#2C8FC7]">
                    {item.pergunta}
                  </summary>
                  <p className="pt-3 leading-7 text-slate-700">{item.resposta}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2C8FC7] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="mb-3 text-3xl font-black md:text-4xl">Pronto para falar com a clínica?</h2>
              <p className="max-w-2xl text-lg leading-8 text-white/90">
                Deixe o atendimento mais fácil para as famílias com contato direto, rápido e acolhedor.
              </p>
            </div>
            <a
              href={whatsappAgendamentoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#2C8FC7] shadow-xl"
            >
              <MessageCircle size={18} /> Agendar agora
            </a>
          </div>
        </section>

        <section id="contato" className="bg-[#D9ECF7] py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 rounded-[2rem] border-4 border-white bg-white p-8 shadow-2xl md:grid-cols-2">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.5 }}>
                <h2 className="mb-6 text-3xl font-black text-[#2C8FC7]">Entre em contato</h2>

                <div className="space-y-4 text-slate-700">
                  <div className="flex items-start gap-3 rounded-2xl bg-[#EAF6FC] p-4">
                    <MessageCircle className="mt-1 text-[#2C8FC7]" size={20} />
                    <div>
                      <p className="font-black">WhatsApp</p>
                      <a href={whatsappAgendamentoLink} target="_blank" rel="noreferrer" className="font-semibold text-[#2C8FC7] hover:underline">
                        (62) 98422-4831
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-[#FFF7E8] p-4">
                    <Phone className="mt-1 text-[#2C8FC7]" size={20} />
                    <div>
                      <p className="font-black">Telefone</p>
                      <p>{dadosClinica.telefone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-[#FDEBF3] p-4">
                    <MapPin className="mt-1 text-[#2C8FC7]" size={20} />
                    <div>
                      <p className="font-black">Endereço</p>
                      <p>{dadosClinica.endereco}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-[#EAF7F0] p-4">
                    <Clock3 className="mt-1 text-[#2C8FC7]" size={20} />
                    <div>
                      <p className="font-black">Horário</p>
                      <p>{dadosClinica.horario}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} variants={anim} transition={{ duration: 0.6 }} className="space-y-4">
                <input type="text" placeholder="Seu nome" className="w-full rounded-full border border-[#CFE3F1] px-4 py-3 outline-none focus:border-[#2C8FC7]" />
                <input type="email" placeholder="Seu e-mail" className="w-full rounded-full border border-[#CFE3F1] px-4 py-3 outline-none focus:border-[#2C8FC7]" />
                <input type="text" placeholder="Seu telefone" className="w-full rounded-full border border-[#CFE3F1] px-4 py-3 outline-none focus:border-[#2C8FC7]" />
                <textarea placeholder="Como podemos ajudar?" rows={6} className="w-full rounded-[1.5rem] border border-[#CFE3F1] px-4 py-3 outline-none focus:border-[#2C8FC7]" />
                <button type="button" className="w-full rounded-full bg-[#2C8FC7] py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5">
                  Enviar mensagem
                </button>
                <p className="text-center text-sm text-slate-500">
                  Para um contato mais rápido, use o botão de WhatsApp.
                </p>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2377A7] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Mini Mundo Tia Ari" className="h-12 w-auto rounded-lg bg-white/90 p-1" />
            <div>
              <p className="font-black">{dadosClinica.nome}</p>
              <p className="text-sm text-white/85">{dadosClinica.subtitulo}</p>
            </div>
          </div>
          <div className="text-sm text-white/85">
            © 2026 {dadosClinica.nome} - Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
