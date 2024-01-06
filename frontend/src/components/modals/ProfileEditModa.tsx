import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Input from "../ui/Input";
import { Formik } from "formik";
import Button from "../ui/Button";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  user: IUser;
}
const ProfileEdit = ({ closeModal, isOpen, user }: Props) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Profile Edit
                  </Dialog.Title>
                  <div className="mt-8">
                    <Formik
                      initialValues={{ ...user }}
                      onSubmit={(values) => {
                        console.log(values);
                      }}
                    >
                      {(props) => (
                        <form
                          onSubmit={props.handleSubmit}
                          className="grid grid-cols-2 gap-x-2"
                        >
                          <Input
                            name="first_name"
                            label="First Name"
                            type="text"
                            className="bg-blue-50 my-2 h-14"
                          />
                          <Input
                            name="last_name"
                            label="Last Name"
                            type="text"
                            className="bg-blue-50 my-2 h-14"
                          />

                          <Input
                            disabled
                            name="email"
                            label="Email"
                            type="email"
                            className="bg-blue-50 my-2 h-14"
                          />
                          <Input
                            name="address"
                            label="Address"
                            type="text"
                            className="bg-blue-50 my-2 h-14"
                          />
                          <Input
                            name="phone"
                            label="Phone"
                            type="tel"
                            className="bg-blue-50 my-2 h-14"
                          />
                          <Input
                            name="gender"
                            label="Gender"
                            type="text"
                            className="bg-blue-50 my-2 h-14"
                          />
                          <Input
                            name="country"
                            label="Country"
                            type="text"
                            className="bg-blue-50 my-2 h-14"
                          />
                          <Input
                            name="city"
                            label="City"
                            type="text"
                            className="bg-blue-50 my-2 h-14"
                          />
                        </form>
                      )}
                    </Formik>
                  </div>

                  <div className="mt-4 flex justify-end gap-4">
                    <Button className="bg-red-300">close</Button>
                    <Button>save</Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ProfileEdit;
