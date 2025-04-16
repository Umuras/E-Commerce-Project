import {
  Facebook,
  Instagram,
  MapPin,
  Navigation,
  Phone,
  Youtube,
  Twitter,
} from "lucide-react";

export function FooterDesktop() {
  return (
    <>
      <footer className="bg-[#252B42] w-full  h-auto flex flex-col  items-center justify-start">
        <div className="flex  w-[60%] ml-16 items-center justify-between  border-white mt-20">
          <div className="flex flex-col w-full  border-white">
            <h2 className="font-bold text-white text-2xl w-full">
              Consulting Agency For Your Business{" "}
            </h2>
            <p className="font-bold text-white mt-2 m-0 w-[80%] mb-4">
              the quick fox jumps over the lazy dog{" "}
            </p>
          </div>
          <div className="w-[20%]">
            <button className="py-3 bg-blue-500 font-bold text-white !rounded-[5px] w-full ">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex  items-start justify-between w-[56.5%] max-w[239px] max-h-[1052px] mt-32 gap-4 ">
          <div className="flex flex-col">
            <h5 className="text-white gap-4 mb-4">Company Info</h5>
            <div className="flex flex-col gap-3 mb-4">
              <h5 className="text-white">About Us</h5>
              <h5 className="text-white">Carrier</h5>
              <h5 className="text-white">We are hiring</h5>
              <h5 className="text-white">Blog</h5>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-white gap-4 mb-4">Legal</h5>
            <div className="flex flex-col gap-3 mb-4">
              <h5 className="text-white">About Us</h5>
              <h5 className="text-white">Carrier</h5>
              <h5 className="text-white">We are hiring</h5>
              <h5 className="text-white">Blog</h5>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-white gap-4 mb-4">Features</h5>
            <div className="flex flex-col gap-3 mb-4">
              <h5 className="text-white">Business Marketing</h5>
              <h5 className="text-white">User Analytic</h5>
              <h5 className="text-white">Live Chat</h5>
              <h5 className="text-white">Unlimited Support</h5>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-white gap-4 mb-4">Resources</h5>
            <div className="flex flex-col gap-3 mb-4">
              <h5 className="text-white">IOS & Android</h5>
              <h5 className="text-white">Watch a Demo</h5>
              <h5 className="text-white">Customers</h5>
              <h5 className="text-white">API</h5>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-white gap-4 mb-4">Get In Touch</h5>
            <div className="flex flex-col gap-3 mb-4">
              <div className="flex gap-2">
                <Phone className="w-6 h-6 text-[#8EC2F2]" />
                <h6 className="text-white">(480) 555-0103</h6>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-6 h-6 text-[#8EC2F2]" />
                <h6 className="text-white">4517 Washington Ave.</h6>
              </div>
              <div className="flex gap-2">
                <Navigation className="w-6 h-6 text-[#8EC2F2]" />
                <h6 className="text-white">debra.holt@example.com</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[56.5%] mt-20">
          <div className="mt-4">
            <h6 className="text-white">
              Made With Love By Finland All Right Reserved
            </h6>
          </div>

          <div className="flex gap-4">
            <Facebook className="text-[#8EC2F2]" />
            <Instagram className="text-[#8EC2F2]" />
            <Twitter className="text-[#8EC2F2]" />
            <Youtube className="text-red-600" />
          </div>
        </div>
      </footer>
    </>
  );
}
