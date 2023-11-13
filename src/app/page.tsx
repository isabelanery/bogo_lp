import Image from 'next/image'

export default function Home() {
  return (
    <section className="bg-cover bg-center min-h-[100vh] bg-bogo-1">
      <div className='flex mb:flex-col min-h-[100vh] mb:justify-center'>

        {/* header */}
        <div className='flex mb:items-center mb:justify-around pt-[36px]'>
          <img
            src="logo-2-white.webp"
            className="max-w-[15%] mb:max-w-[30%] brightness-110 m-l[30]  pl-[10px]"
            />
          <p className='text-white max-w-[55%] pb-[10px]'>
            A oferta <b>mais absurda</b> que eu já fiz, dará a você <b>acesso vitalício</b>.
          </p>
        </div>

        <div className='flex flex-col min-h-[60%] mt-[24px] pb-[40px]'>
          {/* thumb produtos */}
          <div className='mb-[12px]'>
            <div className='flex mb:justify-center '>
              <img
                src="thumb-bogo-1.webp"
                className="max-w-[40%]  mb:max-w-[97%] brightness-110"
              />
            </div>

            <div className='w-[100%] mb:relative'>
              <img
                src="mentorias-logo.webp"
                className="max-w-[100px] mb:max-w-[30%] mb:absolute mb:right-[8px] mb:bottom-[1px] brightness-110 mb:"
              />
            </div>
          </div>

          {/* subscribe btn */}
          <div className='flex flex-col items-center'>
            <p className='text-white text-center ml-[24px] mr-[26px] m-[12px]'>
              Você vai ter acesso ao MGC, todos os bônus, ao Clube de Aromaterapia e à gravação exclusiva das minhas Mentorias, <b>pro resto da vida, pagando um valor absurdamente barato.</b>
            </p>

            <button className="subscribe rounded-full text-[24px] text-white bg-main-bright uppercase mt-[20px] pt-[12px] pb-[12px] pl-[20px] pr-[20px]">Quero participar</button>
          </div>
        </div>
      </div>
    </section>
  )
}
