import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

import styles from '@/styles/Register.module.css';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';
import Stepper from '@/components/layout/Stepper';
import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';

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

const ReviewPageComponent: FC = () => {
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
                <td>Artist</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h4>Owner email</h4>
                </td>
                <td>Malcolm Lockyer</td>
              </tr>
              <tr>
                <td>
                  <h4>Owner phone number</h4>
                </td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h4>Owner identity Card</h4>
                  <div className={`h-96 w-full ${styles.input_identity}`}></div>
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
                <td>Artist</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h4>Business phone number</h4>
                </td>
                <td>Malcolm Lockyer</td>
              </tr>
              <tr>
                <td>
                  <h4>Country</h4>
                </td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td>
                  <h4>Province / State</h4>
                </td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td>
                  <h4>City</h4>
                </td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td>
                  <h4>Complete Address</h4>
                </td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td>
                  <h4>PIN Location</h4>
                </td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h4>Owner identity Card</h4>
                  <div className={`h-96 w-full ${styles.input_identity}`}></div>
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
                <td>Artist</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h4>Phone Number</h4>
                </td>
                <td>Malcolm Lockyer</td>
              </tr>
            </tbody>
          </table>

          <PrimaryBtn text='Next' className='mt-24 mb-8 w-full' />
        </div>
      </section>
    </div>
  );
};
