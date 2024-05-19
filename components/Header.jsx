"use client";

import {
  ArrowUpFromLine,
  ChevronDown,
  Layers3Icon,
  LinkIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";

export default function Header(params) {
  const [isModuleDialogOpen, setIsModuleDialogOpen] = useState(false);
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);

  function openModuleDialog() {
    setIsModuleDialogOpen(true);
  }

  function closeModuleDialog() {
    setIsModuleDialogOpen(false);
  }

  function openLinkDialog() {
    setIsLinkDialogOpen(true);
  }

  function closeLinkDialog() {
    setIsLinkDialogOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 max-w-7xl mx-auto lg:p-0 p-6">
        <nav className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-semibold lg:text-2xl text-lg tracking-tight"
          >
            Course Builder
          </Link>
          <Menu>
            <MenuButton className="flex items-center gap-4 bg-rose-500 hover:bg-rose-700 transition duration-300 ease-in-out text-white lg:px-5 lg:py-3 px-3 py-2 rounded-lg">
              <PlusIcon size={18} strokeWidth={2.5} />
              <div className="flex items-center gap-2">
                <span className="font-medium tracking-tight lg:text-base text-sm">
                  Add
                </span>
                <ChevronDown size={12} strokeWidth={3} />
              </div>
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-72 origin-top-right rounded-xl shadow ring-1 ring-neutral-300 py-3 my-2 text-sm focus:outline-none"
              >
                <MenuItem>
                  <button
                    onClick={openModuleDialog}
                    className="block w-full text-start px-6 py-2 font-medium text-neutral-500 hover:text-neutral-800 transition duration-300 ease-in-out"
                  >
                    <Layers3Icon className="inline-block me-4" size={20} />
                    Create a module
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    onClick={openLinkDialog}
                    className="block w-full text-start px-6 py-2 font-medium text-neutral-500 hover:text-neutral-800 transition duration-300 ease-in-out"
                  >
                    <LinkIcon className="inline-block me-4" size={20} />
                    Add a link
                  </button>
                </MenuItem>
                <MenuItem>
                  <label className="block w-full text-start px-6 py-2 font-medium text-neutral-500 hover:text-neutral-800 transition duration-300 ease-in-out">
                    <ArrowUpFromLine className="inline-block me-4" size={20} />
                    <span>Upload a file</span>
                    <input type="file" name="file" className="hidden" />
                  </label>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </nav>

        {/* Module Dialog */}
        <Transition appear show={isModuleDialogOpen}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={closeModuleDialog}
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-30"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                  <DialogTitle className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg tracking-tight">
                      Create new module
                    </h1>
                    <button onClick={closeModuleDialog}>
                      <XIcon className="text-neutral-800" size={20} />
                    </button>
                  </DialogTitle>
                  <form className="space-y-2.5 my-8">
                    <label
                      htmlFor="module-name"
                      className="font-medium tracking-tight"
                    >
                      Module name
                    </label>
                    <input
                      type="text"
                      placeholder="Introduction to Trigonometry"
                      className="block w-full placeholder:text-sm placeholder:text-neutral-600 p-2 ring-1 ring-neutral-600 rounded-lg"
                    />
                  </form>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={closeModuleDialog}
                      className="px-4 py-2 bg-gray-300 rounded-lg font-medium text-sm"
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-cyan-600 rounded-lg text-white font-medium text-sm">
                      Create
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Link Dialog */}
        <Transition appear show={isLinkDialogOpen}>
          <Dialog as="div" className="relative z-10" onClose={closeLinkDialog}>
            <div
              className="fixed inset-0 bg-black bg-opacity-30"
              aria-hidden="true"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                  <DialogTitle className="flex items-center justify-between gap-4">
                    <h1 className="font-semibold text-lg tracking-tight">
                      Add a link
                    </h1>
                    <button onClick={closeLinkDialog}>
                      <XIcon className="text-neutral-800" size={20} />
                    </button>
                  </DialogTitle>
                  <form className="space-y-4 my-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="link-url"
                        className="font-medium tracking-tight"
                      >
                        URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com"
                        className="block w-full placeholder:text-sm placeholder:text-neutral-600 p-2 ring-1 ring-neutral-600 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="link-description"
                        className="font-medium tracking-tight"
                      >
                        Display name
                      </label>
                      <input
                        type="text"
                        placeholder="Example description"
                        className="block w-full placeholder:text-sm placeholder:text-neutral-600 p-2 ring-1 ring-neutral-600 rounded-lg"
                      />
                    </div>
                  </form>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={closeLinkDialog}
                      className="px-4 py-2 bg-gray-300 rounded-lg font-medium text-sm"
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-cyan-600 rounded-lg text-white font-medium text-sm">
                      Add Link
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      </header>
    </>
  );
}
