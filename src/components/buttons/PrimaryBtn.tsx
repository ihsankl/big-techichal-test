import React, { FC } from 'react';

interface Props {
  className?: string;
  isSubmit?: boolean;
  text: string;
}

const PrimaryBtn: FC<Props> = ({
  isSubmit,
  className,
  text,
  ...props
}: Props) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`self-center rounded-lg bg-blue-700 py-4 px-5 text-lg font-bold text-white ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
