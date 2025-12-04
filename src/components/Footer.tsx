import icon1 from '../assets/footer-icon1.png'
import icon2 from '../assets/footer-icon2.png'
import icon3 from '../assets/footer-icon3.png'
import icon4 from '../assets/footer-icon4.png'
import icon5 from '../assets/footer-icon5.png'
function Footer() {
  return (
    <div className='w-full h-[130px] flex flex-col items-center'>
        <div className='border-t border-[#202020] w-3/4 h-1'></div>
        <div className='flex justify-between w-3/4 h-full items-center pb-[30px]'>
            <span className='font-[CabinetGrotesk] font-normal text-[20px] leading-[112.5%] text-[#FF6600]'>Muhamed Muhsin P</span>
            <div className='flex justify-between gap-5 w-[20%] h-[20%]'>
                <img src={icon1.src} alt="" className='cursor-pointer'/>
                <img src={icon2.src} alt="" className='cursor-pointer'/>
                <img src={icon3.src} alt="" className='cursor-pointer'/>
                <img src={icon4.src} alt="" className='cursor-pointer'/>
                <img src={icon5.src} alt="" className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Footer