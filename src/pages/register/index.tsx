import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';

const RegisterPage = ({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <RegisterPageComponent {...props} />;
};

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

const RegisterPageComponent: FC = () => {
  return (
    <div className='flex flex-row'>
      {/* left side (hide when on small screen) */}
      <Stepper activeItems={[0]} />
      {/* right side */}
      <section className='w-full'>
        <header className='flex flex-row items-center justify-between px-12 py-10 lg:hidden'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
        </header>
        <div className='px-12 lg:px-24'>
          <form onSubmit={(e) => e.preventDefault()} className='lg:pt-28'>
            <h4>Owner full name</h4>
            <input
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='John Doe'
            />
            <h4 className='mt-5'>Owner Email</h4>
            <input
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='name@email.com'
            />
            <h4 className='mt-5 mb-4'>Owner Phone Number</h4>
            <div className='flex flex-row items-center justify-center gap-5'>
              <div className={styles.border}>
                <select
                  name='area_code'
                  id='area_code'
                  className='rounded-lg border-none px-8 py-6'
                >
                  <option value='+62'>+62</option>
                </select>
              </div>
              <input
                type='number'
                className='w-full rounded-lg border-none px-8 py-6'
                placeholder='8123123'
              />
            </div>
            <h4 className='mt-5'>Owner Identity Card</h4>
            <div
              className={`${styles.border} ${styles.input_identity} mt-4 h-72`}
            />
            <PrimaryBtn text='Next' className='mt-5 w-full' isSubmit />
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
