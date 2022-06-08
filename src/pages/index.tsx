import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

import styles from '@/styles/Home.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';

const HomePage = ({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <HomePageComponent {...props} />;
};

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

const HomePageComponent: NextPage = () => {
  return (
    <>
      <section className='px-12 py-10'>
        <header className='flex flex-row items-center justify-between'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
          <button className='text-base font-bold'>Back to main page</button>
        </header>
        <p className='pt-10 text-center text-3xl font-bold'>
          Tired of the old way of selling online?
        </p>
        <p className='pt-5 text-center font-light'>
          Try BIG Tenant, feel the new experience of online selling in virtual
          world. Register, earn money, and let’s get rich!{' '}
        </p>
        <div className='mt-5 flex w-full justify-center'>
          <PrimaryBtn text='Register Now' />
        </div>
      </section>
      <div className={styles.img_background} />
    </>
  );
};

export default HomePage;
