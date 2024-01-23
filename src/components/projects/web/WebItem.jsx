import { Link } from "react-router-dom";

export function WebItem() {
  return (
    <div className="p-4 border border-stone-500 flex flex-col gap-y-3">
      <div>
        <img src="/public/frontend/country.png" alt="country" />
      </div>
      <div>
        <p className="text-sm text-stone-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          obcaecati ad modi corporis perspiciatis eos nam exercitationem, quis
          excepturi enim.
        </p>
      </div>
      <button className="p-2 bg-stone-500 rounded-xl hover:bg-stone-600 hover:text-stone-300 hover:transition-all duration-500">
        <Link to="https://country-hazel.vercel.app/" target="_blank">View site</Link>
      </button>
    </div>
  );
}
