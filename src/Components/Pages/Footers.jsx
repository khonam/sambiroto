export default function Footers() {
  return (
    <div>
      <div className="bg-green-800 shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <span className="self-center fjalla text-2xl font-semibold whitespace-nowrap dark:text-white">
                RW 08 Sambiroto
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-100 sm:text-center">
            © 2023{" "}
            <a href="#" className="hover:underline">
              RW 08 Sambiroto
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
