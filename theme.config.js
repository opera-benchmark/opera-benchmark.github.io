import { useRouter } from "next/router";

import {OPERA_logo} from "./public/images/OPERA_logo.png"
import Image from 'next/image'
import Logo from "./components/logo";
const TITLE_WITH_TRANSLATIONS = {
  "en-US": "OPERA",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Please open an issue →",
};

export default {
  projectLink: "https://github.com/evelyn0414/OPERA",
  docsRepositoryBase: "https://github.com/evelyn0414/OPERA",
  titleSuffix: "",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      // <>
      //   <Logo height={20} />
      //   <span
      //     className="mx-2 font-extrabold hidden md:inline select-none"
      //     title={(TITLE_WITH_TRANSLATIONS["en-US"] || "")}
      //   >
      //   </span>
      // </>
      <Image src = "/images/OPERA_logo.png" alt="OPERA Logo" height={30} width={100}/>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta.image || Logo;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "OPEn Respiratory Acoustic foundation model pretraining and benchmarking system."
          }
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OPERA: OPEn Respiratory Acoustic foundation model pretraining and benchmarking" />
        <meta name="twitter:site" content="@EveYuwei" />
        <meta name="twitter:image" content="https://opera-benchmark.github.io/images/OPERA_logo.png" />
        <meta name="twitter:image:alt" content="The Logo of OPERA" />
        <meta
          name="twitter:description"
          content="OPEn Respiratory Acoustic foundation model pretraining and benchmarking system."   
        />
        <meta
          property="og:title"
          content={
            title ? title : "OPERA: OPEn Respiratory Acoustic foundation model pretraining and benchmarking"
          }
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "OPEn Respiratory Acoustic foundation model pretraining and benchmarking system."
          }
        />
        <meta property="og:url" content="https://opera-benchmark.github.io" />
        <meta property="og:image" content="https://opera-benchmark.github.io/images/OPERA_logo.png" />
        <meta name="apple-mobile-web-app-title" content="OPERA" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
        return "Explore code on GitHub →";
  },
  footerText: ({ locale }) => {
    return (<div>
      <a href="https://mobile-systems.cl.cam.ac.uk">Mobile Systems Research Lab</a> at University of Cambridge<br/>
      <sup>Website template is based on <a href="https://github.com/vercel/swr-site">SWR</a>.</sup>
      </div>)
  }
};
