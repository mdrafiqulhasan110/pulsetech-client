import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Firebase/AuthProvider";

const Signup = () => {
  const { createUser, loginGoogle } = useContext(AuthContext);
  const [strength, setstrength] = useState(false);
  const [length, setlength] = useState(false);
  const [character, setcharacter] = useState(false);
  const [special, setspecial] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(name, image, email, pass);

    if (length && character && special) {
      createUser(email, pass)
        .then((result) => {
          console.log(result.user);
          updateProfile(result.user, {
            displayName: name,
            photoURL: image,
          });
          toast.success("User Registration Succesfull");
        })
        .catch((error) => {
          toast.error(error.code.slice(5, error.code.length));
        });
    }
  };

  const passwordCheck = (e) => {
    setlength(false);
    setcharacter(false);
    setspecial(false);
    setstrength(false);
    const pass = e.target.value;
    console.log(pass);
    if (pass.length > 0) {
      setstrength(true);
    }
    if (pass.length >= 6) {
      setlength(true);
    }
    if (/[A-Z]/.test(pass)) {
      setcharacter(true);
    }
    if (/[\W_]/.test(pass)) {
      setspecial(true);
    }
  };

  return (
    <section className=' py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='w-full px-4'>
          <div className='relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-base-200 py-16 px-10 text-center sm:px-12 md:px-[60px]'>
            <div className='flex items-center justify-center pb-4 w-full'>
              <img
                className='h-12'
                src='../favicon.png'
                alt=''
              />
              <h2 className='text-3xl font-bold'>
                <span className='text-[#3498db]  '>Pulse</span>Tech
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className='w-full border-0 rounded-md p-3 mb-4'
                type='text'
                name='name'
                placeholder='Name'
                required
              />
              <input
                className='w-full border-0 rounded-md p-3 mb-4'
                type='email'
                name='email'
                placeholder='Email'
                required
              />
              <input
                className='w-full border-0 rounded-md p-3 mb-4'
                type='text'
                name='image'
                placeholder='Image URL'
              />
              <input
                className='w-full border-0 rounded-md p-3 mb-4'
                type='password'
                name='pass'
                placeholder='Password'
                required
                onChange={passwordCheck}
              />
              {strength && (
                <div className='text-left mb-4'>
                  <p>{length ? <span className='text-green-400'>✔</span> : <span className='text-red-400'>✖</span>} Password must contain atleast 6 characters.</p>
                  <p>{character ? <span className='text-green-400'>✔</span> : <span className='text-red-400'>✖</span>} Password must contain atleast 1 capital letter.</p>
                  <p>{special ? <span className='text-green-400'>✔</span> : <span className='text-red-400'>✖</span>} Password must contain atleast 1 special character.</p>
                </div>
              )}

              <div className='mb-10'>
                <button
                  className='btn btn-info text-white w-full'
                  type='submit'
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className='mb-6 text-base text-[#adadad]'>Connect With</p>
            <ul className='-mx-2 mb-12 flex justify-between'>
              <li className='w-full px-2'>
                <button
                  onClick={() => loginGoogle()}
                  className='btn hover:bg-[#D64937] bg-[#D64937] text-white w-full'
                  type='submit'
                >
                  Google
                </button>
              </li>
            </ul>

            <p className='text-base text-[#adadad]'>
              Already a Member?
              <Link
                to={"/signin"}
                className='text-[#50b8e7] hover:underline'
              >
                Sign In
              </Link>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
