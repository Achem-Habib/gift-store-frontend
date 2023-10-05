export default function OrderSummary() {
  return (
    <div className="bg-gray-100 rounded-md px-4 py-6 mx-3 my-5">
      <div className="flex flex-col gap-y-3">
        <h2 className="text-xl font-semibold pb-3">Order summary</h2>
        <div className="flex justify-between border-b border-b-slate-200 pb-3">
          <p className="text-gray-600 ">Subtotal</p>
          <p className="font-medium">$262.00</p>
        </div>
        <div className="flex justify-between border-b border-b-slate-200 pb-3">
          <p className="text-gray-600 ">Subtotal</p>
          <p className="font-medium">$262.00</p>
        </div>
        <div className="flex justify-between border-b border-b-slate-200 pb-3">
          <p className="text-gray-600 ">Subtotal</p>
          <p className="font-medium">$262.00</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>$262.00</p>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-purple-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-lime-500"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
