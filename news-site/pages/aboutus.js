import { GiAsianLantern } from "react-icons/gi";
import Link from "next/link";
import styles from '../styles/aboutus.module.css';


export const aboutus = ({ employee }) => {
  console.log(employee);
return (
  
   <div className='pagecontainer'>
      <div>
      <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
    <Link href="/">
      <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
        <GiAsianLantern className="inline text-4xl mr-4" /> News24
      </a>
    </Link>
    
    </div>
    <div className="px-2 md:px-24 bg-white flex border-b border-black">
    <Link href="/">
        <a className="mr-10 text-xl mt-2 px-5 border-b-2 border-transparent hover:border-black">Home</a>
    </Link>

    <Link href="feed/1">
        <a className="mr-10 text-xl mt-2 px-5 border-b-2 border-transparent hover:border-black">Feed</a>
    </Link>

    <Link href="/aboutus">
        <a className="mr-10 text-xl mt-2 px-5 border-b-2 border-transparent hover:border-black">About us</a>
    </Link>
    </div>
    <div className={styles.main}>
        <b><h1>About Us</h1></b>
        <div className={styles.aboutus}>
            <h3>{employee.name}</h3>
            <img src={employee.image} />
            <h6>{employee.position}</h6>
            <h5>{employee.description}</h5>
            
        </div>
        </div>
        <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
<div>
<Link href="/">
        <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
          <GiAsianLantern className="inline text-4xl mr-4" /> News24
        </a>
      </Link>
       </div>

 <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-10 max-w-3x1">

    <h1>Career</h1>
    <h1>About Us</h1>
    <h1>Privacy</h1>
    <h1>Contact us</h1>
    <h1>Terms and Conditions</h1>
    <h1>Privacy and Policy</h1>
    <h1>Partners</h1>
</div>
<div className="my-10 text-sm  max-w-21">
  News 24 is an independent news portal intiated by an intern at Neuman Foundation, Japan. 
  All rights reserved. &copy;
 &nbsp; {new Date().getUTCFullYear()}
</div>
</div>
      </div>
   </div>
);

};

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/girik21/newsapp/aboutus',
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default aboutus;