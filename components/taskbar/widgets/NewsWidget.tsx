import Image from "next/image";
import fakeImg1 from "@/public/fakeImg/fakeImg1.jpg";
import fakeImg2 from "@/public/fakeImg/fakeImg2.jpg";
import fakeImg3 from "@/public/fakeImg/fakeImg3.jpg";
import fakeImg4 from "@/public/fakeImg/fakeImg4.jpg";
import fakeImg5 from "@/public/fakeImg/fakeImg5.jpg";

const fakeNews = [
  {
    title: "Woodland",
    description:
      "Sunlight filters through a dense canopy of ancient oak trees.",
    url: "https://AtaDevPro.ir",
    urlToImage: fakeImg1,
    source: { name: "Nature" },
  },
  {
    title: "Woodland",
    description:
      "Sunlight filters through a dense canopy of ancient oak trees.",
    url: "https://AtaDevPro.ir",
    urlToImage: fakeImg2,
    source: { name: "Nature" },
  },
  {
    title: "Woodland",
    description:
      "Sunlight filters through a dense canopy of ancient oak trees.",
    url: "https://AtaDevPro.ir",
    urlToImage: fakeImg3,
    source: { name: "Nature" },
  },
  {
    title: "Woodland",
    description:
      "Sunlight filters through a dense canopy of ancient oak trees.",
    url: "https://AtaDevPro.ir",
    urlToImage: fakeImg4,
    source: { name: "Nature" },
  },
  {
    title: "Woodland",
    description:
      "Sunlight filters through a dense canopy of ancient oak trees.",
    url: "https://AtaDevPro.ir",
    urlToImage: fakeImg5,

    source: { name: "Nature" },
  },
];

function NewsWidget() {
  return (
    <div className="flex flex-col gap-3">
      {fakeNews.map((news, index) => (
        <div key={index} className=" flex gap-3">
          <div className="relative h-28 flex-3 rounded-2xl overflow-hidden">
            <Image
              src={news.urlToImage}
              fill
              className="object-cover "
              alt={news?.source?.name || "Nature"}
              priority={index === 0}
            />
          </div>
          <div className="flex-7 flex flex-col gap-3">
            <h3 className="text-white ">{news?.title}</h3>
            <p className="text-white text-base">{news?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsWidget;
