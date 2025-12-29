"use client";

import Image from "next/image";

/**
 * A widget that displays a random photo of the day.
 * It uses the Picsum API to generate a random photo.
 * The widget also has a hover effect that scales the photo up and changes the opacity of the background.
 * The photo is displayed in a relative container with an absolute positioned background that has a linear gradient from black to transparent.
 * The photo title is displayed in an absolute positioned container with a font size of 1.5rem and a font weight of 700.
 * The opacity of the title container is initially set to 0 and transitions to 1 on hover.
 */
export default function PhotoWidget() {
  const photoUrl = "https://picsum.photos/300";

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden relative group cursor-pointer h-64">
      <Image
        src={photoUrl}
        alt="Random Photo"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        unoptimized
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h3 className="text-xl font-semibold mb-1">Photo of the day</h3>
      </div>

      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
