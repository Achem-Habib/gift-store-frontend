export default function PaymentMethod() {
  return (
    <div className="flex flex-col p-2 pb-4 mx-1 border rounded-sm gap-y-3 border-slate-300 bg-slate-100">
      <h1 className="mx-auto text-lg font-semibold">Payment Method</h1>
      <div>
        <form className="flex flex-col gap-y-2">
          <div className="flex gap-x-4 p-2 border border-slate-200 rounded-md bg-white">
            <input
              className="my-auto"
              type="radio"
              id="cash"
              name="direct_or_cash"
            />
            <label className="flex flex-col gap-y-1" for="cash">
              <div className="flex gap-x-3">
                <p className="my-auto text-lg font-semibold text-slate-800">
                  Cash on Delivery
                </p>
              </div>
              <p className="text-sm text-slate-800">
                If you select the cash on delivery, you have to still pay $100
                to confirm the order
              </p>
            </label>
          </div>
          <div className="flex gap-x-3 p-2 border border-slate-200 rounded-md bg-white">
            <input
              className="my-auto"
              type="radio"
              name="direct_or_cash"
              id="full"
            />
            <label className="flex gap-x-3" for="full">
              <p className="my-auto text-lg font-semibold text-slate-800">
                Full Payment
              </p>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
