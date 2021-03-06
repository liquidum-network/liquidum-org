import React from 'react';
import {
  UserGroupIcon,
  RefreshIcon,
  GlobeIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Ethereum Ecosystem',
    description: 'MetaMask, Solidity, Etherscan, EVM, and more. A massive ecosystem of tools and infrastructure supported out of the box.',
    icon: UserGroupIcon,
  },
  {
    name: 'Sustainable',
    description: "Uses Chia's Proof of Space and Time for consensus. Less wasteful and inefficient than of Proof of Work. Less centralization and complexity than Proof of Stake.",
    icon: GlobeIcon,
  },
  {
    name: 'Decentralized',
    description: 'Anyone with 100GB of hard drive space can mine and earn rewards for securing the network. Compatible with existing Chia plots.',
    icon: RefreshIcon,
  },
];
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Boost your conversion rate',
//     href: '#',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { name: 'Article', href: '#' },
//     imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//     author: {
//       name: 'Roel Aufderehar',
//       imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       href: '#',
//     },
//     readingLength: '6 min',
//   },
//   {
//     id: 2,
//     title: 'How to use search engine optimization to drive sales',
//     href: '#',
//     date: 'Mar 10, 2020',
//     datetime: '2020-03-10',
//     category: { name: 'Video', href: '#' },
//     imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//     author: {
//       name: 'Brenna Goyette',
//       imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       href: '#',
//     },
//     readingLength: '4 min',
//   },
//   {
//     id: 3,
//     title: 'Improve your customer experience',
//     href: '#',
//     date: 'Feb 12, 2020',
//     datetime: '2020-02-12',
//     category: { name: 'Case Study', href: '#' },
//     imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     preview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//     author: {
//       name: 'Daniela Metz',
//       imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       href: '#',
//     },
//     readingLength: '11 min',
//   },
// ];
const Home: React.FC = () => {

  return (
    <React.Fragment>
      <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-1">
                <h1 className="mt-2 text-7xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-8xl">
                  <span className="block">Liquidum</span>
                </h1>
                <h1 className="mt-5 text-xl tracking-tight font-bold text-white sm:mt-3 sm:text-3xl lg:mt-3 xl:text-3xl">
                  <span className="block">A new Ethereum compatible blockchain that is</span>
                  <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                    efficient, fast, and truly decentralized.
                  </span>
                </h1>
                <div className="mt-10 pb-6 sm:mt-12">
                  <p className="mt-3 mb-2 w-full sm:w-1/2 mx-auto lg:mx-0 text-sm text-gray-300 sm:mt-4">
                    {"Don't miss the latest news."}
                  </p>
                  <button
                    type="submit"
                    className="block w-full sm:w-1/2 mx-auto lg:mx-0 py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white  font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    onClick={() => { location.href = 'https://b69f94bd.sibforms.com/serve/MUIEADAUc0WBVDOwB2AKAHJyDb3L5HdyLhxy0434l8EK6wcd3TU8SXHKO6hcZatvm2dAI685GG7o3uCn3O3eBRjPi3bPhKbkdo9aRXxmyrfdUSAr8nNNa-9XIy-rUTH8QxWRyYovwEUuOJrneBfM7ysk9clVsbOCiLdpSvygqrYujEXmGWWXR_wYs6x9YTpLsE9OjAxOEJTa5anq'; }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative hidden md:block">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/cloud-illustration-teal-cyan.svg"
                  alt="Image depicting cloud computing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section with grid */}
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {"The Ethereum Ecosystem powered by Chia's Proof of Space and Time"}
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      {/* <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue.
                    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Judith Black</p>
                  <p className="text-base font-medium text-cyan-100">CEO at PureInsights</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div> */}

      {/* Blog section */}
      {/* <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="relative">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Learn</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Helpful Resources
            </p>
            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
              malesuada. Eleifend condimentum id viverra nulla.
            </p>
          </div>
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.preview}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name} />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingLength} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Testnet launching Q3 2021
            </p>
            <p className="max-w-xl mt-5 mx-auto text-3xl text-gray-300">
              Mainnet Q4 2021
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
