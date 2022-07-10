import { Overlay } from 'components/Modal/Modal.styled';
import { createPortal } from 'react-dom';
import { ThreeDots } from 'react-loader-spinner';


const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <Overlay>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </Overlay>,
    loaderRoot
  );
};

export default Loader;