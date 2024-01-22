import {Bars3Icon, UserCircleIcon} from "@heroicons/react/24/solid"

export function Navbar() {
  return <div className="flex justify-between">
    <div><Bars3Icon className="w-6"/></div>
    <div>Hamidreza Delshad</div>
    <div>
      <UserCircleIcon className="w-6"/>
    </div>
  </div>;
}
