import * as React from 'react';

type Props = {
  style?: React.CSSProperties;
};

export function ErrorIcon(props: Props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00016 1.8335C4.59441 1.8335 1.8335 4.59441 1.8335 8.00016C1.8335 11.4059 4.59441 14.1668 8.00016 14.1668C11.4059 14.1668 14.1668 11.4059 14.1668 8.00016C14.1668 4.59441 11.4059 1.8335 8.00016 1.8335ZM0.833496 8.00016C0.833496 4.04212 4.04212 0.833496 8.00016 0.833496C11.9582 0.833496 15.1668 4.04212 15.1668 8.00016C15.1668 11.9582 11.9582 15.1668 8.00016 15.1668C4.04212 15.1668 0.833496 11.9582 0.833496 8.00016ZM8.00016 4.16683C8.27631 4.16683 8.50016 4.39069 8.50016 4.66683V8.00016C8.50016 8.27631 8.27631 8.50016 8.00016 8.50016C7.72402 8.50016 7.50016 8.27631 7.50016 8.00016V4.66683C7.50016 4.39069 7.72402 4.16683 8.00016 4.16683ZM8.00016 10.0002C8.2763 10.0002 8.50016 10.224 8.50016 10.5002L8.50016 10.5835C8.50017 10.8596 8.27631 11.0835 8.00017 11.0835C7.72403 11.0835 7.50017 10.8596 7.50016 10.5835L7.50016 10.5002C7.50016 10.224 7.72402 10.0002 8.00016 10.0002Z"
        fill="currentColor"
      />
    </svg>
  );
}