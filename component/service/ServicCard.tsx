import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  icon: string;
  text: string;
}

const ServiceCard = ({ title, image, icon, text }: ServiceCardProps) => {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      dir="rtl"
    >
      <a href="#" className="block">
        <Image
          src={image}
          alt={title}
          width={800}
          height={560}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="h-56 w-full object-cover"
          unoptimized
        />
        <div className="flex items-center gap-3 p-4">
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="h-10 w-10"
            unoptimized
          />
          <p className="flex-1 text-lg md:text-xl">{title}</p>
          <button className="rounded border-2 border-blue-500 px-3 py-2 text-sm text-blue-600">
            {text}
          </button>
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
