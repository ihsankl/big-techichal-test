import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';

export default function FinishPage({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <FinishPageComponent {...props} />;
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

const FinishPageComponent: FC = () => {
  return (
    <div className='flex flex-row'>
      <section className='w-full'>
        <header className='flex flex-row items-center justify-between px-12 py-10'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
        </header>
        <div className={`h-96 w-full ${styles.finish_bg}`} />
        <h1 className='mt-11 text-center'>Your request has been submitted</h1>
        <p className='mt-6 text-center font-thin'>
          We will notify you for further update max 2x24 👌
        </p>
        <div className='flex w-full justify-center'>
          <PrimaryBtn text='Back to Home' className='mt-14' />
        </div>
      </section>
    </div>
  );
};
