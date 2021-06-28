import React from 'react';
import {
  CloudUploadIcon,
  RefreshIcon,
  GlobeIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Ethereum Ecosystem Compatible',
    description: 'MetaMask, Etherscan, Solidity and other common Ethereum compatible ecosystem components will work out of the box.',
    icon: CloudUploadIcon,
  },
  {
    name: 'Sustainable',
    description: 'Leveraging a Proof-of-Space consensus engine farmers/miners will use somewhere between 300 and 10,000 times less electricity for the same result as Proof-of-Work.',
    icon: GlobeIcon,
  },
  {
    name: 'Decentralized',
    description: 'To participate in the network all that is required is commonly available commodity hardware.',
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
                  <span className="block">Finally, an EVM ecosystem with a sustainable,</span>
                  <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                    truly decentralized consensus engine.
                  </span>
                </h1>
                <div className="mt-10 sm:mt-12">
                  <p className="mt-3 mb-2 w-full sm:w-1/2 mx-auto lg:mx-0 text-sm text-gray-300 sm:mt-4">
                    Sign up for the latest news.
                  </p>
                  <button
                    type="submit"
                    className="block w-full sm:w-1/2 mx-auto lg:mx-0 py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white  font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    onClick={() => { location.href = 'https://b69f94bd.sibforms.com/serve/MUIEADAUc0WBVDOwB2AKAHJyDb3L5HdyLhxy0434l8EK6wcd3TU8SXHKO6hcZatvm2dAI685GG7o3uCn3O3eBRjPi3bPhKbkdo9aRXxmyrfdUSAr8nNNa-9XIy-rUTH8QxWRyYovwEUuOJrneBfM7ysk9clVsbOCiLdpSvygqrYujEXmGWWXR_wYs6x9YTpLsE9OjAxOEJTa5anq'; }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  A new blockchain and smart transaction platform that is easier to use, more efficient, and secure.
                </p>
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/cloud-illustration-teal-cyan.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section with screenshot */}
      {/* <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Serverless</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              No server? No problem.
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
              malesuada. Eleifend condimentum id viverra nulla.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
              alt=""
            />
          </div>
        </div>
      </div> */}

      {/* Feature section with grid */}
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Sustainable Ethereum</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Everything you love about Ethereum minus the carbon footprint
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Be a part of the decentralized, green future
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

      {/* CTA Section */}
      {/* <div className="relative bg-gray-900">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
            alt=""
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Award winning support
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
            <p className="mt-3 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
              tincidunt duis.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Visit the help center
                  <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Home;
