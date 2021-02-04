import '../../App.css';
import ConnectForm from '../ConnectForm/ConnectForm'
import Footer from '../Footer/Footer'


export default function SignUp() {
  return (
    <>
      <h1 className='signup'>BEGIN YOUR ADVENTURE</h1>
      <ConnectForm />
      <Footer />
    </>
  );
}