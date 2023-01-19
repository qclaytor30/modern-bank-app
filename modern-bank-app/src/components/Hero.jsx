import styles from '../style';
import { discount, robot } from '../assets';
import Getstarted from './GetStarted';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt='discount logo' className='w-[32px] h-[32px]'></img>
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Discount for {''}
          <span className='text-white'>1 month</span> Account
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          The next <br className='sm:block hidden'/> {''} 
          <span className='text-gradient'>Generation</span> {''} 
          <br></br>
          Payment Method.
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <Getstarted />

        </div>
      </div>
    </div>
  </section>
)

export default Hero