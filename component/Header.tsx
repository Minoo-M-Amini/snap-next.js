"use client";

import Image from "next/image";
import { useState } from "react";

const superAppLinks = [
  "درخواست تاکسی",
  "پیک موتوری",
  "سفارش آنلاین غذا اسنپ فود",
  "اسنپ بیمه",
  "اسنپ پرواز (بلیط هواپیما اسنپ)",
  "سوپرمارکت آنلاین اسنپ مارکت",
];

const aboutLinks = ["فرصت‌های شغلی", "درباره ما", "تماس با ما"];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="border-b border-gray-200 bg-white/90 backdrop-blur-sm"
    >
      <div className="container m-auto flex items-center justify-between gap-4 p-4">
        <button
          type="button"
          aria-label="باز کردن منو"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-50 md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>

        <div className="flex items-center">
          <Image src="/snaplogo.svg" alt="snaplogo" width={120} height={40} className="h-10 w-auto" unoptimized />
        </div>

        <nav
          className="hidden items-center md:flex"
          aria-label="Primary navigation"
        >
          <ul className="flex flex-wrap items-center justify-end">
            <li className="relative group">
              <span className="m-3 flex cursor-pointer items-center text-base lg:text-lg">
                سوپراپ اسنپ
                <Image
                  src="/icons8-arrow-down-30.png"
                  alt=""
                  width={12}
                  height={12}
                  className="mr-1 h-3 w-3"
                  unoptimized
                />
              </span>
              <ul className="absolute right-0 top-full hidden min-w-52 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover:block">
                {superAppLinks.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>

            <li className="text-base lg:text-lg">
              <span className="m-3 cursor-pointer">ثبت نام راننده اسنپ</span>
            </li>
            <li className="text-base lg:text-lg">
              <span className="m-3 cursor-pointer">
                اسنپ پی (سرویس اعتباری)
              </span>
            </li>
            <li className="text-base lg:text-lg">
              <span className="m-3 cursor-pointer">پنل سازمانی</span>
            </li>
            <li className="text-base lg:text-lg">
              <span className="m-3 cursor-pointer">باشگاه رانندگان</span>
            </li>
            <li className="text-base lg:text-lg">
              <span className="m-3 cursor-pointer">بلاگ</span>
            </li>
            <li className="relative group">
              <span className="m-3 flex cursor-pointer items-center text-base lg:text-lg">
                درباره اسنپ
                <Image
                  src="/icons8-arrow-down-30.png"
                  alt=""
                  width={12}
                  height={12}
                  className="mr-1 h-3 w-3"
                  unoptimized
                />
              </span>
              <ul className="absolute right-0 top-full hidden min-w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg group-hover:block">
                {aboutLinks.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden" dir="rtl">
          <div className="container m-auto flex flex-col gap-2 p-4 text-right">
            <button type="button" className="py-2 text-base">
              سوپراپ اسنپ
            </button>
            {superAppLinks.map((item) => (
              <button
                key={item}
                type="button"
                className="py-2 text-right text-sm text-gray-700"
              >
                {item}
              </button>
            ))}
            <button type="button" className="py-2 text-base">
              ثبت نام راننده اسنپ
            </button>
            <button type="button" className="py-2 text-base">
              اسنپ پی (سرویس اعتباری)
            </button>
            <button type="button" className="py-2 text-base">
              پنل سازمانی
            </button>
            <button type="button" className="py-2 text-base">
              باشگاه رانندگان
            </button>
            <button type="button" className="py-2 text-base">
              بلاگ
            </button>
            <button type="button" className="py-2 text-base">
              درباره اسنپ
            </button>
            {aboutLinks.map((item) => (
              <button
                key={item}
                type="button"
                className="py-2 text-right text-sm text-gray-700"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
