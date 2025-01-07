import { CloudDrizzle, EarthLock, Store } from "lucide-react";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <p className="text-4xl font-bold text-center">Hi! My name is Gerard Bourguett</p>
            <p className="text-lg text-gray-700 dark:text-gray-200 text-center">
              I&apos;m a software engineer from Rancagua, Chile.
            </p>
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Projects (under construction)
            </p>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://nye.today",
    text: "New Year Eve",
    icon: (
      <EarthLock size={48}/>
    ),
  },
  {
    href: "https://mp-react-chi.vercel.app/",
    text: "Mercado Público",
    icon: (
      <Store size={48} />
    )
  },
  {
    href: "https://clima-reactjsx.vercel.app/",
    text: "Weather App",
    icon: (
      <CloudDrizzle size={48} />
    )
  }

  
];
