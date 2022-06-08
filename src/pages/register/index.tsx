import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { OwnerData, setOwnerData } from '@/redux/slicer/appstate.slicer';

interface DefaultData extends OwnerData {
  phonePrefix: string;
  phoneNumber: string;
}

const defaultData: DefaultData = {
  phonePrefix: '+62',
  ownerEmail: '',
  ownerPhone: '',
  ownerFullname: '',
  ownerIdentityCard: '',
  phoneNumber: '',
};

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

const RegisterPageComponent: NextPage = () => {
  const [values, setValues] = useState(defaultData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();

  const isDisabled = (): boolean => {
    if (
      !values.ownerEmail ||
      !values.ownerPhone ||
      !values.ownerFullname ||
      !values.ownerIdentityCard
    ) {
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

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (values.phonePrefix && values.phoneNumber) {
      const temp = { ...values };
      temp.ownerPhone = `${values.phonePrefix}${values.phoneNumber}`;
      setValues(temp);
    }
  }, [values.phonePrefix, values.phoneNumber]);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    const temp = { ...values };
    if (!selectedFile) {
      temp.ownerIdentityCard = '';
      setValues(temp);
      return;
    }

    const objectUrl: string = URL.createObjectURL(selectedFile);
    temp.ownerIdentityCard = objectUrl;
    setValues(temp);

    // free memory when ever this component is unmounted
    // return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setOwnerData(values));
    !isDisabled() ? router.push('/register2') : null;
  };

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
          <form onSubmit={handleSubmit} className='lg:pt-28'>
            <h4>Owner full name</h4>
            <input
              onChange={(e) =>
                _updateMasterState('ownerFullname', e.target.value)
              }
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='John Doe'
            />
            <h4 className='mt-5'>Owner Email</h4>
            <input
              onChange={(e) => _updateMasterState('ownerEmail', e.target.value)}
              type='text'
              className='mt-4 w-full rounded-lg border-none px-8 py-6'
              placeholder='name@email.com'
            />
            <h4 className='mt-5 mb-4'>Owner Phone Number</h4>
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
            <h4 className='mt-5'>Owner Identity Card</h4>
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
                {selectedFile && values.ownerIdentityCard && (
                  <Image
                    useSkeleton
                    src={values.ownerIdentityCard}
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

export default RegisterPage;
