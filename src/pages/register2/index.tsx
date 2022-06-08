import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';

export default function Register2Page({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Register2PageComponent {...props} />;
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

const Register2PageComponent: FC = () => {
  return (
    <div className='flex flex-row'>
      <Stepper activeItems={[0, 1]} />
      <section className='w-full'>
        <header className='flex flex-row items-center justify-between px-12 py-10 lg:hidden'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
        </header>
        <div className='px-12 lg:px-24'>
          <form onSubmit={(e) => e.preventDefault()} className='lg:pt-28'>
            <h4>Business name</h4>
            <input
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='RM. Makmur Bahagia'
            />
            <h4 className='mt-5 mb-4'>Business Phone Number</h4>
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
            <div className='flex flex-col gap-2 lg:flex-row'>
              <div className='flex flex-1 flex-col'>
                <h4 className='mt-5 mb-4'>Country</h4>
                <div className={styles.border}>
                  <select
                    name='country'
                    id='country'
                    className='w-full rounded-lg border-none px-8 py-6'
                  >
                    <option value='Indonesia'>Indonesia</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-1 flex-col'>
                <h4 className='mt-5 mb-4'>Province/State</h4>
                <div className={styles.border}>
                  <select
                    name='country'
                    id='country'
                    className='w-full rounded-lg border-none px-8 py-6'
                  >
                    <option value=''>Select</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-1 flex-col'>
                <h4 className='mt-5 mb-4'>City</h4>
                <div className={styles.border}>
                  <select
                    name='country'
                    id='country'
                    className='w-full rounded-lg border-none px-8 py-6'
                  >
                    <option value=''>Select</option>
                  </select>
                </div>
              </div>
            </div>
            <small className='mt-4 text-gray-400'>
              If your location is not available, it means we haven&apos;t
              reached that area yet
            </small>
            <h4 className='mt-5'>Complete Address</h4>
            <input
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='Type complete address'
            />
            <h4 className='mt-5'>PIN Location</h4>
            <input
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='Type your business address'
            />
            <h4 className='mt-5'>Business Profile Picture</h4>
            <div
              className={`${styles.border} ${styles.input_identity} mt-4 h-72`}
            />
            <PrimaryBtn text='Next' className='my-5 w-full' isSubmit />
          </form>
        </div>
      </section>
    </div>
  );
};
