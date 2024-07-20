import ReferButton from "./ReferButton"

const Refer = () => {
  return (
    <div className="flex-col">
      <div className="w-full mt-2 flex justify-center">
        <div className="w-3/5 shadow-xl h-96 flex justify-between rounded-lg bg-blue-50">
          <div className="flex flex-col w-1/2">
            <div>
              <img className="w-20 h-16" src="/m2.png" alt="m2" />
            </div>
            <div>
              <p className="text-6xl font-bold p-8 pt-0">
                Let's Learn & Earn
              </p>
              <p className="text-2xl font-semibold p-10 pt-0">
                Get a chance to win <br></br> up-to <span className="text-blue-600 font-bold">Rs. 15000</span>
              </p>
              <div className="p-10 pt-0">
                <ReferButton />
              </div>
            </div>
          </div>
          <div className="flex flex-col relative 1-1/2">
            <div className="flex justify-end">
              <img className="absolute w-20 h-16" src="/m1.png" alt="m1" />
            </div>
            <div>
              <img className="object-cover h-96" src="/referimg.png" alt="referimg" />
            </div>
            <div className="absolute bottom-10 flex items-center">
              <img className="object-cover w-20 h-16" src="/m5.png" alt="m5" />
            </div>
          </div>
        </div>

      </div>


      <div className="w-full flex flex-col items-center justify-center bg-blue-50 mt-10">

        <h1 className="font-semibold text-lg p-5">How do I <span className="text-blue-600">Refer?</span></h1>

        <div className="flex space-x-10">

          <div className="rounded-full flex flex-col items-center justify-center w-48 h-48 shadow-xl">
            <img className="w-16 h-16" src="/person.svg" alt="per" />
            <p className="text-xs w-40 text-center">
              Submit referrals easy via our website's referral section.
            </p>
          </div>

          <div className="rounded-full flex flex-col items-center justify-center w-48 h-48 shadow-xl">
            <img className="w-16 h-16" src="/pocket.svg" alt="per" />
            <p className="text-xs w-40 text-center">
              Earn rewards once your referral joins an accredian program.
            </p>
          </div>

          <div className="rounded-full flex flex-col items-center justify-center w-48 h-48 shadow-xl">
            <img className="w-16 h-16" src="/form.svg" alt="per" />
            <p className="text-xs w-40 text-center">
              Both parties receive a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>

        <div className="mt-10 p-5">
          <ReferButton />
        </div>
      </div>
    </div>
  )
}

export default Refer