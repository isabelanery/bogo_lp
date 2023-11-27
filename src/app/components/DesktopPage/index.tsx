export default function DesktopPage() {
  return (
    <section className={`bg-cover bg-center min-h-[100vh] bg-bogo-left flex items-center mb:hidden`}>
      <div className='flex items-center justify-center'>
        {/* header */}
        <div className='p-[50px]  max-w-[500px]'>
          <img
            src="logo-2-white.webp"
            className="brightness-110 max-w-[60%]"
            />
          <p className='font-bold text-white text-[24px] mt-[16px] mb-[16px] pl-[0px]'>
            Você nunca mais vai me ver fazendo uma oferta como essa!
          </p>

          {/* subscribe btn */}
          <div className=''>
            <p className='text-white text-[16px] '>
              Garanta o seu acesso ao MGC, todos os bônus, ao Clube de Aromaterapia e à gravação exclusiva das minhas Mentorias pelo resto da sua vida, por um valor absurdamente acessível.
            </p>

            <button className="subscribe hover:bg-main-bright font-medium rounded-full text-[24px] text-white bg-main-neon uppercase mt-[24px] mb-[16px] pt-[12px] pb-[12px] pl-[20px] pr-[20px]">
              <p className="">
                Quero participar
              </p>

            </button>
          </div>

        </div>
        <img
          src="thumbs-bogo-infinito-2.webp"
          className="max-w-[40%] dlg:max-w-[40%] brightness-110"
        />
      </div>
    </section>
  )
}
