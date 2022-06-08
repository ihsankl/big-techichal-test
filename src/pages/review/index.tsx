import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { RootReducer } from '@/redux/slicer';
import {
  AccountData,
  BusinessData,
  OwnerData,
} from '@/redux/slicer/appstate.slicer';

export default function ReviewPage({
  ...props
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ReviewPageComponent {...props} />;
}

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

const ReviewPageComponent: NextPage = () => {
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

  return (
    <div className='flex flex-row'>
      <Stepper activeItems={[0, 1, 2, 3, 4, 5]} />
      <section className='w-full'>
        <header className='flex flex-row items-center justify-between px-12 py-10 lg:hidden'>
          <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
        </header>
        <div className='px-12 lg:px-24 lg:pt-28'>
          {/* owner */}
          <h4>Owner Information</h4>
          <table className={`${styles.table_border} my-4 w-full`}>
            <tbody>
              <tr>
                <td>
                  <h4>Owner full name</h4>
                </td>
                <td>{ownerData.ownerFullname}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h4>Owner email</h4>
                </td>
                <td>{ownerData.ownerEmail}</td>
              </tr>
              <tr>
                <td>
                  <h4>Owner phone number</h4>
                </td>
                <td>{ownerData.ownerPhone}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h4>Owner identity Card</h4>
                  <div
                    className={`h-96 w-full ${
                      ownerData.ownerIdentityCard ? '' : styles.input_identity
                    }`}
                  >
                    {!!ownerData.ownerIdentityCard && (
                      <Image
                        useSkeleton
                        src={ownerData.ownerIdentityCard}
                        layout='responsive'
                        objectFit='contain'
                        height='30em'
                        width='100%'
                        alt='Icon'
                      />
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* business */}
          <h4>Business information</h4>
          <table className={`${styles.table_border} my-4 w-full`}>
            <tbody>
              <tr>
                <td>
                  <h4>Business name</h4>
                </td>
                <td>{businessData.businessName}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h4>Business phone number</h4>
                </td>
                <td>{businessData.businessPhoneNumber}</td>
              </tr>
              <tr>
                <td>
                  <h4>Country</h4>
                </td>
                <td>{businessData.businessCountry}</td>
              </tr>
              <tr>
                <td>
                  <h4>Province / State</h4>
                </td>
                <td>{businessData.businessState}</td>
              </tr>
              <tr>
                <td>
                  <h4>City</h4>
                </td>
                <td>{businessData.businessCity}</td>
              </tr>
              <tr>
                <td>
                  <h4>Complete Address</h4>
                </td>
                <td>{businessData.businessCompleteAddress}</td>
              </tr>
              <tr>
                <td>
                  <h4>PIN Location</h4>
                </td>
                <td>{businessData.businessPINLocation}</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h4>Business profile picture</h4>
                  <div
                    className={`h-96 w-full ${
                      businessData.businessProfilePicture
                        ? ''
                        : styles.input_identity
                    }`}
                  >
                    {!!businessData.businessProfilePicture && (
                      <Image
                        useSkeleton
                        src={businessData.businessProfilePicture}
                        layout='responsive'
                        objectFit='contain'
                        height='30em'
                        width='100%'
                        alt='Icon'
                      />
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* account information */}
          {/* owner */}
          <h4>Account Information</h4>
          <table className={`${styles.table_border} my-4 w-full`}>
            <tbody>
              <tr>
                <td>
                  <h4>Email</h4>
                </td>
                <td>{accountData.accountEmail}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h4>Phone Number</h4>
                </td>
                <td>{accountData.accountPhone}</td>
              </tr>
            </tbody>
          </table>

          <PrimaryBtn
            onClick={() => router.push('/finish')}
            text='Next'
            className='mt-24 mb-8 w-full'
          />
        </div>
      </section>
    </div>
  );
};
