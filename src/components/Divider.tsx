import { FC } from 'react';

type DividerProps = {
    backgroundColor?: string,
    height?: string,
    marginTop?: string,
    marginBottom?: string
};

const Divider: FC<DividerProps> = ({ backgroundColor, height, marginTop, marginBottom }) => {
  return <div  style={{
    backgroundColor,
    height,
    marginTop,
    marginBottom,
  }}>Divider</div>;
};

export default Divider;
