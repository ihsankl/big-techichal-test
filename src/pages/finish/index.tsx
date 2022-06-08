import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { RootReducer } from '@/redux/slicer';
import {
  AccountData,
  BusinessData,
  OwnerData,
} from '@/redux/slicer/appstate.slicer';

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

const FinishPageComponent: NextPage = () => {
  const ownerData = useSelector<RootReducer>(
    (state) => state.AppState.ownerData
  ) as OwnerData;
  const accountData = useSelector<RootReducer>(
    (state) => state.AppState.accountData
  ) as AccountData;
  const businessData = useSelector<RootReducer>(
    (state) => state.AppState.businessData
  ) as BusinessData;

  const router = useRouter();

  useEffect(() => {
    // if there is data missing, redirect to previous page
    if (
      !ownerData.ownerEmail ||
      !ownerData.ownerFullname ||
      !ownerData.ownerIdentityCard ||
      !accountData.accountEmail ||
      !accountData.accountPhone
    ) {
      router.back();
    }
  }, [ownerData, accountData, businessData]);

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
          <PrimaryBtn
            onClick={() => router.push('/')}
            text='Back to Home'
            className='mt-14'
          />
        </div>
      </section>
    </div>
  );
};
