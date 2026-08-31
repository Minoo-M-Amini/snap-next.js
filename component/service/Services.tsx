import Image from "next/image";
import ServiceCard from "./ServicCard";

const services = [
  {
    id: "1",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-14-0.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "2",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-14-1.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "3",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-14-2.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "4",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-17-0.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "5",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-17-1.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "6",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-17-2.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "7",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-25-0.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "8",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-25-1.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
  {
    id: "9",
    title: "بیمه ثالث خودرو",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/promo-25-2.jpg",
    icon: "https://web-cdn.snapp.ir/snappir-marketing/images/home-promos/Insurance.png",
    text: "خرید کنید",
  },
];

const groupedServices = [
  services.slice(0, 3),
  services.slice(3, 6),
  services.slice(6, 9),
];

const Services = () => {
  return (
    <>
      {groupedServices.map((group, groupIndex) => (
        <section key={groupIndex} className="container mx-auto mb-12 px-4" dir="rtl">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-2xl md:text-3xl">خرید به صرفه ی بیمه</p>
            <span className="flex items-center gap-2">
              <Image src="/icons8-right-arrow-30.png" alt="right arrow" width={12} height={12} className="h-3 w-3" unoptimized />
              <Image src="/icons8-left-arrow-30.png" alt="left arrow" width={12} height={12} className="h-3 w-3" unoptimized />
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {group.map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                image={item.image}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default Services;
