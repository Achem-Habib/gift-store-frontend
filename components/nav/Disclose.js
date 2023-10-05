import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Disclose({ data, title }) {
  return (
    <Disclosure as="div" className=" mt-3">
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between  py-3  font-medium text-purple-500 hover:text-purple-600">
              <Link href="#">{title}</Link>
              {data.length > 0 && (
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              )}
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-3">
            <div className="space-y-2 flex flex-col mx-3">
              {data.length > 0 &&
                data.map((d, index) => (
                  <Link
                    key={d.id}
                    href="#"
                    className="text-slate-500 hover:text-slate-700 font-light "
                  >
                    {d.name}
                  </Link>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
