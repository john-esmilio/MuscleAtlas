import React from "react";
import {
  companyFooterItems,
  legalFooterItems,
  workoutFooterItems,
  healthFooterItems,
} from "@/constant";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image src="/logo.png" alt="Company Logo" width={150} height={20} />
            <p className="text-gray-500 text-base">
              Making the world a healthier place, one workout at a time.
            </p>
            <div className="flex space-x-6"></div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Workout
                </h3>
                <ul className="mt-4 space-y-4">
                  {workoutFooterItems.map((link) => (
                    <li
                      key={link.key}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Living
                </h3>
                <ul className="mt-4 space-y-4">
                  {healthFooterItems.map((link) => (
                    <li
                      key={link.key}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {companyFooterItems.map((link) => (
                    <li
                      key={link.key}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {legalFooterItems.map((link) => (
                    <li
                      key={link.key}
                      className="text-base text-gray-300 hover:text-white"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 MuscleAtlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
