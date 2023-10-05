export default function Size() {
  return (
    <form className="flex flex-col gap-y-2">
      <label className="text-md text-gray-900 font-semibold" htmlFor="size">
        {" "}
        Size
      </label>
      <select
        className="px-2 w-32 text-sm border outline-none border-slate-700"
        name="size"
        id="size"
      >
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </form>
  );
}
