import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

//context

export default function Filter({ data, state, setState, toggleState, title }) {
  return (
    <form>
      <Disclosure
        defaultOpen={true}
        as="div"
        className="border-b border-gray-200 py-6"
      >
        {({ open }) => (
          <>
            <h3 className="-my-3 flow-root">
              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">{title}</span>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
            </h3>
            <Disclosure.Panel className="pt-6">
              <div className="space-y-4">
                {data.map((d, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      id={`filter-${d.id}`}
                      type="checkbox"
                      checked={state.includes(d.slug)}
                      onChange={() => toggleState(d.slug)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-${d.id}`}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {d.name}
                    </label>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </form>
  );
}
