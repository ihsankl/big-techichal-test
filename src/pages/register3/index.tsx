import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { RootReducer } from '@/redux/slicer';
import {
  AccountData,
  BusinessData,
  setAccountData,
} from '@/redux/slicer/appstate.slicer';

interface DefaultData extends AccountData {
  phonePrefix: string;
  phoneNumber: string;
}

const defaultData: DefaultData = {
  accountEmail: '',
  accountPhone: '',
  phoneNumber: '',
  phonePrefix: '+62',
};

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

const Register3PageComponent: NextPage = () => {
  const [values, setValues] = useState(defaultData);

  const router = useRouter();
  const dispatch = useDispatch();

  const businessData = useSelector<RootReducer>(
    (state) => state.AppState.businessData
  ) as BusinessData;

  const isDisabled = (): boolean => {
    if (!values.accountEmail || !values.accountPhone) {
      return true;
    }
    return false;
  };

  const _updateMasterState = (
    attrName: keyof DefaultData,
    value: HTMLInputElement['value'] | HTMLSelectElement['value']
  ) => {
    const temp = { ...values };
    temp[attrName] = value;
    setValues(temp);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setAccountData(values));
    !isDisabled() ? router.push('/review') : null;
  };

  useEffect(() => {
    if (
      !businessData.businessCity ||
      !businessData.businessName ||
      !businessData.businessCompleteAddress ||
      !businessData.businessCountry ||
      !businessData.businessPINLocation ||
      !businessData.businessPhoneNumber ||
      !businessData.businessProfilePicture
    ) {
      router.back();
    }
  }, [businessData]);

  useEffect(() => {
    if (values.phonePrefix && values.phoneNumber) {
      const temp = { ...values };
      temp.accountPhone = `${values.phonePrefix}${values.phoneNumber}`;
      setValues(temp);
    }
  }, [values.phonePrefix, values.phoneNumber]);

  return (
    <div className='flex flex-row'>
      <Stepper activeItems={[0, 1, 2]} />
      <section className='w-full'>
        <header className='flex flex-row items-center justify-between px-12 py-10 lg:hidden'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
        </header>
        <div className='px-12 lg:px-24'>
          <form onSubmit={handleSubmit} className='lg:pt-28'>
            <h4>Email</h4>
            <input
              type='email'
              onChange={(e) =>
                _updateMasterState('accountEmail', e.target.value)
              }
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='example@email.com'
            />
            <h4 className='mt-5 mb-4'>Phone Number</h4>
            <div className='flex flex-row items-center justify-center gap-5'>
              <div className={styles.border}>
                <select
                  onChange={(e) =>
                    _updateMasterState('phonePrefix', e.target.value)
                  }
                  name='area_code'
                  id='area_code'
                  className='rounded-lg border-none px-8 py-6'
                >
                  <option value='+62'>+62</option>
                </select>
              </div>
              <input
                onChange={(e) =>
                  _updateMasterState('phoneNumber', e.target.value)
                }
                type='number'
                className='w-full rounded-lg border-none px-8 py-6'
                placeholder='8123123'
              />
            </div>
            <PrimaryBtn
              disabled={isDisabled()}
              text='Next'
              className='my-5 w-full'
              isSubmit
            />
          </form>
        </div>
      </section>
    </div>
  );
};
