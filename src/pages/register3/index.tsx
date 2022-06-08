import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';

export default function Register3Page({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Register3PageComponent {...props} />;
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

const Register3PageComponent: FC = () => {
  return (
    <div className='flex flex-row'>
      <Stepper activeItems={[0, 1, 2]} />
      <section className='w-full'>
        <header className='flex flex-row items-center justify-between px-12 py-10 lg:hidden'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
        </header>
        <div className='px-12 lg:px-24'>
          <form onSubmit={(e) => e.preventDefault()} className='lg:pt-28'>
            <h4>Email</h4>
            <input
              type='email'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='example@email.com'
            />
            <h4 className='mt-5 mb-4'>Phone Number</h4>
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
            <PrimaryBtn text='Next' className='my-5 w-full' isSubmit />
          </form>
        </div>
      </section>
    </div>
  );
};
