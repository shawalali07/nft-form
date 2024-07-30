import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
export function NftForm() {
  return (
    <form className="flex flex-col gap-10">
      <h1 className="font-black text-2xl text-center">Create New Account</h1>
      <div className="flex flex-col md:mx-0 mx-4 gap-4">
        <div className="md:flex md:flex-row flex flex-col gap-4">
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="First Name"
            name="first_name"
          />
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="Last Name"
            name="last_name"
          />
        </div>
        <div className="md:flex md:flex-row flex flex-col gap-4">
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="Password"
          />
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="Repeat Password"
            name="confirm_password"
          />
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="md:flex md:flex-row flex flex-col gap-4">
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="Phone Number"
            name="phone_number"
          />
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="Address"
            name="address"
          />
          <Input
            className="py-3 px-4 bg-black text-neutral-700 p-2 rounded-lg border border-neutral-700"
            placeholder="Zip Code"
            name="zip_code"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center md:mx-0 mx-4">
        <Button
          type="button"
          variant="ghost"
          className="text-brand-700 rounded-lg border-brand-700 border font-extrabold pt-3 pb-3 md:px-[76px] px-[48px]"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="ghost"
          className="text-brand-700 rounded-lg border-brand-700 border font-extrabold pt-3 pb-3 md:px-[76px] px-[48px]"
        >
          Register
        </Button>
      </div>
    </form>
  );
}
