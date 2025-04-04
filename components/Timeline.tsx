export default function Timeline() {
  const phases = [
    'Análise do Caso',
    'Estratégia de Defesa',
    'Acompanhamento Processual',
    'Recursos Necessários',
    'Execução Penal',
    'Conclusão do Caso'
  ];

  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">FASES DO PROCESSO CRIMINAL</h2>
        <div className="relative">
          <div className="timeline-line"></div>
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-8 pb-12">
              <div className="timeline-dot"></div>
              <h3 className="text-xl font-semibold gold-text mb-2">{`${index + 1}. ${phase}`}</h3>
              <p className="text-gray-400">Descrição detalhada da fase do processo criminal.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}