import { useState } from "react";

const Signup = () => {

  const [valError, setValError] = useState(false);
  const [disabled, setDisabled] = useState('disabled');

  const inputHandler = (e) => {
    let thisElem = e.target;
    let thisElemVal = thisElem.value;

    if(thisElemVal.length < 5) {setValError(true); } 
    else {setValError(false); setDisabled(''); }

  }
  

  return (
    <section className="signup p-5">
      <form>
        <div className="form-group mb-2">
          <input onChange={inputHandler} className="rounded-md p-2 w-full border-solid border border-gray-300 shadow-sm focus:outline-purple-600" type="text" placeholder="Name"/>
          <p className="text-red-600 "><small>{valError}</small></p>
        </div>
        <div className="form-group mb-2">
          <input className="rounded-md p-2 w-full border-solid border border-gray-300 shadow-sm focus:outline-purple-600" type="email" placeholder="Email" />
        </div>
        <div className="form-group mb-2">
          <input className="rounded-md p-2 w-full border-solid border border-gray-300 shadow-sm focus:outline-purple-600" type="password" placeholder="Password"/>
        </div>
        <div className="form-group mt-6">
          <input disabled={disabled} className="rounded-md border w-full px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 transition ease-in-out shadow-md font-semibold" type="submit" value="Sign up" />
        </div>
      </form>
    </section>
  );
};

export default Signup;
