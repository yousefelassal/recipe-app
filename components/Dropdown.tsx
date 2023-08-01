import { Menu, Transition } from '@headlessui/react'
import { Fragment, JSX, SVGProps, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ToggleSwitch from './ToggleSwitch'

export default function Dropdown({name, options}: {name: string, options: string[]}) {
    const [enabled, setEnabled] = useState(options.map((option) => {
        return {
            name: option,
            enabled: false,
            }
        })
    );

    const handleEnabled = (option: string) => {
        return () => {
            setEnabled(enabled.map((item) => {
                if(item.name === option) {
                    return {
                        name: option,
                        enabled: !item.enabled,
                    }
                } else {
                    return item;
                }
            }))
        }
    }
    
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {name}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {options.map((option, index) => (
                <Menu.Item key={index}>
                    {({ active }) => (
                    <button
                        onClick={handleEnabled(option)}
                        className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                        {option}
                        <ToggleSwitch
                            name={option}
                            enabled={enabled[index].enabled}
                            setEnabled={setEnabled}
                            handleEnabled={handleEnabled(option)}
                        />
                    </button>
                    )}
                </Menu.Item>
            ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EditInactiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}