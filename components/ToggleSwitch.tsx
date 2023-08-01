import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function ToggleSwitch({name, enabled, setEnabled, handleEnabled}: {name: string, enabled: boolean, setEnabled: any, handleEnabled: any}) {

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={handleEnabled}
        className={`${enabled ? 'bg-violet-900' : 'bg-violet-600'}
          relative inline-flex h-[22px] w-[42px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Select {name}</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
