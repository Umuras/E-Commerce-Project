import {
  Facebook,
  Instagram,
  MapPin,
  Navigation,
  Phone,
  Youtube,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="bg-[#252B42] w-full min-h-[1850px] h-auto flex flex-col items-center justify-start">
        <div className="flex flex-col items-center w-full max-w-[352px] h-[296px] mt-8">
          <div className="w-[70%]">
            <h2 className="font-bold text-white text-2xl w-full">
              Consulting Agency For Your Business{" "}
            </h2>
            <p className="font-bold text-white mt-2 m-0 w-[80%] mb-4">
              the quick fox jumps over the lazy dog{" "}
            </p>
            <button className="px-13 py-2 bg-blue-500 font-bold text-white rounded-full">
              Contact Us
            </button>
            <div className="flex flex-col items-start w-full max-w[239px] max-h-[1052px] mt-32 gap-4">
              <div>
                <h5 className="text-white gap-4">Company Info</h5>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <h5 className="text-white">About Us</h5>
                <h5 className="text-white">Carrier</h5>
                <h5 className="text-white">We are hiring</h5>
                <h5 className="text-white">Blog</h5>
              </div>
              <div>
                <h5 className="text-white gap-4">Legal</h5>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <h5 className="text-white">About Us</h5>
                <h5 className="text-white">Carrier</h5>
                <h5 className="text-white">We are hiring</h5>
                <h5 className="text-white">Blog</h5>
              </div>
              <div>
                <h5 className="text-white gap-4">Features</h5>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <h5 className="text-white">Business Marketing</h5>
                <h5 className="text-white">User Analytic</h5>
                <h5 className="text-white">Live Chat</h5>
                <h5 className="text-white">Unlimited Support</h5>
              </div>
              <div>
                <h5 className="text-white gap-4">Resources</h5>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <h5 className="text-white">IOS & Android</h5>
                <h5 className="text-white">Watch a Demo</h5>
                <h5 className="text-white">Customers</h5>
                <h5 className="text-white">API</h5>
              </div>
              <div>
                <h5 className="text-white gap-4">Get In Touch</h5>
              </div>
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

              <div className="mt-4">
                <h6 className="text-white">Made With Love By Finland</h6>
                <h6 className="text-white">All Right Reserved</h6>
              </div>

              <div className="flex gap-4">
                <Facebook className="text-[#8EC2F2]" />
                <Instagram className="text-[#8EC2F2]" />
                <Twitter className="text-[#8EC2F2]" />
                <Youtube className="text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
