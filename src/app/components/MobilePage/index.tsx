export default function MobilePage() {
  return (
    <section className="bg-cover bg-center min-h-[100vh] bg-bogo-mb dk:hidden dlg:hidden">
      <div className='flex mb:flex-col mb:min-h-[100vh] mb:justify-center'>

        {/* header */}
        <div className='mb:flex mb:items-center mb:justify-around mb:pt-[36px]'>
          <img
            src="logo-2-white.webp"
            className="max-w-[15%] mb:max-w-[30%] brightness-110 m-l[30]  mb:pl-[10px]"
            />
          <p className='text-white max-w-[55%] pb-[10px]'>
            Você nunca mais vai me ver fazendo uma oferta como essa!
          </p>
        </div>

        <div className='flex flex-col-reverse mb:flex-col mb:min-h-[60%] mb:mt-[24px] mb:pb-[40px]'>
          {/* thumb produtos */}
          <div className='mb-[12px]'>
            <img
              src="thumbs-bogo-infinito-2.webp"
              className="mb:max-w-[97%] brightness-110"
            />
          </div>

          {/* subscribe btn */}
          <div className='flex flex-col mb:items-center'>
            <p className='text-white mb:text-center ml-[24px] mr-[26px] m-[12px]'>
              Garanta o seu acesso ao MGC, todos os bônus, ao Clube de Aromaterapia e à gravação exclusiva das minhas Mentorias pelo resto da sua vida, por um valor absurdamente acessível.
            </p>

            <button className="subscribe rounded-full text-[24px] text-white bg-main-bright uppercase mt-[20px] pt-[12px] pb-[12px] pl-[20px] pr-[20px]">Quero participar</button>
          </div>
        </div>
      </div>
    </section>
  )
}
