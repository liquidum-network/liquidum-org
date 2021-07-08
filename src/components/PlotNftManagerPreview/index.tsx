import React from 'react';

const PlotNftManagerPreview: React.FC = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto mt-3">
      <div className="mx-3 mt-4 text-2xl font-semibold">Preview of our plotnft manager Dapp.</div>
      <div className="bg-gray-50 shadow border rounded-lg mt-6">
        <div className="px-4 py-5 sm:px-6 text-xl">
          You can view details, create, and update your plotnfts. Easily view attached pools and total rewards collected.
        </div>
        <div className="bg-gray-100 px-4 py-5 sm:p-6">
          <img className="border p-1 shadow" src="https://firebasestorage.googleapis.com/v0/b/proof-of-sprout.appspot.com/o/static-assets%2Fplot-nft-manager-1.png?alt=media" alt="plotnft manager 1" />
        </div>
      </div>
      <div className="bg-gray-50 shadow border rounded-lg mt-6 mb-3">
        <div className="px-4 py-5 sm:px-6 text-xl">
          {"It's easy to switch pools."} You can search and compare details like pay structure before switching.
        </div>
        <div className="bg-gray-100 px-4 py-5 sm:p-6">
          <img className="border p-1 shadow" src="https://firebasestorage.googleapis.com/v0/b/proof-of-sprout.appspot.com/o/static-assets%2Fplot-nft-manager-2.png?alt=media" alt="plotnft manager 2" />
        </div>
      </div>
    </div>
  );
};

export default PlotNftManagerPreview;