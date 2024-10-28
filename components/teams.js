import Image from 'next/image';

export default function TeamImage({src, name, institute, homepage="", twitter=""}) {
  return (
    <div className = "text-center">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-9 xl:aspect-h-9">
        <Image
          alt={"Profile photo of " + name}
          src={src}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-2 text-base text-gray-800"><strong>{name}</strong></div>
      <div className="mt-1 mb-2 text-sm text-gray-600">{institute}</div>

      {(()=>{
        if (homepage) {
            return (
                <button onClick ={() => {window.open(homepage,'_blank')}}>
                <svg
                    className="w-6 h-6 text-stone-200 fill-current hover:text-stone-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                </button>
            )
        }
      })()}


      {(()=>{
        if (twitter) {
            return (
                <button onClick ={() => {window.open(twitter,'_blank')}}>
                    <svg
                        className="w-6 h-6 text-blue-200 fill-current hover:text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                </button>
            )
        }
      })()}
    </div>
  );
}