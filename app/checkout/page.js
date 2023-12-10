import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingAddressForm from "@/components/checkout/ShippingAddressForm";

export default function Checkout() {
  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-x-8 gap-y-6">
      <div className="flex flex-col gap-y-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-slate-700 pl-3 border-l-4 border-l-violet-800">
          SHIPPING INFORMATION
        </h2>
        <ShippingAddressForm />
      </div>
      <div className="w-full">
        <OrderSummary />
      </div>
    </div>
  );
}
