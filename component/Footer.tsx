import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  "فرصت‌های شغلی",
  "بلاگ",
  "شرایط و قوانین",
  "پنل سازمانی",
  "سوالات متداول",
  "باشگاه رانندگان",
  "ثبت نام راننده اسنپ",
  "کد تخفیف اسنپ",
  "درباره ما",
  "تماس با ما",
];

function Footer() {
  return (
    <footer className="container m-auto mb-20 px-4" dir="rtl">
      <div className="mb-10 grid grid-cols-2 gap-3 text-center text-base sm:grid-cols-3 lg:grid-cols-5">
        {footerLinks.map((item) => (
          <Link
            key={item}
            href="#"
            className="rounded-lg px-2 py-3 transition hover:bg-gray-100"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="mb-10 flex justify-center gap-3">
        <Link
          href="#"
          className="rounded-full p-2 transition hover:bg-gray-100"
        >
          <Image
            src="https://web-cdn.snapp.ir/snapp-website/icons/social/Twitter.svg"
            alt="Twitter"
            width={32}
            height={32}
            className="h-8 w-8"
            unoptimized
          />
        </Link>
        <Link
          href="#"
          className="rounded-full p-2 transition hover:bg-gray-100"
        >
          <Image
            src="https://web-cdn.snapp.ir/snapp-website/icons/social/Telegram.svg"
            alt="Telegram"
            width={32}
            height={32}
            className="h-8 w-8"
            unoptimized
          />
        </Link>
        <Link
          href="#"
          className="rounded-full p-2 transition hover:bg-gray-100"
        >
          <Image
            src="https://web-cdn.snapp.ir/snapp-website/icons/social/Linkedin.svg"
            alt="Linkedin"
            width={32}
            height={32}
            className="h-8 w-8"
            unoptimized
          />
        </Link>
        <Link
          href="#"
          className="rounded-full p-2 transition hover:bg-gray-100"
        >
          <Image
            src="https://web-cdn.snapp.ir/snapp-website/icons/social/Instagram.svg"
            alt="Instagram"
            width={32}
            height={32}
            className="h-8 w-8"
            unoptimized
          />
        </Link>
        <Link
          href="#"
          className="rounded-full p-2 transition hover:bg-gray-100"
        >
          <Image
            src="https://web-cdn.snapp.ir/snapp-website/icons/social/Youtube.svg"
            alt="Youtube"
            width={32}
            height={32}
            className="h-8 w-8"
            unoptimized
          />
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="#"
          className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
        >
          <Image src="/enmad.jpg" alt="enmad" width={120} height={64} className="h-16 w-auto" unoptimized />
        </Link>
        <Link
          href="#"
          className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
        >
          <Image
            src="https://ecunion.ir/bundles/pouyasoft/home/img/namad.png"
            alt="namad"
            width={120}
            height={64}
            className="h-16 w-auto"
            unoptimized
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
