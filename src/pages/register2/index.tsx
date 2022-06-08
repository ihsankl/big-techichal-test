import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { RootReducer } from '@/redux/slicer';
import {
  BusinessData,
  OwnerData,
  setBusinessData,
} from '@/redux/slicer/appstate.slicer';

interface DefaultData extends BusinessData {
  phonePrefix: string;
  phoneNumber: string;
}

const defaultData: DefaultData = {
  businessCity: '',
  businessName: '',
  businessCompleteAddress: '',
  businessCountry: 'Indonesia',
  businessPINLocation: '',
  businessPhoneNumber: '',
  businessProfilePicture: '',
  businessState: '',
  phoneNumber: '',
  phonePrefix: '+62',
};

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

const Register2PageComponent: NextPage = () => {
  const [values, setValues] = useState(defaultData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const ownerData = useSelector<RootReducer>(
    (state) => state.AppState.ownerData
  ) as OwnerData;

  const isDisabled = (): boolean => {
    if (
      !values.businessName ||
      !values.businessCompleteAddress ||
      !values.businessCountry ||
      !values.businessPINLocation ||
      !values.businessPhoneNumber ||
      !values.businessProfilePicture
    ) {
      return true;
    }
    return false;
  };

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const _updateMasterState = (
    attrName: keyof DefaultData,
    value: HTMLInputElement['value'] | HTMLSelectElement['value']
  ) => {
    const temp = { ...values };
    temp[attrName] = value;
    setValues(temp);
  };

  useEffect(() => {
    // if some of owner data is not filled, go back to previous page
    if (
      !ownerData.ownerEmail ||
      !ownerData.ownerPhone ||
      !ownerData.ownerFullname ||
      !ownerData.ownerIdentityCard
    ) {
      router.back();
    }
  }, [ownerData]);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    const temp = { ...values };
    if (!selectedFile) {
      temp.businessProfilePicture = '';
      setValues(temp);
      return;
    }

    const objectUrl: string = URL.createObjectURL(selectedFile);
    temp.businessProfilePicture = objectUrl;
    setValues(temp);

    // free memory when ever this component is unmounted
    // return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile]);

  useEffect(() => {
    if (values.phonePrefix && values.phoneNumber) {
      const temp = { ...values };
      temp.businessPhoneNumber = `${values.phonePrefix}${values.phoneNumber}`;
      setValues(temp);
    }
  }, [values.phonePrefix, values.phoneNumber]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setBusinessData(values));
    !isDisabled() ? router.push('/register3') : null;
  };

  return (
    <div className='flex flex-row'>
      <Stepper activeItems={[0, 1]} />
      <section className='w-full'>
        <header className='flex flex-row items-center justify-between px-12 py-10 lg:hidden'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
        </header>
        <div className='px-12 lg:px-24'>
          <form onSubmit={handleSubmit} className='lg:pt-28'>
            <h4>Business name</h4>
            <input
              onChange={(e) =>
                _updateMasterState('businessName', e.target.value)
              }
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='RM. Makmur Bahagia'
            />
            <h4 className='mt-5 mb-4'>Business Phone Number</h4>
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
            <div className='flex flex-col gap-2 lg:flex-row'>
              <div className='flex flex-1 flex-col'>
                <h4 className='mt-5 mb-4'>Country</h4>
                <div className={styles.border}>
                  <select
                    onChange={(e) =>
                      _updateMasterState('businessCountry', e.target.value)
                    }
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
                    onChange={(e) =>
                      _updateMasterState('businessState', e.target.value)
                    }
                    name='country'
                    id='country'
                    className='w-full rounded-lg border-none px-8 py-6'
                  >
                    <option value=''>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-1 flex-col'>
                <h4 className='mt-5 mb-4'>City</h4>
                <div className={styles.border}>
                  <select
                    onChange={(e) =>
                      _updateMasterState('businessCity', e.target.value)
                    }
                    name='country'
                    id='country'
                    className='w-full rounded-lg border-none px-8 py-6'
                  >
                    <option value=''>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
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
              onChange={(e) =>
                _updateMasterState('businessCompleteAddress', e.target.value)
              }
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='Type complete address'
            />
            <h4 className='mt-5'>PIN Location</h4>
            <input
              onChange={(e) =>
                _updateMasterState('businessPINLocation', e.target.value)
              }
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='Type your business address'
            />
            <h4 className='mt-5'>Business Profile Picture</h4>
            <label htmlFor='upload'>
              <div
                className={`${styles.border} ${styles.input_identity} mt-4 h-72`}
              >
                <input
                  type='file'
                  name=''
                  className='hidden'
                  onChange={onSelectFile}
                  id='upload'
                />
                {selectedFile && values.businessProfilePicture && (
                  <Image
                    useSkeleton
                    src={values.businessProfilePicture}
                    layout='responsive'
                    objectFit='contain'
                    height='25em'
                    width='100%'
                    alt='Icon'
                  />
                )}
              </div>
            </label>
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
