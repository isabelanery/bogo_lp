export default function Footer() {
  const content = {
    mgc: "A formação Método Gota Consciência é a única no mercado de aromaterapia que te oferece um conhecimento profundo sobre óleos essenciais, unindo saberes científicos e ancestrais.",
    biblioteca: "Análises especiais, estudos e pesquisas sobre a composição de diversos óleos essenciais, exames laboratoriais, estudos clínicos e muito mais.",
    comunidade: "Dentro da Comunidade da Atobás, você terá à sua disposição um ambiente dedicado à interação, para que você possa aprender comigo e com outras aromaterapeutas que vibram a mesma frequência que a sua.",
    calculadora: "Com a nova calculadora de diluição, você poderá criar sinergias e fazer formulações cosméticas com óleos essenciais de forma rápida, simples e precisa.",
    clube: "Aqui você vai assistir às minhas lives exclusivas, cafés aromáticos, séries especiais, palestras e vai entender exatamente como eu enxergo os óleos essenciais.",
    mentorias: "Pela primeira vez na história, eu vou disponibilizar a gravação integral de todas as minhas mentorias, com aulas profundas que te ajudarão a virar as suas próprias chaves de conhecimento através das experiências de outras Atobás.",
  }

  return (
    <div className="flex flex-col items-center bg-main-dark p-[28px] pb-[4px]">
      <p className="text-white text-[20px] relative">Você terá acesso a:</p>

      <div className="mb:flex-col flex min-w-[100%] items-center justify-around mt-[-12px] mb:mt-[36px] mb:mb-[52px]">
          <img
            src="mgc-logo.webp"
            className="max-w-[100px] dlg:max-w-[120px] text-white mr-[20px] mb:mr-[0px]"
          />

          <img
            src="biblioteca-cientifica.webp"
            className="max-w-[160px] dlg:max-w-[180px] text-white mr-[20px] mb:mr-[0px] mb:mt-[36px]"
          />

          <img
            src="comunidade-logo.webp"
            className="max-w-[160px] dlg:max-w-[180px] text-white mr-[20px] mt-[12px] mb:mr-[0px] mb:mt-[60px]"
          />

          <img
            src="calculadora-logo.webp"
            className="max-w-[160px] dlg:max-w-[180px] text-white mr-[0px] mt-[16px] mb:mr-[0px] mb:mt-[36px]"
          />

          <img
            src="clube-de-aromaterapia-logo.webp"
            className="max-w-[184px] dlg:max-w-[204px] text-white mr-[0px] mt-[0px] mb:mr-[0px] "
          />

          <img
            src="mentorias-logo.webp"
            className="max-w-[160px] dlg:max-w-[180px] mt-[10px] mb:mr-[0px] mb:mt-[0px]"
            data-tooltip-target="tooltip-default"
            data-tooltip-trigger="hover"
          />
      </div>
    </div>
  )
}
