import React, { FC } from 'react';

import styles from '@/styles/Register.module.css';

import Image from '@/components/NextImage';

import logo from '@/assets/logo.png';

interface Props {
  activeItems: Array<number>;
}

const Stepper: FC<Props> = ({ activeItems }) => {
  return (
    <section className={`hidden w-3/5 flex-col lg:flex ${styles.bg_stepper}`}>
      <header className='flex-row items-center justify-between px-12 py-10'>
        <Image useSkeleton src={logo} width='44' height='70' alt='Icon' />
      </header>
      <div className='px-12 py-10'>
        <div
          className={`${styles.step} ${
            activeItems[0] === 0 ? styles.step_active : ''
          }`}
        >
          <div className=''>
            {/* <div className={styles.circle}><i ><FaCheck /></i></div> */}
            <div className={`${styles.circle} ${styles.ic_scan} p-4`} />
          </div>
          <div>
            <div className='text-xl font-bold text-black'>
              Owner information
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              eros erat mauris mi.
            </div>
          </div>
        </div>
        {/* <div className={`${styles.step} ${styles.step_active}`}> */}
        <div
          className={`${styles.step} ${
            activeItems[1] === 1 ? styles.step_active : ''
          }`}
        >
          <div>
            <div className={`${styles.circle} p-4`}>
              {/* <div className={`${styles.ic_business} ${styles.active} p-4`} /> */}
              <div
                className={`${styles.ic_business} ${
                  activeItems[1] === 1 ? styles.active : ''
                }  p-4`}
              />
            </div>
          </div>
          <div>
            <div className={`${styles.title} text-xl font-bold text-black`}>
              Business Information
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              eros erat mauris mi.
            </div>
          </div>
        </div>
        <div
          className={`${styles.step} ${
            activeItems[2] === 2 ? styles.step_active : ''
          }`}
        >
          <div>
            <div className={`${styles.circle} p-4 `}>
              <div
                className={`${styles.ic_account} ${
                  activeItems[2] === 2 ? styles.active : ''
                } p-4`}
              />
            </div>
          </div>
          <div>
            <div className={`${styles.title} text-xl font-bold text-black`}>
              Account Information
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              eros erat mauris mi.{' '}
            </div>
          </div>
        </div>
        <div
          className={`${styles.step} ${
            activeItems[3] === 3 ? styles.step_active : ''
          }`}
        >
          <div>
            <div className={`${styles.circle} p-4 `}>
              <div
                className={`${styles.ic_payment} ${
                  activeItems[3] === 3 ? styles.active : ''
                } p-4`}
              />
            </div>
          </div>
          <div>
            <div className={`${styles.title} text-xl font-bold text-black`}>
              Payment Information
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              eros erat mauris mi.{' '}
            </div>
          </div>
        </div>
        <div
          className={`${styles.step} ${
            activeItems[4] === 4 ? styles.step_active : ''
          }`}
        >
          <div>
            <div className={`${styles.circle} p-4 `}>
              <div
                className={`${styles.ic_term} ${
                  activeItems[4] === 4 ? styles.active : ''
                } p-4`}
              />
            </div>
          </div>
          <div>
            <div className={`${styles.title} text-xl font-bold text-black`}>
              Term of use
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              eros erat mauris mi.{' '}
            </div>
          </div>
        </div>
        <div
          className={`${styles.step} ${
            activeItems[5] === 5 ? styles.step_active : ''
          }`}
        >
          <div>
            <div className={`${styles.circle} p-4 `}>
              <div
                className={`${styles.ic_review} ${
                  activeItems[5] === 5 ? styles.active : ''
                } p-4`}
              />
            </div>
          </div>
          <div>
            <div className={`${styles.title} text-xl font-bold text-black`}>
              Review
            </div>
            <div className={styles.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              eros erat mauris mi.{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
