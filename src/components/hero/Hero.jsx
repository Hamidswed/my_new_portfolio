import Profile from "../../assets/profile_s.jpg";

export function Hero() {
  return (
    <div className=" flex flex-col items-center mt-8 gap-y-4">
      {/* <div className="fixed right-0 bottom-0 z-0 w-full min-[400px]:w-[80%] sm:w-1/2 md:w-['40%'] lg:w-1/3">
        <img src={Profile} alt="hamid" />
      </div> */}
      <div className=" text-darkColor w-full flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div className="max-h-48 max-w-36 bg-lightRed rounded-full overflow-hidden sm:flex-1">
          <img src={Profile} alt="profile" className="object-cover w-full h-full"/>
        </div>
        <p className="sm:flex-1 lg:max-w-[40%]">
          My name is Hamidreza Delshad, a passionate junior full stack developer
          and a freelance graphic designer from Sweden. My passion for software
          is coming up with concepts and turning them into beautiful interfaces.
          When I develop something, I pay close attention to the user
          experience, architecture, and code quality.
        </p>
      </div>
    </div>
  );
}
