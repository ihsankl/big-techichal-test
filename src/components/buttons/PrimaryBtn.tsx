import React, { FC } from 'react';

interface Props {
  className?: string;
  isSubmit?: boolean;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const PrimaryBtn: FC<Props> = ({
  isSubmit,
  className,
  text,
  onClick,
  disabled,
  ...props
}: Props) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className={`self-center rounded-lg bg-blue-700 py-4 px-5 text-lg font-bold text-white ${className} ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      {...props}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
