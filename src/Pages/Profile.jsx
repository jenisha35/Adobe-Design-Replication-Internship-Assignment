import React from 'react';

const Profile = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <section className='min-h-screen flex justify-center items-center bg-gray-100'>
      <section className="relative h-[92vh] w-[320px] border border-[#E1E1E1] bg-[#F7F8F9] flex flex-col shadow-md">
        <h1 className="font-semibold text-lg bg-white text-[#1D2226] px-4 py-4">
          Account Settings
        </h1>

        <article className="w-full max-w-md px-4">
          <div className="flex items-center gap-4 my-6">
            <div className="relative inline-block">
              <img
                src="/photo.png"
                alt="pfp"
                className="w-14 h-14 rounded-full object-cover"
              />
              <img
                src="/camera.svg"
                alt="cam"
                className="absolute bottom-1 right-0 w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <h2 className="font-semibold text-md text-[#1D2226] ">{name}</h2>
              <p className="text-sm text-[#1D2226] ">{email}</p>
            </div>
          </div>

          <div className="text-sm text-[#1D2226] ">
            <p className='text-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis sapiente aspernatur adipisci commodi ut. Corporis atque
              enim itaque nostrum optio?
            </p>
          </div>
        </article>
        <hr className='border-1 border-dashed border-[#CBCBCB] mt-4 w-full'/>
        <hr className='border-1 border-dashed border-[#CBCBCB] absolute bottom-0 mb-4 w-full'/>
      </section>
    </section>
  );
};

export default Profile;
