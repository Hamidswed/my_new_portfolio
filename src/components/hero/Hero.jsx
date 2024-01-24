import Profile from "../../assets/Design.png";

export function Hero() {
  return (
    <div className=" relative flex flex-col items-center mt-8 gap-y-4">
      <div className="fixed right-0 bottom-0 z-0 w-full sm:w-1/2 md:w-['40%'] lg:w-1/3">
        <img src={Profile} alt="hamid" />
      </div>
      <div className="absolute left-2 top-20 text-stone-400 w-1/2">
        <p>
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
