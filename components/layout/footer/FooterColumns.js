import Link from "next/link";

export const footerContent = [
  {
    title: "Intron",
    subtitles: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Contact Us",
        href: "/blank",
      },
      {
        text: "Sale",
        href: "/blank",
      },
      {
        text: "Career Opportunities",
        href: "/blank",
      },
    ],
  },
  {
    title: "Customer Service",
    subtitles: [
      {
        text: "Common Questions",
        href: "/blank",
      },
      {
        text: "Return Procedures",
        href: "/blank",
      },
      {
        text: "Privacy",
        href: "/blank",
      },
    ],
  },
  {
    title: "Shopping Guide",
    subtitles: [
      {
        text: "How To PlaceAnOrder",
        href: "/blank",
      },
      {
        text: "Order Submission Procedure",
        href: "/blank",
      },
      {
        text: "Payment Methods",
        href: "/blank",
      },
    ],
  },
];

const FooterColumns = () => {
  return (
    <div className="flex justify-between flex-wrap flex-grow min-w-[800px] xl:rtl:pl-60">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 md:mt-0" key={item.title}>
            <h2 className=" rtl:border-r-4 ltr:border-l-4 border-red-800 px-2">
              {item.title}
            </h2>
            <div className="flex flex-col mt-2">
              {item.subtitles.map((subItem) => {
                return (
                  <Link href={subItem.href} key={subItem.text}>
                    <span className="text-sm text-slate-500/100 px-4 py-2 hover:text-slate-600">
                      {subItem.text}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
