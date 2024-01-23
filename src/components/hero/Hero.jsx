export function Hero() {
  return (
    <div className=" relative flex flex-col items-center mt-8 gap-y-4">
      <div className="fixed right-0 bottom-0
       md:max-w-full z-0">
        <img src="/public/Design.png" alt="hamid" />
      </div>
      <div className="absolute left-2 top-20 text-gray-400">
        <p className="text-xs">
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
