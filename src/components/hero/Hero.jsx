import Profile from "./Profile";
import SocialMedia from "./socialMedia/SocialMedia";

export function Hero() {
  return (
    <div className=" flex flex-col items-center mt-8">
      <div className=" text-darkColor w-full flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end">
        <Profile />
        <div className="sm:flex-1 lg:max-w-[50%]">
          <p className="mb-4">
            My name is Hamidreza Delshad, a passionate junior full stack
            developer and a freelance graphic designer from Sweden. My passion
            for software is coming up with concepts and turning them into
            beautiful interfaces. When I develop something, I pay close
            attention to the user experience, architecture, and code quality.
          </p>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
