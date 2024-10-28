import Image from 'next/future/image';

export default function FullWidthImage({src, alt}) {
  return (
      <Image
        src = {src}
        alt = {alt}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
  );
}
