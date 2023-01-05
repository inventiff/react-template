import { useExampleStore } from './store/example.store';

import {
  IconBrandTailwind,
  IconBrandReact,
  IconBrandVite,
  IconTrendingUp,
  IconPlus,
  IconMinus,
  IconQuestionCircle,
  IconBrandTypescript,
  IconStatusChange,
  IconTestPipe,
  IconVacuumCleaner,
} from '@tabler/icons';

function App() {
  const { count, increaseCount, decreaseCount } = useExampleStore();

  const features = [
    {
      name: 'Vite',
      description:
        'This template uses Vite. By taking advantage of HMR, this template acheives incredible reload times.',
      icon: IconBrandVite,
    },
    {
      name: 'Tailwind',
      description: 'Style your components like never before with Tailwind.',
      icon: IconBrandTailwind,
    },
    {
      type: 'store-section',
      name: 'Zustand',
      description:
        "This Zustand-powered persistent store is ready to count as many bears as you need! Don't worry, we remember how many you counted, so you can come back later and count some more.",
      icon: IconStatusChange,
    },
    {
      name: 'Progressive Web Application',
      description:
        'Your website, now with push notifications and many other useful PWA features!',
      icon: IconTrendingUp,
    },
    {
      name: 'TanStack Query',
      description:
        'Interact with APIs like never before! Ask good queries with TanStack Query.',
      icon: IconQuestionCircle,
    },
    {
      name: 'TypeScript',
      description:
        'This template is written in TypeScript. Bring your types and stay safe!',
      icon: IconBrandTypescript,
    },
    {
      name: 'Vitest with Vitest UI',
      description:
        'Run tests and see their result in the browser! Vitest and Vitest UI are here to help you have a great experience writing tests!',
      icon: IconTestPipe,
    },
    {
      name: 'ESLint & Prettier',
      description: 'Keeping it clean, on every Ctrl+S.',
      icon: IconVacuumCleaner,
    },
  ];

  return (
    <div className="py-24 bg-white dark:bg-gray-900 sm:py-32 lg:py-40">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-[#FFBD0E]">
            inventiff.
          </h2>
          <p className="flex justify-center gap-2 text-3xl font-bold tracking-tight text-gray-900 items-centermt-2 dark:text-gray-100 sm:text-4xl">
            <IconBrandReact className="inline" size="40" /> React Template
          </p>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            We really like these tools, so we put them together.
          </p>
        </div>

        <div className="max-w-lg mt-20 sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex items-center justify-center w-12 h-12 text-white bg-[#ffbf0edb] rounded-xl sm:shrink-0">
                  <feature.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">
                    {feature.name}
                    {feature.type === 'store-section' && (
                      <span className="ml-2">
                        <button
                          type="button"
                          className="p-2 rounded-full dark:hover:bg-white/20 dark:text-white/50 hover:bg-black/20 text-black/50"
                          onClick={() => decreaseCount()}
                          role="decrement-button"
                        >
                          <IconMinus size="14px" />
                        </button>
                        <span
                          className="ml-2 dark:text-white/70 text-black/70"
                          role="counter"
                        >
                          {count}
                        </span>
                        <span className="mr-2 dark:text-white/70 text-black/70">
                          &nbsp;bears
                        </span>
                        <button
                          type="button"
                          className="p-2 rounded-full dark:hover:bg-white/20 dark:text-white/50 hover:bg-black/20 text-black/50"
                          onClick={() => increaseCount()}
                          role="increment-button"
                        >
                          <IconPlus size="14px" />
                        </button>
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
